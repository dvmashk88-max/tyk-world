import Hls from 'hls.js/light'
import { useEffect, useRef, useState } from 'react'
import { categories, CategoryId, pickRandom, Place, places, placesByCategory } from './places'

const categoryById = Object.fromEntries(categories.map((category) => [category.id, category])) as Record<CategoryId, (typeof categories)[number]>

function getPlaceFromHash() {
  const match = window.location.hash.match(/^#\/place\/([a-z0-9-]+)$/)
  return match ? places.find((place) => place.id === match[1]) : undefined
}

function App() {
  const [place, setPlace] = useState<Place | undefined>(() => getPlaceFromHash())
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const onHashChange = () => setPlace(getPlaceFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const openRandom = (category?: CategoryId) => {
    const pool = category ? placesByCategory(category) : places
    const next = pickRandom(pool, place?.id)
    setTransitioning(true)
    window.setTimeout(() => {
      window.location.hash = `/place/${next.id}`
      setPlace(next)
      setTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 160)
  }

  if (place) {
    return <Experience key={place.id} place={place} transitioning={transitioning} onAgain={() => openRandom(place.category)} />
  }

  return <Home onChoose={openRandom} />
}

function Home({ onChoose }: { onChoose: (category?: CategoryId) => void }) {
  return (
    <main className="home-shell">
      <header className="topbar">
        <a className="brand" href="#/" aria-label="ТЫК — на главную"><span className="brand-mark">Т</span><span>ТЫК</span></a>
        <span className="counter">10 LIVE</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <p className="eyebrow">Весь мир в одном нажатии</p>
        <h1 id="hero-title">Куда ты<br />попадёшь <em>сейчас?</em></h1>
        <p className="intro">Только проверенные живые камеры. Видео запускается прямо здесь — без переходов на другие сайты.</p>
        <button className="surprise-button" type="button" onClick={() => onChoose()}>
          <span className="dice" aria-hidden="true">🎲</span><span>ТЫК — УДИВИ МЕНЯ</span><span className="arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <section className="category-section" aria-labelledby="categories-title">
        <div className="section-heading"><h2 id="categories-title">Или выбери настроение</h2><span>3 направления</span></div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <button className="category-card" key={category.id} type="button"
              style={{ '--accent': category.color, '--delay': `${index * 45}ms` } as React.CSSProperties}
              onClick={() => onChoose(category.id)}>
              <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
              <span className="category-label">{category.label}</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>

      <footer><span>ТЫК</span> · 10 публичных LIVE-потоков · TOUR и 360° временно отключены</footer>
    </main>
  )
}

function Experience({ place, transitioning, onAgain }: { place: Place; transitioning: boolean; onAgain: () => void }) {
  const category = categoryById[place.category]
  return (
    <main className={`experience-shell ${transitioning ? 'is-changing' : ''}`} style={{ '--accent': category.color } as React.CSSProperties}>
      <header className="experience-header">
        <a className="back-link" href="#/" aria-label="Вернуться на главный экран">← <span>Назад</span></a>
        <a className="brand small" href="#/" aria-label="ТЫК — на главную"><span className="brand-mark">Т</span><span>ТЫК</span></a>
        <span className="header-emoji" aria-hidden="true">{category.emoji}</span>
      </header>

      <article className="place-card">
        <div className="media-frame">
          <div className="media-topline"><span className="type-badge type-live"><i />LIVE</span><span>{place.sourceName}</span></div>
          <LivePlayer place={place} emoji={category.emoji} />
        </div>

        <div className="place-copy">
          <div className="location">◎ {place.location}</div>
          <h1>{place.title}</h1>
          <p>{place.description}</p>
          <div className="source-row"><span className="pulse-dot" aria-hidden="true" /><span>{place.availability}</span></div>
          <a className="source-link" href={place.sourceUrl} target="_blank" rel="noreferrer">Источник: {place.sourceName} ↗</a>
        </div>
      </article>

      <div className="action-dock">
        <button type="button" onClick={onAgain}><span>🎲</span> ЕЩЁ ТЫК</button>
        <span>Следующее: {category.label.toLowerCase()}</span>
      </div>
    </main>
  )
}

type PlaybackState = 'loading' | 'playing' | 'error'

function LivePlayer({ place, emoji }: { place: Place; emoji: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState<PlaybackState>('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | undefined
    let cancelled = false
    setState('loading')

    const startPlayback = () => {
      if (cancelled) return
      video.muted = true
      void video.play().catch(() => {
        if (!cancelled) setState('error')
      })
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = place.streamUrl
      video.addEventListener('loadedmetadata', startPlayback, { once: true })
    } else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
        manifestLoadingTimeOut: 12000,
        fragLoadingTimeOut: 15000,
      })
      hls.loadSource(place.streamUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, startPlayback)
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal && !cancelled) setState('error')
      })
    } else {
      queueMicrotask(() => {
        if (!cancelled) setState('error')
      })
    }

    return () => {
      cancelled = true
      video.pause()
      video.removeAttribute('src')
      video.load()
      hls?.destroy()
    }
  }, [place.streamUrl, attempt])

  return (
    <div className="live-player" data-playback-state={state} data-place-id={place.id}>
      {state === 'loading' && <div className="media-loader"><span>{emoji}</span><p>Подключаем прямой эфир…</p></div>}
      <video ref={videoRef} className={state === 'playing' ? 'is-playing' : ''}
        aria-label={`${place.title} — прямой эфир`} controls muted autoPlay playsInline
        onPlaying={() => setState('playing')}
        onWaiting={() => setState((current) => current === 'error' ? current : 'loading')}
        onError={() => setState('error')} />
      {state === 'error' && (
        <div className="embed-fallback" role="alert"><span aria-hidden="true">📡</span>
          <p>Камера не ответила. Попробуем подключиться заново.</p>
          <button type="button" onClick={() => setAttempt((value) => value + 1)}>Повторить</button>
        </div>
      )}
    </div>
  )
}

export default App

import { useEffect, useMemo, useState } from 'react'
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
        <a className="brand" href="#/" aria-label="ТЫК — на главную">
          <span className="brand-mark">Т</span>
          <span>ТЫК</span>
        </a>
        <span className="counter">30 мест</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <p className="eyebrow">Весь мир в одном нажатии</p>
        <h1 id="hero-title">Куда ты<br />попадёшь <em>сейчас?</em></h1>
        <p className="intro">Живые камеры, круговые панорамы и туры по удивительным местам.</p>
        <button className="surprise-button" type="button" onClick={() => onChoose()}>
          <span className="dice" aria-hidden="true">🎲</span>
          <span>ТЫК — УДИВИ МЕНЯ</span>
          <span className="arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <section className="category-section" aria-labelledby="categories-title">
        <div className="section-heading">
          <h2 id="categories-title">Или выбери настроение</h2>
          <span>6 направлений</span>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <button
              className="category-card"
              key={category.id}
              type="button"
              style={{ '--accent': category.color, '--delay': `${index * 45}ms` } as React.CSSProperties}
              onClick={() => onChoose(category.id)}
            >
              <span className="category-emoji" aria-hidden="true">{category.emoji}</span>
              <span className="category-label">{category.label}</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>

      <footer><span>ТЫК</span> · официальный и публичный контент со всего мира</footer>
    </main>
  )
}

function Experience({ place, transitioning, onAgain }: { place: Place; transitioning: boolean; onAgain: () => void }) {
  const category = categoryById[place.category]
  const [loaded, setLoaded] = useState(false)
  const [slow, setSlow] = useState(false)

  useEffect(() => {
    if (!place.embedUrl) return
    const timeout = window.setTimeout(() => setSlow(true), 8000)
    return () => window.clearTimeout(timeout)
  }, [place])

  const facts = useMemo(() => {
    if (place.type === 'LIVE') return place.availability ?? 'Прямой эфир'
    if (place.type === '360°') return 'Крути обзор пальцем или мышью'
    return 'Самостоятельный виртуальный маршрут'
  }, [place])

  return (
    <main className={`experience-shell ${transitioning ? 'is-changing' : ''}`} style={{ '--accent': category.color } as React.CSSProperties}>
      <header className="experience-header">
        <a className="back-link" href="#/" aria-label="Вернуться на главный экран">← <span>Назад</span></a>
        <a className="brand small" href="#/" aria-label="ТЫК — на главную"><span className="brand-mark">Т</span><span>ТЫК</span></a>
        <span className="header-emoji" aria-hidden="true">{category.emoji}</span>
      </header>

      <article className="place-card">
        <div className="media-frame">
          <div className="media-topline">
            <span className={`type-badge type-${place.type.toLowerCase().replace('°', '')}`}><i />{place.type}</span>
            <span>{place.sourceName}</span>
          </div>

          {place.embedUrl ? (
            <>
              {!loaded && <div className="media-loader"><span>{category.emoji}</span><p>Открываем портал…</p></div>}
              <iframe
                key={place.id}
                className={loaded ? 'is-loaded' : ''}
                src={place.embedUrl}
                title={`${place.title} — ${place.sourceName}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={() => setLoaded(true)}
              />
              {slow && !loaded && (
                <div className="embed-fallback">
                  <p>Поток не отвечает</p>
                  <a href={place.sourceUrl} target="_blank" rel="noreferrer">Открыть у источника ↗</a>
                </div>
              )}
            </>
          ) : (
            <div className="portal-preview">
              <div className="portal-glow" />
              <span className="portal-emoji" aria-hidden="true">{category.emoji}</span>
              <p>Этот источник защищает контент<br />от встраивания</p>
              <a href={place.sourceUrl} target="_blank" rel="noreferrer">Открыть портал <span>↗</span></a>
            </div>
          )}
        </div>

        <div className="place-copy">
          <div className="location">◎ {place.location}</div>
          <h1>{place.title}</h1>
          <p>{place.description}</p>
          <div className="source-row">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{facts}</span>
          </div>
          {place.embedUrl && (
            <a className="source-link" href={place.sourceUrl} target="_blank" rel="noreferrer">
              Официальный источник: {place.sourceName} ↗
            </a>
          )}
        </div>
      </article>

      <div className="action-dock">
        <button type="button" onClick={onAgain}><span>🎲</span> ЕЩЁ ТЫК</button>
        <span>Следующее: {category.label.toLowerCase()}</span>
      </div>
    </main>
  )
}

export default App

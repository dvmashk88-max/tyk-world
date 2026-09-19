import { describe, expect, it } from 'vitest'
import { categories, pickRandom, places, placesByCategory } from './places'

describe('каталог ТЫК', () => {
  it('содержит 10 проверяемых LIVE-точек', () => {
    expect(places).toHaveLength(10)
    for (const category of categories) {
      expect(placesByCategory(category.id).length).toBeGreaterThan(1)
    }
  })

  it('не выдаёт предыдущую точку повторно, когда есть выбор', () => {
    const pool = placesByCategory('nature')
    for (let index = 0; index < 20; index += 1) {
      expect(pickRandom(pool, pool[0].id).id).not.toBe(pool[0].id)
    }
  })

  it('содержит только безопасные публичные https-ссылки', () => {
    for (const place of places) {
      expect(place.sourceUrl).toMatch(/^https:\/\//)
      expect(place.streamUrl).toMatch(/^https:\/\/cdn\.livespotting\.com\/.+\.m3u8$/)
      expect(place.sourceUrl).toMatch(/^https:\/\/www\.livespotting\.tv\//)
    }
  })

  it('не содержит TOUR, 360° и внешних iframe', () => {
    expect(places.every((place) => place.streamUrl.endsWith('.m3u8'))).toBe(true)
  })
})

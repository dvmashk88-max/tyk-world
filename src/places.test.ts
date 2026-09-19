import { describe, expect, it } from 'vitest'
import { categories, pickRandom, places, placesByCategory } from './places'

describe('каталог ТЫК', () => {
  it('содержит ровно 30 точек и по 5 в каждой категории', () => {
    expect(places).toHaveLength(30)
    for (const category of categories) {
      expect(placesByCategory(category.id)).toHaveLength(5)
    }
  })

  it('не выдаёт предыдущую точку повторно, когда есть выбор', () => {
    const pool = placesByCategory('space')
    for (let index = 0; index < 20; index += 1) {
      expect(pickRandom(pool, pool[0].id).id).not.toBe(pool[0].id)
    }
  })

  it('содержит только безопасные публичные https-ссылки', () => {
    for (const place of places) {
      expect(place.sourceUrl).toMatch(/^https:\/\//)
      if (place.embedUrl) expect(place.embedUrl).toMatch(/^https:\/\/www\.youtube-nocookie\.com\/embed\//)
    }
  })
})

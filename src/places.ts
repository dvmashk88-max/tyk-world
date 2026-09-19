export type CategoryId = 'cities' | 'nature' | 'water'

export type Place = {
  id: string
  category: CategoryId
  title: string
  location: string
  description: string
  sourceName: string
  sourceUrl: string
  streamUrl: string
  availability: string
}

export const categories: Array<{ id: CategoryId; label: string; emoji: string; color: string }> = [
  { id: 'cities', label: 'Города LIVE', emoji: '🌃', color: '#45a7ff' },
  { id: 'nature', label: 'Природа LIVE', emoji: '🌄', color: '#ff8a47' },
  { id: 'water', label: 'Вода LIVE', emoji: '🌊', color: '#27c99a' },
]

export const places: Place[] = [
  {
    id: 'bad-pyrmont', category: 'cities', title: 'Парк Бад-Пирмонта', location: 'Бад-Пирмонт, Германия',
    description: 'Исторический курортный парк, прогулочные аллеи и знаменитый источник перед Parkhotel — прямо сейчас.',
    sourceName: 'Livespotting · Parkhotel Pyrmont', sourceUrl: 'https://www.livespotting.tv/deutschland/bad-pyrmont/gw3zezs3',
    streamUrl: 'https://cdn.livespotting.com/vpu/xxurpmsp/gw3zezs3_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'black-forest', category: 'nature', title: 'Чёрный лес', location: 'Бад-Вильдбад, Германия',
    description: 'Зелёная долина у кемпинга Kleinenzhof в северном Шварцвальде — лес, холмы и текущая погода.',
    sourceName: 'Livespotting · Kleinenzhof', sourceUrl: 'https://www.livespotting.tv/deutschland/bad-wildbad-im-schwarzwald/e3vtevl8',
    streamUrl: 'https://cdn.livespotting.com/vpu/qzlr74we/e3vtevl8_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'bremen-weser', category: 'cities', title: 'Бремен и река Везер', location: 'Бремен, Германия',
    description: 'Центр ганзейского Бремена: река Везер, набережная и мост Вильгельма Кайзена без монтажа и задержанных записей.',
    sourceName: 'Livespotting · WFB Bremen', sourceUrl: 'https://www.livespotting.tv/deutschland/bremen/3et0u60j',
    streamUrl: 'https://cdn.livespotting.com/vpu/pmwj9fdl/3et0u60j_hub.m3u8', availability: 'Прямой эфир · 1080p',
  },
  {
    id: 'mueggelsee', category: 'water', title: 'Озеро Мюггельзе', location: 'Берлин, Германия',
    description: 'Самое большое озеро Берлина: вода, паруса и дальняя линия холмов с камеры школы водного спорта.',
    sourceName: 'Livespotting · Surf- und Segelschule', sourceUrl: 'https://www.livespotting.tv/deutschland/berlin/cc225eef',
    streamUrl: 'https://cdn.livespotting.com/vpu/k4s2mr06/cc225eef_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'bad-brueckenau', category: 'nature', title: 'Королевский курорт', location: 'Бад-Брюккенау, Германия',
    description: 'Исторический курортный ансамбль и тихий дворцовый парк в биосферном резервате Рён.',
    sourceName: 'Livespotting · Bayerisches Staatsbad', sourceUrl: 'https://www.livespotting.tv/deutschland/bad-brueckenau/3d2d2tcm',
    streamUrl: 'https://cdn.livespotting.com/vpu/to4d3rza/3d2d2tcm_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'allgaeu-alps', category: 'nature', title: 'Альпы Альгой', location: 'Бад-Хинделанг, Германия',
    description: 'Горные склоны и подъёмники Оберйоха: летом тропы, зимой снег — сейчас, как есть.',
    sourceName: 'Livespotting · Bergbahnen Oberjoch', sourceUrl: 'https://www.livespotting.tv/deutschland/bad-hindelang-oberjoch/edlyww6d',
    streamUrl: 'https://cdn.livespotting.com/vpu/d6se1ryf/edlyww6d_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'pieria-hills', category: 'nature', title: 'Холмы Пиерии', location: 'Алония, Греция',
    description: 'Сельский пейзаж Пиерии у подножия Олимпа: поля, дальние холмы и греческое небо в реальном времени.',
    sourceName: 'Livespotting · Eikonologia', sourceUrl: 'https://www.livespotting.tv/griechenland/alonia/1xueldy2',
    streamUrl: 'https://cdn.livespotting.com/vpu/10d4axm7/1xueldy2_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'wagrain', category: 'nature', title: 'Горы Ваграйна', location: 'Зальцбург, Австрия',
    description: 'Живой вид из Ваграйна на долину и горный рельеф австрийской земли Зальцбург.',
    sourceName: 'Livespotting · Wagrainerhof', sourceUrl: 'https://www.livespotting.tv/oesterreich/wagrain/ami84d84',
    streamUrl: 'https://cdn.livespotting.com/vpu/99nmes50/ami84d84_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'hamburg-kontorhaus', category: 'cities', title: 'Квартал Конторхаус', location: 'Гамбург, Германия',
    description: 'Исторические кирпичные фасады и улицы гамбургского Конторхаусфиртеля — объекта наследия ЮНЕСКО.',
    sourceName: 'Livespotting · Union Investment', sourceUrl: 'https://www.livespotting.tv/deutschland/hamburg/0rv6h4hx',
    streamUrl: 'https://cdn.livespotting.com/vpu/ae9twnah/0rv6h4hx_hub.m3u8', availability: 'Прямой эфир · 720p',
  },
  {
    id: 'jelsa-hvar', category: 'water', title: 'Остров Хвар', location: 'Елса, Хорватия',
    description: 'Средиземноморская Елса на острове Хвар: набережная, лодки и прозрачная бухта в живом 1080p.',
    sourceName: 'Livespotting · Općina Jelsa', sourceUrl: 'https://www.livespotting.tv/kroatien/jelsa/taelb29k',
    streamUrl: 'https://cdn.livespotting.com/vpu/ggazg0ll/taelb29k_hub.m3u8', availability: 'Прямой эфир · 1080p',
  },
]

export const placesByCategory = (category: CategoryId) => places.filter((place) => place.category === category)

export const pickRandom = (pool: Place[], previousId?: string) => {
  const choices = previousId && pool.length > 1 ? pool.filter((item) => item.id !== previousId) : pool
  return choices[Math.floor(Math.random() * choices.length)]
}

export type CategoryId = 'space' | 'wonders' | 'animals' | 'wild' | 'museums' | 'cities'
export type ContentType = 'LIVE' | '360°' | 'TOUR'

export type Place = {
  id: string
  category: CategoryId
  title: string
  location: string
  description: string
  type: ContentType
  sourceName: string
  sourceUrl: string
  embedUrl?: string
  availability?: string
}

export const categories: Array<{ id: CategoryId; label: string; emoji: string; color: string }> = [
  { id: 'space', label: 'Космос', emoji: '🚀', color: '#755cff' },
  { id: 'wonders', label: 'Чудеса света', emoji: '🌍', color: '#27c99a' },
  { id: 'animals', label: 'Животные LIVE', emoji: '🐼', color: '#ff8a47' },
  { id: 'wild', label: 'Дикая планета', emoji: '🌋', color: '#ff4f64' },
  { id: 'museums', label: 'Музеи', emoji: '🏛️', color: '#ffca3a' },
  { id: 'cities', label: 'Города мечты', emoji: '🌃', color: '#45a7ff' },
]

export const places: Place[] = [
  {
    id: 'iss-earth', category: 'space', title: 'Земля с борта МКС', location: 'Орбита Земли', type: 'LIVE',
    description: 'Официальный поток NASA с внешних камер Международной космической станции. Во время потери сигнала экран может временно темнеть.',
    sourceName: 'NASA', sourceUrl: 'https://www.nasa.gov/live/', embedUrl: 'https://www.youtube-nocookie.com/embed/sWasdbDVNvc?autoplay=1&mute=1&playsinline=1',
    availability: 'Прямой эфир; возможны штатные паузы связи',
  },
  {
    id: 'mars-perseverance', category: 'space', title: 'Первый круг по Марсу', location: 'Кратер Езеро, Марс', type: '360°',
    description: 'Первая круговая панорама места посадки Perseverance, собранная NASA/JPL из кадров навигационных камер марсохода.',
    sourceName: 'NASA JPL', sourceUrl: 'https://www.youtube.com/watch?v=wE-aQO9XD1g', embedUrl: 'https://www.youtube-nocookie.com/embed/wE-aQO9XD1g?playsinline=1',
  },
  {
    id: 'eyes-solar-system', category: 'space', title: 'Солнечная система сейчас', location: 'Солнечная система', type: 'TOUR',
    description: 'Интерактивная модель NASA: двигайся между планетами и аппаратами, меняй время и смотри миссии в контексте.',
    sourceName: 'NASA Eyes', sourceUrl: 'https://eyes.nasa.gov/apps/solar-system/',
  },
  {
    id: 'eyes-earth', category: 'space', title: 'Спутники над Землёй', location: 'Околоземная орбита', type: 'TOUR',
    description: 'Интерактив NASA с действующими спутниками наблюдения Земли, их орбитами и данными о нашей планете.',
    sourceName: 'NASA Eyes', sourceUrl: 'https://eyes.nasa.gov/apps/earth/',
  },
  {
    id: 'esa-iss-panorama', category: 'space', title: 'Внутри МКС', location: 'Международная космическая станция', type: '360°',
    description: 'Панорамное путешествие по модулям станции: можно оглядеться и почувствовать, как устроен дом космонавтов.',
    sourceName: 'European Space Agency', sourceUrl: 'https://www.esa.int/ESA_Multimedia/Videos/2021/09/Floating_through_the_Space_Station_in_360', embedUrl: 'https://www.youtube-nocookie.com/embed/YwDeib8Fd3c?playsinline=1',
  },

  {
    id: 'machu-picchu', category: 'wonders', title: 'Мачу-Пикчу', location: 'Перу', type: '360°',
    description: 'Прогулка среди храмов и террас города инков на высоте 2430 метров — через панорамы Google Street View.',
    sourceName: 'Google Street View', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=-13.1631,-72.5450',
  },
  {
    id: 'grand-canyon', category: 'wonders', title: 'Гранд-Каньон', location: 'Аризона, США', type: 'TOUR',
    description: 'Официальные виртуальные маршруты национального парка сквозь почти два миллиарда лет геологической истории.',
    sourceName: 'U.S. National Park Service', sourceUrl: 'https://www.nps.gov/grca/learn/photosmultimedia/virtualtour.htm',
  },
  {
    id: 'great-wall', category: 'wonders', title: 'Великая Китайская стена', location: 'Китай', type: '360°',
    description: 'Панорамная прогулка по одному из самых узнаваемых участков стены среди горных хребтов.',
    sourceName: 'Google Maps', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4319,116.5704',
  },
  {
    id: 'petra', category: 'wonders', title: 'Петра', location: 'Иордания', type: '360°',
    description: 'Пройди через ущелье Сик к высеченной в скале Сокровищнице древнего набатейского города.',
    sourceName: 'Google Maps', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=30.3285,35.4444',
  },
  {
    id: 'taj-mahal', category: 'wonders', title: 'Тадж-Махал', location: 'Агра, Индия', type: '360°',
    description: 'Беломраморный мавзолей, сады и отражающие бассейны — в панорамном виде с главной оси комплекса.',
    sourceName: 'Google Maps', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=27.1751,78.0421',
  },

  {
    id: 'panda-cam', category: 'animals', title: 'Гигантские панды', location: 'Вашингтон, США', type: 'LIVE',
    description: 'Бао Ли и Цин Бао в павильоне Смитсоновского национального зоопарка. Ночью показывают запись последних часов.',
    sourceName: 'Smithsonian National Zoo', sourceUrl: 'https://nationalzoo.si.edu/webcams/panda-cam', availability: 'LIVE с 07:00 до 19:00 ET',
  },
  {
    id: 'brooks-bears', category: 'animals', title: 'Медведи у водопада', location: 'Катмай, Аляска', type: 'LIVE',
    description: 'Бурые медведи ловят лосося у Brooks Falls. Камера особенно активна во время летнего хода рыбы.',
    sourceName: 'Explore.org / Katmai NPS', sourceUrl: 'https://explore.org/livecams/bears/brown-bear-salmon-cam-brooks-falls', availability: 'Сезонный прямой эфир',
  },
  {
    id: 'jelly-cam', category: 'animals', title: 'Танец морских крапив', location: 'Монтерей, Калифорния', type: 'LIVE',
    description: 'Медузы пульсируют в огромном аквариуме Open Sea — почти идеальная живая заставка для спокойного вечера.',
    sourceName: 'Monterey Bay Aquarium', sourceUrl: 'https://www.montereybayaquarium.org/animals/live-cams/jelly-cam', embedUrl: 'https://www.youtube-nocookie.com/embed/m1XcdxjVGos?autoplay=1&mute=1&playsinline=1', availability: 'LIVE ежедневно 07:00–19:00 PT',
  },
  {
    id: 'san-diego-penguins', category: 'animals', title: 'Пингвины на берегу', location: 'Сан-Диего, США', type: 'LIVE',
    description: 'Колония африканских пингвинов в живом эфире одного из крупнейших зоопарков мира.',
    sourceName: 'San Diego Zoo', sourceUrl: 'https://animals.sandiegozoo.org/live-cams', availability: 'Прямой эфир по расписанию зоопарка',
  },
  {
    id: 'monterey-sharks', category: 'animals', title: 'Акулы открытого океана', location: 'Монтерей, Калифорния', type: 'LIVE',
    description: 'Акулы, тунцы и другие обитатели большого аквариума Open Sea проходят прямо перед камерой.',
    sourceName: 'Monterey Bay Aquarium', sourceUrl: 'https://www.montereybayaquarium.org/animals/live-cams/shark-cam', availability: 'Прямой эфир по местному расписанию',
  },

  {
    id: 'kilauea', category: 'wild', title: 'Вулкан Килауэа', location: 'Гавайи, США', type: 'LIVE',
    description: 'Официальные камеры USGS следят за кратером и лавовыми полями одного из самых активных вулканов Земли.',
    sourceName: 'USGS Hawaiian Volcano Observatory', sourceUrl: 'https://www.usgs.gov/volcanoes/kilauea/webcams', availability: 'Камеры обновляются постоянно',
  },
  {
    id: 'old-faithful', category: 'wild', title: 'Гейзер Old Faithful', location: 'Йеллоустон, США', type: 'LIVE',
    description: 'Поворотная камера ждёт следующего извержения знаменитого гейзера и показывает бассейн Верхних гейзеров.',
    sourceName: 'Yellowstone National Park', sourceUrl: 'https://www.nps.gov/yell/learn/photosmultimedia/webcams.htm', availability: 'Прямой эфир в светлое время суток',
  },
  {
    id: 'noaa-ocean', category: 'wild', title: 'Экспедиция в глубины океана', location: 'Мировой океан', type: 'LIVE',
    description: 'Когда судно NOAA в экспедиции, сюда приходит видео с подводных аппаратов — прямо с неизведанного дна.',
    sourceName: 'NOAA Ocean Exploration', sourceUrl: 'https://oceanexplorer.noaa.gov/livestreams/welcome.html', availability: 'LIVE только во время экспедиций',
  },
  {
    id: 'aurora', category: 'wild', title: 'Северное сияние', location: 'Манитоба, Канада', type: 'LIVE',
    description: 'Камера смотрит в тёмное северное небо неподалёку от Черчилла. Лучшее время — ясные ночи сезона сияний.',
    sourceName: 'Explore.org / Polar Bears International', sourceUrl: 'https://explore.org/livecams/zen-den/northern-lights-cam', availability: 'Сезонный ночной эфир',
  },
  {
    id: 'cayman-reef', category: 'wild', title: 'Коралловый риф Кайманов', location: 'Каймановы острова', type: 'LIVE',
    description: 'Подводная камера показывает риф и его случайных гостей без постановки и монтажа.',
    sourceName: 'Explore.org / The Nature Conservancy', sourceUrl: 'https://explore.org/livecams/underwater-cams/cayman-reef-cam', availability: 'Круглосуточный эфир, видимость зависит от моря',
  },

  {
    id: 'louvre', category: 'museums', title: 'Лувр онлайн', location: 'Париж, Франция', type: 'TOUR',
    description: 'Официальные виртуальные маршруты по залам, выставкам и архитектуре самого посещаемого музея мира.',
    sourceName: 'Musée du Louvre', sourceUrl: 'https://www.louvre.fr/en/online-tours',
  },
  {
    id: 'smithsonian-natural-history', category: 'museums', title: 'Смитсоновский музей', location: 'Вашингтон, США', type: 'TOUR',
    description: 'Самостоятельная прогулка зал за залом: динозавры, океан, минералы и десятки панорамных экспозиций.',
    sourceName: 'Smithsonian NMNH', sourceUrl: 'https://naturalhistory.si.edu/visit/virtual-tour',
  },
  {
    id: 'vatican', category: 'museums', title: 'Сикстинская капелла', location: 'Ватикан', type: '360°',
    description: 'Официальная круговая панорама позволяет рассмотреть фрески Микеланджело от пола до свода.',
    sourceName: 'Vatican Museums', sourceUrl: 'https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.html',
  },
  {
    id: 'british-museum', category: 'museums', title: 'Британский музей', location: 'Лондон, Великобритания', type: 'TOUR',
    description: 'Виртуальные галереи охватывают два миллиона лет человеческой истории — от Египта до Японии.',
    sourceName: 'British Museum', sourceUrl: 'https://www.britishmuseum.org/british-museum-home',
  },
  {
    id: 'met-360', category: 'museums', title: 'The Met 360°', location: 'Нью-Йорк, США', type: '360°',
    description: 'Серия официальных круговых видео переносит в Большой зал, Клойстерс и другие пространства музея.',
    sourceName: 'The Metropolitan Museum of Art', sourceUrl: 'https://www.metmuseum.org/art/online-features/met-360-project',
  },

  {
    id: 'sydney-opera', category: 'cities', title: 'Сиднейская опера изнутри', location: 'Сидней, Австралия', type: '360°',
    description: 'Официальный 360°-тур по залам и сценам знаменитого здания между репетициями и выступлениями.',
    sourceName: 'Sydney Opera House', sourceUrl: 'https://www.youtube.com/watch?v=_hunddVoMjo', embedUrl: 'https://www.youtube-nocookie.com/embed/_hunddVoMjo?playsinline=1',
  },
  {
    id: 'times-square', category: 'cities', title: 'Таймс-сквер сейчас', location: 'Нью-Йорк, США', type: 'LIVE',
    description: 'Неон, жёлтые такси и бесконечный поток Манхэттена с одной из самых известных городских камер мира.',
    sourceName: 'EarthCam', sourceUrl: 'https://www.earthcam.com/usa/newyork/timessquare/', availability: 'Прямой эфир',
  },
  {
    id: 'shibuya', category: 'cities', title: 'Перекрёсток Сибуя', location: 'Токио, Япония', type: '360°',
    description: 'Окажись в центре самого узнаваемого пешеходного перекрёстка Токио и оглянись на город вокруг.',
    sourceName: 'Google Maps', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=35.6595,139.7005',
  },
  {
    id: 'venice', category: 'cities', title: 'Венеция у Гранд-канала', location: 'Венеция, Италия', type: '360°',
    description: 'Панорамная прогулка по набережной и мостам города, где вместо улиц — вода.',
    sourceName: 'Google Maps', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.4379,12.3359',
  },
  {
    id: 'paris-eiffel', category: 'cities', title: 'Париж с Эйфелевой башни', location: 'Париж, Франция', type: '360°',
    description: 'Поднимись виртуально над Марсовым полем и посмотри на крыши Парижа с главного символа города.',
    sourceName: 'Google Street View', sourceUrl: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=48.8584,2.2945',
  },
]

export const placesByCategory = (category: CategoryId) => places.filter((place) => place.category === category)

export const pickRandom = (pool: Place[], previousId?: string) => {
  const choices = previousId && pool.length > 1 ? pool.filter((item) => item.id !== previousId) : pool
  return choices[Math.floor(Math.random() * choices.length)]
}

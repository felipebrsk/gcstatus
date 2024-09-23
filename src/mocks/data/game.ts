import { faker } from '@faker-js/faker'

import { GameDetails } from '@/types'

export const MOCK_GAME_DETAILS: GameDetails = {
  id: 1,
  cover: 'https://images5.alphacoders.com/112/thumb-1920-1129255.jpg',
  title: 'Black Myth: Wukong',
  slug: 'black-myth-wukong',
  release: '2024-09-01',
  age: 14,
  about: `Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature.
      You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.
      <br><br><img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/extras/img_steamline.png?t=1725007201" className="w-full" /><br><br><img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/extras/SteamGIF_Scene.gif?t=1725007201" />
      <h2 class="bb_tag">• Explore a Land of Vast Wonders</h2><br><i>&quot;A world unseen, where wonders gleam,<br>And with each stride, a new scene streams.&quot;</i><br><br>Enter a fascinating realm filled with the wonders and discoveries of ancient Chinese mythology!<br>
      As the Destined One, you shall traverse an array of breathtaking and distinctive landscapes from the classic tale, composing an epic of adventure that is seen anew.<br><br><br><img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/extras/SteamGIF_Boss.gif?t=1725007201" />
      <h2 class="bb_tag">• Confront Mighty Foes, Old and New</h2><br><i>&quot;Heroic Monkey, might and fame, <br>Adversaries rise, to test his name.&quot;</i><br><br>One of the major highlights of Journey to the West is its diverse cast of adversaries, each with their unique strengths.<br>
      As the Destined One, you will encounter powerful foes and worthy rivals throughout your journey. Fearlessly engage them in epic battles where surrender is not an option.<br><br><br><img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/extras/SteamGIF_Battle.gif?t=1725007201" />
      <h2 class="bb_tag">• Temper Your Mastery of Varied Spells</h2><br><i>&quot;Spells unbound, talents in play,<br>Unleashed abilities seize the day.&quot;</i><br><br>Spells, transformations, and magic vessels of all manifestations, in which some counteract while others amplify, have long been iconic combat elements of Chinese mythology.
      <br>As the Destined One, aside from mastering various staff techniques, you can also freely combine different spells, abilities, weapons, and equipment to find a winning strategy that best suits your combat style.<br><br><br><img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/extras/SteamGIF_NPC.gif?t=1725007201" />
      <h2 class="bb_tag">• Discover Heartfelt Tales Behind Every Facade</h2><br><i>&quot;Within all souls, both wild and tame,<br>There thrives a tale of life's fierce flame.&quot;</i><br><br>Beneath the ferocity and craftiness of your foes lies an engaging tapestry of their origins, personalities, and motivations waiting to be revealed.<br>
      As the Destined One, you will uncover the stories behind a variety of characters, delving beyond your battles with them to taste the love, hate, greed, and fury they once held and still carry within.`,
  short_description: `Black Myth: Wukong is an action RPG that draws on Chinese
      mythology. Fight through a richly detailed world inspired
      by ancient Chinese literature.`,
  website: 'https://www.heishenhua.com/',
  views_count: 97857,
  hearts_count: 20492,
  badge: 'hot',
  crack: {
    id: 1,
    status: 'Uncracked',
    torrent: null,
    cracked_at: null,
    by: null,
    protection: {
      id: 1,
      name: 'Denuvo',
    },
  },
  messages: [
    {
      id: 1,
      message:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, recusandae repudiandae quia itaque, animi quasi iste atque porro nisi sit suscipit consequatur autem deserunt vel deleniti quae harum aliquam aliquid?',
      created_at: '2024-09-01T14:52:00.000Z',
      updated_at: '2024-09-01T14:52:00.000Z',
      by: {
        id: 1,
        name: 'Player 1',
        email: 'dev@dev.com',
        nickname: 'theplayer1',
        birthdate: '2000-03-25',
        experience: faker.number.int(),
        level: faker.number.int(),
        created_at: '2024-01-01T00:00:00.000Z',
        updated_at: '2024-01-01T00:00:00.000Z',
        profile: {
          photo:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2199',
          share: true,
        },
        wallet: {
          id: 1,
          amount: faker.number.int(),
        },
      },
      replies: [
        {
          id: 1,
          message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, recusandae repudiandae quia itaque, animi quasi iste atque porro nisi sit suscipit consequatur autem deserunt vel deleniti quae harum aliquam aliquid?',
          created_at: '2024-09-01T15:00:00.000Z',
          updated_at: '2024-09-01T15:00:00.000Z',
          by: {
            id: 1,
            name: 'Player 2',
            email: 'dev2@dev.com',
            nickname: 'theplayer2',
            experience: faker.number.int(),
            level: faker.number.int(),
            birthdate: '2000-03-25',
            created_at: '2024-01-01T00:00:00.000Z',
            updated_at: '2024-01-01T00:00:00.000Z',
            profile: {
              share: true,
            },
            wallet: {
              id: 1,
              amount: faker.number.int(),
            },
          },
          replies: [],
        },
      ],
    },
  ],
  galleries: [
    {
      id: 1,
      path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1725007201',
      thumbnail:
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/ss_86c4b7462bba219a0d0b89931a35812b9f188976.600x338.jpg?t=1725007201',
      media_type: { id: 1, name: 'photo' },
    },
    {
      id: 2,
      path: 'http://video.akamai.steamstatic.com/store_trailers/257048125/movie_max.mp4?t=1724238304',
      thumbnail:
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257048125/movie.293x165.jpg?t=1724238304',
      media_type: { id: 2, name: 'video' },
    },
  ],
  reviews: [
    {
      id: 1,
      played: true,
      rate: 5,
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!`,
      user: {
        id: 1,
        name: 'Player 1',
        email: 'dev@dev.com',
        experience: faker.number.int(),
        level: faker.number.int(),
        nickname: 'theplayer1',
        birthdate: '2000-03-25',
        created_at: '2024-01-01T00:00:00.000Z',
        updated_at: '2024-01-01T00:00:00.000Z',
        profile: {
          photo:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2199',
          share: true,
        },
        wallet: {
          id: 1,
          amount: faker.number.int(),
        },
      },
    },
    {
      id: 2,
      played: false,
      rate: 3.5,
      comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!`,
      user: {
        id: 2,
        name: 'Player 2',
        email: 'dev2@dev.com',
        experience: faker.number.int(),
        level: faker.number.int(),
        nickname: 'theplayer2',
        birthdate: '2000-03-25',
        created_at: '2024-01-01T00:00:00.000Z',
        updated_at: '2024-01-01T00:00:00.000Z',
        profile: {
          photo:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2199',
          share: true,
        },
        wallet: {
          id: 1,
          amount: faker.number.int(),
        },
      },
    },
    {
      id: 3,
      played: false,
      rate: 2.5,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!',
      user: {
        id: 3,
        name: 'Player 3',
        email: 'dev3@dev.com',
        nickname: 'theplayer3',
        experience: faker.number.int(),
        level: faker.number.int(),
        birthdate: '2000-03-25',
        created_at: '2024-01-01T00:00:00.000Z',
        updated_at: '2024-01-01T00:00:00.000Z',
        profile: {
          photo:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2199',
          share: true,
        },
        wallet: {
          id: 1,
          amount: faker.number.int(),
        },
      },
    },
    {
      id: 4,
      played: true,
      rate: 2,
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium praesentium architecto quis iusto aut et non facere, incidunt quo corrupti? Quibusdam ipsum voluptate quaerat distinctio ea. Quasi, debitis maiores!',
      user: {
        id: 4,
        name: 'Player 4',
        email: 'dev4@dev.com',
        nickname: 'theplayer4',
        experience: faker.number.int(),
        level: faker.number.int(),
        birthdate: '2000-03-25',
        created_at: '2024-01-01T00:00:00.000Z',
        updated_at: '2024-01-01T00:00:00.000Z',
        profile: {
          photo:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2199',
          share: true,
        },
        wallet: {
          id: 1,
          amount: faker.number.int(),
        },
      },
    },
  ],
  dlcs: [
    {
      id: 1,
      release: '2024-08-19',
      name: 'Black Myth: Wukong Deluxe Edition Upgrade',
      cover:
        'https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-1t5ca.jpg',
      galleries: [
        {
          id: 1,
          path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_fda62ee2e4ead7eac83ef0e825c6a644d6d38fa2.1920x1080.jpg?t=1725007043',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_fda62ee2e4ead7eac83ef0e825c6a644d6d38fa2.600x338.jpg?t=1725007043',
          media_type: { id: 1, name: 'photo' },
        },
        {
          id: 2,
          path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1725007043',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.600x338.jpg?t=1725007043',
          media_type: { id: 1, name: 'photo' },
        },
        {
          id: 3,
          path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_fda62ee2e4ead7eac83ef0e825c6a644d6d38fa2.1920x1080.jpg?t=1725007043',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_fda62ee2e4ead7eac83ef0e825c6a644d6d38fa2.600x338.jpg?t=1725007043',
          media_type: { id: 1, name: 'photo' },
        },
        {
          id: 4,
          path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1725007043',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.600x338.jpg?t=1725007043',
          media_type: { id: 1, name: 'photo' },
        },
        {
          id: 5,
          path: 'http://video.akamai.steamstatic.com/store_trailers/257048125/movie_max.mp4?t=1724238304',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257048125/movie.293x165.jpg?t=1724238304',
          media_type: { id: 2, name: 'video' },
        },
        {
          id: 6,
          path: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.1920x1080.jpg?t=1725007043',
          thumbnail:
            'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2672610/ss_86c4b7462bba219a0d0b89931a35812b9f188976.600x338.jpg?t=1725007043',
          media_type: { id: 1, name: 'photo' },
        },
      ],
      platforms: [
        { id: 1, slug: 'ps5', name: 'PS5' },
        { id: 3, slug: 'pc', name: 'PC' },
        { id: 4, slug: 'xbox-series-s', name: 'Xbox Series S' },
        { id: 5, slug: 'xbox-series-x', name: 'Xbox Series X' },
        { id: 6, slug: 'geforce-now', name: 'GeForce Now' },
      ],
      categories: [
        { id: 1, slug: 'single-player', name: 'Single-player' },
        {
          id: 2,
          slug: 'downloadable-content',
          name: 'Downloadable Content',
        },
      ],
      genres: [
        { id: 1, slug: 'action', name: 'Action' },
        { id: 2, slug: 'adventure', name: 'Adventure' },
        { id: 8, slug: 'rpg', name: 'RPG' },
        { id: 9, slug: 'souls', name: 'Souls' },
      ],
      companies: [
        {
          id: 1,
          name: 'Steam',
          slug: 'steam',
          url: 'https://store.steampowered.com/app/2672610/Black_Myth_Wukong__Atualizacao_para_Edicao_Digital_Deluxe/',
          country: 'Bellevue, Washington',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png',
          company_game_id: '2672610',
          price: 5000,
        },
      ],
    },
  ],
  tags: [
    { id: 13, slug: 'souls', name: 'Souls' },
    { id: 12, slug: 'uncracked', name: 'Uncracked' },
    { id: 9, slug: 'denuvo', name: 'Denuvo' },
    { id: 8, slug: 'rpg', name: 'RPG' },
    { id: 1, slug: 'action', name: 'Action' },
    { id: 2, slug: 'adventure', name: 'Adventure' },
    { id: 3, slug: 'single-player', name: 'Single-player' },
    { id: 4, slug: 'fantasy', name: 'Fantasy' },
    { id: 5, slug: 'mythologic', name: 'Mythologic' },
  ],
  publishers: [
    {
      id: 1,
      name: 'Game Science',
      acting: true,
      created_at: '2020-08-01T08:00:00.000Z',
    },
  ],
  developers: [
    {
      id: 1,
      name: 'Game Science',
      acting: true,
      created_at: '2020-08-01T08:00:00.000Z',
    },
  ],
  critics: [
    {
      id: 1,
      logo: 'https://w7.pngwing.com/pngs/41/567/png-transparent-metacritic-video-game-review-aggregator-app-miscellaneous-game-text.png',
      name: 'Metacritic',
      rate: 7.9,
      url: 'https://www.metacritic.com/game/black-myth-wukong/',
      created_at: '2024-08-19T00:00:00.000Z',
    },
  ],
  languages: [
    {
      id: 1,
      iso: 'zh-cn',
      name: 'Simplified Chinese',
      dubs: true,
      menu: true,
      subtitles: true,
    },
    {
      id: 2,
      iso: 'en-us',
      name: 'English',
      dubs: true,
      menu: true,
      subtitles: true,
    },
    {
      id: 3,
      iso: 'pt-br',
      name: 'Brazilian Portuguese',
      dubs: false,
      menu: true,
      subtitles: true,
    },
  ],
  companies: [
    {
      id: 1,
      name: 'Steam',
      slug: 'steam',
      country: 'Bellevue, Washington',
      url: 'https://store.steampowered.com/app/2358720/Black_Myth_Wukong/',
      company_game_id: '2358720',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png',
      price: 22999,
    },
    {
      id: 2,
      name: 'Epic Games',
      slug: 'epic-games',
      country: 'Cary, North Carolina',
      url: 'https://store.epicgames.com/pt-BR/p/black-myth-wukong-87a72b/',
      company_game_id: 'black-myth-wukong-87a72b',
      logo: 'https://w7.pngwing.com/pngs/787/226/png-transparent-epic-games-logo-icons-logos-emojis-iconic-brands.png',
      price: 22999,
    },
  ],
  categories: [],
  platforms: [
    { id: 1, slug: 'ps5', name: 'PS5' },
    { id: 3, slug: 'pc', name: 'PC' },
    { id: 4, slug: 'xbox-series-s', name: 'Xbox Series S' },
    { id: 5, slug: 'xbox-series-x', name: 'Xbox Series X' },
    { id: 6, slug: 'geforce-now', name: 'GeForce Now' },
  ],
  genres: [
    { id: 1, slug: 'action', name: 'Action' },
    { id: 2, slug: 'adventure', name: 'Adventure' },
    { id: 3, slug: 'single-player', name: 'Single-player' },
    { id: 4, slug: 'fantasy', name: 'Fantasy' },
    { id: 5, slug: 'mythologic', name: 'Mythologic' },
    { id: 9, slug: 'souls', name: 'Souls' },
  ],
  requirements: [
    {
      id: 1,
      bits: 64,
      cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
      ram: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
      dx: 'Version 11',
      rom: '130 GB available space',
      so: 'Windows 10 64-bit',
      obs: 'HDD Supported, SSD Recommended. The above specifications were tested with DLSS/FSR/XeSS enabled.',
      type: { id: 1, name: 'minimum', type: 'windows' },
    },
    {
      id: 2,
      bits: 64,
      cpu: 'Intel Core i7-9700 / AMD Ryzen 5 5500',
      ram: '16 GB RAM',
      gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT / INTEL Arc A750',
      dx: 'Version 12',
      rom: '130 GB available space',
      so: 'Windows 10 64-bit',
      obs: 'SSD Required. The above specifications were tested with DLSS/FSR/XeSS enabled.',
      type: { id: 2, name: 'recommended', type: 'windows' },
    },
  ],
  torrents: [
    {
      id: 1,
      posted_in: '2024-02-09T00:00:00.000Z',
      url: 'https://google.com',
      provider: {
        id: 1,
        name: 'FitGirl Repacks',
        url: 'https://google.com',
      },
    },
  ],
}

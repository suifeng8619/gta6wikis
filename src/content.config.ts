import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// characters（角色）
// ============================================================
const characters = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/characters' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    fullName: z.string(),
    gender: z.enum(['male', 'female', 'unknown']),
    race: z.string(),
    nationality: z.string(),
    age: z.string(),
    voiceActor: z.string(),
    role: z.enum(['protagonist', 'supporting', 'antagonist', 'npc']),
    affiliation: z.string(),
    firstAppearance: z.string(),
    status: z.enum(['alive', 'deceased', 'unknown']),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// vehicles（载具）
// ============================================================
const vehicles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vehicles' }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      'supercar',
      'sports',
      'muscle',
      'sedan',
      'suv',
      'compact',
      'motorcycle',
      'boat',
      'plane',
      'helicopter',
      'emergency',
      'commercial',
      'military',
      'special',
      'public-transport',
    ]),
    manufacturer: z.string(),
    realWorldCounterpart: z.string(),
    speed: z.number().min(0).max(100).optional(),
    acceleration: z.number().min(0).max(100).optional(),
    handling: z.number().min(0).max(100).optional(),
    braking: z.number().min(0).max(100).optional(),
    customizable: z.boolean(),
    firstAppearance: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// weapons（武器）
// ============================================================
const weapons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weapons' }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      'pistol',
      'smg',
      'assault-rifle',
      'shotgun',
      'sniper-rifle',
      'lmg',
      'melee',
      'throwable',
      'heavy',
      'special',
    ]),
    damage: z.number().min(0).max(100).optional(),
    accuracy: z.number().min(0).max(100).optional(),
    fireRate: z.number().min(0).max(100).optional(),
    range: z.number().min(0).max(100).optional(),
    capacity: z.number().optional(),
    realWorldCounterpart: z.string(),
    customizable: z.boolean(),
    firstAppearance: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// locations（地点）
// ============================================================
const locations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    region: z.enum(['vice-city', 'leonida-state', 'leonida-keys', 'other']),
    district: z.string().optional(),
    realWorldCounterpart: z.string(),
    area: z.string(),
    activities: z.array(z.string()),
    landmarks: z.array(z.string()),
    atmosphere: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// radio（电台）
// ============================================================
const radio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/radio' }),
  schema: z.object({
    title: z.string(),
    game: z.enum(['gta6', 'gta-vice-city', 'gta5']),
    genre: z.string(),
    dj: z.string().optional(),
    djVoiceActor: z.string().optional(),
    songs: z
      .array(
        z.object({
          title: z.string(),
          artist: z.string(),
        })
      )
      .optional(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// series（系列游戏）
// ============================================================
const series = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/series' }),
  schema: z.object({
    title: z.string(),
    releaseDate: z.string(),
    platforms: z.array(z.string()),
    developer: z.string(),
    publisher: z.string(),
    protagonist: z.string(),
    setting: z.string(),
    city: z.string(),
    metacriticScore: z.number().optional(),
    salesData: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// guides（攻略）
// ============================================================
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'walkthrough',
      'tips',
      'money',
      'collectibles',
      'cheats',
      'vehicles',
      'weapons',
      'online',
      'general',
    ]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
  }),
});

// ============================================================
// news（新闻）
// ============================================================
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['official', 'leak', 'analysis', 'community', 'update']),
    author: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string().max(160),
    keywords: z.array(z.string()),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    featured: z.boolean().default(false),
  }),
});

// ============================================================
// Export all collections
// ============================================================
export const collections = {
  characters,
  vehicles,
  weapons,
  locations,
  radio,
  series,
  guides,
  news,
};

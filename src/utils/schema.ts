import { SITE_NAME, SITE_URL } from './seo';

// ----------------------------------------------------------------
// Type definitions
// ----------------------------------------------------------------

export interface ArticleData {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  url?: string;
}

export interface PersonData {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// ----------------------------------------------------------------
// Schema generators
// ----------------------------------------------------------------

/**
 * Generates Article schema.org JSON-LD object.
 */
export function generateArticleSchema(data: ArticleData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    ...(data.image ? { image: data.image } : {}),
    datePublished: data.datePublished,
    dateModified: data.dateModified ?? data.datePublished,
    ...(data.url ? { url: data.url } : {}),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Generates Person schema.org JSON-LD object.
 * Used for GTA 6 characters/NPCs.
 */
export function generatePersonSchema(data: PersonData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.image ? { image: data.image } : {}),
    memberOf: {
      '@type': 'Organization',
      name: 'GTA VI',
    },
  };
}

/**
 * Generates FAQPage schema.org JSON-LD object.
 */
export function generateFAQSchema(questions: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema.org JSON-LD object.
 * Items are listed in order; position is auto-assigned starting at 1.
 *
 * Example:
 *   generateBreadcrumbSchema([
 *     { name: 'Home', url: 'https://gta6wikis.com/' },
 *     { name: 'Characters', url: 'https://gta6wikis.com/characters/' },
 *     { name: 'Lucia', url: 'https://gta6wikis.com/characters/lucia/' },
 *   ])
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

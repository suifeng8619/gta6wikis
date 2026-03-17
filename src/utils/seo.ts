export const SITE_NAME = 'GTA6 Wikis';
export const SITE_URL = 'https://gta6wikis.com';
export const DEFAULT_DESCRIPTION =
  'The most comprehensive GTA 6 Wiki — characters, weapons, missions, locations, and everything you need to know about Grand Theft Auto VI.';

/**
 * Generates a full page title with site suffix.
 * Example: generateTitle('Lucia') => 'Lucia | GTA6 Wikis'
 */
export function generateTitle(title: string): string {
  if (!title || title.trim() === '') {
    return SITE_NAME;
  }
  return `${title.trim()} | ${SITE_NAME}`;
}

/**
 * Generates a canonical URL from a path.
 * Normalizes to use trailing slash and https.
 * Example: generateCanonical('/characters/lucia') => 'https://gta6wikis.com/characters/lucia/'
 */
export function generateCanonical(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = cleanPath.endsWith('/')
    ? cleanPath
    : `${cleanPath}/`;
  return `${SITE_URL}${withTrailingSlash}`;
}

/**
 * Generates an OG image URL for a given title.
 * Uses a static og-image endpoint or falls back to a default banner.
 * Example: generateOgImageUrl('Lucia') => 'https://gta6wikis.com/og/lucia.png'
 */
export function generateOgImageUrl(title: string): string {
  if (!title || title.trim() === '') {
    return `${SITE_URL}/images/og-default.jpg`;
  }
  const slug = title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return `${SITE_URL}/og/${slug}.png`;
}

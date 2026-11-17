export const LOCALES = ['pt-br', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt-br';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'pt-br' || value === 'en';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'pt-br' ? 'en' : 'pt-br';
}

export function localizePath(locale: Locale, subPath = ''): string {
  const clean = subPath.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const withoutLeadingSlash = currentPathname.replace(/^\/+/, '');
  const segments = withoutLeadingSlash.split('/');
  if (segments.length > 0 && isLocale(segments[0])) {
    const rest = segments.slice(1).join('/');
    return localizePath(targetLocale, rest);
  }
  return localizePath(targetLocale);
}

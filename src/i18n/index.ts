import es from './es';
import en from './en';

export type Locale = 'es' | 'en';
export type Dict = typeof es;

const dicts: Record<Locale, Dict> = { es, en: en as unknown as Dict };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

export const LOCALES: Locale[] = ['es', 'en'];

import { labels } from './ui';

const defaultLang = 'es';

export function useTranslations(lang: keyof typeof labels) {
  const currentLang = labels[lang] ? lang : defaultLang;

  return function translate(key: string): string {
    return (
      labels[currentLang]?.[key as keyof typeof labels[typeof defaultLang]] ??
      labels[defaultLang]?.[key as keyof typeof labels[typeof defaultLang]] ??
      key
    );
  }
}

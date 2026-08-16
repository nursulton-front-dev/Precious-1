import type { Lang, TranslationKey } from '../i18n/translations';

export type LocalizedText = Record<Lang, string>;

export interface Category {
  id: string;
  icon: string;
  nameKey: TranslationKey;
  countKey: TranslationKey;
}

export interface ProductSpecs {
  speed?: string;
  needle?: string;
  stitch?: string;
  system?: string;
  lube?: string;
  motor?: string;
  weight?: string;
}

export interface Product {
  id: string;
  category: string;
  model: string;
  image: string;
  tagline: LocalizedText;
  description: LocalizedText;
  specs: ProductSpecs;
}

export interface BlogPost {
  icon: string;
  catKey: TranslationKey;
  dateKey: TranslationKey;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}

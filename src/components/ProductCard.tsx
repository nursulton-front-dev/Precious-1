import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORIES } from '../data/categories';
import type { Product } from '../data/types';
import { Icon } from './icons';

export function ProductCard({ product }: { product: Product }) {
  const { t, lang } = useLanguage();
  const category = CATEGORIES.find((c) => c.id === product.category);

  return (
    <motion.div
      className="group h-full"
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[border-color,box-shadow] duration-300 group-hover:border-brand-red/30 group-hover:shadow-[0_22px_44px_-14px_rgba(216,1,16,0.22)]"
      >
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-white">
          {category && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-black px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
              {t(category.nameKey)}
            </span>
          )}
          <img
            src={product.image}
            alt={product.model}
            className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-brand-red text-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <Icon name="arrow" className="h-4 w-4 -rotate-45" />
          </span>
        </div>
        <div className="flex flex-1 flex-col border-t border-gray-200 p-4.5 pb-5">
          <h3 className="mb-1.5 text-[16px] font-semibold transition-colors duration-300 group-hover:text-brand-red">
            {product.model}
          </h3>
          <p className="mb-4 line-clamp-2 flex-1 text-[13px] text-gray-600">
            {product.tagline[lang] ?? product.tagline.uz}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold uppercase tracking-wide text-brand-red">
            {t('product_more')}
            <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

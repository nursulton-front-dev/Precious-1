import { forwardRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Reveal } from './Reveal';
import { getProducts } from '../services/productService';
import type { Product } from '../data/types';

export const ProductsSection = forwardRef<HTMLDivElement, { activeCategory: string; onCategoryChange: (id: string) => void }>(
  function ProductsSection({ activeCategory, onCategoryChange }, ref) {
    const { t } = useLanguage();
    const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);

    useEffect(() => {
      getProducts().then((fetched) => {
        if (fetched && fetched.length > 0) {
          setProductsList(fetched);
        }
      });
    }, []);

    const list = activeCategory === 'all' ? productsList : productsList.filter((p) => p.category === activeCategory);

    return (
      <section id="hits" ref={ref} className="py-20 md:py-24">
        <div className="mx-auto max-w-[1220px] px-6">
          <Reveal className="mx-auto mb-10 max-w-[640px] text-center">
            <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
              <span className="h-[3px] w-7 rounded bg-brand-red" />
              {t('hits_eyebrow')}
            </div>
            <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
              {t('hits_title')}
            </h2>
            <p className="mt-3.5 text-[16px] text-gray-600">{t('hits_text')}</p>
          </Reveal>

          <Reveal delay={0.1} className="mb-9 flex flex-wrap justify-center gap-2.5">
            <FilterTab active={activeCategory === 'all'} onClick={() => onCategoryChange('all')}>
              {t('filter_all')}
            </FilterTab>
            {CATEGORIES.map((cat) => (
              <FilterTab key={cat.id} active={activeCategory === cat.id} onClick={() => onCategoryChange(cat.id)}>
                {t(cat.nameKey)}
              </FilterTab>
            ))}
          </Reveal>

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  }
);

function FilterTab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-[13.5px] font-bold uppercase tracking-wide transition-all duration-200 ${
        active
          ? 'border-brand-red bg-brand-red text-white'
          : 'border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red hover:shadow-sm'
      }`}
    >
      {children}
    </button>
  );
}

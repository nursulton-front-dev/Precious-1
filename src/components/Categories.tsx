import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { CATEGORIES } from '../data/categories';
import { Icon } from './icons';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export function Categories({ onSelect }: { onSelect: (categoryId: string) => void }) {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <span className="h-[3px] w-7 rounded bg-brand-red" />
            {t('cat_eyebrow')}
          </div>
          <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
            {t('cat_title')}
          </h2>
          <p className="mt-3.5 text-[16px] text-gray-600">{t('cat_text')}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-4.5 sm:grid-cols-3 lg:grid-cols-6" stagger={0.07}>
          {CATEGORIES.map((cat) => (
            <RevealItem key={cat.id}>
              <motion.button
                onClick={() => onSelect(cat.id)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="group w-full rounded-2xl border border-gray-200 bg-white px-5 py-7.5 text-center transition-[border-color,box-shadow] duration-300 hover:border-brand-red hover:shadow-[0_18px_36px_-14px_rgba(216,1,16,0.25)]"
              >
                <div className="mx-auto mb-4.5 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-brand-red-light transition-all duration-300 group-hover:rotate-6 group-hover:bg-brand-red">
                  <Icon name={cat.icon} className="h-7.5 w-7.5 text-brand-red transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-[14.5px] font-semibold leading-tight">{t(cat.nameKey)}</h3>
                <span className="text-[12.5px] text-gray-600">{t(cat.countKey)}</span>
              </motion.button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

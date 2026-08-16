import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { BLOG_POSTS } from '../data/blog';
import { Icon } from './icons';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

export function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <span className="h-[3px] w-7 rounded bg-brand-red" />
            {t('blog_eyebrow')}
          </div>
          <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
            {t('blog_title')}
          </h2>
          <p className="mt-3.5 text-[16px] text-gray-600">{t('blog_text')}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {BLOG_POSTS.map((post) => (
            <RevealItem key={post.titleKey}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-brand-red/25 hover:shadow-[0_20px_40px_-16px_rgba(22,23,27,0.18)]"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-white">
                  <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-brand-red px-2.5 py-1 text-[10.5px] font-bold uppercase text-white">
                    {t(post.catKey)}
                  </span>
                  <Icon
                    name={post.icon}
                    className="w-[44%] text-brand-red/70 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-5.5">
                  <span className="text-[12.5px] font-semibold uppercase tracking-wide text-gray-400">{t(post.dateKey)}</span>
                  <h3 className="my-2.5 text-[17px] font-semibold leading-snug transition-colors duration-300 group-hover:text-brand-red">
                    {t(post.titleKey)}
                  </h3>
                  <p className="mb-3.5 text-[14px] text-gray-600">{t(post.textKey)}</p>
                  <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-red">
                    {t('blog_read')}
                    <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </span>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

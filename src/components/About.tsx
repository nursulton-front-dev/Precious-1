import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { Icon } from './icons';
import { Reveal } from './Reveal';
import storeImg from '../assets/store-front.jpg';

const CHECK_KEYS = ['about_check_1', 'about_check_2', 'about_check_3', 'about_check_4'] as const;

export function About() {
  const { t } = useLanguage();
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 130, damping: 20 }}
          className="group relative mx-auto w-full max-w-[420px] lg:mx-0"
        >
          <div ref={frameRef} className="aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <motion.img
              style={{ y: imgY }}
              src={storeImg}
              alt="PRECIOUS Store Front"
              className="h-[115%] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 flex max-w-[240px] items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg sm:-right-4"
          >
            <Icon name="badge" className="h-8 w-8 flex-shrink-0 text-brand-red" />
            <div>
              <b className="font-head block text-xl text-black">{t('about_stat_num')}</b>
              <span className="block text-xs font-medium leading-tight text-gray-600">{t('about_stat_text')}</span>
            </div>
          </motion.div>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <span className="h-[3px] w-7 rounded bg-brand-red" />
            {t('about_eyebrow')}
          </div>
          <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
            {t('about_title')}
          </h2>
          <p className="mt-4 mb-3.5 text-[16px] text-gray-600">{t('about_p1')}</p>
          <p className="mb-3.5 text-[16px] text-gray-600">{t('about_p2')}</p>

          <div className="my-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {CHECK_KEYS.map((key) => (
              <div key={key} className="flex items-start gap-2.5 text-[14.5px] font-semibold">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" />
                <span>{t(key)}</span>
              </div>
            ))}
          </div>

          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-transparent bg-brand-red px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25"
          >
            {t('hero_btn_contact')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

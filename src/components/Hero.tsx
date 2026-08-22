import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import { Icon } from './icons';
import type { IconName } from './icons';
import { Counter } from './Counter';
import { RevealGroup, RevealItem } from './Reveal';
import heroImg from '../assets/store-front.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const FEATURES: { icon: IconName; key: TranslationKey }[] = [
  { icon: 'badge', key: 'hero_feature_1' },
  { icon: 'truck', key: 'hero_feature_2' },
  { icon: 'gear', key: 'hero_feature_3' },
  { icon: 'headset', key: 'hero_feature_4' },
];

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 38, mass: 0.4 });

  const contentY = useTransform(smoothProgress, [0, 0.28], [0, -170]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const imgY = useTransform(smoothProgress, [0, 1], ['0%', '-8%']);
  const chevronOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  return (
    <>
      <section ref={sectionRef} id="home" className="relative flex min-h-screen items-center overflow-hidden text-white">
        <motion.img
          style={{ y: imgY }}
          src={heroImg}
          alt="PRECIOUS Showroom"
          className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover object-[65%_50%] sm:object-[55%_50%] lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="relative z-10 mx-auto flex w-full max-w-[960px] flex-col items-center px-6 pt-[82px] text-center will-change-transform"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4.5 py-2 backdrop-blur-md shadow-lg"
          >
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[12px] sm:text-[13.5px] font-bold uppercase tracking-wider text-white">
              {t('hero_badge_tag')}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-head text-[38px] font-semibold uppercase leading-[1.05] tracking-wide text-white sm:text-[54px] lg:text-[64px]"
          >
            <span>{t('hero_title_1')}</span>
            <span className="text-brand-red">{t('hero_title_2')}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/80"
          >
            {t('hero_text')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#hits"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-[14.5px] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30"
            >
              {t('hero_btn_catalog')}
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-[14.5px] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              {t('hero_btn_contact')}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-9 gap-y-4"
          >
            {FEATURES.map((f) => (
              <div key={f.key} className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-white/75">
                <Icon name={f.icon} className="h-[18px] w-[18px] text-brand-red" />
                {t(f.key)}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll down"
          style={{ opacity: chevronOpacity }}
          initial={{ y: -6 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-8 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-white hover:text-white"
        >
          <Icon name="chevron" className="h-4 w-4" />
        </motion.a>
      </section>

      <div className="border-b border-gray-200 bg-white">
        <RevealGroup className="mx-auto grid max-w-[1220px] grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0" stagger={0.1}>
          {(['stat_1', 'stat_2', 'stat_3', 'stat_4'] as const).map((s) => (
            <RevealItem key={s} className="px-2.5 py-7 text-center transition-colors duration-200 hover:bg-gray-50">
              <Counter value={t(`${s}_num` as TranslationKey)} className="font-head block text-[26px] text-black sm:text-[32px]" />
              <span className="text-[12.5px] uppercase tracking-wide text-gray-500">{t(`${s}_text` as TranslationKey)}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </>
  );
}

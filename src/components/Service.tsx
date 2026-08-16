import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import { Icon } from './icons';
import type { IconName } from './icons';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

const SERVICES: { icon: IconName; titleKey: TranslationKey; textKey: TranslationKey }[] = [
  { icon: 'badge', titleKey: 'service_1_title', textKey: 'service_1_text' },
  { icon: 'truck', titleKey: 'service_2_title', textKey: 'service_2_text' },
  { icon: 'wrench', titleKey: 'service_3_title', textKey: 'service_3_text' },
  { icon: 'gear', titleKey: 'service_4_title', textKey: 'service_4_text' },
  { icon: 'headset', titleKey: 'service_5_title', textKey: 'service_5_text' },
  { icon: 'users', titleKey: 'service_6_title', textKey: 'service_6_text' },
];

export function Service() {
  const { t } = useLanguage();

  return (
    <section id="service" className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <span className="h-[3px] w-7 rounded bg-brand-red" />
            {t('service_eyebrow')}
          </div>
          <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
            {t('service_title')}
          </h2>
          <p className="mt-3.5 text-[16px] text-gray-600">{t('service_text')}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {SERVICES.map((service) => (
            <RevealItem key={service.titleKey}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-transparent hover:shadow-[0_20px_40px_-16px_rgba(22,23,27,0.18)]"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-black transition-colors duration-300 group-hover:bg-brand-red">
                  <Icon name={service.icon} className="h-6.5 w-6.5 text-brand-red transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-2.5 text-[16px] font-semibold">{t(service.titleKey)}</h3>
                <p className="text-[14.5px] text-gray-600">{t(service.textKey)}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

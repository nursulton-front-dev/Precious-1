import { useLanguage } from '../i18n/LanguageContext';
import { CONTACT } from '../data/contact';
import { Icon } from './icons';
import { Reveal } from './Reveal';

const INFO_ITEMS = [
  { icon: 'pin', labelKey: 'contact_address_label', valueKey: 'contact_address_val', isLink: true, href: CONTACT.yandexMap, external: true },
  { icon: 'phone', labelKey: 'contact_phone_label', rawValue: CONTACT.phone, isLink: true, href: CONTACT.phoneHref, external: false },
  { icon: 'mail', labelKey: 'contact_email_label', rawValue: CONTACT.email, isLink: true, href: `mailto:${CONTACT.email}`, external: false },
  { icon: 'clock', labelKey: 'contact_hours_label', valueKey: 'contact_hours_val', isLink: false, href: '', external: false },
] as const;

const QR_ITEMS = [
  {
    name: 'Telegram',
    icon: 'telegram',
    href: CONTACT.telegram,
    color: '#229ED9',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    href: CONTACT.whatsapp,
    color: '#25D366',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: CONTACT.instagram,
    color: '#E4405F',
  },
] as const;

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="bg-gray-100 py-20 md:py-24">
      <div className="mx-auto max-w-[1220px] px-6">
        <Reveal className="mb-12 max-w-[640px]">
          <div className="mb-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <span className="h-[3px] w-7 rounded bg-brand-red" />
            {t('contact_eyebrow')}
          </div>
          <h2 className="font-head text-[28px] font-semibold uppercase leading-[1.15] tracking-wide text-black sm:text-[36px]">
            {t('contact_title')}
          </h2>
          <p className="mt-3.5 text-[16px] text-gray-600">{t('contact_text')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} as="div">
            <div className="mb-8 flex flex-col gap-5.5">
              {INFO_ITEMS.map((item) => {
                const text = 'rawValue' in item ? item.rawValue : t(item.valueKey as 'contact_address_val');
                return (
                  <div key={item.labelKey} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-brand-red/20 bg-brand-red-light">
                      <Icon name={item.icon} className="h-5 w-5 text-brand-red" />
                    </div>
                    <div>
                      <b className="mb-0.5 block text-[15px] text-black">{t(item.labelKey)}</b>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-[14px] font-medium text-gray-600 hover:text-brand-red transition-colors"
                        >
                          {text}
                        </a>
                      ) : (
                        <span className="text-[14px] text-gray-600">{text}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[14px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white hover:shadow-md"
              >
                <Icon name="telegram" className="h-5 w-5 text-[#229ED9] group-hover:text-white transition-colors" />
                <span>{CONTACT.telegramHandle}</span>
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[14px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:shadow-md"
              >
                <Icon name="instagram" className="h-5 w-5 text-[#E4405F] group-hover:text-white transition-colors" />
                <span>{CONTACT.instagramHandle}</span>
              </a>
            </div>

            <a
              href={CONTACT.yandexMap}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 block overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div style={{ filter: 'grayscale(.3) contrast(1.05)' }}>
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Tashkent,Uzbekistan&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-70 w-full border-0 pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-[14px] font-bold text-black shadow-lg backdrop-blur-sm transition-transform group-hover:scale-105">
                  <Icon name="pin" className="h-4 w-4 text-brand-red" />
                  Yandex Maps &rarr;
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal
            delay={0.15}
            as="div"
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <form
              action={`mailto:${CONTACT.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field label={t('form_name')} name="name" placeholder={t('form_name_ph')} type="text" />
                <Field label={t('form_phone')} name="phone" placeholder={t('form_phone_ph')} type="tel" />
              </div>
              <div className="mb-3.5">
                <label className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-wide text-gray-600">
                  {t('form_message')}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t('form_message_ph')}
                  className="w-full resize-y rounded-lg border border-gray-200 bg-white px-3.5 py-3 text-[14.5px] text-black placeholder:text-gray-400 transition-colors duration-200 focus:border-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/10"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-brand-red px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25"
              >
                {t('form_submit')}
              </button>
            </form>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <span className="mb-3.5 block text-center sm:text-left text-[12.5px] font-semibold uppercase tracking-wider text-gray-500">
                {t('contact_qr_title')}
              </span>
              <div className="grid grid-cols-3 gap-3">
                {QR_ITEMS.map((qr) => {
                  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(qr.href)}`;
                  return (
                    <a
                      key={qr.name}
                      href={qr.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-gray-50/60 p-2.5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white p-1 shadow-inner group-hover:border-gray-200">
                        <img
                          src={qrUrl}
                          alt={`${qr.name} QR Code`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[12px] font-bold text-gray-700 group-hover:text-black">
                        <Icon name={qr.icon} className="h-3.5 w-3.5 flex-shrink-0 transition-colors" style={{ color: qr.color }} />
                        <span>{qr.name}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type }: { label: string; name: string; placeholder: string; type: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12.5px] font-semibold uppercase tracking-wide text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="rounded-lg border border-gray-200 bg-white px-3.5 py-3 text-[14.5px] text-black placeholder:text-gray-400 transition-colors duration-200 focus:border-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/10"
      />
    </div>
  );
}

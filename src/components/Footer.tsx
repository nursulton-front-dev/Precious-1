import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { CATEGORIES } from '../data/categories';
import { CONTACT } from '../data/contact';
import { Logo } from './Logo';
import { Icon } from './icons';

export function Footer() {
  const { t, lang, setLang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 text-gray-600">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="color" className="mb-4 h-8 w-auto" />
          <p className="max-w-[280px] text-[14px] text-gray-500">{t('footer_text')}</p>
        </div>

        <div>
          <h4 className="mb-4.5 text-[14px] font-semibold tracking-wide text-black">{t('footer_col1')}</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#about" className="text-[14px] text-gray-500 hover:text-brand-red">{t('nav_about')}</a></li>
            <li><a href="#categories" className="text-[14px] text-gray-500 hover:text-brand-red">{t('nav_catalog')}</a></li>
            <li><a href="#service" className="text-[14px] text-gray-500 hover:text-brand-red">{t('nav_service')}</a></li>
            <li><a href="#contacts" className="text-[14px] text-gray-500 hover:text-brand-red">{t('nav_contacts')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4.5 text-[14px] font-semibold tracking-wide text-black">{t('footer_col2')}</h4>
          <ul className="flex flex-col gap-2.5">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <a href="#hits" className="text-[14px] text-gray-500 hover:text-brand-red">
                  {t(cat.nameKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4.5 text-[14px] font-semibold tracking-wide text-black">{t('footer_col3')}</h4>
          <ul className="flex flex-col gap-2.5 text-[14px] text-gray-500">
            <li>
              <a
                href={CONTACT.yandexMap}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-red flex items-start gap-1.5 transition-colors"
              >
                <Icon name="pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-red" />
                <span>{t('contact_address_val')}</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-brand-red font-semibold text-black flex items-center gap-1.5 transition-colors">
                <Icon name="phone" className="h-4 w-4 text-brand-red" />
                <span>{CONTACT.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-red flex items-center gap-1.5 transition-colors">
                <Icon name="mail" className="h-4 w-4 text-brand-red" />
                <span>{CONTACT.email}</span>
              </a>
            </li>
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-gray-700 hover:text-[#229ED9] transition-colors"
            >
              <Icon name="telegram" className="h-4.5 w-4.5 text-[#229ED9]" />
              <span>{CONTACT.telegramHandle}</span>
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-gray-700 hover:text-[#E4405F] transition-colors"
            >
              <Icon name="instagram" className="h-4.5 w-4.5 text-[#E4405F]" />
              <span>{CONTACT.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-2.5 px-6 py-5.5 text-[13px] text-gray-500">
          <span>
            &copy; {year} PRECIOUS. {t('footer_rights')}
          </span>
          <div className="flex gap-3.5">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[13px] font-bold ${lang === l.code ? 'text-brand-red' : 'text-gray-400'}`}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

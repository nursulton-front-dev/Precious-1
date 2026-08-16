import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { Logo } from './Logo';
import { Icon } from './icons';
import { CONTACT } from '../data/contact';

const NAV_ITEMS = [
  { key: 'nav_home', hash: '#home' },
  { key: 'nav_about', hash: '#about' },
  { key: 'nav_catalog', hash: '#categories' },
  { key: 'nav_service', hash: '#service' },
  { key: 'nav_hits', hash: '#hits' },
  { key: 'nav_blog', hash: '#blog' },
  { key: 'nav_contacts', hash: '#contacts' },
] as const;

function LangSwitch({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  if (compact) {
    return (
      <div className="flex gap-2">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`rounded border px-3 py-1.5 text-xs font-bold ${
              lang === l.code ? 'border-brand-red text-brand-red' : 'border-gray-200 text-brand-ink'
            }`}
          >
            {l.code.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-md border px-3 py-2 text-[13.5px] font-bold transition-colors duration-300 ${
          light ? 'border-white/35 text-white' : 'border-gray-200 text-brand-ink'
        }`}
      >
        <span>{lang.toUpperCase()}</span>
        <Icon name="chevron" className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute right-0 top-[calc(100%+8px)] min-w-[130px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1.5 opacity-0'
        }`}
      >
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => {
              setLang(l.code);
              setOpen(false);
            }}
            className={`block w-full px-3.5 py-2.5 text-left text-[13.5px] font-semibold hover:bg-gray-100 ${
              lang === l.code ? 'text-brand-red' : 'text-brand-ink'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // Transparent over the hero photo only on the homepage, before scrolling.
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-gray-200/70 bg-white/75 shadow-[0_8px_30px_-12px_rgba(22,23,27,0.15)] backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1220px] items-center justify-between gap-10 px-6">
          <Link to="/" className="flex flex-shrink-0 items-center">
            <Logo variant={transparent ? 'white' : 'color'} className="h-8 w-auto transition-all duration-300" />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={`/${item.hash}`}
                className={`relative py-1.5 text-[14.5px] font-semibold uppercase tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-red after:transition-all hover:after:w-full ${
                  transparent ? 'text-white' : 'text-brand-ink'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-4">
            <div className="hidden xl:block">
              <LangSwitch light={transparent} />
            </div>

            <div className={`hidden flex-col text-[13px] transition-colors duration-300 2xl:flex ${transparent ? 'text-white/70' : 'text-gray-600'}`}>
              <span>{t('header_phone_label')}</span>
              <a
                href={CONTACT.phoneHref}
                className={`text-[15px] font-bold transition-colors duration-300 ${transparent ? 'text-white' : 'text-black'}`}
              >
                {CONTACT.phone}
              </a>
            </div>

            <a
              href="/#contacts"
              className="hidden rounded-full border-2 border-transparent bg-brand-red px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25 md:inline-flex"
            >
              {t('header_cta')}
            </a>

            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="flex flex-col gap-1.5 p-1.5 xl:hidden"
            >
              <span className={`h-0.5 w-6 rounded transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-black'}`} />
              <span className={`h-0.5 w-6 rounded transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-black'}`} />
              <span className={`h-0.5 w-6 rounded transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-black'}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[105] bg-black/40 transition-opacity lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[110] w-[78%] max-w-[320px] overflow-y-auto bg-white p-6 shadow-2xl transition-transform lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setMobileOpen(false)} aria-label="Close" className="mb-5 text-2xl leading-none">
          &times;
        </button>
        <Link to="/" className="mb-5 inline-flex" onClick={() => setMobileOpen(false)}>
          <Logo className="h-8 w-auto" />
        </Link>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            href={`/${item.hash}`}
            onClick={() => setMobileOpen(false)}
            className="block border-b border-gray-200 py-3.5 text-[15px] font-bold uppercase"
          >
            {t(item.key)}
          </a>
        ))}
        <div className="mt-4 flex flex-col gap-4">
          <LangSwitch compact />

          <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-[15px] font-bold text-black hover:text-brand-red">
              <Icon name="phone" className="h-4 w-4 text-brand-red" />
              {CONTACT.phone}
            </a>
            <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-semibold text-gray-700 hover:text-[#229ED9]">
              <Icon name="telegram" className="h-4 w-4 text-[#229ED9]" />
              {CONTACT.telegramHandle}
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-semibold text-gray-700 hover:text-[#E4405F]">
              <Icon name="instagram" className="h-4 w-4 text-[#E4405F]" />
              {CONTACT.instagramHandle}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

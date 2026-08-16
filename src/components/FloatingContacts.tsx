import { CONTACT } from '../data/contact';
import { Icon } from './icons';

export function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={CONTACT.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#229ED9]/40"
      >
        <Icon name="telegram" className="h-6 w-6" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-[13px] font-semibold text-white shadow-md transition-all group-hover:block">
          Telegram {CONTACT.telegramHandle}
        </span>
      </a>

      <a
        href={CONTACT.phoneHref}
        aria-label="Call Us"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-brand-red/40"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-red/30" />
        <Icon name="phone" className="relative z-10 h-5.5 w-5.5" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-[13px] font-semibold text-white shadow-md transition-all group-hover:block">
          {CONTACT.phone}
        </span>
      </a>
    </div>
  );
}

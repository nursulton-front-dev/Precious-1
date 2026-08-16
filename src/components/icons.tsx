import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const icons: Record<string, (props: IconProps) => React.JSX.Element> = {
  machine: (props) => (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="14" y="150" width="192" height="14" rx="4" fill="currentColor" opacity=".12" />
      <path d="M30 150V96c0-8 6-14 14-14h34l10-18h58c17 0 30 12 34 28l6 22" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
      <path d="M30 150h158v-6c0-9-7-16-16-16H46c-9 0-16 7-16 16v6z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <circle cx="150" cy="70" r="10" stroke="currentColor" strokeWidth="6" />
      <path d="M150 80v18M150 98l-14 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M136 118v14" stroke="#D80110" strokeWidth="6" strokeLinecap="round" />
      <rect x="60" y="128" width="46" height="10" rx="3" stroke="currentColor" strokeWidth="5" />
      <circle cx="170" cy="46" r="14" stroke="currentColor" strokeWidth="6" />
      <path d="M170 40v12l8 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  ),

  catLockstitch: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 2v14M12 16l-4-4M12 16l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.8" /></svg>
  ),
  catOverlock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M4 12c0-4 3-7 7-7 3 0 5 2 5 4s-2 4-5 4-5 2-5 4 2 4 5 4c4 0 7-3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  catInterlock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="9" width="7" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="9" width="7" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.8" /><path d="M10 12.5h4" stroke="currentColor" strokeWidth="1.8" /></svg>
  ),
  catSpecial: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  catHeavy: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /><path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),

  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" fill="#FFE9EA" /><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  chevron: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),

  badge: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 2l7 4v6c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
  ),
  truck: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="2" y="7" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.8" /><path d="M14 10h4l3 3v3h-7v-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  wrench: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M14.5 6.5a4 4 0 00-5.4 5l-6 6 2 2 6-6a4 4 0 005-5.4l-2.6 2.6-2-2 2.6-2.6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
  ),
  gear: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" /><path d="M12 4v2.2M12 17.8V20M20 12h-2.2M6.2 12H4M17.3 6.7l-1.5 1.5M8.2 15.8l-1.5 1.5M17.3 17.3l-1.5-1.5M8.2 8.2 6.7 6.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),
  headset: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M4 13v-1a8 8 0 0116 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><rect x="2.5" y="13" width="4.5" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.7" /><rect x="17" y="13" width="4.5" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.7" /><path d="M19 19v.5a3 3 0 01-3 3h-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  ),
  users: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M16 5.2a3.2 3.2 0 010 6.2M21 20c0-2.8-2-5.1-4.6-5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),

  pin: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" /></svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 006 6l1.5-2 4.5 1.5V19c0 1.1-.9 2-2 2C10.6 21 3 13.4 3 6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  ),

  telegram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M21 4L3 11l6 2m12-9l-4 16-6-5m10-11l-10 9" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M17.5 14.3c-.4-.2-2.3-1.1-2.7-1.3-.4-.2-.6-.2-.9.2-.3.4-.9 1.3-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.2.5C3.1 4.3 2 5.4 2 7.7c0 2.3 1.7 4.5 1.9 4.8.2.3 3.3 5.1 8 7.1 1.1.5 2 .8 2.7 1 .1 0 2.2.9 3.5.7.8-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.7-.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M3.5 17.5L2 22l4.6-1.4A9.9 9.9 0 103.5 17.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.3" cy="6.7" r="1" fill="currentColor" /></svg>
  ),
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M14 21v-8h3l.5-3.5H14V7.2c0-1 .4-1.7 1.9-1.7H17.5V2.2C17 2.1 15.9 2 14.7 2 12 2 10.3 3.6 10.3 6.6V9.5H7V13h3.3v8h3.7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),

  blogA: (props) => (
    <svg viewBox="0 0 100 80" fill="none" {...props}><rect x="14" y="14" width="72" height="52" rx="3" stroke="currentColor" strokeWidth="3" /><path d="M22 50l14-14 12 10 14-16 16 14" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><circle cx="34" cy="30" r="5" stroke="currentColor" strokeWidth="3" /></svg>
  ),
  blogB: (props) => (
    <svg viewBox="0 0 100 80" fill="none" {...props}><path d="M50 12v10M50 58v10M78 40h10M12 40h10M69 21l-7 7M38 52l-7 7M69 59l-7-7M38 28l-7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><circle cx="50" cy="40" r="14" stroke="currentColor" strokeWidth="3" /></svg>
  ),
  blogC: (props) => (
    <svg viewBox="0 0 100 80" fill="none" {...props}><path d="M20 60V30l30-16 30 16v30" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M36 60V42h28v18" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component {...props} />;
}

import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';
import logoRed from '../assets/logo-red.png';

/** variant="white" for dark backgrounds, variant="red" for red logo, variant="color" (default) for light backgrounds. */
export function Logo({ variant = 'color', className = '' }: { variant?: 'color' | 'white' | 'red'; className?: string }) {
  const src = variant === 'white' ? logoWhite : variant === 'red' ? logoRed : logoBlack;
  return <img src={src} alt="PRECIOUS" className={className} />;
}

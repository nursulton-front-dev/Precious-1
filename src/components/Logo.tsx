import logoWhite from '../assets/logo-white.png';
import logoBlack from '../assets/logo-black.png';

/** variant="white" for dark backgrounds, variant="color" (default) for light backgrounds. */
export function Logo({ variant = 'color', className = '' }: { variant?: 'color' | 'white'; className?: string }) {
  return <img src={variant === 'white' ? logoWhite : logoBlack} alt="PRECIOUS" className={className} />;
}

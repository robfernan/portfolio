import React from 'react';
import { cn } from './cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'accent';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const variants: Record<string, string> = {
    default: 'bg-theme-primary text-white hover:brightness-90 px-4 py-2',
    ghost: 'bg-transparent text-theme-primary px-3 py-1',
    accent: 'bg-theme-accent text-white px-4 py-2',
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export default Button;

import React from 'react';
import { cn } from './cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col text-sm text-theme-secondary dark:text-theme-secondary-dark">
      {label && <span className="mb-1">{label}</span>}
      <input
        className={cn('rounded-md border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark px-3 py-2 text-theme-secondary dark:text-theme-secondary-dark focus:ring-2 focus:ring-theme-action dark:focus:ring-theme-action-dark', className)}
        {...props}
      />
    </label>
  );
}

export default Input;

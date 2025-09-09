import React from 'react';
import { cn } from './cn';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-lg border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-4 shadow-sm', className)}>
      {children}
    </div>
  );
}

export default Card;

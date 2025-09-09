import React from 'react';
import ReactDOM from 'react-dom';
import { cn } from './cn';

export function Dialog({ open, onClose, children }: { open: boolean; onClose(): void; children: React.ReactNode }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className={cn('relative z-10 rounded-lg p-6 bg-theme-card dark:bg-theme-card-dark w-full max-w-lg')}>{children}</div>
    </div>,
    document.body
  );
}

export default Dialog;

import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300 flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}

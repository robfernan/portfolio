import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { Button } from '../ui/Button';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300 flex flex-col">
      <header className="bg-theme-header dark:bg-theme-header-dark shadow transition-colors duration-300">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-xl font-bold text-theme-primary dark:text-theme-primary-dark">Robert Fernandez</Link>
            <Link to="/projects" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">Projects</Link>
            <Link to="/art" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">Art</Link>
            <Link to="/aviationpro" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">Aviation</Link>
            <Link to="/streaming" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">Streaming</Link>
            <Link to="/blog" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">Blog</Link>
            <Link to="/ui" className="text-theme-secondary dark:text-theme-secondary-dark hover:underline">UI</Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</Button>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

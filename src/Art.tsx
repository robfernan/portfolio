import React from 'react';

export default function Art() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-theme-primary dark:text-theme-primary-dark">Art & Design</h1>
      <p className="mb-8 text-theme-secondary dark:text-theme-secondary-dark">A selection of my graphic design, digital art, and UI/UX work. See more on my art platforms below.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-3">
          <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-card/0 rounded"></div>
          <h4 className="mt-3 text-theme-primary dark:text-theme-primary-dark font-semibold">Car UI Concept</h4>
          <p className="text-sm text-theme-secondary dark:text-theme-secondary-dark">A minimal instrument cluster concept focused on readability and low distraction.</p>
        </div>
        <div className="rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-3">
          <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-card/0 rounded"></div>
          <h4 className="mt-3 text-theme-primary dark:text-theme-primary-dark font-semibold">Album Cover Series</h4>
          <p className="text-sm text-theme-secondary dark:text-theme-secondary-dark">A series of stylized covers exploring texture and color.</p>
        </div>
        <div className="rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-3">
          <div className="h-40 bg-gradient-to-br from-theme-accent/10 to-theme-card/0 rounded"></div>
          <h4 className="mt-3 text-theme-primary dark:text-theme-primary-dark font-semibold">Comic Reader UI</h4>
          <p className="text-sm text-theme-secondary dark:text-theme-secondary-dark">Reader layout optimized for panels and pacing.</p>
        </div>
      </div>

      <div className="mt-8">
        <a href="#" className="inline-block px-3 py-2 rounded bg-theme-action dark:bg-theme-action-dark text-white">View full gallery</a>
      </div>

      <div className="mt-8 border-t border-theme-accent/20 dark:border-theme-accent-dark/20 pt-6">
        <h3 className="text-lg font-semibold mb-3 text-theme-primary dark:text-theme-primary-dark">Find me on</h3>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.pinterest.com/fernandez7466/_profile/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest profile" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C7.03 2 3 6.03 3 11c0 3.08 1.77 5.74 4.36 7.01-.06-.6-.11-1.52.02-2.18.12-.6.8-3.84.8-3.84s-.2-.4-.2-1c0-.94.54-1.64 1.21-1.64.57 0 .85.43.85.95 0 .58-.37 1.44-.56 2.24-.16.67.34 1.22 1.02 1.22 1.22 0 2.15-1.28 2.15-3.12 0-1.63-1.17-2.77-2.84-2.77-1.93 0-3.08 1.45-3.08 2.95 0 .58.22 1.2.5 1.54.05.06.06.12.05.19-.06.2-.19.66-.22.75-.03.12-.11.14-.25.08-.93-.43-1.51-1.77-1.51-2.85 0-2.33 1.69-4.46 4.88-4.46 2.56 0 4.55 1.83 4.55 4.27 0 2.54-1.6 4.58-3.82 4.58-.75 0-1.46-.39-1.7-.85l-.46 1.76c-.16.62-.6 1.4-.89 1.88C9.86 21.86 11.88 22.5 14 22.5c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
            <span>Pinterest</span>
          </a>
          <a href="https://www.artstation.com/robertfernandez7" target="_blank" rel="noopener noreferrer" aria-label="ArtStation profile" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.657 2H3v7.348l3.007-3.007 3.58 3.58L8.58 13.39l3.4 3.4L21 5.404V2zM2 21h13.657L2 7.343V21z"/></svg>
            <span>ArtStation</span>
          </a>
          <a href="https://robertfernandez1.wordpress.com/" target="_blank" rel="noopener noreferrer" aria-label="WordPress blog" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.07 15.25c-.33.2-.81.36-1.34.36-1.02 0-1.83-.54-2.64-1.53l-1.2-1.45-1.2 1.44c-.87 1.06-1.65 1.6-2.88 1.6-.5 0-1.02-.08-1.38-.28 1.44-1.85 2.32-3.69 3.05-6.14l.12-.36.12.36c.83 2.71 2.05 4.78 3.13 6.08.63-.67 1.3-1.91 1.9-3.46l.16-.4.17.41c.62 1.49 1.08 2.79 1.45 3.67z"/></svg>
            <span>WordPress</span>
          </a>
          <a href="https://www.behance.net/robertfern5088" target="_blank" rel="noopener noreferrer" aria-label="Behance profile" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 12c0-1.1.9-2 2-2h1v4H7c-1.1 0-2-.9-2-2zm0-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2H9c-1.1 0-2-.9-2-2zM7 18c-1.1 0-2-.9-2-2s.9-2 2-2h2v4H7zM13 8h3c1.1 0 2 .9 2 2s-.9 2-2 2h-3V8z"/></svg>
            <span>Behance</span>
          </a>
          <a href="https://mungdaal321.itch.io/" target="_blank" rel="noopener noreferrer" aria-label="Itch.io profile" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 3.22 1.55 6.07 3.92 7.86L12 22l6.08-2.14C20.45 18.07 22 15.22 22 12c0-5.52-4.48-10-10-10zM8 11.5c0-1.38 1.12-2.5 2.5-2.5S13 10.12 13 11.5 11.88 14 10.5 14 8 12.88 8 11.5z"/></svg>
            <span>Itch.io</span>
          </a>
          <a href="https://www.deviantart.com/rober321" target="_blank" rel="noopener noreferrer" aria-label="DeviantArt profile" className="flex items-center gap-2 px-3 py-2 rounded bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark text-theme-secondary dark:text-theme-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.5 3c-2.48 0-4.5 2.02-4.5 4.5S10.02 12 12.5 12 17 9.98 17 7.5 14.98 3 12.5 3zm-7 7c-1.1 0-2 .9-2 2v6h14v-2c0-2.21-1.79-4-4-4H5.5z"/></svg>
            <span>DeviantArt</span>
          </a>
        </div>
      </div>
    </div>
  );
}

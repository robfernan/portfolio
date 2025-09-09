import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-theme-primary dark:text-theme-primary-dark">Blog</h1>
      <p className="mb-8 text-theme-secondary dark:text-theme-secondary-dark">Read my latest posts and updates, or visit my full blog on Wordpress.</p>
      <a href="https://robertfernandez1.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-theme-action dark:text-theme-action-dark hover:underline">Visit my Wordpress Blog</a>
    </div>
  );
}

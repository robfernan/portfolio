import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-theme-accent/20 border-t-theme-accent dark:border-theme-accent-dark/20 dark:border-t-theme-accent-dark ${sizeClasses[size]} ${className}`} />
  );
}

export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`skeleton rounded ${className}`} />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="project-item mb-4 p-3 rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark flex items-start gap-4 animate-pulse">
      <div className="project-image flex-shrink-0 w-36 h-24 bg-theme-bg dark:bg-theme-bg-dark rounded overflow-hidden">
        <LoadingSkeleton className="w-full h-full" />
      </div>
      <div className="project-description flex-1 space-y-2">
        <LoadingSkeleton className="h-5 w-3/4" />
        <LoadingSkeleton className="h-4 w-full" />
        <LoadingSkeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
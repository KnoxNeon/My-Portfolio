'use client';

import { useState, useEffect } from 'react';
import WelcomeLoader from './WelcomeLoader';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip loader for subsequent page visits in the same session
      setIsLoading(false);
      setShowContent(true);
    } else {
      // Show loader for first visit
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <WelcomeLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
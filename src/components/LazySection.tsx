'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
}

export default function LazySection({ 
  children, 
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  threshold = 0.1
}: LazySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animationType) {
        case 'fadeUp':
          return { opacity: 0, y: 50 };
        case 'fadeIn':
          return { opacity: 0 };
        case 'slideLeft':
          return { opacity: 0, x: -50 };
        case 'slideRight':
          return { opacity: 0, x: 50 };
        case 'scale':
          return { opacity: 0, scale: 0.8 };
        default:
          return { opacity: 0, y: 50 };
      }
    };

    const getAnimationState = () => {
      switch (animationType) {
        case 'fadeUp':
          return { opacity: 1, y: 0 };
        case 'fadeIn':
          return { opacity: 1 };
        case 'slideLeft':
          return { opacity: 1, x: 0 };
        case 'slideRight':
          return { opacity: 1, x: 0 };
        case 'scale':
          return { opacity: 1, scale: 1 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    // Set initial state
    gsap.set(element, getInitialState());

    // Create ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${100 - (threshold * 100)}%`,
      onEnter: () => {
        setIsLoaded(true);
        gsap.to(element, {
          ...getAnimationState(),
          duration: 0.8,
          delay: delay,
          ease: "power2.out"
        });
      },
      once: true // Only trigger once
    });

    return () => {
      trigger.kill();
    };
  }, [animationType, delay, threshold]);

  return (
    <div 
      ref={sectionRef}
      className={className}
    >
      {children}
    </div>
  );
}
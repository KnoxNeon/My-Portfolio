'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LazyItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animationType?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'rotateIn';
  threshold?: number;
}

export default function LazyItem({ 
  children, 
  className = '',
  delay = 0,
  animationType = 'fadeUp',
  threshold = 0.2
}: LazyItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animationType) {
        case 'fadeUp':
          return { opacity: 0, y: 30 };
        case 'fadeIn':
          return { opacity: 0 };
        case 'slideLeft':
          return { opacity: 0, x: -30 };
        case 'slideRight':
          return { opacity: 0, x: 30 };
        case 'scale':
          return { opacity: 0, scale: 0.9 };
        case 'rotateIn':
          return { opacity: 0, rotation: 10, scale: 0.95 };
        default:
          return { opacity: 0, y: 30 };
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
        case 'rotateIn':
          return { opacity: 1, rotation: 0, scale: 1 };
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
        gsap.to(element, {
          ...getAnimationState(),
          duration: 0.6,
          delay: delay,
          ease: "power2.out"
        });
      },
      once: true
    });

    return () => {
      trigger.kill();
    };
  }, [animationType, delay, threshold]);

  return (
    <div 
      ref={itemRef}
      className={className}
    >
      {children}
    </div>
  );
}
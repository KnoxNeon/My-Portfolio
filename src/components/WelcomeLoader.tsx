'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface WelcomeLoaderProps {
  onComplete: () => void;
}

export default function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(textRef.current, {
        opacity: 0,
        scale: 0.8
      });

      // Create main timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Add delay before exit animation
          setTimeout(() => {
            // Exit animation
            gsap.to(loaderRef.current, {
              opacity: 0,
              scale: 0.9,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: onComplete
            });
          }, 1500); // 1.5 second delay to let WELCOME be visible
        }
      });

      // Animate text in
      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Add pulsing animation
      gsap.to(textRef.current, {
        scale: 1.05,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.8
      });

    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
    >
      <div 
        ref={textRef}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-[#FFD028]">
          WELCOME
        </h1>
      </div>
    </div>
  );
}
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide elements
      gsap.set([logoRef.current, menuItemsRef.current?.children], {
        opacity: 0,
        y: -20
      });

      // Create timeline for navbar animation
      const tl = gsap.timeline();

      // Animate logo first
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      // Then animate menu items with stagger
      .to(menuItemsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");

    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleMenuItemHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleMenuItemLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  return (
    <nav 
      ref={navRef}
      className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-50 fixed top-0 left-0 bg-background/90 backdrop-blur-sm border-b border-border"
    >
      <div ref={logoRef} className="flex items-center">
        <a 
          href="#" 
          className="h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            alt="Iftekharul Alam Logo"
            className="h-full w-auto object-contain"
            src="https://i.ibb.co/S40JGGmk/logo-removebg-preview.png"
            width={120}
            height={40}
            priority
          />
        </a>
      </div>

      <ul 
        ref={menuItemsRef}
        className="hidden md:flex gap-8 text-sm font-semibold tracking-wide"
      >
        <li>
          <a 
            className="text-[#FFD028] transition-colors" 
            href="#"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            HOME
          </a>
        </li>
        <li>
          <a 
            className="text-muted-foreground hover:text-[#FFD028] transition-colors" 
            href="#about-me"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a 
            className="text-muted-foreground hover:text-[#FFD028] transition-colors" 
            href="#learning-journey"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            JOURNEY
          </a>
        </li>
        <li>
          <a 
            className="text-muted-foreground hover:text-[#FFD028] transition-colors" 
            href="#skills"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a 
            className="text-muted-foreground hover:text-[#FFD028] transition-colors" 
            href="#projects"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a 
            className="text-muted-foreground hover:text-[#FFD028] transition-colors" 
            href="#contact"
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            CONTACT
          </a>
        </li>
      </ul>

      <button 
        className="md:hidden text-foreground"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-icons">menu</span>
      </button>
    </nav>
  );
}
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);

  // Track active section based on scroll position
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const timer = setTimeout(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;

        // Check if at the top of the page (HOME section)
        if (scrollY < 200) {
          setActiveSection('home');
          return;
        }

        // Get all sections and find which one is currently in view
        const sections = ['about-me', 'learning-journey', 'skills', 'projects', 'contact'];
        
        // Check sections from bottom to top to find the active one
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const element = document.getElementById(sectionId);
          
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            
            // Check if we've scrolled past this section (with offset)
            if (scrollY >= sectionTop - 200) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Check initial position

      return () => window.removeEventListener('scroll', handleScroll);
    }, 500); // Wait 500ms for DOM to be ready

    return () => clearTimeout(timer);
  }, []);

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

  // Helper function to check if a section is active
  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // Handle navigation click - smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - 100; // Account for fixed navbar
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        // Set active immediately for better UX
        setTimeout(() => setActiveSection(sectionId), 100);
      }
    }
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
            className={`transition-colors cursor-pointer ${isActive('home') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            HOME
          </a>
        </li>
        <li>
          <a 
            className={`transition-colors cursor-pointer ${isActive('about-me') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#about-me"
            onClick={(e) => handleNavClick(e, 'about-me')}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a 
            className={`transition-colors cursor-pointer ${isActive('learning-journey') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#learning-journey"
            onClick={(e) => handleNavClick(e, 'learning-journey')}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            JOURNEY
          </a>
        </li>
        <li>
          <a 
            className={`transition-colors cursor-pointer ${isActive('skills') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            SKILLS
          </a>
        </li>
        <li>
          <a 
            className={`transition-colors cursor-pointer ${isActive('projects') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            onMouseEnter={handleMenuItemHover}
            onMouseLeave={handleMenuItemLeave}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a 
            className={`transition-colors cursor-pointer ${isActive('contact') ? 'text-[#FFD028]' : 'text-muted-foreground hover:text-[#FFD028]'}`}
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
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
        <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[88px] right-4 w-64 bg-[#FFF9E6] rounded-lg shadow-2xl z-[100] md:hidden animate-in fade-in slide-in-from-top-2 duration-200 border-2 border-[#FFD028]">
          <ul className="flex flex-col py-6 px-4 gap-4 text-sm font-semibold tracking-wide">
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('home') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                HOME
              </a>
            </li>
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('about-me') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#about-me"
                onClick={(e) => handleNavClick(e, 'about-me')}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('learning-journey') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#learning-journey"
                onClick={(e) => handleNavClick(e, 'learning-journey')}
              >
                JOURNEY
              </a>
            </li>
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('skills') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('projects') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a 
                className={`block py-2 px-4 rounded-md transition-all cursor-pointer ${isActive('contact') ? 'bg-[#FFD028] text-black' : 'text-black hover:bg-[#FFD028] hover:text-black'}`}
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
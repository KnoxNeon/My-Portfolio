'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-50 fixed top-0 left-0 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center">
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

      <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
        <li>
          <a className="text-[#FFD028] transition-colors" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="text-muted-foreground hover:text-[#FFD028] transition-colors" href="#about-me">
            ABOUT
          </a>
        </li>
        <li>
          <a className="text-muted-foreground hover:text-[#FFD028] transition-colors" href="#learning-journey">
            JOURNEY
          </a>
        </li>
        <li>
          <a className="text-muted-foreground hover:text-[#FFD028] transition-colors" href="#skills">
            SKILLS
          </a>
        </li>
        <li>
          <a className="text-muted-foreground hover:text-[#FFD028] transition-colors" href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="text-muted-foreground hover:text-[#FFD028] transition-colors" href="#contact">
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
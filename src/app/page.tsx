'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from '@/components/Footer';
import LazySection from '@/components/LazySection';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

function PortfolioContent() {
  const { toggleTheme } = useTheme();

  return (
    <div className="bg-background text-foreground transition-colors duration-300 min-h-screen flex flex-col">
      <Navigation />
      <SocialSidebar />
      <main className="flex-grow flex flex-col relative overflow-hidden pt-20">
        {/* Background blur effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD028]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
        
        <HeroSection />
        
        <LazySection animationType="fadeUp" delay={0.1}>
          <AboutSection />
        </LazySection>
        
        <LazySection animationType="slideLeft" delay={0.2}>
          <JourneySection />
        </LazySection>
        
        <LazySection animationType="fadeUp" delay={0.1}>
          <SkillsSection />
        </LazySection>
        
        <LazySection animationType="slideRight" delay={0.2}>
          <ProjectsSection />
        </LazySection>
        
        <LazySection animationType="scale" delay={0.1}>
          <ContactSection />
        </LazySection>
      </main>
      
      <Footer />

      {/* Double click to toggle dark mode - exclude contact form */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        onDoubleClick={(e) => {
          // Don't toggle if clicking on form elements
          const target = e.target as HTMLElement;
          if (target.closest('.contact-form') || target.closest('input') || target.closest('textarea')) {
            return;
          }
          toggleTheme();
        }}
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
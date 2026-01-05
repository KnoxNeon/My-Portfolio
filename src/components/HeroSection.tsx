'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-10 relative z-10">
      <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24">
        <h1 className="font-display font-bold text-7xl md:text-8xl lg:text-9xl text-center md:text-justify flex flex-col md:flex-row justify-center uppercase tracking-tight leading-none text-[#FFD028] gap-2 md:gap-10">
          <span>Iftekharul</span>
          <span>Alam</span>
        </h1>
        
        {/* Designation */}
        <div className="mt-4 text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Full-Stack Developer
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-4 md:gap-0 border-t border-border pt-8 text-sm md:text-base font-semibold tracking-widest text-muted-foreground uppercase">
          <span className="w-1/2 md:w-auto text-center md:text-left">#FRONTEND</span>
          <span className="w-1/2 md:w-auto text-center md:text-left">#BACKEND</span>
          <span className="w-1/2 md:w-auto text-center md:text-left">#FULL-STACK</span>
          <span className="w-1/2 md:w-auto text-center md:text-left">#MERN-STACK</span>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute inset-0 -z-10 w-full h-full translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 dot-pattern opacity-30" />
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-2xl">
            <Image
              alt="Iftekharul Alam Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="https://i.ibb.co/mCj86JyS/profile-image.png"
              width={400}
              height={500}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-4">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Hello, I'm Iftekharul Alam. I am a passionate MERN Stack Developer specializing in building scalable, high-performance web applications using MongoDB, Express, React, and Node.js. I turn complex problems into elegant, efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="inline-flex items-center gap-3 bg-[#FFD028] hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-transform transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(255,208,40,0.39)]"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View Projects</span>
              <span className="material-icons text-lg transform rotate-[-45deg] relative top-[1px]">
                arrow_forward
              </span>
            </Button>
            
            <Button 
              variant="outline"
              className="inline-flex items-center gap-3 border-2 border-[#FFD028] text-[#FFD028] hover:bg-[#FFD028] transition-transform transform hover:-translate-y-1 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              size="lg"
              onClick={() => {
                // Create a temporary link to download the resume
                const link = document.createElement('a');
                link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
                link.download = 'Iftekharul_Alam_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="material-icons text-lg">download</span>
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
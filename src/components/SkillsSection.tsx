'use client';

import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'web',
      skills: [
        { name: 'React.js', level: 90, icon: 'react', color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 85, icon: 'nextjs', color: 'from-gray-700 to-gray-900' },
        { name: 'JavaScript', level: 88, icon: 'javascript', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 82, icon: 'typescript', color: 'from-blue-600 to-blue-800' },
        { name: 'HTML5/CSS3', level: 92, icon: 'html', color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 89, icon: 'tailwind', color: 'from-cyan-400 to-blue-500' }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'settings_ethernet',
      skills: [
        { name: 'Node.js', level: 87, icon: 'nodejs', color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 85, icon: 'express', color: 'from-gray-600 to-gray-800' },
        { name: 'RESTful APIs', level: 88, icon: 'api', color: 'from-purple-500 to-purple-700' },
        { name: 'GraphQL', level: 75, icon: 'graphql', color: 'from-pink-500 to-purple-600' },
        { name: 'JWT Auth', level: 83, icon: 'security', color: 'from-red-500 to-orange-500' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: 'storage',
      skills: [
        { name: 'MongoDB', level: 86, icon: 'mongodb', color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 80, icon: 'postgresql', color: 'from-blue-700 to-indigo-700' },
        { name: 'Firebase', level: 84, icon: 'firebase', color: 'from-yellow-500 to-orange-600' },
        { name: 'Prisma ORM', level: 78, icon: 'prisma', color: 'from-indigo-500 to-purple-600' },
        { name: 'AWS Basics', level: 70, icon: 'cloud', color: 'from-orange-400 to-yellow-500' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: 'build',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'git', color: 'from-gray-700 to-black' },
        { name: 'Docker', level: 75, icon: 'docker', color: 'from-blue-500 to-blue-700' },
        { name: 'Postman', level: 88, icon: 'postman', color: 'from-orange-500 to-red-500' },
        { name: 'VS Code', level: 95, icon: 'code', color: 'from-blue-600 to-indigo-600' },
        { name: 'Figma', level: 72, icon: 'design', color: 'from-purple-500 to-pink-500' }
      ]
    }
  ];

  const renderTechIcon = (iconName: string) => {
    const iconProps = "w-5 h-5";
    
    switch (iconName) {
      case 'react':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
          </svg>
        );
      case 'nodejs':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
          </svg>
        );
      // Add more icons as needed, or use a default
      default:
        return <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full" />;
    }
  };

  const renderCategoryIcon = (iconName: string) => {
    const iconProps = "w-6 h-6";
    
    switch (iconName) {
      case 'web':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      case 'settings_ethernet':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/>
          </svg>
        );
      case 'storage':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/>
          </svg>
        );
      case 'build':
        return (
          <svg className={iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
          </svg>
        );
      default:
        return <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full" />;
    }
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative" id="skills">
      <div className="w-full max-w-7xl mx-auto mb-12">
        <span className="text-[#FFD028] font-bold tracking-widest uppercase mb-2">My Tech Stack</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase">Technical Proficiency</h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          Here's a visual representation of my technical skills and proficiency levels across different technologies and tools.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={categoryIndex}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:border-[#FFD028]/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[#FFD028]/10 flex items-center justify-center text-[#FFD028]">
                {renderCategoryIcon(category.icon)}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-[#FFD028]">
                        {renderTechIcon(skill.icon)}
                      </div>
                      <span className="font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {getSkillLevel(skill.level)}
                      </span>
                      <span className="text-sm font-bold text-[#FFD028]">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Educational Qualification */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <Card className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:border-[#FFD028]/50 transition-colors">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-[#FFD028]/10 flex items-center justify-center text-[#FFD028]">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,10.09V17H23V9L12,3Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Educational Qualification</h3>
          </div>
          
          <div className="bg-gradient-to-r from-[#FFD028]/5 to-transparent rounded-xl p-6 border border-[#FFD028]/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Bachelor of Science in Mechatronics Engineering
                </h4>
                <p className="text-lg text-[#FFD028] font-medium mb-1">
                  Rajshahi University of Engineering & Technology (RUET)
                </p>
                <p className="text-muted-foreground">
                  Specialized in the integration of mechanical, electrical, and computer engineering
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#FFD028] mb-1">2019 - 2024</div>
                <div className="text-sm text-muted-foreground">5 Years Program</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Overall Stats */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <Card className="bg-gradient-to-br from-[#FFD028]/5 to-transparent border border-[#FFD028]/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Skill Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD028] mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD028] mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD028] mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFD028] mb-2">12</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
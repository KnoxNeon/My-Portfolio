'use client';

export default function JourneySection() {
  const timelineItems = [
    {
      year: '2020',
      title: 'Foundations of Code',
      description: 'Started my programming journey by mastering the core concepts of algorithms and memory management.',
      technologies: [
        { name: 'C', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
        { name: 'C++', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
        { name: 'Python', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' }
      ],
      isActive: true,
      side: 'left'
    },
    {
      year: '2022',
      title: 'Object Oriented Logic',
      description: 'Deepened my understanding of OOP principles and robust application structure.',
      technologies: [
        { name: 'Java', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' }
      ],
      isActive: false,
      side: 'right'
    },
    {
      year: '2023',
      title: 'Modern Web Stack',
      description: 'Transitioned to full-stack web development, mastering the JavaScript ecosystem and databases.',
      technologies: [
        { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
        { name: 'HTML', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
        { name: 'CSS', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
        { name: 'React', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
        { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' }
      ],
      isActive: false,
      side: 'left'
    },
    {
      year: 'Present',
      title: 'Backend & DevOps',
      description: 'Expanded expertise into server-side technologies, database management, and deployment tools.',
      technologies: [
        { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
        { name: 'Express', color: 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300' },
        { name: 'MongoDB', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
        { name: 'PostgreSQL', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
        { name: 'Prisma', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
        { name: 'Firebase', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' }
      ],
      additionalTechnologies: [
        { name: 'Git', color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
        { name: 'Postman', color: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
        { name: 'Docker', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' }
      ],
      isActive: true,
      side: 'right'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-border" id="learning-journey">
      <div className="w-full max-w-7xl mx-auto mb-16">
        <span className="text-[#FFD028] font-bold tracking-widest uppercase mb-2">My Path</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase">Detailed Roadmap</h2>
      </div>

      <div className="w-full max-w-7xl mx-auto relative">
        {/* Main vertical timeline line - more prominent */}
        <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD028] via-border to-[#FFD028] md:left-1/2 md:-ml-0.5" />
        
        <div className="space-y-16">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
              {/* Left content */}
              <div className={`md:w-1/2 md:pr-8 md:text-right order-2 md:order-1 pl-12 md:pl-0 ${
                item.side === 'right' ? 'mt-4 md:mt-0' : ''
              }`}>
                {item.side === 'left' && (
                  <>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 text-xs font-semibold rounded ${tech.color}`}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Timeline dot with connecting lines */}
              <div className="relative flex items-center justify-center order-1 md:order-2 z-20">
                {/* Horizontal connecting line to content (desktop only) */}
                <div className={`hidden md:block absolute top-1/2 h-0.5 bg-border transform -translate-y-1/2 ${
                  item.side === 'left' 
                    ? 'right-5 w-8' 
                    : 'left-5 w-8'
                }`} />
                
                {/* Timeline dot */}
                <div className={`w-12 h-12 rounded-full bg-card border-4 flex items-center justify-center shadow-lg ${
                  item.isActive ? 'border-[#FFD028] bg-[#FFD028]/10' : 'border-border'
                } absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2`}>
                  {item.year === 'Present' ? (
                    <span className="material-symbols-outlined text-lg text-[#FFD028]">rocket_launch</span>
                  ) : (
                    <span className="text-xs font-bold text-foreground">{item.year}</span>
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className={`md:w-1/2 md:pl-8 order-3 md:order-3 pl-12 md:pl-0 ${
                item.side === 'left' ? 'mt-4 md:mt-0' : ''
              }`}>
                {item.side === 'right' && (
                  <>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 text-xs font-semibold rounded ${tech.color}`}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    {item.additionalTechnologies && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.additionalTechnologies.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-3 py-1 text-xs font-semibold rounded ${tech.color}`}>
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
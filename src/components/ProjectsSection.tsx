'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyItem from '@/components/LazyItem';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Hemio | A Blood Donation Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://i.ibb.co/CpcxP9BC/image.png',
      technologies: ['React', 'Node.js', 'Tailwind', 'Firebase', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://hemio-knox.surge.sh',
      githubUrl: 'https://github.com/davidmichel/ecommerce-platform',
      featured: true
    },
    {
      title: 'PawMart | Pet Care Service',
      description: 'PawMart is a modern, responsive web application that allows users to buy, sell, and explore pet items, including pet food, accessories, toys, and more—all in one convenient platform.',
      image: 'https://i.ibb.co/3Yd0cVN2/image.png',
      technologies: ['React', 'Node.js', 'Tailwind', 'Firebase', 'MongoDB', 'Express'],
      liveUrl: 'https://pawmart-knox.surge.sh',
      githubUrl: 'https://github.com/davidmichel/task-manager',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Built with React and integrated with multiple weather APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/davidmichel/weather-dashboard',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics. Features data visualization, automated reporting, and multi-platform integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Node.js'],
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/davidmichel/social-analytics',
      featured: false
    },
    {
      title: 'GameHub | Free PC Games Download Platform',
      description: 'GameHub is a modern, responsive web application that lets users discover, explore, and download the most popular free-to-play and premium PC games in one beautiful place',
      image: 'https://i.ibb.co/zTkt4kJN/image.png',
      technologies: ['React', 'Node.js', 'Tailwind', 'Firebase'],
      liveUrl: 'https://gamehub-knox.surge.sh',
      githubUrl: 'https://github.com/davidmichel/real-estate-platform',
      featured: true
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course management, video streaming, progress tracking, and interactive quizzes. Supports multiple user roles.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Stripe', 'WebRTC'],
      liveUrl: 'https://lms-demo.com',
      githubUrl: 'https://github.com/davidmichel/learning-management',
      featured: false
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Next.js': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'MongoDB': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'PostgreSQL': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Express': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      'TypeScript': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Tailwind': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      'Prisma': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Firebase': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Vue.js': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      'AWS S3': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Stripe': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Socket.io': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      'Chart.js': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'D3.js': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'MapBox': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Cloudinary': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'WebRTC': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'OpenWeather API': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300'
    };
    return colors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-t border-border" id="projects">
      <div className="w-full max-w-7xl mx-auto mb-12">
        <span className="text-[#FFD028] font-bold tracking-widest uppercase mb-2">My Work</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase">Featured Projects</h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
          A showcase of my recent work, demonstrating expertise in full-stack development, 
          modern frameworks, and scalable architecture solutions.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <LazyItem 
              key={index} 
              animationType="scale" 
              delay={index * 0.2}
              className="h-full"
            >
              <Card className="group overflow-hidden bg-card border border-border hover:border-[#FFD028]/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-[#FFD028] hover:bg-yellow-400 text-black font-semibold"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <span className="material-icons text-sm mr-1">launch</span>
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <span className="material-icons text-sm mr-1">code</span>
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </LazyItem>
          ))}
        </div>

        {/* Other Projects Grid
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-card border border-border hover:border-[#FFD028]/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs font-semibold rounded ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <span className="material-icons text-sm mr-1">launch</span>
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <span className="material-icons text-sm mr-1">code</span>
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <Button 
            size="lg"
            className="bg-[#FFD028] hover:bg-yellow-400 text-black font-bold px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="material-icons mr-2">email</span>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
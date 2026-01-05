'use client';

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-card border-t border-border" id="about-me">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#FFD028]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-[#FFD028] font-bold tracking-widest uppercase mb-2">My Biography</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Hello, I'm Iftekharul Alam!</h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Welcome to my digital world! I'm a passionate MERN Stack Developer who discovered the magic of coding back in 2020. 
                What started as curiosity about how websites work has evolved into a deep love for creating digital experiences that make a difference.
              </p>
              <p>
                My programming journey began with the fundamentals - learning C and C++ taught me the importance of logical thinking and problem-solving. 
                But it was when I discovered JavaScript and React that everything clicked. The ability to bring ideas to life through code, 
                to see immediate results, and to build something that users can interact with - that's what hooked me completely.
              </p>
              <p>
                I absolutely love working on full-stack applications where I can handle everything from database design to user interface. 
                There's something incredibly satisfying about architecting a complete solution - designing efficient APIs, 
                crafting responsive frontends, and ensuring everything works seamlessly together. I particularly enjoy the challenge of 
                optimizing performance and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me immersed in the gaming world! 🎮 Gaming has been a huge part of my life and, 
                interestingly, it's what initially sparked my interest in technology. From strategy games that taught me logical thinking 
                to multiplayer games that showed me the power of real-time communication, gaming has shaped how I approach problem-solving in development.
              </p>
              <p>
                I believe the best developers are those who never stop learning and experimenting. Whether it's exploring a new framework, 
                contributing to open-source projects, or building side projects just for fun, I'm always looking for ways to grow and challenge myself. 
                My goal is to create applications that not only work flawlessly but also bring joy to the people who use them.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="block text-4xl font-display font-bold text-[#FFD028] mb-1">4+</span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Years Exp.</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-[#FFD028] mb-1">50+</span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-[#FFD028] mb-1">12</span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Certifications</span>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
            <h3 className="text-2xl font-bold text-foreground mb-8">What Drives Me</h3>
            
            {/* Personal Interests */}
            <div className="space-y-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-[#FFD028]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD028]/10 flex items-center justify-center text-[#FFD028]">
                    <span className="material-icons">sports_esports</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Gaming Enthusiast</h4>
                </div>
                <p className="text-muted-foreground">
                  Gaming isn't just a hobby for me - it's a passion that influences my development approach. 
                  From real-time strategy games to competitive multiplayer, gaming has taught me about user experience, 
                  performance optimization, and the importance of responsive design.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-[#FFD028]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD028]/10 flex items-center justify-center text-[#FFD028]">
                    <span className="material-icons">psychology</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Problem Solver</h4>
                </div>
                <p className="text-muted-foreground">
                  I thrive on complex challenges and love breaking down big problems into manageable pieces. 
                  Whether it's debugging a tricky issue or architecting a scalable solution, 
                  I approach every problem with curiosity and determination.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-[#FFD028]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD028]/10 flex items-center justify-center text-[#FFD028]">
                    <span className="material-icons">groups</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Team Player</h4>
                </div>
                <p className="text-muted-foreground">
                  Collaboration is key to great software. I enjoy working with designers, other developers, 
                  and stakeholders to bring ideas to life. Clear communication and shared goals lead to the best results.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-[#FFD028]/5 to-transparent border border-[#FFD028]/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="material-icons text-[#FFD028]">lightbulb</span>
                Quick Facts About Me
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD028] rounded-full"></span>
                  Started coding in 2020 with C/C++
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD028] rounded-full"></span>
                  Fell in love with React and JavaScript
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD028] rounded-full"></span>
                  Avid gamer and tech enthusiast
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD028] rounded-full"></span>
                  Always learning new technologies
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FFD028] rounded-full"></span>
                  Passionate about user experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
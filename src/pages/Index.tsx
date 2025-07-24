import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Award, Calendar, MapPin, Code, Database, Cloud, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingTexts = ['Data Analytics', 'AI Projects', 'Cloud Certified', 'ML Engineer'];

  // Scroll animation hook
  const useScrollAnimation = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      const sections = document.querySelectorAll('[data-scroll]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, []);

    return visibleElements;
  };

  const visibleElements = useScrollAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = typingTexts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, typingTexts]);
  
  const projects = [
    {
      title: "Urban Traffic Optimization using Computer Vision",
      description: "Advanced computer vision system for optimizing urban traffic flow using real-time analysis and machine learning algorithms.",
      tools: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
      github: "https://github.com/harsh22038"
    },
    {
      title: "AI-Powered Agriculture Chatbot using Gemini Flash 2.0",
      description: "Intelligent chatbot leveraging Gemini Flash 2.0 to provide farmers with real-time agricultural insights and recommendations.",
      tools: ["Python", "Gemini Flash 2.0", "NLP", "Agriculture Tech"],
      github: "https://github.com/harsh22038"
    }
  ];

  const certifications = [
    { name: "AWS Academy Cloud Foundations", provider: "AWS", icon: "🏛️" },
    { name: "Certified System Administrator (CSA)", provider: "ServiceNow", icon: "⚙️" },
    { name: "Certified Application Developer (CAD)", provider: "ServiceNow", icon: "💻" },
    { name: "Advanced Data Science", provider: "Unschool", icon: "📊" },
    { name: "HackerRank Certified", provider: "HackerRank", icon: "🏆" }
  ];

  const achievements = [
    { year: "2023", event: "Interstate Powerlifting Championship", position: "3rd Place", icon: "🥉" },
    { year: "2023-24", event: "JNTU-GV Weightlifting Championship", position: "2nd Place", icon: "🥈" },
    { year: "2023-24", event: "JNTU-GV Powerlifting Championship", position: "3rd Place", icon: "🥉" }
  ];

  const skills = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "C Programming", level: 85, icon: "⚡" },
    { name: "Data Science", level: 88, icon: "📈" },
    { name: "Cloud Computing", level: 82, icon: "☁️" },
    { name: "Machine Learning", level: 85, icon: "🤖" },
    { name: "Web Development", level: 80, icon: "🌐" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">S.Harsh Vardhan Raju</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
            <Badge variant="secondary" className="bg-green-600 text-white hover:bg-green-700">
              Open to Work
            </Badge>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Sampathirao Harsh Vardhan Raju
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Data Analytics Specialist | AI & ML Expert | Cloud Certified
            </p>
            <div className="text-lg md:text-xl text-purple-400 h-8">
              <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
                {currentText}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <a href="/S.Harsh Vardhan Raju_Resume.pdf" download className="flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
              </a>
            </Button>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
                onClick={() => window.open('https://github.com/harsh22038', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
                onClick={() => window.open('https://www.linkedin.com/in/sampathirao-harsh-vardhan-raju-308929289/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
                onClick={() => window.open('mailto:harshasampathirao58@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">AI & ML</h3>
                <p className="text-slate-400 text-sm">Specialized in Artificial Intelligence and Machine Learning</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Cloud className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Cloud Computing</h3>
                <p className="text-slate-400 text-sm">AWS certified with hands-on cloud experience</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Full-Stack</h3>
                <p className="text-slate-400 text-sm">End-to-end application development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-scroll
        className={`py-20 px-6 bg-slate-800/30 transition-all duration-1000 ${
          visibleElements.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a final-year B.Tech student in Computer Science with a specialization in Artificial Intelligence and Data Science at GMR Institute of Technology, Rajam. My journey in technology is driven by determination and a passion for innovation.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                With strong communication skills and multilingual fluency in English, Telugu, Hindi, and Marathi, I bring a diverse perspective to collaborative projects. My foundation in data science, machine learning, and cloud computing enables me to tackle complex challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">English</Badge>
                <Badge variant="secondary">Telugu</Badge>
                <Badge variant="secondary">Hindi</Badge>
                <Badge variant="secondary">Marathi</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">GMR Institute of Technology, Rajam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Final Year - 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">AI & Data Science Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        data-scroll
        className={`py-20 px-6 transition-all duration-1000 ${
          visibleElements.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="border-slate-600 text-slate-300">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        data-scroll
        className={`py-20 px-6 bg-slate-800/30 transition-all duration-1000 ${
          visibleElements.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        data-scroll
        className={`py-20 px-6 transition-all duration-1000 ${
          visibleElements.has('certifications') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        id="certifications"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Certifications & Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                  <p className="text-slate-400 text-sm">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section 
        data-scroll
        className={`py-20 px-6 bg-slate-800/30 transition-all duration-1000 ${
          visibleElements.has('achievements') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        id="achievements"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{achievement.event}</h3>
                  <p className="text-purple-400 font-medium">{achievement.position}</p>
                </div>
                <div className="text-slate-400 font-medium">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-scroll
        className={`py-20 px-6 transition-all duration-1000 ${
          visibleElements.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect & Collaborate</h3>
              <p className="text-slate-300 text-lg mb-6">
                I'm passionate about leveraging AI and data science to solve real-world problems. Whether you're looking for a dedicated team member, have an exciting project in mind, or simply want to discuss the latest in technology and innovation, I'd love to hear from you.
              </p>
              
              <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 mb-8">
                <h4 className="text-white font-medium mb-3">What I'm Looking For:</h4>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Data Analytics Specialist roles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Business Intelligence positions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>AI/ML Engineer opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>Data Science & Cloud projects</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
                  <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:harshasampathirao58@gmail.com"
                      className="text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      harshasampathirao58@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
                  <Github className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <a 
                      href="https://github.com/harsh22038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      @harsh22038
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
                  <Code className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">LeetCode</p>
                    <a 
                      href="https://leetcode.com/Harsh_22038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      @Harsh_22038
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
                  <Linkedin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sampathirao-harsh-vardhan-raju-308929289/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      Sampathirao Harsh Vardhan Raju
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30">
                <p className="text-purple-300 text-sm">
                  💡 <strong>Quick Response:</strong> I typically respond to emails within 24 hours and am always excited to discuss new opportunities!
                </p>
              </div>
            </div>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Drop me a line and let's start a conversation about your next project!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Sampathirao Harsh Vardhan Raju. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

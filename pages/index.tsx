import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp,
  FaCode, FaServer, FaDatabase, FaDocker,
  FaArrowUp, FaBars, FaTimes, FaExternalLinkAlt,
  FaStar, FaTrophy, FaGraduationCap, FaCodeBranch
} from 'react-icons/fa'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'ft_transcendence',
      category: 'Full-Stack',
      description: 'Engineered a full-featured social networking platform with real-time chat, AI content moderation, and interactive analytics.',
      tech: ['Backend API', 'PostgreSQL', 'Sequelize ORM', 'JWT', 'OAuth 2.0'],
      score: 'Mar 2026',
      icon: '🎮',
      github: 'https://github.com/FilaliYassine/ft_transcendence',
      highlights: ['Real-time chat system', 'Secure authentication flows', 'Friend & profile system', 'Agile team collaboration']
    },
    {
      title: 'webserv',
      category: 'System',
      description: 'Engineered a non-blocking HTTP/1.1 web server in C++ from scratch, utilizing Linux epoll API for high-performance I/O multiplexing.',
      tech: ['C++', 'Linux epoll API', 'CGI', 'HTTP/1.1', 'Nginx-style config'],
      score: 'Nov 2025',
      icon: '🌐',
      github: 'https://github.com/FilaliYassine/webserv',
      highlights: ['Non-blocking I/O', 'CGI support', 'RFC-compliant HTTP', 'Configuration parser']
    },
    {
      title: 'Inception',
      category: 'DevOps',
      description: 'Architected secure, multi-container web infrastructure from scratch using Docker and Docker Compose.',
      tech: ['Docker', 'Docker Compose', 'Nginx', 'WordPress', 'MariaDB'],
      score: 'Nov 2025',
      icon: '🐳',
      github: 'https://github.com/FilaliYassine/inception',
      highlights: ['Multi-container architecture', 'Automated deployment', 'Isolated networks', 'Production-ready environment']
    },
    {
      title: 'push_swap',
      category: 'Algorithm',
      description: 'Developed a custom sorting algorithm in C utilizing two stacks with rigorous time complexity optimization.',
      tech: ['C', 'Algorithm Design', 'Data Structures', 'Memory Management'],
      score: 'Jul 2024',
      icon: '📊',
      github: 'https://github.com/FilaliYassine/push_swap',
      highlights: ['Custom sorting algorithm', 'Two-stack implementation', 'Minimum operations', 'Memory optimization']
    }
  ]

  const skills = {
    'Programming Languages': [
      { name: 'C', icon: '💾', level: 95 },
      { name: 'C++', icon: '💾', level: 90 },
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'JavaScript', icon: '💛', level: 85 },
      { name: 'Shell', icon: '🐚', level: 80 }
    ],
    'System & Infrastructure': [
      { name: 'Linux', icon: '🐧', level: 90 },
      { name: 'Docker', icon: '🐳', level: 85 },
      { name: 'Git', icon: '📦', level: 90 },
      { name: 'Vim', icon: '📝', level: 85 }
    ],
    'Core Technologies': [
      { name: 'Algorithms', icon: '🧮', level: 90 },
      { name: 'Web Development', icon: '🌐', level: 85 },
      { name: 'Graphics', icon: '🎨', level: 75 },
      { name: 'System Programming', icon: '⚙️', level: 95 }
    ],
    'Languages': [
      { name: 'English', icon: '🇬🇧', level: 90 },
      { name: 'French', icon: '🇫🇷', level: 70 },
      { name: 'Arabic', icon: '🇲🇦', level: 100 }
    ]
  }

  return (
    <>
      <Head>
        <title>Yassine Filali - Backend Developer | 42 School</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Backend Developer and 42 School graduate specializing in system programming, API development, and cloud architecture." />
        <meta name="keywords" content="backend developer, 42 school, software engineer, system programming, API development" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white flex items-center">
                <span className="text-4xl font-black mr-1" 
                      style={{ 
                        background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 25%, #ffd700 50%, #4facfe 75%, #43e97b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: '"Segoe UI Black", "Helvetica Neue", Arial Black, sans-serif',
                        letterSpacing: '-2px',
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                        animation: 'glow 3s ease-in-out infinite',
                        fontWeight: '900',
                        fontStyle: 'italic',
                        transform: 'skewX(-10deg)',
                        display: 'inline-block'
                      }}>Y</span>
                <span>assine Filali</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-indigo-400 text-slate-300"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-all"
              >
                Let's Chat
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-yellow-400 text-slate-900 rounded-full text-sm font-medium mb-6">
                    Hi! I'm Yassine Filali
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight">
                    Software Engineer
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 max-w-lg">
                    Dedicated student at 1337 School with expertise in system programming, 
                    web development, and infrastructure. Building scalable solutions from scratch.
                  </p>
                </div>


                <div className="flex justify-center md:justify-start gap-4 mb-8">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    <span>📧</span>
                    Hire Me
                  </a>
                  <a
                    href="#about"
                    className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg text-slate-300 font-medium hover:bg-slate-800 transition-all"
                  >
                    <span>📄</span>
                    About Me
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto md:mx-0">
                  {[
                    { number: '11.29', label: '1337 Level' },
                    { number: '25+', label: 'Projects' },
                    { number: '15+', label: 'Technologies' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center md:text-left">
                      <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image with Background Text */}
            <div className="relative flex justify-center md:justify-end w-full mt-8 md:mt-0">
              {/* Container without frame */}
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden md:overflow-visible">
                {/* Large Background Text - SOFTWARE ENGINEER */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-0 md:pr-8">
                  <div className="text-center md:text-right">
                    <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-800/10 uppercase tracking-tight leading-none">
                      SOFTWARE
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-800/10 uppercase tracking-tight leading-none mt-2">
                      ENGINEER
                    </span>
                  </div>
                </div>
                
                {/* Profile Image - Positioned to right, no frame */}
                <div className="absolute bottom-0 right-0 left-0 md:left-auto h-full flex items-end justify-center md:justify-end">
                  <img 
                    src="/profile-hero.webp" 
                    alt="Yassine Filali" 
                    className="w-auto h-[70%] sm:h-[75%] md:h-[80%] lg:h-[85%] object-contain relative z-10 rounded-3xl"
                    style={{ 
                      filter: 'drop-shadow(0 20px 40px rgba(99, 102, 241, 0.2))',
                    }}
                  />
                </div>
                
                {/* Subtle gradient behind image for depth */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-gradient-to-tl from-indigo-500/5 via-purple-500/5 to-transparent rounded-tl-[100px] -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">About Me</h2>
          <p className="text-center text-slate-400 mb-12">Backend Developer with a Passion for Clean Code</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Dedicated student at <span className="text-indigo-400 font-semibold">1337 School (42 Network)</span>, currently at
                Level 11.29. Rigorous problem solver with hands-on experience in C, C++, JavaScript, Python and System Architecture.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Proven ability to learn autonomously and collaborate in peer-to-peer environments. My journey at 1337 has equipped me 
                with strong problem-solving skills and deep understanding of computer science fundamentals.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I excel in building high-performance systems from scratch, including HTTP servers, web applications, 
                and containerized infrastructures. Experienced in both low-level system programming and full-stack development.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FaGraduationCap />, text: '42 School Graduate' },
                  { icon: <FaServer />, text: 'Backend Specialist' },
                  { icon: <FaCodeBranch />, text: 'Open Source Contributor' }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-indigo-400">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-6 rounded-lg glass-effect">
                <pre className="text-sm overflow-x-auto">
                  <code className="language-javascript text-slate-300">
{`const developer = {
  name: "Yassine Filali",
  education: "42 School",
  role: "Backend Developer",
  location: "Available Worldwide",
  
  skills: {
    backend: ["Node.js", "Python", "Go", "C/C++"],
    databases: ["PostgreSQL", "MongoDB", "Redis"],
    devOps: ["Docker", "Kubernetes", "CI/CD"],
    cloud: ["AWS", "GCP", "Azure"]
  },
  
  currentFocus: "Building scalable systems",
  availability: "Open for opportunities"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">42 School Projects</h2>
          <p className="text-center text-slate-400 mb-12">Rigorous Programming Challenges & System Development</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative p-6 rounded-lg glass-effect border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium">
                      {project.score}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1 mb-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-indigo-400">▸</span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                  >
                    <FaGithub />
                    View Code
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Technical Skills</h2>
          <p className="text-center text-slate-400 mb-12">Technologies & Tools I Work With</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="tech-card"
              >
                <h3 className="text-lg font-semibold mb-4 text-indigo-400">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span>{skill.icon}</span>
                          <span className="text-sm text-slate-300">{skill.name}</span>
                        </div>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Experience & Education</h2>
          <p className="text-center text-slate-400 mb-12">My Professional Journey</p>

          <div className="space-y-8">
            {[
              {
                date: '2023 - Present',
                title: '1337 School (42 Network)',
                subtitle: 'Computer Science - Level 11.29',
                description: 'Intensive peer-to-peer learning environment at Campus Benguerir focused on C/C++, system programming, algorithms, and project-based learning.',
                achievements: [
                  'Achieved Level 11.29 in the rigorous 42 curriculum',
                  'Completed 25+ challenging projects with excellent scores',
                  'Mastered low-level programming and memory management',
                  'Built HTTP servers, web applications, and containerized systems',
                  'Active peer evaluator and collaborative learner'
                ]
              },
              {
                date: '2024 - Present',
                title: 'Software Engineering Student',
                subtitle: 'Available for Opportunities',
                description: 'Specializing in system programming, backend development, and infrastructure. Open to internships, freelance projects, and full-time positions.',
                achievements: [
                  'Developed production-ready applications and systems',
                  'Experience with Docker, PostgreSQL, and web technologies',
                  'Strong problem-solving and autonomous learning skills',
                  'Multilingual communication (Arabic, English, French)'
                ]
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900" />
                <div className="glass-effect p-6 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-indigo-400 mb-3">{item.subtitle}</p>
                  <p className="text-slate-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-indigo-400 mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Get In Touch</h2>
          <p className="text-center text-slate-400 mb-12">Let's Build Something Amazing Together</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Available For</h3>
              {[
                {
                  icon: '🎓',
                  title: 'Open to Internships',
                  description: 'Seeking internship opportunities to gain hands-on experience'
                },
                {
                  icon: '💼',
                  title: 'Full-Time Positions',
                  description: 'Backend Developer roles in innovative companies'
                },
                {
                  icon: '💻',
                  title: 'Freelance Projects',
                  description: 'API development, system design, and consulting'
                },
                {
                  icon: '🚀',
                  title: 'Startup Opportunities',
                  description: 'Technical co-founder or early engineering roles'
                }
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg glass-effect hover:border-indigo-500/50 border border-slate-700/50 transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              {[
                {
                  icon: <FaEnvelope />,
                  title: 'Email',
                  text: 'filali.yassine01@gmail.com',
                  href: 'mailto:filali.yassine01@gmail.com',
                  description: 'Drop me an email anytime'
                },
                {
                  icon: <FaGithub />,
                  title: 'GitHub',
                  text: 'GitHub Profile',
                  href: 'https://github.com/FilaliYassine',
                  description: 'Check out my code repositories'
                },
                {
                  icon: <FaLinkedin />,
                  title: 'LinkedIn',
                  text: 'LinkedIn Profile',
                  href: 'https://www.linkedin.com/in/yassine-filali-3a048b304/',
                  description: 'Connect with me professionally'
                },
                {
                  icon: <FaWhatsapp />,
                  title: 'WhatsApp',
                  text: '+212 611516156',
                  href: 'https://wa.me/212611516156',
                  description: 'Quick chat for urgent matters'
                }
              ].map((item) => (
                <div key={item.text} className="p-4 rounded-lg glass-effect hover:border-indigo-500/50 border border-slate-700/50 transition-all">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <span className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400 mb-1">{item.description}</p>
                      <p className="text-sm text-indigo-400 group-hover:text-indigo-300">{item.text}</p>
                    </div>
                  </a>
                </div>
              ))}

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <p className="text-sm text-slate-300 text-center">
                  💬 Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 mb-2">© 2024 Yassine Filali. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default Home
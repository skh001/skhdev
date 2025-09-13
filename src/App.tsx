import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Mail, Linkedin, ExternalLink, Menu, X, ChevronDown, ChevronUp, Instagram, Send } from 'lucide-react';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [showPopup, setShowPopup] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await fetch("https://formsubmit.co/ggbrocs@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });

      form.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  const projects = [
    {
      title: "Beauty & Nails Business Website",
      description: "Designed and developed a modern responsive website for a nail business, showcasing services, portfolio, and contact information to enhance online visibility and attract new clients",
      image: "https://i.postimg.cc/KvKcwFRH/temp-Images-Lt-Rk-N.avif",
      demo: "https://wissnails.online",
      github: "https://github.com/skh001/wissnails"
    },
    {
      title: "Frites Bonnel – Food Truck Website",
      description: "Created a responsive website for a food truck business to boost its online visibility, showcase its menu, and attract more local customers.",
      image: "https://i.postimg.cc/8CFzQSK5/temp-Image8gu-Qi-N.avif",
      demo: "https://skh001.github.io/fritesbonnel/",
      github: "https://github.com/skh001/fritesbonnel"
    },
    {
      title: "Future Project 1",
      description: "Description for my next great work, coming soon!",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "",
      github: ""
    },
    {
      title: "Future Project 2",
      description: "Another exciting project is in the works! I'll fill in the details here soon.",
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "",
      github: ""
    }
  ];

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  const handleShowLess = () => {
    setVisibleProjects(2);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              IM'SKH
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: t('nav_home') },
                { id: 'about', label: t('nav_about') },
                { id: 'work', label: t('nav_work') },
                { id: 'contact', label: t('nav_contact') }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-rajdhani font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`font-rajdhani font-medium text-sm transition-all duration-300 ${i18n.language === 'en' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
              >
                EN
              </button>
              <span className="text-gray-500">|</span>
              <button
                onClick={() => changeLanguage('fr')}
                className={`font-rajdhani font-medium text-sm transition-all duration-300 ${i18n.language === 'fr' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
              >
                FR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-cyan-400/20">
              {[
                { id: 'home', label: t('nav_home') },
                { id: 'about', label: t('nav_about') },
                { id: 'work', label: t('nav_work') },
                { id: 'contact', label: t('nav_contact') }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 font-rajdhani font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 
              className="text-6xl md:text-8xl font-black font-orbitron mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent glitch-effect"
              data-text={t('hero_title')}
            >
              {t('hero_title')}
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold font-rajdhani mb-6 text-gray-200 animate-fade-in-up animation-delay-300">
            {t('hero_subtitle')}
          </h2>
          
          <p className="text-xl md:text-2xl font-rajdhani font-light text-gray-400 mb-8 animate-fade-in-up animation-delay-600">
            {t('hero_hook')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <button
              onClick={() => scrollToSection('work')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-rajdhani font-semibold text-lg hover:shadow-neon-cyan transition-all duration-300 hover:scale-105"
            >
              {t('hero_button_work')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 rounded-full font-rajdhani font-semibold text-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan"
            >
              {t('hero_button_contact')}
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              {t('about_title')}
            </h2>
            <p className="text-xl font-rajdhani text-gray-400 max-w-2xl mx-auto">
              {t('about_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('work_title')}
            </h2>
            <p className="text-xl font-rajdhani text-gray-400 max-w-2xl mx-auto">
              {t('work_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-neon-purple"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg font-rajdhani font-semibold text-sm hover:shadow-neon-green transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      {t('work_button_demo')}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-purple-400 text-purple-400 rounded-lg font-rajdhani font-semibold text-sm hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-neon-purple"
                    >
                      <Github size={16} />
                      {t('work_button_github')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {projects.length > 2 && (
            <div className="text-center mt-12">
              {visibleProjects < projects.length ? (
                <button
                  onClick={handleShowMore}
                  className="px-8 py-3 border-2 border-cyan-400 rounded-full font-rajdhani font-semibold text-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan flex items-center gap-2 mx-auto"
                >
                  {t('work_show_more')} <ChevronDown size={20} />
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="px-8 py-3 border-2 border-cyan-400 rounded-full font-rajdhani font-semibold text-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan flex items-center gap-2 mx-auto"
                >
                  {t('work_show_less')} <ChevronUp size={20} />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contact_title')}
            </h2>
            <p className="text-xl font-rajdhani text-gray-400 max-w-2xl mx-auto">
              {t('contact_subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-6">
                {t('contact_form_title')}
              </h3>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact_placeholder_name')}
                    required // Added 'required'
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg font-rajdhani text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact_placeholder_email')}
                    required // Added 'required'
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg font-rajdhani text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={t('contact_placeholder_message')}
                    rows={5}
                    required // Added 'required'
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg font-rajdhani text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-rajdhani font-bold text-lg hover:shadow-neon-cyan transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {t('contact_button_send')}
                </button>
              </form>
            </div>
            
            {/* Social Links */}
            <div className="space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-rajdhani text-green-400 mb-6">
                  {t('social_title')}
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="sofianegrafic@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-neon-cyan"
                  >
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:shadow-neon-cyan transition-all duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-rajdhani font-semibold text-cyan-400">
                        {t('social_email')}
                      </div>
                      <div className="font-rajdhani text-gray-400">sofianegrafic@gmail.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/skh001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-neon-purple"
                  >
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:shadow-neon-purple transition-all duration-300">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-rajdhani font-semibold text-purple-400">
                        {t('social_github')}
                      </div>
                      <div className="font-rajdhani text-gray-400">@skh001</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/skh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-neon-green"
                  >
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg group-hover:shadow-neon-green transition-all duration-300">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-rajdhani font-semibold text-green-400">
                        {t('social_linkedin')}
                      </div>
                      <div className="font-rajdhani text-gray-400">linkedin.com/in/skh</div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/imskhdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-neon-green"
                  >
                   <div className="p-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-amber-500 rounded-lg group-hover:shadow-neon-green transition-all duration-300">
                      <Instagram className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-rajdhani font-semibold text-green-400">
                        {t('social_instagram')}
                      </div>
                      <div className="font-rajdhani text-gray-400">@imskhdev</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-gray-800 rounded-2xl shadow-lg p-8 text-center animate-bounce">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {t('Thank you for reaching out!')}
                </h3>
                <p className="text-gray-400">
                  {t('I will get back to you as soon as possible.')}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="font-rajdhani text-gray-400">
            {t('footer_text')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
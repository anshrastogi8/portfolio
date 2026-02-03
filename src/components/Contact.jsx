import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
    id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div 
          className={`text-center mb-5 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="text-cyan-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Connect</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to new creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
          </p>
        </div>
        <div 
          className={`text-center transition-all py-6 duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-12 max-w-3xl mx-auto">
            <p className="text-gray-400 mb-8 text-lg">
              Let's build something amazing together. Whether it's a full-stack application, a challenging backend system, or innovative frontend experience.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:anshrastogi8@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              
              <a
                href="./AnshRastogi.pdf"
                download="AnshRastogi_Resume.pdf"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div 
          className={`mt-10 flex items-center justify-center gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a
            href="https://github.com/anshrastogi8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/anshrastogi8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a
            href="mailto:anshrastogi8@gmail.com"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-full transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
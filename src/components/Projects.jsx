import React, { useEffect, useRef, useState } from 'react';
import { 
  Github, Cpu, Server, Database, 
  ShieldCheck, Smartphone, Plane, Dumbbell, 
  Code2, Workflow, Layout, Layers, Zap, ExternalLink, Monitor
} from 'lucide-react';

import fitnessDash from '/Fitness.png'; 
import ixgioDash from '/Ixigo.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: "AI Fitness Recommendation",
      subtitle: "Distributed Event-Driven Platform",
      description: "A high-performance distributed platform focusing on real-time data streaming and reactive AI processing. Built to handle massive concurrent data ingestion.",
      icon: Dumbbell,
      image: fitnessDash,
      color: "emerald",
      github: "https://github.com/anshrastogi8/fitness-app",
      features: [
        { icon: Server, title: "Microservices Mesh", desc: "Spring Cloud, Eureka, and API Gateway for high availability." },
        { icon: Cpu, title: "Event Streaming", desc: "Kafka-driven asynchronous pipeline for AI recommendations." }
      ],
      tags: ["React", "Java", "Spring Boot", "Kafka", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      title: "ShopKart Mobile",
      subtitle: "E-Commerce Mobile App",
      description: "Offline-first mobile commerce engine. Engineered a resilient synchronization layer to reconcile local state with remote APIs post-network restoration.",
      icon: Smartphone,
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=ShopKart+Mobile", 
      color: "blue",
      github: "https://github.com/anshrastogi8/shopkart.git",
      features: [
        { icon: Zap, title: "Performance Tuning", desc: "React memoization and component lazy loading optimization." },
        { icon: Database, title: "Offline-First", desc: "Resilient sync layer using AsyncStorage for state persistence." }
      ],
      tags: ["React Native", "Redux", "TypeScript", "Java", "Spring Boot"]
    },
    {
      id: 3,
      title: "Ixigo Clone",
      subtitle: "Scalable Booking Engine",
      description: "A booking engine engineered for high-concurrency, featuring real-time seat mapping and strict ACID compliance for transactional reliability.",
      icon: Plane,
      image: ixgioDash, 
      color: "purple",
      github: "https://github.com/anshrastogi8/ixigo_clone.git",
      features: [
        { icon: Layout, title: "Frontend Engine", desc: "Virtual seat-map with optimized re-renders for real-time selection." },
        { icon: ShieldCheck, title: "Data Integrity", desc: "100% transactional consistency across complex booking rollbacks." }
      ],
      tags: ["Java", "Spring Boot", "MySQL", "React.js", "REST APIs"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((section) => { if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  const colorVariants = {
    emerald: { text: "text-emerald-400", border: "border-emerald-500/20", glow: "from-emerald-500/10", tag: "bg-emerald-500/5" },
    blue: { text: "text-blue-400", border: "border-blue-500/20", glow: "from-blue-500/10", tag: "bg-blue-500/5" },
    purple: { text: "text-purple-400", border: "border-purple-500/20", glow: "from-purple-500/10", tag: "bg-purple-500/5" },
    cyan: { text: "text-cyan-400", border: "border-cyan-500/20", glow: "from-cyan-500/10", tag: "bg-cyan-500/5" }
  };

  return (
    <div id="projects" className="min-h-screen bg-[#030305] py-24 text-white selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col mb-32">
          <div className="flex items-center gap-3 mb-2">
             <Code2 className="text-cyan-400" size={24} />
             <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Selected Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Featured <span className="text-white/20">Systems.</span>
          </h2>
        </div>

        <div className="space-y-30">
          {projects.map((project, index) => {
            const colors = colorVariants[project.color];
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                ref={el => sectionsRef.current[index] = el}
                data-id={`project-${project.id}`}
                className={`transition-all duration-1000 mb-40 ${
                  isVisible[`project-${project.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className={`absolute -inset-6 bg-gradient-to-br ${colors.glow} to-transparent rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-700`}></div>
                      <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0f] overflow-hidden shadow-2xl">
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full font-mono text-xs text-white/60">
                          0{project.id}
                        </div>
                        <div className="aspect-[16/10] relative">
                            <img src={project.image} loading="lazy" alt={project.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className={`text-4xl font-black opacity-10 font-mono`}>0{project.id}</span>
                        <span className={`text-xs font-mono tracking-[0.3em] ${colors.text} uppercase font-bold`}>{project.subtitle}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight">{project.title}</h3>
                        <a href={project.github} target="_blank" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group/icon">
                          <Github size={22} className="text-white/40 group-hover/icon:text-cyan-400" />
                        </a>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-white/5">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${colors.text}`}>
                                <feature.icon size={18} />
                          </div>
                          <div className="space-y-1">
                             <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{feature.title}</h4>
                             <p className="text-[11px] text-gray-500 leading-snug">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1.5 ${colors.tag} border border-white/5 rounded-lg text-[10px] font-mono text-gray-300 tracking-wider uppercase`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
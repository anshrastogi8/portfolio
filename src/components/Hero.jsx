import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(nameRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(titleRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 }, "-=0.6")
      .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.6")
      .fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.4");
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] py-20 mt-4"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className=" mb-4">
          <span
            ref={nameRef}
            className="text-sm md:text-2xl block font-mono text-cyan-400 mb-2 tracking-[0.4em] uppercase font-medium"
          >
            Ansh Rastogi
          </span>

          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
            <div className="block">Full Stack</div>
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent pb-4">
              Engineer.
            </div>
          </h1>
        </div>

        <div ref={descRef} className="space-y-2 max-w-2xl mx-auto">

          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            An engineer driven by the challenge of building systems that thrive under pressure.
            With a <span className="text-white font-medium italic">proven track record of architecting enterprise-grade software</span>,
            I specialize in architecting the bridge between robust <span className="text-cyan-400 font-mono text-sm uppercase">Spring Boot</span> backends and
            high-performance <span className="text-indigo-400 font-mono text-sm uppercase">React</span> interfaces.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            I don't just ship features; I solve for the "hard" parts of engineering—<span className="text-gray-200">concurrency, data integrity, and system resilience</span>.
            My goal is to transform technical complexity into clean, failure-aware architecture.
          </p>

          <div className="border-t border-white/5 inline-block">
            <div className="mt-2 flex items-center justify-center gap-6 opacity-30">
              {['Build', 'Scale', 'Optimize'].map((tag) => (
                <span key={tag} className="text-[15px] font-mono uppercase tracking-[0.3em] text-white italic">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <button
          ref={buttonRef}
          onClick={() => scrollToSection('experience')}
          className="mt-6 group flex flex-col items-center gap-3 mx-auto transition-all duration-300"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-cyan-400 transition-colors">
            Explore Portfolio
          </span>
          <div className="p-2 rounded-full border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all animate-bounce">
            <ArrowDown className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
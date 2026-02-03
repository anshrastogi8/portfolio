import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experience = {
    company: "ENDAVA",
    location: "Bengaluru, Karnataka",
    roles: [
      {
        title: "Developer",
        period: "JANUARY 2025 - PRESENT",
        current: true
      },
      {
        title: "Associate Developer",
        period: "AUGUST 2023 - DECEMBER 2024",
        current: false
      }
    ],
    achievements: [
      "Delivered React.js frontend features by consuming Spring Boot RESTful APIs, managing client-side state, and ensuring seamless backend–UI integration across modules.",
      "Migrated a legacy JSP and Oracle-based application to React.js, Spring Boot, and PostgreSQL, modernizing 3+ critical workflows and improving system scalability and maintainability.",
      "Executed 3 end-to-end backend-driven modules (data upload, mapping, and report generation), improving reporting accuracy by 25%.",
      "Optimized backend claim comparison pipelines handling 1M+ records, reducing execution time by 30% through algorithm optimization and SQL query tuning.",
      "Reduced API response times from ~30 seconds to ~10 seconds by implementing efficient pagination, indexing, and database-level performance optimizations.",
      "Wrote clean, modular, and reusable code with ~80% unit test coverage, reducing post-release defects by 30%."
    ]
  };

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
      id="experience"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0f] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div
          className={`flex items-center gap-4 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center gap-4">
            <Briefcase className="text-cyan-500" size={32} strokeWidth={2.5} />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Experience</span>
              <span className="text-cyan-500">.</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
        </div>

        <div
          className={`bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="p-8 border-b border-white/10">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-3">
                  {experience.company}
                </p>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                {experience.roles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {role.title}
                      </h3>
                      {role.current && (
                        <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-[10px] font-semibold">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-mono text-gray-400">{role.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {experience.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  <span className="text-cyan-400 flex-shrink-0">●</span>
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {['Full-Stack Developer', 'Backend & API Development', 'Java', 'Spring Framework', 'Spring Boot', 'Hibernate', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'PostgreSQL', 'MongoDB', 'REST APIs', 'JWT', 'Docker', 'Git', 'Maven', 'JUnit', 'Mockito'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium rounded-lg hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
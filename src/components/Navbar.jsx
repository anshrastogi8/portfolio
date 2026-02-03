import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const elm = document.getElementById(id);
    if (elm) {
      elm.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-[#000000] backdrop-blur-md flex items-center justify-between px-6 md:px-16 z-[100] border-b border-[#111111] text-white">
      <div
        className="flex items-center gap-2 text-[26px] font-bold tracking-tighter cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <span className="bg-gradient-to-r from-[#00fbff] via-[#2d76ff] to-[#9d50bb] bg-clip-text text-transparent">
          AR
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="text-[14px] font-medium tracking-wide hover:text-[#00fbff] transition-colors uppercase font-mono"
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}

        <a
          href="./AnshRastogi.pdf"
          download="AnshRastogi_Resume.pdf"
          className="text-[14px] font-medium tracking-wide border border-white/10 px-4 py-1.5 rounded-full hover:border-[#00fbff] hover:text-[#00fbff] transition-all uppercase font-mono"
        >
          Resume
        </a>
      </div>

      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`
        fixed top-[70px] left-0 w-full h-screen bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden
        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}>
        <div className="flex flex-col items-center justify-start pt-20 gap-8 h-full">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="text-2xl font-bold tracking-tighter hover:text-[#00fbff]"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
          <a
            href="./AnshRastogi.pdf"
            download="AnshRastogi_Resume.pdf"
            className="text-2xl font-bold tracking-tighter text-[#00fbff]"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
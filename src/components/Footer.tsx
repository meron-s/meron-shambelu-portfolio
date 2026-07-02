import { ChevronUp, Github, Linkedin, MessageSquare } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] border-t border-white/10 text-slate-400 py-12 relative">
      {/* Scroll to Top Arrow */}
      <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2">
        <button
          id="footer-back-to-top-btn"
          onClick={handleScrollToTop}
          className="p-3 rounded-full border border-white/10 bg-[#020617] text-slate-400 hover:text-white hover:border-brand-purple transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left Column: branding */}
        <div className="space-y-2">
          <span className="text-xl font-display font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            {portfolioData.firstName.toUpperCase()}
          </span>
          <p className="text-xs text-slate-500 font-mono">
            {portfolioData.title}
          </p>
        </div>

        {/* Middle Column: short navigation */}
        <div className="flex justify-center flex-wrap gap-4 text-xs font-mono font-medium">
          <button onClick={() => onScrollToSection("about")} className="hover:text-white transition">About</button>
          <button onClick={() => onScrollToSection("skills")} className="hover:text-white transition">Skills</button>
          <button onClick={() => onScrollToSection("projects")} className="hover:text-white transition">Projects</button>
          <button onClick={() => onScrollToSection("education")} className="hover:text-white transition">Studies</button>
          <button onClick={() => onScrollToSection("contact")} className="hover:text-white transition">Contact</button>
        </div>

        {/* Right Column: Social Connection and Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex gap-4">
            <a
              id="footer-social-github"
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-linkedin"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-social-telegram"
              href={portfolioData.contact.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[10px] font-mono text-slate-600">
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

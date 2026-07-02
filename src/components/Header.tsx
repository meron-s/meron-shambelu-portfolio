import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "../data/portfolioData";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Studies", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Stats", id: "github-stats" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070f]/80 backdrop-blur-md border-b border-slate-900/50 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Branding */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-1.5 focus:outline-none group text-left cursor-pointer"
        >
          <span className="text-2xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple group-hover:opacity-90 transition-opacity">
            {portfolioData.firstName.toUpperCase()}
          </span>
          <span className="text-2xl font-display font-light text-slate-400 group-hover:text-white transition-colors">
            {portfolioData.lastName.substring(0, 4).toUpperCase()}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-mono uppercase tracking-widest font-semibold transition-all hover:text-white relative cursor-pointer ${
                activeSection === item.id ? "text-brand-purple font-bold" : "text-slate-400"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-gradient-brand rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Side Actions (Theme, Socials, Menu trigger) */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* GitHub Shortcuts (Desktop Only) */}
          <a
            id="header-nav-github"
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2.5 rounded-full border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white hover:border-brand-purple/40 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-trigger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white hover:border-brand-purple/40 transition cursor-pointer"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop click closer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[72px] bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden"
            />

            {/* Navigation panel drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-[72px] bottom-0 w-72 bg-[#05070f] border-l border-slate-900 p-6 z-40 lg:hidden flex flex-col justify-between"
            >
              <div className="space-y-6">
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Navigations</span>
                <nav className="flex flex-col space-y-4 text-left">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-sm font-display font-bold py-2 border-b border-slate-950 text-left transition ${
                        activeSection === item.id ? "text-brand-purple" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Social connect shortcuts */}
              <div className="space-y-4 pt-6 border-t border-slate-900">
                <span className="text-[10px] font-mono uppercase text-slate-600 tracking-wider">Quick Directory</span>
                <div className="flex gap-4 text-slate-400">
                  <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
                  <a href={portfolioData.contact.telegram} target="_blank" rel="noreferrer" className="hover:text-white transition"><MessageSquare className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

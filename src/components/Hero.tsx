import { useState, useEffect } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JavaScript", "C++"];
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const wordPause = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), wordPause);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  const handleDownloadCV = () => {
    // Elegant CV download handler, printing page or downloading a mock custom formatted text profile
    const element = document.createElement("a");
    const file = new Blob([
      `MERON SHAMBELU - PORTFOLIO RESUME
==================================
Title: ${portfolioData.title}
Location: ${portfolioData.contact.location}
Email: ${portfolioData.contact.email}
Phone: ${portfolioData.contact.phone}
GitHub: ${portfolioData.contact.github}
LinkedIn: ${portfolioData.contact.linkedin}

EDUCATION
=========
B.Sc. in Software Engineering - Debre Berhan University (GPA: 3.85/4.00)

TECHNICAL SKILLS
================
Frontend: React, TypeScript, HTML/CSS, Tailwind CSS v4, Framer Motion
Backend: Node.js, Express.js, MongoDB, RESTful APIs, C++
Tools: Git, VS Code, Postman, Vercel

PROJECTS
========
1. Mesi Coffee (Artisanal Café Web Interface)
   Live Link: https://mesi-coffee.vercel.app/
2. DBU Software Engineering GPA Portal
   Live Link: https://dbu-se-gpa-calculator.vercel.app/
3. EthioBooks Digital Library (Bilingual Reading Experience)
   Live Link: https://ethiobooks-digital-library.onrender.com
`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Meron_Shambelu_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#020617] dark:bg-[#020617] transition-colors duration-300"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/10 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#0f172a50_1px,transparent_1px),linear-gradient(to_bottom,#0f172a50_1px,transparent_1px)] opacity-50" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - Content */}
        <motion.div
          id="hero-content-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md max-w-max">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-400">Available for Internships & Junior Positions</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-display font-medium text-slate-400">Hi, I'm</h4>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                {portfolioData.name}
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-display font-medium text-slate-300">
              {portfolioData.title}
            </p>
          </div>

          {/* Typing Tech Container */}
          <div className="h-10 flex items-center">
            <span className="text-lg md:text-xl text-slate-400 font-mono">
              Expertise in{" "}
              <span className="text-brand-purple font-semibold cursor-blink">
                {displayedText}
              </span>
            </span>
          </div>

          <p className="text-base text-slate-400 max-w-xl leading-relaxed">
            {portfolioData.subTitle}. Based in Addis Ababa, pursuing my degree at Debre Berhan University. Creating optimized, elegant products in React and modern system layers.
          </p>

          {/* Action Call buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              id="hero-view-projects-btn"
              onClick={() => onScrollToSection("projects")}
              className="px-6 py-3 rounded-lg bg-gradient-brand text-white font-medium hover:opacity-90 shadow-lg shadow-brand-blue/20 flex items-center space-x-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-download-cv-btn"
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-200 font-medium hover:bg-slate-800/80 hover:text-white flex items-center space-x-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => onScrollToSection("contact")}
              className="px-6 py-3 rounded-lg border border-slate-800 hover:border-brand-blue bg-transparent text-slate-300 font-medium hover:text-white flex items-center space-x-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>

          {/* Short social connections */}
          <div className="flex items-center space-x-4 pt-6 text-slate-400 border-t border-slate-900 max-w-md">
            <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">Connect with me:</span>
            <a
              id="hero-social-github"
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="GitHub profile link"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              id="hero-social-linkedin"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="LinkedIn profile link"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              id="hero-social-telegram"
              href={portfolioData.contact.telegram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="Telegram profile link"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right column - Portrait/Visual illustration */}
        <motion.div
          id="hero-avatar-col"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Background spinning gradient borders */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple blur-md opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,#3b82f6,#8b5cf6)] p-1.5 animate-pulse" />

            {/* Main picture container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border border-slate-800 bg-slate-950">
              <img
                id="hero-profile-avatar-img"
                src="/src/assets/images/meron_profile.png"
                alt="Meron Shambelu"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Tiny decoration nodes */}
            <div className="absolute top-[10%] left-[-5%] bg-slate-900/90 border border-slate-800 text-brand-blue text-xs font-mono py-1.5 px-3 rounded-lg shadow-xl backdrop-blur-md animate-bounce">
              {"<React />"}
            </div>
            <div className="absolute bottom-[20%] right-[-5%] bg-slate-900/90 border border-slate-800 text-brand-purple text-xs font-mono py-1.5 px-3 rounded-lg shadow-xl backdrop-blur-md">
              {"const meron = Student()"}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative slider button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => onScrollToSection("about")}>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1.5">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border border-slate-800 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-2 rounded-full bg-brand-purple"
          />
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Sparkles, Terminal } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Entrance loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Section observer to update active links on scroll
  useEffect(() => {
    if (loading) return;

    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "education",
      "experience",
      "certificates",
      "achievements",
      "github-stats",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [loading]);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#05070f] text-white min-h-screen selection:bg-brand-purple/30 selection:text-white antialiased">
      <AnimatePresence mode="wait">
        {loading ? (
          /* High-Fidelity Entrance Preloader */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 bg-[#05070f] z-50 flex flex-col items-center justify-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 rounded-full bg-slate-900/30 border border-slate-800 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-brand blur-md opacity-25 animate-pulse" />
              <Terminal className="w-10 h-10 text-brand-purple" />
            </motion.div>

            <div className="space-y-1 text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-display font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-brand uppercase"
              >
                Meron Shambelu
              </motion.h1>
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xs font-mono text-slate-500"
              >
                Initializing Engineering Portfolio...
              </motion.p>
            </div>

            {/* Simulated progress indicator bar */}
            <div className="w-48 h-[3px] bg-slate-900 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-brand rounded-full"
              />
            </div>
          </motion.div>
        ) : (
          /* Main Application Grid */
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Ambient Background Lights */}
            <div className="fixed top-[15%] right-[10%] w-[30vw] h-[30vw] bg-brand-blue/3 rounded-full filter blur-[150px] pointer-events-none z-0" />
            <div className="fixed bottom-[15%] left-[5%] w-[35vw] h-[35vw] bg-brand-purple/3 rounded-full filter blur-[150px] pointer-events-none z-0" />

            {/* Header Sticky Container */}
            <Header
              onScrollToSection={handleScrollToSection}
              activeSection={activeSection}
            />

            {/* Sections Wrapper */}
            <main className="relative z-10">
              <Hero onScrollToSection={handleScrollToSection} />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Experience />
              <Certificates />
              <Achievements />
              <GithubStats />
              <Contact />
            </main>

            {/* Footer Container */}
            <Footer onScrollToSection={handleScrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

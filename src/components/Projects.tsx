import { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { FolderGit2, Github, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured" | "web" | "system">("all");

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const filteredProjects = portfolioData.projects.filter(proj => {
    if (filter === "featured") return proj.featured;
    if (filter === "web") return proj.techs.includes("React 19") || proj.techs.includes("React") || proj.techs.includes("React (Vite)");
    if (filter === "system") return proj.techs.includes("C++");
    return true; // "all"
  });

  return (
    <section
      id="projects"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute bottom-[-5%] right-[5%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <FolderGit2 className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Engineering Artifacts</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            My Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Projects
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 mt-4 max-w-lg mx-auto leading-relaxed font-mono">
            A handpicked selection of production-grade portfolios and departmental software modules. Click cards to access interactive simulations.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(["all", "featured", "web", "system"] as const).map(cat => (
            <button
              key={cat}
              id={`project-filter-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all cursor-pointer ${
                filter === cat
                  ? "bg-gradient-brand text-white border-transparent shadow-md"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
              }`}
            >
              {cat === "all" ? "All Projects" :
               cat === "featured" ? "★ Featured" :
               cat === "web" ? "Web Apps" : "C++ Systems"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bento-card overflow-hidden shadow-xl"
            >
              {/* Image box */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {project.featured && (
                    <span className="bg-brand-purple text-white text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-purple transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Techs badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techs.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 4 && (
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-md">
                      +{project.techs.length - 4} more
                    </span>
                  )}
                </div>

                {/* Buttons container */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                  <button
                    id={`project-explore-${project.id}`}
                    onClick={() => handleOpenDetails(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-xs flex justify-center items-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Inspect & Simulate</span>
                  </button>

                  <div className="flex gap-1.5">
                    {project.github && (
                      <a
                        id={`project-git-${project.id}`}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition"
                        title="View Github Code"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        id={`project-demo-${project.id}`}
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition"
                        title="View Live Demo"
                        aria-label="Live Demo link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

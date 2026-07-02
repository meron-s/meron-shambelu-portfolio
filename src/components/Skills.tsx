import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Hammer } from "lucide-react";
import IconRenderer from "./IconRenderer";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute top-[-5%] left-[10%] w-[35%] h-[35%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Hammer className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Technological Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Competencies
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-500 mt-4 max-w-lg mx-auto leading-relaxed font-mono">
            Hover over elements to see proficiency tiers based on university curricula and real-world creations.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.skills.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="bento-card p-6 md:p-8 flex flex-col space-y-6 text-left"
            >
              <h3 className="text-xl font-display font-semibold text-slate-200 border-b border-white/10 pb-3">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5 group">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-2">
                        <IconRenderer
                          name={skill.icon}
                          className="w-4 h-4 text-brand-blue group-hover:scale-110 group-hover:text-brand-purple transition-all"
                        />
                        <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-brand-purple transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* ProgressBar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.05 }}
                        className="h-full bg-gradient-brand rounded-full group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-shadow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

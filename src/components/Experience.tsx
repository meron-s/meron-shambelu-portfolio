import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Briefcase, CheckCircle, Code, Star, HeartHandshake } from "lucide-react";

export default function Experience() {
  const getIcon = (tag: string) => {
    if (tag.includes("Projects")) return <Code className="w-5 h-5 text-brand-blue" />;
    if (tag.includes("Source")) return <Star className="w-5 h-5 text-brand-purple" />;
    return <HeartHandshake className="w-5 h-5 text-pink-400" />;
  };

  return (
    <section
      id="experience"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute top-[-5%] right-[10%] w-[35%] h-[35%] bg-brand-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Briefcase className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Practical Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Endeavors
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bento-card p-6 md:p-8 flex flex-col text-left"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(exp.tag)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand-purple uppercase tracking-wider block font-semibold">
                      {exp.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500 block">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-display font-bold text-white mb-3">
                {exp.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mt-auto">
                <p className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Key Commitments</p>
                {exp.highlights.map((high, hIdx) => (
                  <div key={hIdx} className="flex items-start text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

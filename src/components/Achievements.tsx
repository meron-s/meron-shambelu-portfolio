import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Sparkles, Trophy, Lightbulb, Users, FileCheck } from "lucide-react";

export default function Achievements() {
  const getIcon = (category: string) => {
    switch (category) {
      case "hackathon":
        return <Trophy className="w-6 h-6 text-brand-blue" />;
      case "award":
        return <Sparkles className="w-6 h-6 text-brand-purple" />;
      case "leadership":
        return <Users className="w-6 h-6 text-pink-500" />;
      default:
        return <Lightbulb className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute bottom-[-5%] left-[15%] w-[35%] h-[35%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Trophy className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Honors & Accolades</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Achievements &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Recognition
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioData.achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bento-card p-6 flex items-start gap-5 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className="flex-shrink-0 p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                {getIcon(ach.category)}
              </div>

              {/* Content */}
              <div className="space-y-1.5 flex-1 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {ach.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{ach.date}</span>
                </div>
                <h3 className="text-base font-display font-bold text-white group-hover:text-brand-purple transition-colors">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

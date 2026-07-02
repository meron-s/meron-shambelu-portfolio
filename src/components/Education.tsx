import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { GraduationCap, Award, CheckCircle, Lightbulb } from "lucide-react";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="education"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative overflow-hidden"
    >
      <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <GraduationCap className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Academic Foundations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Studies
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bento-card p-8 md:p-10 relative"
            >
              {/* Highlight Background Flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-tr-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 text-left">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-mono text-brand-purple bg-brand-purple/10 border border-brand-purple/20 rounded-md mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-slate-400 font-medium mt-1">{edu.institution}</p>
                </div>

                {edu.gpa && (
                  <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Award className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-[10px] font-mono uppercase text-emerald-500">Academic Standing</p>
                      <p className="text-sm font-bold font-mono">{edu.gpa}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-[1px] bg-white/10 my-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Coursework column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    <span>Selected Rigorous Coursework</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.courses.map((course, cIdx) => (
                      <div key={cIdx} className="text-xs text-slate-400 flex items-center gap-2 font-medium bg-white/5 p-2 border border-white/10 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic interests column */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-brand-purple" />
                    <span>Scholastic Focus & Fields</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.interests.map((interest, iIdx) => (
                      <span key={iIdx} className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:border-brand-purple/40 hover:text-white transition duration-200">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

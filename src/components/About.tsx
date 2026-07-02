import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Award, Code, BookOpen, User, Languages } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative overflow-hidden"
    >
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <User className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Discover My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Journey
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Bio & Career Objectives */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bento-card p-8"
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {portfolioData.aboutText}
              </p>
              <div className="h-[1px] bg-white/10 my-6" />
              <h3 className="text-xl font-display font-semibold mb-3 text-brand-purple flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Career Objective</span>
              </h3>
              <p className="text-slate-400 leading-relaxed italic">
                "{portfolioData.careerObjective}"
              </p>
            </motion.div>

            {/* Core Values Bento Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-mono text-slate-300 uppercase tracking-wider pl-2">Professional Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bento-card p-4 !rounded-xl flex items-start space-x-3"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bilingual Languages Section */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bento-card p-6"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-brand-blue" />
                <span>Language Competencies</span>
              </h3>
              <div className="space-y-4">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-slate-200">{lang.language}</span>
                      <span className="text-xs font-mono text-slate-400">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-brand rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Block: Learning Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-mono text-slate-300 uppercase tracking-wider pl-2">Learning Milestone Timeline</h3>
            <div className="relative border-l border-white/10 ml-4 pl-8 space-y-10 py-4">
              {portfolioData.learningJourney.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full border border-white/10 bg-[#020617] flex items-center justify-center group-hover:border-brand-purple transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-brand-blue group-hover:bg-brand-purple transition-colors" />
                  </div>

                  {/* Year Tag */}
                  <span className="inline-block px-3 py-1 text-xs font-mono text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-md mb-2">
                    {milestone.year}
                  </span>

                  {/* Card Content with subtle Bento Grid touch */}
                  <div className="bento-card p-5">
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-brand-purple transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

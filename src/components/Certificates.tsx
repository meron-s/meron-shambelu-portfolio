import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Award, ExternalLink, Calendar, CheckSquare } from "lucide-react";
import IconRenderer from "./IconRenderer";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute top-[-5%] left-[5%] w-[35%] h-[35%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Award className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Verifiable Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Certificates &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Badges
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioData.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bento-card p-6 flex flex-col justify-between group text-left relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-blue group-hover:text-brand-purple transition-colors">
                    <IconRenderer name={cert.logo} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-sm font-display font-bold text-white group-hover:text-brand-purple leading-snug transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-1">
                  Issued by {cert.issuer}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>Verified Badge</span>
                </span>
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <a
                    id={`cert-link-${idx}`}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded text-slate-500 hover:text-white transition"
                    title="View Credential Registry"
                    aria-label="Verification link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

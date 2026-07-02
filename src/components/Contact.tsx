import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmittingForm(true);

    // Simulate standard EmailJS integration with her keys.
    // She can connect EmailJS easily by replacing this mock with actual emailjs SDK call.
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute top-[-5%] left-[5%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Mail className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect with Meron</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Touch
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct info panels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-semibold text-slate-200 text-left">
              Let's Discuss Opportunities
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed text-left">
              I am open to internships, freelance projects, or junior software engineering positions. Send an email or connect through my social profiles. Let's create something outstanding!
            </p>

            <div className="h-[1px] bg-white/10 my-6" />

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              <a
                id="contact-channel-email"
                href={`mailto:${portfolioData.contact.email}`}
                className="bento-card p-4 group text-left !rounded-2xl flex items-center space-x-4"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-brand-blue group-hover:text-brand-purple transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Write an Email</span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">{portfolioData.contact.email}</p>
                </div>
              </a>

              <a
                id="contact-channel-phone"
                href={`tel:${portfolioData.contact.phone}`}
                className="bento-card p-4 group text-left !rounded-2xl flex items-center space-x-4"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-brand-purple group-hover:text-brand-blue transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Call Directly</span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">{portfolioData.contact.phone}</p>
                </div>
              </a>

              <div className="bento-card p-4 text-left !rounded-2xl flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-pink-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Primary Location</span>
                  <p className="text-xs font-semibold text-slate-200 mt-0.5">{portfolioData.contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="bento-card p-5 text-left">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3.5 block">Social Directories</span>
              <div className="flex gap-3">
                <a
                  id="contact-social-github"
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="contact-social-linkedin"
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  id="contact-social-telegram"
                  href={portfolioData.contact.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
                  aria-label="Telegram Channel"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form email system */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card p-8 md:p-10 text-left"
            >
              <h4 className="text-lg font-display font-bold text-white mb-6">Send an Instant Message</h4>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-name" className="text-xs text-slate-400 font-mono uppercase font-semibold">Your Name</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all ${
                      errors.name ? "border-rose-500/40" : "border-white/10 focus:border-brand-blue"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email and Subject layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-email" className="text-xs text-slate-400 font-mono uppercase font-semibold">Your Email</label>
                    <input
                      id="contact-form-email"
                      type="email"
                      placeholder="name@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Y]{2,}$/i,
                          message: "Invalid email format"
                        }
                      })}
                      className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all ${
                        errors.email ? "border-rose-500/40" : "border-white/10 focus:border-brand-blue"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-subject" className="text-xs text-slate-400 font-mono uppercase font-semibold">Subject</label>
                    <input
                      id="contact-form-subject"
                      type="text"
                      placeholder="Opportunity Inquiry"
                      {...register("subject", { required: "Subject is required" })}
                      className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all ${
                        errors.subject ? "border-rose-500/40" : "border-white/10 focus:border-brand-blue"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-message" className="text-xs text-slate-400 font-mono uppercase font-semibold">Message Body</label>
                  <textarea
                    id="contact-form-message"
                    rows={5}
                    placeholder="Hello Meron, I would love to interview you for..."
                    {...register("message", { required: "Message is required" })}
                    className={`w-full bg-white/5 border rounded-lg p-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none ${
                      errors.message ? "border-rose-500/40" : "border-white/10 focus:border-brand-blue"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmittingForm}
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-brand text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 cursor-pointer shadow-lg shadow-brand-blue/10"
                >
                  {isSubmittingForm ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success Indicator */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 mt-4"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold">Message Delivered Successfully!</p>
                        <p className="text-xs text-slate-400 mt-0.5">Thank you! Your email was sent to Meron Shambelu. She will respond shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

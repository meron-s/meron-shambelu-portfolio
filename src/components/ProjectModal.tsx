import React, { useState, useEffect } from "react";
import { X, Github, ExternalLink, Coffee, GraduationCap, BookOpen, Plus, Trash2, Sliders, Check, Volume2, Save } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  // INTERACTIVE FEATURE 1: Mesi Coffee Customizer
  const [coffeeSize, setCoffeeSize] = useState<"Medium" | "Large">("Medium");
  const [milkOption, setMilkOption] = useState<"Whole" | "Oat" | "Almond" | "Soy">("Oat");
  const [sweetness, setSweetness] = useState<number>(50); // percentage
  const [coffeeCart, setCoffeeCart] = useState<{ size: string; milk: string; sweetness: number; price: number }[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0); // percentage
  const [promoApplied, setPromoApplied] = useState(false);

  const getCoffeePrice = () => {
    let basePrice = coffeeSize === "Medium" ? 4.50 : 5.75;
    if (milkOption === "Oat" || milkOption === "Almond") basePrice += 0.75;
    return parseFloat(basePrice.toFixed(2));
  };

  const handleAddCoffee = () => {
    setCoffeeCart([...coffeeCart, {
      size: coffeeSize,
      milk: milkOption,
      sweetness: sweetness,
      price: getCoffeePrice()
    }]);
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "COFFEE10") {
      setDiscount(10);
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === "MESI20") {
      setDiscount(20);
      setPromoApplied(true);
    } else {
      alert("Invalid coupon! Use COFFEE10 or MESI20");
    }
  };

  // INTERACTIVE FEATURE 2: GPA Simulator
  const [courses, setCourses] = useState([
    { name: "Web Engineering", credits: 3, grade: "A" },
    { name: "Data Structures", credits: 4, grade: "A-" },
    { name: "Database Systems", credits: 3, grade: "B+" },
    { name: "Software Architecture", credits: 3, grade: "A" }
  ]);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseCredits, setNewCourseCredits] = useState(3);
  const [newCourseGrade, setNewCourseGrade] = useState("A");

  const gradePoints: { [key: string]: number } = {
    "A": 4.0, "A-": 3.75, "B+": 3.5, "B": 3.0, "B-": 2.75, "C+": 2.5, "C": 2.0, "C-": 1.75, "D": 1.0, "F": 0.0
  };

  const handleAddCourse = () => {
    if (!newCourseName.trim()) return;
    setCourses([...courses, { name: newCourseName, credits: newCourseCredits, grade: newCourseGrade }]);
    setNewCourseName("");
  };

  const handleDeleteCourse = (idx: number) => {
    setCourses(courses.filter((_, i) => i !== idx));
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach(c => {
      const points = gradePoints[c.grade] || 4.0;
      totalCredits += c.credits;
      totalPoints += points * c.credits;
    });
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  // INTERACTIVE FEATURE 3: EthioBooks Bilingual Portal
  const [isAmharic, setIsAmharic] = useState(false);
  const [readingFontSize, setReadingFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [readingTheme, setReadingTheme] = useState<"cream" | "dark" | "paper">("cream");
  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [bookReviews, setBookReviews] = useState([
    { user: "Tariku", comment: "Outstanding book collection! Reading legally compiled books is wonderful." },
    { user: "Elizabeth", comment: "በጣም ድንቅ መድረክ ነው። አማርኛ መጻሕፍት መኖራቸው ደስ ይላል።" }
  ]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;
    setBookReviews([...bookReviews, { user: reviewName, comment: reviewComment }]);
    setReviewName("");
    setReviewComment("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d16] border border-slate-800 rounded-2xl overflow-y-auto shadow-2xl z-10 text-white"
          >
            {/* Close button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all z-20 cursor-pointer"
              aria-label="Close detailed viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner/Hero image */}
            <div className="relative h-48 sm:h-64 w-full">
              <img
                id="modal-banner-img"
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 pr-12">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-md uppercase mb-2">
                  Featured Project Details
                </span>
                <h2 className="text-xl md:text-3xl font-display font-bold text-white drop-shadow-md">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Grid Container for Layout */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Descriptions and Core Techs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-2">Introduction</h4>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-3">Key Technical Features</h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple mr-2.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 mb-3">Technologies Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, idx) => (
                      <span key={idx} className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-900">
                  {project.demo && project.demo !== "#" && (
                    <a
                      id="modal-external-demo"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-gradient-brand text-white font-medium hover:opacity-90 flex items-center space-x-2 text-sm transition"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      id="modal-external-github"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-200 font-medium hover:bg-slate-800 hover:text-white flex items-center space-x-2 text-sm transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Dynamic Interactive Micro-App playground */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-900 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-start">
                <div className="mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase font-semibold">Interactive Sandbox</span>
                  <h4 className="text-lg font-display font-bold text-white mt-1">Simulated Preview</h4>
                </div>

                {/* PLAYGROUND: Mesi Coffee */}
                {project.id === "mesi-coffee" && (
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4">
                    <div className="flex items-center space-x-2 text-brand-blue mb-1">
                      <Coffee className="w-5 h-5 animate-pulse" />
                      <span className="text-sm font-mono font-bold uppercase">Beverage Customizer</span>
                    </div>

                    {/* Size selectors */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 uppercase tracking-wider">Size Options</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(["Medium", "Large"] as const).map(size => (
                          <button
                            key={size}
                            onClick={() => setCoffeeSize(size)}
                            className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition ${coffeeSize === size ? "bg-brand-blue text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Milk choices */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-500 uppercase tracking-wider">Milk Alternatives</label>
                      <div className="grid grid-cols-4 gap-1">
                        {(["Whole", "Oat", "Almond", "Soy"] as const).map(milk => (
                          <button
                            key={milk}
                            onClick={() => setMilkOption(milk)}
                            className={`py-1 px-1.5 rounded-md text-[10px] font-mono transition ${milkOption === milk ? "bg-brand-purple text-white" : "bg-slate-900 border border-slate-850 text-slate-400"}`}
                          >
                            {milk}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sweetness slider */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <label className="text-slate-500 uppercase tracking-wider">Sweetness Level</label>
                        <span className="text-brand-purple font-semibold">{sweetness}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sweetness}
                        onChange={(e) => setSweetness(Number(e.target.value))}
                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                      />
                    </div>

                    {/* Dynamic Price */}
                    <div className="flex justify-between items-center py-2.5 border-t border-slate-900">
                      <span className="text-xs text-slate-400">Beverage Cost:</span>
                      <span className="text-base font-mono font-bold text-white">${getCoffeePrice().toFixed(2)}</span>
                    </div>

                    <button
                      onClick={handleAddCoffee}
                      className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium text-xs flex justify-center items-center gap-1.5 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add item to Cup Bag</span>
                    </button>

                    {/* Cart Indicator */}
                    {coffeeCart.length > 0 && (
                      <div className="pt-3 border-t border-slate-900 text-left">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="text-slate-400 font-mono">Shopping Bag ({coffeeCart.length})</span>
                          <button onClick={() => setCoffeeCart([])} className="text-slate-500 hover:text-rose-400 transition">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="max-h-20 overflow-y-auto space-y-1 pr-1">
                          {coffeeCart.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-[11px] font-mono text-slate-400">
                              <span>{item.size} Brew ({item.milk} Milk)</span>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        {/* Promo application */}
                        <div className="flex gap-1.5 mt-3">
                          <input
                            type="text"
                            placeholder="Promo: MESI20"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="flex-1 bg-slate-900 border border-slate-800 rounded-md px-2 py-1 text-xs text-white"
                          />
                          <button
                            onClick={applyPromo}
                            className="bg-brand-blue/20 text-brand-blue hover:bg-brand-blue/30 px-3 py-1 rounded-md text-xs font-mono font-semibold"
                          >
                            Apply
                          </button>
                        </div>
                        {promoApplied && (
                          <div className="text-[10px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>Coupon success! {discount}% Discount applied.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* PLAYGROUND: GPA Calculator */}
                {project.id === "gpa-calculator" && (
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4">
                    <div className="flex items-center space-x-2 text-brand-purple mb-1">
                      <GraduationCap className="w-5 h-5 animate-bounce" />
                      <span className="text-sm font-mono font-bold uppercase">Dynamic Course Auditor</span>
                    </div>

                    <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
                      {courses.map((course, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-900/60 p-2 border border-slate-850 rounded-lg text-xs">
                          <div>
                            <p className="font-semibold text-slate-200">{course.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono">{course.credits} Credits • {course.grade} Grade</p>
                          </div>
                          <button onClick={() => handleDeleteCourse(idx)} className="text-slate-500 hover:text-rose-400 p-1 transition">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Course Addition */}
                    <div className="grid grid-cols-12 gap-1.5 items-end">
                      <div className="col-span-6 space-y-1">
                        <label className="text-[10px] text-slate-500 font-mono uppercase">Course Name</label>
                        <input
                          type="text"
                          placeholder="Compilers"
                          value={newCourseName}
                          onChange={(e) => setNewCourseName(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-md p-1.5 text-xs text-white"
                        />
                      </div>
                      <div className="col-span-3 space-y-1">
                        <label className="text-[10px] text-slate-500 font-mono uppercase">Credits</label>
                        <select
                          value={newCourseCredits}
                          onChange={(e) => setNewCourseCredits(Number(e.target.value))}
                          className="w-full bg-slate-900 border border-slate-800 rounded-md p-1.5 text-xs text-white"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                      <div className="col-span-3 space-y-1">
                        <label className="text-[10px] text-slate-500 font-mono uppercase">Grade</label>
                        <select
                          value={newCourseGrade}
                          onChange={(e) => setNewCourseGrade(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-md p-1.5 text-xs text-white"
                        >
                          {Object.keys(gradePoints).map(g => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleAddCourse}
                      className="w-full py-1.5 rounded-lg bg-brand-purple/20 text-brand-purple hover:bg-brand-purple/30 text-xs font-semibold flex justify-center items-center gap-1.5 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Course to Simulation</span>
                    </button>

                    {/* Grade Standings Block */}
                    <div className="flex justify-between items-center py-3 px-4 bg-slate-900 rounded-lg border border-slate-850 mt-2">
                      <span className="text-xs text-slate-400 font-mono font-medium">Simulated Semester GPA:</span>
                      <span className="text-lg font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                        {calculateGPA()}
                      </span>
                    </div>
                  </div>
                )}

                {/* PLAYGROUND: EthioBooks */}
                {project.id === "ethiobooks" && (
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4 text-left">
                    <div className="flex justify-between items-center text-slate-300">
                      <div className="flex items-center space-x-2 text-brand-blue">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-mono font-bold uppercase">Bilingual Portal</span>
                      </div>
                      <button
                        onClick={() => setIsAmharic(!isAmharic)}
                        className="text-xs px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md text-brand-purple font-mono font-semibold transition"
                      >
                        {isAmharic ? "Switch to English" : "ወደ አማርኛ ቀይር"}
                      </button>
                    </div>

                    {/* Book Reader Box */}
                    <div
                      className={`p-3.5 rounded-lg border text-xs leading-relaxed max-h-36 overflow-y-auto transition-colors ${
                        readingTheme === "cream" ? "bg-amber-50/10 border-amber-900/40 text-amber-200" :
                        readingTheme === "dark" ? "bg-slate-900 border-slate-800 text-slate-300" :
                        "bg-[#fdfaf2] border-amber-200/50 text-slate-800"
                      } ${
                        readingFontSize === "normal" ? "text-xs" :
                        readingFontSize === "large" ? "text-sm" : "text-base"
                      }`}
                    >
                      {isAmharic ? (
                        <div>
                          <p className="font-bold text-center mb-1">ታሪከ ነገሥት</p>
                          <p>ይህ መጽሐፍ በኢትዮጵያ ታሪክ ላይ ያተኩራል። ጥንታዊ የብራና መዛግብትን በማጣቀስ የተፃፈ ሲሆን፣ ታማኝ ታሪካዊ መረጃዎችን ለንባብ ያቀርባል።</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-bold text-center mb-1">The Chronicles of Kings</p>
                          <p>This historical record covers the ancient dynasties of Ethiopia, compiling manuscript notes, legal scrolls, and legacy literature into a modern translation.</p>
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-between items-center text-xs text-slate-500 py-1.5 border-b border-slate-900">
                      <div className="flex gap-2">
                        <button onClick={() => setReadingFontSize("normal")} className={`p-1 rounded ${readingFontSize === "normal" ? "text-brand-blue font-bold" : ""}`}>A</button>
                        <button onClick={() => setReadingFontSize("large")} className={`p-1 rounded text-sm ${readingFontSize === "large" ? "text-brand-blue font-bold" : ""}`}>A+</button>
                        <button onClick={() => setReadingFontSize("xlarge")} className={`p-1 rounded text-base ${readingFontSize === "xlarge" ? "text-brand-blue font-bold" : ""}`}>A++</button>
                      </div>
                      <div className="flex gap-1.5">
                        <button onClick={() => setReadingTheme("cream")} className="w-4 h-4 rounded-full bg-amber-50/20 border border-slate-700" title="Warm" />
                        <button onClick={() => setReadingTheme("dark")} className="w-4 h-4 rounded-full bg-slate-900 border border-slate-700" title="Dark" />
                        <button onClick={() => setReadingTheme("paper")} className="w-4 h-4 rounded-full bg-[#fdfaf2] border border-slate-300" title="Paper" />
                      </div>
                    </div>

                    {/* Book Reviews */}
                    <div className="space-y-2">
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Reader Reviews</p>
                      <div className="space-y-1.5 max-h-24 overflow-y-auto">
                        {bookReviews.map((rev, index) => (
                          <div key={index} className="bg-slate-900/40 p-1.5 rounded text-[11px] border border-slate-850">
                            <span className="font-bold text-brand-purple">{rev.user}: </span>
                            <span className="text-slate-400">{rev.comment}</span>
                          </div>
                        ))}
                      </div>

                      {/* Review submission Form */}
                      <form onSubmit={handleAddReview} className="flex gap-1 mt-2.5">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          className="w-1/3 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[11px] text-white"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Your Comment..."
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[11px] text-white"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-brand-blue text-white px-2.5 py-1 rounded text-[11px] font-mono font-semibold"
                        >
                          Post
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* PLAYGROUND: Other Projects (Fallbacks) */}
                {project.id !== "mesi-coffee" && project.id !== "gpa-calculator" && project.id !== "ethiobooks" && (
                  <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/40 text-center space-y-4">
                    <Sliders className="w-8 h-8 text-brand-blue mx-auto animate-spin" />
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Terminal interfaces are mock-controlled inside C++ platforms. Code logs and standard files are persisted natively inside her GitHub.
                    </p>
                    <a
                      id="modal-fallback-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-purple font-semibold hover:underline"
                    >
                      <span>Explore codebase on Github</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

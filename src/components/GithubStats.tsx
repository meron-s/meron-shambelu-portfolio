import { useState } from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";
import { GitBranch, Star, Zap, Library, ChevronRight, Activity } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, PieChart, Pie } from "recharts";

export default function GithubStats() {
  const stats = portfolioData.githubStats;

  // Generate a mock grid of contributions for a software student's commit graph.
  // 52 weeks x 7 days. Let's make a grid that renders beautifully!
  // We can represent 24 weeks to fit screen spaces neatly on all resolutions.
  const weeks = 22;
  const daysPerWeek = 7;
  const totalCells = weeks * daysPerWeek;

  // Let's seed an array with random numbers from 0 to 4 (representing commit levels)
  // to make a beautiful, realistic contribution density.
  const contributionGrid = Array.from({ length: totalCells }).map((_, i) => {
    // Generate organic-looking patterns: high density on weekdays, low on weekends
    const dayOfWeek = i % 7;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let level = 0;

    const random = Math.sin(i / 10) * Math.cos(i / 4);
    if (isWeekend) {
      level = random > 0.5 ? 1 : 0;
    } else {
      level = random > 0.6 ? 4 : random > 0.2 ? 3 : random > -0.2 ? 2 : random > -0.6 ? 1 : 0;
    }

    return level;
  });

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return "bg-emerald-900/40 dark:bg-emerald-950/40 border-emerald-900/10";
      case 2: return "bg-emerald-700/60 dark:bg-emerald-900/60 border-emerald-800/20";
      case 3: return "bg-emerald-500/80 dark:bg-emerald-600/80 border-emerald-600/30";
      case 4: return "bg-emerald-400 dark:bg-emerald-400 border-emerald-400/30";
      default: return "bg-white/5 border-white/5";
    }
  };

  // Pie chart data for Most Used Languages
  const pieData = stats.languages.map(lang => ({
    name: lang.name,
    value: lang.percentage,
    color: lang.color
  }));

  return (
    <section
      id="github-stats"
      className="py-24 bg-[#020617] dark:bg-[#020617] text-white relative"
    >
      <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-md mb-4"
          >
            <Activity className="w-4 h-4 text-brand-purple animate-pulse" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Git Metrics & Statistics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            GitHub Activity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Report
            </span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mt-4 rounded-full" />
          <p className="text-xs font-mono text-slate-500 mt-4">
            Visualizing contribution telemetry. Connected to developer profile{" "}
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-brand-purple underline hover:text-white transition-colors"
            >
              @{stats.username}
            </a>
            .
          </p>
        </div>

        {/* Bento Stats Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Box 1: Core Numbers & Contributions Graph (Span 8) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {/* Row 1: Quick stats counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bento-card p-5 text-left flex items-center space-x-3 !rounded-2xl">
                <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Commits</span>
                  <p className="text-lg font-bold font-mono text-white">{stats.totalCommits}</p>
                </div>
              </div>

              <div className="bento-card p-5 text-left flex items-center space-x-3 !rounded-2xl">
                <div className="p-2 bg-brand-purple/10 rounded-lg text-brand-purple">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Stars</span>
                  <p className="text-lg font-bold font-mono text-white">{stats.stars}</p>
                </div>
              </div>

              <div className="bento-card p-5 text-left flex items-center space-x-3 !rounded-2xl">
                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                  <Library className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Repos</span>
                  <p className="text-lg font-bold font-mono text-white">{stats.repositoriesCount}</p>
                </div>
              </div>

              <div className="bento-card p-5 text-left flex items-center space-x-3 !rounded-2xl">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Streak</span>
                  <p className="text-lg font-bold font-mono text-white">{stats.streak.current} Days</p>
                </div>
              </div>
            </div>

            {/* Row 2: Contribution Graph block */}
            <div className="bento-card p-6 md:p-8 text-left space-y-4">
              <div className="flex justify-between items-center pb-2.5 border-b border-white/10">
                <div>
                  <h3 className="text-base font-display font-semibold text-slate-200">GitHub Contributions Grid</h3>
                  <p className="text-xs text-slate-500">{stats.contributionsThisYear} Contributions in the last year</p>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded bg-white/5 border border-white/5" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-900/40" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-700/60" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-500/80" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>

              {/* Grid Box */}
              <div className="overflow-x-auto pb-2">
                <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[500px]">
                  {contributionGrid.map((level, idx) => (
                    <div
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-[2px] border transition-all duration-300 hover:scale-110 hover:shadow-md ${getLevelColor(level)}`}
                      title={`${level > 0 ? `${level * 2} commits` : "No commits"} on ${new Date(2025, 0, idx).toLocaleDateString()}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2">
                <span>Jan 2026</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul 2026</span>
              </div>
            </div>
          </div>

          {/* Box 2: Language Distribution Chart (Span 4) */}
          <div className="lg:col-span-4 bento-card p-6 md:p-8 flex flex-col justify-between">
            <div className="pb-3 border-b border-white/10 mb-4 text-left">
              <h3 className="text-base font-display font-semibold text-slate-200">Language telemetry</h3>
              <p className="text-xs text-slate-500 font-mono">Distribution of files in active repositories</p>
            </div>

            {/* Recharts container */}
            <div className="h-44 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0f172a", borderColor: "#1e293b", borderRadius: "8px" }}
                    itemStyle={{ color: "#f8fafc", fontFamily: "monospace", fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Inner Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs text-slate-500 font-mono">Top Code</span>
                <span className="text-sm font-bold font-mono text-brand-blue">TS</span>
              </div>
            </div>

            {/* Custom Legends list */}
            <div className="space-y-2.5 pt-4 text-left border-t border-white/10 mt-4">
              {stats.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="font-semibold text-slate-300">{lang.name}</span>
                  </div>
                  <span className="font-mono text-slate-500">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

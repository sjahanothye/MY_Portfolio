import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    'All',
    'Frontend Development',
    'Backend & Databases',
    'AI / ML & Data Science',
    'Core CS, Tools & Testing'
  ];

  const getCategoryIcon = (title) => {
    switch (title) {
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Backend & Databases':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'AI / ML & Data Science':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Core CS, Tools & Testing':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories =
    activeTab === 'All'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-emerald-400">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base">
            A comprehensive overview of my technical stack across full-stack development, machine learning, and computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Graphical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {cat.skills.length} core proficiencies
                  </p>
                </div>
              </div>

              {/* Graphical Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-medium text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-slate-800/90 overflow-hidden p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-white font-bold text-base">Looking for specialized tech requirements?</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              I adapt rapidly to modern tech stacks and can quickly integrate into new toolchains or enterprise frameworks.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            Inquire Tech Stack
          </a>
        </div>

      </div>
    </section>
  );
}


import React from 'react';
import { User, Heart, Compass, BookOpen, Code2, Sparkles, CheckCircle2, Globe2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate About Crafting <span className="text-emerald-400">Intelligent Digital Experiences</span>
          </h2>
          <p className="text-slate-400 text-base">
            Get to know my engineering background, problem-solving mindset, and the drive behind my code.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Philosophy (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <span>My Programming Journey</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.story}
              </p>

              {/* What I Love Doing */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>The Type of Work I Enjoy</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Architecting full-stack React & Next.js apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Deep learning & computer vision model building</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Crafting clean, accessible, and intuitive UI/UX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Designing robust database schemas & REST APIs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personality, Interests & Languages (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interests & Hobbies */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-400" />
                <span>Beyond Programming</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                When I step away from code, I engage in diverse creative and intellectual interests that keep my problem-solving fresh and multidimensional:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-blue-400" />
                <span>Languages</span>
              </h3>
              <div className="space-y-3">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <span className="font-medium text-slate-200 text-sm">{lang.name}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values Quote */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/20 text-slate-300">
              <p className="italic text-xs sm:text-sm leading-relaxed">
                "I believe that truly great software blends rigorous logical engineering with human-centered empathy — creating products that are both technically resilient and delightful to use."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


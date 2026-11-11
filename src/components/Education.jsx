import React from 'react';
import { GraduationCap, Briefcase, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const experiences = [
    {
      role: "Undergraduate Thesis Researcher",
      organization: "Department of Computer Science & Engineering, UAP",
      period: "2025 – 2026",
      location: "Dhaka, Bangladesh",
      description: "Spearheaded advanced deep learning research on deepfake detection under faculty supervision. Implemented self-supervised contrastive learning and 8-slot Slot Attention in TensorFlow, achieving 90.73% accuracy on benchmark datasets.",
      highlights: [
        "Architected custom ResNet encoder and Slot Attention modules.",
        "Preprocessed, augmented, and analyzed 19,999+ images using OpenCV and NumPy.",
        "Presented comprehensive research findings and defense seminar."
      ]
    },
    {
      role: "Full-Stack Web & Open-Source Contributor",
      organization: "Independent & Academic Projects",
      period: "2023 – Present",
      location: "Dhaka, Bangladesh",
      description: "Designed, developed, and deployed modern responsive web applications using React, Next.js 14, Tailwind CSS, TypeScript, and Django. Built community health platforms and market-tracking tools.",
      highlights: [
        "Authored responsive client-side and server-side architectures with REST APIs.",
        "Maintained high code quality and Git version control across 10+ repositories.",
        "Optimized frontend performance, state management, and accessibility."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed background of academic qualifications, institutional milestones, and technical contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Educational Qualifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Educational Qualification</h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-4 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-emerald-400 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Academic Result: <strong className="text-white">{edu.grade}</strong></span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div className="pt-2 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Core Coursework:</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/60 text-slate-300 text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Relevant Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Briefcase className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Relevant Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-3 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-slate-400 font-mono px-2.5 py-1 rounded-md bg-slate-800/80">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-emerald-400">
                    {exp.organization} • {exp.location}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


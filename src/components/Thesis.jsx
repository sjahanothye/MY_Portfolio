import React from 'react';
import { Sparkles, Brain, Award, ShieldAlert, Cpu, Github, ExternalLink, ArrowRight, CheckCircle2, FileText, Download, UserCheck, BookOpen } from 'lucide-react';
import { thesisData } from '../data/portfolioData';

export default function Thesis() {
  return (
    <section id="thesis" className="py-24 relative bg-slate-950/80 border-t border-slate-900 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Undergraduate Thesis & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deepfake Image Detection via <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Slot Attention</span>
          </h2>
          <p className="text-slate-400 text-base">
            Pioneering self-supervised contrastive learning and object-centric Slot Attention mechanisms to combat hyper-realistic facial tampering.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-purple-950/20 border border-purple-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Research Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {thesisData.accuracy}
                </span>
                <span className="px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-xs flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {thesisData.reportLength}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs">
                  {thesisData.dataset}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 font-mono text-xs">
                  {thesisData.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {thesisData.title}
                </h3>
                <p className="text-sm font-medium text-emerald-400 mt-1">
                  {thesisData.institution}
                </p>
              </div>

              {/* Research Team & Supervisors Info */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">Authors: </span>
                    <span className="text-slate-300">{thesisData.authors}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">Supervision: </span>
                    <span className="text-slate-300">{thesisData.supervisors}</span>
                  </div>
                </div>
                <div className="pt-1 text-xs text-purple-300 font-medium">
                  <strong>My Individual Contribution:</strong> {thesisData.myRole}
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {thesisData.summary}
              </p>

              {/* Key Contributions */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">Key Architectural Contributions:</h4>
                <div className="space-y-2.5">
                  {thesisData.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Badges */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2.5">Technologies & Methodologies:</p>
                <div className="flex flex-wrap gap-2">
                  {thesisData.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/70 text-slate-200 text-xs font-mono font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Download PDF, Read Online & GitHub */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {/* Download Thesis PDF */}
                <a
                  href={thesisData.pdfUrl}
                  download="Thesis_Deepfake_Detection_Sumaya_Jahan_Othye.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Thesis PDF (87 Pages)</span>
                </a>

                {/* View / Read Online */}
                <a
                  href={thesisData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all hover:scale-105"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>View PDF in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* GitHub Code */}
                <a
                  href={thesisData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Research Code (CSE-406)</span>
                </a>
              </div>

            </div>

            {/* Right 5 cols: Challenges & Future Scope Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* PDF Preview Notice Card */}
              <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                  <FileText className="w-4 h-4 shrink-0 text-purple-400" />
                  <span>Complete Thesis Document Attached</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The complete 87-page undergraduate thesis manuscript, including detailed system architecture diagrams, mathematical formulations, Gantt charts, and CEP/CEA evaluation matrices, is available for review and download.
                </p>
                <a
                  href={thesisData.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Open manuscript in full tab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Challenges Card */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Research Challenges Tackled</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {thesisData.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400/80 font-mono mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Plans Card */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span>Future Research & Extension</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {thesisData.futureScope.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400/80 font-mono mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

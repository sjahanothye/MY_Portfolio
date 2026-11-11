import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, AlertCircle, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto scrollbar-thin">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {project.name}
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Project</span>
              </a>
            )}

            {project.clientRepo && (
              <a
                href={project.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>Client Repository (GitHub)</span>
              </a>
            )}

            {project.serverRepo && (
              <a
                href={project.serverRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700/60"
              >
                <Github className="w-4 h-4" />
                <span>Server Repository</span>
              </a>
            )}
          </div>

          {/* 1. Main Technology Stack Used */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Main Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/80 text-emerald-400 font-mono text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Brief & Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Project Overview & Architecture
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Key Highlights & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Two-Column Grid: Challenges vs Potential Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            
            {/* 3. Challenges Faced */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Challenges Faced</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Potential Improvements and Future Plans */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Rocket className="w-4 h-4 shrink-0" />
                <span>Future Plans & Improvements</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.futurePlans.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-mono">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer inside modal */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Close Details
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}


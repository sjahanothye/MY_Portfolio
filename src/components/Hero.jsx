import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail, MessageSquare, Terminal, Sparkles, MapPin, FileText, Award, Code, CheckCircle2 } from 'lucide-react';
import { personalInfo, thesisData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="space-y-7 flex flex-col items-center">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Available for Software Engineering & AI/ML Roles</span>
          </div>

          {/* Main Greeting & Name */}
          <div className="space-y-3">
            <p className="text-slate-400 text-sm md:text-base font-mono tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Sumaya Jahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Othye</span>
            </h1>
            
            {/* Designation */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
              <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-base sm:text-xl font-semibold">Software Engineer | AI/ML Enthusiast</span>
            </div>
          </div>

          {/* Intro paragraph */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Computer Science & Engineering graduate from <span className="text-white font-medium">University of Asia Pacific</span> (CGPA 3.48). Specialized in building modern, scalable <span className="text-emerald-400 font-medium">Full-Stack Web Applications</span> and researching <span className="text-teal-400 font-medium">Deep Learning & Computer Vision</span>.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 font-mono">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Key Stat Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-slate-300 font-mono">CGPA: <strong className="text-white">3.48</strong> (UAP)</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-300 font-mono">Thesis Accuracy: <strong className="text-white">90.73%</strong></span>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300 font-mono">Full-Stack & Deep Learning</span>
            </div>
          </div>

          {/* Hero Action Buttons (Resume Download, Explore Projects, Thesis) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            {/* Resume Download Button */}
            <a
              href={personalInfo.resumeUrl}
              download="CV_SUMAYA_JAHAN_OTHYE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* View Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-xl border border-slate-700/80 transition-all duration-300 hover:border-emerald-500/50"
            >
              <span>Explore Projects</span>
            </a>

            {/* View Thesis Button */}
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 text-sm font-medium rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Thesis & PDF</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">Connect:</span>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 font-mono text-xs font-bold"
              aria-label="Vercel Deployments"
              title="Vercel Profile"
            >
              ▲
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

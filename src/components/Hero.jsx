import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail, MessageSquare, Terminal, Sparkles, MapPin, FileText } from 'lucide-react';
import { personalInfo, thesisData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>Available for Software Engineering & AI/ML Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm md:text-base font-mono tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Sumaya Jahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Othye</span>
              </h1>
              {/* Designation */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Software Engineer | AI/ML Enthusiast</span>
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer Science & Engineering graduate from <span className="text-slate-200 font-medium">University of Asia Pacific</span> (CGPA 3.48). Specialized in building modern, scalable <span className="text-emerald-400 font-medium">Full-Stack Web Applications</span> and researching <span className="text-emerald-400 font-medium">Deep Learning & Computer Vision</span>.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs md:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Hero Action Buttons (Resume Download & Contact) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Resume Download Button - Clearly visible and single-click */}
              <a
                href={personalInfo.resumeUrl}
                download="CV_SUMAYA_JAHAN_OTHYE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-xl border border-slate-700/80 transition-all duration-300 hover:border-emerald-500/50"
              >
                <span>Explore Projects</span>
              </a>

              {/* View Thesis Button */}
              <a
                href="#thesis"
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 text-sm font-medium rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Thesis & PDF</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Professional Photo & Highlight Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              {/* Main Card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-slate-900/90 border border-slate-800 p-3 overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-xl transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails to load
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Overlay Badge at Bottom of photo */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-center shadow-lg">
                  <p className="text-white font-semibold text-sm">Sumaya Jahan Othye</p>
                  <p className="text-emerald-400 text-xs font-mono">B.Sc. in CSE • CGPA 3.48</p>
                </div>
              </div>

              {/* Floating Stat Badge 1 */}
              <div className="absolute -top-5 -right-5 bg-slate-900/95 border border-slate-800 rounded-2xl p-3 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    AI
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Thesis Accuracy</p>
                    <p className="text-sm font-bold text-white">90.73%</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900/95 border border-slate-800 rounded-2xl p-3 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    FS
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Specialization</p>
                    <p className="text-sm font-bold text-white">Full-Stack & ML</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


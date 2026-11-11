import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Full-Stack Web App', 'Web Application', 'Interactive Fitness App', 'Gamified Web App'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-emerald-400">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-base">
            Explore a curation of full-stack platforms, client applications, and gamified systems built with modern web technologies.
          </p>

          {/* Vercel Profile Badge Link */}
          <div className="pt-1 flex justify-center">
            <a
              href={personalInfo.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-md group"
            >
              <span className="font-mono text-emerald-400">▲</span>
              <span>Live Apps Deployed on Vercel:</span>
              <strong className="text-emerald-400 font-mono group-hover:underline">vercel.com/sjahanothye</strong>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === tab
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/70 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5"
            >
              {/* Project Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-emerald-400 font-mono text-[11px] font-semibold">
                    {project.category}
                  </span>
                  {project.deploymentPlatform === 'Vercel' && (
                    <span className="px-2 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <span>▲</span> Vercel Live
                    </span>
                  )}
                </div>

                {/* Quick Live Preview Icon */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:scale-110 transition-all"
                    title="Visit Live Application"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {project.brief}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-[11px] font-mono">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 font-semibold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Direct Live Demo button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/80 transition-colors"
                      title="Open Live Website"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400" />
                    </a>
                  )}

                  {/* GitHub icon link */}
                  {project.clientRepo && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

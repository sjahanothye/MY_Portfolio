import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PersonalInfoModal from './PersonalInfoModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Thesis', href: '#thesis' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 font-mono text-sm">
                &lt;/&gt;
              </span>
              <span className="group-hover:text-emerald-400 transition-colors">
                Sumaya<span className="text-emerald-400">.dev</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Button: Small Profile Avatar Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center gap-2.5 py-1 px-3 pl-1 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-emerald-500 hover:bg-slate-800 transition-all shadow-md group cursor-pointer active:scale-95"
                title="Click to view Personal Information & Blood Group (A+)"
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  Profile Info
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="p-1 rounded-full border border-emerald-500/50"
                title="Profile"
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsProfileModalOpen(true);
                }}
                className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-6 h-6 rounded-full object-cover border border-emerald-400"
                />
                <span>View Personal Information & Blood Group</span>
              </button>
              <a
                href={personalInfo.resumeUrl}
                download="CV_SUMAYA_JAHAN_OTHYE.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Personal Info Modal Popup */}
      <PersonalInfoModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}

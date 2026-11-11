import React, { useEffect } from 'react';
import { X, Droplet, Mail, Phone, MapPin, GraduationCap, Globe, Download, MessageSquare, Award, Terminal } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function PersonalInfoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Photo & Name */}
        <div className="flex items-center gap-4 pt-1">
          <div className="relative">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-lg shadow-emerald-500/20"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>{personalInfo.role}</span>
            </p>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[11px] font-medium border border-emerald-500/20">
              UAP Graduate • CGPA 3.48
            </span>
          </div>
        </div>

        {/* Blood Group Highlight Card */}
        <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Droplet className="w-5 h-5 fill-rose-500/40" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-rose-300 font-bold">Blood Group</p>
              <p className="text-lg font-black text-white font-mono">{personalInfo.bloodGroup}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
            Emergency Donor Ready
          </span>
        </div>

        {/* Detailed Personal Info List */}
        <div className="space-y-3 text-xs sm:text-sm">
          {/* Education */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-200">Education</p>
              <p className="text-xs text-slate-400 mt-0.5">
                B.Sc. in CSE • University of Asia Pacific (2022–2026)
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div className="overflow-hidden">
              <p className="font-semibold text-slate-200">Email Address</p>
              <a href={`mailto:${personalInfo.email}`} className="text-xs text-slate-400 hover:text-emerald-400 transition-colors break-all">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-200">Phone & WhatsApp</p>
              <a href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-emerald-400 transition-colors font-mono">
                {personalInfo.whatsapp}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-200">Address / Location</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
            <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-200">Languages</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Bangla (Native), English (Professional Working)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


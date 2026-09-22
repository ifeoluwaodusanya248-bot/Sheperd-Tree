import React from 'react';
import { ExternalLink, Compass, TrendingUp, ArrowRight, UserCheck, ShieldCheck, Sparkles, X } from 'lucide-react';
import { PRESENTER_INFO, COACH_PROFILE } from '../data/coachData';
import { UserRole } from '../types';

interface PresenterWelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreWebsite: () => void;
  onLaunchPlatform: (role: UserRole) => void;
  onViewGrowthPlan: () => void;
}

export const PresenterWelcomeModal: React.FC<PresenterWelcomeModalProps> = ({
  isOpen,
  onClose,
  onExploreWebsite,
  onLaunchPlatform,
  onViewGrowthPlan,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#161D18] text-stone-100 rounded-3xl shadow-2xl border border-stone-800 overflow-hidden my-6">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E4A3E]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Agency Header */}
        <div className="relative z-10 px-8 pt-8 pb-4 flex items-center justify-between border-b border-stone-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C59B4B] to-[#99732B] text-[#161D18] flex items-center justify-center font-bold text-sm shadow-md font-serif">
              WT
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-widest text-[#C59B4B] font-semibold">
                  Proposal & Architecture Presentation
                </span>
              </div>
              <a
                href={PRESENTER_INFO.agencyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-200 text-xs transition inline-flex items-center gap-1 group"
              >
                <span>{PRESENTER_INFO.agencyName}</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-xl hover:bg-stone-800/80 transition"
            aria-label="Dismiss welcome overlay"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 px-8 py-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              Prepared Exclusively For
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {COACH_PROFILE.name}
            </h1>
            <p className="text-stone-400 text-sm max-w-xl font-light leading-relaxed">
              Founder & Managing Director of <span className="text-stone-200 font-medium">{COACH_PROFILE.company}</span>.
              A bespoke executive digital presence, enterprise-grade coaching & LMS platform, and market-researched C-suite growth plan.
            </p>
          </div>

          {/* Presenter Profile Card */}
          <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-stone-800 to-stone-700 border border-stone-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-inner">
                  OJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#161D18]" />
              </div>
              <div>
                <p className="text-xs text-[#C59B4B] uppercase tracking-wider font-semibold">
                  Presented By
                </p>
                <h4 className="text-base font-semibold text-white">
                  {PRESENTER_INFO.presenterName}
                </h4>
                <p className="text-xs text-stone-400">
                  {PRESENTER_INFO.presenterTitle} · {PRESENTER_INFO.agencyName}
                </p>
              </div>
            </div>

            <div className="text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tailored for 2026 Applied AI & ExCo Advisory</span>
            </div>
          </div>

          {/* Three Direct Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Pathway 1: Explore Website */}
            <button
              onClick={() => {
                onClose();
                onExploreWebsite();
              }}
              className="p-5 rounded-2xl bg-stone-900/60 hover:bg-stone-800 border border-stone-800 hover:border-[#C59B4B]/50 transition group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-stone-800 text-[#C59B4B] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-white text-base mb-1">
                  1. Executive Website
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Explore Dr. Groothof's public consulting brand, applied AI credentials, and systems advisory pillars.
                </p>
              </div>
              <span className="text-xs text-[#C59B4B] font-medium inline-flex items-center gap-1 mt-4 group-hover:translate-x-1 transition">
                View Website <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Pathway 2: Platform Demo */}
            <button
              onClick={() => {
                onClose();
                onLaunchPlatform('coach');
              }}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#22352B]/80 to-[#18251E]/90 hover:from-[#294235] hover:to-[#1E2E25] border border-emerald-800/50 hover:border-emerald-500/50 transition group text-left flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-white text-base mb-1">
                  2. Executive LMS Portal
                </h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  Interactive sales demo of the coaching platform (Coach command center & Client learning suite).
                </p>
              </div>
              <span className="text-xs text-emerald-300 font-medium inline-flex items-center gap-1 mt-4 group-hover:translate-x-1 transition">
                Launch Platform <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Pathway 3: Researched Growth Plan */}
            <button
              onClick={() => {
                onClose();
                onViewGrowthPlan();
              }}
              className="p-5 rounded-2xl bg-stone-900/60 hover:bg-stone-800 border border-stone-800 hover:border-[#C59B4B]/50 transition group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-stone-800 text-[#C59B4B] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-white text-base mb-1">
                  3. Researched Growth Plan
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Sub-Saharan market data, 3 C-suite buyer personas, channel rankings, and modelled revenue funnel.
                </p>
              </div>
              <span className="text-xs text-[#C59B4B] font-medium inline-flex items-center gap-1 mt-4 group-hover:translate-x-1 transition">
                Inspect Growth Plan <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-8 py-4 bg-stone-950/60 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <span>Clean interface mode enabled · Guided tour is activated upon logging into the portal</span>
          <a
            href={PRESENTER_INFO.bookingPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C59B4B] hover:underline"
          >
            Book strategy discussion with {PRESENTER_INFO.presenterName}
          </a>
        </div>
      </div>
    </div>
  );
};

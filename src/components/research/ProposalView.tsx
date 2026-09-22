import React from 'react';
import {
  FileText,
  CheckCircle2,
  Calendar,
  Layers,
  Code2,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react';
import { PROPOSAL_DATA } from '../../data/coachData';

export const ProposalView: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
              Formal Development & LMS Proposal
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Executive Platform Architecture & Implementation Proposal
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Prepared for: <strong>{PROPOSAL_DATA.preparedFor}</strong> ({PROPOSAL_DATA.clientOrg})
            </p>
          </div>

          <div className="text-left sm:text-right text-xs text-stone-600 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div><strong>Prepared by:</strong> {PROPOSAL_DATA.preparedBy}</div>
            <div className="text-stone-500">{PROPOSAL_DATA.developerRole}</div>
            <div className="text-emerald-700 font-semibold mt-1">{PROPOSAL_DATA.agency}</div>
          </div>
        </div>

        <div className="space-y-3 pt-2 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <h2 className="font-serif font-bold text-base text-stone-900">
            Executive Summary & Vision
          </h2>
          <p>
            {PROPOSAL_DATA.vision}
          </p>
        </div>
      </div>

      {/* 4 Core Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROPOSAL_DATA.deliverables.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                {pillar.title}
              </h3>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light">
              {pillar.description}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-stone-100">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                Implemented Capabilities:
              </span>
              <ul className="space-y-1">
                {pillar.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-xs text-stone-700 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Phase Rollout Plan */}
      <div className="bg-[#1A221C] text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
            Turnkey Execution Schedule
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
            Deployment & Production Launch Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROPOSAL_DATA.phases.map((phase, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-emerald-400 font-semibold">{phase.phase}</span>
                <span className="text-stone-400 text-[11px]">{phase.duration}</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-white">{phase.title}</h4>
              <p className="text-stone-300 leading-relaxed font-light">{phase.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Signoff Card */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-serif font-bold text-stone-900">
            Crafted with Distinction by {PROPOSAL_DATA.preparedBy}
          </div>
          <p className="text-xs text-stone-500">
            {PROPOSAL_DATA.developerRole} · {PROPOSAL_DATA.agency}
          </p>
        </div>
        <div className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
          ● Production Ready & Fully Documented
        </div>
      </div>
    </div>
  );
};

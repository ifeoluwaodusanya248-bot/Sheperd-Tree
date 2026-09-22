import React from 'react';
import { X, Lock, CheckCircle2, Shield, User, ArrowRight, Sparkles } from 'lucide-react';
import { UserRole } from '../types';
import { COACH_PROFILE } from '../data/coachData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: UserRole) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSelectRole,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#18201A] text-stone-100 p-6 flex items-center justify-between border-b border-[#2C382F]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E4A3E] border border-emerald-500/30 flex items-center justify-center text-[#C59B4B]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C59B4B] font-semibold">
                Executive Portal Access
              </p>
              <h3 className="text-base font-serif font-bold text-white">
                Shepherd's Tree Leadership Platform
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-stone-800 transition"
            aria-label="Close login dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-xs text-stone-600 leading-relaxed">
            Welcome to the interactive demonstration. Select a role below to simulate either the 
            <span className="font-semibold text-stone-900"> Strategic Coach & Advisory Cockpit</span> or the 
            <span className="font-semibold text-stone-900"> C-Suite Executive Learning Suite</span>.
          </p>

          <div className="space-y-4">
            {/* Role 1: Coach (Dr. Christien Groothof) */}
            <button
              onClick={() => {
                onSelectRole('coach');
                onClose();
              }}
              className="w-full text-left p-5 rounded-2xl border-2 border-stone-200 hover:border-[#2E4A3E] hover:bg-[#F6FAF7] transition group flex items-start justify-between relative overflow-hidden"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-stone-900 text-[#C59B4B]">
                    Executive Coach
                  </span>
                  <span className="text-xs text-stone-500">Managing Director View</span>
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#2E4A3E] transition">
                  {COACH_PROFILE.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed pr-6">
                  Manage C-suite cohorts, review audio submissions with waveforms, compose asynchronous video feedback, and track enterprise retainers.
                </p>
                <div className="flex items-center space-x-2 text-[11px] text-emerald-800 font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>5 Dedicated Coach Screens</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#2E4A3E] group-hover:text-white flex items-center justify-center shrink-0 mt-1 transition">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Role 2: Client (Sipho Ndlovu - Managing Director) */}
            <button
              onClick={() => {
                onSelectRole('client');
                onClose();
              }}
              className="w-full text-left p-5 rounded-2xl border-2 border-stone-200 hover:border-[#C59B4B] hover:bg-[#FDFBF7] transition group flex items-start justify-between relative overflow-hidden"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#C59B4B]/20 text-stone-900">
                    C-Suite Client
                  </span>
                  <span className="text-xs text-stone-500">Executive Learner View</span>
                </div>
                <h4 className="text-base font-serif font-bold text-stone-900 group-hover:text-[#99732B] transition">
                  Sipho Ndlovu (MD, Pan-African Bank)
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed pr-6">
                  Experience the Applied AI Masterclass, commute audio mode, scenario knowledge check, 90-day goal tracker, 1-on-1 booking, and branded email inbox.
                </p>
                <div className="flex items-center space-x-2 text-[11px] text-[#99732B] font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>8 Dedicated Client Screens</span>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#C59B4B] group-hover:text-white flex items-center justify-center shrink-0 mt-1 transition">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-stone-400" />
              Single-click demo authentication
            </span>
            <span className="text-stone-400">Zero password required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

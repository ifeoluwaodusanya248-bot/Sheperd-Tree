import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Compass,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { TOUR_STEPS } from '../data/coachData';
import { UserRole, CoachScreen, ClientScreen } from '../types';

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateStep: (role: UserRole, screen: CoachScreen | ClientScreen) => void;
  isLoggedIn: boolean;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateStep,
  isLoggedIn,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // If not logged in, DO NOT render the tour under any circumstance (per user directive)
  if (!isOpen || !isLoggedIn) return null;

  const currentStep = TOUR_STEPS[currentStepIndex];
  const totalSteps = TOUR_STEPS.length;

  // Auto-navigate to the step's designated screen
  useEffect(() => {
    if (currentStep) {
      onNavigateStep(currentStep.role, currentStep.screen);

      // Scroll target into view gently after short tick for rendering
      const timer = setTimeout(() => {
        const el = document.getElementById(currentStep.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('tour-highlight');
        }
      }, 150);

      return () => {
        clearTimeout(timer);
        const el = document.getElementById(currentStep.targetId);
        if (el) el.classList.remove('tour-highlight');
      };
    }
  }, [currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/30 backdrop-blur-[2px] transition-all">
      {/* Floating Callout Card */}
      <div className="pointer-events-auto bg-[#1A221C] text-stone-100 rounded-3xl p-6 sm:p-7 border border-[#C59B4B]/50 shadow-2xl max-w-lg w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#C59B4B] animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
              Platform Architecture Walkthrough
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-semibold text-stone-400">
              {currentStepIndex + 1} / {totalSteps}
            </span>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white transition p-1"
              title="Close Walkthrough"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                currentStep.role === 'coach'
                  ? 'bg-amber-950 text-[#C59B4B] border border-amber-800/40'
                  : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
              }`}
            >
              {currentStep.role === 'coach' ? 'Coach View' : 'Client View'}
            </span>
            <span className="text-xs text-stone-400 font-mono">
              Target: #{currentStep.targetId}
            </span>
          </div>

          <h3 className="font-serif font-bold text-lg text-white">
            {currentStep.title}
          </h3>

          <p className="text-xs text-stone-300 leading-relaxed font-light">
            {currentStep.description}
          </p>
        </div>

        {/* Stepper Controls */}
        <div className="pt-2 flex items-center justify-between border-t border-stone-800">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`px-3 py-1.5 rounded-xl border border-stone-700 text-xs font-medium flex items-center gap-1 transition ${
              currentStepIndex === 0
                ? 'opacity-30 cursor-not-allowed text-stone-500'
                : 'hover:bg-stone-800 text-stone-300'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-stone-400 hover:text-stone-200 transition"
            >
              Finish Tour
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-[#2E4A3E] hover:bg-[#395c4d] text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm border border-[#C59B4B]/30"
            >
              <span>{currentStepIndex === totalSteps - 1 ? 'Complete Tour' : 'Next Step'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

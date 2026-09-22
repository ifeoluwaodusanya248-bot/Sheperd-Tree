import React from 'react';
import {
  Play,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Award,
  Video,
  Activity,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { ClientScreen } from '../../types';

interface ClientDashboardProps {
  onNavigate: (screen: ClientScreen) => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Warm Welcome Banner (Tour Target) */}
      <div
        id="client-dashboard-hero"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
              Executive Cohort 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Welcome back, Sipho
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Pan-African Digital Banking Group · Enrolled in <strong className="text-stone-900 font-semibold">Applied AI & Systems Leadership Masterclass</strong>.
          </p>
        </div>

        <button
          onClick={() => onNavigate('lesson')}
          className="px-5 py-3 rounded-2xl bg-[#2E4A3E] hover:bg-[#233a30] text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2 shadow-sm shrink-0"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Resume Lesson 4</span>
        </button>
      </div>

      {/* Programme Progress & "Continue Where You Left Off" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Continue Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#2E4A3E]" />
              <h2 className="font-serif font-bold text-base text-stone-900">
                Continue Where You Left Off
              </h2>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              68% Completed
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#1B251E] text-stone-100 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C59B4B]">
                Current Module · Lesson 4 of 6
              </span>
              <span className="text-xs text-stone-400 font-mono">18 mins remaining</span>
            </div>

            <h3 className="font-serif font-bold text-lg text-white">
              Enterprise LLM Workflow & Board Governance Architecture
            </h3>

            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Dr. Christien Groothof demonstrates prompt sanitization layers and audit committee reporting frameworks for regulated banking institutions.
            </p>

            <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#C59B4B] h-full" style={{ width: '68%' }} />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onNavigate('lesson')}
                className="px-4 py-2 rounded-xl bg-[#2E4A3E] hover:bg-[#385b4c] text-white text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <span>Continue Video Lesson</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('quiz')}
                className="text-xs text-stone-300 hover:text-white underline underline-offset-4"
              >
                Take Module 4 Knowledge Check →
              </button>
            </div>
          </div>

          {/* Quick links to homework & booking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div
              onClick={() => onNavigate('homework')}
              className="p-4 rounded-xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-stone-50 transition cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-stone-900 block">Weekly Deliverable</span>
                <span className="text-[11px] text-stone-500">Dr. Groothof reviewed your brief</span>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </div>

            <div
              onClick={() => onNavigate('booking')}
              className="p-4 rounded-xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-stone-50 transition cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-stone-900 block">Schedule 1-on-1</span>
                <span className="text-[11px] text-stone-500">2 Advisory credits remaining</span>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400" />
            </div>
          </div>
        </div>

        {/* Next Session Card & Mind-Fit Habit Summary */}
        <div className="lg:col-span-4 space-y-6">
          {/* Next Session Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#2E4A3E]" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Next Advisory Session
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Confirmed
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-stone-900 block">
                ExCo AI Defense & Board Prep (1-on-1)
              </span>
              <p className="text-xs text-stone-600">
                Direct strategic advisory with Dr. Christien Groothof, DPhil.
              </p>
              <div className="pt-2 text-xs text-stone-500 flex items-center justify-between border-t border-stone-200 font-mono">
                <span>Thu 25 Sep · 10:00 SAST</span>
                <span>60 min</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('booking')}
              className="w-full py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-700 transition"
            >
              Manage Session or Reschedule
            </button>
          </div>

          {/* Daily Mind-Fit Habit Summary */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-[#C59B4B]" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Mind-Fit Performance Habits
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-700">4 / 4 Today</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-stone-800">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Morning Cognitive Transition (20m Walk)</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-800">Done</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-stone-800">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Diaphragmatic Cortisol Reset</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-800">Done</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-stone-800">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Daily Prompt Chain Reflection</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-800">Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

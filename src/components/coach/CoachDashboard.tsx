import React from 'react';
import {
  Users,
  Clock,
  Award,
  AlertCircle,
  Video,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Sparkles,
  ChevronRight,
  FileText,
  Volume2,
} from 'lucide-react';
import { DEMO_CLIENTS, QUEUE_ITEMS, SCHEDULED_SESSIONS, COACH_PROFILE } from '../../data/coachData';
import { CoachScreen } from '../../types';

interface CoachDashboardProps {
  onNavigate: (screen: CoachScreen) => void;
  onSelectClient?: (clientId: string) => void;
  onSelectQueueItem?: (queueId: string) => void;
}

export const CoachDashboard: React.FC<CoachDashboardProps> = ({
  onNavigate,
  onSelectClient,
  onSelectQueueItem,
}) => {
  const pendingQueueCount = QUEUE_ITEMS.filter((i) => i.status === 'pending').length;
  const todaySessions = SCHEDULED_SESSIONS.filter((s) => s.day === 'Mon');

  return (
    <div className="space-y-6">
      {/* Top Greeting & Attention Banner */}
      <div
        id="coach-dashboard-header"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
              Executive Advisory Dashboard
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Good morning, Dr. Groothof
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            You have <strong className="text-stone-900 font-semibold">{pendingQueueCount} submissions</strong> awaiting executive review and <strong className="text-stone-900 font-semibold">2 scheduled ExCo calls</strong> on your calendar today.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={() => onNavigate('queue')}
            className="px-4 py-2.5 rounded-xl bg-[#2E4A3E] hover:bg-[#253D33] text-white text-xs font-semibold transition flex items-center gap-2 shadow-sm"
          >
            <span>Review Queue</span>
            <span className="w-5 h-5 rounded-full bg-[#C59B4B] text-stone-950 flex items-center justify-center text-[10px] font-bold">
              {pendingQueueCount}
            </span>
          </button>
          <button
            onClick={() => onNavigate('scheduling')}
            className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-500" />
            <span>Calendar</span>
          </button>
        </div>
      </div>

      {/* 4 Headline Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium text-stone-500">Active C-Suite Clients</span>
            <Users className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900">14 Leaders</div>
          <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>4 JSE ExCo Enterprises</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium text-stone-500">Module Completion</span>
            <TrendingUp className="w-4 h-4 text-[#C59B4B]" />
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900">92.4%</div>
          <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+8% vs. standard cohort</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium text-stone-500">Advisory Hours Logged</span>
            <Clock className="w-4 h-4 text-stone-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900">184 hrs</div>
          <div className="text-[11px] text-stone-500">
            <span>Current quarter to date</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-xs font-medium text-stone-500">Executive NPS</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-stone-900">96 / 100</div>
          <div className="text-[11px] text-emerald-700 font-medium">
            <span>100% Retainer Renewal</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Attention Feed & Completion Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: What Needs Attention Today (Tour Target) */}
        <div id="coach-attention-panel" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-[#C59B4B]" />
              <h2 className="font-serif font-bold text-base text-stone-900">
                Requires Strategic Attention
              </h2>
            </div>
            <span className="text-xs text-stone-400">3 Priority Items</span>
          </div>

          <div className="space-y-3">
            {/* Attention Item 1 */}
            <div
              onClick={() => {
                onNavigate('queue');
                onSelectQueueItem?.('queue-1');
              }}
              className="p-4 rounded-2xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-emerald-50/30 transition cursor-pointer flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-stone-900 group-hover:text-[#2E4A3E] transition">
                      Sipho Ndlovu (MD, Pan-African Bank)
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                      ExCo Board Prep
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Submitted Enterprise LLM Workflow & Board Governance Architecture. Awaiting your video review.
                  </p>
                  <span className="text-[10px] text-stone-400 mt-1 block">Submitted today at 07:45 SAST</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition shrink-0 mt-2" />
            </div>

            {/* Attention Item 2 */}
            <div
              onClick={() => {
                onNavigate('queue');
                onSelectQueueItem?.('queue-2');
              }}
              className="p-4 rounded-2xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-emerald-50/30 transition cursor-pointer flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-stone-900 group-hover:text-[#2E4A3E] transition">
                      Thandiwe Khumalo (CRO, Equatorial Energy)
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-50 text-amber-700 font-semibold border border-amber-200">
                      Audio Check-in
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Voice memo on boardroom polarization & union negotiations (04:18 audio waveform).
                  </p>
                  <span className="text-[10px] text-stone-400 mt-1 block">Submitted yesterday at 17:30 SAST</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition shrink-0 mt-2" />
            </div>

            {/* Attention Item 3 */}
            <div
              onClick={() => {
                onNavigate('roster');
                onSelectClient?.('client-3');
              }}
              className="p-4 rounded-2xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-emerald-50/30 transition cursor-pointer flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-stone-900 group-hover:text-[#2E4A3E] transition">
                      Francois van der Merwe (COO, Apex Logistics)
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-stone-100 text-stone-600 font-semibold">
                      Check-in Overdue
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Missed scheduled 1-on-1 check-in; knowledge check on prompt guardrails requires revision.
                  </p>
                  <span className="text-[10px] text-stone-400 mt-1 block">Last active 4 days ago</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition shrink-0 mt-2" />
            </div>
          </div>
        </div>

        {/* Right: Today's Executive Calls & Module Progress */}
        <div className="lg:col-span-5 space-y-6">
          {/* Today's Calls */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <h3 className="font-serif font-bold text-base text-stone-900">
                Today's Executive Calls
              </h3>
              <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full">
                2 Sessions (Mon)
              </span>
            </div>

            <div className="space-y-3">
              {todaySessions.map((sess) => (
                <div key={sess.id} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">{sess.clientName}</span>
                    <span className="text-[11px] font-mono text-stone-500">{sess.time}</span>
                  </div>
                  <p className="text-xs text-stone-600">{sess.title}</p>
                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="text-stone-400">{sess.duration}</span>
                    <button className="px-3 py-1 rounded-lg bg-[#1B251E] text-white font-medium hover:bg-[#2A3B2F] transition flex items-center gap-1">
                      <Video className="w-3 h-3 text-[#C59B4B]" />
                      <span>Join Room</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completion By Module Chart */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-900">
              Cohort Module Completion
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                  <span>Mod 1: Systems Thinking & Root Cause</span>
                  <span>96%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2E4A3E] h-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                  <span>Mod 2: ExCo Prompt Engineering Architecture</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2E4A3E] h-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                  <span>Mod 3: Algorithmic Governance & Board Risk</span>
                  <span>74%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C59B4B] h-full" style={{ width: '74%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                  <span>Mod 4: Mind-Fit Endurance Protocols</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2E4A3E] h-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

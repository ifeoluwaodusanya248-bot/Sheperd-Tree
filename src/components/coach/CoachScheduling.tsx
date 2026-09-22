import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Video,
  Clock,
  Users,
  CheckCircle2,
  MessageSquare,
  Check,
  Send,
  Plus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { SCHEDULED_SESSIONS, COMMUNITY_POSTS } from '../../data/coachData';
import { CommunityPost } from '../../types';

export const CoachScheduling: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: 'approved' } : p))
    );
  };

  const handleSendReply = (postId: string) => {
    const text = replyText[postId];
    if (!text) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              status: 'approved',
              content: `${p.content}\n\n[Dr. Groothof Response]: "${text}"`,
            }
          : p
      )
    );
    setReplyText({ ...replyText, [postId]: '' });
    setActiveReplyId(null);
  };

  const days: Array<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
            Time & Cohort Orchestration
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Scheduling & Executive Cohort Calendar
          </h1>
          <p className="text-xs text-stone-600">
            Synchronized with Johannesburg (SAST / GMT+2) and London / New York ExCo timezones.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5 text-[#2E4A3E]" />
            <span>Add Advisory Slot</span>
          </button>
        </div>
      </div>

      {/* Week Grid (Tour Target) */}
      <div
        id="coach-scheduling-grid"
        className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5"
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 text-[#2E4A3E]" />
            <h2 className="font-serif font-bold text-base text-stone-900">
              Week of 22 – 26 September 2026
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-500">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-medium text-stone-600">Current Week</span>
            <button className="p-1 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-500">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Day Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 overflow-x-auto min-w-[700px]">
          {days.map((day) => {
            const daySessions = SCHEDULED_SESSIONS.filter((s) => s.day === day);
            return (
              <div key={day} className="bg-stone-50/70 rounded-2xl p-3 border border-stone-200/80 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-serif font-bold text-xs text-stone-900 uppercase tracking-wider">
                    {day}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {day === 'Mon' ? '22 Sep' : day === 'Tue' ? '23 Sep' : day === 'Wed' ? '24 Sep' : day === 'Thu' ? '25 Sep' : '26 Sep'}
                  </span>
                </div>

                <div className="space-y-2">
                  {daySessions.length > 0 ? (
                    daySessions.map((sess) => (
                      <div
                        key={sess.id}
                        className={`p-2.5 rounded-xl border text-xs space-y-1.5 transition ${
                          sess.type === 'webinar'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : sess.type === 'open'
                            ? 'bg-white border-dashed border-stone-300 text-stone-500'
                            : 'bg-white border-stone-200 text-stone-900 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono">
                          <span>{sess.time}</span>
                          {sess.type === 'webinar' && (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-200/60 text-emerald-900 font-semibold font-sans">
                              Masterclass
                            </span>
                          )}
                        </div>
                        <div className="font-semibold text-xs leading-snug">
                          {sess.clientName}
                        </div>
                        <p className="text-[11px] text-stone-500 line-clamp-2">
                          {sess.title}
                        </p>
                        {sess.seats && (
                          <div className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{sess.seats}</span>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center text-xs text-stone-400 italic">
                      No sessions booked
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Lower Section: Webinars Schedule & Community Moderation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Webinar Schedule */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#2E4A3E]" />
              <h3 className="font-serif font-bold text-base text-stone-900">
                Cohort Masterclasses & Webinars
              </h3>
            </div>
            <span className="text-xs text-stone-400">Q3 Schedule</span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#1B251E] text-stone-100 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
                  Upcoming Live Session
                </span>
                <span className="text-xs text-emerald-400 font-semibold">18 / 20 Registered</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-white">
                Advanced Prompt Engineering for C-Suite Decisioning
              </h4>
              <p className="text-xs text-stone-300">
                Live interactive walkthrough of multi-tier prompt chaining for ExCo risk committees.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-stone-400 border-t border-stone-800">
                <span>Mon 22 Sep · 14:00 SAST</span>
                <span className="text-[#C59B4B] font-medium">90 mins</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Scheduled Next Week
                </span>
                <span className="text-xs text-stone-600 font-semibold">14 / 20 Registered</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-900">
                Weekly Mind-Fit & Cognitive Longevity Debrief
              </h4>
              <p className="text-xs text-stone-600">
                Cortisol management, mental transition pacing, and board presentation composure.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-200">
                <span>Fri 26 Sep · 08:30 SAST</span>
                <span className="text-stone-700 font-medium">60 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Community Board Moderation */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-[#C59B4B]" />
              <h3 className="font-serif font-bold text-base text-stone-900">
                C-Suite Community Board Moderation
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              {posts.filter((p) => p.status === 'pending').length} Awaiting Moderation
            </span>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-stone-900">{post.author}</span>
                    <span className="text-[10px] text-stone-400 block">{post.date}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      post.status === 'approved'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {post.status === 'approved' ? 'Approved' : 'Pending Approval'}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xs text-stone-900">{post.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>

                {/* Moderation Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-200/80">
                  {post.status === 'pending' ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleApprove(post.id)}
                        className="px-3 py-1.5 rounded-lg bg-[#2E4A3E] text-white text-xs font-medium hover:bg-[#253D33] transition flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>1-Click Approve</span>
                      </button>
                      <button
                        onClick={() => setActiveReplyId(post.id === activeReplyId ? null : post.id)}
                        className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-100 transition"
                      >
                        Reply as Dr. Groothof
                      </button>
                    </div>
                  ) : (
                    <div className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Published to Executive Cohort</span>
                    </div>
                  )}
                </div>

                {activeReplyId === post.id && (
                  <div className="pt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Type official Dr. Groothof advisory comment..."
                      value={replyText[post.id] || ''}
                      onChange={(e) =>
                        setReplyText({ ...replyText, [post.id]: e.target.value })
                      }
                      className="flex-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#2E4A3E]"
                    />
                    <button
                      onClick={() => handleSendReply(post.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#1B251E] text-white text-xs font-medium flex items-center gap-1"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

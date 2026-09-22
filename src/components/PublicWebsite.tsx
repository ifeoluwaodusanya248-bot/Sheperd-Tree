import React, { useState } from 'react';
import {
  Shield,
  Award,
  Sparkles,
  TrendingUp,
  Cpu,
  Brain,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Calendar,
  MessageSquare,
  Building,
  Activity,
  Layers,
  FileCheck,
} from 'lucide-react';
import { COACH_PROFILE, PRESENTER_INFO } from '../data/coachData';
import { UserRole } from '../types';

interface PublicWebsiteProps {
  onOpenLogin: () => void;
  onOpenDiagnostic: () => void;
  onViewGrowthPlan?: () => void;
  onOpenPresenterInfo?: () => void;
  onOpenResearch?: () => void;
  onOpenProposal?: () => void;
}

export const PublicWebsite: React.FC<PublicWebsiteProps> = ({
  onOpenLogin,
  onOpenDiagnostic,
  onViewGrowthPlan,
  onOpenPresenterInfo,
  onOpenResearch,
  onOpenProposal,
}) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    topic: 'Applied AI & LLM Governance for ExCo',
    message: '',
  });

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        topic: 'Applied AI & LLM Governance for ExCo',
        message: '',
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A221C] font-sans selection:bg-[#C59B4B]/20">
      {/* Top Advisory Bar / Presenter Notice */}
      <div className="bg-[#141A16] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-stone-200">
              Shepherd's Tree Leadership Consulting (Pty) Ltd
            </span>
            <span className="text-stone-500 hidden md:inline">|</span>
            <span className="text-stone-400 hidden md:inline">
              Johannesburg & Global ExCo Advisory
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPresenterInfo}
              className="text-[#C59B4B] hover:text-[#d8ad5a] transition flex items-center gap-1 font-medium"
            >
              <span>Proposal by {PRESENTER_INFO.agencyName}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <button
              onClick={onViewGrowthPlan}
              className="text-stone-300 hover:text-white transition flex items-center gap-1 text-[11px] underline underline-offset-4"
            >
              <span>Researched Growth Plan</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-[#FAF8F5]/95 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#1B251E] border border-[#2E4A3E] flex items-center justify-center text-[#C59B4B] shadow-sm">
              {/* Emblem icon: Tree roots + geometric crest */}
              <div className="text-center font-serif">
                <span className="text-lg font-bold tracking-tighter">ST</span>
              </div>
            </div>
            <div>
              <span className="block font-serif font-bold text-lg text-stone-900 tracking-tight leading-none">
                SHEPHERD'S TREE
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#8C6D2D] font-semibold mt-1">
                Leadership Consulting (Pty) Ltd
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-stone-700">
            <a href="#philosophy" className="hover:text-[#2E4A3E] transition">
              The Philosophy
            </a>
            <a href="#ai-2026" className="hover:text-[#2E4A3E] transition flex items-center gap-1.5">
              <span>Applied AI 2026</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#C59B4B]/20 text-[#8C6D2D]">
                NEW
              </span>
            </a>
            <a href="#pillars" className="hover:text-[#2E4A3E] transition">
              Advisory Pillars
            </a>
            <a href="#credentials" className="hover:text-[#2E4A3E] transition">
              Dr. Groothof
            </a>
            <button
              onClick={onOpenDiagnostic}
              className="text-[#2E4A3E] hover:text-emerald-950 font-semibold transition"
            >
              AI Diagnostic
            </button>
          </nav>

          {/* Actions: Executive Portal Login */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenLogin}
              id="header-login-button"
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#1B251E] hover:bg-[#28382C] text-stone-100 font-medium text-xs sm:text-sm transition shadow-sm flex items-center space-x-2 border border-stone-800"
            >
              <Shield className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>Executive Portal</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-stone-200/70">
        {/* Subtle background ambient accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#EFEAE0] to-transparent rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Positioning */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAE4D6] border border-[#DDD4C0] text-stone-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
                <span>Executive Education & C-Suite Transformation Since 2012</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.12]">
                Turning People Strategy into Commercial Results That Actually Stick.
              </h1>

              <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
                For over two decades, Dr. Christien Groothof has advised C-suite, ExCo, and Board leaders across Africa and global markets. Fusing senior management consulting with rigorous systems thinking, applied artificial intelligence, and elite high-performance discipline.
              </p>

              {/* 2026 AI Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#2E4A3E] font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#C59B4B]" />
                  <span>What’s Different in 2026: Applied AI as a Working Discipline</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  "Not AI as a buzzword, but advanced prompt engineering, executive-grade knowledge production, and rigorous research methodology fused with boardroom consulting practice. Few advisors bring both the rigor and the reach. I do."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onOpenDiagnostic}
                  className="px-6 py-3.5 rounded-xl bg-[#2E4A3E] hover:bg-[#253D33] text-white font-medium text-sm transition shadow-sm flex items-center justify-center space-x-2"
                >
                  <Cpu className="w-4 h-4 text-[#C59B4B]" />
                  <span>Take Executive AI Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenLogin}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-medium text-sm transition flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Shield className="w-4 h-4 text-[#C59B4B]" />
                  <span>Enter LMS Platform Demo</span>
                </button>
              </div>

              {/* Institutional Pedigree Micro-logos */}
              <div className="pt-6 border-t border-stone-200/80">
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-3">
                  Thread of Senior Practice Across Premier Institutions
                </p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-600 font-medium">
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-stone-400" /> Duke Corporate Education</span>
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-stone-400" /> Henley Business School Africa</span>
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-stone-400" /> Deloitte Consulting</span>
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-stone-400" /> FNB Premier Banking</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dr. Christien Groothof Profile Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#1A231D] text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59B4B]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Profile Header */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B4B]">
                      Managing Director & Founder
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-white mt-1">
                      {COACH_PROFILE.name}
                    </h2>
                    <p className="text-xs text-stone-400 font-light mt-0.5">
                      DPhil in Leadership & Change · MBL (UNISA)
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2E4A3E] to-[#1F2F27] border border-emerald-500/30 flex items-center justify-center font-serif text-xl font-bold text-[#C59B4B] shadow-inner">
                    CG
                  </div>
                </div>

                {/* Bodybuilding & Longevity Badge */}
                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 mb-6 space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                    <Activity className="w-4 h-4 text-[#C59B4B]" />
                    <span>2× Universe Finalist & High-Performance Athlete</span>
                  </div>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    "I practise what I preach about longevity and being <strong>Mind-fit</strong>. The discipline is identical whether it's a boardroom, a research dilemma, or the Universe stage."
                  </p>
                </div>

                {/* Core Credentials List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Academic & Professional Qualifications
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-300">
                    {COACH_PROFILE.qualifications.map((q, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B4B] shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LinkedIn verification link */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <a
                    href={COACH_PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-stone-400 hover:text-white inline-flex items-center gap-1.5 transition group"
                  >
                    <span>View LinkedIn Executive Profile</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                  <button
                    onClick={onOpenLogin}
                    className="text-xs text-[#C59B4B] hover:underline font-medium"
                  >
                    Log in as Dr. Groothof →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Shepherd's Tree Philosophy Section */}
      <section id="philosophy" className="py-20 bg-[#F4F0E8] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C6D2D] font-bold">
              The Kalahari Metaphor
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Why the Shepherd's Tree?
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {COACH_PROFILE.philosophy.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Deep Systems Roots
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Superficial restructuring fails because it treats symptoms. We map hidden feedback loops, unspoken executive fears, and cultural immune systems that stall organizational change.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Drought & Stress Resilience
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                High-stakes commercial environments drain cognitive resources. We cultivate mental stamina and physiological recovery protocols so executives maintain strategic composure under pressure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                The Unglamorous Execution
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No high-sounding buzzwords. We focus on turning people strategy into commercial results that actually stick across C-suite committees, ExCo meetings, and operational shop floors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applied AI 2026 Section */}
      <section id="ai-2026" className="py-20 bg-[#161E18] text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2A3B2F] border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span>Executive Capability for the AI Era</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Not AI as a Buzzword. <br />
                AI as an Applied Executive Working Discipline.
              </h2>

              <p className="text-sm text-stone-400 leading-relaxed font-light">
                In 2026, the competitive chasm is not whether your organization buys AI subscriptions. It is whether your C-suite leaders know how to formulate prompt architectures, synthesize enterprise knowledge, and govern algorithmic decisioning without destroying commercial trust.
              </p>

              <div className="space-y-3">
                {COACH_PROFILE.aiCapabilities2026.map((cap, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-stone-900/60 border border-stone-800/80">
                    <div className="w-6 h-6 rounded-lg bg-[#C59B4B]/20 text-[#C59B4B] flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-stone-200 font-medium">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDiagnostic}
                  className="px-6 py-3 rounded-xl bg-[#C59B4B] hover:bg-[#b0883b] text-stone-950 font-bold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <span>Evaluate Your ExCo AI Maturity Score</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-[#C59B4B]" />
                    <h3 className="font-serif font-bold text-white text-base">
                      The ExCo Prompt & Governance Architecture
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                    2026 Benchmark
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1.5">
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span>Step 1: Strategic Deconstruction</span>
                    </div>
                    <p className="text-stone-400">
                      Breaking complex commercial problems into multi-stage prompt chains instead of single, hallucination-prone queries.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1.5">
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span>Step 2: Constraint & Bias Governance</span>
                    </div>
                    <p className="text-stone-400">
                      Establishing institutional guardrails, confidentiality barriers, and regulatory sanity checks before output review.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1.5">
                    <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span>Step 3: Executive Knowledge Production</span>
                    </div>
                    <p className="text-stone-400">
                      Transforming raw LLM outputs into publication-grade Board packs, investor memoranda, and strategy roadmaps.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-stone-500">
                    Integrated directly into the Shepherd's Tree Executive Learning Suite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Signature Advisory Pillars */}
      <section id="pillars" className="py-20 bg-[#FAF8F5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8C6D2D] font-bold">
              Core Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Executive Engagement Pillars
            </h2>
            <p className="text-stone-600 text-sm">
              Customized for enterprise leadership cohorts, individual C-suite transitions, and institutional boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  ExCo & Board Systems Transformation
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Navigating large-scale organizational change, stakeholder politics, and the unglamorous execution needed to translate board strategy into commercial reality.
                </p>
                <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Executive team calibration & alignment</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Systems dynamics & feedback loop mapping</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-stakeholder transformation governance</li>
                </ul>
              </div>
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-xs font-semibold text-stone-800 transition"
              >
                Inspect Cohort Syllabus
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#2E4A3E]/30 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#2E4A3E] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-bl-xl">
                2026 Core
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C59B4B]/10 text-[#8C6D2D] flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Applied AI for Enterprise Leaders
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Mastering advanced prompt engineering, executive-grade LLM retrieval, and AI strategic governance to accelerate knowledge production without compliance risk.
                </p>
                <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> C-Suite Prompt Architecture Masterclass</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Enterprise Knowledge Retrieval Systems</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Algorithmic Risk & Boardroom Defensibility</li>
                </ul>
              </div>
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 rounded-xl bg-[#2E4A3E] text-white text-xs font-semibold hover:bg-[#233a30] transition shadow-sm"
              >
                Explore Applied AI Suite
              </button>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  Mind-Fit & Executive Longevity
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Integrating elite athletic discipline (2× Universe Finalist) into executive endurance, cognitive recovery, and sustainable high-performance stamina.
                </p>
                <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Cognitive recovery & cortisol pacing protocols</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> High-stakes emotional regulation & poise</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Multi-year executive stamina architecture</li>
                </ul>
              </div>
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-xs font-semibold text-stone-800 transition"
              >
                View Mind-Fit Protocols
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Academic Rigor */}
      <section id="credentials" className="py-20 bg-[#F4F0E8] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8C6D2D] font-bold">
                Uncompromising Pedigree
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                Academic Rigor Meets Commercial Street-Sense.
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Executive advisory is often divided between theoretical academics who haven't run a P&L, and former corporate directors lacking research frameworks. Dr. Groothof unites both disciplines with rigorous post-doctoral mastery.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  South African & Global Practice
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Headquartered in Johannesburg (Sandton / Rosebank), partnering with JSE-listed multinationals, sovereign development institutions, and pan-African banking conglomerates.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                  <div className="text-emerald-800 font-serif font-bold text-sm">
                    DPhil in Leadership & Change
                  </div>
                  <p className="text-xs text-stone-500">University of Johannesburg</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Doctoral thesis on transformational systems dynamics and large-scale organizational behavior under acute economic shifts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                  <div className="text-emerald-800 font-serif font-bold text-sm">
                    Master of Business Leadership (MBL)
                  </div>
                  <p className="text-xs text-stone-500">UNISA Graduate School of Business</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Senior strategic management, financial governance, commercial risk mitigation, and corporate strategy.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                  <div className="text-emerald-800 font-serif font-bold text-sm">
                    BA Hons Criminology & Social Sciences
                  </div>
                  <p className="text-xs text-stone-500">University of Pretoria</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Behavioral psychology, institutional culture, labor relations, and human group conflict mediation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
                  <div className="text-emerald-800 font-serif font-bold text-sm">
                    NLP Master Coach & Hypnotherapist
                  </div>
                  <p className="text-xs text-stone-500">Certified International Master Trainer</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Subconscious behavioral recalibration, executive presence, linguistic reframing, and cognitive resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Banner: AI Diagnostic */}
      <section className="py-16 bg-[#1A231D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C59B4B]/20 border border-[#C59B4B]/40 text-[#C59B4B] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complimentary 2026 Executive Diagnostic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            How Defensible Is Your Executive AI & Systems Leadership Strategy?
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-light">
            Take our 3-minute executive benchmark to evaluate your ExCo’s prompt engineering maturity, systems execution friction, and mind-fitness reserves.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C59B4B] hover:bg-[#b58c3f] text-stone-950 font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Launch 3-Minute Diagnostic Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 font-medium text-sm transition"
            >
              Access LMS Platform Preview
            </button>
          </div>
        </div>
      </section>

      {/* Confidential Executive Inquiry Form */}
      <section id="contact" className="py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8C6D2D] font-bold">
                Strategic Consultation
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Initiate a Confidential Executive Dialogue
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
                Direct engagement with Dr. Christien Groothof. All inquiries are held in strict commercial confidence.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-emerald-950">
                  Executive Inquiry Received
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you. Dr. Groothof's office will review your strategic briefing and respond within one business day to coordinate a confidential advisory discussion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Executive Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Direct Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.ndlovu@bankcorp.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Organization / Enterprise</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pan-African Digital Banking Group"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Leadership Role</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Director / ExCo Member"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Focus Area</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900"
                  >
                    <option>Applied AI & LLM Governance for ExCo</option>
                    <option>C-Suite Transition & Boardroom Advisory (1-on-1)</option>
                    <option>Enterprise Systems Transformation Cohort</option>
                    <option>Mind-Fit & Executive Longevity Speaking</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Strategic Context / Current Challenge</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your organization's transition, AI priorities, or leadership objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] text-xs text-stone-900 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#1A231D] hover:bg-[#253229] text-white font-medium text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit Confidential Strategic Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B4B]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121714] text-stone-400 text-xs py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
            <div>
              <div className="flex items-center space-x-2 text-stone-200 font-serif font-bold text-base">
                <span>Shepherd's Tree Leadership Consulting (Pty) Ltd</span>
              </div>
              <p className="text-stone-500 text-xs mt-1">
                Founded 2012 · Operating as a (Pty) Ltd since 2025 · Johannesburg, South Africa
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenLogin}
                className="text-stone-300 hover:text-white transition underline underline-offset-4"
              >
                Executive Portal Login
              </button>
              <button
                onClick={onViewGrowthPlan}
                className="text-[#C59B4B] hover:text-[#dcaf53] transition"
              >
                Agency Growth Plan Proposal
              </button>
              <a
                href={COACH_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition"
              >
                Dr. Groothof LinkedIn
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()} Shepherd's Tree Leadership Consulting (Pty) Ltd. All rights reserved.</p>
            <p>
              Proposal & LMS Platform Architecture developed by{' '}
              <a
                href={PRESENTER_INFO.agencyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-200 underline"
              >
                {PRESENTER_INFO.agencyName}
              </a>
              {' '}({PRESENTER_INFO.presenterName}, {PRESENTER_INFO.presenterTitle}).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

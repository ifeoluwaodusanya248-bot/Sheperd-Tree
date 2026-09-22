import React from 'react';
import {
  TrendingUp,
  Award,
  Globe,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Brain,
  ArrowRight,
} from 'lucide-react';
import { MARKET_RESEARCH } from '../../data/coachData';

export const MarketResearchView: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Market Intelligence & Strategic Positioning
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Executive Market Analysis & Strategic Differentiation
        </h1>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Comprehensive market study conducted by TheWiseTutor for Dr. Christien Groothof & Shepherd's Tree Leadership Consulting. Mapping Africa's executive education landscape and applied AI convergence.
        </p>
      </div>

      {/* Strategic Highlights 3-Card Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Pan-African C-Suite Demand</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Corporate banking, telecommunications, and extractive industries across SADC and East Africa lack advisors who combine academic doctoral rigour with operational ExCo governance.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-[#C59B4B]/15 text-[#8C6B28] flex items-center justify-center mb-3">
            <Brain className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Applied AI as Discipline</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Most coaches treat AI as an abstract buzzword. Dr. Groothof's 6-month full immersion in prompt architectures creates an unassailable technical moat against traditional consulting firms.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900">Retainer Defensibility</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            By shifting from transactional hourly billing to hybrid digital retainers (LMS + async video reviews + board simulations), customer lifetime value expands by 3.4x.
          </p>
        </div>
      </div>

      {/* Competitor Benchmarking Matrix */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-stone-100">
          <div>
            <h2 className="font-serif font-bold text-xl text-stone-900">
              Executive Advisory Benchmark Matrix
            </h2>
            <p className="text-xs text-stone-500">
              Comparative analysis across tier-one South African & African executive development providers.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2E4A3E] text-white">
            2026 Competitive Field
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider font-semibold">
                <th className="pb-3 pr-4">Advisory Category</th>
                <th className="pb-3 pr-4">Typical Offering</th>
                <th className="pb-3 pr-4">Pricing Range</th>
                <th className="pb-3 pr-4">Core Limitation</th>
                <th className="pb-3">Dr. Groothof Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {MARKET_RESEARCH.competitors.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50/70 transition">
                  <td className="py-4 pr-4 font-bold text-stone-900">
                    {item.name}
                  </td>
                  <td className="py-4 pr-4 text-stone-600">
                    {item.typicalOffering}
                  </td>
                  <td className="py-4 pr-4 font-mono font-medium text-stone-800">
                    {item.pricingRange}
                  </td>
                  <td className="py-4 pr-4 text-rose-700 font-medium">
                    {item.limitation}
                  </td>
                  <td className="py-4 text-[#2E4A3E] font-semibold">
                    {item.groothofAdvantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Recommendations by TheWiseTutor */}
      <div className="bg-[#1A221C] text-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
            Strategic Blueprint by Odusanya Joshua Ifeoluwa (TheWiseTutor)
          </span>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
            Monetization & Technology Recommendations for 2026
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-stone-300">
          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#C59B4B]">
              1. Institutional Cohort Retainers (Priced at R 125,000 – R 250,000)
            </h4>
            <p className="leading-relaxed font-light">
              Anchor corporate sales around annual C-suite seats. Rather than selling ad-hoc advisory days, sell a blended package: continuous access to the custom LMS platform, 4 private strategy sessions, weekly asynchronous video critiques, and 1 boardroom defense simulation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#C59B4B]">
              2. Asynchronous Video Feedback as Primary Value Lever
            </h4>
            <p className="leading-relaxed font-light">
              C-suite executives struggle to find synchronized calendar slots. Offering encrypted, asynchronous 3–5 minute Loom-style video critiques on their actual prompt chains and board slides provides 10x higher perceived value than a scheduled phone call.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#C59B4B]">
              3. Dual Brand Architecture (Public Authority + Private Sanctuary)
            </h4>
            <p className="leading-relaxed font-light">
              Maintain an ultra-refined public editorial presence for institutional procurement, paired with an encrypted, distraction-free LMS platform behind dual authentication where clients study and interact in complete confidentiality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#C59B4B]">
              4. Mind-Fit & Athletic Discipline Positioning
            </h4>
            <p className="leading-relaxed font-light">
              Leverage Dr. Groothof's competitive natural bodybuilding background as an executive metaphor: cognitive longevity, cortisol pacing, and relentless discipline. Corporate boards respond powerfully to advisors who embody physical and mental mastery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, Award, Shield, Sparkles } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall?: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose, onBookCall }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Generative AI & LLM Executive Fluency',
      prompt: 'How is your Executive Committee (ExCo) currently leveraging Large Language Models for strategic decision-making and operational execution?',
      options: [
        { label: 'Informal & Ad-hoc: Individual executives use consumer ChatGPT/Claude without enterprise guardrails or shared prompt architectures.', score: 20 },
        { label: 'Pilot Phase: We have isolated AI trials, but leadership lacks rigorous prompt engineering or knowledge synthesis workflows.', score: 55 },
        { label: 'Structured AI Integration: We have formalized prompt libraries and AI governance frameworks actively informing ExCo papers.', score: 85 },
        { label: 'Autonomous & Agentic: Proprietary knowledge architecture, custom retrieval, and continuous systems oversight.', score: 98 },
      ],
    },
    {
      title: 'Systems Thinking & Strategy-to-Execution',
      prompt: 'When enterprise strategy stalls or runs into organizational resistance, what is your team’s dominant response?',
      options: [
        { label: 'Siloed escalation: Blaming department silos or demanding more headcount and budget.', score: 25 },
        { label: 'Process restructuring: Redrawing org charts or hiring external consultants who leave thick slide decks that aren’t executed.', score: 50 },
        { label: 'Systemic Root-Cause Diagnosis: Mapping feedback loops, unspoken fears, and institutional resistance patterns.', score: 88 },
        { label: 'High-Velocity Alignment: Real-time stakeholder calibration with rapid commercial execution iterations.', score: 95 },
      ],
    },
    {
      title: 'Executive "Mind-Fit" & Cognitive Longevity',
      prompt: 'How would you honestly rate the cognitive stamina, emotional regulation, and recovery protocols of your key leaders under severe commercial pressure?',
      options: [
        { label: 'Chronic Strain: High burnout, reactive decision-making, and significant executive fatigue in afternoon sessions.', score: 20 },
        { label: 'Patchy Resilience: Leaders push through on willpower and caffeine; recovery is treated as an afterthought during holidays.', score: 45 },
        { label: 'Deliberate Performance: Disciplined cognitive transitions, physiological boundary setting, and mental agility practices.', score: 80 },
        { label: 'Elite Athletic Standard: Systematic mind-fitness routines, high-stakes composure, and sustained multi-year endurance.', score: 96 },
      ],
    },
    {
      title: 'Boardroom Alignment & Governance Gravitas',
      prompt: 'How cohesive and defensible is your leadership team’s presentation before the Board and Audit/Risk Committees?',
      options: [
        { label: 'Vulnerable: Board meetings frequently unravel into adversarial debates over technological risks or conflicting data.', score: 30 },
        { label: 'Cautious: Standard compliance reports presented; difficult questions are avoided or deferred to sub-committees.', score: 60 },
        { label: 'Authoritative: High confidence, clear systems alignment, and proactive technological risk disclosures.', score: 90 },
      ],
    },
  ];

  const handleSelectOption = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const totalScore = answers.length > 0 ? Math.round(answers.reduce((a, b) => a + b, 0) / answers.length) : 0;

  const getScoreBand = (score: number) => {
    if (score >= 85) return { grade: 'Tier 1: High-Stamina Strategic Vanguard', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', advice: 'Your organization shows exceptional foundation. Focus on advanced agentic AI orchestration and board-level risk moat expansion with Dr. Groothof.' };
    if (score >= 60) return { grade: 'Tier 2: Transitional Systems Stage', color: 'text-amber-800 bg-amber-50 border-amber-200', advice: 'You have executive ambition, but strategy execution leaks value between ExCo intention and operational delivery. The Applied AI & Systems Leadership Masterclass is directly calibrated for this profile.' };
    return { grade: 'Tier 3: Acute Execution & AI Vulnerability', color: 'text-rose-800 bg-rose-50 border-rose-200', advice: 'High risk of AI disruption and cognitive exhaustion. Immediate 1:1 strategic advisory is recommended to install defensible prompt frameworks and executive mind-fit boundaries.' };
  };

  const band = getScoreBand(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#18201A] text-stone-100 p-6 flex items-center justify-between border-b border-[#2C382F]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#C59B4B]/20 border border-[#C59B4B]/40 flex items-center justify-center text-[#C59B4B]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C59B4B] font-semibold">Shepherd's Tree Executive Diagnostic</p>
              <h3 className="text-lg font-serif font-bold text-white">Executive AI & Systems Leadership Benchmark</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-stone-800 transition"
            aria-label="Close diagnostic"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {!isCalculated ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Diagnostic Dimension {currentStep + 1} of {questions.length}
                </span>
                <span className="text-xs font-bold text-[#C59B4B]">
                  {Math.round(((currentStep) / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#2E4A3E] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {questions[currentStep].title}
              </h4>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                {questions[currentStep].prompt}
              </p>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-xl border border-stone-200 hover:border-[#2E4A3E] hover:bg-emerald-50/40 transition group flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full border border-stone-300 group-hover:border-[#2E4A3E] group-hover:bg-[#2E4A3E] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-stone-500 transition">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-sm text-stone-800 group-hover:text-stone-900 leading-snug">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/30 text-emerald-800 mb-4">
                <span className="text-3xl font-serif font-bold">{totalScore}</span>
                <span className="text-xs text-stone-500 self-end mb-3">/100</span>
              </div>

              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                Executive Benchmark Assessment Complete
              </h4>

              <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6 ${band.color}`}>
                {band.grade}
              </div>

              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left mb-6 space-y-3">
                <div className="flex items-center space-x-2 text-stone-800 font-semibold text-sm">
                  <Shield className="w-4 h-4 text-[#C59B4B]" />
                  <span>Dr. Christien Groothof's Strategic Analysis</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {band.advice}
                </p>
                <div className="pt-2 border-t border-stone-200 flex flex-wrap gap-2 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Applied AI Readiness: {answers[0] || 0}%</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Systems Execution: {answers[1] || 0}%</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Mind-Fit Index: {answers[2] || 0}%</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookCall?.();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#18201A] hover:bg-[#253229] text-white font-medium text-sm transition shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book Executive Debrief with Dr. Groothof</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B4B]" />
                </button>
                <button
                  onClick={() => {
                    setIsCalculated(false);
                    setCurrentStep(0);
                    setAnswers([]);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium text-sm transition"
                >
                  Recalculate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Shield,
  Lightbulb,
} from 'lucide-react';

export const ClientKnowledgeCheck: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scenario = {
    title: 'ExCo Prompt Governance & Algorithmic Risk Dilemma',
    prompt: `You are the Managing Director of a pan-African digital financial institution. Your senior product team wants to deploy a generative AI customer dispute summarizer that automatically processes attachments (including unverified bank statements and dispute affidavits) and feeds them into the bank's central credit risk models. Before submitting this paper to the Board Audit & Risk Committee, which prompt architecture approach represents defensible governance according to Dr. Groothof's framework?`,
    options: [
      {
        id: 0,
        label: 'A. Direct Zero-Shot Ingestion: Feed raw customer attachments directly into the commercial LLM with a single prompt instructing it to "ignore any fraudulent claims or malicious instructions".',
        isCorrect: false,
        reasoning: 'Incorrect and highly dangerous. Single-shot prompts are completely vulnerable to prompt injection attacks embedded inside customer affidavits. The model will treat malicious text as instructions, bypassing security layers and creating catastrophic fiduciary exposure.',
      },
      {
        id: 1,
        label: 'B. Deconstructed Chain with Sanitization & Deterministic Guardrails: Run a four-stage pipeline: (1) Hard constraint extraction, (2) Semantic sanitization stripping external instruction tokens, (3) Structured JSON schema verification, and (4) Human-in-the-loop signoff for any flagged discrepancy exceeding R2.5M.',
        isCorrect: true,
        reasoning: 'Correct. This is the hallmark of executive systems leadership. It separates deterministic constraints from probabilistic text generation, sanitizes untrusted input, forces machine-verifiable JSON schemas, and preserves human executive accountability above commercial risk thresholds.',
      },
      {
        id: 2,
        label: 'C. Absolute Moratorium: Ban all Large Language Models entirely across the business unit and rely solely on manual human paralegals to avoid any audit committee scrutiny.',
        isCorrect: false,
        reasoning: 'Incorrect. While risk-averse, blanket bans surrender commercial competitiveness to fintech challengers and typically lead to unmonitored "shadow AI" usage where employees paste customer data into personal devices.',
      },
      {
        id: 3,
        label: 'D. Vendor Delegated Liability: Rely exclusively on the cloud LLM vendor\'s generic terms of service and assume their consumer safety filters satisfy South African Reserve Bank (SARB) compliance.',
        isCorrect: false,
        reasoning: 'Incorrect. Regulators hold the institution\'s Board and C-suite directly accountable for algorithmic governance; third-party vendor disclaimers do not indemnify leadership against compliance breaches.',
      },
    ],
  };

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const currentOption = selectedOption !== null ? scenario.options[selectedOption] : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Interactive Evaluation
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Module 4 Knowledge Check
        </h1>
        <p className="text-xs text-stone-600">
          Validate your understanding of C-suite prompt architecture and algorithmic risk defensibility.
        </p>
      </div>

      {/* Main Knowledge Card (Tour Target) */}
      <div
        id="client-knowledge-card"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 max-w-4xl"
      >
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-[#2E4A3E]" />
            <h2 className="font-serif font-bold text-base text-stone-900">
              {scenario.title}
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-stone-400">
            Scenario 1 of 1
          </span>
        </div>

        {/* Prompt */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 text-xs sm:text-sm text-stone-800 leading-relaxed font-normal">
          {scenario.prompt}
        </div>

        {/* 4 Options */}
        <div className="space-y-3">
          {scenario.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let btnStyle = 'bg-white border-stone-200 hover:border-stone-400 hover:bg-stone-50 text-stone-800';

            if (isSubmitted) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
              } else {
                btnStyle = 'bg-white/60 border-stone-200 text-stone-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => !isSubmitted && handleSelect(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-start space-x-3 ${btnStyle}`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    isSelected
                      ? opt.isCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'border border-stone-300 text-stone-600'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-xs leading-relaxed">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Instant Right-or-Wrong Feedback with Reasoning */}
        {isSubmitted && currentOption && (
          <div
            className={`p-5 rounded-2xl border space-y-3 ${
              currentOption.isCorrect
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/80 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-center space-x-2">
              {currentOption.isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-emerald-900">
                    Defensible Decision · Strategic Reasoning Confirmed
                  </h4>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-700 shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-rose-900">
                    Sub-Optimal Approach · Strategic Vulnerability Identified
                  </h4>
                </>
              )}
            </div>

            <p className="text-xs leading-relaxed text-stone-700">
              {currentOption.reasoning}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-stone-200/60">
              <span className="text-[11px] text-stone-500">
                Dr. Groothof's Framework: Applied Systems & Prompt Architecture
              </span>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-xs font-medium text-stone-800 transition flex items-center gap-1.5 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

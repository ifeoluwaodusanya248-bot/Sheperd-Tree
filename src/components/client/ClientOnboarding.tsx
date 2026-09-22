import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Send,
  Building,
  Sparkles,
  Bell,
  Lock,
} from 'lucide-react';

export const ClientOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const [formData, setFormData] = useState({
    tenure: '6 to 12 months in current ExCo role',
    teamSize: '500+ across 3 African markets',
    challenge: 'Overcoming legacy executive skepticism toward generative AI tools and formalizing credit risk guardrails.',
    focusAreas: ['Applied AI Governance', 'Boardroom Defense & Poise', 'Mind-Fit Cognitive Stamina'],
    confidentialContext:
      'The previous MD left abruptly after an audit query. The board is hyper-sensitive to risk, and two senior non-execs are actively hostile to technological changes. I need to demonstrate that my leadership brings order and rigorous modern capability.',
    notificationMethod: 'Direct Executive Email + SMS Advisory Alerts',
    digestFrequency: 'Weekly on Monday 07:00 SAST',
  });

  const toggleFocus = (item: string) => {
    setFormData((prev) => {
      const exists = prev.focusAreas.includes(item);
      return {
        ...prev,
        focusAreas: exists
          ? prev.focusAreas.filter((f) => f !== item)
          : [...prev.focusAreas, item],
      };
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Executive Alignment Intake
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Executive Intake & Strategic Baseline
        </h1>
        <p className="text-xs text-stone-600">
          Pre-cohort onboarding intake formulated by Dr. Christien Groothof, DPhil.
        </p>
      </div>

      {/* Main Stepper Card (Tour Target) */}
      <div
        id="client-onboarding-card"
        className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 max-w-3xl mx-auto"
      >
        {/* Stepper Progress Bar */}
        <div className="space-y-2 pb-4 border-b border-stone-100">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-stone-500 uppercase tracking-wider">
              Step {currentStep} of 4: {
                currentStep === 1
                  ? 'Current Organizational Baseline'
                  : currentStep === 2
                  ? 'Strategic AI & Systems Priorities'
                  : currentStep === 3
                  ? 'Confidential Executive Context'
                  : 'Advisory Preferences'
              }
            </span>
            <span className="text-[#C59B4B] font-bold">
              {Math.round((currentStep / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#2E4A3E] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Where the client is now */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-stone-900">
              1. Where You Stand Today (Current Executive Baseline)
            </h3>
            <p className="text-xs text-stone-600">
              Help Dr. Groothof calibrate the baseline of your leadership scope and organizational environment.
            </p>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-stone-700 block">
                C-Suite / ExCo Tenure
              </label>
              <select
                value={formData.tenure}
                onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
              >
                <option>Newly appointed (under 6 months in role)</option>
                <option>6 to 12 months in current ExCo role</option>
                <option>1 to 3 years seasoned executive</option>
                <option>Senior Director / Board Member (3+ years)</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-stone-700 block">
                Scale of Organizational Responsibility
              </label>
              <input
                type="text"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
                placeholder="e.g. 500+ staff across 3 African markets"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-stone-700 block">
                Primary Structural Bottleneck
              </label>
              <textarea
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
              />
            </div>
          </div>
        )}

        {/* Step 2: What to focus on */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-stone-900">
              2. Core Focus Areas & Deliverables
            </h3>
            <p className="text-xs text-stone-600">
              Select the priority domains that will move the commercial needle most decisively for your practice:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Applied AI Governance & Prompting',
                'Boardroom Defense & Poise',
                'Systems Thinking & Root-Cause Diagnosis',
                'Mind-Fit Cognitive Stamina & Longevity',
                'Multi-Stakeholder Politics & Alignment',
                'NLP Linguistic Reframing for Leaders',
              ].map((focus) => {
                const selected = formData.focusAreas.includes(focus);
                return (
                  <button
                    key={focus}
                    type="button"
                    onClick={() => toggleFocus(focus)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-medium transition flex items-center justify-between ${
                      selected
                        ? 'bg-emerald-50 border-[#2E4A3E] text-emerald-950 font-bold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700'
                    }`}
                  >
                    <span>{focus}</span>
                    {selected && <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Free-text context for the coach */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-[#C59B4B]" />
              <h3 className="font-serif font-bold text-lg text-stone-900">
                3. Confidential Context for Dr. Groothof
              </h3>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              What are the political undercurrents, personal insecurities, or unspoken realities that you cannot discuss openly in the office? This remains strictly confidential.
            </p>

            <textarea
              rows={6}
              value={formData.confidentialContext}
              onChange={(e) => setFormData({ ...formData, confidentialContext: e.target.value })}
              className="w-full p-4 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E] leading-relaxed"
            />
          </div>
        )}

        {/* Step 4: Notification preferences */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-[#2E4A3E]" />
              <h3 className="font-serif font-bold text-lg text-stone-900">
                4. Notification & Executive Cadence Preferences
              </h3>
            </div>
            <p className="text-xs text-stone-600">
              Configure how you wish to receive video feedback alerts, masterclass schedules, and weekly briefings:
            </p>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-stone-700 block">
                Primary Channel
              </label>
              <select
                value={formData.notificationMethod}
                onChange={(e) => setFormData({ ...formData, notificationMethod: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
              >
                <option>Direct Executive Email + SMS Advisory Alerts</option>
                <option>Executive Email Only (No Mobile Push)</option>
                <option>Executive Assistant Delegated Inbox</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-stone-700 block">
                Weekly Briefing Dispatch Timing
              </label>
              <select
                value={formData.digestFrequency}
                onChange={(e) => setFormData({ ...formData, digestFrequency: e.target.value })}
                className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
              >
                <option>Weekly on Monday 07:00 SAST (Pre-workweek)</option>
                <option>Weekly on Friday 16:30 SAST (Weekend transition)</option>
                <option>Bi-weekly Executive Synthesis</option>
              </select>
            </div>
          </div>
        )}

        {/* Stepper Navigation Buttons (Steppable forward and back) */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            className={`px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold flex items-center gap-1.5 transition ${
              currentStep === 1
                ? 'opacity-40 cursor-not-allowed text-stone-400'
                : 'hover:bg-stone-50 text-stone-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
              className="px-5 py-2.5 rounded-xl bg-[#2E4A3E] hover:bg-[#253D33] text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
            >
              <span>Next Step</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsCompleted(true)}
              className="px-6 py-2.5 rounded-xl bg-[#C59B4B] hover:bg-[#b0883b] text-stone-950 text-xs font-bold flex items-center gap-1.5 transition shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Finalize Intake</span>
            </button>
          )}
        </div>

        {isCompleted && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>
              Intake baseline saved! Dr. Christien Groothof has received your confidential context and tailored your advisory syllabus.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

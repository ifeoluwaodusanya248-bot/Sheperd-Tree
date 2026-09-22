import React, { useState } from 'react';
import {
  CreditCard,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
} from 'lucide-react';

export const ClientCheckout: React.FC = () => {
  const [paymentPlan, setPaymentPlan] = useState<'full' | 'instalments'>('full');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'eft'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Corporate Enrollment & Retainer
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Executive Programme Enrollment & Payment
        </h1>
        <p className="text-xs text-stone-600">
          Shepherd's Tree Leadership Consulting (Pty) Ltd · Enterprise Invoicing & Card Processing
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form & Payment Methods (Tour Target) */}
        <div id="client-checkout-card" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          {/* Plan Selector: Pay in Full vs Instalments */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Choose Enrollment Structure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentPlan('full')}
                className={`p-4 rounded-2xl border text-left transition ${
                  paymentPlan === 'full'
                    ? 'border-[#2E4A3E] bg-emerald-50/50 ring-1 ring-[#2E4A3E]'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-stone-900">
                    Pay in Full
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#C59B4B]/20 text-[#8C6B28]">
                    Save R 10,000
                  </span>
                </div>
                <div className="text-xl font-serif font-bold text-stone-900 mt-1">
                  R 125,000 ZAR
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  One-time single payment. Includes 2 bonus 1-on-1 strategy sessions.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentPlan('instalments')}
                className={`p-4 rounded-2xl border text-left transition ${
                  paymentPlan === 'instalments'
                    ? 'border-[#2E4A3E] bg-emerald-50/50 ring-1 ring-[#2E4A3E]'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-stone-900">
                    3 Monthly Instalments
                  </span>
                </div>
                <div className="text-xl font-serif font-bold text-stone-900 mt-1">
                  3 × R 45,000 ZAR
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Billed monthly. Total R 135,000 ZAR spread over cohort duration.
                </p>
              </button>
            </div>
          </div>

          {/* Form details */}
          <form onSubmit={handlePay} className="space-y-4 pt-2 border-t border-stone-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">Executive Full Name</label>
                <input
                  type="text"
                  defaultValue="Sipho Ndlovu"
                  required
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#2E4A3E] focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">Corporate Email</label>
                <input
                  type="email"
                  defaultValue="sipho.ndlovu@digitalbank.africa"
                  required
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#2E4A3E] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">Company / Enterprise Name</label>
                <input
                  type="text"
                  defaultValue="Pan-African Digital Banking Group"
                  required
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#2E4A3E] focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700">VAT / Tax ID (Optional for VAT Invoice)</label>
                <input
                  type="text"
                  placeholder="e.g. 4810294819"
                  className="w-full p-3 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-[#2E4A3E] focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Method Toggle */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Payment Channel
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                    paymentMethod === 'card'
                      ? 'border-[#2E4A3E] bg-emerald-50/50 text-emerald-950 font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Stripe Corporate Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('eft')}
                  className={`flex-1 p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                    paymentMethod === 'eft'
                      ? 'border-[#2E4A3E] bg-emerald-50/50 text-emerald-950 font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>FNB Direct Corporate EFT</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'card' ? (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Card Number</label>
                  <input
                    type="text"
                    defaultValue="•••• •••• •••• 9821"
                    className="w-full p-2.5 rounded-lg border border-stone-300 text-xs font-mono bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Expiry</label>
                    <input
                      type="text"
                      defaultValue="08/29"
                      className="w-full p-2.5 rounded-lg border border-stone-300 text-xs font-mono bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">CVC</label>
                    <input
                      type="text"
                      defaultValue="•••"
                      className="w-full p-2.5 rounded-lg border border-stone-300 text-xs font-mono bg-white"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1 text-stone-700">
                <p className="font-bold text-stone-900">FNB Corporate Bank Account Details:</p>
                <p>Account Name: Shepherd's Tree Leadership Consulting (Pty) Ltd</p>
                <p>Bank: First National Bank (FNB) Commercial</p>
                <p>Account Number: 6291 0029 481 · Branch Code: 250655</p>
                <p className="text-[11px] text-stone-500 pt-1">
                  Corporate tax invoice with SARS clearance attached will be issued automatically.
                </p>
              </div>
            )}

            {isSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-1">
                <CheckCircle2 className="w-7 h-7 text-emerald-700 mx-auto" />
                <h4 className="font-serif font-bold text-xs text-emerald-950">
                  Payment Confirmed · Receipt Dispatched
                </h4>
                <p className="text-[11px] text-emerald-800">
                  Tax invoice #STC-2026-089 has been sent to your email and platform inbox.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl bg-[#2E4A3E] hover:bg-[#233a30] text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span>
                  {isProcessing
                    ? 'Authorizing Secure Payment...'
                    : paymentPlan === 'full'
                    ? 'Confirm & Pay R 125,000 ZAR'
                    : 'Confirm & Pay First Instalment (R 45,000 ZAR)'}
                </span>
              </button>
            )}
          </form>
        </div>

        {/* Right Column: Order Summary, Inclusions & Refund Window */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
            <div className="pb-3 border-b border-stone-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
                Order Inclusions
              </span>
              <h3 className="font-serif font-bold text-base text-stone-900 mt-0.5">
                Executive Cohort Inclusions
              </h3>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Full 6-Module Curriculum:</strong> Applied AI Prompting, Systems Dynamics & Governance.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Private Advisory Sessions:</strong> Direct 1-on-1 strategy calls with Dr. Christien Groothof, DPhil.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Asynchronous Review Queue:</strong> Voice and video critiques on actual board papers.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Mind-Fit & Longevity Protocol:</strong> Executive stamina habits and cortisol pacing.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Executive Alumni Network:</strong> Invitation to confidential ExCo peer circles across Africa.
                </span>
              </div>
            </div>

            {/* 14-Day Refund Window (Requirement from brief) */}
            <div className="p-4 rounded-2xl bg-[#1B251E] text-stone-100 border border-stone-800 space-y-2">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#C59B4B] shrink-0" />
                <h4 className="font-serif font-bold text-xs text-white">
                  14-Day Executive Guarantee & Refund Window
                </h4>
              </div>
              <p className="text-[11px] text-stone-300 leading-relaxed font-light">
                If after completing the systems intake and your first 1-on-1 advisory session with Dr. Groothof you do not feel the commercial strategic value immediately, notify us within 14 days for a 100% full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

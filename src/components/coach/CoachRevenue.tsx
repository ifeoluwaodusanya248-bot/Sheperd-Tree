import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Download,
  Calendar,
  CreditCard,
  Building2,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Clock,
} from 'lucide-react';
import { REVENUE_ORDERS } from '../../data/coachData';
import { OrderItem } from '../../types';

export const CoachRevenue: React.FC = () => {
  const [orders] = useState<OrderItem[]>(REVENUE_ORDERS);
  const [taxDismissed, setTaxDismissed] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Commercial Practice & Retainers
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Executive Revenue & Commercial Contracts
        </h1>
        <p className="text-xs text-stone-600">
          Shepherd's Tree Leadership Consulting (Pty) Ltd · FNB Commercial Banking & Stripe International.
        </p>
      </div>

      {/* Headline Financials */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs font-medium text-stone-500">Monthly Run Rate</span>
          <div className="text-2xl font-serif font-bold text-stone-900">R 485,000</div>
          <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>~$26,500 USD / Month</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs font-medium text-stone-500">Year-to-Date Contracted</span>
          <div className="text-2xl font-serif font-bold text-stone-900">R 2,940,000</div>
          <div className="text-[11px] text-emerald-700 font-medium">
            <span>+34% vs. previous year</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs font-medium text-stone-500">Average Contract Value</span>
          <div className="text-2xl font-serif font-bold text-stone-900">R 165,000</div>
          <div className="text-[11px] text-stone-500">
            <span>Per C-suite / ExCo Cohort</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs font-medium text-stone-500">Retainer Renewal Rate</span>
          <div className="text-2xl font-serif font-bold text-stone-900">100%</div>
          <div className="text-[11px] text-emerald-700 font-medium">
            <span>Zero contract churn</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Six-Month Sales Chart + Payout Statuses (Tour Target) */}
      <div id="coach-revenue-panel" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Six-Month Sales Chart */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="space-y-0.5">
              <h2 className="font-serif font-bold text-base text-stone-900">
                Six-Month Sales & Retainer Trajectory
              </h2>
              <p className="text-xs text-stone-500">
                April 2026 – September 2026 (ZAR in Thousands)
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              Q3 High Water Mark
            </span>
          </div>

          {/* Bar Chart Representation */}
          <div className="h-56 flex items-end justify-between gap-4 pt-4 px-2">
            {[
              { month: 'Apr', amount: 280, label: 'R 280k' },
              { month: 'May', amount: 320, label: 'R 320k' },
              { month: 'Jun', amount: 390, label: 'R 390k' },
              { month: 'Jul', amount: 410, label: 'R 410k' },
              { month: 'Aug', amount: 450, label: 'R 450k' },
              { month: 'Sep', amount: 485, label: 'R 485k', active: true },
            ].map((col) => {
              const heightPct = (col.amount / 500) * 100;
              return (
                <div key={col.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <span className="text-[10px] font-mono text-stone-500 group-hover:text-stone-900 transition">
                    {col.label}
                  </span>
                  <div className="w-full max-w-[48px] bg-stone-100 rounded-t-xl overflow-hidden h-full flex items-end">
                    <div
                      className={`w-full transition-all duration-500 rounded-t-xl ${
                        col.active
                          ? 'bg-[#2E4A3E] group-hover:bg-[#233a30]'
                          : 'bg-[#C59B4B]/80 group-hover:bg-[#C59B4B]'
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-stone-700">{col.month}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#2E4A3E]" /> Current ExCo Run Rate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#C59B4B]" /> Historical Retainers
            </span>
          </div>
        </div>

        {/* Payout Statuses (Including One Needing Action) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <h3 className="font-serif font-bold text-base text-stone-900">
              Commercial Payout Gateways
            </h3>
            <span className="text-xs text-stone-400">Merchant Accounts</span>
          </div>

          <div className="space-y-3">
            {/* Payout 1: FNB Commercial EFT */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-800" />
                  <span>FNB Commercial Corporate EFT</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                  Settled
                </span>
              </div>
              <div className="text-sm font-serif font-bold text-stone-800">
                R 240,000.00 ZAR
              </div>
              <p className="text-[11px] text-stone-500">
                Transferred to Shepherd's Tree (Pty) Ltd Main Operational Account on 02 Sep 2026.
              </p>
            </div>

            {/* Payout 2: Stripe International USD */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-stone-600" />
                  <span>Stripe International Merchant</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                  Settled
                </span>
              </div>
              <div className="text-sm font-serif font-bold text-stone-800">
                $7,950.00 USD (~R 145,000 ZAR)
              </div>
              <p className="text-[11px] text-stone-500">
                Settled to international treasury account (AfriHealth Capstone).
              </p>
            </div>

            {/* Payout 3: ACTION REQUIRED (Requirement from brief) */}
            {!taxDismissed ? (
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Payout Action Required</span>
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-200 text-amber-900 animate-pulse">
                    Action Needed
                  </span>
                </div>
                <div className="text-sm font-serif font-bold text-amber-900">
                  R 65,000.00 ZAR (Apex Logistics Retainer)
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  SARS Tax Clearance & Corporate Verification renewal is pending on Stripe South Africa. Payout will disburse once certificate is uploaded.
                </p>
                <div className="pt-1 flex items-center space-x-2">
                  <button
                    onClick={() => setTaxDismissed(true)}
                    className="px-3 py-1.5 rounded-lg bg-amber-800 text-white text-xs font-semibold hover:bg-amber-900 transition"
                  >
                    Upload SARS Clearance
                  </button>
                  <button
                    onClick={() => setTaxDismissed(true)}
                    className="px-2.5 py-1.5 rounded-lg border border-amber-400 text-amber-900 text-xs font-medium hover:bg-amber-100 transition"
                  >
                    Dismiss Alert
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tax clearance verified. Payout queued for dispatch tomorrow.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Orders & Retainer Contracts Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <div>
            <h3 className="font-serif font-bold text-base text-stone-900">
              Corporate Retainers & Contract Ledger
            </h3>
            <p className="text-xs text-stone-500">
              Live enterprise orders, invoice status, and gateway settlement.
            </p>
          </div>
          <button className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-stone-500" />
            <span>Export CSV</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-wider font-semibold">
                <th className="pb-3 pr-4">Order ID</th>
                <th className="pb-3 pr-4">Corporate Client / Leader</th>
                <th className="pb-3 pr-4">Programme & Plan</th>
                <th className="pb-3 pr-4">Amount (ZAR)</th>
                <th className="pb-3 pr-4">Payment Gateway</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-stone-50/70 transition">
                  <td className="py-3.5 pr-4 font-mono font-medium text-stone-700">
                    {order.id}
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="font-bold text-stone-900 block">{order.clientName}</span>
                    <span className="text-[11px] text-stone-500">{order.company}</span>
                  </td>
                  <td className="py-3.5 pr-4 text-stone-700 font-medium">
                    {order.plan}
                  </td>
                  <td className="py-3.5 pr-4 font-serif font-bold text-stone-900">
                    {order.amount}
                  </td>
                  <td className="py-3.5 pr-4 text-stone-600">
                    {order.gateway}
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button className="text-[#2E4A3E] hover:underline font-medium inline-flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Mail,
  Video,
  FileText,
  Calendar,
  CreditCard,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { NOTIFICATION_EMAILS } from '../../data/coachData';
import { NotificationEmail } from '../../types';

export const ClientNotifications: React.FC = () => {
  const [emails] = useState<NotificationEmail[]>(NOTIFICATION_EMAILS);
  const [selectedEmailId, setSelectedEmailId] = useState<string>('email-1');

  const selectedEmail = emails.find((e) => e.id === selectedEmailId) || emails[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Communications & Dispatches
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Executive Platform Inbox & Branded Dispatches
        </h1>
        <p className="text-xs text-stone-600">
          Real-time email notifications, video review dispatches, and statutory receipts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Email Inbox List (Tour Target) */}
        <div id="client-notifications-inbox" className="lg:col-span-5 space-y-3">
          {emails.map((email) => {
            const isSelected = email.id === selectedEmail.id;
            return (
              <div
                key={email.id}
                onClick={() => setSelectedEmailId(email.id)}
                className={`p-4 rounded-2xl border transition cursor-pointer space-y-1.5 ${
                  isSelected
                    ? 'bg-white border-[#2E4A3E] shadow-md ring-1 ring-[#2E4A3E]'
                    : 'bg-white/80 border-stone-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      email.type === 'feedback'
                        ? 'bg-emerald-50 text-emerald-800'
                        : email.type === 'progress'
                        ? 'bg-blue-50 text-blue-800'
                        : email.type === 'receipt'
                        ? 'bg-purple-50 text-purple-800'
                        : 'bg-amber-50 text-amber-800'
                    }`}
                  >
                    {email.type === 'feedback'
                      ? 'Video Feedback'
                      : email.type === 'progress'
                      ? 'Weekly Digest'
                      : email.type === 'receipt'
                      ? 'VAT Receipt'
                      : 'Calendar Booking'}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {email.date}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xs text-stone-900 line-clamp-1">
                  {email.subject}
                </h4>

                <p className="text-[11px] text-stone-500 line-clamp-2">
                  {email.preview}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Branded HTML Email Preview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-stone-100 rounded-3xl p-4 sm:p-6 border border-stone-300 shadow-inner">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-2 px-2 flex items-center justify-between">
              <span>Client Email Client Preview (Gmail / Outlook)</span>
              <span>Encrypted TLS 1.3</span>
            </div>

            {/* Simulated HTML Email Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden text-stone-800">
              {/* Email Masthead with Coach Branding */}
              <div className="bg-[#1A221C] p-6 text-white text-center border-b-4 border-[#C59B4B] space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-[#2E4A3E]/60 border border-[#C59B4B]/40 text-[#C59B4B] text-[10px] font-serif font-bold uppercase tracking-widest">
                  Shepherd's Tree Leadership Consulting
                </div>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Dr. Christien Groothof, DPhil
                </h3>
                <p className="text-[11px] text-stone-400 font-light">
                  Johannesburg · London · Global Executive Advisory
                </p>
              </div>

              {/* Email Body */}
              <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Subject:</span>
                    <strong className="text-stone-900 font-serif font-bold">
                      {selectedEmail.subject}
                    </strong>
                  </div>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {selectedEmail.date}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-stone-800 whitespace-pre-line leading-relaxed">
                  {selectedEmail.body}
                </div>

                {/* Email Call-to-Action Button */}
                <div className="pt-2 text-center">
                  <div className="inline-block px-6 py-3 rounded-xl bg-[#2E4A3E] text-white text-xs font-semibold shadow-md">
                    {selectedEmail.ctaText}
                  </div>
                </div>

                {/* Disclaimer / Sign-off */}
                <div className="pt-6 border-t border-stone-100 text-[11px] text-stone-500 space-y-2">
                  <p className="italic">
                    "Rigour and Reach. Turning people strategy into commercial results that stick."
                  </p>
                  <p className="font-bold text-stone-700">
                    Dr. Christien Groothof, DPhil<br />
                    <span className="font-normal text-stone-500">
                      Founder & Principal Advisory Partner<br />
                      Shepherd's Tree Leadership Consulting (Pty) Ltd
                    </span>
                  </p>
                </div>
              </div>

              {/* Email Footer */}
              <div className="bg-stone-50 p-4 border-t border-stone-200 text-center text-[10px] text-stone-400 space-y-1">
                <p>
                  Shepherd's Tree Leadership Consulting (Pty) Ltd · Reg: 2025/104928/07 · Sandton, Johannesburg, South Africa
                </p>
                <p>
                  This confidential advisory dispatch is intended solely for Sipho Ndlovu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

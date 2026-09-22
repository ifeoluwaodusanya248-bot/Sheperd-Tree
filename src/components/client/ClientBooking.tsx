import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  Video,
  CreditCard,
  Sparkles,
  ArrowRight,
  Shield,
} from 'lucide-react';

export const ClientBooking: React.FC = () => {
  const [sessionType, setSessionType] = useState<'advisory' | 'board' | 'mindfit'>('advisory');
  const [selectedDay, setSelectedDay] = useState<number>(25);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 SAST');
  const [focusNote, setFocusNote] = useState(
    'Focus for Dr. Groothof: Rehearsing the Audit Committee presentation and testing our response to conservative directors questioning LLM prompt safety.'
  );
  const [isBooked, setIsBooked] = useState(false);

  // Available days in September 2026 (business days with open availability)
  const availableDays = [23, 24, 25, 29, 30];
  const timeSlots = ['09:00 SAST', '10:00 SAST', '14:00 SAST', '16:00 SAST'];

  const sessionDetails = {
    advisory: { name: '60-Minute 1-on-1 Strategic Advisory', duration: '60 min', creditsCost: 1 },
    board: { name: '90-Minute ExCo Board Simulation', duration: '90 min', creditsCost: 2 },
    mindfit: { name: '45-Minute Mind-Fit & Longevity Review', duration: '45 min', creditsCost: 1 },
  };

  const currentDetails = sessionDetails[sessionType];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Direct Executive Access
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Book Advisory 1-on-1 with Dr. Groothof
        </h1>
        <p className="text-xs text-stone-600">
          Seamless executive scheduling. Private video link generated automatically upon booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Session Selector & Calendar (Tour Target) */}
        <div id="client-booking-calendar" className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          {/* 1. Session Type Selector */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              1. Select Session Type
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setSessionType('advisory')}
                className={`p-4 rounded-2xl border text-left transition ${
                  sessionType === 'advisory'
                    ? 'border-[#2E4A3E] bg-emerald-50/50 ring-1 ring-[#2E4A3E]'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-serif font-bold text-xs text-stone-900 mb-1">
                  1-on-1 Strategic Advisory
                </div>
                <div className="text-[11px] text-stone-500">60 mins · 1 Retainer Credit</div>
              </button>

              <button
                onClick={() => setSessionType('board')}
                className={`p-4 rounded-2xl border text-left transition ${
                  sessionType === 'board'
                    ? 'border-[#2E4A3E] bg-emerald-50/50 ring-1 ring-[#2E4A3E]'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-serif font-bold text-xs text-stone-900 mb-1">
                  Board Simulation
                </div>
                <div className="text-[11px] text-stone-500">90 mins · 2 Retainer Credits</div>
              </button>

              <button
                onClick={() => setSessionType('mindfit')}
                className={`p-4 rounded-2xl border text-left transition ${
                  sessionType === 'mindfit'
                    ? 'border-[#2E4A3E] bg-emerald-50/50 ring-1 ring-[#2E4A3E]'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-serif font-bold text-xs text-stone-900 mb-1">
                  Mind-Fit Longevity
                </div>
                <div className="text-[11px] text-stone-500">45 mins · 1 Retainer Credit</div>
              </button>
            </div>
          </div>

          {/* 2. Month Calendar (Only Open Days Selectable) */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                2. Select Available Date · September 2026
              </span>
              <span className="text-[11px] text-emerald-800 font-medium">
                ● Green indicates open executive slots
              </span>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <div key={d} className="font-bold text-stone-400 py-1">
                  {d}
                </div>
              ))}

              {/* 30 Days of September 2026 representation */}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                const isOpen = availableDays.includes(day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    disabled={!isOpen}
                    onClick={() => setSelectedDay(day)}
                    className={`py-3 rounded-xl text-xs font-semibold transition ${
                      isSelected
                        ? 'bg-[#2E4A3E] text-white shadow-sm ring-2 ring-[#C59B4B]'
                        : isOpen
                        ? 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100 border border-emerald-200'
                        : 'bg-stone-50 text-stone-300 cursor-not-allowed'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Time Slots */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              3. Available SAST Time Slots (Thursday {selectedDay} Sep 2026)
            </span>
            <div className="flex flex-wrap gap-2.5">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition ${
                    selectedTime === time
                      ? 'bg-[#1A221C] text-white shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Focus Note */}
          <div className="space-y-2 pt-2 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-700">
              Session Focus Note (What should Dr. Groothof prepare for this advisory call?)
            </span>
            <textarea
              rows={3}
              value={focusNote}
              onChange={(e) => setFocusNote(e.target.value)}
              className="w-full p-4 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
            />
          </div>
        </div>

        {/* Right Column: Booking Summary Card & Credits */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
            <div className="pb-3 border-b border-stone-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
                Retainer Balance
              </span>
              <h3 className="font-serif font-bold text-lg text-stone-900 mt-0.5">
                Booking Summary
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-[#1B251E] text-stone-100 border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Active Plan</span>
                <span className="text-white font-medium">Annual C-Suite Retainer</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Available Credits</span>
                <span className="text-emerald-400 font-bold font-mono">2 of 4 Remaining</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-400 pt-1 border-t border-stone-800">
                <span>Cost for this Session</span>
                <span className="text-[#C59B4B] font-semibold">{currentDetails.creditsCost} Credit</span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-stone-600">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{currentDetails.name} ({currentDetails.duration})</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>Thursday {selectedDay} Sep 2026 at {selectedTime}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Video className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>Encrypted HD Teleconference via Shepherd's Tree Executive Room</span>
              </div>
            </div>

            {isBooked ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-1">
                <CheckCircle2 className="w-7 h-7 text-emerald-700 mx-auto" />
                <h4 className="font-serif font-bold text-xs text-emerald-950">
                  Advisory Session Confirmed!
                </h4>
                <p className="text-[11px] text-emerald-800">
                  Calendar invites and executive briefing packet dispatched to your email.
                </p>
              </div>
            ) : (
              <button
                onClick={() => setIsBooked(true)}
                className="w-full py-3.5 rounded-xl bg-[#2E4A3E] hover:bg-[#233a30] text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Confirm & Reserve Session</span>
                <ArrowRight className="w-4 h-4 text-[#C59B4B]" />
              </button>
            )}

            <div className="text-[11px] text-stone-400 text-center">
              Rescheduling permitted up to 24 hours prior without credit deduction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

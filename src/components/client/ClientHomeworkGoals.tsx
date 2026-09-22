import React, { useState } from 'react';
import {
  FileText,
  UploadCloud,
  Mic,
  MicOff,
  Video,
  Play,
  Pause,
  CheckCircle2,
  Clock,
  Send,
  Paperclip,
  Activity,
  Target,
  Sparkles,
} from 'lucide-react';

export const ClientHomeworkGoals: React.FC = () => {
  const [submissionText, setSubmissionText] = useState(
    'Dr. Groothof, here is our revised prompt chain architecture for the ExCo credit risk review. We implemented the four-stage verification you recommended in Lesson 4...'
  );
  const [attachedFiles, setAttachedFiles] = useState<string[]>([
    'PanAfricanBank_LLM_Architecture_v2.pdf',
  ]);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [hasVoiceNote, setHasVoiceNote] = useState(true);
  const [isPlayingFeedback, setIsPlayingFeedback] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div id="client-homework-container" className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Deliverables & Execution
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Executive Deliverables, Video Feedback & 90-Day Goals
        </h1>
        <p className="text-xs text-stone-600">
          Direct strategic dialogue with Dr. Christien Groothof, DPhil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: This Week's Assignment & Coach Feedback */}
        <div className="lg:col-span-8 space-y-6">
          {/* Coach's Video Feedback on Past Work */}
          <div className="bg-[#1A221C] text-stone-100 rounded-3xl p-6 sm:p-7 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-[#C59B4B]" />
                <h2 className="font-serif font-bold text-base text-white">
                  Dr. Groothof's Video Feedback (Previous Deliverable)
                </h2>
              </div>
              <span className="text-xs text-emerald-400 font-medium">04:12 HD Video</span>
            </div>

            <div className="relative aspect-video max-h-56 bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 flex items-center justify-center">
              <div className="text-center space-y-2 p-4">
                <div
                  onClick={() => setIsPlayingFeedback(!isPlayingFeedback)}
                  className="w-14 h-14 rounded-full bg-[#2E4A3E] hover:bg-[#395c4d] text-white flex items-center justify-center mx-auto cursor-pointer transition shadow-lg"
                >
                  {isPlayingFeedback ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5 fill-white" />}
                </div>
                <h4 className="text-xs font-serif font-bold text-white">
                  "Sipho, here is how to defend the credit threshold to your Board Chairman"
                </h4>
                <p className="text-[11px] text-stone-400">
                  Recorded by Dr. Christien Groothof on 22 Sep 2026
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              "Your prompt deconstruction in Stage 2 is airtight. I recommend you specifically address Johan’s risk concerns by opening with slide 4."
            </p>
          </div>

          {/* Current Deliverable Submission Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
                  Due Thursday 24 Sep
                </span>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Week 4: Enterprise LLM Workflow & Board Governance Architecture
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Ready for Review
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                <h4 className="font-serif font-bold text-sm text-emerald-950">
                  Deliverable Transmitted to Dr. Groothof
                </h4>
                <p className="text-xs text-emerald-800">
                  Your strategy brief and voice note are in Dr. Groothof's priority queue. Video review expected within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">
                    Executive Strategic Brief (Text Submission)
                  </label>
                  <textarea
                    rows={4}
                    value={submissionText}
                    onChange={(e) => setSubmissionText(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
                  />
                </div>

                {/* File Attachment & Voice Note Controls */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <label className="px-3.5 py-2 rounded-xl border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-700 cursor-pointer flex items-center gap-1.5 transition">
                    <Paperclip className="w-3.5 h-3.5 text-stone-500" />
                    <span>Attach Deck (PDF/DOCX)</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setAttachedFiles([...attachedFiles, e.target.files[0].name]);
                        }
                      }}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setIsRecordingVoice(!isRecordingVoice);
                      if (isRecordingVoice) setHasVoiceNote(true);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                      isRecordingVoice
                        ? 'bg-rose-600 text-white animate-pulse'
                        : hasVoiceNote
                        ? 'bg-emerald-50 border border-emerald-300 text-emerald-900'
                        : 'border border-stone-300 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    {isRecordingVoice ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5 text-emerald-700" />}
                    <span>{isRecordingVoice ? 'Stop Recording Voice Note' : hasVoiceNote ? 'Voice Note Attached (02:15)' : 'Record Voice Note'}</span>
                  </button>
                </div>

                {/* Attached Files List */}
                {attachedFiles.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-stone-500">Attached:</span>
                    <div className="flex flex-wrap gap-2">
                      {attachedFiles.map((f, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-lg bg-stone-100 text-xs text-stone-800 flex items-center gap-2 border border-stone-200">
                          <Paperclip className="w-3 h-3 text-stone-400" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#2E4A3E] hover:bg-[#253D33] text-white text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Deliverable for Dr. Groothof's Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: 90-Day Goals & Habit Tracker */}
        <div className="lg:col-span-4 space-y-6">
          {/* 90-Day Execution Goal */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-stone-100">
              <Target className="w-4 h-4 text-[#C59B4B]" />
              <h3 className="font-serif font-bold text-base text-stone-900">
                Sipho's 90-Day C-Suite Goal
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-stone-900 block">
                Deliver Flawless Board Approval for Generative AI Banking Charter
              </span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Objective: Secure unanimous Board & Audit Risk Committee sign-off on enterprise LLM framework without regulatory pushback.
              </p>
              <div className="pt-2 space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-stone-700">
                  <span>Milestone Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2E4A3E] h-full" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Submission History */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-stone-100">
              <Clock className="w-4 h-4 text-stone-500" />
              <h3 className="font-serif font-bold text-base text-stone-900">
                Submission History
              </h3>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Prompt Chaining Brief</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Approved
                  </span>
                </div>
                <span className="text-[10px] text-stone-400">Submitted 18 Sep 2026</span>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Systems Diagnostic Survey</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Complete
                  </span>
                </div>
                <span className="text-[10px] text-stone-400">Submitted 08 Sep 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

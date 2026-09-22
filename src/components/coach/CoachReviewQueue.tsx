import React, { useState, useEffect } from 'react';
import {
  FileText,
  Volume2,
  HelpCircle,
  Play,
  Pause,
  Video,
  CheckCircle2,
  RotateCcw,
  Paperclip,
  Download,
  Send,
  Sparkles,
  Camera,
  Check,
  XCircle,
} from 'lucide-react';
import { QUEUE_ITEMS } from '../../data/coachData';
import { QueueItem } from '../../types';

interface CoachReviewQueueProps {
  selectedQueueId?: string;
  onSelectItem?: (id: string) => void;
}

export const CoachReviewQueue: React.FC<CoachReviewQueueProps> = ({
  selectedQueueId = 'queue-1',
  onSelectItem,
}) => {
  const [items, setItems] = useState<QueueItem[]>(QUEUE_ITEMS);
  const [activeId, setActiveId] = useState(selectedQueueId);
  const [feedbackMode, setFeedbackMode] = useState<'video' | 'note'>('video');
  const [writtenNote, setWrittenNote] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(35);

  const selectedItem = items.find((i) => i.id === activeId) || items[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setIsPlayingAudio(false);
    setIsRecording(false);
    setRecordingSeconds(0);
    if (onSelectItem) onSelectItem(id);
  };

  const handleMarkStatus = (status: 'reviewed' | 'needs-rework') => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === selectedItem.id
          ? {
              ...i,
              status,
              feedbackNotes: writtenNote || (status === 'reviewed' ? 'Video feedback recorded & approved.' : 'Strategic revision requested on prompt parameters.'),
              feedbackType: feedbackMode,
            }
          : i
      )
    );
    setWrittenNote('');
    setIsRecording(false);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Asynchronous Executive Mentorship
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Unified Review & Feedback Queue
        </h1>
        <p className="text-xs text-stone-600">
          Holding written strategy briefs, encrypted voice check-ins, and diagnostic quizzes in one unified triage queue.
        </p>
      </div>

      {/* Main Grid: Queue List (Left) + Submission & Feedback Composer (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Queue List */}
        <div className="lg:col-span-4 space-y-3">
          {items.map((item) => {
            const isSelected = item.id === selectedItem.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`p-4 rounded-2xl border transition cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-white border-[#2E4A3E] shadow-md ring-1 ring-[#2E4A3E]'
                    : 'bg-white/80 border-stone-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      item.type === 'assignment'
                        ? 'bg-emerald-50 text-emerald-800'
                        : item.type === 'audio'
                        ? 'bg-amber-50 text-amber-800'
                        : 'bg-purple-50 text-purple-800'
                    }`}
                  >
                    {item.type === 'assignment'
                      ? 'Written Brief'
                      : item.type === 'audio'
                      ? 'Voice Memo'
                      : 'Knowledge Check'}
                  </span>

                  <span
                    className={`text-[10px] font-semibold ${
                      item.status === 'reviewed'
                        ? 'text-emerald-700'
                        : item.status === 'needs-rework'
                        ? 'text-rose-600'
                        : 'text-[#C59B4B]'
                    }`}
                  >
                    {item.status === 'reviewed'
                      ? '✓ Reviewed'
                      : item.status === 'needs-rework'
                      ? '⚠ Needs Rework'
                      : '● Awaiting Review'}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xs text-stone-900 line-clamp-1">
                  {item.title}
                </h4>

                <div className="text-[11px] text-stone-500 font-medium">
                  {item.clientName}
                </div>

                <div className="text-[10px] text-stone-400">
                  {item.submittedAt}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Inline Submission & Feedback Composer (Tour Target) */}
        <div id="coach-review-queue-card" className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
            {/* Submission Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Client Deliverable Review
                </span>
                <h2 className="font-serif font-bold text-lg text-stone-900">
                  {selectedItem.title}
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Submitted by <strong>{selectedItem.clientName}</strong> ({selectedItem.clientTitle}) · {selectedItem.submittedAt}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedItem.status === 'reviewed'
                    ? 'bg-emerald-100 text-emerald-800'
                    : selectedItem.status === 'needs-rework'
                    ? 'bg-rose-100 text-rose-800'
                    : 'bg-amber-100 text-amber-900'
                }`}
              >
                Status: {selectedItem.status}
              </span>
            </div>

            {/* Audio Waveform Player (If Audio Item) */}
            {selectedItem.type === 'audio' && (
              <div className="p-5 rounded-2xl bg-[#1A221C] text-stone-100 border border-stone-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-[#C59B4B]" />
                    <span className="text-xs font-semibold text-white">
                      Encrypted C-Suite Audio Check-in
                    </span>
                  </div>
                  <span className="text-xs font-mono text-stone-400">
                    {selectedItem.audioDuration}
                  </span>
                </div>

                {/* Simulated Audio Waveform Bar Graph */}
                <div className="flex items-center gap-1 h-12 px-2 bg-stone-900/80 rounded-xl overflow-hidden">
                  {[24, 40, 68, 85, 45, 90, 75, 30, 60, 95, 80, 50, 65, 35, 78, 92, 55, 42, 68, 84, 90, 62, 38, 70, 88, 45, 30, 72, 85, 50].map((h, i) => (
                    <div
                      key={i}
                      onClick={() => setAudioProgress((i / 30) * 100)}
                      className={`flex-1 rounded-full cursor-pointer transition-all ${
                        (i / 30) * 100 <= audioProgress ? 'bg-[#C59B4B]' : 'bg-stone-700 hover:bg-stone-600'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="px-4 py-2 rounded-xl bg-[#2E4A3E] hover:bg-[#385b4c] text-white text-xs font-semibold flex items-center gap-2 transition"
                  >
                    {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingAudio ? 'Pause Playback' : 'Listen to Voice Memo'}</span>
                  </button>
                  <span className="text-xs text-stone-400">
                    {isPlayingAudio ? 'Playing at 1.0x...' : 'Confidential voice memo ready'}
                  </span>
                </div>
              </div>
            )}

            {/* Written Submission Content */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-stone-700 block">
                Executive Submission Text:
              </span>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 leading-relaxed whitespace-pre-line font-normal">
                {selectedItem.submissionText}
              </div>
            </div>

            {/* Attachments if any */}
            {selectedItem.attachments && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-700 block">
                  Attached Strategic Artifacts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.attachments.map((att, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 flex items-center space-x-2 shadow-xs hover:border-stone-300 transition"
                    >
                      <Paperclip className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-medium">{att}</span>
                      <Download className="w-3.5 h-3.5 text-stone-400 hover:text-stone-700 cursor-pointer ml-1" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Feedback Composer Section */}
            <div className="pt-4 border-t border-stone-100 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  Dr. Groothof Feedback Composer
                </h3>
                <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
                  <button
                    onClick={() => setFeedbackMode('video')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                      feedbackMode === 'video'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-[#2E4A3E]" />
                    <span>Record Video</span>
                  </button>
                  <button
                    onClick={() => setFeedbackMode('note')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                      feedbackMode === 'note'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-stone-600" />
                    <span>Write Note</span>
                  </button>
                </div>
              </div>

              {feedbackMode === 'video' ? (
                <div className="p-5 rounded-2xl bg-[#1A221C] text-stone-100 border border-stone-800 space-y-4">
                  <div className="relative aspect-video max-h-56 bg-stone-900 rounded-xl overflow-hidden border border-stone-800 flex items-center justify-center">
                    {isRecording ? (
                      <div className="text-center space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-bold animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-rose-500" />
                          <span>RECORDING ADVISORY VIDEO · {formatTimer(recordingSeconds)}</span>
                        </div>
                        <p className="text-xs text-stone-400">
                          HD 1080p Studio Microphone Active · Dr. Christien Groothof
                        </p>
                      </div>
                    ) : (
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-[#C59B4B]">
                          <Camera className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-stone-300 font-medium">
                          Executive Webcam & Studio Mic Ready
                        </p>
                        <p className="text-[11px] text-stone-500">
                          Simulate recording asynchronous 3-5 minute video feedback
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsRecording(!isRecording)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
                        isRecording
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : 'bg-[#2E4A3E] hover:bg-[#385b4c] text-white'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>{isRecording ? 'Stop & Finalize Video' : 'Start Recording Video'}</span>
                    </button>
                    {isRecording && (
                      <span className="text-xs text-rose-400 font-mono font-bold">
                        {formatTimer(recordingSeconds)}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <textarea
                    rows={4}
                    placeholder="Write detailed strategic feedback, prompt refinement suggestions, or boardroom presentation advice..."
                    value={writtenNote}
                    onChange={(e) => setWrittenNote(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
                  />
                </div>
              )}

              {/* Status Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => handleMarkStatus('needs-rework')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-rose-300 text-rose-700 hover:bg-rose-50 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Mark as Needs Strategic Rework</span>
                </button>

                <button
                  onClick={() => handleMarkStatus('reviewed')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2E4A3E] hover:bg-[#253D33] text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C59B4B]" />
                  <span>Send Feedback & Mark Reviewed</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

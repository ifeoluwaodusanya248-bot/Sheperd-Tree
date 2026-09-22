import React, { useState } from 'react';
import {
  Play,
  Pause,
  Headphones,
  Video,
  FileText,
  Download,
  CheckCircle2,
  Lock,
  Sparkles,
  Maximize2,
  Volume2,
  Save,
} from 'lucide-react';

export const ClientLessonViewer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioOnly, setIsAudioOnly] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript' | 'resources' | 'notes'>('transcript');
  const [myNotes, setMyNotes] = useState(
    'Key take-away from Dr. Groothof: When presenting our credit LLM model to the board, do not lead with accuracy metrics. Lead with constraint verification layers and how customer dispute data is sanitized before ingestion.'
  );
  const [isNotesSaved, setIsNotesSaved] = useState(true);

  const handleNotesChange = (val: string) => {
    setMyNotes(val);
    setIsNotesSaved(false);
    setTimeout(() => setIsNotesSaved(true), 1200);
  };

  const syllabus = [
    { id: 1, title: 'Mod 1: Systems Thinking & Hidden Cultural Archetypes', duration: '42 min', status: 'completed' },
    { id: 2, title: 'Mod 2: ExCo Decisioning & Prompt Engineering Fundamentals', duration: '55 min', status: 'completed' },
    { id: 3, title: 'Mod 3: Knowledge Management & LLM Retrieval Systems', duration: '48 min', status: 'completed' },
    { id: 4, title: 'Mod 4: Enterprise LLM Workflow & Board Governance Architecture', duration: '52 min', status: 'current' },
    { id: 5, title: 'Mod 5: Algorithmic Bias, Regulatory Moats & Fiduciary Duty', duration: '45 min', status: 'locked' },
    { id: 6, title: 'Mod 6: Capstone: The JSE Boardroom Defense Simulation', duration: '60 min', status: 'locked' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
          Executive Masterclass
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          Module 4: Enterprise LLM Workflow & Board Governance Architecture
        </h1>
        <p className="text-xs text-stone-600">
          Taught by Dr. Christien Groothof, DPhil · Shepherd's Tree Executive Learning
        </p>
      </div>

      {/* Main Grid: Player & Tabs (Left) + Outline Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Player & Tab Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Executive Video / Audio Player (Tour Target) */}
          <div
            id="client-lesson-player"
            className="bg-[#141A15] rounded-3xl overflow-hidden border border-stone-800 shadow-xl space-y-4 p-4 sm:p-6"
          >
            {/* Visual Screen / Audio Screen */}
            <div className="relative aspect-video bg-[#0E1310] rounded-2xl overflow-hidden border border-stone-800 flex items-center justify-center">
              {!isAudioOnly ? (
                <div className="text-center space-y-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-[#2E4A3E]/90 hover:bg-[#385b4c] text-white flex items-center justify-center mx-auto cursor-pointer transition shadow-lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-white" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-white">
                      Dr. Christien Groothof, DPhil
                    </h3>
                    <p className="text-xs text-stone-400">
                      Lecture 4.2: Constructing Audit-Proof Prompt Guardrails
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-[#C59B4B]/20 border border-[#C59B4B] text-[#C59B4B] flex items-center justify-center mx-auto shadow-md">
                    <Headphones className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#C59B4B]">
                      Commute Audio-Only Mode
                    </span>
                    <h3 className="text-sm font-serif font-bold text-white mt-1">
                      Streamlined High-Fidelity Executive Audio
                    </h3>
                    <p className="text-xs text-stone-400">
                      Optimized for Sandton traffic or international flights
                    </p>
                  </div>
                </div>
              )}

              {/* Top controls overlay */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <button
                  onClick={() => setIsAudioOnly(!isAudioOnly)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition flex items-center gap-1.5 ${
                    isAudioOnly
                      ? 'bg-[#C59B4B] text-stone-950 font-bold'
                      : 'bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700'
                  }`}
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>{isAudioOnly ? 'Audio Mode Active' : 'Switch to Audio-Only'}</span>
                </button>
              </div>
            </div>

            {/* Playback Controls & Timeline */}
            <div className="space-y-2">
              <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
                <div className="bg-[#C59B4B] h-full" style={{ width: '42%' }} />
              </div>
              <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>21:45 / 52:10</span>
                <span>Speed: 1.25x</span>
              </div>
            </div>
          </div>

          {/* Tabbed Content: Transcript / Resources / My Notes */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 border-b border-stone-100 pb-3">
              <button
                onClick={() => setActiveTab('transcript')}
                className={`text-xs font-semibold pb-1 transition border-b-2 ${
                  activeTab === 'transcript'
                    ? 'border-[#2E4A3E] text-[#2E4A3E]'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                Executive Transcript
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`text-xs font-semibold pb-1 transition border-b-2 ${
                  activeTab === 'resources'
                    ? 'border-[#2E4A3E] text-[#2E4A3E]'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                Downloads & Prompt Templates
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`text-xs font-semibold pb-1 transition border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'notes'
                    ? 'border-[#2E4A3E] text-[#2E4A3E]'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                <span>My Private Notes</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </button>
            </div>

            {activeTab === 'transcript' && (
              <div className="space-y-3 text-xs text-stone-700 leading-relaxed max-h-60 overflow-y-auto pr-2">
                <p>
                  <strong className="text-stone-900 font-mono">[00:15] Dr. Groothof:</strong> When you walk into the boardroom to pitch a generative AI transformation, your Chief Risk Officer and Audit Committee aren’t worried about your excitement. They are terrified of regulatory non-compliance, hallucinated numbers in statutory disclosures, and intellectual property contamination.
                </p>
                <p>
                  <strong className="text-stone-900 font-mono">[05:40] Dr. Groothof:</strong> That is why we structure enterprise LLM pipelines with strict four-stage prompt architectures. First: Intent Deconstruction. Second: Hard Deterministic Constraint Injection. Third: Semantic Sanitization. Fourth: Automated Triangulation against primary enterprise databases.
                </p>
                <p>
                  <strong className="text-stone-900 font-mono">[14:20] Dr. Groothof:</strong> Notice how this completely reframes the discussion from 'Look at what AI can write' to 'Here is our automated risk-containment architecture.' That is how C-suite credibility is won.
                </p>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-stone-900 block">
                      The ExCo 4-Stage Prompt Architecture Framework (PDF)
                    </span>
                    <span className="text-[11px] text-stone-500">2.4 MB · Publication grade document</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-[#2E4A3E] text-white text-xs font-medium hover:bg-[#253D33] transition flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-stone-900 block">
                      Board Audit & Risk Committee AI Slide Pack (Keynote & PPTX)
                    </span>
                    <span className="text-[11px] text-stone-500">4.8 MB · 12 Defensible boardroom slides</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-[#2E4A3E] text-white text-xs font-medium hover:bg-[#253D33] transition flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Confidential executive notes for this lesson:</span>
                  <span className="flex items-center gap-1 text-emerald-700">
                    <Save className="w-3.5 h-3.5" />
                    <span>{isNotesSaved ? 'Autosaved' : 'Saving...'}</span>
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={myNotes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  className="w-full p-4 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Course Outline Sidebar */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <h3 className="font-serif font-bold text-base text-stone-900">
              Masterclass Outline
            </h3>
            <span className="text-xs text-stone-500">6 Modules</span>
          </div>

          <div className="space-y-2.5">
            {syllabus.map((item) => (
              <div
                key={item.id}
                className={`p-3.5 rounded-2xl border text-xs space-y-1 transition ${
                  item.status === 'current'
                    ? 'bg-emerald-50/70 border-[#2E4A3E] ring-1 ring-[#2E4A3E]'
                    : item.status === 'completed'
                    ? 'bg-white border-stone-200'
                    : 'bg-stone-50/80 border-stone-200/80 text-stone-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-900">{item.title}</span>
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : item.status === 'current' ? (
                    <span className="w-2 h-2 rounded-full bg-[#C59B4B] animate-pulse" />
                  ) : (
                    <Lock className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  {item.duration} · {item.status === 'completed' ? 'Completed' : item.status === 'current' ? 'Now Playing' : 'Locked'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Users,
  Search,
  CheckCircle2,
  Calendar,
  Lock,
  Plus,
  Clock,
  Sparkles,
  ChevronRight,
  Shield,
  FileText,
  UserCheck,
} from 'lucide-react';
import { DEMO_CLIENTS } from '../../data/coachData';
import { ClientProfile } from '../../types';

interface CoachClientRosterProps {
  selectedClientId?: string;
  onSelectClient?: (clientId: string) => void;
}

export const CoachClientRoster: React.FC<CoachClientRosterProps> = ({
  selectedClientId = 'client-1',
  onSelectClient,
}) => {
  const [activeId, setActiveId] = useState(selectedClientId);
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState('');
  const [clients, setClients] = useState<ClientProfile[]>(DEMO_CLIENTS);

  const selectedClient = clients.find((c) => c.id === activeId) || clients[0];

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (onSelectClient) onSelectClient(id);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setClients((prev) =>
      prev.map((c) => {
        if (c.id === selectedClient.id) {
          return {
            ...c,
            privateNotes: [newNote, ...c.privateNotes],
          };
        }
        return c;
      })
    );
    setNewNote('');
  };

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
            Confidential Client Directory
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            C-Suite & ExCo Client Roster
          </h1>
          <p className="text-xs text-stone-600">
            Tracking individual leadership transitions, cohort progress, and private coaching observations.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search leaders or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]"
          />
        </div>
      </div>

      {/* Main Grid: Roster List (Left) + Detail Profile (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Client List */}
        <div id="coach-roster-list" className="lg:col-span-5 space-y-3">
          {filteredClients.map((client) => {
            const isSelected = client.id === selectedClient.id;
            return (
              <div
                key={client.id}
                onClick={() => handleSelect(client.id)}
                className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-white border-[#2E4A3E] shadow-md ring-1 ring-[#2E4A3E]'
                    : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs shadow-inner ${client.avatarColor}`}
                  >
                    {client.avatarInitials}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-stone-900">
                      {client.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-medium line-clamp-1">
                      {client.title} · {client.company}
                    </p>
                    <div className="flex items-center space-x-2 text-[10px] text-stone-400 mt-1">
                      <span>Progress: {client.progress}%</span>
                      <span>·</span>
                      <span>{client.lastCheckIn}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-1 shrink-0">
                  <div className="w-12 bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#2E4A3E] h-full"
                      style={{ width: `${client.progress}%` }}
                    />
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition ${
                      isSelected ? 'text-[#2E4A3E] translate-x-0.5' : 'text-stone-300'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Selected Client Full Profile */}
        <div className="lg:col-span-7 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
            {/* Top Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base shadow-sm ${selectedClient.avatarColor}`}
                >
                  {selectedClient.avatarInitials}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="font-serif font-bold text-xl text-stone-900">
                      {selectedClient.name}
                    </h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Active ExCo
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-medium">
                    {selectedClient.title}
                  </p>
                  <p className="text-xs text-stone-400">
                    {selectedClient.company}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-stone-400 block">Overall Completion</span>
                <span className="text-2xl font-serif font-bold text-stone-900">
                  {selectedClient.progress}%
                </span>
              </div>
            </div>

            {/* Programme & Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                  Enrolled Programme
                </span>
                <span className="text-xs font-semibold text-stone-900 mt-0.5 block">
                  {selectedClient.programme}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                  Current Strategic Stage
                </span>
                <span className="text-xs font-semibold text-stone-900 mt-0.5 block">
                  {selectedClient.stage}
                </span>
              </div>
            </div>

            {/* Check-in History Timeline */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Advisory & Check-in Timeline</span>
              </h3>

              <div className="border-l-2 border-stone-200 ml-2 space-y-4 pl-4 pt-1">
                {selectedClient.timeline.map((item, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#2E4A3E] border-2 border-white" />
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-stone-900">{item.title}</span>
                      <span className="text-[10px] text-stone-400">({item.date})</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Coaching Notes Panel (Tour Target) */}
            <div
              id="coach-private-notes"
              className="p-5 rounded-2xl bg-[#1A221C] text-stone-100 border border-stone-800 space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-[#C59B4B]" />
                  <h3 className="font-serif font-bold text-sm text-white">
                    Private Coaching Notes (Dr. Groothof Eyes Only)
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                  Encrypted & Hidden from Client
                </span>
              </div>

              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {selectedClient.privateNotes.map((note, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-stone-900/80 border border-stone-800/80 text-xs text-stone-300 leading-relaxed flex items-start space-x-2">
                    <span className="text-[#C59B4B] font-bold text-sm leading-none">•</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              {/* Add Note Form */}
              <form onSubmit={handleAddNote} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Record confidential observation or board prep note..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-[#C59B4B]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#2E4A3E] hover:bg-[#395c4d] text-white text-xs font-semibold transition shrink-0 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save Note</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

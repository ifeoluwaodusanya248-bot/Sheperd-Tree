import React, { useState } from 'react';
import {
  Users,
  Compass,
  ArrowRight,
  LogOut,
  Sparkles,
  LayoutDashboard,
  Calendar,
  Layers,
  DollarSign,
  BookOpen,
  HelpCircle,
  FileText,
  Clock,
  Send,
  CreditCard,
  Mail,
  UserCheck,
  ChevronRight,
  Globe,
  FileCheck,
  Award,
  Shield,
} from 'lucide-react';

import { UserRole, CoachScreen, ClientScreen } from './types';
import { PublicWebsite } from './components/PublicWebsite';
import { LoginModal } from './components/LoginModal';
import { DiagnosticModal } from './components/DiagnosticModal';
import { PresenterWelcomeModal } from './components/PresenterWelcomeModal';
import { GuidedTourModal } from './components/GuidedTourModal';
import { MarketResearchView } from './components/research/MarketResearchView';
import { ProposalView } from './components/research/ProposalView';

// Coach Screens
import { CoachDashboard } from './components/coach/CoachDashboard';
import { CoachClientRoster } from './components/coach/CoachClientRoster';
import { CoachScheduling } from './components/coach/CoachScheduling';
import { CoachReviewQueue } from './components/coach/CoachReviewQueue';
import { CoachRevenue } from './components/coach/CoachRevenue';

// Client Screens
import { ClientDashboard } from './components/client/ClientDashboard';
import { ClientLessonViewer } from './components/client/ClientLessonViewer';
import { ClientKnowledgeCheck } from './components/client/ClientKnowledgeCheck';
import { ClientHomeworkGoals } from './components/client/ClientHomeworkGoals';
import { ClientBooking } from './components/client/ClientBooking';
import { ClientOnboarding } from './components/client/ClientOnboarding';
import { ClientCheckout } from './components/client/ClientCheckout';
import { ClientNotifications } from './components/client/ClientNotifications';

export default function App() {
  // Navigation & Authentication States
  const [activeView, setActiveView] = useState<'website' | 'platform' | 'research' | 'proposal'>('website');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>('coach');

  // Screen Sub-States
  const [coachScreen, setCoachScreen] = useState<CoachScreen>('dashboard');
  const [clientScreen, setClientScreen] = useState<ClientScreen>('dashboard');

  // Modal States
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState<boolean>(false);
  const [isPresenterModalOpen, setIsPresenterModalOpen] = useState<boolean>(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState<boolean>(false);

  // Authentication Handlers
  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    setActiveView('platform');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsTourModalOpen(false);
    setActiveView('website');
  };

  const handleTourNavigate = (role: UserRole, screen: CoachScreen | ClientScreen) => {
    setUserRole(role);
    setActiveView('platform');
    if (role === 'coach') {
      setCoachScreen(screen as CoachScreen);
    } else {
      setClientScreen(screen as ClientScreen);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 flex flex-col font-sans selection:bg-[#2E4A3E] selection:text-white">
      {/* Top Navigation Bar */}
      <header className="bg-[#1A221C] text-stone-300 text-xs py-2.5 px-4 sm:px-8 border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-serif font-bold text-white text-[11px] sm:text-xs tracking-wider uppercase">
            Shepherd's Tree Leadership Consulting
          </span>
          <span className="hidden md:inline text-stone-500">·</span>
          <span className="hidden md:inline text-stone-400 text-[11px]">
            Executive Website & LMS Architecture
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <button
            onClick={() => setIsPresenterModalOpen(true)}
            className="text-stone-300 hover:text-white transition flex items-center gap-1 bg-stone-800/80 px-2.5 py-1 rounded-lg border border-stone-700/60"
          >
            <Sparkles className="w-3 h-3 text-[#C59B4B]" />
            <span>Proposal Overview</span>
          </button>

          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-[#2E4A3E] hover:bg-[#385b4c] text-white px-3 py-1 rounded-lg font-semibold transition flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>Login (Coach / Client)</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-[#C59B4B]">
                {userRole === 'coach' ? 'Dr. Groothof (Coach)' : 'Sipho (Client)'}
              </span>
              <button
                onClick={handleLogout}
                className="text-stone-400 hover:text-rose-400 transition flex items-center gap-1"
                title="Log out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Authenticated Platform Navigation Sub-bar (Only shown when logged in or viewing platform) */}
      {isLoggedIn && activeView === 'platform' && (
        <div className="bg-white border-b border-stone-200/80 sticky top-0 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
            {/* Role Switcher Pill */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 hidden sm:inline">
                Active Perspective:
              </span>
              <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
                <button
                  onClick={() => setUserRole('coach')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    userRole === 'coach'
                      ? 'bg-[#2E4A3E] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 text-[#C59B4B]" />
                  <span>Coach Command (Dr. Groothof)</span>
                </button>
                <button
                  onClick={() => setUserRole('client')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    userRole === 'client'
                      ? 'bg-[#2E4A3E] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Client Sanctuary (Sipho)</span>
                </button>
              </div>
            </div>

            {/* Screen Tabs (Context-sensitive based on userRole) */}
            <div className="flex items-center space-x-1 overflow-x-auto py-1 text-xs">
              {userRole === 'coach' ? (
                <>
                  <button
                    onClick={() => setCoachScreen('dashboard')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      coachScreen === 'dashboard'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setCoachScreen('roster')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      coachScreen === 'roster'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Roster & Notes</span>
                  </button>
                  <button
                    onClick={() => setCoachScreen('scheduling')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      coachScreen === 'scheduling'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule & Board</span>
                  </button>
                  <button
                    onClick={() => setCoachScreen('queue')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      coachScreen === 'queue'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Review Queue</span>
                  </button>
                  <button
                    onClick={() => setCoachScreen('revenue')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      coachScreen === 'revenue'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Revenue & Retainers</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setClientScreen('dashboard')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'dashboard'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('lesson')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'lesson'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Lesson Player</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('quiz')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'quiz'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Knowledge Check</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('homework')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'homework'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Deliverables & Goals</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('booking')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'booking'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book 1-on-1</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('onboarding')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'onboarding'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Intake</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('checkout')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'checkout'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Enrollment</span>
                  </button>
                  <button
                    onClick={() => setClientScreen('notifications')}
                    className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                      clientScreen === 'notifications'
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Dispatches</span>
                  </button>
                </>
              )}
            </div>

            {/* Tour & Return to Website Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsTourModalOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 text-xs font-semibold transition flex items-center gap-1.5"
                title="Launch Guided Tour of all 14 architectural targets"
              >
                <Compass className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span className="hidden sm:inline">Interactive Walkthrough (14 Steps)</span>
                <span className="sm:hidden">Tour</span>
              </button>

              <button
                onClick={() => setActiveView('website')}
                className="px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-medium transition flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">Public Website</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Sub-navigation when viewing Research or Proposal while on public site */}
      {(activeView === 'research' || activeView === 'proposal') && (
        <div className="bg-stone-100 border-b border-stone-200 py-2.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setActiveView('website')}
              className="text-xs font-semibold text-[#2E4A3E] hover:underline flex items-center gap-1"
            >
              ← Back to Main Website
            </button>
            <div className="flex items-center space-x-2 text-xs">
              <button
                onClick={() => setActiveView('research')}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  activeView === 'research'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                Executive Market Research
              </button>
              <button
                onClick={() => setActiveView('proposal')}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  activeView === 'proposal'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                TheWiseTutor Implementation Proposal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'website' && (
          <PublicWebsite
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onOpenDiagnostic={() => setIsDiagnosticModalOpen(true)}
            onOpenResearch={() => setActiveView('research')}
            onOpenProposal={() => setActiveView('proposal')}
          />
        )}

        {activeView === 'research' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <MarketResearchView />
          </div>
        )}

        {activeView === 'proposal' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <ProposalView />
          </div>
        )}

        {activeView === 'platform' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {userRole === 'coach' ? (
              <>
                {coachScreen === 'dashboard' && (
                  <CoachDashboard
                    onNavigate={(screen) => setCoachScreen(screen)}
                  />
                )}
                {coachScreen === 'roster' && (
                  <CoachClientRoster />
                )}
                {coachScreen === 'scheduling' && (
                  <CoachScheduling />
                )}
                {coachScreen === 'queue' && (
                  <CoachReviewQueue />
                )}
                {coachScreen === 'revenue' && (
                  <CoachRevenue />
                )}
              </>
            ) : (
              <>
                {clientScreen === 'dashboard' && (
                  <ClientDashboard
                    onNavigate={(screen) => setClientScreen(screen)}
                  />
                )}
                {clientScreen === 'lesson' && (
                  <ClientLessonViewer />
                )}
                {clientScreen === 'quiz' && (
                  <ClientKnowledgeCheck />
                )}
                {clientScreen === 'homework' && (
                  <ClientHomeworkGoals />
                )}
                {clientScreen === 'booking' && (
                  <ClientBooking />
                )}
                {clientScreen === 'onboarding' && (
                  <ClientOnboarding />
                )}
                {clientScreen === 'checkout' && (
                  <ClientCheckout />
                )}
                {clientScreen === 'notifications' && (
                  <ClientNotifications />
                )}
              </>
            )}
          </div>
        )}
      </main>

      {/* Footer (Refined executive institutional footer) */}
      <footer className="bg-[#141A15] text-stone-400 py-12 px-4 sm:px-8 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-stone-800">
          <div className="space-y-3">
            <div className="font-serif font-bold text-white text-base">
              Shepherd's Tree Leadership Consulting (Pty) Ltd
            </div>
            <p className="text-stone-400 leading-relaxed font-light">
              Founded in 2012 · Operating as a (Pty) Ltd since 2025. Executive advisory, board governance, and applied AI transformation across Africa and global markets.
            </p>
            <div className="text-[11px] text-stone-500 font-mono">
              Reg: 2025/104928/07 · Sandton, Johannesburg, South Africa
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-serif font-bold text-white text-xs uppercase tracking-wider block">
              Advisory Practice
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>C-Suite & ExCo Systems Advisory</li>
              <li>Applied Generative AI Governance</li>
              <li>Boardroom Defense & Poise</li>
              <li>Executive Education Strategy</li>
              <li>Mind-Fit Athletic & Cognitive Stamina</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-serif font-bold text-white text-xs uppercase tracking-wider block">
              Architectural Inclusions
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => setActiveView('research')} className="hover:text-white transition">
                  Pan-African Market Study
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('proposal')} className="hover:text-white transition">
                  Odusanya Joshua Ifeoluwa Proposal
                </button>
              </li>
              <li>
                <button onClick={() => setIsDiagnosticModalOpen(true)} className="hover:text-white transition">
                  Executive AI Benchmark Tool
                </button>
              </li>
              <li>
                <button onClick={() => setIsLoginModalOpen(true)} className="hover:text-white transition">
                  Dual-Portal Access (Coach / Client)
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-serif font-bold text-white text-xs uppercase tracking-wider block">
              Client & Developer Credentials
            </span>
            <p className="text-stone-400 leading-relaxed font-light">
              <strong>Client:</strong> Dr. Christien Groothof, DPhil (University of Johannesburg)<br />
              <strong>Developer:</strong> Odusanya Joshua Ifeoluwa (Head Website & LMS Developer at TheWiseTutor)
            </p>
            <div className="text-[11px] text-[#C59B4B] font-serif">
              "Rigour and Reach. Turning people strategy into commercial results that stick."
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © 2012–2026 Shepherd's Tree Leadership Consulting (Pty) Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-emerald-500 font-semibold">● Production Grade Architecture</span>
            <span>Confidential & Proprietary</span>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSelectRole={handleLogin}
      />

      <DiagnosticModal
        isOpen={isDiagnosticModalOpen}
        onClose={() => setIsDiagnosticModalOpen(false)}
      />

      <PresenterWelcomeModal
        isOpen={isPresenterModalOpen}
        onClose={() => setIsPresenterModalOpen(false)}
        onExploreWebsite={() => {
          setIsPresenterModalOpen(false);
          setActiveView('website');
        }}
        onLaunchPlatform={(role) => handleLogin(role)}
        onViewGrowthPlan={() => {
          setIsPresenterModalOpen(false);
          setActiveView('research');
        }}
      />

      {/* Guided Walkthrough Modal (Tour) - strictly gated behind isLoggedIn */}
      <GuidedTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        onNavigateStep={handleTourNavigate}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

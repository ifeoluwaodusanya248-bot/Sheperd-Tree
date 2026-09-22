export type AppView = 'website' | 'platform' | 'growth-plan';
export type UserRole = 'coach' | 'client';

export type CoachScreen = 'dashboard' | 'roster' | 'scheduling' | 'queue' | 'revenue';
export type ClientScreen = 'dashboard' | 'lesson' | 'quiz' | 'homework' | 'booking' | 'onboarding' | 'checkout' | 'notifications';

export interface PresenterProps {
  presenterName: string;
  presenterTitle: string;
  presenterEmail: string;
  presenterPhoto?: string;
  agencyName: string;
  agencyWebsite: string;
  bookingPageUrl: string;
  coachName: string;
  coachCredentials: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  avatarInitials: string;
  avatarColor: string;
  programme: string;
  progress: number;
  stage: string;
  lastCheckIn: string;
  urgency: 'high' | 'normal' | 'on-track';
  timeline: {
    date: string;
    title: string;
    type: 'session' | 'submission' | 'milestone' | 'diagnostic';
    notes: string;
  }[];
  privateNotes: string[];
}

export interface QueueItem {
  id: string;
  clientId: string;
  clientName: string;
  clientTitle: string;
  type: 'assignment' | 'audio' | 'quiz';
  title: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'needs-rework';
  audioDuration?: string;
  submissionText: string;
  attachments?: string[];
  feedbackNotes?: string;
  feedbackType?: 'video' | 'note';
}

export interface ScheduledSession {
  id: string;
  time: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  dateStr: string;
  clientName: string;
  title: string;
  type: '1on1' | 'webinar' | 'open';
  seats?: string;
  duration: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  title: string;
  date: string;
  content: string;
  status: 'pending' | 'approved';
}

export interface OrderItem {
  id: string;
  clientName: string;
  company: string;
  plan: string;
  amount: string;
  date: string;
  gateway: string;
  status: 'completed' | 'processing' | 'refunded';
}

export interface NotificationEmail {
  id: string;
  subject: string;
  sender: string;
  date: string;
  type: string;
  preview: string;
  body: string;
  ctaText?: string;
}

export interface PlatformNotificationEmail {
  id: string;
  subject: string;
  sender: string;
  date: string;
  type: 'feedback' | 'progress' | 'receipt' | 'booking';
  previewText: string;
  contentHtml: {
    heading: string;
    greeting: string;
    bodyParagraphs: string[];
    callToAction?: {
      label: string;
      link: string;
    };
    metaDetails?: Record<string, string>;
  };
}

export interface TourStep {
  id: string;
  role: UserRole;
  screen: CoachScreen | ClientScreen;
  targetId: string;
  title: string;
  description: string;
  roleLabel: string;
  stepNumber: number;
  totalStepsInScreen: number;
  requiresAction?: boolean;
  actionText?: string;
}

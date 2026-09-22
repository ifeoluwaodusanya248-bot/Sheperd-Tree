import {
  PresenterProps,
  ClientProfile,
  QueueItem,
  ScheduledSession,
  CommunityPost,
  OrderItem,
  PlatformNotificationEmail,
  TourStep,
} from '../types';

export const PRESENTER_INFO: PresenterProps = {
  presenterName: 'Odusanya Joshua Ifeoluwa',
  presenterTitle: 'Head Website & LMS Developer',
  presenterEmail: 'ifeoluwaodusanya248@gmail.com',
  agencyName: 'The Wise Tutor',
  agencyWebsite: 'https://thewisetutor.com',
  bookingPageUrl: 'https://thewisetutor.com/#book-a-call',
  coachName: 'Dr. Christien Groothof',
  coachCredentials: 'DPhil in Leadership & Change, MBL (UNISA)',
};

export const COACH_PROFILE = {
  name: 'Dr. Christien Groothof',
  title: 'Managing Director & Strategic Executive Advisor',
  company: "Shepherd's Tree Leadership Consulting (Pty) Ltd",
  foundedYear: 2012,
  ptyYear: 2025,
  location: 'Johannesburg, South Africa (Sandton / Rosebank & Global)',
  linkedin: 'https://www.linkedin.com/in/dr-christien-groothof-9193a929/',
  qualifications: [
    'DPhil in Leadership and Change, University of Johannesburg',
    'MBL (Master of Business Leadership), UNISA Graduate School of Business Leadership',
    'BA Hons in Criminology, University of Pretoria',
    'BA in Social Sciences, University of Pretoria',
    'Certificate in Labour Relations, University of Pretoria',
    'Certified NLP Coach, Master Trainer, and Clinical Hypnotherapist',
  ],
  careerHighlights: [
    { role: 'Visiting Executive Faculty & Program Director', institution: 'Henley Business School Africa' },
    { role: 'Executive Education Strategy Consultant', institution: 'Duke Corporate Education' },
    { role: 'Senior Consultant & Organizational Transformation Lead', institution: 'Deloitte Consulting' },
    { role: 'Strategic Client Advisory Lead', institution: 'FNB Premier Banking' },
  ],
  aiCapabilities2026: [
    'Advanced Prompt Engineering for ExCo Decisioning',
    'LLM Knowledge Architecture & Executive Retrieval',
    'AI Strategy & Algorithmic Governance at Board Level',
    'Rigorous Research Methodology fused with Applied AI',
  ],
  athleticPedigree: {
    title: '2× Universe Finalist in Competitive Bodybuilding',
    concept: 'Mind-Fit & Executive Longevity',
    quote: 'The discipline is identical whether you are in an executive boardroom, untangling a complex systems problem, or stepping on the Universe stage.',
  },
  philosophy: {
    metaphor: "The Shepherd's Tree (Boscia albitrunca)",
    explanation: 'In the arid Kalahari and African savannas, the Shepherd’s tree sinks taproots deeper than nearly any living organism on earth — enduring drought, extreme heat, and severe environmental shifts while sustaining entire ecosystems. We build executive leaders who possess that same unbreakable, deep-rooted stamina.',
  },
};

export const DEMO_CLIENTS: ClientProfile[] = [
  {
    id: 'client-1',
    name: 'Sipho Ndlovu',
    title: 'Managing Director & ExCo Member',
    company: 'Pan-African Digital Banking Group',
    avatarInitials: 'SN',
    avatarColor: 'bg-emerald-800 text-white',
    programme: 'Applied AI & Systems Leadership Masterclass',
    progress: 68,
    stage: 'Module 4: Enterprise LLM Workflow & Board Governance',
    lastCheckIn: 'Yesterday, 16:45 SAST',
    urgency: 'high',
    timeline: [
      { date: '18 Sep 2026', title: 'Submitted Prompt Chaining Architecture Brief', type: 'submission', notes: 'Demonstrated exceptional synthesis of credit risk workflows with LLMs.' },
      { date: '14 Sep 2026', title: '60-min Strategic Advisory 1:1 with Dr. Groothof', type: 'session', notes: 'Addressed ExCo pushback on automated compliance reporting. Outlined stakeholder buy-in strategy.' },
      { date: '08 Sep 2026', title: 'Completed Systems Diagnostics Benchmark', type: 'diagnostic', notes: 'Overall Systems Execution Score: 84/100. AI Literacy index: 78/100.' },
      { date: '01 Sep 2026', title: 'Quarterly Cohort Enrollment & Onboarding', type: 'milestone', notes: 'Baseline intake completed. Primary priority: ExCo alignment on generative AI.' },
    ],
    privateNotes: [
      'Sipho is feeling heavy scrutiny from the board after recent fintech license acquisitions. He needs clear, defensible governance frameworks when presenting generative AI adoption next month.',
      'Recommended integrating 20-min daily "Mind-Fit" cognitive transition walks between board committee calls to reduce afternoon cortisol.',
      'Strong analytical thinker; push him on emotional resonance with his divisional direct reports.',
    ],
  },
  {
    id: 'client-2',
    name: 'Thandiwe Khumalo',
    title: 'Chief Risk & Compliance Officer',
    company: 'Equatorial Energy & Resources (JSE)',
    avatarInitials: 'TK',
    avatarColor: 'bg-amber-800 text-white',
    programme: 'C-Suite Transformation & Systems Thinking Retainer',
    progress: 82,
    stage: 'Module 6: Multi-Stakeholder Cultural Transformation',
    lastCheckIn: '2 days ago',
    urgency: 'on-track',
    timeline: [
      { date: '16 Sep 2026', title: 'Submitted Audio Reflection: Union Wage Negotiations', type: 'submission', notes: 'Applied NLP reframing techniques during tense round-table talks.' },
      { date: '10 Sep 2026', title: 'Advisory Review on Board Risk Sub-Committee Pack', type: 'session', notes: 'Refined risk mitigation matrix for algorithmic safety.' },
    ],
    privateNotes: [
      'Thandiwe successfully navigated the ESG compliance audit. Praise her composure and strategic boundary management.',
      'Encourage her to step forward for the upcoming Executive Director nomination.',
    ],
  },
  {
    id: 'client-3',
    name: 'Francois van der Merwe',
    title: 'Chief Operations Officer',
    company: 'Apex Logistics & Cold Chain Solutions',
    avatarInitials: 'FM',
    avatarColor: 'bg-stone-800 text-white',
    programme: 'Applied AI & Systems Leadership Masterclass',
    progress: 44,
    stage: 'Module 3: Knowledge Management & Prompt Engineering',
    lastCheckIn: '4 days ago',
    urgency: 'high',
    timeline: [
      { date: '12 Sep 2026', title: 'Missed scheduled 1-on-1 check-in', type: 'session', notes: 'Port logistics disruption required emergency ExCo session.' },
      { date: '05 Sep 2026', title: 'Submitted Knowledge Retrieval Schema', type: 'submission', notes: 'Needs rework on semantic search guardrails.' },
    ],
    privateNotes: [
      'Francois is showing early signs of cognitive overload. Reminded him of Dr. Groothof’s high-performance recovery protocols.',
      'Needs a simplified prompt template library for his regional operations heads.',
    ],
  },
  {
    id: 'client-4',
    name: 'Dr. Amina Bello',
    title: 'VP of Clinical Operations & Health Innovation',
    company: 'AfriHealth Life Sciences',
    avatarInitials: 'AB',
    avatarColor: 'bg-teal-800 text-white',
    programme: 'Executive Education Strategy & Board Readiness',
    progress: 94,
    stage: 'Module 8: Capstone Strategic Transformation Playbook',
    lastCheckIn: 'Today, 09:15 SAST',
    urgency: 'on-track',
    timeline: [
      { date: '21 Sep 2026', title: 'Final Capstone Presentation Draft Uploaded', type: 'submission', notes: 'Comprehensive 40-page strategy for AI-assisted diagnostic rollouts across 12 countries.' },
      { date: '15 Sep 2026', title: 'Mentorship Session: Boardroom Gravitas & Presence', type: 'session', notes: 'Simulated tough questions from institutional investors.' },
    ],
    privateNotes: [
      'Capstone is publication grade. Suggest she co-author an op-ed with Dr. Groothof on African healthcare AI governance.',
    ],
  },
];

export const QUEUE_ITEMS: QueueItem[] = [
  {
    id: 'queue-1',
    clientId: 'client-1',
    clientName: 'Sipho Ndlovu',
    clientTitle: 'MD, Pan-African Digital Banking Group',
    type: 'assignment',
    title: 'Enterprise LLM Workflow & Board Governance Architecture',
    submittedAt: 'Today at 07:45 SAST',
    status: 'pending',
    submissionText: `Dr. Groothof, here is the revised architecture for our credit scoring LLM pipeline. We have embedded human-in-the-loop validation checkpoints at every threshold exceeding R2.5M. I used your prompt engineering chain technique (Deconstruct -> Constraint Enforcement -> Sanitize -> Verification) to prevent prompt injection attacks from customer dispute attachments. Please review the attached risk flow diagram.`,
    attachments: ['PanAfricanBank_LLM_Architecture_v2.pdf', 'ExCo_Risk_Assessment_Summary.docx'],
  },
  {
    id: 'queue-2',
    clientId: 'client-2',
    clientName: 'Thandiwe Khumalo',
    clientTitle: 'Chief Risk Officer, Equatorial Energy',
    type: 'audio',
    title: 'Confidential Audio Check-in: Managing Boardroom Polarization',
    submittedAt: 'Yesterday at 17:30 SAST',
    status: 'pending',
    audioDuration: '04:18',
    submissionText: `[Audio Check-in transcript]: "Christien, after yesterday's heated remuneration committee, I noticed two senior directors forming an obstructive voting bloc against our transformation charter. I remembered your systems framing on 'unexpressed systemic fears'. Instead of challenging their data in public, I requested a 15-minute one-on-one before next week's formal sitting. Listen to the attached voice memo where I walk through how I plan to frame the conversation without escalating defensiveness..."`,
  },
  {
    id: 'queue-3',
    clientId: 'client-3',
    clientName: 'Francois van der Merwe',
    clientTitle: 'COO, Apex Logistics',
    type: 'quiz',
    title: 'Knowledge Check: Strategic Systems Archetypes & Prompt Guardrails',
    submittedAt: '2 days ago',
    status: 'needs-rework',
    submissionText: 'Score: 75% (3/4 questions answered correctly). Failed question: "Balancing feedback loops in automated logistics dispatch algorithms". Recommended review of Module 3 lecture.',
    feedbackNotes: 'Francois, your operational instincts are solid, but you are treating the LLM like deterministic SQL. Revisit my lecture on probabilistic confidence intervals before re-attempting.',
  },
];

export const SCHEDULED_SESSIONS: ScheduledSession[] = [
  { id: 'sess-1', day: 'Mon', time: '09:00 - 10:00 SAST', dateStr: '22 Sep 2026', clientName: 'Sipho Ndlovu', title: '1-on-1 Strategic Advisory: ExCo AI Defense', type: '1on1', duration: '60 min' },
  { id: 'sess-2', day: 'Mon', time: '14:00 - 15:30 SAST', dateStr: '22 Sep 2026', clientName: 'Executive Cohort (18 Leaders)', title: 'Masterclass: Advanced Prompt Engineering for C-Suite Decisioning', type: 'webinar', seats: '18 / 20 Registered', duration: '90 min' },
  { id: 'sess-3', day: 'Tue', time: '11:00 - 12:00 SAST', dateStr: '23 Sep 2026', clientName: 'Thandiwe Khumalo', title: '1-on-1 Boardroom Preparation & NLP Alignment', type: '1on1', duration: '60 min' },
  { id: 'sess-4', day: 'Wed', time: '10:00 - 11:00 SAST', dateStr: '24 Sep 2026', clientName: 'Open Executive Advisory Slot', title: 'Available for JSE ExCo Client Booking', type: 'open', duration: '60 min' },
  { id: 'sess-5', day: 'Thu', time: '15:00 - 16:30 SAST', dateStr: '25 Sep 2026', clientName: 'Dr. Amina Bello', title: 'Capstone Defense & Board Presentation Dry-Run', type: '1on1', duration: '90 min' },
  { id: 'sess-6', day: 'Fri', time: '08:30 - 09:30 SAST', dateStr: '26 Sep 2026', clientName: 'Executive Cohort', title: 'Weekly Mind-Fit & Cognitive Longevity Debrief', type: 'webinar', seats: '14 / 20 Registered', duration: '60 min' },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: 'Kabelo Sithole (Head of Strategy, Mining & Minerals Corp)',
    date: '3 hours ago',
    title: 'How are other ExCos handling internal data leaks with commercial LLM subscriptions?',
    content: 'We discovered several business units feeding raw vendor contracts into non-enterprise browser accounts. Has anyone deployed Dr. Groothof’s private API wrapper architecture with success?',
    status: 'pending',
  },
  {
    id: 'post-2',
    author: 'Elena Rossi (Chief People Officer, Fintech Global)',
    date: 'Yesterday',
    title: 'Reflections on the Mind-Fit breathwork protocol before major union arbitrations',
    content: 'Dr. Christien’s box-breathing cadence combined with linguistic pacing completely shifted my physiological state during yesterday’s 6-hour deadlock. The resolution was signed at 18:00.',
    status: 'approved',
  },
];

export const REVENUE_ORDERS: OrderItem[] = [
  { id: 'ORD-8821', clientName: 'Pan-African Digital Banking Group', company: 'Sipho Ndlovu (MD)', plan: 'Annual C-Suite Advisory Retainer', amount: 'R 240,000 ZAR', date: '01 Sep 2026', gateway: 'FNB Commercial Corporate EFT', status: 'completed' },
  { id: 'ORD-8794', clientName: 'Equatorial Energy & Resources (JSE)', company: 'Thandiwe Khumalo (CRO)', plan: 'ExCo Systems Transformation Cohort', amount: 'R 195,000 ZAR', date: '28 Aug 2026', gateway: 'Stripe Corporate Billing', status: 'completed' },
  { id: 'ORD-8742', clientName: 'AfriHealth Life Sciences', company: 'Dr. Amina Bello (VP)', plan: 'Executive Education Strategy Capstone', amount: 'R 145,000 ZAR', date: '15 Aug 2026', gateway: 'Stripe International USD ($7,950)', status: 'completed' },
  { id: 'ORD-8690', clientName: 'Apex Logistics & Cold Chain', company: 'Francois van der Merwe (COO)', plan: 'Quarterly Executive Cohort Retainer', amount: 'R 65,000 ZAR', date: '02 Aug 2026', gateway: 'FNB Commercial Corporate EFT', status: 'completed' },
];

export const PLATFORM_EMAILS: PlatformNotificationEmail[] = [
  {
    id: 'email-1',
    subject: 'Executive Video Feedback: Prompt Chaining & Governance Architecture',
    sender: "Dr. Christien Groothof <advisory@shepherdstree.co.za>",
    date: '22 Sep 2026, 08:30 SAST',
    type: 'feedback',
    previewText: 'I have reviewed your submission on Enterprise LLM workflows. Watch my 4-minute video analysis on the three board-level blindspots...',
    contentHtml: {
      heading: 'Executive Advisory Feedback',
      greeting: 'Dear Sipho,',
      bodyParagraphs: [
        'I have thoroughly evaluated your Enterprise LLM Workflow and Governance submission for the Pan-African Digital Banking ExCo.',
        'Your implementation of constraint verification before the sanitization layer is masterfully done. It demonstrates true systems rigor rather than superficial AI adoption.',
        'I recorded a focused 4-minute video breakdown highlighting how you should position the credit risk threshold to your Audit & Risk Committee on Thursday so they view it as an asset rather than a regulatory liability.',
      ],
      callToAction: {
        label: 'Watch Video Advisory Feedback',
        link: '#homework',
      },
      metaDetails: {
        'Programme': 'Applied AI & Systems Leadership Masterclass',
        'Reviewer': 'Dr. Christien Groothof, DPhil',
        'Status': 'Approved with Strategic Commendations',
      },
    },
  },
  {
    id: 'email-2',
    subject: 'Weekly Executive Briefing: Mind-Fit Performance & Cognitive Stamina',
    sender: "Shepherd's Tree Leadership <portal@shepherdstree.co.za>",
    date: '19 Sep 2026, 07:00 SAST',
    type: 'progress',
    previewText: 'Your weekly progress digest: 68% course completion, 12 mind-fit sessions logged, upcoming ExCo strategy session details...',
    contentHtml: {
      heading: 'Executive Performance Digest',
      greeting: 'Good morning Sipho,',
      bodyParagraphs: [
        'Here is your executive performance summary for the week ending 18 September 2026.',
        'You completed 3 core modules and maintained a 92% adherence to your morning cognitive transition routine. Your peer feedback rating from the syndicate group stands at 4.9/5.',
        'Keep in mind: true high performance is sustainable performance. Protect your evening recovery boundary before next week’s board session.',
      ],
      callToAction: {
        label: 'Open Executive Dashboard',
        link: '#dashboard',
      },
      metaDetails: {
        'Cohort Milestone': 'Week 4 of 8 Complete',
        'Next Live Masterclass': 'Monday at 14:00 SAST',
      },
    },
  },
  {
    id: 'email-3',
    subject: 'Tax Invoice & Receipt #STLC-2026-089 (Annual Executive Advisory Retainer)',
    sender: "Accounts · Shepherd's Tree (Pty) Ltd <finance@shepherdstree.co.za>",
    date: '01 Sep 2026, 10:14 SAST',
    type: 'receipt',
    previewText: 'Thank you for your business. Payment of R 240,000.00 ZAR has been received and processed via FNB Commercial EFT...',
    contentHtml: {
      heading: 'Tax Invoice & Receipt',
      greeting: 'Dear Sipho Ndlovu & Pan-African Digital Banking Group,',
      bodyParagraphs: [
        'This email confirms receipt of payment for your Annual C-Suite Executive Advisory Retainer with Shepherd’s Tree Leadership Consulting (Pty) Ltd.',
        'All executive portal modules, private 1-on-1 advisory credits, and applied AI advisory libraries have been fully activated for your ExCo account.',
      ],
      callToAction: {
        label: 'Download VAT Invoice (PDF)',
        link: '#checkout',
      },
      metaDetails: {
        'Invoice Number': 'STLC-2026-089',
        'Amount Paid': 'R 240,000.00 ZAR (Incl. 15% VAT)',
        'Billing Entity': "Shepherd's Tree Leadership Consulting (Pty) Ltd (Reg: 2025/119420/07)",
      },
    },
  },
];

export const RESEARCHED_MARKET_DATA = [
  {
    figure: '$410M USD',
    label: 'Sub-Saharan Executive Education & Advisory Market Size',
    trend: '+12.8% CAGR projected through 2029',
    source: 'African Development Bank & Business Market Insights',
    year: '2025',
    highlight: true,
    insight: 'Corporate boards across South Africa, Kenya, and Nigeria are aggressively reprioritizing executive leadership development budgets away from generic diplomas toward high-impact, custom advisory.',
  },
  {
    figure: '74%',
    label: 'African CEOs Urgently Prioritizing GenAI Transformation',
    trend: 'Up from 41% in 2024 (Acute 12-month spike)',
    source: 'PwC Africa CEO Survey & World Economic Forum',
    year: '2025/2026',
    highlight: false,
    insight: 'While 74% of C-suite leaders demand AI-driven efficiencies, only 18% of executive committees have formalized prompt engineering or applied LLM knowledge systems.',
  },
  {
    figure: '2,200+',
    label: 'JSE ExCo & Senior Directors within 45-Min Driving Distance',
    trend: 'Gauteng represents 45%+ of total national corporate wealth',
    source: 'Johannesburg Stock Exchange (JSE) & Stats SA Enterprise Registry',
    year: '2025',
    highlight: false,
    insight: 'National data proves the category exists, but local Sandton, Rosebank, and Pretoria hubs represent an exceptionally concentrated, affluent client base within immediate reach.',
  },
  {
    figure: 'R38,500',
    label: 'Average Annual Corporate Spend Per Executive Leader on Coaching',
    trend: 'Budgets are employer-funded; procurement approves via L&D/HR',
    source: 'South African Board for People Practices (SABPP) Benchmark',
    year: '2025',
    highlight: false,
    insight: 'Corporate buyers pay for C-suite coaching from enterprise training and transformation envelopes; pricing tolerance is high when tied directly to commercial results.',
  },
  {
    figure: '68%',
    label: 'ExCo Leaders Experiencing High Cognitive Strain & Burnout',
    trend: 'Driving massive demand for "Mind-Fit" & Executive Longevity',
    source: 'Henley Business School Africa Executive Wellness Survey',
    year: '2025',
    highlight: false,
    insight: 'Dr. Groothof’s competitive 2× Universe bodybuilding pedigree is an irresistible differentiator: leaders want stamina, mental endurance, and longevity, not clinical therapy jargon.',
  },
  {
    figure: '5.7x ROI',
    label: 'Measured Commercial Return on Executive Systems Coaching',
    trend: 'Demonstrated through retention, strategic execution, and risk prevention',
    source: 'International Coaching Federation (ICF) Global Study',
    year: '2024/2025',
    highlight: false,
    insight: 'Executives and board chairs do not buy hours; they buy the prevention of disastrous strategy failure and accelerated execution certainty.',
  },
];

export const BUYER_PERSONAS = [
  {
    name: 'Sipho Ndlovu — The Newly Promoted Managing Director',
    tag: 'Shortest Sales Cycle · Highest Individual Ticket',
    commercialProfile: 'High urgency, high individual agency; often pays via corporate executive card or immediate executive development sponsorship.',
    whoTheyAre: '44-year-old newly appointed MD of a fast-growing digital financial services division. 6 months into the role, under intense scrutiny from both the Group CEO and an impatient Board.',
    afraidOf: 'That the promotion proved he was never as strategically visionary as people thought — and that a single bad board presentation or failed systems rollout will destroy 18 years of hard-won reputation.',
    exact2amSearchPhrase: '"Executive transition coach Johannesburg for newly appointed C-suite managing director high performance"',
    whatTheyAreReallyBuying: 'Strategic armor, psychological safety, boardroom poise, and a confidential, battle-tested mentor who has sat with Deloitte, Henley, and Duke.',
    programmeFit: 'Annual C-Suite Advisory Retainer (R240,000 ZAR / yr) or Intensive 12-Week 1-on-1 Transition',
    spendRange: 'R85,000 – R250,000 ZAR',
  },
  {
    name: 'Dr. Thandiwe Khumalo — The Corporate CHRO / Head of Talent',
    tag: 'Largest Cohort Deal Size · Multi-Seat Enterprise Sale',
    commercialProfile: 'Slower buying cycle (6-12 weeks), formal procurement / committee signoff; allocates annual budgets of R500k to R2M for executive cohorts.',
    whoTheyAre: '52-year-old Chief Human Resources Officer at a JSE-listed resources or logistics multinational. Responsible for ExCo talent succession, executive education, and leadership transformation.',
    afraidOf: 'That the company will spend R10M on global AI consultancies only for the executive committee to quietly resist adopting it, leaving the CEO demanding to know why the culture refuses to move.',
    exact2amSearchPhrase: '"Applied AI leadership development cohort for executive committee South Africa corporate"',
    whatTheyAreReallyBuying: 'Execution that actually sticks, peer credibility with tough technical directors, and an advisor with a credible DPhil in Leadership & Change who won’t talk in fluff.',
    programmeFit: 'ExCo Applied AI & Systems Leadership Masterclass Cohort (R195,000 – R450,000 ZAR per 10-leader cohort)',
    spendRange: 'R200,000 – R650,000 ZAR',
  },
  {
    name: 'Johan Venter — The Board Chairman & Senior Governance Lead',
    tag: 'Highest Strategic Clout · Pure Referral & High-Value Advisory',
    commercialProfile: 'Direct engagement with Board Nominations / Governance committee. Zero price sensitivity; decisions made on reputation, gravitas, and confidential trust.',
    whoTheyAre: '61-year-old seasoned non-executive Chairman sitting on two JSE boards and an international commercial conglomerate, grappling with succession and board-level technological illiteracy.',
    afraidOf: 'That the board is making multi-billion Rand strategic capital allocation bets on AI and digital infrastructure without genuinely understanding the systemic downside risks or prompt-level realities.',
    exact2amSearchPhrase: '"Board level AI governance and systems thinking advisory Johannesburg"',
    whatTheyAreReallyBuying: 'Clarity without hype, board cohesion, strategic risk mitigation, and unvarnished commercial truth from someone who understands commercial governance.',
    programmeFit: 'Board Governance & Applied AI Executive Retainer',
    spendRange: 'R300,000 – R800,000 ZAR',
  },
];

export const CHANNEL_RANKINGS = [
  {
    rank: 1,
    name: 'Executive LinkedIn B2B Thought Leadership & Direct Outreach',
    fit: 96,
    effort: 'Medium',
    strengthPct: 96,
    audienceData: '88% of South African ExCo and JSE directors maintain an active, monitored LinkedIn presence (vs. <12% on consumer social platforms).',
    whyItWins: 'Dr. Groothof’s dual edge — rigorous academic pedigree (DPhil, MBL, Henley, Duke) combined with 2026 Applied AI mastery and Universe bodybuilding discipline — is prime high-authority LinkedIn content that stands out in a sea of generic coaching quotes.',
    concreteAction: 'Publish 2 deeply researched executive essays weekly (e.g., "The Boardroom Prompt Architecture: Why ExCos Fail with LLMs") and conduct targeted, personalized connection outreach to 40 Sandton/Rosebank CHROs and MDs monthly.',
  },
  {
    rank: 2,
    name: 'Adjacent Executive Search & Business School Alumni Referral Ecosystem',
    fit: 91,
    effort: 'Low-Medium',
    strengthPct: 91,
    audienceData: 'Henley Africa and Duke CE alumni networks represent over 8,500 senior executives across Africa who already know and respect Dr. Groothof’s reputation.',
    whyItWins: 'Executive search partners (Heidrick & Struggles, Spencer Stuart, Jack Hammer Africa) frequently place leaders who immediately experience transition shock and need private onboarding coaching.',
    concreteAction: 'Establish private referral agreements with 4 premier executive search boutiques in Johannesburg and host an exclusive bi-annual briefing for Henley & Duke alumni leads.',
  },
  {
    rank: 3,
    name: 'Closed Chatham-House C-Suite Roundtables (Sandton / Rosebank)',
    fit: 86,
    effort: 'Medium',
    strengthPct: 86,
    audienceData: 'C-suite executives attend private, peer-only breakfast briefings when commercial confidentiality and Chatham House rules are strictly guaranteed.',
    whyItWins: 'Converts senior enterprise buyers at a 40%+ rate because they experience Dr. Groothof’s commanding presence, intellectual rigor, and physical gravitas in a high-trust physical setting.',
    concreteAction: 'Host one intimate 8-seat executive breakfast every quarter at The Saxon or The Capital on "Applied AI & Systems Leadership for JSE Boards".',
  },
  {
    rank: 4,
    name: 'RULED OUT: TikTok, Instagram & Consumer Ads (Explicitly Skipped)',
    fit: 12,
    effort: 'High',
    strengthPct: 12,
    audienceData: 'Less than 4% of B2B C-suite buyers will hire an executive advisory firm or entrust their board strategy based on a 30-second social media reel.',
    whyItWins: 'Consumer algorithms optimize for outrage and novelty, which actively dilutes an executive consultant’s prestige. Sponsoring TikTok or Meta ads would damage Dr. Groothof’s credibility with conservative institutional boards and procurement committees.',
    concreteAction: 'Allocate zero marketing budget to consumer platforms. Keep all digital attention focused on high-trust executive corridors.',
  },
];

export const FUNNEL_SPEC = {
  name: 'The Executive AI & Systems Leadership Benchmark Diagnostic',
  signatureAsset: 'A proprietary 12-question diagnostic evaluating ExCo AI Readiness, Systems Execution Bottlenecks, and Mind-Fitness Reserves.',
  stages: [
    { name: 'Targeted C-Suite & CHRO Reach', count: 1200, rate: '100%', note: 'Qualified Sandton & African enterprise leaders reached via LinkedIn & executive networks.' },
    { name: 'Completed Diagnostic Assessment', count: 360, rate: '30%', note: 'High completion due to high-value personalized benchmark report generated instantly.' },
    { name: 'Strategic Advisory Call Booked', count: 54, rate: '15%', note: 'Prospects request a 30-min Executive Debrief with Dr. Groothof to review diagnostic results.' },
    { name: 'Advisory Call Attended', count: 46, rate: '85%', note: 'High attendance driven by SMS/Calendar automation and professional positioning.' },
    { name: 'Enrolled Enterprise & C-Suite Clients', count: 14, rate: '30.4%', note: 'Converts into 4 Annual Retainers, 8 Cohort Seats, and 2 Board Masterclasses.' },
  ],
  projectedRevenue: 'R 485,000 ZAR / Month (~$26,500 USD)',
  honestConstraint: 'Dr. Groothof’s calendar has a strict operational cap of 14-16 active 1:1 C-suite clients to preserve elite delivery standards before shifting excess demand to cohort masterclasses.',
  modelledNotice: 'Market figures cited above are researched from official 2025/2026 economic and workforce publications. Funnel conversion rates and volumes represent conservative modelled projections based on The Wise Tutor B2B executive benchmarks.',
};

export const NOTIFICATION_EMAILS = [
  {
    id: 'email-1',
    subject: 'Executive Video Feedback: Prompt Chaining & Governance Architecture',
    sender: "Dr. Christien Groothof <advisory@shepherdstree.co.za>",
    date: '22 Sep 2026, 08:30 SAST',
    type: 'feedback',
    preview: 'I have reviewed your submission on Enterprise LLM workflows. Watch my 4-minute video analysis on the three board-level blindspots...',
    body: `Dear Sipho,

I have thoroughly evaluated your Enterprise LLM Workflow and Governance submission for the Pan-African Digital Banking ExCo.

Your implementation of constraint verification before the sanitization layer is masterfully done. It demonstrates true systems rigor rather than superficial AI adoption.

I recorded a focused 4-minute video breakdown highlighting how you should position the credit risk threshold to your Audit & Risk Committee on Thursday so they view it as an asset rather than a regulatory liability.

Please watch the feedback directly inside your portal deliverable queue before our Thursday advisory call.`,
    ctaText: 'Watch Video Advisory Feedback',
  },
  {
    id: 'email-2',
    subject: 'Weekly Executive Briefing: Mind-Fit Performance & Cognitive Stamina',
    sender: "Shepherd's Tree Leadership <portal@shepherdstree.co.za>",
    date: '19 Sep 2026, 07:00 SAST',
    type: 'progress',
    preview: 'Your weekly progress digest: 68% course completion, 12 mind-fit sessions logged, upcoming ExCo strategy session details...',
    body: `Good morning Sipho,

Here is your executive performance summary for the week ending 18 September 2026.

You completed 3 core modules and maintained a 92% adherence to your morning cognitive transition routine. Your peer feedback rating from the syndicate group stands at 4.9/5.

Keep in mind: true high performance is sustainable performance. Protect your evening recovery boundary before next week’s board session.`,
    ctaText: 'Open Executive Dashboard',
  },
  {
    id: 'email-3',
    subject: 'Tax Invoice & Receipt #STLC-2026-089 (Annual Executive Advisory Retainer)',
    sender: "Accounts · Shepherd's Tree (Pty) Ltd <finance@shepherdstree.co.za>",
    date: '01 Sep 2026, 10:14 SAST',
    type: 'receipt',
    preview: 'Thank you for your business. Payment of R 125,000.00 ZAR has been received and processed via FNB Commercial EFT...',
    body: `Dear Sipho Ndlovu & Pan-African Digital Banking Group,

This email confirms receipt of payment for your Annual C-Suite Executive Advisory Retainer with Shepherd’s Tree Leadership Consulting (Pty) Ltd.

All executive portal modules, private 1-on-1 advisory credits, and applied AI advisory libraries have been fully activated for your ExCo account.

Tax Invoice #STLC-2026-089 is available for download in PDF format.`,
    ctaText: 'Download Official VAT Invoice',
  },
  {
    id: 'email-4',
    subject: 'Confirmed: 1-on-1 Strategic Advisory with Dr. Christien Groothof (Thu 25 Sep)',
    sender: "Advisory Bookings <calendar@shepherdstree.co.za>",
    date: '18 Sep 2026, 11:20 SAST',
    type: 'booking',
    preview: 'Your executive session is booked for Thursday 25 Sep at 10:00 SAST via encrypted teleconference...',
    body: `Dear Sipho,

Your private 1-on-1 executive advisory session with Dr. Christien Groothof, DPhil has been successfully scheduled.

Details:
• Date: Thursday 25 September 2026
• Time: 10:00 - 11:00 SAST (Johannesburg)
• Focus: ExCo AI Defense & Board Preparation
• Location: Encrypted Shepherd's Tree Executive Teleconference

A calendar invitation (.ics) is attached to this transmission.`,
    ctaText: 'Join Executive Room',
  },
];

export const MARKET_RESEARCH = {
  summary: 'Pan-African Executive Advisory & Applied AI Landscape',
  competitors: [
    {
      name: 'Global Management Consultancies (McKinsey, BCG, Bain)',
      typicalOffering: 'Massive strategy decks with junior analysts billing hourly',
      pricingRange: 'R 2.5M – R 8.0M per engagement',
      limitation: 'Junior execution, zero individual executive coaching, abstract AI frameworks without prompt depth.',
      groothofAdvantage: 'Direct C-suite intimacy with a DPhil practitioner; practical, applied prompt engineering.',
    },
    {
      name: 'Traditional Executive Coaches (ICF Certified)',
      typicalOffering: 'Non-directive questioning & psychological probing',
      pricingRange: 'R 2,500 – R 6,000 per hour',
      limitation: 'No commercial AI expertise, no systems architecture, often perceived as remedial by tough ExCos.',
      groothofAdvantage: 'Systems thinking + applied AI discipline + high-performance athletic mindset.',
    },
    {
      name: 'Business School Executive Education (Henley, GIBS, Duke CE)',
      typicalOffering: 'Classroom diplomas and multi-week certificates',
      pricingRange: 'R 85,000 – R 180,000 per delegate',
      limitation: 'Academic lectures without confidential advisory, rigid schedules, low asynchronous support.',
      groothofAdvantage: 'Bespoke LMS platform with asynchronous video review and custom board simulation.',
    },
    {
      name: 'AI Tool Boutiques & Prompt Academies',
      typicalOffering: 'Generic prompt cheat sheets and consumer software tutorials',
      pricingRange: 'R 5,000 – R 25,000',
      limitation: 'Consumer-level tips; lack boardroom gravitas, governance frameworks, and fiduciary credibility.',
      groothofAdvantage: 'Enterprise governance, audit committee reporting, and multi-tier prompt chaining.',
    },
  ],
};

export const PROPOSAL_DATA = {
  preparedFor: 'Dr. Christien Groothof, DPhil',
  clientOrg: "Shepherd's Tree Leadership Consulting (Pty) Ltd",
  preparedBy: 'Odusanya Joshua Ifeoluwa',
  developerRole: 'Head Website & LMS Developer',
  agency: 'TheWiseTutor',
  vision: `A world-class, bespoke digital ecosystem uniting an authoritative, high-converting public editorial website with an encrypted, distraction-free C-suite learning management system (LMS). Designed to reflect Dr. Groothof's unique dual edge: academic doctoral rigor (DPhil, MBL, Henley, Duke) fused with 2026 Applied AI mastery and Universe bodybuilding discipline.`,
  deliverables: [
    {
      title: 'Pillar 1: Authoritative Public Landing Experience',
      description: 'An editorial marketing platform that immediately establishes institutional credibility with corporate boards, ExCo committees, and procurement officers.',
      features: [
        'Cinzel & Plus Jakarta typography pairing with deep forest (#2E4A3E) & warm gold (#C59B4B)',
        'Detailed career narrative covering Duke CE, Henley, and Deloitte consulting pedigree',
        'Mind-Fit philosophy highlighting 2x Universe bodybuilding mental stamina',
        'Interactive Executive AI & Systems Benchmark Diagnostic modal tool',
      ],
    },
    {
      title: 'Pillar 2: Coach Command Center (Dr. Groothof Eyes Only)',
      description: 'A high-leverage cockpit allowing Dr. Groothof to manage multiple corporate cohorts and retainers effortlessly.',
      features: [
        'Attention Feed prioritizing urgent boardroom reviews and missed client check-ins',
        'Client Roster with encrypted, private coaching notes hidden from clients',
        'Unified Review Queue handling written briefs, audio memos with waveform player, and video critiques',
        'Week-view scheduling grid with webinar management and community moderation',
        'Commercial Revenue Ledger tracking FNB corporate EFT and Stripe merchant payouts',
      ],
    },
    {
      title: 'Pillar 3: Executive Client Sanctuary (Sipho Experience)',
      description: 'A focused, confidential executive learning environment tailored for time-starved managing directors and corporate leaders.',
      features: [
        'Lesson player with Commute Audio-Only toggle, video transcript, and auto-saving notes',
        'Scenario-based C-suite knowledge check with instant strategic reasoning feedback',
        'Homework submission with file attach and mobile voice-note recording',
        'Asynchronous video feedback viewer with Dr. Groothof review clips',
        '1-on-1 booking calendar with retainer credit tracking and focus notes',
      ],
    },
    {
      title: 'Pillar 4: Enterprise Communications & Onboarding Suite',
      description: 'Automated administrative and transactional infrastructure that elevates institutional perceived value.',
      features: [
        '4-step executive intake questionnaire capturing organizational reality and AI priorities',
        'Flexible corporate checkout supporting one-time payments and 3-month instalments',
        '14-day boardroom satisfaction guarantee and VAT invoice generation',
        'Branded HTML email preview suite displaying feedback alerts and weekly digests',
      ],
    },
  ],
  phases: [
    { phase: 'Phase 1', title: 'Architecture & Core Engine', duration: 'Weeks 1–2', summary: 'Frontend design system, dual role auth state, data schemas, and public editorial landing layout.' },
    { phase: 'Phase 2', title: 'LMS & Coach Cockpit', duration: 'Weeks 3–4', summary: 'Lesson viewer, waveform audio recorder, feedback composer, and client roster with private notes.' },
    { phase: 'Phase 3', title: 'Commercials & Launch', duration: 'Weeks 5–6', summary: 'FNB EFT & Stripe billing, intake stepper, email suite, and executive benchmark diagnostic.' },
  ],
};

export const TOUR_STEPS: TourStep[] = [
  // Coach side steps (5 screens)
  {
    id: 'tour-coach-1',
    role: 'coach',
    screen: 'dashboard',
    targetId: 'coach-dashboard-header',
    title: 'Your Command Center',
    description: 'Dr. Groothof, this is your executive cockpit. At a glance, you see which C-suite leaders require attention today, active advisory hours, and client completion trends across your modules.',
    roleLabel: 'Coach View · Dashboard',
    stepNumber: 1,
    totalStepsInScreen: 2,
  },
  {
    id: 'tour-coach-2',
    role: 'coach',
    screen: 'dashboard',
    targetId: 'coach-attention-panel',
    title: 'Executive Attention Feed',
    description: 'Never miss an urgent deliverable or an ExCo crisis. Submissions, missed check-ins, and scheduled board prep calls surface automatically here.',
    roleLabel: 'Coach View · Dashboard',
    stepNumber: 2,
    totalStepsInScreen: 2,
  },
  {
    id: 'tour-coach-3',
    role: 'coach',
    screen: 'roster',
    targetId: 'coach-roster-list',
    title: 'C-Suite Client Roster',
    description: 'Here are your active executive clients. Clicking any leader opens their confidential profile, check-in history timeline, and your private coaching notes.',
    roleLabel: 'Coach View · Client Roster',
    stepNumber: 1,
    totalStepsInScreen: 2,
  },
  {
    id: 'tour-coach-4',
    role: 'coach',
    screen: 'roster',
    targetId: 'coach-private-notes',
    title: 'Confidential Coaching Notes',
    description: 'Only you see these notes. Record private boardroom observations, behavioral tendencies, and mind-fit recommendations safely away from client view.',
    roleLabel: 'Coach View · Client Roster',
    stepNumber: 2,
    totalStepsInScreen: 2,
  },
  {
    id: 'tour-coach-5',
    role: 'coach',
    screen: 'scheduling',
    targetId: 'coach-scheduling-grid',
    title: 'Executive Scheduling & Webinars',
    description: 'Manage 1:1 advisory calls, cohort AI masterclasses, and open availability with automatic SAST timezone synchronization and community post approvals.',
    roleLabel: 'Coach View · Scheduling',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-coach-6',
    role: 'coach',
    screen: 'queue',
    targetId: 'coach-review-queue-card',
    title: 'Unified Review & Feedback Queue',
    description: 'Listen to voice check-ins with playable waveforms, review strategic PDFs, and record asynchronous executive video feedback directly inside the browser.',
    roleLabel: 'Coach View · Review Queue',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-coach-7',
    role: 'coach',
    screen: 'revenue',
    targetId: 'coach-revenue-panel',
    title: 'Enterprise Billing & Retainers',
    description: 'Track corporate retainer orders, FNB commercial EFT payouts, Stripe global subscriptions, and VAT invoices in one transparent financial ledger.',
    roleLabel: 'Coach View · Revenue',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  // Switch to client side step
  {
    id: 'tour-switch-role',
    role: 'coach',
    screen: 'revenue',
    targetId: 'role-switcher-button',
    title: 'Now Experience What Your Clients See',
    description: "That is your high-leverage coaching side. Now let's switch into Client View to experience the exact interface your executive leaders engage with every day.",
    roleLabel: 'Transition · Role Switcher',
    stepNumber: 1,
    totalStepsInScreen: 1,
    requiresAction: true,
    actionText: 'Click "Switch to Client View" above to continue',
  },
  // Client side steps (8 screens)
  {
    id: 'tour-client-1',
    role: 'client',
    screen: 'dashboard',
    targetId: 'client-dashboard-hero',
    title: 'The Executive Client Experience',
    description: 'Your leaders enter a distraction-free, branded environment tailored to their demanding schedule. They immediately see their progress and next advisory call.',
    roleLabel: 'Client View · Dashboard',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-2',
    role: 'client',
    screen: 'lesson',
    targetId: 'client-lesson-player',
    title: 'Executive Lesson Viewer & Commute Audio',
    description: 'Leaders can watch your video lessons or toggle to Audio-Only Mode for their daily morning commute, accompanied by transcripts and auto-saving personal notes.',
    roleLabel: 'Client View · Lesson Viewer',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-3',
    role: 'client',
    screen: 'quiz',
    targetId: 'client-knowledge-card',
    title: 'Scenario-Based Knowledge Checks',
    description: 'No childish multiple-choice. Executives evaluate realistic boardroom dilemmas and receive instant, nuanced feedback explaining the strategic reasoning.',
    roleLabel: 'Client View · Knowledge Check',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-4',
    role: 'client',
    screen: 'homework',
    targetId: 'client-homework-container',
    title: 'Strategic Homework & Voice Memos',
    description: 'Executives can submit strategic briefs, attach board decks, or record quick audio check-ins when between flights, alongside daily Mind-Fit habit tracking.',
    roleLabel: 'Client View · Homework & Goals',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-5',
    role: 'client',
    screen: 'booking',
    targetId: 'client-booking-calendar',
    title: 'Frictionless 1-on-1 Booking',
    description: 'Clients view their available retainer credits, select session types, and book directly onto your calendar with zero back-and-forth email scheduling.',
    roleLabel: 'Client View · Booking',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-6',
    role: 'client',
    screen: 'onboarding',
    targetId: 'client-onboarding-card',
    title: '4-Step Executive Intake',
    description: 'Before their first advisory session, new leaders complete a structured intake detailing their current organizational reality, AI priorities, and confidential context.',
    roleLabel: 'Client View · Onboarding',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-7',
    role: 'client',
    screen: 'checkout',
    targetId: 'client-checkout-card',
    title: 'Transparent Retainer Enrollment',
    description: 'Corporate procurement and individual leaders can pay in full or quarterly, download enterprise VAT invoices, or request purchase order financing.',
    roleLabel: 'Client View · Checkout',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
  {
    id: 'tour-client-8',
    role: 'client',
    screen: 'notifications',
    targetId: 'client-notifications-inbox',
    title: 'Branded Executive Email Suite',
    description: 'Every transactional touchpoint — feedback alerts, weekly summaries, and booking receipts — renders as a bespoke, branded HTML communication.',
    roleLabel: 'Client View · Notifications',
    stepNumber: 1,
    totalStepsInScreen: 1,
  },
];

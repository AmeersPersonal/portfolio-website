// Content for the single-page redesign (see /handoff.md for the design brief).
// Items marked TBD are flagged in handoff.md section 3 as still needed
// before shipping (exact dates, real project stats).

export const terminalLines = [
  { key: 'role', value: 'CS student · builder' },
  { key: 'school', value: "NYIT Manhattan, B.S. '28" },
  { key: 'now', value: 'AI Fellow @ Handshake' },
  { key: 'focus', value: 'backend · security · AI' },
  { key: 'certs', value: 'GIAC GFACT · SANS' },
  { key: 'stack', value: 'C++ · Python · React · AWS' },
];

export const impactStats = [
  { value: 101, suffix: '%', caption: 'click-rate lift after remodeling cdawf.org' },
  { value: 20, suffix: '%', caption: 'faster AI prompts, 15% fewer tokens at Reality AI' },
  { value: 100, suffix: '+', caption: 'students & educators reached with AI study tools' },
  { value: 38, suffix: '', caption: 'CPE credits earned through SANS Foundations' },
];

export const skillGroups = [
  { label: 'lang', skills: ['C++', 'Python', 'Java', 'JavaScript', 'SQL'] },
  { label: 'web', skills: ['HTML & CSS', 'React', 'Full Stack'] },
  { label: 'sec', skills: ['Cybersecurity'] },
  { label: 'sys', skills: ['Linux'] },
  { label: 'cloud', skills: ['AWS'] },
  { label: 'ai', skills: ['Agentic AI'] },
];

// Newest first, matches the vertical timeline order in the design.
export const experience = [
  {
    id: 'e1',
    title: 'Campus Leader',
    company: 'ServiceNow',
    date: 'Sep 2026 — now',
    current: true,
    bullets: [
      'Represent ServiceNow University at NYIT, connecting students with ServiceNow learning paths and certifications.',
      'Organize campus workshops and events that introduce students to the Now Platform and IT workflow automation.',
    ],
  },
  {
    id: 'e2',
    title: 'AI Fellow',
    company: 'Handshake · Internship',
    date: 'Dec 2025 — now',
    current: true,
    bullets: [
      'Evaluate and refine AI model outputs for accuracy, reasoning and code quality on computer-science tasks.',
      'Write expert prompts, rubrics and feedback that help train and improve frontier AI models.',
    ],
  },
  {
    id: 'e3',
    title: 'President, AI Interest Group',
    company: 'New York Institute of Technology',
    date: 'Dates TBD', // handoff.md: exact employment date range not confirmed yet
    current: false,
    bullets: [
      "Lead NYIT's AI Interest Group, planning workshops, talks and hands-on build sessions on applied AI.",
      'Grow a cross-major student community around building responsibly with modern AI tools.',
    ],
  },
  {
    id: 'e4',
    title: 'FWS ITS Help Desk',
    company: 'New York Institute of Technology',
    date: 'Sep 2025 — now',
    current: true,
    bullets: [
      'First-level support for students, faculty and staff — account access, Wi-Fi connectivity and classroom equipment.',
      'Handles walk-in requests at the ITS Help Desk, guiding users through troubleshooting and fixes.',
      'Works tickets in ServiceNow and manages user accounts in Active Directory.',
    ],
  },
  {
    id: 'e5',
    title: 'Software Engineer Trainee',
    company: 'Reality AI Lab · Internship',
    date: 'Dec 2024 — Aug 2025',
    current: false,
    bullets: [
      'Built an AI-powered assistant and cheat-sheet builder, opening access for 100+ underserved students and educators.',
      'Optimized prompts for 20% better efficiency and 15% lower token usage, cutting cost.',
      'Used Google Gemini to auto-generate learning content at scale.',
    ],
  },
  {
    id: 'e6',
    title: 'Responsible Technology Ambassador',
    company: 'New York Institute of Technology',
    date: 'Nov 2024 — Aug 2025',
    current: false,
    bullets: [
      'Co-ran cross-organization events on responsible tech, drawing 80+ students.',
      'Presented a poster on responsible-technology principles at the IEEE Ethics 2025 Conference in Chicago.',
      'Worked with a team of 15 peers to drive Responsible Technology initiatives.',
    ],
  },
  {
    id: 'e7',
    title: 'Research Consultant',
    company: 'New York Institute of Technology · Hybrid',
    date: 'Sep — Dec 2024',
    current: false,
    bullets: [
      "Designed and ran a student survey at NYIT's NYC campus on commuting patterns, preferences and challenges.",
      'Cleaned, analyzed and interpreted the results in Python to turn the data into campus recommendations.',
    ],
  },
  {
    id: 'e8',
    title: 'Store Associate',
    company: 'CVS Health · Part-time',
    date: 'Sep 2024 — now',
    current: true,
    bullets: [
      'Deliver fast, friendly service at the register and on the floor while balancing a full CS course load.',
      'Keep the store running through inventory, restocking and day-to-day operations in a high-traffic setting.',
    ],
  },
  {
    id: 'e9',
    title: 'Web & Technology Support Intern',
    company: 'Find Community Connection Project',
    date: 'Jul — Aug 2024',
    current: false,
    bullets: [
      'Built weekly reporting templates and streamlined workflows for a 30% efficiency gain.',
      'Coached the team running findccproject.org, lifting site productivity by 10%+.',
      'Remodeled cdawf.org, more than doubling user click rate (+101%).',
    ],
  },
];

export const featuredProject = {
  eyebrow: '● MTA transit · in progress', // handoff.md: exact dates TBD
  title: 'MTA LLM-Delay Predictor',
  description:
    'Predicting New York transit delays before they hit the platform — a GTFS data pipeline over 500K+ transit records, served through a FastAPI backend and paired with an LLM that turns the data into delay predictions.',
  pipeline: ['GTFS feeds', 'SQLite3 store', 'FastAPI', 'LLM prediction'],
  stats: [
    { value: '500K+', label: 'GTFS records processed' },
    { value: 'TBD', label: 'routes / lines covered' }, // handoff.md: pull real number from the project repo
    { value: 'TBD', label: 'prediction accuracy / latency' }, // handoff.md: pull real number from the project repo
  ],
  tags: ['Python', 'FastAPI', 'SQLite3', 'GTFS', 'Google Transit API', 'LLM'],
};

export const award = {
  title: 'Presentation Award',
  event: 'NYIT Code for Good Hackathon',
};

export const credentials = [
  { badge: 'GIAC', title: 'GFACT — Foundational Cybersecurity Technologies', status: 'Certified' },
  { badge: 'SANS Institute', title: 'SANS Foundations', status: '38 CPE credits' },
  { badge: 'CodePath', title: 'Intermediate Technical Interview Prep', status: 'Completed' },
  { badge: 'ETIC', title: 'ETIC Project Completion', status: 'Completed' },
];

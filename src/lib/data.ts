export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  award?: string;
  problem: string;
  solution: string;
  contribution: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  interactiveType:
  | "dependencyGraph"
  | "hackathonSprint"
  | "healthcareTriage"
  | "budgetAnalytics"
  | "gamingShowcase"
  | "campusNotes"
  | "flightMatrix"
  | "computerVision"
  | "knowledgeGraph";
  accentColor: string;
}

export interface OSSContribution {
  id: string;
  organization: string;
  orgSlug: "fossasia" | "apache" | "freecodecamp" | "fossology" | "other";
  repository: string;
  repoUrl: string;
  prTitle: string;
  prNumber?: number;
  prUrl: string;
  type: "Feature" | "Bugfix" | "Refactor" | "Docs" | "Performance";
  description: string;
  impact: string;
  tags: string[];
  mergedDate?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    context: string;
    projects: string[];
  }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  badge?: string;
  type: "achievement" | "education" | "leadership" | "open-source";
}

export const PERSONAL_INFO = {
  name: "Vikas Sharma",
  title: "Full-Stack Developer & Creative Technologist",
  subtitle: "Building intelligent real-world goal engines, open-source systems, and responsive digital products.",
  currentRole: "B.Tech Computer Science (2nd Year)",
  institution: "Newton School of Technology, Bangalore",
  clubRole: "Vice President, DevForge",
  location: "Bangalore, India",
  email: "vikassharma180507@gmail.com",
  github: "https://github.com/sharmavikas18",
  linkedin: "https://www.linkedin.com/in/sharmavikas18/",
  availability: "Available for internships & impactful engineering collaborations",
  stats: {
    hackathonWins: "1st Place @ CodeDay",
    orgsContributed: "4+ Major OSS Orgs",
    repositoriesBuilt: "15+ Repositories",
    commitsPushed: "500+ Verified Commits",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "raasta",
    title: "RAASTA",
    tagline: "Real-world Awareness, Action, Sequencing & Timing Assistant",
    category: "Intelligent Goal & Dependency Engine",
    featured: true,
    award: "Flagship Architecture",
    problem:
      "Real-world goals (academic roadmaps, system migrations, product launches) fail because users cannot dynamically balance inter-task dependencies, shifting deadlines, and real-world friction.",
    solution:
      "RAASTA translates high-level human intent into a directed, dependency-aware milestone graph with automated critical-path recalculation and deadline awareness.",
    contribution:
      "Architected the dependency resolution engine, built the responsive Next.js frontend with tactile node manipulation, and connected AWS serverless backend triggers.",
    techStack: ["Next.js", "TypeScript", "AWS", "Tailwind CSS", "Supabase", "REST APIs"],
    metrics: [
      { label: "Engine Type", value: "DAG Dependency Graph" },
      { label: "Sequencing", value: "Dynamic Real-Time" },
      { label: "Cloud Engine", value: "AWS Serverless" },
    ],
    githubUrl: "https://github.com/sharmavikas18/raasta",
    liveUrl: "https://raasta-fawn.vercel.app/",
    interactiveType: "dependencyGraph",
    accentColor: "#5eead4",
  },
  {
    id: "7th-hour",
    title: "7th Hour",
    tagline: "High-Velocity Real-Time Collaboration Engine",
    category: "Hackathon Winner — 12-Hour Sprint",
    featured: true,
    award: "🏆 1st Place Winner — CodeDay Bangalore",
    problem:
      "Rapid team brainstorming during time-critical events suffers from disjointed messaging, delayed task allocation, and fragmented asset synchronization.",
    solution:
      "Engineered an instant real-time synchronization workspace allowing squads to co-pilot ideas, track blockers, and coordinate output in a hyper-focused sprint UI.",
    contribution:
      "Led full-stack architecture, engineered real-time synchronization pipelines, and delivered the winning demo within an intense 12-hour continuous build sprint in a team of 4.",
    techStack: ["React", "Node.js", "WebSockets", "Express", "Tailwind CSS"],
    metrics: [
      { label: "Hackathon Duration", value: "12 Hours Sprint" },
      { label: "Team Size", value: "4 Developers" },
      { label: "Placement", value: "1st Place Winner" },
    ],
    githubUrl: "https://github.com/sharmavikas18/7th-hour",
    liveUrl: "https://7th-hour.vercel.app/",
    interactiveType: "hackathonSprint",
    accentColor: "#f59e0b",
  },
  {
    id: "next-gen-care",
    title: "Next Gen Care",
    tagline: "Modernized Patient Telemetry & Digital Healthcare Workflow",
    category: "Full-Stack Healthcare System",
    featured: true,
    problem:
      "Legacy clinic administration creates long triage queues, disconnected patient histories, and fragile scheduling channels between specialists and patients.",
    solution:
      "Built an integrated healthcare suite featuring unified patient records, doctor availability calendars, and encrypted triage communication channels.",
    contribution:
      "Designed the relational database schema, implemented secure authentication, and developed intuitive doctor-patient dashboards with responsive status indicators.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "RESTful APIs"],
    metrics: [
      { label: "Architecture", value: "Modular Full-Stack" },
      { label: "Data Integrity", value: "PostgreSQL ACID" },
      { label: "Workflow", value: "Doctor-Patient Triage" },
    ],
    githubUrl: "https://github.com/sharmavikas18/NextGenCare",
    liveUrl: "https://next-gen-care.vercel.app/",
    interactiveType: "healthcareTriage",
    accentColor: "#38bdf8",
  },
  {
    id: "budget-buddy",
    title: "Budget Buddy",
    tagline: "Smart Personal Expense Analytics & Financial Decision Companion",
    category: "Fintech & Financial Intelligence",
    featured: true,
    problem:
    "Students and early-career developers struggle to track fragmented spending, identify subscription drains, and stick to savings targets without complex spreadsheets.",
    solution:
    "An intelligent expense tracker featuring visual expenditure breakdowns, recurring bill reminders, and dynamic budgeting thresholds.",
    contribution:
    "Built the responsive React dashboard, designed category aggregation pipelines, and implemented real-time balance calculations with interactive visual charts.",
    techStack: ["React", "JavaScript", "Node.js", "Tailwind CSS", "Chart.js"],
    metrics: [
      { label: "Analytics", value: "Real-time Aggregation" },
      { label: "Category Filter", value: "Instant Sub-50ms" },
      { label: "Frontend", value: "Responsive React" },
    ],
    githubUrl: "https://github.com/sharmavikas18/BudgetBuddy",
    liveUrl: "https://budget-buddy-liard-one.vercel.app/",
    interactiveType: "budgetAnalytics",
    accentColor: "#10b981",
  },
  {
    id: "gamecraft",
    title: "Gamecraft",
    tagline: "High-Performance Interactive Gaming & Community Showcase Platform",
    category: "Interactive Gaming Media",
    featured: true,
    problem:
    "Gaming communities and esports initiatives need high-impact visual presentation, fluid interactions, and dynamic event displays that engage players seamlessly.",
    solution:
    "A fast, modern gaming web portal engineered with rich aesthetic typography, interactive character showcases, and optimized media rendering.",
    contribution:
    "Crafted responsive interactive components, smooth scroll reveals, and optimized layout assets for high frame-rate rendering across all screen sizes.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Performance", value: "60 FPS Fluid" },
      { label: "Design System", value: "Cyberpunk Aesthetic" },
      { label: "Interactivity", value: "Dynamic Micro-UI" },
    ],
    githubUrl: "https://github.com/sharmavikas18/Gamecraft",
    liveUrl: "https://meenakshi-marketing.vercel.app/",
    interactiveType: "gamingShowcase",
    accentColor: "#a855f7",
  },
  {
    id: "nst-notes",
    title: "NST Notes",
    tagline: "Centralized Academic Knowledge Base & Student Resource Repository",
    category: "Education & Campus Productivity",
    featured: true,
    problem:
      "Computer Science undergraduates at Newton School of Technology faced scattered lecture materials, lost syllabus links, and disorganized exam preparation resources.",
    solution:
      "An organized, search-first open academic repository for NST students to access verified lecture notes, code snippets, and study guides in sub-second lookups.",
    contribution:
      "Designed the accessible campus repository, fast tag-based topic search, and lightweight document viewer optimized for rapid exam review.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Markdown", "Vercel"],
    metrics: [
      { label: "Community", value: "NST Students" },
      { label: "Search Speed", value: "Instant Query" },
      { label: "Content", value: "Verified CS Curricula" },
    ],
    githubUrl: "https://github.com/sharmavikas18/NST_Notes",
    liveUrl: "https://nst-notes.vercel.app/",
    interactiveType: "campusNotes",
    accentColor: "#f59e0b",
  },
  {
    id: "flight-management",
    title: "Flight Management System",
    tagline: "Enterprise Flight Scheduling, Seat Reservation & Route Coordination Core",
    category: "Backend & Systems Architecture",
    featured: true,
    problem:
      "Airline flight operations require strict ACID transaction guarantees, concurrency control for seat reservations, and rapid route query resolution.",
    solution:
      "A robust data management and flight routing core managing passenger bookings, flight statuses, crew assignments, and dynamic fare rules.",
    contribution:
      "Architected the relational database schema, implemented transaction locks to eliminate double-booking race conditions, and optimized routing lookup queries.",
    techStack: ["Python", "SQL", "Database Systems", "Data Structures", "Algorithms"],
    metrics: [
      { label: "Transactions", value: "ACID Compliant" },
      { label: "Concurrency", value: "Thread-Safe Locks" },
      { label: "Architecture", value: "Relational Schema" },
    ],
    githubUrl: "https://github.com/sharmavikas18/flight_management_system",
    interactiveType: "flightMatrix",
    accentColor: "#38bdf8",
  },
];

export const OSS_CONTRIBUTIONS: OSSContribution[] = [
  {
    id: "fossasia-badgemagic",
    organization: "FOSSASIA",
    orgSlug: "fossasia",
    repository: "BadgeMagic",
    repoUrl: "https://github.com/fossasia/badgemagic-android",
    prTitle: "UI/UX enhancements & Bluetooth peripheral protocol stability",
    prUrl: "https://github.com/fossasia/badgemagic-android/pulls?q=author%3Asharmavikas18",
    type: "Feature",
    description: "Contributed to BadgeMagic, an open-source LED badge controller app that connects via Bluetooth LE to display custom text, animations, and cliplists.",
    impact: "Refined interaction states and improved cross-device responsiveness for open hardware users.",
    tags: ["Open Hardware", "BLE", "Android", "Open Source"],
  },
  {
    id: "fossasia-eventyay",
    organization: "FOSSASIA",
    orgSlug: "fossasia",
    repository: "Eventyay",
    repoUrl: "https://github.com/fossasia/eventyay-tickets",
    prTitle: "Component modularization & event attendee workflow refinement",
    prUrl: "https://github.com/fossasia/eventyay-tickets/pulls?q=author%3Asharmavikas18",
    type: "Refactor",
    description: "Contributed to Eventyay, FOSSASIA's open-source event management and ticketing platform powering international developer conferences.",
    impact: "Streamlined frontend user flows, reduced redundant API calls on registration forms.",
    tags: ["Full Stack", "Event Platform", "Vue/React", "FOSSASIA"],
  },
  {
    id: "fossasia-voxbento",
    organization: "FOSSASIA",
    orgSlug: "fossasia",
    repository: "VoxBento",
    repoUrl: "https://github.com/fossasia/voxbento",
    prTitle: "Audio processing utilities & transcription pipeline fixes",
    prUrl: "https://github.com/fossasia/voxbento/pulls?q=author%3Asharmavikas18",
    type: "Bugfix",
    description: "Contributed to VoxBento, a modern open-source audio processing and voice utility ecosystem.",
    impact: "Fixed edge-case waveform rendering artifacts and updated dependency compatibility.",
    tags: ["Audio Processing", "Python", "CLI", "FOSSASIA"],
  },
  {
    id: "apache-superset",
    organization: "Apache Software Foundation",
    orgSlug: "apache",
    repository: "Apache Superset",
    repoUrl: "https://github.com/apache/superset",
    prTitle: "Dashboard visualization edge-case handling & UI performance",
    prUrl: "https://github.com/apache/superset/pulls?q=author%3Asharmavikas18",
    type: "Performance",
    description: "Contributed to Apache Superset, a world-class enterprise data exploration and visualization platform used by Fortune 500 companies.",
    impact: "Investigated frontend charting rendering performance and contributed upstream polish to dashboard widgets.",
    tags: ["Apache", "Enterprise BI", "React", "Python/Flask"],
  },
  {
    id: "freecodecamp",
    organization: "freeCodeCamp",
    orgSlug: "freecodecamp",
    repository: "freeCodeCamp Core",
    repoUrl: "https://github.com/freeCodeCamp/freeCodeCamp",
    prTitle: "Curriculum test validation & documentation clarity updates",
    prUrl: "https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=author%3Asharmavikas18",
    type: "Docs",
    description: "Contributed to freeCodeCamp's open-source learning platform educating millions of developers globally.",
    impact: "Improved accuracy of curriculum test suites ensuring smooth onboarding for novice developers.",
    tags: ["Global Impact", "TypeScript", "Education"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: "Core", context: "Applied in PictoPy, FastAPI backends, and data scripting", projects: ["PictoPy", "FOSSASIA"] },
      { name: "TypeScript", level: "Core", context: "Standard language for RAASTA, modern web apps, and type-safe APIs", projects: ["RAASTA", "DevForge"] },
      { name: "JavaScript", level: "Core", context: "ES6+, async architectures, browser runtimes, Node.js", projects: ["SaveBook", "7th Hour"] },
      { name: "SQL", level: "Advanced", context: "Complex relational queries, indexing, joins, migrations", projects: ["Next Gen Care", "Supabase"] },
      { name: "HTML & CSS", level: "Core", context: "Semantic markup, modern CSS grid, flexbox, fluid layouts", projects: ["All Web Apps"] },
    ],
  },
  {
    name: "Frontend Systems",
    icon: "Layout",
    skills: [
      { name: "Next.js (App Router)", level: "Core", context: "Server Components, API routes, streaming SSR, performance optimization", projects: ["RAASTA", "Next Gen Care"] },
      { name: "React 18+", level: "Core", context: "Custom hooks, state management, memoization, lifecycle architecture", projects: ["7th Hour", "SaveBook"] },
      { name: "Tailwind CSS", level: "Core", context: "Custom design systems, responsive micro-layouts, glassmorphism, utility-first CSS", projects: ["All Projects"] },
      { name: "Framer Motion", level: "Advanced", context: "Scroll animations, layout morphs, gesture mechanics, physical springs", projects: ["Portfolio", "RAASTA"] },
      { name: "Three.js / WebGL", level: "Proficient", context: "Interactive 3D particle fields, shaders, responsive scene rendering", projects: ["Developer Universe"] },
    ],
  },
  {
    name: "Backend & Distributed",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: "Core", context: "REST microservices, middleware chains, WebSocket telemetry", projects: ["7th Hour", "SaveBook"] },
      { name: "FastAPI", level: "Advanced", context: "High-throughput asynchronous Python endpoints, Pydantic schemas", projects: ["APIs", "PictoPy Backend"] },
      { name: "RESTful Architecture", level: "Core", context: "Idempotent resource design, status codes, payload contract standards", projects: ["RAASTA", "Next Gen Care"] },
      { name: "WebSockets", level: "Advanced", context: "Bi-directional real-time communication, low-latency sync", projects: ["7th Hour Hackathon"] },
    ],
  },
  {
    name: "Data & Infrastructure",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Core", context: "ACID transactions, relational modeling, foreign constraints", projects: ["Next Gen Care"] },
      { name: "Supabase", level: "Advanced", context: "Postgres backend-as-a-service, Row Level Security, realtime triggers", projects: ["RAASTA"] },
      { name: "MongoDB", level: "Proficient", context: "Document storage, flexible schema prototyping, aggregation pipelines", projects: ["SaveBook"] },
      { name: "AWS Cloud", level: "Proficient", context: "S3 asset distribution, Lambda serverless, cloud compute basics", projects: ["RAASTA Deployment"] },
      { name: "Firebase", level: "Proficient", context: "Auth integration, Firestore, cloud functions", projects: ["Prototypes"] },
    ],
  },
  {
    name: "Engineering Practices",
    icon: "Terminal",
    skills: [
      { name: "Git & Open-Source Flow", level: "Core", context: "Upstream rebase, branching strategies, conflict resolution, PR etiquette", projects: ["FOSSASIA", "Apache"] },
      { name: "CS Fundamentals & DSA", level: "Core", context: "Time/space complexity analysis, graph algorithms, dynamic programming", projects: ["Placement-Prep"] },
      { name: "AI & RAG Pipelines", level: "Proficient", context: "Vector embeddings, context injection, LLM orchestration", projects: ["Intelligent Systems"] },
      { name: "Linux & Shell Scripting", level: "Advanced", context: "Environment configuration, bash pipelines, process management", projects: ["Daily Workflow"] },
    ],
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2024 — Present",
    title: "B.Tech in Computer Science & Engineering",
    role: "Undergraduate Student",
    organization: "Newton School of Technology, Bangalore",
    description: "Deep-diving into algorithms, systems programming, distributed backends, and building software that addresses real-world complexity.",
    type: "education",
  },
  {
    year: "2024 — Present",
    title: "Vice President",
    role: "Leadership & Community Lead",
    organization: "DevForge — NST Open Source Club",
    description: "Spearheading hackathons, open-source contributor drives, hands-on Git workshops, and mentoring peers in collaborative software development.",
    badge: "Student Leadership",
    type: "leadership",
  },
  {
    year: "Hackathon Win",
    title: "1st Place Winner 🏆",
    role: "Team of 4 / Full-Stack Engineer",
    organization: "CodeDay Bangalore (12-Hour Sprint)",
    description: "Secured first prize after conceptualizing, architecting, and deploying '7th Hour' within an intense 12-hour continuous hacking sprint.",
    badge: "1st Place 🏆",
    type: "achievement",
  },
  {
    year: "Active Ongoing",
    title: "Open Source Contributor",
    role: "Upstream Developer",
    organization: "FOSSASIA • Apache Superset • freeCodeCamp",
    description: "Regularly contributing code, bug fixes, and UX improvements to major open-source ecosystems with worldwide adoption.",
    badge: "OSS Contributor",
    type: "open-source",
  },
];

export const DEVFORGE_INFO = {
  name: "DevForge",
  tagline: "The Student-Led Open-Source & Technology Forge at Newton School of Technology",
  role: "Vice President",
  mission:
    "Empowering undergraduate engineers to transition from writing toy code to shipping production-grade, collaborative software through open source, competitive hackathons, and real-world engineering.",
  pillars: [
    {
      title: "Open Source First",
      desc: "Demystifying git workflows, code reviews, and getting students' first PRs merged into upstream projects.",
      icon: "GitPullRequest",
    },
    {
      title: "Hackathon Sprints",
      desc: "Organizing intense 12-to-24 hour sprints that pressure-test design, backend resilience, and team execution.",
      icon: "Trophy",
    },
    {
      title: "Engineering Culture",
      desc: "Fostering architectural discussions, tech talks on modern stacks, and demystifying distributed systems.",
      icon: "Cpu",
    },
    {
      title: "Peer Mentorship",
      desc: "Connecting second-year builders with incoming freshmen to accelerate skill acquisition and project shipping.",
      icon: "Users",
    },
  ],
};

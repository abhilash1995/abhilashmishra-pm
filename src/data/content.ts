/**
 * Editorial source of truth:
 * /public/Abhilash-Mishra-CV.pdf (user's 21 Nov 2026 CV).
 * Additional Anthropic course completions were directly verified from the
 * user-provided screenshot (issued 1 Nov 2026).
 * Avoid introducing claims not supported by these sources.
 */
export const profile = {
  name: 'Abhilash Mishra',
  shortName: 'Abhilash',
  position: 'Enterprise Product Manager',
  location: 'Bengaluru, India',
  email: 'mishraabhilash1995@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/abhilashmishra-pm/',
  cv: '/Abhilash-Mishra-CV.pdf',
  descriptor: 'B2B SaaS · APIs · IoT · UCaaS · AI',
} as const;

export type Metric = { value: string; label: string; caveat?: string };
export type Section = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};
export type Study = {
  slug: string;
  index: string;
  category: string;
  company: string;
  title: string;
  subtitle: string;
  overview: string;
  year: string;
  metrics: Metric[];
  role: string;
  sections: Section[];
  perspective: string;
  visual: { src: string; alt: string };
  link?: { href: string; label: string };
};

export const studies: Study[] = [
  {
    slug: 'enterprise-provisioning',
    visual: { src: '/visuals/enterprise-provisioning.svg', alt: 'Conceptual visual comparing multi-user provisioning without Shared Line Group to the single-user configuration required by the customer' },
    index: '01',
    category: 'Enterprise workflows',
    company: 'RingCentral',
    title: 'A provisioning gap stood between a customer and a critical workflow.',
    subtitle: 'Fortune 500 account · Enterprise communications',
    overview: 'A Fortune 500 customer needed Shared Line Group support on its phones. The existing multi-user provisioning setup did not support that need. The work required translating a customer-specific problem into a cross-functional product response.',
    year: 'Dec 2025 – Present',
    metrics: [
      { value: '4,845', label: 'Customer locations in scope' },
      { value: '$2.55M', label: 'ARR associated with the account', caveat: 'Account scope; not individual revenue attribution' },
    ],
    role: 'Product Manager — Enterprise Web Platforms & Device Ecosystem',
    sections: [
      {
        eyebrow: '01 / Context',
        title: 'The constraint was in the workflow, not just the hardware.',
        paragraphs: [
          'The customer needed phones configured in single-user mode to use Shared Line Group functionality. The existing multi-user setup did not support that requirement.',
          'For an account operating across 4,845 locations, the gap had business significance well beyond a single device configuration.'
        ]
      },
      {
        eyebrow: '02 / Contribution',
        title: 'Make the requirement actionable across teams.',
        paragraphs: [
          'I worked with Product, Engineering, Customer Success, and Sales to understand the configuration constraint and help address the customer requirement.',
          'The product task was to keep the customer workflow central while coordinating the people responsible for a viable path forward.'
        ],
        bullets: [
          'Clarified why the available multi-user configuration was insufficient.',
          'Helped connect customer-facing context with product and engineering discussions.',
          'Supported coordination around the required single-user configuration and Shared Line Group capability.'
        ]
      },
      {
        eyebrow: '03 / Outcome',
        title: 'An enterprise issue with measurable commercial exposure.',
        paragraphs: [
          'This work contributed to resolving an issue affecting a Fortune 500 account associated with $2.55M in annual recurring revenue.',
          'The figures describe the account and deployment scale; they should not be read as revenue produced by one person or one feature.'
        ]
      }
    ],
    perspective: 'A useful product decision starts by identifying the exact workflow the customer cannot complete. A device or feature can be technically supported and still fail the customer’s real use case.'
  },
  {
    slug: 'developer-api-platform',
    visual: { src: '/visuals/developer-api-platform.svg', alt: 'Illustrative flow from environmental data sources through API gateway controls to developer portal and enterprise dashboard' },
    index: '02',
    category: 'API & developer platforms',
    company: 'Ambee',
    title: 'Turning environmental data into products developers could adopt.',
    subtitle: 'APIs · Gateway · Enterprise dashboard',
    overview: 'Environmental and satellite data became commercial API products with a management layer for access, usage, and subscriptions. My responsibility was product requirements and roadmap across the gateway, developer experience, and customer-facing dashboard.',
    year: 'Jan 2019 – Aug 2025',
    metrics: [
      { value: '10K+', label: 'Platform users' },
      { value: '10M+', label: 'API calls per month' },
      { value: '<200ms', label: 'Reported query latency under continuous load' },
      { value: '₹1.5Cr+', label: 'Net-new contract revenue', caveat: 'Broader environmental data product portfolio' }
    ],
    role: 'Product Manager — Developer APIs, Data Solutions & IoT Systems',
    sections: [
      {
        eyebrow: '01 / Context',
        title: 'Getting data to market required more than an endpoint.',
        paragraphs: [
          'Ambee commercialized environmental and satellite datasets through REST APIs and GraphQL services. The business also needed an understandable developer journey and customer controls for using these products.',
          'The API Gateway supported a platform with more than 10,000 users and over 10 million API calls each month.'
        ]
      },
      {
        eyebrow: '02 / Ownership',
        title: 'Product decisions across access, usage, and developer experience.',
        paragraphs: [
          'I owned the product requirements and roadmap for the API Gateway, including authentication, rate limits, subscriptions, and usage tracking.',
          'I also owned product vision and execution for the Enterprise API Dashboard and Documentation Hub, covering self-service API key provisioning, usage metering, role-based quota controls, and developer playgrounds.'
        ],
        bullets: [
          'Defined and prioritized API-management capabilities.',
          'Worked with engineering and data teams on ingestion, processing, and data-quality requirements.',
          'Contributed to product packaging and go-to-market planning for Climate APIs and related products.'
        ]
      },
      {
        eyebrow: '03 / Result',
        title: 'A commercial platform with scale and performance requirements.',
        paragraphs: [
          'The API services supported sub-200ms query latency under continuous load, according to the CV. The environmental data product portfolio contributed to more than ₹1.5 crore in net-new contract revenue.',
          'Revenue is attributed to the wider portfolio, not solely to the API Gateway or dashboard.'
        ]
      }
    ],
    perspective: 'For a developer product, the API is only part of the experience. Authentication, quotas, documentation, self-service access, and the commercial model determine whether teams can use it successfully.',
    link: { href: 'https://docs.ambeedata.com/', label: 'View Ambee developer documentation' }
  },
  {
    slug: 'climate-maps',
    visual: { src: '/visuals/climate-maps.svg', alt: 'Abstract illustrative map with air quality, pollen, wildfire, weather, and 48-hour historical controls, not real readings' },
    index: '03',
    category: '0→1 product launches',
    company: 'Ambee',
    title: 'Making environmental data understandable on a map.',
    subtitle: 'Ambee Climate Maps · MapTiles',
    overview: 'A four-month, zero-to-one launch turned environmental datasets into a global, interactive mapping experience. Alongside the maps product, I owned roadmap requirements for the MapTiles and heatmap capabilities supporting API and enterprise use cases.',
    year: 'Jan 2019 – Aug 2025',
    metrics: [
      { value: '4 months', label: '0→1 launch period' },
      { value: '20K+', label: 'Monthly sessions after launch' },
      { value: '20M+', label: 'Map tile requests per month' }
    ],
    role: 'Product Manager — Developer APIs, Data Solutions & IoT Systems',
    sections: [
      {
        eyebrow: '01 / Opportunity',
        title: 'From raw data to something a customer can explore.',
        paragraphs: [
          'Air-quality, pollen, wildfire, and weather data can be difficult to evaluate as raw responses. A map gives teams a faster way to explore patterns and understand what the data can do.',
          'Ambee Climate Maps became an interactive global visualization product, with 48-hour historical playback and international air-quality index standards.'
        ]
      },
      {
        eyebrow: '02 / Ownership',
        title: 'Two connected product experiences.',
        paragraphs: [
          'I led zero-to-one ideation and launch of Climate Maps in four months.',
          'Separately, I owned product requirements and roadmap for MapTiles and heatmaps across AQI, pollen, and temperature use cases. The tile service handled over 20 million requests per month.'
        ],
        bullets: [
          'Defined product direction for a customer-facing environmental visualization experience.',
          'Worked on MapTiles requirements as a reusable geospatial product capability.',
          'Supported go-to-market planning, positioning, and sales use cases.'
        ]
      },
      {
        eyebrow: '03 / Result',
        title: 'A product customers could try and Sales could demonstrate.',
        paragraphs: [
          'Climate Maps reached more than 20,000 monthly sessions after launch. It became a regular part of enterprise sales demonstrations and increased developer interest in MapTiles and API subscriptions.',
          'These are the reported outcomes of the maps initiative, not claims of direct revenue attribution.'
        ]
      }
    ],
    perspective: 'Sometimes the clearest demonstration of a technical data product is an experience that lets a prospective customer interact with the data before committing to an integration.',
    link: { href: 'https://maps.getambee.com/', label: 'Explore Ambee Climate Maps' }
  },
  {
    slug: 'ai-self-service',
    visual: { src: '/visuals/ai-self-service.svg', alt: 'Illustrative guided-support journey from device setup question through AVA assistance to guidance or support handoff' },
    index: '04',
    category: 'AI & workflow automation',
    company: 'RingCentral',
    title: 'Helping administrators resolve device issues without another handoff.',
    subtitle: 'AVA virtual assistant · Support content operations',
    overview: 'I supported AI-assisted device provisioning and troubleshooting journeys through AVA. In parallel, I introduced an LLM-assisted workflow to turn device specifications into draft Support Portal articles.',
    year: 'Dec 2025 – Present',
    metrics: [
      { value: '22%', label: 'Reported reduction in Tier-2 configuration escalations', caveat: 'Reported by Business and Product stakeholders' }
    ],
    role: 'Product Manager — Enterprise Web Platforms & Device Ecosystem',
    sections: [
      {
        eyebrow: '01 / Context',
        title: 'Provisioning problems can become support problems.',
        paragraphs: [
          'Device setup and configuration generate repeat questions for enterprise administrators. Those questions can move through multiple support tiers when the path to an answer is unclear.',
          'The product opportunity was to make device provisioning and troubleshooting more accessible through guided self-service journeys.'
        ]
      },
      {
        eyebrow: '02 / Contribution',
        title: 'Support the customer journey and the content behind it.',
        paragraphs: [
          'I supported AI-assisted provisioning and troubleshooting journeys delivered through RingCentral’s AVA virtual assistant.',
          'I also introduced an LLM-assisted workflow that converted raw device specifications into draft Support Portal knowledge articles, reducing the number of technical-writer handoffs during content preparation.'
        ],
        bullets: [
          'Worked on device provisioning and troubleshooting journey requirements.',
          'Used LLM assistance to produce drafts from device specifications.',
          'Kept draft content preparation distinct from publication and human review.'
        ]
      },
      {
        eyebrow: '03 / Outcome',
        title: 'An improvement reported by business stakeholders.',
        paragraphs: [
          'Business and Product stakeholders reported a 22% reduction in Tier-2 configuration escalations associated with the AVA work.',
          'The CV does not specify the measurement period or causal isolation. This portfolio therefore states the figure as stakeholder-reported rather than independently measured.'
        ]
      }
    ],
    perspective: 'AI makes sense when it removes a real handoff. For technical support workflows, trusted source material and a clear path to escalation matter as much as generation itself.'
  },
  {
    slug: 'ambees-academia',
    visual: { src: '/visuals/ambees-academia.svg', alt: 'Conceptual diagram of one shared SSO capability serving enterprise API dashboard access and academic-account handling' },
    index: '05',
    category: '0→1 / access & onboarding',
    company: 'Ambee',
    title: 'Launching an academic offering without building a second identity system.',
    subtitle: 'Ambee for Academia · Shared SSO',
    overview: 'Ambee for Academia went from PRD to production in under 30 days. The launch used a shared SSO capability that supported both enterprise dashboard access and academic-account handling.',
    year: 'Jan 2019 – Aug 2025',
    metrics: [
      { value: '<30 days', label: 'PRD to production' },
      { value: '100+', label: 'Qualified inbound leads within two months' },
      { value: '6 months', label: 'Time to first commercial enterprise contract' }
    ],
    role: 'Product Manager — Developer APIs, Data Solutions & IoT Systems',
    sections: [
      {
        eyebrow: '01 / Context',
        title: 'A new audience needed a clear way into an existing platform.',
        paragraphs: [
          'Ambee for Academia introduced an offering for academic users. Rather than describing enterprise and academic access as unrelated systems, the work shared an SSO capability with the Enterprise API Dashboard.',
          'The identity layer supported enterprise access and academic-account handling within the same capability.'
        ]
      },
      {
        eyebrow: '02 / Ownership',
        title: 'Translate a new offering into something ready to launch.',
        paragraphs: [
          'I launched the initiative from PRD to production in under 30 days and owned requirements for the shared SSO capability.',
          'The work connected product scope, customer access needs, launch readiness, and delivery.'
        ]
      },
      {
        eyebrow: '03 / Outcome',
        title: 'Early traction and a commercial follow-through.',
        paragraphs: [
          'The initiative generated more than 100 qualified inbound leads within two months and secured its first commercial enterprise contract within six months.',
          'These are initiative-level outcomes from the CV; the site does not invent conversion-rate or revenue figures.'
        ]
      }
    ],
    perspective: 'Launching into a new segment does not always require a separate underlying platform. Reusing core capabilities can keep the scope focused while still accounting for distinct customer needs.'
  }
];

/** Additional CV-grounded work, presented without implying a full case study. */
export const supportingWork = [
  {
    company: 'Ambee',
    name: 'Environmental monitoring at physical scale',
    scope: 'IoT fleet · Data quality',
    summary: 'Worked across device lifecycle requirements and MQTT-connected indoor/outdoor air-quality and weather-monitoring deployments.',
    value: '1,200+',
    detail: 'Physical devices and stations; platform uptime reported above 99.5%.'
  },
  {
    company: 'RingCentral',
    name: 'Carrier catalogs and digital purchasing',
    scope: 'Enterprise commerce · Releases',
    summary: 'Partnered on licensing and catalog requirements across seven currencies, 30+ endpoint models and 80+ releases.',
    value: '30%',
    detail: 'Ordering workflow velocity improvement reported by Business and Product stakeholders.'
  },
  {
    company: 'Smart Joules',
    name: 'Fleet visibility and firmware updates',
    scope: 'Energy management · Operations',
    summary: 'Defined telemetry ingestion, observability and deJoule firmware-update requirements, with Grafana views for L1–L3 teams.',
    value: 'L1–L3',
    detail: 'Support teams served by the centralized monitoring requirements.'
  }
] as const;

export const experience = [
  {
    company: 'RingCentral',
    title: 'Product Manager — Enterprise Web Platforms & Device Ecosystem',
    dates: 'Dec 2025 — Present',
    summary: 'Enterprise device provisioning, carrier catalog and licensing requirements, AI-assisted support workflows, and self-service purchasing.'
  },
  {
    company: 'Smart Joules',
    title: 'Product Manager — IoT & Data Platforms',
    dates: 'Sep 2025 — Nov 2025',
    summary: 'Telemetry ingestion, Grafana observability requirements, and the deJoule fleet firmware-update experience.'
  },
  {
    company: 'Ambee',
    title: 'Product Manager — Developer APIs, Data Solutions & IoT Systems',
    dates: 'Jan 2019 — Aug 2025',
    summary: 'Commercial APIs, gateway and developer products, geospatial maps, enterprise access, academic launch, and IoT data platforms.'
  },
  {
    company: 'Phoenix Robotix (Aurassure & DATOMS)',
    title: 'Associate Project Manager — Smart Cities & IoT Platforms',
    dates: 'Feb 2018 — Dec 2018',
    summary: 'Smart-city monitoring deployments, industrial telemetry requirements, RFP-to-FRS/SRS translation, and EMS/DDS solutioning.'
  }
] as const;

export const independentWork = [
  {
    name: 'PitchPerfect Suite',
    kind: 'Shipped product',
    text: 'An AI-powered SaaS product for preparing pitch decks and communication workflows with LLM-assisted generation.',
    href: 'https://www.getpulsestack.com/',
    visual: '/visuals/pitchperfect.svg'
  },
  {
    name: 'Smart Token Calling Queue',
    kind: 'Independent prototype',
    text: 'A voice-enabled queue announcement and token calling system built for outpatient departments and banks.',
    visual: '/visuals/token-queue.svg'
  },
  {
    name: 'WhatsApp Voice Notifier',
    kind: 'Independent prototype',
    text: 'Appointment reminders and patient follow-up notifications for clinics and diagnostics, using messaging and workflow automation.',
    visual: '/visuals/voice-notifier.svg'
  }
] as const;

export const development = [
  { title: 'Agentic AI & Model Context Protocol (MCP)', detail: 'Production workflows with Claude Code and Codex', year: '2026' },
  { title: 'Enterprise Workflow Automation', detail: 'Production AI agents and automations with n8n', year: '2025' },
  { title: 'Generative AI for Product Managers', detail: 'AI-driven discovery and rapid prototyping', year: '2025' },
  { title: 'Technical Product Management', detail: 'Scrum product ownership, PRD execution, and Agile lifecycle governance', year: '' }
] as const;

// Separately evidenced by the user's Anthropic learning screenshot, not the Nov CV.
export const completedCourses = [
  { title: 'Claude Code 101', issuer: 'Anthropic', date: '01 Nov 2026', details: '12 lessons · 1 quiz · 1.5 hours', visual: '/visuals/claude-code-badge.png' },
  { title: 'Introduction to Claude Cowork', issuer: 'Anthropic', date: '01 Nov 2026', details: '14 lessons · 1 quiz · 2.5 hours', visual: '/visuals/cowork-badge.png' }
] as const;

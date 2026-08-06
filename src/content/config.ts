import { defineCollection, z } from 'astro:content';

// ── Research Areas ──────────────────────────────────────────────
const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    area_slug: z.string(),
    summary: z.string(),

    icon: z.string().default('cpu'),

    objectives: z.array(z.string()).default([]),
    current_research: z.array(z.string()).default([]),

    keywords: z.array(z.string()).default([]),

    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});


// ── Supervisors / Faculty ───────────────────────────────────────
const supervisors = defineCollection({
  type: 'content',
  schema: z.object({

    // Basic Info
    name: z.string(),
    photo: z.string().optional(),
    designation: z.string(),
    department: z.string()
      .default('Department of Computer Science & Engineering'),
    affiliation: z.string()
      .default('FEC CSE Research Lab'),

    // Contact
    email: z.string().optional(),

    // Research
    research_area: z.array(z.string()).default([]),
    research_interests: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),

    research_profile: z.string().optional(),

    // Academic
    education: z.array(z.string()).default([]),
    experience: z.array(z.string()).default([]),

    // Links
    website: z.string().optional(),
    portfolio: z.string().optional(),
    google_scholar: z.string().optional(),
    orcid: z.string().optional(),
    researchgate: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    cv: z.string().optional(),

    // Display
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});


// ── Research Assistants ─────────────────────────────────────────
const researchAssistants = defineCollection({
  type: 'content',

  schema: z.object({

    name: z.string(),
    photo: z.string().optional(),

    designation: z.enum([
      'Research Assistant',
      'Junior Research Assistant'
    ]).default('Junior Research Assistant'),


    department: z.string()
      .default('Computer Science & Engineering'),

    batch: z.string().optional(),

    research_area: z.array(z.string()).default([]),

    research_interests: z.array(z.string()).default([]),

    skills: z.array(z.string()).default([]),

    supervisor: z.string().optional(),

    ongoing_research: z.array(z.string()).default([]),


    education: z.array(z.string()).default([]),


    // Links
    github: z.string().optional(),
    linkedin: z.string().optional(),
    portfolio: z.string().optional(),
    cv: z.string().optional(),

    google_scholar: z.string().optional(),
    orcid: z.string().optional(),
    researchgate: z.string().optional(),


    featured: z.boolean().default(false),
    order: z.number().default(99),

  }),
});


// ── Alumni ──────────────────────────────────────────────────────
const alumni = defineCollection({

  type: 'content',

  schema: z.object({

    name: z.string(),
    photo: z.string().optional(),

    previous_position: z.string(),

    research_area: z.array(z.string()).default([]),

    research_period: z.string(),

    achievements: z.array(z.string()).default([]),


    current_position: z.string().optional(),

    current_organization: z.string().optional(),

    profile_link: z.string().optional(),

    linkedin: z.string().optional(),

    github: z.string().optional(),

    cv: z.string().optional(),

    order: z.number().default(99),

  }),
});


// ── Publications ─────────────────────────────────────────────────
const publications = defineCollection({

  type: 'content',

  schema: z.object({

    title: z.string(),

    authors: z.array(z.string()),

    year: z.number(),

    venue: z.string(),

    type: z.enum([
      'Journal',
      'Conference',
      'Workshop',
      'Preprint'
    ]).default('Conference'),


    status: z.enum([
      'Published',
      'Accepted',
      'Under Review',
      'Ongoing'
    ]).default('Published'),


    research_area: z.array(z.string()).default([]),

    abstract: z.string().optional(),

    pdf: z.string().optional(),

    doi: z.string().optional(),

    code: z.string().optional(),

    dataset: z.string().optional(),

    bibtex: z.string().optional(),

    featured: z.boolean().default(false),

  }),
});


// ── Projects ─────────────────────────────────────────────────────
const projects = defineCollection({

  type:'content',

  schema:z.object({

    title:z.string(),

    description:z.string(),

    research_area:z.array(z.string()).default([]),

    supervisor:z.string().optional(),

    research_assistants:z.array(z.string()).default([]),

    technologies:z.array(z.string()).default([]),

    start_date:z.string().optional(),

    end_date:z.string().optional(),

    status:z.enum([
      'Ongoing',
      'Completed',
      'Future'
    ]).default('Ongoing'),


    github:z.string().optional(),

    demo:z.string().optional(),

    paper:z.string().optional(),

    featured:z.boolean().default(false),

  }),
});


// ── News ─────────────────────────────────────────────────────────
const news = defineCollection({

  type:'content',

  schema:z.object({

    title:z.string(),

    date:z.date(),

    category:z.enum([
      'Research Achievement',
      'New Publication',
      'Award',
      'Seminar',
      'Workshop',
      'Announcement'
    ]).default('Announcement'),


    description:z.string(),

    abstract:z.string().optional(),

    authors:z.array(z.string()).default([]),

    link:z.string().optional(),

    pdf:z.string().optional(),


    image:z.string().optional(),

    featured:z.boolean().default(false),

  }),
});


// ── Events ───────────────────────────────────────────────────────
const events = defineCollection({

  type:'content',

  schema:z.object({

    title:z.string(),

    date:z.date(),

    speaker:z.string().optional(),

    speaker_affiliation:z.string().optional(),

    description:z.string(),

    registration_link:z.string().optional(),

    poster:z.string().optional(),

    upcoming:z.boolean().default(true),

  }),
});


export const collections = {
  research,
  supervisors,
  'research-assistants': researchAssistants,
  alumni,
  publications,
  projects,
  news,
  events,

};
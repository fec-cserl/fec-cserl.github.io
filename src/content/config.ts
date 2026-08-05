import { defineCollection, z } from 'astro:content';

// ── Research Areas ──────────────────────────────────────────────
const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    area_slug: z.string(),
    summary: z.string(),
    icon: z.string().default('cpu'), // simple keyword used to pick an icon
    objectives: z.array(z.string()).default([]),
    current_research: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

// ── People: shared fields ───────────────────────────────────────
const supervisors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    designation: z.string(),
    department: z.string().default('Department of Computer Science'),
    affiliation: z.string().default('FEC CSE Research Lab'),
    email: z.string().optional(),
    research_area: z.array(z.string()).default([]),
    research_interests: z.array(z.string()).default([]),
    education: z.array(z.string()).default([]),
    experience: z.array(z.string()).default([]),
    google_scholar: z.string().optional(),
    orcid: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const researchAssistants = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    designation: z.enum(['Research Assistant', 'Junior Research Assistant']).default('Research Assistant'),
    research_area: z.array(z.string()).default([]),
    supervisor: z.string().optional(),
    research_interests: z.array(z.string()).default([]),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const alumni = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    previous_position: z.string(),
    research_area: z.array(z.string()).default([]),
    research_period: z.string(),
    current_position: z.string().optional(),
    current_organization: z.string().optional(),
    achievements: z.array(z.string()).default([]),
    profile_link: z.string().optional(),
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
    type: z.enum(['Journal', 'Conference', 'Workshop', 'Preprint']).default('Conference'),
    status: z.enum(['Published', 'Accepted', 'Under Review', 'Ongoing']).default('Published'),
    research_area: z.array(z.string()).default([]),
    pdf: z.string().optional(),
    code: z.string().optional(),
    dataset: z.string().optional(),
    doi: z.string().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// ── Projects ─────────────────────────────────────────────────────
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    research_area: z.array(z.string()).default([]),
    supervisor: z.string().optional(),
    research_assistants: z.array(z.string()).default([]),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    status: z.enum(['Ongoing', 'Completed', 'Future']).default('Ongoing'),
    github: z.string().optional(),
    demo: z.string().optional(),
    paper: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// ── News ─────────────────────────────────────────────────────────
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Research Achievement', 'New Publication', 'Award', 'Seminar', 'Workshop', 'Announcement']).default('Announcement'),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// ── Events ───────────────────────────────────────────────────────
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    speaker: z.string().optional(),
    description: z.string(),
    registration_link: z.string().optional(),
    upcoming: z.boolean().default(true),
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

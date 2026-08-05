# Editing this website (no coding needed)

Every piece of content on this site — people, publications, projects, news,
events, research areas — is a plain **Markdown file** with a small block of
fields at the top. You do not need to touch any code to add, edit, or remove
content. (The Decap CMS `/admin` panel that used to be here required a
GitHub OAuth app and a real repo connection that was never finished, so it's
been removed in favor of this simpler, always-working approach.)

## The easiest way to edit: GitHub's website editor

You don't need to install anything.

1. Go to your repository on github.com and open the file you want to change
   (see the map below).
2. Click the pencil icon ("Edit this file") in the top right.
3. Make your changes.
4. Scroll down, add a short commit message, and click **"Commit changes"**.
5. If your site is deployed via GitHub Pages/Actions, it will rebuild and
   go live automatically within a minute or two.

To **add a new person / publication / etc.**, open the relevant folder,
click **"Add file" → "Create new file"**, name it (e.g.
`Jane-Doe.md`), paste in content following the same pattern as an existing
file in that folder, and commit.

To **delete** something, open the file, click the trash icon, and commit.

## Where everything lives

| Content | Folder | Notes |
|---|---|---|
| Supervisors | `src/content/supervisors/` | |
| Research Assistants & Junior Research Assistants | `src/content/research-assistants/` | set `designation` field to either value |
| Alumni | `src/content/alumni/` | |
| Research areas | `src/content/research/` | |
| Publications | `src/content/publications/` | |
| Projects | `src/content/projects/` | |
| News | `src/content/news/` | |
| Events / seminars | `src/content/events/` | |

## Anatomy of a file

Every file has two parts:
- **Front matter** — the fields between `---` lines at the top (name,
  dates, links, etc.)
- **Body text** — everything below the second `---`, written in normal
  Markdown. This becomes the bio/description shown on the page.

Example — a Junior Research Assistant:

```markdown
---
name: "Jane Doe"
designation: "Junior Research Assistant"
research_area:
  - "Computer Vision"
supervisor: "Md. Shamsul Islam"
research_interests:
  - "Image segmentation"
github: "https://github.com/janedoe"
linkedin: "https://linkedin.com/in/janedoe"
featured: false
order: 4
---
A short bio goes here. It can be one or several sentences.
```

Change `designation` to `"Research Assistant"` to move someone into that
group instead — the People page sorts people into sections automatically
based on this field.

## Field reference by content type

### `research-assistants/*.md`
- `name` (required)
- `photo` — optional path/URL to an image
- `designation` — either `"Research Assistant"` or `"Junior Research Assistant"`
- `research_area` — list of areas, e.g. `- "NLP"`
- `supervisor` — name (should match a supervisor's `name`)
- `research_interests` — list of strings
- `github`, `linkedin`, `website` — optional links
- `featured` — `true`/`false`
- `order` — lower numbers appear first

### `alumni/*.md`
- `name` (required)
- `photo` — optional
- `previous_position` (required) — e.g. `"Research Assistant"`
- `research_area` — list
- `research_period` (required) — e.g. `"2022 - 2024"`
- `current_position`, `current_organization` — optional, what they do now
- `achievements` — list of strings
- `profile_link` — optional URL
- `order`

### `supervisors/*.md`
- `name`, `designation`, `department`, `affiliation`, `email`
- `research_area`, `research_interests`, `education`, `experience` — lists
- `google_scholar`, `orcid`, `linkedin`, `website` — optional links
- `featured`, `order`

### `publications/*.md`
- `title`, `authors` (list), `year` (number), `venue`
- `type` — one of `Journal`, `Conference`, `Workshop`, `Preprint`
- `status` — one of `Published`, `Accepted`, `Under Review`, `Ongoing`
- `research_area` — list
- `pdf`, `code`, `dataset`, `doi`, `bibtex` — optional
- `featured`

### `projects/*.md`
- `title`, `description`
- `research_area`, `research_assistants` — lists
- `supervisor`, `start_date`, `end_date` — optional
- `status` — one of `Ongoing`, `Completed`, `Future`
- `github`, `demo`, `paper` — optional
- `featured`

### `news/*.md`
- `title`, `date` (e.g. `2026-08-05`), `description`
- `category` — one of `Research Achievement`, `New Publication`, `Award`, `Seminar`, `Workshop`, `Announcement`
- `image` — optional
- `featured`

### `events/*.md`
- `title`, `date`, `description`
- `speaker` — optional
- `registration_link` — optional
- `upcoming` — `true`/`false`

### `research/*.md`
- `title`, `area_slug`, `summary`
- `icon` — keyword used to pick an icon
- `objectives`, `current_research` — lists
- `featured`, `order`

## Editing locally instead (optional)

If you'd rather work from your own computer:

```bash
git clone <your-repo-url>
cd fec-cserl.github.io
npm install
npm run dev
```

Edit any `.md` file in `src/content/`, save, and the dev server at
`http://localhost:4321` updates live. Commit and push when you're happy.

# Editing this website (no coding needed)

Every piece of content on this site — people, publications, projects, news,
events, research areas — is a plain **Markdown file** with a small block of
fields at the top. You do not need to touch any code to add, edit, or remove
content. (The Decap CMS `/admin` panel that used to be here required a
GitHub OAuth app and a real repo connection that was never finished, so it's
been removed in favor of this simpler, always-working approach.)

## The best way to edit: github.dev (free, in your browser, no install)

For editing anything — text fields, adding new people, uploading images —
the smoothest option is **github.dev**, GitHub's full VS Code editor that
runs entirely in your browser. It's better than the plain file editor
because you get the whole file tree, multi-file editing, drag-and-drop
image uploads, and a proper Markdown preview.

1. Open your repo on github.com.
2. Press the `.` key (period) — or change the URL from `github.com/...` to
   `github.dev/...` — and it opens instantly. No install, no login beyond
   your normal GitHub account.
3. Browse to the file in the left sidebar (see the map below), edit it,
   and save (`Ctrl/Cmd+S`).
4. To upload an image: right-click the target folder (e.g.
   `public/images/people`) → **Upload...** → pick your file.
5. Click the **Source Control** icon (branch icon) in the left sidebar,
   type a short commit message, and click the checkmark to commit — this
   also pushes straight to GitHub.
6. If your site is deployed via GitHub Pages/Actions, it rebuilds and goes
   live automatically within a minute or two.

### Quicker alternative: GitHub's plain web editor

For a single small tweak (e.g. fixing a typo, changing one link), you can
skip github.dev:

1. Open the file on github.com and click the pencil icon ("Edit this
   file").
2. Make your change, scroll down, add a commit message, click **"Commit
   changes"**.

To **add a new person / publication / etc.**, open the relevant folder,
click **"Add file" → "Create new file"**, name it (e.g.
`Jane-Doe.md`), paste in content following the same pattern as an existing
file in that folder, and commit.

To **delete** something, open the file, click the trash icon, and commit.

## Editing images

See `public/images/README.md` for the full image guide, including where
to upload photos and how to point a person/news entry at one. Short
version: upload the image into the matching `public/images/...` folder,
then set the `photo:` (people) or `image:` (news) field in the `.md` file
to `images/<folder>/<your-file>.jpg` (no leading slash).

Demo photos are already in place so you can see the pattern working
end-to-end:
- Supervisors: `src/content/supervisors/Md-shamsul-islam.md` and
  `md-monir.md` → photos at `public/images/people/md-shamsul-islam.jpg`
  and `md-monir.jpg`
- Research Assistant / Junior Research Assistant: all 3 files in
  `src/content/research-assistants/` → photos in `public/images/people/`
- Alumni: both files in `src/content/alumni/` → photos in
  `public/images/people/`
- Director's message (About page): photo set in `src/data/site.yaml`
  under `about.director.photo` → `public/images/people/director.jpg`
- News: `best-paper-award.md` → `public/images/news/best-paper-award-demo.jpg`

Replace any of these with a real photo any time — just upload the new
file and overwrite (or rename) the path in the matching `.md`/`.yaml`
field.

## Editing the Director's message (About page)

This one isn't a file in `src/content/` — it lives in
`src/data/site.yaml`, under `about.director`:

```yaml
director:
  name: "Director's Name"
  designation: "Lab Director"
  photo: "images/people/director.jpg"
  message: |
    Welcome to FEC CSE Research Lab. Replace this placeholder with the
    Director's own welcome message.
```

Edit `name`, `designation`, `message`, and `photo` the same way as any
other file — open `src/data/site.yaml`, edit, commit.

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

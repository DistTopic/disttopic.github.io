---
title: Adding & Editing Pages
layout: default
parent: Guides
nav_order: 1
description: "How to add or edit pages on the DistTopic website directly from GitHub."
permalink: /guides/adding-pages
---

# Adding & Editing Pages
{: .fs-8 }

This site is built with Jekyll and Just the Docs. You can create and edit pages directly from GitHub's web interface — no local setup required.
{: .fs-5 .fw-300 }

---

## Edit an existing page

Every page has an **"Edit this page on GitHub"** link at the bottom. Click it to open the file in GitHub's editor, make your changes, and commit.

## Create a new page

1. Go to the [repository on GitHub](https://github.com/DistTopic/disttopic.github.io)
2. Navigate to the folder where you want to create the page
3. Click **Add file** → **Create new file**
4. Name the file with a `.md` extension (e.g., `my-page.md`)
5. Add the required front matter (see below)
6. Write your content in Markdown
7. Commit to `main` (or create a branch for review)

## Front matter

Every page needs a YAML front matter block at the top. Here are the templates:

### Standalone page

```yaml
---
title: Page Title
layout: default
nav_order: 5
description: "Brief description for SEO."
permalink: /my-page
---
```

### Child page (under a section)

```yaml
---
title: Child Page Title
layout: default
parent: Projects
nav_order: 2
description: "Brief description for SEO."
permalink: /projects/my-child-page
---
```

### Section parent page

```yaml
---
title: Section Name
layout: default
nav_order: 3
has_children: true
description: "Brief description for SEO."
permalink: /section-name
---
```

## Front matter fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Page title shown in navigation and browser tab |
| `layout` | Yes | Always use `default` |
| `nav_order` | Yes | Number controlling position in navigation (lower = higher) |
| `description` | Recommended | Brief description for search engines |
| `permalink` | Recommended | Clean URL path for the page |
| `parent` | If child | Must match the `title` of the parent page exactly |
| `has_children` | If parent | Set to `true` for section pages |
| `nav_exclude` | Optional | Set to `true` to hide from navigation |
| `search_exclude` | Optional | Set to `true` to hide from search |

## Markdown features

This site supports standard GitHub Flavored Markdown plus Just the Docs extensions:

### Callouts

```markdown
{: .note }
> This is a note callout.

{: .warning }
> This is a warning callout.

{: .important }
> This is an important callout.
```

### Buttons

```markdown
[Primary Button](https://example.com){: .btn .btn-primary }
[Default Button](https://example.com){: .btn }
```

### Labels

```markdown
Stable
{: .label .label-green }

Preview
{: .label .label-yellow }

Deprecated
{: .label .label-red }
```

### Tables

Standard Markdown tables are supported:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## File structure

```
disttopic.github.io/
├── index.md              # Homepage
├── about.md              # About page
├── projects/
│   ├── index.md          # Projects section parent
│   └── *.md              # Individual project pages
└── guides/
    ├── index.md          # Guides section parent
    └── *.md              # Individual guide pages
```

## Adding a new project page

1. Create a new file at `projects/my-project.md`
2. Use this template:

```yaml
---
title: My Project Name
layout: default
parent: Projects
nav_order: 2
description: "Short description of the project."
permalink: /projects/my-project
---

# My Project Name

Description of the project...
```

{: .note }
> After committing to `main`, the site rebuilds automatically. Changes appear within 1–2 minutes.

## Security considerations

When adding content, keep these rules in mind:

- **No inline `<script>` tags** — The Content Security Policy blocks inline scripts
- **No external resources** — Only load images from `self`, `img.shields.io`, and `avatars.githubusercontent.com`
- **No `<iframe>` elements** — Frames are blocked by CSP
- **No `<form>` tags** — Form actions are blocked by CSP
- **Use relative links** — Always use relative paths for internal links (e.g., `/projects/my-project`)

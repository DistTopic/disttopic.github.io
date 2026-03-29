---
title: Adding & Editing Pages
description: How to add or edit pages on the DistTopic website directly from GitHub.
---

# Adding & Editing Pages

This site is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/). You can create and edit pages directly from GitHub's web interface — no local setup required.

## Edit an existing page

Every page has an **:material-pencil: Edit this page** button in the top-right corner. Click it to open the file in GitHub's editor, make your changes, and commit.

## Create a new page

1. Go to the [repository on GitHub](https://github.com/DistTopic/disttopic.github.io)
2. Navigate to `docs/` and then to the relevant section folder
3. Click **Add file** → **Create new file**
4. Name the file with a `.md` extension (e.g., `my-page.md`)
5. Add the front matter and content (see below)
6. Commit — the site rebuilds automatically within ~1 minute
7. Add the page to `mkdocs.yml` nav section (see below)

## Front matter

Every page needs a minimal YAML block at the top:

```yaml
---
title: My Page Title
description: Brief description for search engines.
---
```

That's it. Navigation order is controlled by `mkdocs.yml`, not per-file front matter.

## Adding to navigation

After creating a file, add it to the `nav:` section in [`mkdocs.yml`](https://github.com/DistTopic/disttopic.github.io/edit/main/mkdocs.yml):

```yaml
nav:
  - Projects:
      - projects/index.md
      - My New Project: projects/my-new-project.md  # add here
```

The key is the display name, the value is the path relative to `docs/`.

## File structure

```
docs/
├── index.md                    # Homepage
├── about.md                    # About page
├── projects/
│   ├── index.md                # Projects section index
│   └── *.md                    # Individual project pages
└── guides/
    ├── index.md                # Guides section index
    └── *.md                    # Individual guides
```

## Markdown features

### Admonitions (callouts)

```markdown
!!! note
    This is a note.

!!! warning
    This is a warning.

!!! tip "Custom title"
    This is a tip with a custom title.
```

Renders as:

!!! note
    This is a note.

!!! warning
    This is a warning.

### Buttons

```markdown
[Primary Button](https://example.com){ .md-button .md-button--primary }
[Default Button](https://example.com){ .md-button }
```

### Tabbed content

```markdown
=== "Linux / macOS"
    ```bash
    your-command
    ```

=== "Windows"
    ```powershell
    Your-Command
    ```
```

### Grid cards (feature lists)

```markdown
<div class="grid cards" markdown>

- :material-tools: **Feature Name**

    Description of the feature.

- :material-shield: **Another Feature**

    Description of another feature.

</div>
```

### Icons

Use `:material-icon-name:` for [Material icons](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/), e.g. `:material-github:` → :material-github:

## Adding a new project page

Create `docs/projects/my-project.md`:

```markdown
---
title: My Project Name
description: Short description of the project.
---

# My Project Name

Description...
```

Then add to `mkdocs.yml`:

```yaml
nav:
  - Projects:
      - projects/index.md
      - My Project Name: projects/my-project.md
```

## Security considerations

When adding content:

- **No `<script>` tags** — blocked by Content Security Policy
- **No external resources** — only `img.shields.io` and `avatars.githubusercontent.com` images are allowed
- **No `<iframe>` elements** — frames are blocked
- **Use relative links** for internal pages (e.g., `../guides/security.md`)

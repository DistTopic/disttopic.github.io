# DistTopic Website

The official website for the [DistTopic](https://github.com/DistTopic) open source organization, hosted at [disttopic.github.io](https://disttopic.github.io).

## About

This site is built with [Jekyll](https://jekyllrb.com/) and the [Just the Docs](https://just-the-docs.com/) theme. It is deployed automatically to GitHub Pages on every push to `main`.

## Adding or editing content

No local setup is required. Every page has an **"Edit this page on GitHub"** link. To add a new page, create a `.md` file with proper front matter directly from GitHub's web editor.

See the [Adding & Editing Pages guide](https://disttopic.github.io/guides/adding-pages) for full instructions.

## Local development

```bash
# Install Ruby 3.3+ and Bundler
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

## Project structure

```
disttopic.github.io/
├── _config.yml               # Jekyll + Just the Docs configuration
├── _includes/
│   └── head-custom.html      # Security headers (CSP, X-Frame-Options, etc.)
├── _sass/
│   └── color_schemes/
│       └── disttopic-dark.scss  # Catppuccin Mocha dark theme
├── assets/
│   └── images/               # SVG logo and favicon
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml        # Build + deploy to GitHub Pages (on push to main)
│   │   └── ci.yml            # Build validation (on PRs)
│   └── ISSUE_TEMPLATE/
├── index.md                  # Homepage
├── about.md                  # About page
├── projects/                 # Project pages
└── guides/                   # Contributor guides
```

## Security

This site uses a strict Content Security Policy. See [Security Practices](https://disttopic.github.io/guides/security) for details.

To report a vulnerability, use [GitHub Security Advisories](https://github.com/DistTopic/disttopic.github.io/security/advisories/new) — **do not open a public issue**.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Site content is licensed under [MIT](LICENSE). See individual project repositories for their respective licenses.

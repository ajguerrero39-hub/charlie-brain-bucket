# dev|golf

# Brain-Bucket
A practice repo for deployment

### authorship + version

`@ajguerrero39` \| `2026-09-12` \| `GOLF`

### deployments, codebase, & repo features 
  ---------------------------- ----------------------
  PROD codebase                [`main`](URL)
  PROD server                  [GCP](URL)
  DEV codebase                 [`dev`](URL)
  DEV server                   [Render](URL)
  docs                         [`docs/`](https://github.com/ajguerrero39-hub/charlie-brain-bucket/tree/main/public/docs)
  published docs               [GitHub Pages](https://github.com/ajguerrero39-hub/charlie-brain-bucket/deployments/github-pages)
  CI/CD workflow               [`deploy.yml`](https://github.com/ajguerrero39-hub/charlie-brain-bucket/blob/main/.github/deploy-main-to-gcp.yml)
  successful PROD deployment   [GitHub Action](https://github.com/ajguerrero39-hub/charlie-brain-bucket/deployments/github-pages)

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

I have created an architecture that allows for the deployment of this repository through Google Cloud. This is mostly setup so that future projects may follow suit.

### architecture

``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure
```
repo/
├── .github/
│   └── deploy-main-to-gcp.yml
├── docs/
│   └── README.md
├── public/
|    L___ assets/
|    |    L___css/
|    |    |   L___style.css
|    |    L___data/
|    |    |   L___ideas.json
|    |    L___js/
|    |    |   L___admin.js
|    |    |   L___auth-guard.js
|    |    |   L___auth.js
|    |    |   L___content.js
|    |    |   L___form.js
|    |    |   L___main.js
|    |    L___config/
|    |    |   L___AGENTS.md
|    |    |   L___CHARLIE.md
|    |    |   L___CLAUDE.md
|    |    L___docs/
|    |    |   L___sample-content-records.json
|    |    |   L___session-2026-06-09-promtpts-and-overview.md
|    |    L___pages/
|    |    |   L___admin.html
|    |    |   L___auth.html
|    |    |   L___content.html
|    |    |   L___form.html
|    |    L___index.html
├── server/
|    L___ app.js
|    L___ package-lock.json
|    L___ package.json
├── .gitignore
└── 
```

### GCP

external IP: `34.162.8.204`\
Linux user: `ajguerrero39`\
instructor SSH public key installed: `yes`

````

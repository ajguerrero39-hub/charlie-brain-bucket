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
  CI/CD workflow               [`deploy.yml`](URL)
  successful PROD deployment   [GitHub Action](URL)

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

Use `tree` to show your actual project structure.

```
repo/
├── .github/
│   └── deploy-main-to-gcp.yml
├── docs/
│   └── README.md
├── public/
|
├── server/
├── .gitignore
└── ...
```

### GCP

external IP: `34.138.221.123`\
Linux user: `ajguerrero39`\
instructor SSH public key installed: `yes`

````

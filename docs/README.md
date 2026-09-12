# dev|golf

### app


# Brain-Bucket
> short app tagline

### authorship + version

`@ajguerrero39` \| `2026-09-12` \| `GOLF`

### deployments, codebase, & repo features 

  resource                     link
  ---------------------------- ----------------------
  PROD codebase                [`main`](URL)
  PROD server                  [GCP](URL)
  DEV codebase                 [`dev`](URL)
  DEV server                   [Render](URL)
  docs                         [`docs/`]([URL](https://github.com/ajguerrero39-hub/charlie-brain-bucket/tree/main/public/docs))
  published docs               [GitHub Pages](URL)
  CI/CD workflow               [`deploy.yml`](URL)
  successful PROD deployment   [GitHub Action](URL)

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.

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

``` text
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

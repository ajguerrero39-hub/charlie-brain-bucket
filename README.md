# dev|golf

# Brain-Bucket
A practice repo for deployment

### authorship + version

`@ajguerrero39` \| `2026-10-13` \| `HOTEL`

### deployments, codebase, & repo features 
  ---------------------------- ----------------------
| MongoDB connection | [server code](URL) |
| GET all | [endpoint code](URL) |
| GET one | [endpoint code](URL) |
| filtered GET | [endpoint code](URL) |
| POST / create | [endpoint code](URL) |
| PATCH / update | [endpoint code](URL) |
| DELETE | [endpoint code](URL) |
| frontend `fetch()` | [client code](URL) |
| persistent CRUD | [PROD app](URL) |
| HOTEL milestone | [milestone](URL) |
| example issue | [issue 2](https://github.com/ajguerrero39-hub/charlie-brain-bucket/tree/iss02) |
| development branch | [branch](URL) |
| feature → dev | [PR 3](https://github.com/ajguerrero39-hub/charlie-brain-bucket/pull/3) |
| dev → main | [PR 2](https://github.com/ajguerrero39-hub/charlie-brain-bucket/pull/2) |
| PROD deployment | [GitHub Action](URL) |

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

external IP: `34.138.221.123`\
Linux user: `ajguerrero39`\
instructor SSH public key installed: `yes`

````

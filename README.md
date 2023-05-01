# Website of popCHORköln

## Getting started

```bash
# setup environment variables, start off by using .env.example
cp .env.example .env

pnpm install

pnpm run dev
# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## One time project setup

### Github Actions Secrets

-   `CACHIX_AUTH_TOKEN`
-   `NETLIFY_AUTH_TOKEN`
-   `NETLIFY_SITE_ID`
-   `STORYBLOK_ACCESS_TOKEN`

### Netlify project

-   Set site name
-   Lock auto publishing
-   Set up environment variables (see `.env.example`)

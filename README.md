# Website of popCHORköln

## Getting started

```bash
# setup environment variables, start off by using .env.example
cp .env.example .env

pnpm install

# start and setup database
docker compose up -d
pnpm drizzle-kit push:pg

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

### Storyblok space

-   Create space
-   Login with `pnpx storyblok login`
-   Run `pnpm run storyblok:push-components`
-   Create stories

### Supabase project

-   Create database
-   Set up `.env` with `DATABASE_URL` pointing to supabase and run `pnpm drizzle-kit push:pg`

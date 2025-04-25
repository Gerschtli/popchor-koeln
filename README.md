# Website of popCHORköln

## Getting started

```sh
# setup environment variables, start off by using .env.example
cp .env.example .env

pnpm install

pnpm run dev
# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

**Note:** pnpm with v8 and nodejs with v20 need to be installed.

### Storyblok

Start the dev server with `pnpm run dev` and log into [Storyblok](https://app.storyblok.com/). Make sure to select the
Dev Preview in the visual editor.

To pull the component configuration into this project (this automatically regenerates the typescript type definitions):

```sh
# sometimes a manual logout is necessary, even if you are logged in already
pnpx storyblok logout

# login with storyblok credentials and select "eu" as region
pnpx storyblok login

# download component definitions (stored in components.227856.json) and update ts
# definitions (src/lib/component-types-storyblok.d.ts)
pnpm run storyblok:pull-components
```

When you need to modify `components.227856.json` manually, you can push the changes:

```sh
# upload component definitions
pnpm run storyblok:push-components

# always pull the latest state afterwards to ensure that the update is reflected
# correctly in the code
pnpm run storyblok:pull-components
```

## One time project setup

### Github Actions Secrets

- `CACHIX_AUTH_TOKEN`
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`
- `STORYBLOK_ACCESS_TOKEN`

### Netlify project

- Set site name
- Lock auto publishing
- Set up environment variables (see `.env.example`)

### Storyblok space

- Create space
- Login with `pnpx storyblok login`
- Run `pnpm run storyblok:push-components`
- Create stories

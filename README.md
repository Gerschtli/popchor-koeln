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

**Note:** pnpm with v8 and nodejs with v21 need to be installed.

### Storyblok

For easier development, create `static/editor.html` with the following content:

```html
<!doctype html>
<html>
    <head>
        <title>Storyblok Admin</title>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript">
            STORYBLOK_PREVIEW_URL = 'http://localhost:5173/';
        </script>
        <script src="https://app.storyblok.com/f/app-latest.js" type="text/javascript"></script>
    </body>
</html>
```

When the dev server is running (`pnpm run dev`), open <http://localhost:5173/editor.html> and log in with the usual
credentials.

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

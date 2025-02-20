<script lang="ts">
    import { browser } from '$app/environment';
    import { initNavigationModal } from '$lib/modal';
    import '../app.postcss';
    import Footer from './Footer.svelte';
    import GigPopup from './GigPopup.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    export let data;

    initNavigationModal();
</script>

<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
</svelte:head>

<GigPopup />

<Header />

<Navigation navigationItems={data.navigationItems} />

<main>
    <slot />
</main>

<Footer />

{#if browser}
    <div data-testid="js-loaded"></div>
{/if}

<script lang="ts">
    import '../app.postcss';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let openNavigation: () => void;
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

<Header {openNavigation} />

<Navigation bind:openNavigation />

<main>
    <slot />
</main>

<Footer />

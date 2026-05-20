<script lang="ts">
    import '../app.css';
    import Footer from './Footer.svelte';
    import GigPopup from './GigPopup.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let { data, children } = $props();
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
    {@render children?.()}
</main>

<Footer />

<script lang="ts">
    import { page } from '$app/stores';
    import Section from '$lib/components/Section.svelte';

    $: isNotFoundError = $page.status === 404;
    $: title = isNotFoundError ? 'Seite nicht gefunden!' : 'Unerwarteter Fehler!';
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Section {title}>
    <p class="text-neutral-600">
        {#if isNotFoundError}
            Diese Seite haben wir nicht gefunden, vielleicht findest du, was du gesucht hast, auf
            <a href="/" class="text-blue-500 hover:text-blue-700 focus:text-blue-700">unserer Startseite</a>!
        {:else}
            Leider ist ein unerwarteter Fehler aufgetreten, das tut uns leid! Bitte versuche es später noch einmal. Wenn
            das Problem weiterhin besteht, kontaktiere uns gerne unter
            <a href="mailto:technik@popchor-koeln.de" class="text-blue-500 hover:text-blue-700 focus:text-blue-700"
                >technik@popchor-koeln.de</a
            >.
        {/if}
    </p>
</Section>

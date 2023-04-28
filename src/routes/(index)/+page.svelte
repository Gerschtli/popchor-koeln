<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import GigList from '$lib/components/gigs/GigList.svelte';
    import { gigs } from '$lib/data/gigs';
    import { ChevronRight } from 'lucide-svelte';
    import type { PageData } from './$types';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';

    export let data: PageData;

    let textExpand = false;

    const gigCount = 6;
    const now = Date.now();
    const gigsIndexPage = gigs.filter((gig) => gig.date.getTime() >= now).slice(0, gigCount);
</script>

<svelte:head>
    <title>Startseite - popCHORköln</title>
    <meta
        name="description"
        content="Der popCHORköln, ehemals d'acCHORd, besteht aus rund 60 Sänger:innen aus Köln und Umgebung."
    />
</svelte:head>

<Section id="chor" title="Chor" classContent="space-y-4">
    <p class="text-neutral-600">
        Der <strong>popCHORköln</strong>, ehemals <strong>d'acCHORd</strong>, besteht aus rund 60 Sänger:innen aus Köln
        und Umgebung. Das Repertoire umfasst hauptsächlich Popmusik in anspruchsvollen A-cappella-Arrangements, aber
        auch speziell für den Chor arrangierte, weniger bekannte Stücke aus Genres abseits des Mainstreams, Rock- und
        Gospelsongs sowie Werke der Klassik.
    </p>

    <div class="flex justify-end">
        <button
            class="flex text-accent hover:text-accent-dark focus:text-accent-dark"
            on:click={() => (textExpand = true)}
            class:hidden={textExpand}>mehr lesen&hellip; <ChevronRight class="inline" size={20} /></button
        >
    </div>

    <p class="text-neutral-600" class:hidden={!textExpand}>
        Die Idee, einen Chor zu gründen, entstand 2013 auf einer WG-Party. Kurz darauf fand unter der Leitung von Niklas
        Genschel die erste Probe statt. Es entstand ein spannendes und stetig wachsendes Chor-Projekt mit zahlreichen
        Konzerten, diversen Medienauftritten sowie aufwendigen Film- und Videoproduktionen. Inzwischen zählt der Chor zu
        einem der renommiertesten Laienensembles für Chor- und Popmusik in Köln und Umgebung. Das zeigt sich auch im
        Namen: 2023 benannte sich die Gruppe in <strong>popCHORköln</strong> um. Auf der Bühne verbindet der Chor anspruchsvolle
        Songs mit lockeren und authentischen Performances und begeistert damit ein seit Jahren wachsendes Publikum.
    </p>
</Section>

<Section id="chorleiter" title="Chorleiter">
    <p class="text-neutral-600">
        Niklas Genschel ist Schlagzeuger, Musikpädagoge und Chorleiter. Während seines Studiums (Jazz- und Popschlagzeug
        in Köln und Arnheim) belegte er auch einige Semester Dirigieren und Chorleitung und sang selbst im Kammerchor
        der Musikhochschule Köln unter der Leitung von Marcus Creed (SWR Vokalensemble Stuttgart). Wenn er nicht gerade
        mit dem <strong>popCHORköln</strong> probt oder für ihn arrangiert, tobt er sich in weiteren Chor-Projekten (u. a.
        Popchor der Technischen Hochschule Köln, Vokalorchester NRW) aus oder tourt mit seiner Band Sohnemann durch Deutschland.
    </p>
</Section>

<Section id="termine" title="Termine">
    <GigList gigs={gigsIndexPage} />

    <div class="mt-2 flex items-center justify-end">
        <a
            class="inline-flex text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700"
            href="/termine"
            data-sveltekit-preload-data
        >
            Zu allen Termine <ChevronRight class="inline" size={20} />
        </a>
    </div>
</Section>

<Section id="kontakt" title="Kontakt" classContent="space-y-6">
    <NewsletterForm {data} />

    <ContactForm {data} />
</Section>

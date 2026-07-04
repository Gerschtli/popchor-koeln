<script lang="ts">
    import RichTextSimple from '$lib/components/storyblok/richtext/RichTextSimple.svelte';
    import type { PageData } from './$types';

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    const id = 'audition';
</script>

<div {id}>
    <div class="flex flex-col gap-6 sm:flex-row">
        <div class="flex-1 rounded-lg bg-gray-50 p-4 shadow-sm">
            <h3 class="font-heading mb-4 text-lg font-bold">Wir bieten...</h3>
            <ul class="space-y-2 text-neutral-600">
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Freundschaftliche, zielorientierte Probenatmosphäre</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Vielseitiges A-capella-Repertoire</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Eigene Arrangements</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Auftritte auf großen Bühnen</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Professionelle Coachings</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Teilnahme an Festivals und Wettbewerben</span>
                </li>
            </ul>
        </div>

        <div class="hidden w-px bg-gradient-to-b from-neutral-300 to-neutral-200 sm:block"></div>

        <div class="flex-1 rounded-lg bg-gray-50 p-4 shadow-sm">
            <h3 class="font-heading mb-4 text-lg font-bold">Wir wünschen uns...</h3>
            <ul class="space-y-2 text-neutral-600">
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Aktives Einbringen in das Chorleben</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Erfahrung mit Rhythmus und Gesang</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Wandelbare Stimme für variierende Stile</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Engagement und Zuverlässigkeit</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Eigenständige Vorbereitung von Stücken</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span>Regelmäßige Teilnahme an Proben und Auftritten</span>
                </li>
            </ul>
        </div>
    </div>

    <div class="mt-6">
        <RichTextSimple content={data.storyHome.content.auditionText} />
        {#if data.storyHome.content.showAuditionLink}
            <a
                href={data.storyHome.content.auditionLink?.url}
                target="_blank"
                rel="noopener noreferrer"
                class="
        bg-accent hover:bg-accent-dark mt-6 flex w-full items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-100
        ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
                Jetzt bewerben!
            </a>
        {/if}
    </div>
</div>

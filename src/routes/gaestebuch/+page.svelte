<script lang="ts">
    import { enhance } from '$app/forms';
    import Section from '$lib/components/Section.svelte';
    import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
    import TextboxMultiline from '$lib/components/forms/TextboxMultiline.svelte';
    import { superFormBuilder } from '$lib/forms';
    import StoryblokInit from '$lib/storyblok/StoryblokInit.svelte';
    import { formatDate } from '$lib/utils';
    import { renderRichText } from '@storyblok/svelte';
    import Pagination from './Pagination.svelte';

    export let data;

    const { form: formData, status } = superFormBuilder(data.form);
</script>

<StoryblokInit story={data.story} />

<Section title="Gästebuch">
    <div class="space-y-4">
        <div class="space-y-2 [&>p]:text-neutral-600">
            <h3 class="font-heading text-lg font-bold">Neuen Eintrag verfassen</h3>

            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html renderRichText(data.story.content.contactText)}

            <form class="space-y-3" method="POST" use:enhance>
                <TextboxMultiline form={formData} label="Dein Eintrag" field="message" name="message" class="h-48" />

                <SubmitButton status={$status} text="Senden" />
            </form>
        </div>

        <Pagination {data} id={true} />

        {#each data.entries as { message, timestamp }}
            <hr class="mx-16 border-slate-300" />

            <div class="space-y-1">
                <p class="text-right text-xs text-neutral-500">{formatDate(timestamp)}</p>
                <p class="text-neutral-600">
                    {#each message.replaceAll('\r', '').split('\n') as line}
                        {line}<br />
                    {/each}
                </p>
            </div>
        {/each}

        <Pagination {data} />
    </div>
</Section>

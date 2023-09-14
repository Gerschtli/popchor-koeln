<script lang="ts">
    import Checkbox from '$lib/components/forms/Checkbox.svelte';
    import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
    import Textbox from '$lib/components/forms/Textbox.svelte';
    import { superFormBuilder } from '$lib/forms';
    import { renderRichText } from '@storyblok/svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    const id = 'newsletter';
    const { form, status } = superFormBuilder(data.formNewsletter);
</script>

<div {id} class="space-y-2 [&>p]:text-neutral-600">
    <h3 class="font-heading text-lg font-bold">Newsletter</h3>

    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html renderRichText(data.storyHome.content.newsletterText)}

    <form class="space-y-3" method="POST" action="?/newsletter#{id}" use:form.enhance>
        <Textbox {form} field="email" name="email" type="email" label="Deine Email" />

        <Checkbox {form} field="acceptTerms" name="acceptTerms">
            Ich stimme zu, dass meine E-Mail-Adresse genutzt werden darf, um mir werbliche E-Mails und Newsletter zu
            schicken. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden kann.
        </Checkbox>

        <SubmitButton status={$status} text="Abonnieren" />
    </form>
</div>

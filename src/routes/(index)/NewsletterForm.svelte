<script lang="ts">
    import { enhance } from '$app/forms';
    import Checkbox from '$lib/components/forms/Checkbox.svelte';
    import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
    import Textbox from '$lib/components/forms/Textbox.svelte';
    import type { FormStatus } from '$lib/types';
    import type { ActionData } from './$types';

    export let form: ActionData;

    const id = 'newsletter';
    let status: FormStatus = 'ready';

    $: if (form?.newsletter?.success) status = 'success';
</script>

<div {id} class="space-y-2">
    <h3 class="font-heading text-lg font-bold">Newsletter</h3>

    <p class="text-neutral-600">
        Trage dich in unseren Newsletter ein und bleibe so immer auf dem neusten Stand zu unseren Konzerten, Videos und
        Aktivitäten!
    </p>

    <form
        class="space-y-3"
        method="POST"
        action="?/newsletter#{id}"
        use:enhance={() => {
            status = 'loading';

            return async ({ result, update }) => {
                status = 'ready';
                if (result.status === 500) {
                    status = 'error';
                }

                return await update();
            };
        }}
    >
        <Textbox
            label="Deine Email"
            name="email"
            type="email"
            required={true}
            value={form?.newsletter?.data.email}
            errors={form?.newsletter?.errors?.email}
            errorMessage="Bitte trage deine Email Adresse ein."
        />

        <Checkbox
            label="Ich stimme zu, dass meine E-Mail-Adresse genutzt werden darf, um mir werbliche E-Mails und Newsletter zu schicken. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden kann."
            name="acceptTerms"
            screenReaderText="Für Newsletter eintragen"
            value={form?.newsletter?.data.acceptTerms}
            errors={form?.newsletter?.errors?.acceptTerms}
        />

        <SubmitButton {status} text="Abonnieren" />
    </form>
</div>

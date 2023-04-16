<script lang="ts">
    import { enhance } from '$app/forms';
    import Checkbox from '$lib/components/forms/Checkbox.svelte';
    import Select from '$lib/components/forms/Select.svelte';
    import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
    import Textbox from '$lib/components/forms/Textbox.svelte';
    import TextboxMultiline from '$lib/components/forms/TextboxMultiline.svelte';
    import type { FormStatus } from '$lib/types';
    import type { ActionData } from './$types';

    export let form: ActionData;

    const id = 'kontaktformular';
    let status: FormStatus = 'ready';

    $: if (form?.contact?.success) status = 'success';
</script>

<div {id} class="space-y-2">
    <h3 class="font-heading text-lg font-bold">Kontaktformular</h3>

    <p class="text-neutral-600">
        Sei es Lob, Kritik, eine Auftrittsanfrage oder einfach so - schreibt uns einfach über unser Kontaktformular. Wir
        freuen uns auf eure Nachrichten!
    </p>

    <p class="text-neutral-600">
        Bist du ein*e erfahrene*r Sänger*in und hast Lust auf intensive Chorarbeit? Schreib uns:
    </p>

    <form
        class="space-y-3"
        method="POST"
        action="?/contact#{id}"
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
            label="Dein Name"
            name="name"
            type="text"
            required={true}
            value={form?.contact?.data.name}
            errors={form?.contact?.errors?.name}
            errorMessage="Bitte trage deinen Namen ein."
        />

        <Textbox
            label="Deine Email"
            name="email"
            type="email"
            required={true}
            value={form?.contact?.data.email}
            errors={form?.contact?.errors?.email}
            errorMessage="Bitte trage deine Email Adresse ein."
        />

        <Select
            label="Betreff"
            name="subject"
            required={true}
            value={form?.contact?.data.subject}
            errors={form?.contact?.errors?.subject}
            errorMessage="Bitte wähle einen Betreff aus."
            options={['Lob und Kritik', 'Mitsingen', 'Anfrage', 'Sonstiges']}
        />

        <TextboxMultiline
            label="Deine Nachricht"
            name="message"
            required={true}
            value={form?.contact?.data.message}
            errors={form?.contact?.errors?.message}
            errorMessage="Bitte trage deine Nachricht ein."
        />

        <Checkbox
            label="Ja, bitte trage mich auch in euren Newsletter ein. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden kann."
            name="newsletter"
            screenReaderText="Für Newsletter eintragen"
            value={form?.contact?.data.newsletter}
            errors={form?.contact?.errors?.newsletter}
        />

        <SubmitButton {status} text="Senden" />
    </form>
</div>

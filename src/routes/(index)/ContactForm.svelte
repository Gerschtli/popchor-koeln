<script lang="ts">
    import Checkbox from '$lib/components/forms/Checkbox.svelte';
    import Select from '$lib/components/forms/Select.svelte';
    import SubmitButton from '$lib/components/forms/SubmitButton.svelte';
    import Textbox from '$lib/components/forms/Textbox.svelte';
    import TextboxMultiline from '$lib/components/forms/TextboxMultiline.svelte';
    import { superFormBuilder } from '$lib/forms';
    import type { PageData } from './$types';

    export let data: PageData;

    const id = 'kontaktformular';
    const subjectOptions = ['Lob und Kritik', 'Mitsingen', 'Anfrage', 'Sonstiges'];
    const { form, status } = superFormBuilder(data.formContact);
</script>

<div {id} class="space-y-2">
    <h3 class="font-heading text-lg font-bold">Kontaktformular</h3>

    <p class="text-neutral-600">
        Sei es Lob, Kritik, eine Auftrittsanfrage oder einfach so - schreibt uns einfach über unser Kontaktformular. Wir
        freuen uns auf eure Nachrichten!
    </p>

    <p class="text-neutral-600">
        Bist du ein:e erfahrene:r Sänger:in und hast Lust auf intensive Chorarbeit? Schreib uns:
    </p>

    <form class="space-y-3" method="POST" action="?/contact#{id}" use:form.enhance>
        <Textbox {form} field="name" name="name" type="text" label="Dein Name" />

        <Textbox {form} field="email" name="email" type="email" label="Deine Email" />

        <Select {form} field="subject" name="subject" label="Betreff" options={subjectOptions} />

        <TextboxMultiline {form} label="Deine Nachricht" field="message" name="message" />

        <Checkbox {form} field="newsletter" name="newsletter" screenReaderText="Für Newsletter eintragen">
            Ja, bitte trage mich auch in euren Newsletter ein. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden
            kann.
        </Checkbox>

        <SubmitButton status={$status} text="Senden" />
    </form>
</div>

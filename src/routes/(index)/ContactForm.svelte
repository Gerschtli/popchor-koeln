<script lang="ts">
    import { sendToApi } from '$lib/api';
    import type { FormStatus } from '$lib/types';
    import type { RequestBody } from '../api/contact-form/+server';
    import Checkbox from './Checkbox.svelte';
    import SubmitButton from './SubmitButton.svelte';

    let name: string;
    let email: string;
    let subject: string;
    let message: string;
    let newsletter = false;

    let status: FormStatus = 'ready';

    const onSubmit = async () => {
        status = 'loading';

        var body = {
            name,
            email,
            subject,
            message,
            newsletter,
        } satisfies RequestBody;

        try {
            await sendToApi('/api/contact-form', body);

            status = 'success';
        } catch (e) {
            status = 'error';
        }
    };
</script>

<div class="space-y-2">
    <h3 class="font-heading text-lg font-bold">Kontaktformular</h3>

    <p class="text-neutral-600">
        Sei es Lob, Kritik, eine Auftrittsanfrage oder einfach so - schreibt uns einfach über unser Kontaktformular. Wir
        freuen uns auf eure Nachrichten!
    </p>

    <p class="text-neutral-600">
        Habt ihr bereits Chorerfahrung und Interesse bei uns mitzusingen? Auch dann könnt ihr uns gerne schreiben,
        allerdings sind wir momentan in den Frauenstimmen voll besetzt und können euch nur für unser nächstes Vorsingen
        vormerken. In den Männerstimmen gibt es noch das ein oder andere Plätzchen 🙂
    </p>

    <form class="space-y-3" on:submit|preventDefault={onSubmit}>
        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Dein Name:</span>
            <input
                type="text"
                name="name"
                bind:value={name}
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Deine Email:</span>
            <input
                type="email"
                name="email"
                bind:value={email}
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Betreff:</span>
            <select
                name="subject"
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
                bind:value={subject}
            >
                <option value="Lob und Kritik">Lob und Kritik</option>
                <option value="Mitsingen">Mitsingen</option>
                <option value="Anfrage">Anfrage</option>
                <option value="Sonstiges">Sonstiges</option>
            </select>
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Deine Nachricht:</span>
            <textarea
                name="message"
                bind:value={message}
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex items-center gap-4">
            <Checkbox bind:enabled={newsletter} screenReaderText="Für Newsletter eintragen" />

            <span class="text-sm text-slate-700">
                Ja, bitte trage mich auch in euren Newsletter ein. Ich weiß, dass ich mich jederzeit vom Verteiler
                abmelden kann.
            </span>
        </label>

        <SubmitButton {status} text="Senden" />
    </form>
</div>

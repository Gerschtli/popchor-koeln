<script lang="ts">
    import { sendToApi } from '$lib/api';
    import type { FormStatus } from '$lib/types';
    import type { RequestBody } from '../api/newsletter-form/+server';
    import Checkbox from './Checkbox.svelte';
    import SubmitButton from './SubmitButton.svelte';

    let email: string;
    let acceptTerms = false;
    let status: FormStatus = 'ready';

    const onSubmit = async () => {
        if (!acceptTerms) {
            return;
        }

        status = 'loading';

        const body = {
            email,
            acceptTerms,
        } satisfies RequestBody;

        try {
            await sendToApi('/api/newsletter-form', body);

            status = 'success';
        } catch (e) {
            status = 'error';
        }
    };
</script>

<div class="space-y-2">
    <h3 class="font-heading text-lg font-bold">Newsletter</h3>

    <p class="text-neutral-600">
        Trage dich in unseren Newsletter ein und bleibe so immer auf dem neusten Stand zu unseren Konzerten, Videos und
        Aktivitäten!
    </p>

    <form class="space-y-3" on:submit|preventDefault={onSubmit}>
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

        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex items-center gap-4">
            <Checkbox bind:enabled={acceptTerms} screenReaderText="Für Newsletter eintragen" />

            <span class="text-sm text-slate-700">
                Ich stimme zu, dass meine E-Mail-Adresse genutzt werden darf, um mir werbliche E-Mails und Newsletter zu
                schicken. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden kann.
            </span>
        </label>

        <SubmitButton disabled={!acceptTerms} {status} text="Abonnieren" />
    </form>
</div>

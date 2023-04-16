<script lang="ts">
    import LogoDacSvg from '$lib/assets/LogoDacSvg.svelte';
    import LogoPopchorSvg from '$lib/assets/LogoPopchorSvg.svelte';
    import imageHeader160 from '$lib/assets/header-160px.png';
    import imageHeader240 from '$lib/assets/header-240px.png';
    import imageHeader320 from '$lib/assets/header-320px.png';
    import { Menu } from 'lucide-svelte';

    export let openNavigation: () => void;
</script>

<header>
    <div class="container relative mx-auto p-8 pb-4">
        <a href="/">
            <h1 class="flex flex-col items-center space-y-4 font-heading text-4xl font-bold">
                <LogoDacSvg class="h-20" />
                <small class="block text-2xl">heißt jetzt</small>
                <LogoPopchorSvg class="h-24" />
            </h1>
        </a>

        <button aria-label="Menü öffnen" class="absolute right-6 top-6 p-2" on:click={openNavigation}>
            <Menu class="text-accent" size={32} />
        </button>
    </div>

    <div class="flex h-[160px] justify-center sm:h-[240px] md:h-[320px]">
        <picture>
            <source media="(max-width: 639px)" srcset="{imageHeader160} 1x, {imageHeader320} 2x" />
            <source media="(min-width: 640px) and (max-width: 767px)" srcset={imageHeader240} />
            <source media="(min-width: 768px)" srcset={imageHeader320} />
            <img src={imageHeader320} alt="Header Bild von dem gesamten Chor" class="h-full object-cover" />
        </picture>
    </div>
</header>

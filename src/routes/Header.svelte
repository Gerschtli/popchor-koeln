<script lang="ts">
    import LogoDacSvg from '$lib/assets/LogoDacSvg.svelte';
    import LogoPopchorSvg from '$lib/assets/LogoPopchorSvg.svelte';
    import imageHeader160Png from '$lib/assets/header.png?h=160&format=png&imagetools';
    import imageHeader160Webp from '$lib/assets/header.png?h=160&format=webp&imagetools';
    import imageHeader240Png from '$lib/assets/header.png?h=240&format=png&imagetools';
    import imageHeader240Webp from '$lib/assets/header.png?h=240&format=webp&imagetools';
    import imageHeader320Png from '$lib/assets/header.png?h=320&format=png&imagetools';
    import imageHeader320Webp from '$lib/assets/header.png?h=320&format=webp&imagetools';
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

        <button
            aria-label="Menü öffnen"
            class="absolute right-6 top-6 p-2 text-accent focus-within:text-accent-dark hover:text-accent-dark"
            on:click={openNavigation}
        >
            <Menu size={32} />
        </button>
    </div>

    <div class="flex h-[160px] justify-center sm:h-[240px] md:h-[320px]">
        <picture>
            <source
                media="(max-width: 639px)"
                srcset="{imageHeader160Webp} 1x, {imageHeader320Webp} 2x"
                type="image/webp"
            />
            <source media="(min-width: 640px) and (max-width: 767px)" srcset={imageHeader240Webp} type="image/webp" />
            <source media="(min-width: 768px)" srcset={imageHeader320Webp} type="image/webp" />

            <source
                media="(max-width: 639px)"
                srcset="{imageHeader160Png} 1x, {imageHeader320Png} 2x"
                type="image/png"
            />
            <source media="(min-width: 640px) and (max-width: 767px)" srcset={imageHeader240Png} type="image/png" />
            <source media="(min-width: 768px)" srcset={imageHeader320Png} type="image/png" />

            <img src={imageHeader320Png} alt="Header Bild von dem gesamten Chor" class="h-full object-cover" />
        </picture>
    </div>
</header>

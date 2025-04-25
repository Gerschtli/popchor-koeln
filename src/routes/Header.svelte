<script lang="ts">
    import LogoSmallPopchorSvg from '$lib/assets/LogoSmallPopchorSvg.svelte';
    import imageHeader160Png from '$lib/assets/header.png?h=160&format=png&imagetools';
    import imageHeader160Webp from '$lib/assets/header.png?h=160&format=webp&imagetools';
    import imageHeader240Png from '$lib/assets/header.png?h=240&format=png&imagetools';
    import imageHeader240Webp from '$lib/assets/header.png?h=240&format=webp&imagetools';
    import imageHeader320Png from '$lib/assets/header.png?h=320&format=png&imagetools';
    import imageHeader320Webp from '$lib/assets/header.png?h=320&format=webp&imagetools';
    import { getNavigationModal } from '$lib/modal';
    import { Menu } from 'lucide-svelte';

    const navigationModal = getNavigationModal();
    const openNavigation = navigationModal.open;
</script>

<header>
    <div class="relative container mx-auto flex justify-center pt-8">
        <h1>
            <a href="/" class="relative">
                <LogoSmallPopchorSvg class="xs:h-48 h-36" />
                <div class="sr-only">popCHORköln</div>
            </a>
        </h1>

        <button
            aria-label="Menü öffnen"
            class="text-accent focus-within:text-accent-dark hover:text-accent-dark absolute top-6 right-6 p-2"
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

<script lang="ts">
    import { Facebook, Instagram, Mail, Youtube } from 'lucide-svelte';
    import SocialLink from './SocialLink.svelte';
</script>

<footer class="border-t border-slate-500">
    <div class="container mx-auto flex items-center justify-between gap-y-4 p-8 sm:px-12 lg:px-20">
        <div class="flex-1 sm:-order-1">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/impressum">Impressum</a>
        </div>

        <div class="flex justify-center gap-4">
            <SocialLink label="Facebook" link="https://www.facebook.com/popchorkoeln/" icon={Facebook} />
            <SocialLink label="Email" link="mailto:hallo@popchor-koeln.de" icon={Mail} />
            <SocialLink label="Youtube" link="https://www.youtube.com/@popchorkoeln" icon={Youtube} />
            <SocialLink label="Instagram" link="https://www.instagram.com/popchorkoeln/" icon={Instagram} />
        </div>

        <div class="hidden sm:block sm:flex-1" />
    </div>
</footer>

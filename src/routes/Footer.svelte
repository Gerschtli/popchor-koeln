<script lang="ts">
    import SpotifyLogo from '$lib/assets/SpotifyLogo.svelte';
    import { Facebook, Instagram, Mail, Youtube } from 'lucide-svelte';
    import SocialLink from './SocialLink.svelte';
</script>

<footer class="border-t border-slate-500">
    <div class="container mx-auto flex flex-col items-center justify-center gap-y-4 p-4 sm:flex-row sm:px-12 lg:px-20">
        <div class="xs:gap-4 flex justify-center gap-2">
            <SocialLink label="Facebook" link="https://www.facebook.com/popchorkoeln/" icon={Facebook} />
            <SocialLink label="Email" link="mailto:hallo@popchor-koeln.de" icon={Mail} />
            <SocialLink label="Youtube" link="https://www.youtube.com/@popchorkoeln" icon={Youtube} />
            <SocialLink label="Instagram" link="https://www.instagram.com/popchorkoeln/" icon={Instagram} />
            <SocialLink
                label="Spotify"
                link="https://open.spotify.com/intl-de/artist/19H5wDzTqtIbb0Y4CT9qCE?si=-fWY9Ht_QNmiaknfWNWCZQ"
                icon={SpotifyLogo}
            />
        </div>
    </div>
    <div
        class="container mx-auto flex flex-col items-center justify-center gap-y-4 p-4 text-center sm:flex-row sm:px-12 lg:px-20"
    >
        <div class="flex-1 sm:-order-1">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/impressum">Impressum</a>
        </div>

        <div class="flex-1 sm:-order-2">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/satzung">Satzung</a>
        </div>

        <div class="flex-1 sm:-order-3">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/datenschutz">Datenschutz</a>
        </div>
    </div>
</footer>

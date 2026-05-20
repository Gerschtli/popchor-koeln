<script lang="ts">
    interface Props {
        size: number;
    }

    let { size }: Props = $props();
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="5.2" width="19" height="13.6" rx="3" stroke="currentColor" stroke-width="2" fill="none" />
    <path d="M10 8.7l5 3.4-5 3.4V8.7z" fill="currentColor" />
</svg>

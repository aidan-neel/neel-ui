<script lang="ts">
    export let name: string;

    const title = `${name} | neel/ui`
    const description = "Make frontend development a breeze with Neel UI, super accessible and customizable components that you can copy and paste into your SvelteKit apps."
    const imageUrl = "https://github.com/aidan-neel/neel-ui/blob/main/src/lib/assets/hero.png"
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
</svelte:head>
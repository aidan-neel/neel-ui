<script lang="ts">
    export let name: string;


    const title = `${name.charAt(0).toUpperCase() + name.slice(1)} | Neel-UI`
    const description = "The interactivity of primitives with the styling of a design system, Neel UI is a collection of components that are easy to use and customize."
    const imageUrl = "https://github.com/aidan-neel/neel-ui/blob/main/banner.png"
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
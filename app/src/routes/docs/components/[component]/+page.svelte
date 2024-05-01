<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
	import Seo from '$lib/seo.svelte'

    export let data;
    $: component = data.component;

    $: hash = $page.url.hash;
	$: pageName = $page.url.pathname

	const sanitizeComponent = (name: string) => {
        return name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    // Listen for any changes in the hash part of the URL
    onMount(() => {
        window.addEventListener(
            "hashchange",
            function () {
                // Extract the hash, removing the '#' symbol
                const hash = window.location.hash.substring(1);

                // Use the hash to find the corresponding element
                const element = document.getElementById(hash);
                if (element) {
                    // Scroll to the element smoothly
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            },
            false,
        );
    });
</script>

{#key $page.url.pathname}
	<Seo name={sanitizeComponent($page.url.pathname.split("/").pop())} />
{/key}

<svelte:component this={component} />

<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    export let data;
    $: component = data.component;

    $: hash = $page.url.hash;

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

<svelte:component this={component} />

<script>
    import "../app.pcss";
    import "$library/library.css";
    import Navbar from "$lib/docs/navbar.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { lightOrDarkMode } from "$lib/stores";

    $: pathname = $page.url.pathname;

    onMount(() => {
        const lightOrDarkModeLs =
            localStorage.getItem("theme") === "dark" ? "dark" : "light";
        lightOrDarkMode.set(lightOrDarkModeLs);
        document.body.classList.add(lightOrDarkModeLs);
    });
</script>

<main
    class="w-screen h-screen {pathname === '/'
        ? ''
        : 'px-5 pt-28'} relative flex items-start flex-row justify-center bg-background overflow-x-hidden"
>
    <slot />
</main>

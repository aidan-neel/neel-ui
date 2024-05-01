<script lang="ts">
    import { fade } from "svelte/transition";
    import { writable } from "svelte/store";
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";

    export let name: string;
    export let key: string;
    let className: string | undefined = undefined;
    export { className as class };

    // A local store or variable to control the visibility
    let isVisible = writable(true);

    function toggleVisibility() {
        isVisible.update((n) => !n); // Toggle visibility
        // Assuming you have some method to update the global state as well
        $globalStateStore[name][key].open = false;
    }
</script>

<div
    transition:fade={{ duration: 70 }}
    class={cn(
        "w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70 z-40 flex items-center justify-center backdrop-blur-[1px]",
        className,
    )}
>
    <div class="z-50">
        <slot />
    </div>
</div>

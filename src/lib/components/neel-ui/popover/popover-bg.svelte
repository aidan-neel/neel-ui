<script lang="ts">
    export let PopoverOpen = false;
    import { fade } from 'svelte/transition';
</script>

{#if PopoverOpen}
    <main {...$$restProps} out:fade={{ delay: 0, duration: 100 }} in:fade={{ delay: 0, duration: 100 }} class="h-screen w-screen fixed z-[50] top-0 left-0 bg-background bg-opacity-60 backdrop-blur-md flex items-center justify-center">
        <slot></slot>
    </main>
{/if}
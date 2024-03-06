<script lang="ts">
    export let PopoverOpen = false;
    import { fade } from 'svelte/transition';
</script>

{#if PopoverOpen}
    <main {...$$restProps} out:fade={{ delay: 0, duration: 100 }} in:fade={{ delay: 0, duration: 100 }} class="h-screen w-screen fixed z-[50] top-0 left-0 shadow-class bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
        <slot></slot>
    </main>
{/if}
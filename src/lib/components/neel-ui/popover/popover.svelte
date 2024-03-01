<script lang="ts">
    import PopoverBg from "./popover-bg.svelte";
    import { popoverState } from ".";
    import { onDestroy, onMount } from "svelte";
    import { type popoverStateType } from ".";
    import { clickOutside, flyAndScale } from "$lib/utils";

    let BuilderData: popoverStateType;
    let PopoverOpen: boolean = false;
    export { BuilderData as builder };
    export { PopoverOpen as isOpen };

    onMount(() => {
        popoverState.update((state) => {
            return {
                [BuilderData.key]: BuilderData
            };
        });

        const unsub = window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                PopoverOpen = false;
            }
        });
    })

    onDestroy(() => {
        popoverState.update((state) => {
            delete state[BuilderData.key];
            return state;
        });
    });

    function ClosePopover() {
        PopoverOpen = false;
    }

    $: PopoverOpen = $popoverState[BuilderData.key]?.open || false;
    let className: string | undefined = undefined;;
    export { className as class };
</script>

<PopoverBg PopoverOpen={PopoverOpen} on:click={() => PopoverOpen = false}>
    <main use:clickOutside={ClosePopover} transition:flyAndScale={{ y: 8, x: 0, start: 0.9, duration: 150 }} class="w-full {PopoverOpen ? 'flex' : 'hidden'} shadow-sm centered shadow-background/50 bg-background flex-col border p-6 rounded-[0.5rem] mx-2 sm:max-w-[500px]">
        <slot></slot>
    </main>
</PopoverBg>

<script lang="ts">
    import PopoverBg from "./popover-bg.svelte";
    import { popoverState } from ".";
    import { onDestroy, onMount } from "svelte";
    import { type popoverStateType } from ".";
    import { clickOutside, cn, flyAndScale } from "$lib/utils";

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
    <main 
    aria-describedby="alert-message" 
    aria-labelledby="alert-title" 
    aria-label="alert-dialog" 
    role="alertdialog" 
    use:clickOutside={ClosePopover} 
    transition:flyAndScale
    class={cn(className, ` w-full {PopoverOpen ? 'flex' : 'hidden'}
    shadow-class centered absolute bg-popover-bg
    shadow-background/50 shadow-class flex-col border
    p-6 z-[999] rounded-[0.5rem] sm:max-w-[500px]`)}>
        <slot></slot>
    </main>
</PopoverBg>

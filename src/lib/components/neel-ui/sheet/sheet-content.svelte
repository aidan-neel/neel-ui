<script lang="ts">
    import { Button } from "../button/";
    import Cross1 from 'svelte-radix/Cross1.svelte'
    import PopoverBg from "../popover/popover-bg.svelte";
    import { getContext } from "svelte";
    import { fly } from "svelte/transition";
    import { sheetStateManagement } from ".";
    import { cubicInOut } from "svelte/easing";
    import { fade } from 'svelte/transition';

    let className: string | undefined = undefined;
    const BuilderData = getContext("SheetBuilderData");
    $: isOpen = $sheetStateManagement[BuilderData.key].open || false;
    $: side = $sheetStateManagement[BuilderData.key].side.toLowerCase() || "left";

    let mouseEntered: boolean = false;

    function CloseSheet() {
        console.log("CloseSheet")
        isOpen = false;
        $sheetStateManagement[BuilderData.key].open = false;
    }

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

{#if isOpen }

    <div class="h-screen w-screen shadow-class backdrop-blur-md bg-background bg-opacity-60 z-[98] fixed top-0 left-0"
        transition:fade={{ duration: 90 }}
        on:click={() => {
            if (!mouseEntered) {
                CloseSheet();
            }
        }}>

        <div on:mouseenter={() => { mouseEntered = true }} on:mouseleave={() => { mouseEntered = false }} transition:fly={{ x: side === "left" ? -80 : 80, duration: 300 }} {...$$restProps} class={cn(className, ` overflow-y-auto flex flex-col p-8 fixed bg-popover-bg h-screen w-5/6 md:w-2/4 lg:w-[28rem] z-[99] top-0 ${side === "left" ? 'left-0 border-r' : 'right-0 border-l'} shadow-class`)}>
            <Button on:click={CloseSheet} class="h-8 w-8 absolute top-6 right-6 hover:bg-transparent group" variant="ghost">
                <Cross1 class="h-4 w-4 absolute text-muted-foreground group-hover:text-foreground duration-100" />
            </Button>
            <slot></slot>
        </div>
    </div>
{/if}
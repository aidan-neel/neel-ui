<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { tooltipState, type tooltipStateType } from "../tooltip";
    import { type DataBuilderType } from ".";
    import { linkPreviewState, type linkPreviewStateType } from "../link-preview";
    import { sheetStateManagement, type SheetState } from "../sheet";

    const buttonVariants = {
        "primary": "bg-button text-secondary border border-border h-10 px-4 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium hover:bg-button-hovered duration-100",
        "secondary": "hover:bg-primary-muted_bg_hovered border border-primary-muted_border px-4  h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium bg-primary-muted_bg duration-100",
        "link": "hover:underline text-[14px]",
        "ghost": "hover:bg-muted border border-transparent hover:border-muted px-4 h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium duration-100",
    }
    
    export let variant: keyof typeof buttonVariants = "primary";
    export let useTransition: boolean = false;
    export let className: string | undefined = undefined;
    export let hrefName: string | undefined = undefined;
    export let data: DataBuilderType | undefined = undefined;
    export { hrefName as href }
    export { className as class }

    let mouseHovering: boolean = false;

    function MouseEnter() {
        mouseHovering = true;
        function HandleTooltip() {
            if(data === undefined || data?.key === undefined) { return };

            setTimeout(() => {
                if(mouseHovering) {
                    $tooltipState[data?.key].showing = true;
                }
            }, 700)
        }

        function HandleLinkPreview() {
            console.log(data)
            if(data === undefined || data?.key === undefined) { return };

            setTimeout(() => {
                if(mouseHovering) {
                    $linkPreviewState[data?.key].open = true;
                }
            }, 700)
        }

        if(data?.type === "tooltip") {
            HandleTooltip()
        } else if(data?.type === "link-preview") {
            HandleLinkPreview()
        }
    }

    function MouseLeave() {
        mouseHovering = false;
        function HandleTooltip() {
            if(data === undefined || data?.key === undefined) { return };

            $tooltipState[data?.key].showing = false;
        }

        function HandleLinkPreview() {
            if(data === undefined || data?.key === undefined) { return };

            $linkPreviewState[data?.key].open = false;
        }

        if(data?.type === "tooltip") {
            HandleTooltip()
        } else if(data?.type === "link-preview") {
            HandleLinkPreview()
        }
    }

    function MouseClick() {
        function HandleSheet() {
            if(data === undefined || data?.key === undefined) { return };

            $sheetStateManagement[data?.key].open = true
        }

        if(data?.type === "sheet") {
            HandleSheet()
        }
    }
</script>

{#if hrefName}
    {#if useTransition}
        <a href={hrefName} on:click={MouseClick}  on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} transition:fly={{ duration: 100, x: 10 }} on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </a>
    {:else}
        <a href={hrefName} on:click={MouseClick}  on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </a>
    {/if}
{:else}
    {#if useTransition}
        <button on:click on:click={MouseClick} on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </button>
    {:else}
        <button on:click on:click={MouseClick}  on:mouseenter={MouseEnter} on:mouseleave={MouseLeave} class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </button>
    {/if}
{/if}
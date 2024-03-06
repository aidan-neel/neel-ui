<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { tooltipState, type tooltipStateType } from "../tooltip";
    import { type DataBuilderType } from ".";
    import { linkPreviewState, type linkPreviewStateType } from "../link-preview";
    import { sheetStateManagement, type SheetState } from "../sheet";
    import { dropdownState } from "../dropdown-menu";
    import { openSide } from '$lib/utils'
    import { buttonVariants } from ".";
    import { popoverState } from "../popover";
  import { onMount } from "svelte";
    
    export let variant: keyof typeof buttonVariants = "primary";
    export let useTransition: boolean = false;
    export let className: string | undefined = undefined;
    export let hrefName: string | undefined = undefined;
    export let data: DataBuilderType | undefined = undefined;
    export let disabled: boolean = false;
    export { hrefName as href }
    export { className as class }

    let button: HTMLButtonElement | HTMLAnchorElement;

    $: if(disabled) {
        variant = variant + "-disabled"
        console.log(variant)
    }

    function onFocus() {
        MouseEnter()
    }

    function onBlur() {
        MouseLeave()
    }

    onMount(() => {
        button.addEventListener('focus', onFocus);
        button.addEventListener('blur', onBlur);
    });

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

    function MouseClick(event) {
        if(disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        event.stopPropagation();
        function HandleSheet() {
            if(data === undefined || data?.key === undefined) { return };

            $sheetStateManagement[data?.key].open = true
        }

        function HandleDropdown() {
            openSide(`dropdown-${data?.key}`, dropdownState, data?.key)
            if(data === undefined || data?.key === undefined) { return };
            const open = dropdownState.getOpenState(data?.key);
            dropdownState.setOpenState(data?.key, !open);

            Object.keys($dropdownState).forEach((key) => {
                if(key !== data?.key) {
                    dropdownState.setOpenState(key, false);
                }
            });
        }

        function HandleConfirm() {
            if(data === undefined || data?.key === undefined) { return };
            
            $popoverState[data?.key].open = true;
        }

        if(data?.type === "sheet") {
            HandleSheet()
        }

        if(data?.type === "confirm") {
            HandleConfirm()
        }

        if(data?.type === "dropdown") {
            HandleDropdown()
        }
    }
</script>

{#if hrefName}
    <a
    bind:this={button}
    disabled={disabled}
    aria-label="Link"
    aria-describedby="link"
    role="link"
    href={hrefName}
    on:click|stopPropagation
    on:click|stopPropagation={MouseClick}
    id="link"  on:mouseenter={MouseEnter}
    on:mouseleave={MouseLeave}
    transition:fly={{ duration: 100, x: 10 }}
    on:click
    class={`${buttonVariants[variant]} ${className}`}
    {...$$restProps}>
        <slot></slot>
    </a>
{:else}
    <button
    bind:this={button}
    disabled={disabled}
    role="button"
    aria-label="Button"
    aria-roledescription="Activates a button"
    aria-describedby="button"
    on:click|stopPropagation
    on:click|stopPropagation={MouseClick}
    id="button" 
    on:mouseenter={MouseEnter}
    on:mouseleave={MouseLeave}
    on:focus={MouseEnter}
    class={`${buttonVariants[variant]} ${className}`}
    {...$$restProps}>
        <slot></slot>
    </button>
{/if}
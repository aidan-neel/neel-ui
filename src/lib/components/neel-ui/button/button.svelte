<script lang="ts">
    import { fade } from "svelte/transition";

    const buttonVariants = {
        "primary": "bg-primary border border-primary-border h-9 px-5 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium hover:bg-primary/80 duration-100",
        "secondary": "hover:bg-primary-muted_bg_hovered border border-primary-muted_border px-5 h-9 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium bg-primary-muted_bg duration-100",
        "link": "hover:underline text-[14px]",
        "ghost": "hover:bg-primary/30 border border-transparent hover:border-primary/50 px-5 h-9 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium duration-100",
    }

    export let variant: keyof typeof buttonVariants = "primary";
    export let useTransition: boolean = false;
    export let className: string | undefined = undefined;
    export let hrefName: string | undefined = undefined;
    export { hrefName as href }
    export { className as class }
</script>

{#if hrefName}
    {#if useTransition}
        <a href={hrefName} transition:fade={{ duration: 100, x: 10 }} on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </a>
    {:else}
        <a href={hrefName} on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </a>
    {/if}
{:else}
    {#if useTransition}
        <button transition:fade={{ delay: 0, duration: 300 }} on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </button>
    {:else}
        <button on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
            <slot></slot>
        </button>
    {/if}
{/if}
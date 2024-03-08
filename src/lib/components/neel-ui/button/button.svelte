<script lang="ts">
    import { fly } from "svelte/transition";
    import { buttonVariants } from ".";
    import type { Event, EventProps, Hook } from '$lib/event-handler';
    import { cn } from "$lib/utils";
    
    export let variant: keyof typeof buttonVariants = "primary";
    export let className: string | undefined = undefined;
    export let hrefName: string | undefined = undefined;
    export let disabled: boolean = false;
    export { hrefName as href }
    export { className as class }

    let EventData: Event | undefined = undefined;
    export { EventData as data }

    let button: HTMLButtonElement | HTMLAnchorElement;

    $: if(disabled) {
        variant = variant + "-disabled"
    }

    let hovering: boolean = false;
    let pressed: boolean = false;
    let entered: boolean = false;
    let focused: boolean = false;
    let left: boolean = false;

    function FilterHooks(trigger: string, hooks: Hook[]) {
        // Return every Hook that includes the trigger
        return hooks.filter(hook => hook.trigger === trigger);
    }

    function MouseEvent(event) {        
        if(event.type === "mouseenter") {
            hovering = true;
            entered = true;
            left = false;
        } else if(event.type === "mouseleave") {
            hovering = false;
            entered = false;
            left = true;
        } else if(event.type === "focus") {
            focused = true;
        } else if(event.type === "blur") {
            focused = false;
        } else if(event.type === "click") {
            pressed = true;
        }

        const props: EventProps = {
            Hovering: hovering,
            Pressed: pressed,
            Entered: entered,
            Focused: focused,
            Left: left,
            Component: button
        }

        const hooks = FilterHooks(event.type, EventData?.hooks || []);
        hooks.forEach(hook => {
            hook.callback(props);
        });
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
    on:click|stopPropagation={MouseEvent}
    id="link"  
    on:mouseenter={MouseEvent}
    on:mouseleave={MouseEvent}
    transition:fly={{ duration: 100, x: 10 }}
    on:click
    class={cn(className, `${buttonVariants[variant]}`)}
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
    on:click|stopPropagation={MouseEvent}
    id="button" 
    on:mouseenter={MouseEvent}
    on:mouseleave={MouseEvent}
    on:focus={MouseEvent}
    class={cn(className, `${buttonVariants[variant]}`)}
    {...$$restProps}>
        <slot></slot>
    </button>
{/if}
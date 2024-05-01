<script lang="ts">
    import { cn } from "$library/utils";
    import { ButtonVariants, type Variant, type Size, type Props } from ".";
    import type { Event, EventProps, Hook } from "$lib/event-handler";
    import Spinner from "$ui/spinner";
    import { onMount } from "svelte";
    import { globalStateStore } from "$library/state";
    import { goto } from "$app/navigation";

    type $$Props = Props & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    let EventData: $$Props["data"] = undefined;
    export let variant: $$Props["variant"] = "primary";
    export let size: $$Props["size"] = "default";
    export let loading: $$Props["loading"] = false;
    export let disabled: $$Props["disabled"] = false;
    export let spinner: $$Props["spinner"] = Spinner;
    export let href: $$Props["href"] = undefined;
    export { EventData as data };
    export { className as class };

    let variantName =
        variant +
        `${disabled ? "-disabled" : "" || loading ? "-disabled" : ""}`;

    let button: HTMLButtonElement | HTMLAnchorElement;
    let hovering: boolean = false;
    let pressed: boolean = false;
    let entered: boolean = false;
    let focused: boolean = false;
    let left: boolean = false;

    function FilterHooks(trigger: string, hooks: Hook[]) {
        // Return every Hook that includes the trigger
        return hooks.filter((hook) => hook.trigger === trigger);
    }

    onMount(() => {
        if (!button) return;
        if (
            EventData?.bindTrigger &&
            EventData?.bindTrigger?.name &&
            EventData?.bindTrigger?.key
        ) {
            $globalStateStore[EventData.bindTrigger.name][
                EventData.bindTrigger.key
            ].data.triggerInstance = button;
        }
    });

    function MouseEvent(event) {
        if (event.type === "mouseenter") {
            hovering = true;
            entered = true;
            left = false;
        } else if (event.type === "mouseleave") {
            hovering = false;
            entered = false;
            left = true;
        } else if (event.type === "focus") {
            focused = true;
        } else if (event.type === "blur") {
            focused = false;
        } else if (event.type === "click") {
            pressed = true;
        }

        const props: EventProps = {
            Hovering: hovering,
            Pressed: pressed,
            Entered: entered,
            Focused: focused,
            Left: left,
            Component: button,
        };

        const hooks = FilterHooks(event.type, EventData?.hooks || []);
        hooks.forEach((hook) => {
            hook.callback(props);
        });
    }
</script>

{#if href}
    <a
        class={cn(
            ButtonVariants({
                variant: variantName,
                size,
            }),
            className,
        )}
        role="link"
        {href}
        type="button"
        tabindex="0"
        on:mouseenter
        on:mouseleave
        on:mouseover
        on:mouseout
        on:mouseup
        on:mousedown
        on:keydown
        on:keyup
        on:keypress
        on:blur
        on:focus
        on:touchstart
        on:touchend
        on:touchcancel
        on:touchmove
        on:transitionend
        on:animationstart
        on:click
        on:animationiteration
        on:animationend
        on:click={MouseEvent}
        on:focus={MouseEvent}
        id="button"
        on:mousedown|preventDefault
        on:mouseenter={MouseEvent}
        on:mouseleave={MouseEvent}
        on:focus={MouseEvent}
        aria-label="Button"
        aria-roledescription="Activates a button"
        aria-describedby="button"
        bind:this={button}
        on:click={() => {
            goto(href);
        }}
        disabled={disabled || loading}
        {...$$restProps}
    >
        {#if loading}
            <svelte:component this={spinner} class="w-5 h-5 mr-1.5" />
        {/if}
        <slot />
    </a>
{:else}
    <button
        class={cn(
            ButtonVariants({
                variant: variantName,
                size,
            }),
            className,
        )}
        type="button"
        on:mouseenter
        on:mouseleave
        on:mouseover
        on:mouseout
        on:mouseup
        on:mousedown
        on:keydown
        on:keyup
        on:keypress
        on:blur
        on:focus
        on:touchstart
        on:touchend
        on:touchcancel
        on:touchmove
        on:transitionend
        on:animationstart
        on:click
        on:animationiteration
        on:animationend
        on:click={MouseEvent}
        on:focus={MouseEvent}
        id="button"
        bind:this={button}
        on:mousedown|preventDefault
        on:mouseenter={MouseEvent}
        on:mouseleave={MouseEvent}
        on:focus={MouseEvent}
        aria-label="Button"
        aria-roledescription="Activates a button"
        aria-describedby="button"
        disabled={disabled || loading}
        {...$$restProps}
    >
        {#if loading}
            <svelte:component this={spinner} class="w-5 h-5 mr-1.5" />
        {/if}
        <slot />
    </button>
{/if}

<!--
    Feel free to add more events to the button component.
-->

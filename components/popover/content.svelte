<script lang="ts">
    import { getContext, onMount, onDestroy } from "svelte";
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";
    import { cupertino } from "$library/transition";
    import {
        createPopper,
        type Instance,
        type Placement,
    } from "@popperjs/core";

    const key: string = getContext<string>("key");
    const stateName: string = getContext<string>("stateName");

    type $$Props = {
        padding?: number;
        placement?: Placement;
        class?: string | undefined;
        role?: string;
        tabIndex?: number;
        fullWidthOfTrigger?: boolean;
    };

    export let padding: $$Props["padding"] = 4;
    export let fullWidthOfTrigger: $$Props["fullWidthOfTrigger"] = false;
    export let role: $$Props["role"] = "menu";
    export let tabIndex: $$Props["tabIndex"] = -1;
    let originalOpenSide: $$Props["placement"] = "bottom";
    export { originalOpenSide as placement };

    let className: $$Props["class"] = undefined;
    export { className as class };

    $: open = $globalStateStore[stateName][key]?.open;
    $: triggerInstance =
        $globalStateStore[stateName][key]?.data.triggerInstance;

    let popperInstance: Instance | null = null;
    let componentElement: HTMLElement;
    let isTransitioning = false;

    function createPopperInstance() {
        if (popperInstance) {
            popperInstance.destroy();
        }
        if (triggerInstance && componentElement && !isTransitioning) {
            popperInstance = createPopper(triggerInstance, componentElement, {
                placement: originalOpenSide, // Ensure this is set to 'bottom' or whichever side you prefer
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, padding], // Horizontal, Vertical offset - Adjust '0' if you want to shift horizontally
                        },
                    },
                    {
                        name: "flip", // Ensures the popover can flip to a different placement if running out of space
                    },
                    {
                        name: "shift", // Shifts the popover on the main axis if running out of space
                    },
                    {
                        name: "preventOverflow", // Prevents the popover from being clipped out of the boundary
                        options: {
                            boundary: "viewport", // Can be 'viewport', 'window', or a custom DOM element
                        },
                    },
                ],
            });
        }
    }

    export function clickOutside(node: HTMLElement, callback: () => void) {
        const handleClick = (event: MouseEvent) => {
            if (!node.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);

        return {
            destroy() {
                document.removeEventListener("mousedown", handleClick);
            },
        };
    }

    onMount(() => {
        createPopperInstance();
    });

    onDestroy(() => {
        popperInstance?.destroy();
    });

    $: if (open && triggerInstance && componentElement && !isTransitioning) {
        createPopperInstance();
    }

    function onIntroEnd() {
        isTransitioning = false;
        createPopperInstance();
    }
</script>

{#if open}
    <div
        class="absolute z-[999] {fullWidthOfTrigger
            ? 'w-full'
            : ''} p-[{padding}]"
        bind:this={componentElement}
        style="position: absolute;"
        on:introend={onIntroEnd}
        {role}
        id={"content-" + key}
        {tabIndex}
        {...$$restProps}
        on:mouseenter={() => {
            $globalStateStore[stateName][key].data.enteredContent = true;
        }}
        on:mouseleave={() => {
            $globalStateStore[stateName][key].data.enteredContent = false;
        }}
        use:clickOutside={() => {
            const entered = $globalStateStore[stateName][key]?.data.entered;

            if (entered) {
                return;
            }

            $globalStateStore[stateName][key].open = false;
        }}
    >
        <div
            transition:cupertino
            class={cn(
                `bg-alternate-muted disallow-scroll shadow-lg rounded-lg border-default z-[999] p-4 `,
                className,
            )}
        >
            <slot />
        </div>
    </div>
{/if}

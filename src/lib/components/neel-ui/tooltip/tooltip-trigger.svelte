<script lang="ts">
    import type { tooltipStateType } from ".";
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import { getContext } from "svelte";
    import { tooltipState } from ".";
    import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    const BuilderData = getContext<tooltipStateType>("TooltipBuilderData")
    const Key = BuilderData?.key;

    /*
        function HandleTooltip() {
            if(data === undefined || data?.key === undefined) { return };

            setTimeout(() => {
                if(mouseHovering) {
                    $tooltipState[data?.key].showing = true;
                }
            }, 700)
        }
    */

    let HoverHook: Hook = {
        trigger: "mouseenter",
        callback: (props: EventProps) => {
            setTimeout(() => {
                if(props.Hovering === true) {
                    $tooltipState[Key].showing = true;
                }
            }, 750)
        }
    }

    let LeaveHook: Hook = {
        trigger: "mouseleave",
        callback: (props: EventProps) => {
            if(props.Left === true) {
                $tooltipState[Key].showing = false;
            }
        }
    }

    let data: Event = {
        event: "tooltip",
        hooks: [HoverHook, LeaveHook]
    }

    export {
        className as class,
    }
</script>

<div aria-describedby="tooltip" {...$$restProps} class={cn(className, ``)}>
    <slot data={data}></slot>
</div>
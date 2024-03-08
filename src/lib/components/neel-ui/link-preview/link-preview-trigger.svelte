<script lang="ts">
    import type { DataBuilderType } from "../button";
    import type { linkPreviewStateType } from ".";
    import { getContext } from "svelte";
    import { linkPreviewState } from ".";
    import type { Event, EventProps, Hook } from '$lib/event-handler'

    let className: string | undefined = undefined;
    const BuilderData = getContext<linkPreviewStateType>("LinkPreviewBuilderData")
    const Key = BuilderData?.key;
    
    let HoverHook: Hook = {
        trigger: "mouseenter",
        callback: (props: EventProps) => {
            setTimeout(() => {
                if(props.Hovering === true) {
                    $linkPreviewState[Key].open = true;
                    $linkPreviewState[Key].triggerHeight = props.Component.clientHeight;
                }
            }, 750);
        }
    }

    let LeaveHook: Hook = {
        trigger: "mouseleave",
        callback: (props: EventProps) => {
            if(props.Left === true) {
                $linkPreviewState[Key].open = false;
                $linkPreviewState[Key].triggerHeight = props.Component.clientHeight;
            }
        }
    }

    let data: Event = {
        event: "dropdown",
        hooks: [HoverHook, LeaveHook]
    }

    import { cn } from '$lib/utils'    

    export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot data={data}></slot>
</div>
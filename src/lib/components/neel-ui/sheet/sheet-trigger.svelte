<script lang="ts">
    import type { DataBuilderType } from "../button";
    import { getContext } from "svelte";
    import { sheetStateManagement, type SheetState } from ".";
    import type { Event, EventProps, Hook } from '$lib/event-handler'

    const BuilderData = getContext<SheetState>("SheetBuilderData")
    const Key = BuilderData?.key;

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            $sheetStateManagement[Key].open = !$sheetStateManagement[Key].open;
        }
    }

    let data: Event = {
        event: "sheet",
        hooks: [MouseDownHook]
    }
    
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot data={data}></slot>
</div>
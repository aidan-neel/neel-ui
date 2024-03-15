<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import type { popoverStateType } from '../modal';
    import { getContext } from 'svelte';
    import { cn } from '$lib/utils';
    import type { Event, Hook, EventProps } from '$lib/event-handler';
    import { popoverState } from '$lib/components/neel-ui/modal';
    
    let className: string | undefined = undefined;
    export { className as class }

    const BuilderData = getContext<popoverStateType>('popoverStateData');
    const Key = BuilderData?.key;

    let MouseDownHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            $popoverState[Key].open = true;
        }
    }

let data: Event = {
    event: "dropdown",
    hooks: [MouseDownHook]
}
</script>

<div class={cn(className, ``)} {...$$restProps}>
    <slot data={data}></slot>
</div>
<script lang="ts">
    import { setContext, getContext } from "svelte";
    import { type contextStateType, type contextPositionType, contextState } from ".";
    
    let className: string | undefined = undefined;
    const BuilderData = getContext<contextStateType>("BuilderData");

    let pos: contextPositionType = { x: 0, y: 0 };
    let browser: { w: number, h: number } = { w: 0, h: 0 };
    $: menu = contextState.getValue(BuilderData.key, "menu");   
    
    function context(e: MouseEvent) {
        e.preventDefault();
        browser = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        pos = {
            x: e.clientX,
            y: e.clientY
        };
        // If bottom part of context menu will be displayed
        // after right-click, then change the position of the
        // context menu. This position is controlled by `top` and `left`
        // at inline style. 
        // Instead of context menu is displayed from top left of cursor position
        // when right-click occur, it will be displayed from bottom left.
        if (browser.h -  pos.y < menu.h)
            pos.y = pos.y - menu.h
        if (browser.w -  pos.x < menu.w)
            pos.x = pos.x - menu.w

        // Offset position slightly so theres some space between the cursor and the context menu
        pos.x += 10;
        pos.y += 10;

        contextState.set(BuilderData.key, "position", pos);
        contextState.set(BuilderData.key, "open", true);

        Object.keys($contextState).forEach((key) => {
            if (key !== BuilderData.key) {
                contextState.set(key, "open", false);
            }
        });
    }
    
    export { className as class }
    </script>
    
<div on:contextmenu|preventDefault={context} {...$$restProps} class={`${className}`}>
    <slot></slot>
</div>
<script lang="ts">
    import { setContext, getContext } from "svelte";
    import { type contextStateType, type contextPositionType, contextState } from ".";
    import { cn } from "$lib/utils";

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
        // Include scroll offsets here
        pos = {
            x: e.clientX + window.scrollX,
            y: e.clientY + window.scrollY
        };
        // Adjusting the position based on the menu dimensions and browser window size
        if (browser.h - (e.clientY + window.scrollY) < menu.h)
            pos.y -= menu.h;
        if (browser.w - (e.clientX + window.scrollX) < menu.w)
            pos.x -= menu.w;

        // Offset position slightly so there's some space between the cursor and the context menu
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
    
    export { className as class };
</script>
    
<div on:contextmenu|preventDefault={context} {...$$restProps} class={cn(className, ``)}>
    <slot></slot>
</div>

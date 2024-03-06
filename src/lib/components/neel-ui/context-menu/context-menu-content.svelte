<!-- ContextMenuContent.svelte -->
<script lang="ts">
    import { getContext } from "svelte";
    import { type contextStateType, contextState, type contextPositionType } from ".";
    import { clickOutside, flyAndScale } from "$lib/utils";
    
    const BuilderData = getContext<contextStateType>("BuilderData");
    $: open = $contextState[BuilderData.key].open;
    $: position = $contextState[BuilderData.key].position;
    let className: string | undefined = undefined;

    function getContextMenuDimension(node){
        // This function will get context menu dimension
        // when navigation is shown => showMenu = true
        let height = node.offsetHeight
        let width = node.offsetWidth
        const menu = {
            h: height,
            w: width
        }
        contextState.set(BuilderData.key, "menu", menu);
    }
    
    export { className as class }
</script>
    
{#if open}
    <div use:clickOutside={() => {
        contextState.set(BuilderData.key, "open", false);
    }} 
    use:getContextMenuDimension
    {...$$restProps}
    transition:flyAndScale={{ duration: 100 }}
    class={`${className} py-1 flex flex-col bg-background gap-1 shadow-class
    z-50 border rounded-lg absolute`} 
    style="position: absolute; top:{position.y}px; left:{position.x}px">
        <slot></slot>
    </div>
{/if}
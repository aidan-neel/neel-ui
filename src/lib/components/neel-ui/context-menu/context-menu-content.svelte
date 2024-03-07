<script lang="ts">
    import { getContext, onMount } from "svelte";
    import { type contextStateType, contextState } from ".";
    import { clickOutside, flyAndScale } from "$lib/utils";
    
    const BuilderData = getContext<contextStateType>("BuilderData");
    $: open = $contextState[BuilderData.key].open;
    $: position = $contextState[BuilderData.key].position;
    let className: string | undefined = undefined;
    let shouldOpenUpwards = false;

    function calculateOpenDirection(node) {
      if (!node) return; // Ensure node exists
      
      const viewportHeight = window.innerHeight;
      const rect = node.getBoundingClientRect();
      const menuHeight = node.offsetHeight;
      shouldOpenUpwards = (viewportHeight - rect.bottom) < menuHeight;
    }

    // Update context menu dimensions and position dynamically
    function getContextMenuDimension(node) {
      // Delay calculation until the node is likely rendered and visible
      setTimeout(() => calculateOpenDirection(node), 0);
      
      contextState.set(BuilderData.key, "menu", {
        h: node.offsetHeight,
        w: node.offsetWidth
      });
    }

    // React to changes in `open` and `position`
    $: if (open) {
      // Use a reactive statement to watch for `open` and `position` changes
      const node = document.querySelector(`[data-context-menu="${BuilderData.key}"]`);
      if (node) {
        // Recalculate open direction whenever `open` changes
        calculateOpenDirection(node);
      }
    }
    
    export { className as class };
</script>

{#if open}
    <div use:clickOutside={() => {
        contextState.set(BuilderData.key, "open", false);
    }} 
    data-context-menu={BuilderData.key}
    use:getContextMenuDimension
    {...$$restProps}
    transition:flyAndScale
    class={`${className} py-1 flex flex-col bg-popover-bg gap-1 shadow-class
    z-50 border rounded-lg absolute`} 
    style="position: absolute; {shouldOpenUpwards ? `bottom: calc(100vh - ${position.y}px)` : `top: ${position.y}px`}; left:{position.x}px">
        <slot></slot>
    </div>
{/if}
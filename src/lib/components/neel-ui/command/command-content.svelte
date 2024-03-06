<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { commandState } from ".";
  import { fade } from "svelte/transition";
  import { clickOutside, flyAndScale } from "$lib/utils";
  import Popover from "../popover/popover.svelte";

    // Exported variables
    let className: string | undefined = undefined;

    // Non-exported variables
    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key
    $: open = $commandState[Key]?.open

    // Functions
    function close() {
        commandState.set(Key, "open", false);
    }

    // Export
    export {
        className as class,
    }
</script>

{#if open}
    <div
    transition:fade={{ duration: 100 }} 
    class="h-screen w-screen shadow-class backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-[999] fixed top-0 left-0">
        <main
        transition:flyAndScale
        use:clickOutside={close} 
        class="md:max-w-[600px] w-[95vw] centered z-[1000] bg-popover-bg border rounded-lg h-auto max-h-[22.5rem] overflow-y-auto ">
            <slot />
        </main>
        
    </div>
{/if}
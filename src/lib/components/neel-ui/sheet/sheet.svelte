<script lang="ts">
    import { onDestroy, setContext } from "svelte";
    import { sheetBuilderFunction, sheetStateManagement } from "$lib/components/neel-ui/sheet";
    let className: string | undefined = undefined;
    export let side: "left" | "right";

    const BuilderData = sheetBuilderFunction(side);
    setContext("SheetBuilderData", BuilderData);

    import { cn } from '$lib/utils'    

    export {
        className as class
    }

    onDestroy(() => {
        sheetStateManagement[BuilderData.key] = undefined;
    })
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot BuilderData={BuilderData}></slot>
</div>
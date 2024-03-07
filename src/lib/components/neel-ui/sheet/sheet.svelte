<script lang="ts">
    import { setContext } from "svelte";
    import { sheetBuilderFunction } from "$lib/components/neel-ui/sheet";
    let className: string | undefined = undefined;
    export let side: "left" | "right";

    const BuilderData = sheetBuilderFunction(side);
    setContext("SheetBuilderData", BuilderData);

    import { cn } from '$lib/utils'    

    export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot BuilderData={BuilderData}></slot>
</div>
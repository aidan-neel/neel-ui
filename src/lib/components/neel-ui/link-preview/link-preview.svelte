<script lang="ts">
    import { linkPreviewBuilder, linkPreviewState } from ".";
    import { onDestroy, setContext } from "svelte";
    
    let className: string | undefined = undefined;

    const BuilderData = linkPreviewBuilder();
    setContext("LinkPreviewBuilderData", BuilderData);

    import { cn } from '$lib/utils'    

    export {
        className as class
    }

    onDestroy(() => {
        linkPreviewState[BuilderData.key] = undefined;
    })
</script>

<div {...$$restProps} class={cn(className, ` flex flex-col items-center relative`)}>
    <slot></slot>
</div>
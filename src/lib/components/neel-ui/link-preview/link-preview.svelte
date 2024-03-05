<script lang="ts">
    import { linkPreviewBuilder } from ".";
    import { setContext } from "svelte";
    
    let className: string | undefined = undefined;

    const BuilderData = linkPreviewBuilder();
    setContext("LinkPreviewBuilderData", BuilderData);

    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} flex flex-col items-center relative`}>
    <slot></slot>
</div>
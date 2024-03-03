<script lang="ts">
    import { selectBuilder } from ".";
    import { setContext } from "svelte";

    let className: string | undefined = undefined;

    const BuilderData = selectBuilder()
    setContext("SelectBuilderData", BuilderData)
    
    export {
        className as class
    }
</script>

<div {...$$restProps} class={`${className} relative`}>
    <slot></slot>
</div>
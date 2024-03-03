<script lang="ts">
    import { selectBuilder, selectState } from ".";
    import { getContext, setContext } from "svelte";

    let className: string | undefined = undefined;

    const BuilderData = selectBuilder()
    setContext("SelectBuilderData", BuilderData)

    export const key = BuilderData.key

    export {
        className as class,
    }
</script>

<div {...$$restProps} class={`${className} relative`}>
    <slot></slot>
</div>
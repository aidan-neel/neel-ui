<script lang="ts">
  import { cn } from "$lib/utils";
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

<div {...$$restProps} class={cn(className, ` relative`)}>
    <slot></slot>
</div>
<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { Builder, cn } from "$lib/utils";
    import { commandState } from ".";

    // Exported variables
    let className: string | undefined = undefined;
    let heading: string;

    // Non-exported variables
    setContext("heading", heading);

    // Export
    export {
        // Assigned variables
        className as class,
        // Non-assigned variables
        heading
    }
</script>

<div class={cn(className, ` flex flex-col py-1 w-full`)}>
    <p class="pl-4 font-medium text-muted-foreground text-[12px] py-1">
        {heading}
    </p>
    <slot />
</div>
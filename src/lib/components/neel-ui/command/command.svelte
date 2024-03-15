<script lang="ts">
    import { getContext, setContext } from "svelte";
    import { Builder } from "$lib/utils";
    import { commandState, commandBuilder } from ".";

    // Exported variables
    let className: string | undefined = undefined;
    let key: string | undefined = undefined;
    let open: boolean = false;

    // Non-exported variables
    const builder = commandBuilder(key);
    builder.open = open;
    setContext("BuilderData", builder);

    // Export
    export {
        className as class,
        key,
        open
    }
</script>

<slot />
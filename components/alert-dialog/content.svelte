<script lang="ts">
    import Blur from "$ui/blur";
    import { getContext, setContext } from "svelte";
    import { globalStateStore } from "$library/state";
    import type { State, Props } from ".";
    import { cupertino } from "$library/transition";
    import { cn } from "$library/utils";
    import { AlertDialogVariants } from ".";

    const key = getContext<string>("key");
    $: open = $globalStateStore["alert-dialog"][key].open;

    type $$Props = Props & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let size: $$Props["size"] = "md";
    export let open: $$Props["open"] = false;
    export { className as class };
</script>

{#if open}
    <Blur name="alert-dialog" {key}>
        <div
            role="alertdialog"
            aria-modal={true}
            aria-describedby={`alert-dialog-subtitle-${key}`}
            aria-labelledby={`alert-dialog-title-${key} alert-dialog-subtitle-${key}`}
            transition:cupertino
            class={cn(
                AlertDialogVariants({
                    size: size,
                }),
                className,
            )}
        >
            <slot />
        </div>
    </Blur>
{/if}

<script lang="ts">
    import Blur from "$ui/blur";
    import { getContext, setContext } from "svelte";
    import { globalStateStore } from "$library/state";
    import { cupertino } from "$library/transition";
    import { fly } from "svelte/transition";
    import { clickOutside, cn } from "$library/utils";

    const key = getContext<string>("key");

    type $$Props = {
        class?: string;
        open?: boolean;
        side?: "left" | "right";
    } & typeof $$restProps;

    let className: $$Props["class"] = undefined;
    export let open: $$Props["open"] = false;
    export let side: $$Props["side"] = "left";
    $: open = $globalStateStore["sheet"][key].open;
    export { className as class };

    setContext<string>("side", side);

    let entered: boolean = false;
</script>

{#if open}
    <Blur name="sheet" {key}>
        <div
            use:clickOutside={() => {
                globalStateStore.closeStateItem("sheet", key);
            }}
            role="dialog"
            on:mouseenter={() => {
                entered = true;
            }}
            on:mouseleave={() => {
                entered = false;
            }}
            transition:fly={{ x: side === "left" ? -80 : 80, duration: 250 }}
            {...$$restProps}
            class={cn(
                `absolute top-0 bg-alternate-muted p-6 h-screen w-[80%] max-w-[30rem] right-0 ${side === "left" ? "border-r-default" : "border-l-default"} ${side}-0`,
                className,
            )}
        >
            <slot
                closeSheet={() => {
                    globalStateStore.closeStateItem("sheet", key);
                }}
                openSheet={() => {
                    globalStateStore.openStateItem("sheet", key);
                }}
                {open}
            />
        </div>
    </Blur>
{/if}

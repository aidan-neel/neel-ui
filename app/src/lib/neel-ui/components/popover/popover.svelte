<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { setContext, onDestroy, onMount } from "svelte";
    import type { State } from ".";
    import { generateDefaultState as defaultGenerateDefaultState } from ".";
    import { cn } from "$library/utils";

    type $$Props = {
        class?: string;
        open?: boolean;
        role?: "menu" | "dialog";
        stateName?: string;
        key?: string;
        generateDefaultState?: () => State;
        stateObject?: any;
    };

    let className: $$Props["class"];
    let open: $$Props["open"] = false;
    let role: $$Props["role"] = "dialog";
    let stateName: $$Props["stateName"] = "popover";

    let defaultStateObject: State = defaultGenerateDefaultState();

    export let stateObject: $$Props["stateObject"] = defaultStateObject;
    export let generateDefaultState: () => typeof stateObject =
        defaultGenerateDefaultState;

    const stateValue: State = generateDefaultState();
    const key: $$Props["key"] = globalStateStore.addNewStateItem(
        stateName,
        stateValue,
    );
    setContext<string>("key", key);
    setContext<string>("stateName", stateName);

    export { className as class, open, role, stateName, key };

    onDestroy(() => {
        globalStateStore.updateStateItem(stateName, key, undefined);
    });

    // on 'escape' key, close the popover
    onMount(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                globalStateStore.updateStateItem(stateName, key, {
                    open: false,
                });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    });
</script>

<div
    class={cn("relative flex centered-absolute flex-col", className)}
    {role}
    aria-modal="true"
    aria-controls={"content-" + key}
>
    <slot
        {open}
        closePopover={() => {
            $globalStateStore[stateName][key].open = false;
        }}
        openPopover={() => {
            $globalStateStore[stateName][key].open = true;
        }}
    />
</div>

<style>
    .centered-absolute {
        align-items: center !important;
        justify-content: center !important;
    }
</style>

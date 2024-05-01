<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { setContext, onDestroy, onMount } from "svelte";
    import type { State, Props } from ".";

    const stateValue: State = {
        open: false,
        data: {
            cancelButton: undefined,
        },
    };

    const states: State[] = [];

    globalStateStore.addNewState("sheet", states);

    const key = globalStateStore.addNewStateItem("sheet", stateValue);

    setContext<string>("key", key);

    onDestroy(() => {
        $globalStateStore["sheet"][key] = undefined;
    });

    export let open: boolean = $globalStateStore["sheet"][key].open;
</script>

<slot
    {open}
    closeSheet={() => {
        $globalStateStore["sheet"][key].open = false;
    }}
    openSheet={() => {
        $globalStateStore["sheet"][key].open = true;
    }}
/>

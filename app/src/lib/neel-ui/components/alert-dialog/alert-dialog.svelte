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

    globalStateStore.addNewState("alert-dialog", states);

    const key = globalStateStore.addNewStateItem("alert-dialog", stateValue);

    setContext<string>("key", key);

    onDestroy(() => {
        $globalStateStore["alert-dialog"][key] = undefined;
    });

    export let open: boolean = $globalStateStore["alert-dialog"][key].open;
</script>

<slot
    {open}
    closeAlertDialog={() => {
        $globalStateStore["alert-dialog"][key].open = false;
    }}
    openAlertDialog={() => {
        $globalStateStore["alert-dialog"][key].open = true;
    }}
/>

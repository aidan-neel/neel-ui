<script lang="ts">
    import type { Event, Hook, EventProps } from "$library/event-types";
    import { globalStateStore } from "$library/state";
    import { setContext, getContext } from "svelte";
    import type { State } from ".";

    const key = getContext<string>("key");

    let MouseClickHook: Hook = {
        trigger: "click",
        callback: (props: EventProps) => {
            globalStateStore.openStateItem("sheet", key);
        },
    };

    let data: Event = {
        event: "dropdown",
        hooks: [MouseClickHook],
    };
</script>

<slot {data} />

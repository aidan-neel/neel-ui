<script lang="ts">
    import { Popover, generateDefaultState } from "$ui/popover";
    import { onMount, setContext } from "svelte";
    import type { State as PopoverState } from "$ui/popover";

    type SelectState = PopoverState & {
        items: string[];
        selected: string;
        results: string[];
    };

    type $$Props = {
        class?: string;
        key?: string;
    } & typeof $$restProps;

    export let key: $$Props["key"] = undefined;
    let className: $$Props["class"] = undefined;
    export { className as class };

    setContext<string>("key", key);

    function generateNewState(): SelectState {
        const defaultState = generateDefaultState();
        return {
            ...defaultState,
            items: [],
            selected: "",
            results: [],
        };
    }

    let stateObject: SelectState = generateNewState();
</script>

<Popover
    bind:key
    generateDefaultState={generateNewState}
    {stateObject}
    stateName="select"
    role="menu"
    class={className}
>
    <slot />
</Popover>

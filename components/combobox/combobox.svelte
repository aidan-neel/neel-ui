<script lang="ts">
    import { Popover, generateDefaultState } from "$ui/popover";
    import { onMount, setContext } from "svelte";
    import type { State as PopoverState } from "$ui/popover";

    type ComboboxState = PopoverState & {
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

    function generateNewState(): ComboboxState {
        const defaultState = generateDefaultState();
        return {
            ...defaultState,
            items: [],
            selected: "",
            results: [],
        };
    }

    let stateObject: ComboboxState = generateNewState();
</script>

<Popover
    bind:key
    generateDefaultState={generateNewState}
    {stateObject}
    stateName="combobox"
    role="menu"
    class={className}
>
    <slot />
</Popover>

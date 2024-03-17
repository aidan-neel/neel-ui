import Root from './combobox.svelte'
import Empty from './combobox-empty.svelte'
import Item from './combobox-item.svelte'
import Search from './combobox-search.svelte'
import Trigger from './combobox-trigger.svelte'
import Content from './combobox-content.svelte'
import Results from './combobox-results.svelte'

import { CreateStateStore } from '$lib/utils'

interface Item {
    name: string;
    label: string;
    value: string;
    searchPerformed: boolean;
    callback: Function;
}

interface ComboboxState {
    key: string;
    open: boolean;
    openSide: "top" | "bottom";
    selectedItem: Item;
    searchPerformed: boolean;
    items: Item[];
    results: string[] // Strings(values)
}

const stateType: ComboboxState[] = []
const comboboxStateManagement = CreateStateStore(stateType)

function comboboxBuilderFunction(): ComboboxState {
    function generateComboboxKey() {
        return "combobox-" + Math.random().toString(36).substring(2, 15);
    }

    const comboboxStateObject: ComboboxState = {
        key: generateComboboxKey(),
        open: false,
        openSide: "top",
        selectedItem: "",
        searchPerformed: false,
        items: [],
        results: []
    }

    comboboxStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[comboboxStateObject.key];

        newState[comboboxStateObject.key] = comboboxStateObject;

        return newState;
    });

    return comboboxStateObject;
}

export {
    Root,
    Empty,
    Item,
    Search,
    Trigger,
    Content,
    Results,

    comboboxStateManagement as comboboxState,
    type ComboboxState as comboboxStateType,
    comboboxBuilderFunction as comboboxBuilder
}
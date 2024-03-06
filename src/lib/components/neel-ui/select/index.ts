import Root from './select.svelte'
import Content from './select-content.svelte'
import Divider from './select-divider.svelte'
import Trigger from './select-trigger.svelte'
import Group from './select-group.svelte'
import Label from './select-label.svelte'
import Item from './select-item.svelte'
import { writable } from 'svelte/store'
import { CreateStateStore } from '$lib/utils'

interface SelectState {
    key: string;
    open: boolean;
    selectedValue: string | undefined;
    selectedLabel: string | undefined;
    openSide: "top" | "bottom";
}

const stateType: SelectState[] = []

let selectStateManagement = CreateStateStore(stateType)

function selectBuilderFunction(): SelectState {
    function generateSelectKey() {
        // Returns a random string of 12 characters
        return "select-" + Math.random().toString(36).substring(2, 15);
    }

    const selectStateObject: SelectState = {
        key: generateSelectKey(),
        open: false,
        selectedValue: undefined,
        selectedLabel: undefined,
        openSide: "top"
    }

    selectStateManagement.update((state) => {
        return {
            [selectStateObject.key]: selectStateObject
        }
    })

    return selectStateObject;
}

export {
    Root,
    Content,
    Divider,
    Group,
    Trigger,
    Label,
    Item,

    type SelectState as selectStateType,
    selectStateManagement as selectState,
    selectBuilderFunction as selectBuilder
}
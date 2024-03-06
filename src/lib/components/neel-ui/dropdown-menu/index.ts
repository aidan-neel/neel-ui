import Root from './dropdown-menu.svelte'
import Content from './dropdown-menu-content.svelte'
import Trigger from './dropdown-menu-trigger.svelte'
import Item from './dropdown-menu-item.svelte'
import Seperator from './dropdown-menu-seperator.svelte'
import Label from './dropdown-menu-label.svelte'
import { CreateStateStore } from '$lib/utils'

import { writable } from 'svelte/store'

interface DropdownMenuState {
    key: string;
    open: boolean;
    openSide: "top" | "bottom";
}

const stateType: DropdownMenuState[] = []

const dropdownStateManagement = CreateStateStore(stateType)

function dropdownBuilderFunction(): DropdownMenuState {
    function generateDropdownKey() {
        return "dropdown-" + Math.random().toString(36).substring(2, 15);
    }

    const dropdownStateObject: DropdownMenuState = {
        key: generateDropdownKey(),
        open: false,
        openSide: "top"
    }

    dropdownStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[dropdownStateObject.key];

        newState[dropdownStateObject.key] = dropdownStateObject;

        return newState;
    });

    return dropdownStateObject;
}

export {
    Root,
    Content,
    Trigger,
    Item,
    Seperator,
    Label,
    
    dropdownStateManagement as dropdownState,
    type DropdownMenuState as dropdownStateType,
    dropdownBuilderFunction as dropdownBuilder
}
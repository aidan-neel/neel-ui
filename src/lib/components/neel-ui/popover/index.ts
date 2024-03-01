import Root from "./popover.svelte";
import { writable } from "svelte/store";

interface PopoverState {
    open: boolean;
    key: string;
}

let popoverStateManagement = writable<PopoverState[]>([])
/**
 * [
        "popoverKey": {
            open: false,
            key: "popover-popoverKey"
        }
    ]
 */

function popoverBuilderFunction() {
    function generatePopoverKey() {
        // Returns a random string of 12 characters
        return "popover-" + Math.random().toString(36).substring(2, 15);
    }
    
    const popoverStateObject: PopoverState = {
        key: generatePopoverKey(),
        open: false
    }

    // Check to fix the "popoverState is not iterable" error when saving SvelteKit files
    // @ts-ignore
    if(Array.isArray(popoverStateManagement)) {
        popoverStateManagement.update((popoverState) => {
            return [...popoverState, popoverStateObject]
        })
    }

    return popoverStateObject;
}

export {
    Root as Popover,
    popoverStateManagement as popoverState,
    popoverBuilderFunction as popoverBuilder,
    type PopoverState as popoverStateType
};
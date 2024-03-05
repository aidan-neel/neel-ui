import Root from './sheet.svelte'
import Header from './sheet-header.svelte'
import Description from './sheet-description.svelte'
import Content from './sheet-content.svelte'
import Footer from './sheet-footer.svelte'
import Title from './sheet-title.svelte'
import Cancel from './sheet-cancel.svelte'
import Trigger from './sheet-trigger.svelte'
import { writable } from 'svelte/store'

interface SheetState {
    key: string;
    open: boolean;
    side: "left" | "right";
}

let sheetStateManagement = writable<SheetState[]>([])

function sheetBuilderFunction(side: "left" | "right"): SheetState {
    function generateSheetKey() {
        return "sheet-" + Math.random().toString(36).substring(2, 15);
    }

    const sheetStateObject: SheetState = {
        key: generateSheetKey(),
        open: false,
        side: side
    }

    sheetStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[sheetStateObject.key];

        newState[sheetStateObject.key] = sheetStateObject;

        return newState;
    });

    return sheetStateObject;

}

export {
    Root,
    Header,
    Description,
    Content,
    Footer,
    Title,
    Cancel,
    Trigger,

    sheetStateManagement,
    sheetBuilderFunction,
    type SheetState
}
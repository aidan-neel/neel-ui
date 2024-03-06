/**
 * Credit to this anonymous developer on this Svelte REPL for the core component logic
 * https://svelte.dev/repl/6fb90919e24942b2b47d9ad154386b0c?version=3.49.0
 * 
 * Saved me even when ChatGPT couldn't.
 */

import Root from './context-menu.svelte'
import Content from './context-menu-content.svelte'
import Item from './context-menu-item.svelte'
import Seperator from './context-menu-seperator.svelte'
import Trigger from './context-menu-trigger.svelte'

import { CreateStateStore } from '$lib/utils'

interface Position {
    x: number;
    y: number;
}

interface ContextMenuState {
    key: string;
    open: boolean;
    openSide: "top" | "bottom";
    position: Position;
    menu: {
        h: number;
        w: number;
    },
    items: {
        id: string;
        toggled: boolean;
    }[],
}

const stateType: ContextMenuState[] = []
const stateManagement = CreateStateStore(stateType)

function builderFunction(): ContextMenuState {
    function generateKey() {
        return "context-menu-" + Math.random().toString(36).substring(2, 15);
    }

    const stateObject: ContextMenuState = {
        key: generateKey(),
        open: false,
        openSide: "top",
        position: {
            x: 0,
            y: 0
        },
        menu: {
            h: 0,
            w: 0
        },
        items: []
    }

    stateManagement.update((state) => {
        const newState = { ...state };

        delete newState[stateObject.key];

        newState[stateObject.key] = stateObject;

        return newState;
    });

    return stateObject;
}

export {
    Root,
    Content,
    Item,
    Seperator,
    Trigger,
    
    stateManagement as contextState,
    type ContextMenuState as contextStateType,
    type Position as contextPositionType,
    builderFunction as contextBuilder
}
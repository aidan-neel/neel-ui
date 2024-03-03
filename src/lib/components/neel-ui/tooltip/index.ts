import Root from './tooltip.svelte'
import Content from './tooltip-content.svelte'
import Trigger from './tooltip-trigger.svelte'

import { writable } from 'svelte/store'

interface TooltipState {
    key: string;
    showing: boolean;
}

let tooltipStateManagement = writable<TooltipState[]>([])

function tooltipBuilderFunction(): TooltipState {
    function generateTooltipKey() {
        // Returns a random string of 12 characters
        return "tooltip-" + Math.random().toString(36).substring(2, 15);
    }

    const tooltipStateObject: TooltipState = {
        key: generateTooltipKey(),
        showing: false
    }

    tooltipStateManagement.update((state) => {
        const newState = { ...state };
        delete newState[tooltipStateObject.key];
        newState[tooltipStateObject.key] = tooltipStateObject
        return newState;
    })

    return tooltipStateObject
}

export {
    Root,
    Content,
    Trigger,

    tooltipBuilderFunction as tooltipBuilder,
    tooltipStateManagement as tooltipState,
    type TooltipState as tooltipStateType
}
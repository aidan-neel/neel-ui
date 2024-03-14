import Root from './popout.svelte'
import Content from './popout-content.svelte'
import Trigger from './popout-trigger.svelte'
import Header from './popout-header.svelte'
import Description from './popout-description.svelte'

import type { Event, EventProps, Hook } from "$Lib/event-handler";

import { CreateStateStore } from '$lib/utils'

interface popoutState {
    key: string;
    open: boolean;
    triggerHeight: number;
}

const stateType: popoutState[] = []
const popoutStateManagement = CreateStateStore(stateType)

function popoutBuilderFunction(): popoutState {
    function generatepopoutKey() {
        return "popout-" + Math.random().toString(36).substring(2, 15);
    }

    const popoutStateObject: popoutState = {
        key: generatepopoutKey(),
        open: false
    }

    popoutStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[popoutStateObject.key];

        newState[popoutStateObject.key] = popoutStateObject;

        return newState;
    });

    return popoutStateObject;
}

export {
    Root,
    Content,
    Trigger,
    Header,
    Description,

    popoutStateManagement as popoutState,
    type popoutState as popoutStateType,
    popoutBuilderFunction as popoutBuilder
}
import Root from './expand-text.svelte';

import { CreateStateStore } from "$lib/utils";
interface ExpandState {
    key: string;
    open: boolean;
}

const stateType: ExpandState[] = [];
const expandStateManagement = CreateStateStore(stateType);

function expandBuilderFunction(): ExpandState {
    function generateExpandKey() {
        return "expand-text-" + Math.random().toString(36).substring(2, 15);
    }

    const expandStateObject: ExpandState = {
        key: generateExpandKey(),
        open: false
    }

    expandStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[expandStateObject.key];

        newState[expandStateObject.key] = expandStateObject;

        return newState;
    });

    return expandStateObject;
}

export {
    Root as ExpandText,

    expandStateManagement as expandState,
    type ExpandState as expandStateType,
    expandBuilderFunction as expandBuilder
}
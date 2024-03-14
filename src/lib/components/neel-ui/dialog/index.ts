import Root from './dialog.svelte'
import Content from './dialog-content.svelte'
import Footer from './dialog-footer.svelte'
import Trigger from './dialog-trigger.svelte'
import Heading from './dialog-heading.svelte'
import Title from './dialog-title.svelte'
import Description from './dialog-description.svelte'
import Continue from './dialog-continue.svelte'

import { CreateStateStore } from '$lib/utils'

interface DialogState {
    key: string;
    open: boolean;
}

const stateType: DialogState[] = []
const dialogStateManagement = CreateStateStore(stateType)

function dialogBuilderFunction(): DialogState {
    function generateDialogKey() {
        return "dialog-" + Math.random().toString(36).substring(2, 15);
    }

    const dialogStateObject: DialogState = {
        key: generateDialogKey(),
        open: false
    }

    dialogStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[dialogStateObject.key];

        newState[dialogStateObject.key] = dialogStateObject;

        return newState;
    });

    return dialogStateObject;
}

export {
    Root,
    Content,
    Footer,
    Trigger,
    Heading,
    Title,
    Description,
    Continue,

    dialogStateManagement as dialogState,
    type DialogState as dialogStateType,
    dialogBuilderFunction as dialogBuilder
}
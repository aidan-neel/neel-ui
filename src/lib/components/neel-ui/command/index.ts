import Root from './command.svelte'
import Results from './command-results.svelte'
import Trigger from './command-trigger.svelte'
import Content from './command-content.svelte'
import Search from './command-search.svelte'
import Empty from './command-empty.svelte'
import Item from './command-item.svelte'
import Group from './command-group.svelte'
import Seperator from './command-seperator.svelte'

import { Builder, CreateStateStore } from '$lib/utils'

interface CommandState {
    key: string;
    open: boolean;
    items: {
        name: string;
        icon: string;
        shortcut: string;
        callback: Function;
        label?: string;
        heading: string;
        searchPerformed: boolean;
    };
    results: string[];
}

const stateType: CommandState[] = []

const commandStateManagement = CreateStateStore(stateType)

function commandBuilderFunction(key?: string): CommandState {
    function generateCommandKey() {
        if (key) {
            return key;
        } else {
            return "command-" + Math.random().toString(36).substring(2, 15);
        }
    }

    const commandStateObject: CommandState = {
        key: "",
        open: false,
        items: [{}],
        results: []
    } 

    commandStateManagement.update((state) => {
        const newState = { ...state };

        delete newState[commandStateObject.key];

        commandStateObject.key = generateCommandKey();

        newState[commandStateObject.key] = commandStateObject;

        return newState;
    });

    return commandStateObject;
}

export {
    Root,
    Results,
    Trigger,
    Content,
    Search,
    Empty,
    Item,
    Group,
    Seperator,
    
    commandStateManagement as commandState,
    commandBuilderFunction as commandBuilder,
    type CommandState as commandStateType
}
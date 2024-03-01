import Content from './tabs-content.svelte';
import Items from './tabs-items.svelte';
import Trigger from './tabs-trigger.svelte';
import Root from './tabs.svelte';
import { writable } from 'svelte/store';

interface TabState {
    open: boolean;
    key: string;
}

let tabStateManagement = writable<string[]>([])
/**
 * [
        "tabKey": {
            open: false,
            key: "tab-tabKey"
        }
    ]
 */

function tabBuilderFunction() {
    function generateTabKey() {
        // Returns a random string of 12 characters
        return "tab-" + Math.random().toString(36).substring(2, 15);
    }

    const tabStateObject: TabState = {
        key: generateTabKey(),
        open: false
    }

    if(Array.isArray(tabStateManagement)) {
        tabStateManagement.update((tabState) => {
            return [...tabState, tabStateObject.key]
        })
    }

    return tabStateObject;
}

export {
    Content,
    Items,
    Trigger,
    Root,

    type TabState as TabStateType,
    tabStateManagement as tabState,
    tabBuilderFunction as tabBuilder
}
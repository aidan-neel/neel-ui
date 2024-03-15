import Content from './tabs-content.svelte';
import Items from './tabs-items.svelte';
import Trigger from './tabs-trigger.svelte';
import Root from './tabs.svelte';
import { writable } from 'svelte/store';

interface TabState {
    key: string;
    openTab: string;
}

let tabStateManagement = writable<TabState[]>([])
/**
 * [
        "tabKey": {
            key: "tab-tabKey"
            openTab: "tabValue"
        }
    ]
 */

function tabBuilderFunction(
    startingTab: string
): TabState {
    function generateTabKey() {
        // Returns a random string of 12 characters
        return "tab-" + Math.random().toString(36).substring(2, 15);
    }

    const tabStateObject: TabState = {
        key: generateTabKey(),
        openTab: startingTab
    }

    tabStateManagement.update((state) => {
        // Create a copy of the state
        const newState = { ...state };
        
        // Remove the existing entry if it exists
        delete newState[tabStateObject.key];
        
        // Add the new entry
        newState[tabStateObject.key] = tabStateObject;
    
        return newState;
    });
    

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
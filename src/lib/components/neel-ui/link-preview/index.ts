import { writable } from 'svelte/store'

import Root from './link-preview.svelte'
import Content from './link-preview-content.svelte'
import Trigger from './link-preview-trigger.svelte'

interface LinkPreviewState {
    key: string;
    open: boolean;
}

let linkPreviewStateManagement = writable<LinkPreviewState[]>([])

function linkPreviewBuilderFunction(): LinkPreviewState {
    function generateLinkPreviewKey() {
        // Returns a random string of 12 characters
        return "link-preview-" + Math.random().toString(36).substring(2, 15);
    }

    const linkPreviewStateObject: LinkPreviewState = {
        key: generateLinkPreviewKey(),
        open: false
    }

    linkPreviewStateManagement.update((state) => {
        return {
            ...state,
            [linkPreviewStateObject.key]: linkPreviewStateObject
        }
    })

    return linkPreviewStateObject;
}

export {
    Root,
    Content,
    Trigger,

    type LinkPreviewState as linkPreviewStateType,
    linkPreviewStateManagement as linkPreviewState,
    linkPreviewBuilderFunction as linkPreviewBuilder
}
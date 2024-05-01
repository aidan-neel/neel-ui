import Root from "./popover.svelte";
import Content from "./content.svelte";
import Trigger from "./trigger.svelte";
import type { TriggerTypes } from "$library/event-types";

type State = {
    open: boolean;
    side: "top" | "right" | "bottom" | "left";
    data: {
        triggerHeight?: number;
        triggerWidth?: number;
        entered: boolean;
        enteredContent: boolean;
        openType: TriggerTypes;
        closeType: TriggerTypes;
        update: () => void;
        triggerInstance?: HTMLElement;
    };
};

function generateDefaultState(): State {
    return {
        open: false,
        side: "top",
        data: {
            entered: false,
            enteredContent: false,
            openType: "mouseenter",
            closeType: "mouseleave",
            update: () => {},
        },
    };
}

type Props = {
    class?: string;
    open?: boolean;
};

export type { State, Props };

export {
    Root,
    Content,
    Trigger,
    Root as Popover,
    Content as PopoverContent,
    Trigger as PopoverTrigger,
    generateDefaultState,
};

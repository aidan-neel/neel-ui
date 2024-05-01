// Add the identification name of the Event to the Events array
const Events = [
    "tooltip",
    "link-preview",
    "sheet",
    "dropdown",
    "confirm",
    "select",
    "collapsible",
    "dialog",
] as const;

const Triggers = [
    "mouseenter",
    "mouseleave",
    "focus",
    "blur",
    "click",
] as const;

type EventTypes = (typeof Events)[number];
type TriggerTypes = (typeof Triggers)[number];

interface EventProps {
    Hovering: boolean;
    Pressed: boolean;
    Focused: boolean;
    Entered: boolean;
    Left: boolean;
    Component: HTMLButtonElement | HTMLAnchorElement;
}

interface Hook {
    trigger: TriggerTypes;
    callback: (props: EventProps) => any;
}

interface Event {
    event?: EventTypes; // Must be one of the Events
    hooks: Hook[];
    bindTrigger?: {
        name?: string;
        key?: string;
    };
    triggered?: boolean;
}

export {
    // Events,
    // Triggers,

    // Types
    type TriggerTypes,
    type Event,
    type EventProps,
    type Hook,
};

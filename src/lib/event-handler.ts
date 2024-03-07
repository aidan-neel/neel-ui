// NOTE:
// You can use a custom event for your custom components
const Events = [
    "tooltip",
    "link-preview",
    "sheet",
    "dropdown",
    "confirm",
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
}

interface Hook {
    trigger: TriggerTypes;
    callback: (props: EventProps) => any;
}

interface Event {
    event: EventTypes; // Must be one of the Events
    hooks: Hook[];
}

export {
    // Events,
    // Triggers,
    
    // Types
    type Event, type EventProps,
    type Hook,
}
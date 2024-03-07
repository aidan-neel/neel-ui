import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import { writable } from "svelte/store";

export function cn(...inputs: ClassValue[]) {
    // Reverse order of inputs due to my incompetence
    return clsx(...inputs.reverse());
}

export type DefaultProps = {
    className?: string;
}

export function Builder(stateObject, name): any {
    const stateManagement = CreateStateStore(stateObject)

    function generateKey() {
        return `${name}-` + Math.random().toString(36).substring(2, 15);
    }

    stateObject.key = generateKey()
    stateManagement.update((state) => {
        const newState = { ...state };
        delete newState[stateObject.key];
        newState[stateObject.key] = stateObject;
        return newState;
    });

    return {
        stateManagement,
        stateObject
    }
}

export function CreateStateStore(stateType): any {
    const state = writable<typeof stateType[]>([])

    function open() {
        state.update((state) => {
            const newState = { ...state };
            newState.open = true;
            return newState;
        });
    }

    function close() {
        state.update((state) => {
            const newState = { ...state };
            newState.open = false;
            return newState;
        });
    }

    function getOpenState(key: string) {
        let open = false;
        state.subscribe((state) => {
            open = state[key].open;
        });
        return open;
    }

    function setOpenState(key: string, open: boolean) {
        state.update((state) => {
            const newState = { ...state };
            newState[key].open = open;
            return newState;
        });
    }

    function setOpenSide(key: string, openSide: "top" | "bottom") {
        state.update((state) => {
            const newState = { ...state };
            newState[key].openSide = openSide;
            return newState;
        });
    }

    function set(key: string, property: string, value: any) {
        state.update((state) => {
            const newState = { ...state };
            newState[key][property] = value;
            return newState;
        });
    } 

    function getValue(key: string, property: string) {
        let result = null;
        state.subscribe((state) => {
            result = state[key][property];
        });
        return result;
    }

    function get(key: string) {
        let result = null;
        state.subscribe((state) => {
            result = state[key];
        });
        return result;
    }

    function getAll() {
        let result = null;
        state.subscribe((state) => {
            result = state;
        });
        return result;
    }

    return {
        ...state,
        open,
        close,
        getOpenState,
        setOpenState,
        setOpenSide,
        set,
        get,
        getAll,
        getValue
    }
}

export const openSide = (elementId: string, state: any, key: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        const rect = element.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;

        // Define the minimum space required to open the dropdown at the bottom
        const requiredSpace = 100; // Adjust based on the dropdown's height

        // Check if there's enough space below, otherwise open on top as the last resort
        if (spaceBelow >= requiredSpace) {
            state.setOpenSide(key, "top");
        } else {
            state.setOpenSide(key, "bottom");
        }
    }
}

type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};

export const clickOutside = (node: HTMLElement, callback: (event: MouseEvent) => void) => {
    const handleClick = (event: MouseEvent) => {
        // Check if the click was outside the node
        if (node && !node.contains(event.target as Node)) {
            callback(event);
        }
    };

    // Listen for click events on the document
    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            // Remove event listener when the element is destroyed
            document.removeEventListener('click', handleClick, true);
        }
    };
};

export const flyAndScale = (
    node: Element,
    params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 100 }
): TransitionConfig => {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    const scaleConversion = (
        valueA: number,
        scaleA: [number, number],
        scaleB: [number, number]
    ) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;

        const percentage = (valueA - minA) / (maxA - minA);
        const valueB = percentage * (maxB - minB) + minB;

        return valueB;
    };

    const styleToString = (
        style: Record<string, number | string | undefined>
    ): string => {
        return Object.keys(style).reduce((str, key) => {
            if (style[key] === undefined) return str;
            return str + `${key}:${style[key]};`;
        }, "");
    };

    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t
            });
        },
        easing: cubicOut
    };
};
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return clsx(twMerge(...inputs));
}

export function clickOutside(node: Node, callback: () => any) {
    const handleClick = (event: any) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            callback();
        }
    };

    // Listen for click events on the document
    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            // Cleanup the event listener when the node is destroyed
            document.removeEventListener("click", handleClick, true);
        },
    };
}

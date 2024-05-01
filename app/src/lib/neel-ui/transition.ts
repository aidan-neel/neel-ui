import { cubicOut } from "svelte/easing";

type CupertinoParams = {
    mode?: "in" | "out"; // Added mode to specify the effect direction
    y?: number;
    x?: number;
    startScale?: number;
    endScale?: number;
    startOpacity?: number;
    endOpacity?: number;
    duration?: number;
};

export const cupertino = (
    node: Element,
    {
        mode = "in", // Default mode is 'in' for scale-up and fade-in
        y = 0, // Set to 0 for scaling without moving
        x = 0, // Set to 0 for scaling without moving
        startScale = mode === "in" ? 0.85 : 1, // Start smaller for 'in', full size for 'out'
        endScale = mode === "in" ? 1 : 0.85, // End at full size for 'in', smaller for 'out'
        startOpacity = mode === "in" ? 0 : 1, // Start transparent for 'in', opaque for 'out'
        endOpacity = mode === "in" ? 1 : 0, // End opaque for 'in', transparent for 'out'
        duration = 150, // Duration of the transition
    }: CupertinoParams = {},
): {
    duration: number;
    delay: number;
    css: (t: number) => string;
    easing: typeof cubicOut;
} => {
    const initialTransform = getComputedStyle(node).transform.replace(
        "none",
        "",
    );

    return {
        duration,
        delay: 0,
        css: (t) => {
            const easing = cubicOut(t);
            const scale = startScale + (endScale - startScale) * easing;
            const opacity = startOpacity + (endOpacity - startOpacity) * easing;
            return `
                transform: ${initialTransform} scale(${scale});
                opacity: ${opacity};
            `;
        },
        easing: cubicOut,
    };
};

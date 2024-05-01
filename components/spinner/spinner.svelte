<script lang="ts">
    import { cn } from "$library/utils";

    type $$Props = {
        class?: string;
        speed?: number;
        label?: string;
    };

    export let className: $$Props["class"] = undefined;
    export let speed: $$Props["speed"] = 1000;
    export let label: $$Props["label"] = "";
    export { className as class };
</script>

<div
    class="text-foreground-muted flex gap-2 flex-row justify-center items-center"
>
    <svg
        class={cn("w-8 h-8", className)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...$$props}
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-dasharray="15"
            stroke-dashoffset="15"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 3C16.9706 3 21 7.02944 21 12"
        >
            <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="15;0"
            />
            <animateTransform
                attributeName="transform"
                dur={`${speed}ms`}
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </path>
    </svg>
    {#if label}
        <p class="text-foreground-muted">
            {label}
        </p>
    {/if}
</div>

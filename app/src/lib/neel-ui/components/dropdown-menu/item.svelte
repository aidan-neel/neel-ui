<script lang="ts">
    import { globalStateStore } from "$library/state";
    import { cn } from "$library/utils";
    import Button from "$ui/button";
    import ChevronRight from "lucide-svelte/icons/chevron-right";
    import { getContext } from "svelte";

    const key = getContext<string>("key");
    const stateName = getContext<string>("stateName");

    type $$Props = {
        class?: string;
        data?: any;
        closeOnClick?: boolean;
        onClick?: () => void;
    } & typeof $$restProps;

    // shortcut implementation

    let className: $$Props["class"] | undefined = undefined;
    export let data: $$Props["data"] = undefined;
    export let closeOnClick: $$Props["closeOnClick"] = false;
    export let onClick: $$Props["onClick"] = undefined;
    export { className as class };
</script>

<div class="px-1 w-full">
    {#if data}
        <Button
            {...$$restProps}
            on:click={() => {
                if (closeOnClick) {
                    $globalStateStore[stateName][key].open = false;
                }

                if (onClick) {
                    onClick();
                }
            }}
            {data}
            variant="ghost"
            class={cn(
                "w-full no-pointer-button rounded-md justify-between items-center px-3 pr-2 h-10 flex flex-row",
                className,
            )}
        >
            <slot />
            <ChevronRight class="w-5 h-5 text-foreground-muted" />
        </Button>
    {:else}
        <Button
            {...$$restProps}
            on:click={() => {
                if (closeOnClick) {
                    $globalStateStore[stateName][key].open = false;
                }

                if (onClick) {
                    onClick();
                }
            }}
            variant="ghost"
            class={cn(
                "w-full no-pointer-button rounded-md justify-start px-3 h-10",
                className,
            )}
        >
            <slot />
        </Button>
    {/if}
</div>

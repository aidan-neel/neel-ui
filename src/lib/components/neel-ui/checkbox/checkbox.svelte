<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import Check from 'svelte-radix/Check.svelte'

    type $$Props = DefaultProps & {
        label?: boolean;
        checked?: boolean;
        name?: string;
        value?: string;
    };

    function genId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    let label: $$Props["label"] = false;
    let checked: $$Props["checked"] = false;
    let id: $$Props["id"] = genId();
    let name: $$Props["name"] = undefined;
    let value: $$Props["value"] = undefined;

    export {
        className as class,
        label,
        checked,
        id,
        name,
        value
    }

    // Unexported variables
    // let unexportedVariable: string | undefined = undefined;
</script>

<input type="checkbox" bind:checked={checked} name={name} id={id} value={value} class="hidden">
{#if label}
    <label for={id} class="font-medium select-none flex flex-row text-[14px] items-center gap-2">
        <div {...$$restProps} class={cn(className, `w-4 select-none h-4 rounded-md border flex items-center justify-center ${checked ? 'border-foreground bg-foreground' : 'border-foreground bg-background'}`)}>
            {#if checked}
                <Check class="w-4 h-4 text-black" />
            {/if}
        </div>
        <slot></slot>
    </label>
{/if}

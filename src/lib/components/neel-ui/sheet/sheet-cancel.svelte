<script lang="ts">
    let className: string | undefined = undefined;
    import { Button } from '$lib/components/neel-ui/button';

    import { cn } from '$lib/utils'    
    import { sheetStateManagement } from '.';
    import { getContext } from 'svelte';

    const key = getContext("SheetBuilderData").key;

    export let callback: () => void | Promise<void> = () => {};

    function onClick() {
        $sheetStateManagement[key].open = false;
        callback();
    }

    export {
        className as class
    }
</script>

<Button {...$$restProps} on:click={onClick} class={cn(className, ``)}>
    <slot></slot>
</Button>
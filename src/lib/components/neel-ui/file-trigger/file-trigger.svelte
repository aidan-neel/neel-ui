<script lang="ts">
    // This is the template for creating a new Neel-UI component
    // Feel free to use it as a starting point for your new component
    // You can remove the comments and the imports that you don't need

    // Imports
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils'
    import { Button } from '$lib/components/neel-ui/button'
    import type { Event, EventProps, Hook } from '$lib/event-handler'
    import Upload from 'svelte-radix/Upload.svelte'

    type $$Props = DefaultProps & {
        accept: string;
        file: File;
        multiple: boolean;
        showIcon: boolean;
    };
    
    // Exported variables
    let className: $$Props["class"] = undefined;
    export let files: $$Props["file"] = undefined;
    export let accept: $$Props["accept"] = "*";
    export let multiple: $$Props["multiple"] = false;
    export let showIcon: $$Props["showIcon"] = true;
    export { className as class }

    // Unexported variables
    let fileInput: HTMLInputElement | undefined = undefined;
    
    function handleInput() {
        fileInput?.click();
    }

    function handleChange() {
        files = fileInput?.files;
    }
</script>

<input on:change={handleChange} multiple={multiple} type="file" bind:this={fileInput} accept={accept} class="hidden" />

<Button on:click={handleInput} {...$$restProps} class={cn(className, ``)}>
    <slot></slot>
    {#if showIcon}
        <Upload class="w-4 h-4 ml-2" />
    {/if}
</Button>
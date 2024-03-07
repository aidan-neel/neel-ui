<script lang="ts">
    /**
     * Credit to this anonymous developer on this Svelte REPL for the core component logic
     * https://svelte.dev/repl/6fb90919e24942b2b47d9ad154386b0c?version=3.49.0
     * 
     * Saved me even when ChatGPT couldn't.
     */
    let className: string | undefined = undefined;

    import { setContext, getContext } from "svelte";
    import { type contextStateType, contextState, contextBuilder } from ".";

    const builder = contextBuilder()
    setContext<contextStateType>("BuilderData", builder);

    import { cn } from '$lib/utils'    

    export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot></slot>
</div>
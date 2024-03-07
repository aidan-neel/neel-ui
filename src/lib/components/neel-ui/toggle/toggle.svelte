<script lang="ts">
  import { cn } from "$lib/utils";
    import { toggleVariants } from ".";

    export let variant = "primary";
    export let toggled = false;
    export let className: string | undefined = undefined;
    export { className as class }
</script>

<button 
on:click={() => { toggled = !toggled }}
{...$$restProps}
class={cn(className, ` ${toggled ? toggleVariants[variant + "-checked"] : toggleVariants[variant]}`)} >
    <slot />
</button>
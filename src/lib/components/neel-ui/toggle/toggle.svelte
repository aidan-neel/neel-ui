<script lang="ts">
    import { toggleVariants } from ".";

    export let variant = "primary";
    export let toggled = false;
    export let className: string | undefined = undefined;
    export { className as class }
</script>

<button 
on:click={() => { toggled = !toggled }}
{...$$restProps}
class={`${className} ${toggled ? toggleVariants[variant + "-checked"] : toggleVariants[variant]}`} >
    <slot />
</button>
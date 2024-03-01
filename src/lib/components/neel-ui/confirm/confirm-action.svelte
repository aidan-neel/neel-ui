<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';

    let className: string | undefined = undefined;
    export { className as class }
</script>

<Button on:click class={`${className} w-full`} variant="primary">
    <slot></slot>
</Button>
<script lang="ts">
    let className: string | undefined = undefined;
    import { Button } from '$lib/components/neel-ui/button';

    export {
        className as class
    }
</script>

<Button {...$$restProps} class={`${className}`}>
    <slot></slot>
</Button>
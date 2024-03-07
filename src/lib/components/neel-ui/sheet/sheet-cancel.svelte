<script lang="ts">
    let className: string | undefined = undefined;
    import { Button } from '$lib/components/neel-ui/button';

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<Button {...$$restProps} class={cn(className, ``)}>
    <slot></slot>
</Button>
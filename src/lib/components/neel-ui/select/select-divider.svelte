<script lang="ts">
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ` border-t pt-2 pb-1`)}>
    <slot></slot>
</div>
<script lang="ts">
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ` text-[14px] w-full pl-3 mb-1 py-2 font-semibold border-b`)}>
    <slot></slot>
</div>
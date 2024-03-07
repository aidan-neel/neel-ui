<script lang="ts">
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div {...$$restProps} class={cn(className, ` flex flex-row justify-end items-center w-full mt-4`)}>
    <slot></slot>
</div>
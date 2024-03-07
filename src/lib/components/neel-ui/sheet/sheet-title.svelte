<script lang="ts">
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<h1 {...$$restProps} class={cn(className, ` font-semibold text-foreground text-xl`)}>
    <slot></slot>
</h1>
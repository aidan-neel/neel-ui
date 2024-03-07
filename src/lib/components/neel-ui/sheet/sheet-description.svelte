<script lang="ts">
    let className: string | undefined = undefined;

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<p {...$$restProps} class={cn(className, ` text-muted-foreground font-normal mb-4`)}>
    <slot></slot>
</p>
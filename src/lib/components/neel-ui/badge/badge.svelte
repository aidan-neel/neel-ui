<script lang="ts">
    let className: string | undefined = undefined;
    
    const BadgeVariants = {
        primary: "bg-foreground text-secondary hover:bg-button-hovered",
        secondary: "shadow-class border bg-background",
        ghost: "bg-secondary",
    }

    export let variant: keyof typeof BadgeVariants = "primary";

import { cn } from '$lib/utils'    

export {
        className as class
    }
</script>

<div
    aria-label="Badge"
    {...$$restProps} class={cn(className, `${BadgeVariants[variant]} font-semibold text-[12px] px-3 select-none duration-100 py-0.5 rounded-lg`)}>
    <slot></slot>
</div>
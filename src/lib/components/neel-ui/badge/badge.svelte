<script lang="ts">
    let className: string | undefined = undefined;
    
    const BadgeVariants = {
        primary: "bg-foreground text-secondary hover:bg-button-hovered",
        secondary: "bg-background border",
        ghost: "bg-secondary",
    }

    export let variant: keyof typeof BadgeVariants = "primary";

    export {
        className as class
    }
</script>

<div
    aria-label="Badge"
    {...$$restProps} class={`${className} ${BadgeVariants[variant]} font-semibold text-[12px] px-3 select-none duration-100 py-0.5 rounded-lg`}>
    <slot></slot>
</div>
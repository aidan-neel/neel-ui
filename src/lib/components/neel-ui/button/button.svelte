<script lang="ts">
    const buttonVariants = {
        "primary": "bg-primary border border-primary-border h-9 px-5 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium hover:bg-primary/80 duration-100",
        "secondary": "hover:bg-primary/10 border border-primary-border/30 px-5 h-9 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium bg-primary/20 duration-100",
    }

    export let variant: keyof typeof buttonVariants = "primary";

    export let className: string | undefined = undefined;
    export { className as class }
</script>

<button on:click class={`${buttonVariants[variant]} ${className}`} {...$$restProps}>
    <slot></slot>
</button>
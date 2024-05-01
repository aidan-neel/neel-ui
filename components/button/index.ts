import type { SvelteComponent } from "svelte";
import Button from "./button.svelte";
import type { Event } from "$library/event-types";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
    base: "flex items-center font-medium justify-center rounded-lg text-foreground duration-150 focus:ring-1 focus:ring-white/70 focus:ring-offset-1 focus:outline-none",
    variants: {
        variant: {
            primary:
                "bg-primary active:bg-primary-active hover:bg-primary-hovered focus:bg-primary-hovered text-foreground-opposite",
            "primary-disabled": "bg-primary-disabled text-foreground-disabled",

            secondary:
                "bg-secondary active:bg-secondary-active hover:bg-secondary-hovered focus:bg-secondary-hovered text-foreground-opposite",
            "secondary-disabled":
                "bg-secondary-disabled text-foreground-disabled",

            alternate:
                "bg-alternate active:bg-alternate-hovered/70 hover:bg-alternate-hovered focus:bg-alternate-hovered text-alternate-foreground",

            "alternate-disabled":
                "bg-alternate-disabled text-alternate-foreground/50",

            "alternate-secondary":
                "bg-alternate/70 active:bg-alternate-hovered/30 hover:bg-alternate-hovered/50 focus:bg-alternate-hovered text-foreground",
            "alternate-secondary-disabled":
                "bg-alternate-disabled text-foreground/50",

            outlined:
                "bg-transparent active:bg-alternate-hovered/50 border-default hover:bg-border focus:bg-border text-foreground",
            "outlined-disabled":
                "bg-transparent border-default text-foreground-disabled",

            ghost: "bg-transparent hover:text-ghost-foreground shadow-none hover:bg-ghost-hovered active:bg-ghost-active text-foreground focus:bg-secondary/30",
            "ghost-disabled": "bg-transparent text-foreground-disabled",

            bordered:
                "bg-transparent active:bg-primary-active border border-primary hover:bg-primary hover:text-foreground-opposite focus:bg-primary-hovered/20 text-primary",

            "bordered-disabled":
                "bg-transparent border-default border-primary-disabled text-primary-disabled",

            link: "bg-transparent hover:underline active:bg-transparent, hover:bg-transparent, focus:bg-transparent, text-foreground-muted, hover:text-foreground",
            "link-disabled": "bg-transparent text-foreground-disabled",

            barebones:
                "bg-transparent active:bg-transparent hover:bg-transparent focus:bg-transparent text-foreground",
            "barebones-disabled": "bg-transparent text-foreground-disabled",
        },
        size: {
            default: "h-10 px-7",
            sm: "h-8 px-4 text-xs",
            lg: "h-12 px-7 text-lg",
            icon: "h-10 w-10",
            barebones: "",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
    },
});

type Variant = VariantProps<typeof ButtonVariants>;
type Size = Variant["size"];
type Props = {
    class?: string;
    variant?: Variant["variant"];
    size?: Variant["size"];
    disabled?: boolean;
    loading?: boolean;
    icon?: typeof SvelteComponent;
    spinner?: typeof SvelteComponent;
    data?: Event;
    href?: string;
};

export default Button;
export { Button, ButtonVariants, type Variant, type Size, type Props };

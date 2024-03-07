import Button from "./button.svelte";
import type { Event, EventProps, Hook } from '$lib/event-handler';
import { tv } from 'tailwind-variants';

const buttonVariants = {
    "primary": "shadow-class bg-button border border-border h-10 px-4 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium hover:bg-button-hovered duration-100 text-secondary",
    "secondary": "shadow-class hover:bg-primary-muted_bg_hovered border border-primary-muted_border px-4  h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium bg-popover-bg duration-100",
    "link": "shadow-class hover:underline text-[14px]",
    "ghost": "shadow-class hover:bg-muted border border-transparent hover:border-muted px-4 h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground font-medium duration-100",
    // Disabled variants are just the same as the primary, secondary, link and ghost variants but a little darker backgrounds/borders. Created for the sake of consistency.
    "primary-disabled": "shadow-class bg-button-disabled border border-border-disabled h-10 px-4 flex justify-center items-center text-[14px] rounded-lg text-foreground-disabled font-medium duration-100 text-secondary",
    "secondary-disabled": "shadow-class border border px-4  h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground-disabled font-medium bg-primary-muted_bg-disabled duration-100",
    "link-disabled": "shadow-class text-[14px] text-foreground-disabled",
    "ghost-disabled": "shadow-class border border-transparent px-4 h-10 flex justify-center items-center text-[14px] rounded-lg text-foreground-disabled font-medium duration-100"
}

// Button variants rework using Tailwind-Variants coming soon
/*
const button = tv({
    base: "shadow-class h-10 px-4 flex justify-center items-center text-[14px] rounded-lg font-medium duration-100",
    variants: {
        color: {
            primary: "bg-button text-secondary border border-border",
        }
    }
})
*/
//

export {
    Button,
    // type DataBuilderType,
    buttonVariants
};
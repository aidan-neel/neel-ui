import Button from "./button.svelte";
import type { Event, EventProps, Hook } from '$lib/event-handler';
import { tv } from 'tailwind-variants';

const buttonVariants = {
    "primary": "bg-button border border-button-border h-10 px-4 flex justify-center items-center text-[14px] rounded-lg font-medium text-button-foreground-primary hover:bg-button-hovered duration-100",
    "secondary": "hover:bg-button-hovered-dark border border-button-border px-4  h-10 flex justify-center items-center text-[14px] font-medium rounded-lg text-button-foreground bg-background duration-100",
    "link": "hover:underline text-[14px]",
    "ghost": "hover:bg-muted border border-transparent hover:border-muted px-4 h-10 flex justify-center items-center text-[14px] font-medium rounded-lg text-button-foreground duration-100",
    // Disabled variants are just the same as the primary, secondary, link and ghost variants but a little darker backgrounds/borders. Created for the sake of consistency.
    "primary-disabled": "bg-button-disabled border border-border-disabled h-10 px-4 flex justify-center items-center text-[14px] font-medium rounded-lg text-button-foreground-disabled duration-100",
    "secondary-disabled": "border border px-4  h-10 flex justify-center items-center text-[14px] rounded-lg text-button-foreground-disabled font-medium bg-primary-muted_bg-disabled duration-100",
    "link-disabled": "text-[14px] text-button-foreground-disabled font-medium",
    "ghost-disabled": "border border-transparent px-4 h-10 flex justify-center font-medium items-center text-[14px] rounded-lg text-button-foreground-disabled duration-100"
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
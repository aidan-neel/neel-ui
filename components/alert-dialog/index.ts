import Root from "./alert-dialog.svelte";
import Footer from "./footer.svelte";
import Content from "./content.svelte";
import Description from "./description.svelte";
import Title from "./title.svelte";
import Trigger from "./trigger.svelte";
import type { SvelteComponent } from "svelte";
import { tv, type VariantProps } from "tailwind-variants";

type State = {
    open: boolean;
    data: {
        cancelButton?: HTMLButtonElement;
    };
};

const AlertDialogVariants = tv({
    base: "p-7 py-10 sm:py-7 border-default rounded-lg flex items-center justify-center flex-col mx-5 bg-alternate-muted",
    variants: {
        size: {
            sm: "w-auto max-w-[20rem] xs:max-w-[10rem] md:min-w-[15rem]",
            md: "w-auto max-w-[45rem] xs:max-w-[20rem] md:min-w-[37.5rem]",
            lg: "w-auto max-w-[45rem] xs:max-w-[30rem] md:min-w-[40rem]",
            xl: "w-auto max-w-[50rem] xs:max-w-[35rem] md:min-w-[50rem]",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

type Variant = VariantProps<typeof AlertDialogVariants>;

type Props = {
    class?: string;
    size?: Variant["size"];
    open?: boolean;
};

export type { State, Props };

export {
    Root,
    Footer,
    Content,
    Description,
    Title,
    Trigger,
    Root as AlertDialogRoot,
    Footer as AlertDialogFooter,
    Content as AlertDialogContent,
    Description as AlertDialogDescription,
    Title as AlertDialogTitle,
    Trigger as AlertDialogTrigger,
    AlertDialogVariants,
};

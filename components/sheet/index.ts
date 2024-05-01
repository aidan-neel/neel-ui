import Root from "./sheet.svelte";
import Content from "./content.svelte";
import Description from "./description.svelte";
import Header from "./header.svelte";
import Title from "./title.svelte";
import Trigger from "./trigger.svelte";
import Footer from "./footer.svelte";

type State = {
    open: boolean;
    data: any;
};

export type { State };

export {
    Root,
    Content,
    Description,
    Header,
    Title,
    Trigger,
    Footer,
    Root as Sheet,
    Content as SheetContent,
    Description as SheetDescription,
    Header as SheetHeader,
    Title as SheetTitle,
    Trigger as SheetTrigger,
    Footer as SheetFooter,
};

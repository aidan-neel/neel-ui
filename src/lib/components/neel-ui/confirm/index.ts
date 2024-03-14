import Root from "./confirm.svelte";
import Heading from "./confirm-heading.svelte";
import Trigger from "./confirm-trigger.svelte";
import Content from "./confirm-content.svelte";
import Title from "./confirm-title.svelte";
import Description from "./confirm-description.svelte";
import Cancel from "./confirm-cancel.svelte";
import Action from "./confirm-action.svelte";
import Footer from "./confirm-footer.svelte";
import { popoverBuilder } from "../modal";

export {
    Root,
    Heading,
    Trigger,
    Content,
    Title,
    Description,
    Cancel,
    Action,
    Footer,
    popoverBuilder as Builder,
};
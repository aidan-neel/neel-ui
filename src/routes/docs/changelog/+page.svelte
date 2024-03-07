<script lang="ts">
    import ChevronRight from "svelte-radix/ChevronRight.svelte";
    import Seo from "$lib/components/seo.svelte";
    import { examples } from "$lib/examples";
    import VariantCard from "$lib/components/variant-card.svelte";
    import {Toggle} from "$lib/components/neel-ui/toggle";
    import DropdownMenuExample from "$lib/components/examples/dropdown-menu-example.svelte";
    import { toggleExamples } from "../components/toggle/toggle";
    import ContextMenuExample from "$lib/components/examples/context-menu-example.svelte";
    import DocCard from "$lib/components/doc-card.svelte";
    import CommandExample from "$lib/components/examples/command-example.svelte";
</script>

<Seo name="changelog" />

<main class="lg:w-[45rem] w-full flex flex-col mt-24">
    <div class="flex flex-row fade-up items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Introduction</span>
    </div>
    <h1 class="header_c fade-up">
        Changelog
    </h1>
    <p class="description_c fade-up">
        The latest updates to Neel UI
    </p>

    <h2 class='header_2nd mt-8 fade-up border-b pb-4'>
        March 2024 - Update 2
    </h2>

    <h3 class="header_3rd mt-4 fade-up">
        Component: Command
    </h3>

    <p class="text-[16px] fade-up mt-2">
        The <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">command</span> is a fast and easy way to search and execute commands within a page.
    </p>

    <DocCard 
    component="context-menu"
    desc="Context Menu is a type of menu that appears upon right clicking on an element."
    header="Context Menu"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <CommandExample />
    </DocCard>

    <h2 class='header_2nd mt-8 fade-up border-b pb-4'>
        March 2024 - Update 1
    </h2>

    <h3 class="header_3rd mt-4 fade-up">
        Component: Context Menu
    </h3>

    <p class="text-[16px] fade-up mt-2">
        The <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">context-menu</span> is a simple component that can be used to display a list of items when triggered. It is designed to be used in a context menu, but can be used anywhere.
    </p>

    <DocCard 
    component="context-menu"
    desc="Context Menu is a type of menu that appears upon right clicking on an element."
    header="Context Menu"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <ContextMenuExample />
    </DocCard>

    <h3 class="header_3rd mt-4 fade-up">
        Component: Dropdown Menu
    </h3>

    <p class="text-[16px] fade-up mt-2">
        The <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">dropdown-menu</span> component displays a list of items when triggered.
    </p>

    <div class="w-full flex items-center justify-center fade-up bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={examples["dropdown-menu"]}>
            <DropdownMenuExample />
        </VariantCard>
    </div>

    <h3 class="header_3rd mt-8 fade-up pt-4 border-t">
        Component: Toggle
    </h3>
    
    <p class="text-[16px] fade-up mt-2">
        The <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">toggle</span> component is a simple component that can be used to switch between two states. It is a simple switch that can be used to toggle between two states.
    </p>
    
    <h1 class="header_3rd mt-4 border-b pb-4 fade-up">
        Variants
    </h1>

    <h3 class="text-xl font-semibold mt-4 fade-up">
        Primary
    </h3>

    <div class="w-full flex items-center justify-center fade-up bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={examples["toggle"]}>
            <Toggle variant="primary" aria-label="toggled">
                Primary
            </Toggle>
        </VariantCard>
    </div>

    <h3 class="text-xl font-semibold mt-4 fade-up">
        Secondary
    </h3>

    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative fade-up rounded-lg border mt-4">
        <VariantCard code={toggleExamples["secondary"]}>
            <Toggle variant="secondary" aria-label="toggled">
                Secondary
            </Toggle>
        </VariantCard>
    </div>

    
    <h3 class="header_3rd mt-4 fade-up">
        Confirm Component Update
    </h3>
    <p class="text-[16px] fade-up mt-2 border-b pb-4">
        The <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">confirm</span> component used to not have the new Trigger system as used by
        <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">dropdown-menu</span> and others. We've updated the <span class="bg-secondary-muted shadow-class border p-1 rounded-lg text-[14px]">confirm</span> component to use the new Trigger system.
    </p>

    <h3 class="header_3rd mt-4 fade-up">
        Portal Menu Update
    </h3>
    <p class="text-[16px] fade-up mt-2 border-b pb-4">
        Before this update, the portal menu(select, dropdown) would always open from the bottom. Now, the portal menu will open from the top if there is not enough space at the bottom.
    </p>


    <h2 class='header_2nd mt-8 fade-up border-b pb-4'>
        Beta v0.0.1 🎉
    </h2>
    <h3 class="header_3rd mt-4 fade-up">
        - Initial release
    </h3>
    <p class="text-[16px] fade-up mt-2">
        The initial release of Neel UI ships with the base 12 components. We plan to add upwards of 30 components in the future. The initial release includes the following components:
    </p>

    <div class="p-4 w-full flex flex-col fade-up gap-1 bg-secondary-muted shadow-class border rounded-lg mt-4 font-mono text-[13px]">
        <span class="text-[#70b9a5]"> alert </span> - Displays a callout message to the user<br><br>
        <span class="text-[#70b9a5]"> badge </span> - Displays a basic component that looks like a badge<br><br>
        <span class="text-[#70b9a5]"> breadcrumb </span> - Breadcrumb component designed for easy navigation within a page<br><br>
        <span class="text-[#70b9a5]"> button </span> - Displays a basic button with various styles and variants<br><br>
        <span class="text-[#70b9a5]"> card </span> - A card component with header and description sub-components<br><br>
        <span class="text-[#70b9a5]"> confirm </span> - A modal dialog for confirmation of user destructive action<br><br>
        <span class="text-[#70b9a5]"> input </span> - An input component with an optional label<br><br>
        <span class="text-[#70b9a5]"> link-preview </span> - Displays content behind a link in a preview format<br><br>
        <span class="text-[#70b9a5]"> select </span> - Selection component with groups of items to choose from<br><br>
        <span class="text-[#70b9a5]"> sheet </span> - Displays a sheet component that comes out from a direction of your choice<br><br>
        <span class="text-[#70b9a5]"> tabs </span> - Tabs component which allows you to swap between content displays<br><br>
        <span class="text-[#70b9a5]"> tooltip </span> - Display's a tooltip card whenever you hover something for 750ms<br><br>
    </div>

    <h3 class="header_3rd mt-4 fade-up">
        More is planned
    </h3>

    <p class="text-[16px] fade-up mt-2">
        We plan to add more components in the future. Shadcn/UI is the base inspiration for this project so expect to see a lot of components from there.
        Over time, we plan to add upwards of 30 components to Neel UI.
    </p>
</main> 
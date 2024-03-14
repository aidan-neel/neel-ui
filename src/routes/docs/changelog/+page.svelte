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
    import KeycodeExample from "$lib/components/examples/keycode-example.svelte";
    import SwitchExample from "$lib/components/examples/switch-example.svelte";
    import Highlighted from "$lib/components/highlighted.svelte";
    import CodeBlock from "$lib/components/code-block.svelte";
    import CheckboxExample from "$lib/components/examples/checkbox-example.svelte";

    import { eventExampleCode } from "$lib/examples";
    import PopoutExample from "$lib/components/examples/popout-example.svelte";
    import ExpandExample from "$lib/components/examples/expand-example.svelte";
    import FileExample from "$lib/components/examples/file-example.svelte";
  import DialogExample from "$lib/components/examples/dialog-example.svelte";
  import ToastExample from "$lib/components/examples/toast-example.svelte";
</script>

<Seo name="changelog" />

<main class="lg:w-[45rem] w-full flex flex-col gap-2 mt-24">
    <div class="flex flex-row   items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Introduction</span>
    </div>
    <h1 class="header_c  ">
        Changelog
    </h1>
    <p class="description_c  ">
        The latest updates to Neel UI
    </p>

    <h2 class='header_2nd mt-8   border-b pb-4'>
        March 2024 - Update 3
    </h2>

    <h3 class="header_3rd mt-4  ">
        Updated System: Events
    </h3>

    <p class="text-[18px]   mt-2">
        The old button <Highlighted>events</Highlighted> system was a gross and buggy mess which didn't
        allow for users to add thier own custom events easily. It looked terrible, and was a pain to use. We've updated the
        <Highlighted>events</Highlighted> system to be more modular and easy to use.
        
        <br><br>To create a custom event, you can now add the event name to the 
        <Highlighted>Events</Highlighted> variable in the <Highlighted>lib/event-handler.ts</Highlighted> file.
        Then, in your component's trigger system, you can declare a new <Highlighted>Hook</Highlighted> and add it to your <Highlighted>Event</Highlighted> object. <br><br>
        The example below demonstrates how to use the new <Highlighted>events</Highlighted> system.
        
        <CodeBlock class="mt-4" code={eventExampleCode} />
    </p>

    <h3 class="header_3rd mt-4  ">
        Component: Toast
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Toast</Highlighted> component displays a message to the user for a short period of time. It is a simple component that can be used to display a message to the user.
    </p>

    <DocCard 
    component="dialog"
    desc=""
    header="dialog"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <ToastExample />
    </DocCard>


    <h3 class="header_3rd mt-4  ">
        Component: Dialog
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Dialog</Highlighted> component is a type of modal window that appears to provide critical information or ask for a decision. It is a simple component that can be used to display a modal window.
    </p>

    <DocCard 
    component="dialog"
    desc=""
    header="dialog"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <DialogExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: Checkbox
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Checkbox</Highlighted> is a very simple component that should've been added earlier. It is a simple checkbox that can be used to select or deselect an option.
    </p>

    <DocCard 
    component="checkbox"
    desc=""
    header="checkbox"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <CheckboxExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: File Trigger
    </h3>

    <p class="text-[18px]   mt-2">
        <Highlighted>File Trigger</Highlighted> allows you to select files from your device. It is a simple component that can be used to trigger the file input element. 
    </p>

    <DocCard 
    component="file-trigger"
    desc=""
    header="file-trigger"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <FileExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: Expand Text
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Expand Text</Highlighted> component is a simple component that can be used to expand hidden text on click. It's useful for things like long descriptions or other content that you want to hide until the user clicks on it.
    </p>

    <DocCard 
    component="expand-text"
    desc=""
    header="expand-text"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <ExpandExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: Popout
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Popout</Highlighted> is great for displaying rich content in a popout window. It's a great way to display a lot of content in a small space.
    </p>

    <DocCard 
    component="popout"
    desc=""
    header="popout"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <PopoutExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: Switch
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Switch</Highlighted> is a pill switch component for toggling between two states.
    </p>

    <DocCard 
    component="switch"
    desc=""
    header="switch"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <SwitchExample />
    </DocCard>

    <h3 class="header_3rd mt-4  ">
        Component: Keycode
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Keycode</Highlighted> component is great for one time passwords and other similar use cases. It is built on top of
        <a href="https://github.com/K4UNG/svelte-otp" class="font-medium underline">svelte-otp</a> built by K4UNG.
    </p>

    <DocCard 
    component="keycode"
    desc=""
    header="keycode"
    showHeading={false}
    showUsage={false}
    showInstallation={false}
    >
        <KeycodeExample />
    </DocCard>

    <h2 class='header_2nd mt-8   border-b pb-4'>
        March 2024 - Update 2
    </h2>

    <h3 class="header_3rd mt-4  ">
        Component: Command
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Command</Highlighted> is a fast and easy way to search and execute commands within a page.
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

    <h2 class='header_2nd mt-8   border-b pb-4'>
        March 2024 - Update 1
    </h2>

    <h3 class="header_3rd mt-4  ">
        Component: Context Menu
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Context-menu</Highlighted> is a simple component that can be used to display a list of items when triggered. It is designed to be used in a context menu, but can be used anywhere.
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

    <h3 class="header_3rd mt-4  ">
        Component: Dropdown Menu
    </h3>

    <p class="text-[18px]   mt-2">
        The <Highlighted>Dropdown Menu</Highlighted> component displays a list of items when triggered.
    </p>

    <div class="w-full flex items-center justify-center   bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={examples["dropdown-menu"]}>
            <DropdownMenuExample />
        </VariantCard>
    </div>

    <h3 class="header_3rd mt-8   pt-4 border-t">
        Component: Toggle
    </h3>
    
    <p class="text-[18px]   mt-2">
        The <Highlighted>Toggle</Highlighted> component is a simple component that can be used to switch between two states. It is a simple switch that can be used to toggle between two states.
    </p>
    
    <h1 class="header_3rd mt-4 border-b pb-4  ">
        Variants
    </h1>

    <h3 class="text-xl font-semibold mt-4  ">
        Primary
    </h3>

    <div class="w-full flex items-center justify-center   bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={examples["toggle"]}>
            <Toggle variant="primary" aria-label="toggled">
                Primary
            </Toggle>
        </VariantCard>
    </div>

    <h3 class="text-xl font-semibold mt-4  ">
        Secondary
    </h3>

    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative   rounded-lg border mt-4">
        <VariantCard code={toggleExamples["secondary"]}>
            <Toggle variant="secondary" aria-label="toggled">
                Secondary
            </Toggle>
        </VariantCard>
    </div>

    
    <h3 class="header_3rd mt-4  ">
        Confirm Component Update
    </h3>
    <p class="text-[18px]   mt-2 border-b pb-4">
        The <Highlighted>Confirm</Highlighted> component used to not have the new Trigger system as used by
        <Highlighted>Dropdown Menu</Highlighted> and others. We've updated the <Highlighted>Confirm</Highlighted> component to use the new Trigger system.
    </p>

    <h3 class="header_3rd mt-4  ">
        Portal Menu Update
    </h3>
    <p class="text-[18px]   mt-2 border-b pb-4">
        Before this update, the portal menu(select, dropdown) would always open from the bottom. Now, the portal menu will open from the top if there is not enough space at the bottom.
    </p>


    <h2 class='header_2nd mt-8   border-b pb-4'>
        Beta v0.0.1 🎉
    </h2>
    <h3 class="header_3rd mt-4  ">
        - Initial release
    </h3>
    <p class="text-[18px]   mt-2">
        The initial release of Neel UI ships with the base 12 components. We plan to add upwards of 30 components in the future. The initial release includes the following components:
    </p>

    <div class="p-4 w-full flex flex-col   gap-1 bg-secondary-muted shadow-class border rounded-lg mt-4 font-mono text-[13px]">
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

    <h3 class="header_3rd mt-4  ">
        More is planned
    </h3>

    <p class="text-[18px]   mt-2">
        We plan to add more components in the future. Shadcn/UI is the base inspiration for this project so expect to see a lot of components from there.
        Over time, we plan to add upwards of 30 components to Neel UI.
    </p>
</main> 
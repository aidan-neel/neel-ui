<script lang="ts">
    import ComponentHeading from "../component-heading.svelte";
    import UsageCard from "../usage-card.svelte";
    import ImportUsageBlock from "../import-usage-block.svelte";
    import OnThisPage from "../on-this-page.svelte";
    import ApiTable from "../api-table.svelte";
    import { page } from "$app/stores";
    import Code from "lucide-svelte/icons/code";
    import ComponentWrapper from "../component-wrapper.svelte";
    import Button from "$ui/button";
    import Installation from "../installation.svelte";
    import DropdownMenuOne from "../examples/dropdown-menu-one.svelte";
    import DropdownMenu from "$ui/dropdown-menu/dropdown-menu.svelte";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Sheet from "$ui/sheet";
    import ComboboxOne from "../examples/combobox-one.svelte";
    import Navbar from "../navbar.svelte";
    import SheetOne from "../examples/sheet-one.svelte";

    let headings = {
        Imports: [],
        Installation: [],
        Example: [],
        Props: [],
    };

    let breeds = [
        "Golden Retriever",
        "Labrador Retriever",
        "German Shepherd",
        "French Bulldog",
        "Bulldog",
    ];

    let selected;
</script>

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 items-center justify-start flex-col gap-4">
        <ComponentHeading
            component="sheet"
            description="A sheet is a container that holds content and is used to display information or actions. It typically slides from the left or right."
        >
            Sheet
        </ComponentHeading>

        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Root",
                        description:
                            "The root of the component, what wraps everything.",
                    },
                    {
                        name: "Trigger",
                        description: "The trigger that opens the sheet.",
                    },
                    {
                        name: "Content",
                        description:
                            "The stylized content, what holds your items.",
                    },
                    {
                        name: "Footer",
                        description: "Wraps around your action buttons",
                    },
                    {
                        name: "Header",
                        description:
                            "The wrapping part around the title and description",
                    },
                    {
                        name: "Title",
                        description: "The title of the sheet.",
                    },
                    {
                        name: "Description",
                        description: "The description of the sheet.",
                    },
                ]}
            />

            <Installation name="sheet" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="sheet-one">
                <SheetOne />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `Combobox` component. `*` denotes the default
                value. As it is an extension of the `Popover` component, it also
                inherits the props of the `Popover` component.
            </p>
            <ApiTable
                data={{
                    attributes: ["side"],
                    types: ["`left*` | `right`"],
                    descriptions: [
                        "What side the content should open to, defaults to `left`.",
                    ],
                    defaults: ["`left`"],
                    parents: ["`Content`"],
                }}
            />
        </div>
    </main>
    <div
        class="relative w-full lg:w-[250px] lg:pl-[25px] hidden xl:flex text-sm flex-shrink-0"
    >
        <OnThisPage {headings} />
    </div>
</ComponentWrapper>

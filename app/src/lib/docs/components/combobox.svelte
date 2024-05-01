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
    import * as Combobox from "$ui/combobox";
    import ComboboxOne from "../examples/combobox-one.svelte";
    import Navbar from "../navbar.svelte";

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
            component="combobox"
            description="The Combobox is a button that opens a dropdown menu with search functionality. It is used to select an item from a list of options."
        >
            Combobox
            <div slot="references" class="flex flex-row gap-3">
                <a
                    href="/docs/components/popover"
                    class="text-foreground-opposite hover:bg-secondary/30 duration-150 bg-ghost-hovered px-3 text-sm flex flex-row items-center justify-center p-2 h-7 rounded-md"
                >
                    <Code class="w-4 h-4 mr-2" />
                    Popover
                </a>
                <a
                    href="https://www.fusejs.io/getting-started/installation.html"
                    class="text-foreground-opposite hover:bg-secondary/30 duration-150 bg-ghost-hovered px-3 text-sm flex flex-row items-center justify-center p-2 h-7 rounded-md"
                >
                    <Code class="w-4 h-4 mr-2" />
                    Fuse.js
                </a>
            </div>
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
                        description: "The trigger that opens the combobox.",
                    },
                    {
                        name: "Content",
                        description: "The content, the generic popover base.",
                    },
                    {
                        name: "Search",
                        description: "The input field for searching the items.",
                    },
                    {
                        name: "Results",
                        description: "Holds all the searched items.",
                    },
                    {
                        name: "Item",
                        description: "An item in the combobox.",
                    },
                ]}
            />

            <Installation name="combobox" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="combobox-one">
                <ComboboxOne />
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
                    attributes: [
                        "selected",
                        "threshold",
                        "placeholder",
                        "placement",
                    ],
                    types: [
                        "`string`",
                        "`number`",
                        "`string`",
                        "PlacementComponent",
                        "`boolean`",
                    ],
                    descriptions: [
                        "The selected value of the combobox.",
                        "The threshold for the search, defaults to `0.2`.",
                        "The placeholder for the search input, defaults to `Search...`.",
                        "What side the content should open on, defaults to `bottom`.",
                        "If the content should be the full width of the trigger, defaults to `false`.",
                    ],
                    defaults: ["`undefined`", "`right-start`", "`false`"],
                    parents: ["`Content`", "`Search`", "`Search`", "`Content`"],
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

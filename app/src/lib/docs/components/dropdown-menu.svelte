<script lang="ts">
    import ComponentHeading from "../component-heading.svelte";
    import UsageCard from "../usage-card.svelte";
    import ImportUsageBlock from "../import-usage-block.svelte";
    import OnThisPage from "../on-this-page.svelte";
    import ApiTable from "../api-table.svelte";
    import { page } from "$app/stores";
    import Code from "lucide-svelte/icons/code";
    import ComponentWrapper from "../component-wrapper.svelte";
    import Installation from "../installation.svelte";
    import DropdownMenuOne from "../examples/dropdown-menu-one.svelte";
    import DropdownMenu from "$ui/dropdown-menu/dropdown-menu.svelte";
    import Navbar from "../navbar.svelte";

    let headings = {
        Imports: [],
        Installation: [],
        Example: [],
        Props: [],
    };
</script>

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 items-center justify-start flex-col gap-4">
        <ComponentHeading
            component="dropdown-menu"
            description="The Dropdown Menu displays a list of actions or options when a user interacts with a trigger element."
        >
            Dropdown Menu
            <div slot="references">
                <a
                    href="/docs/components/popover"
                    class="text-foreground-opposite hover:bg-secondary/30 duration-150 bg-ghost-hovered px-3 text-sm flex flex-row items-center justify-center p-2 h-7 rounded-md"
                >
                    <Code class="w-4 h-4 mr-2" />
                    Popover
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
                        description: "The trigger that opens the dropdown.",
                    },
                    {
                        name: "Content",
                        description:
                            "The content, what's displayed to the user.",
                    },
                    {
                        name: "Seperator",
                        description: "A seperator between items.",
                    },
                    {
                        name: "SubMenu",
                        description: "A submenu that opens when hovered.",
                    },
                    {
                        name: "SubTrigger",
                        description: "The trigger that opens the submenu.",
                    },
                    {
                        name: "SubContent",
                        description: "The content of the submenu.",
                    },
                    { name: "Item", description: "An item in the dropdown." },
                ]}
            />

            <Installation name="dropdown-menu" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard lang="svelte" name="dropdown-menu-one">
                <DropdownMenuOne />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `Dropdown Menu` component. `*` denotes the default
                value. As it is an extension of the `Popover` component, it also
                inherits the props of the `Popover` component.
            </p>
            <ApiTable
                data={{
                    attributes: [
                        "closeOnClick",
                        "placement",
                        "fullWidthOfTrigger",
                    ],
                    types: ["`boolean`", "PlacementComponent", "`boolean`"],
                    descriptions: [
                        "If the dropdown should close when an item is clicked. Defaults to `false`.",
                        "What side the sub-content should open on, defaults to `bottom`.",
                        "If the content should be the full width of the trigger, defaults to `false`.",
                    ],
                    defaults: ["`false`", "`right-start`", "`false`"],
                    parents: ["`Item`", "`SubContent`", "`Content`"],
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

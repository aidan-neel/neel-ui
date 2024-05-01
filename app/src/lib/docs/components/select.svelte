<script lang="ts">
    import ComponentHeading from "../component-heading.svelte";
    import UsageCard from "../usage-card.svelte";
    import ImportUsageBlock from "../import-usage-block.svelte";
    import OnThisPage from "../on-this-page.svelte";
    import ApiTable from "../api-table.svelte";
    import Code from "lucide-svelte/icons/code";
    import ComponentWrapper from "../component-wrapper.svelte";
    import Installation from "../installation.svelte";
    import SelectOne from "../examples/select-one.svelte";
    import Navbar from "../navbar.svelte";

    let headings = {
        Imports: [],
        Installation: [],
        Example: [],
        Props: [],
    };

    let selected;
</script>

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 items-center justify-start flex-col gap-4">
        <ComponentHeading
            component="select"
            description="The Select is a button that opens a dropdown menu, allowing the user to select one option from a list."
        >
            Select
            <div slot="references" class="flex flex-row gap-3">
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
                        description: "The trigger that opens the select.",
                    },
                    {
                        name: "Content",
                        description: "The content, the generic popover base.",
                    },
                    {
                        name: "Item",
                        description: "An item in the select.",
                    },
                ]}
            />

            <Installation name="select" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="select-one">
                <SelectOne />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `Select` component. `*` denotes the default value.
                As it is an extension of the `Popover` component, it also
                inherits the props of the `Popover` component.
            </p>
            <ApiTable
                data={{
                    attributes: ["selected", "placement"],
                    types: ["`string`", "PlacementComponent"],
                    descriptions: [
                        "The selected value of the select.",
                        "What side the content should open on, defaults to `bottom`.",
                    ],
                    defaults: ["`undefined`", "`right-start`"],
                    parents: ["`Content`", "`Content`"],
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

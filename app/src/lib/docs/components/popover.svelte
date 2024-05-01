<script lang="ts">
    import ComponentHeading from "../component-heading.svelte";
    import UsageCard from "../usage-card.svelte";
    import ImportUsageBlock from "../import-usage-block.svelte";
    import OnThisPage from "../on-this-page.svelte";
    import ApiTable from "../api-table.svelte";
    import { page } from "$app/stores";
    import Code from "lucide-svelte/icons/code";
    import PopoverOne from "../examples/popover-one.svelte";
    import ComponentWrapper from "../component-wrapper.svelte";
    import Installation from "../installation.svelte";
    import PopoverTwo from "../examples/popover-two.svelte";
    import Navbar from "../navbar.svelte";

    let installComponentString = `npx neel-ui add popover`;

    let headings = {
        Imports: [],
        Installation: [],
        Example: [],
        Placement: [],
        Props: [],
    };
</script>

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 items-center justify-start flex-col gap-4">
        <ComponentHeading
            component="popover"
            description="The popover component is used to display a dialog that appears when a user interacts with a trigger element."
        >
            Popover
            <div slot="references">
                <a
                    href="https://popper.js.org/docs/v2/"
                    class="text-foreground-opposite hover:bg-secondary/30 duration-150 bg-ghost-hovered px-3 text-sm flex flex-row items-center justify-center p-2 h-7 rounded-md"
                >
                    <Code class="w-4 h-4 mr-2" />
                    Popper.js
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
                        description: "The trigger that opens the popover.",
                    },
                    {
                        name: "Content",
                        description:
                            "The content, what's displayed to the user.",
                    },
                ]}
            />

            <Installation name="popover" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard lang="svelte" name="popover-one">
                <PopoverOne />
            </UsageCard>

            <h1 id="placement" class="mb-3 mt-7 text-2xl font-medium">
                Different Placement
            </h1>
            <p class="mb-2 mt-1">
                There are many different sides that the popover can open on.
                Here's an example of the popover opening on the right side.
            </p>
            <UsageCard lang="svelte" name="popover-two">
                <PopoverTwo />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `Popover` component. `*` denotes the default value.
            </p>
            <ApiTable
                data={{
                    attributes: [
                        "padding",
                        "placement",
                        "fullWidthOfTrigger",
                        "role",
                        "tabIndex",
                    ],
                    types: [
                        "`number`",
                        "PlacementComponent",
                        "`boolean`",
                        "`string`",
                        "`number`",
                    ],
                    descriptions: [
                        "The seperation between the trigger and the content, defaults to `4`.",
                        "What side the content should open on, defaults to `bottom`.",
                        "If the content should be the full width of the trigger, defaults to `false`.",
                        "The role of the content, defaults to `menu`.",
                        "The tabIndex of the content, defaults to `-1`.",
                    ],
                    defaults: ["`4`", "`bottom`", "`false`", "`menu`", "`-1`"],
                    parents: [
                        "`Content`",
                        "`Content`",
                        "`Content`",
                        "`Content`",
                        "`Content`",
                    ],
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

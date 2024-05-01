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
    import * as Tooltip from "$ui/tooltip";
    import ComboboxOne from "../examples/combobox-one.svelte";
    import Navbar from "../navbar.svelte";
    import TooltipOne from "../examples/tooltip-one.svelte";
    import SwitchOne from "../examples/switch-one.svelte";
    import Switch from "$ui/switch";

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
            component="switch"
            description="A switch is a component that is toggled on or off by the user, it's similar to a checkbox but has a different style."
        >
            Switch
        </ComponentHeading>

        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Switch",
                        description:
                            "The actual switch component, it's also exported as default.",
                    },
                ]}
            />

            <Installation name="switch" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="switch-one" class="w-full">
                <SwitchOne />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `switch` component. * denotes the default value.
            </p>
            <ApiTable
                data={{
                    attributes: ["value"],
                    types: ["`boolean`"],
                    descriptions: ["Whether the switch is on or off."],
                    defaults: ["`false`"],
                    parents: ["`Switch`"],
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

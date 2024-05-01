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
    import Checkbox from "$ui/checkbox";

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
            component="checkbox"
            description="A checkbox is a component that is toggled on or off by the user."
        >
            Checkbox
        </ComponentHeading>

        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Checkbox",
                        description:
                            "The actual checkbox component, it's also exported as default.",
                    },
                ]}
            />

            <Installation name="checkbox" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="checkbox-one" class="w-full">
                <Checkbox>Receive promotional emails</Checkbox>
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `checkbox` component. * denotes the default value.
            </p>
            <ApiTable
                data={{
                    attributes: ["checked"],
                    types: ["`boolean`"],
                    descriptions: ["Whether the checkbox is on or off."],
                    defaults: ["`false`"],
                    parents: ["`Checkbox`"],
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

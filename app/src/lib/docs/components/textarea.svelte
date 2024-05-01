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
    import ComboboxOne from "../examples/combobox-one.svelte";
    import Navbar from "../navbar.svelte";
    import Textarea from "$ui/textarea";

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
            component="textarea"
            description="The textarea component is a simple textarea field that can be used to take user input."
        >
            Textarea
        </ComponentHeading>

        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Textarea",
                        description:
                            "The actual textarea component, it's also exported as default.",
                    },
                ]}
            />

            <Installation name="textarea" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard name="textarea-one">
                <Textarea
                    placeholder="Textarea"
                    class="w-[95%] max-w-[30rem] min-h-[8rem] max-h-[12.5rem]"
                />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `textarea` component. * denotes the default value.
            </p>
            <ApiTable
                data={{
                    attributes: ["placeholder", "value"],
                    types: ["`string`", "`string`"],
                    descriptions: [
                        "The placeholder of the textarea.",
                        "The value of the textarea.",
                    ],
                    defaults: ["`''`", "`'`"],
                    parents: ["`Textarea`", "`Textarea`"],
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

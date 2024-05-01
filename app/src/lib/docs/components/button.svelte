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
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import ComboboxOne from "../examples/combobox-one.svelte";
    import Navbar from "../navbar.svelte";
    import Button from "$ui/button";
    import ButtonOne from "../examples/button-one.svelte";
    import ButtonTwo from "../examples/button-two.svelte";
    import ButtonThree from "../examples/button-three.svelte";
    import ButtonFour from "../examples/button-four.svelte";
    import ButtonFive from "../examples/button-five.svelte";

    let headings = {
        Imports: [],
        Installation: [],
        Variants: ["Disabled", "Loading", "Spinner", "Link"],
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
            component="button"
            description="The Button component is used to display a small popup that appears when a user interacts with a trigger element."
        >
            Button
        </ComponentHeading>

        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Button",
                        description:
                            "The actual button component, it's also exported as default.",
                    },
                ]}
            />

            <Installation name="button" />

            <h1 id="variants" class="mb-3 mt-7 text-2xl font-medium">
                Variants
            </h1>
            <UsageCard name="button-one">
                <ButtonOne />
            </UsageCard>

            <h1 id="disabled" class="mb-3 mt-7 text-2xl font-medium">
                Disabled
            </h1>
            <p class="mb-2 mt-1">
                Disable the button by setting `disabled` to `true`.
            </p>
            <UsageCard name="button-two">
                <ButtonTwo />
            </UsageCard>

            <h1 id="loading" class="mb-3 mt-7 text-2xl font-medium">Loading</h1>
            <p class="mb-2 mt-1">
                Set the `loading` property to true to display the `Spinner`
                component beside the button.
            </p>
            <UsageCard name="button-three">
                <ButtonThree />
            </UsageCard>

            <h1 id="spinner" class="mb-3 mt-7 text-2xl font-medium">
                Custom Spinner
            </h1>
            <p class="mb-2 mt-1">
                Set the `spinner` property to a custom component to display a
                custom spinner beside the button.
            </p>
            <UsageCard name="button-four">
                <ButtonFour />
            </UsageCard>

            <h1 id="link" class="mb-3 mt-7 text-2xl font-medium">Link</h1>
            <p class="mb-2 mt-1">
                Add an `href` property to the button to make it a link.
            </p>
            <UsageCard name="button-five">
                <ButtonFive />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `Button` component. `*` denotes the default value.
            </p>
            <ApiTable
                data={{
                    attributes: [
                        "variant",
                        "size",
                        "loading",
                        "disabled",
                        "spinner",
                        "href",
                    ],
                    types: [
                        "`string`",
                        "`string`",
                        "`boolean`",
                        "`boolean`",
                        "`Component`",
                        "`string`",
                    ],
                    descriptions: [
                        "The variant of the button.",
                        "The size of the button.",
                        "If the button is loading.",
                        "If the button is disabled.",
                        "The spinner component to display.",
                        "The href of the button.",
                    ],
                    defaults: [
                        "`primary`",
                        "`default`",
                        "`false`",
                        "`false`",
                        "`Spinner`",
                        "`undefined`",
                    ],
                    parents: [
                        "`Button`",
                        "`Button`",
                        "`Button`",
                        "`Button`",
                        "`Button`",
                        "`Button`",
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

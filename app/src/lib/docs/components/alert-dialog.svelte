<script lang="ts">
    import AlertDialogOne from "../examples/alert-dialog-one.svelte";
    import AlertDialogTwo from "../examples/alert-dialog-two.svelte";
    import ComponentHeading from "../component-heading.svelte";
    import UsageCard from "../usage-card.svelte";
    import ImportUsageBlock from "../import-usage-block.svelte";
    import OnThisPage from "../on-this-page.svelte";
    import ApiTable from "../api-table.svelte";
    import { page } from "$app/stores";
    import CodeBlock from "../code-block.svelte";
    import Installation from "../installation.svelte";
    import ComponentWrapper from "../component-wrapper.svelte";
    import Navbar from "../navbar.svelte";

    let installComponentString = `npx neel-ui add alert-dialog`;

    let headings = {
        Imports: [],
        Installation: [],
        Example: [],
        Sizes: [],
        Props: [],
    };
</script>

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 items-center w-full justify-start flex-col gap-4">
        <ComponentHeading
            component="alert-dialog"
            description="The alert dialog component is used to display a message to the user that requires their attention."
        >
            Alert Dialog
        </ComponentHeading>
        <div class="flex flex-col w-full mt-0">
            <ImportUsageBlock
                class="mb-12"
                imports={[
                    {
                        name: "Root",
                        description:
                            "The root of the component, the main wrapper.",
                    },
                    {
                        name: "Trigger",
                        description: "The trigger that opens the dialog.",
                    },
                    {
                        name: "Content",
                        description:
                            "The content, what's displayed to the user.",
                    },
                    { name: "Title", description: "The title of the dialog." },
                    {
                        name: "Description",
                        description: "The description of the dialog.",
                    },
                    {
                        name: "Footer",
                        description:
                            "The footer of the dialog, put your buttons here.",
                    },
                ]}
            />

            <Installation name="alert-dialog" />

            <h1 id="example" class="mb-3 mt-7 text-2xl font-medium">Example</h1>
            <UsageCard lang="svelte" name="alert-dialog-one">
                <AlertDialogOne />
            </UsageCard>

            <h1 id="sizes" class="mb-3 mt-7 text-2xl font-medium">Sizes</h1>
            <p class="mb-2 mt-1">
                Using the `size` prop, you can change the size of the dialog.
                The default size is `md`.
            </p>
            <UsageCard lang="svelte" name="alert-dialog-two">
                <AlertDialogTwo />
            </UsageCard>

            <h1 id="props" class="mb-3 mt-7 text-2xl font-medium">
                API Reference
            </h1>
            <p class="mb-2 mt-1">
                Props of the `AlertDialog` component. `*` denotes the default
                value.
            </p>
            <ApiTable
                data={{
                    attributes: ["size"],
                    types: ["`sm` | `md*` | `lg` | `xl`"],
                    descriptions: ["The size of the dialog."],
                    defaults: ["`md`"],
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

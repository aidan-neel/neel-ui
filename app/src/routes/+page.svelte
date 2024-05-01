<script lang="ts">
    import ComponentWrapper from "$lib/docs/component-wrapper.svelte";
    import Button from "$ui/button";
    import PaintBucket from "lucide-svelte/icons/paint-bucket";
    import BadgeCheck from "lucide-svelte/icons/badge-check";
    import AlertDialogOne from "$lib/docs/examples/alert-dialog-one.svelte";
    import PopoverOne from "$lib/docs/examples/popover-one.svelte";
    import DropdownMenuOne from "$lib/docs/examples/dropdown-menu-one.svelte";
    import Navbar from "$lib/docs/navbar.svelte";
    import SwitchOne from "$lib/docs/examples/switch-one.svelte";
    import TextareaOne from "$lib/docs/examples/textarea-one.svelte";
    import SheetOne from "$lib/docs/examples/sheet-one.svelte";
    import CheckboxOne from "$lib/docs/examples/checkbox-one.svelte";
    import ComboboxOne from "$lib/docs/examples/combobox-one.svelte";
    import Seo from "$lib/seo.svelte";
</script>

<Seo name="home" />

<main class="flex mt-20 items-center w-screen h-screen justify-start flex-col">
    <Navbar />

    <div
        class="w-[95%] xl:w-1/3 mt-16 md:mt-24 gap-24 flex items-center justify-center text-center flex-col"
    >
        <div class="items-center justify-center flex flex-col gap-4">
            <h1 class="lg:text-5xl text-4xl font-semibold w-full text-center">
                Interactive and reusable components for Svelte
            </h1>
            <p class="text-center w-full text-lg text-foreground-muted">
                The interactivity of primitives with the styling of a design
                system, Neel UI is a collection of components that are easy to
                use and customize.
            </p>
            <div class="flex flex-row gap-4 mt-2">
                <Button href="/docs/installation">Get Started</Button>
                <Button href="/docs/components/alert-dialog" variant="outlined">
                    View Components
                </Button>
            </div>
        </div>
        <div class="items-center justify-center w-full flex flex-col gap-4">
            <header class="my-2 flex flex-col gap-2">
                <h1 class="text-3xl font-semibold w-full text-center">
                    Try it out
                </h1>
                <p class="text-lg text-foreground-muted">
                    See some of the components in action below with interactive
                    examples.
                </p>
            </header>
            <div
                class="flex flex-col gap-4 items-center justify-center w-[92.5%] lg:w-[95vw] xl:w-[80vw] lg:grid lg:grid-cols-3 xl:grid-cols-4"
            >
                <div
                    class="w-full items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <Button>Button</Button>
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Button
                    </p>
                </div>
                <div
                    class="w-full items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <AlertDialogOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Alert Dialog
                    </p>
                </div>
                <div
                    class="w-full items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <DropdownMenuOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Dropdown Menu
                    </p>
                </div>
                <div
                    class="w-full text-left items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <PopoverOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Popover
                    </p>
                </div>
                <div
                    class="w-full text-left items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <SwitchOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Switch
                    </p>
                </div>
                <div
                    class="w-full text-left items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <ComboboxOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Combo Box
                    </p>
                </div>
                <div
                    class="w-full text-left items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <SheetOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Sheet
                    </p>
                </div>
                <div
                    class="w-full text-left items-center flex relative justify-center h-[20rem] bg-alternate-muted border-default rounded-lg"
                >
                    <CheckboxOne />
                    <p class="absolute bottom-4 text-foreground-muted left-4">
                        Checkbox
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>

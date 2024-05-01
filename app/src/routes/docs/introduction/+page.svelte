<script lang="ts">
    import ComponentHeading from "$lib/docs/component-heading.svelte";
    import UsageCard from "$lib/docs/usage-card.svelte";
    import ImportUsageBlock from "$lib/docs/import-usage-block.svelte";
    import OnThisPage from "$lib/docs/on-this-page.svelte";
    import ApiTable from "$lib/docs/api-table.svelte";
    import { page } from "$app/stores";
    import Code from "lucide-svelte/icons/code";
    import ComponentWrapper from "$lib/docs/component-wrapper.svelte";
    import Button from "$ui/button";
    import Installation from "$lib/docs/installation.svelte";
    import DropdownMenuOne from "$lib/docs/examples/dropdown-menu-one.svelte";
    import DropdownMenu from "$ui/dropdown-menu/dropdown-menu.svelte";
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Tooltip from "$ui/tooltip";
    import ComboboxOne from "$lib/docs/examples/combobox-one.svelte";
    import Navbar from "$lib/docs/navbar.svelte";
    import TooltipOne from "$lib/docs/examples/tooltip-one.svelte";
    import CodeBlock from "$lib/docs/code-block.svelte";

    let headings = {
        Introduction: [],
        FAQ: [],
    };

    // check for #hash and scroll to it
    $: hash = $page.url.hash;

    function scrollToHash() {
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }

    $: scrollToHash();

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
    <main class="flex pb-32 items-start justify-start flex-col gap-4">
        <div class="w-full border-b-default mb-5">
            <h1 id="introduction" class="text-4xl font-semibold">
                Introduction
            </h1>
            <p class="lg:w-2/3 w-full mt-4 mb-5 text-lg">What is Neel UI?</p>
        </div>

        <p class="w-full mb-5 text-lg">
            Neel UI is a collection of reusable Svelte components designed for
            building web applications. It's easy to use and customizable,
            combining the simplicity of Svelte with the styling power of
            Tailwind CSS. This makes Neel UI components not only lightweight but
            also fast.

            <br /><br />

            The stylization of Neel UI components doesn't mean they must be used
            as-is; rather, they serve as a starting point for your own
            customizations. They provide a solid foundation and can be tailored
            to meet specific needs.

            <br /><br />

            A key difference between Neel UI and other alternatives is its
            approach to component architecture. Unlike libraries that focus on
            primitives, Neel UI doesn’t require learning a new primitive API.

            <br /><br />

            You can integrate Neel UI components into your projects just as you
            would with any other Svelte component. While Neel UI includes APIs,
            they are straightforward and not the central aspect of the library.
        </p>

        <h2
            id="faq"
            class="text-2xl border-b-default pb-4 w-full font-semibold"
        >
            FAQ
        </h2>
        <div>
            <h3 class="text-xl font-semibold">
                Why not package the components as a SvelteKit dependency?
            </h3>
            <p class="text-lg mt-4">
                By design, Neel UI components are meant to be used as a starting
                point for your own components. We give you the source code
                directly in your project when you install Neel UI. This allows
                you to customize the components to fit your needs.
            </p>
            <h3 class="text-xl mt-4 font-semibold">Can I use this?</h3>
            <p class="text-lg mt-4">
                Yes! Neel UI is open source and free to use. You can use it in
                your personal and commercial projects. Please let us know if you
                build something cool with Neel UI, we would love to see it!
            </p>
            <h3 class="text-xl mt-4 font-semibold">
                Why's the dark mode so finicky?
            </h3>
            <p class="text-lg mt-4">
                For the documentation website implementation, I wanted to get it
                out as fast as possible so you can preview dark mode and light
                mode components. We will soon integrate `mode-watcher` and will
                make it seem very seamless. For now, you can toggle dark mode by
                clicking the moon icon in the top right corner.
            </p>
        </div>
    </main>
    <div
        class="relative w-full lg:w-[250px] lg:pl-[25px] hidden xl:flex text-sm flex-shrink-0"
    >
        <OnThisPage {headings} />
    </div>
</ComponentWrapper>

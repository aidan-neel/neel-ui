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
    import Seo from "$lib/seo.svelte";

    let headings = {
        Installation: ["V2 Rewrite/Release"],
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

<Seo name="changelog" />

<ComponentWrapper>
    <Navbar />
    <main class="flex pb-32 w-full items-start justify-start flex-col gap-4">
        <div class="w-full border-b-default mb-5">
            <h1 id="installation" class="text-4xl font-semibold">Changelog</h1>
            <p class="lg:w-2/3 w-full mt-4 mb-5 text-lg">
                Keep up to date with the latest changes to Neel UI.
            </p>
        </div>

        <h2 id="V2 Rewrite/Release" class="text-2xl font-medium">
            V2 Rewrite/Release
        </h2>
        <p class="text-lg mt-2">
            Neel UI has been rewritten from the ground up to be more modular,
            customizable, and performant. The new version is a complete rewrite
            of the library, with a focus on performance, accessibility, and
            developer experience.

			<br><br>

			Documentation on the state API and how we handle components will be released soon.
			Currently, the API is kind of sloppy, since I wanted to get this out quickly. I will rework it slightly and then develop documentation.
        </p>
    </main>
    <div
        class="relative w-full lg:w-[250px] lg:pl-[25px] hidden xl:flex text-sm flex-shrink-0"
    >
        <OnThisPage {headings} />
    </div>
</ComponentWrapper>

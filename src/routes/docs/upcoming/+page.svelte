<script lang="ts">
    import {Breadcrumb} from "$lib/components/neel-ui/breadcrumb";
    import ChevronRight from "svelte-radix/ChevronRight.svelte";
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';
    import { marked } from 'marked';
    import Highlighted from '$lib/components/highlighted.svelte';
</script>

<Seo name="install" />

<main class="w-[45rem] flex flex-col mt-24">
    <div class="flex flex-row items-center justify-start gap-1 text-[14px] text-muted-foreground"> 
        Docs <ChevronRight class="w-4 h-4" /> <span class="font-medium text-white">Upcoming</span>
    </div>
    <h1 class="header_c">
        Update - April 2024
    </h1>
    <p class="description_c">
        The v1 release of Neel UI has been changed, and the upcoming features have been updated.
    </p>

    <h2 class="text-2xl font-semibold mt-5 border-b pb-3">
        New Library
    </h2>
    <h3 class='text-xl mt-5 mb-3 font-medium'>
        A new, more modern replacement for Neel UI
    </h3>
    <p class="my-2 text-[16px]">
        Neel UI is getting replaced in the following months with a new library that will be more modern, more feature-rich, and more customizable. <br><br>
        You'll still be able to use Neel UI, but it will no longer be maintained or updated. The advantages of the new library is an updated design system, and a more modular approach to creating components.<br><br>
        It will feel just like Neel UI, but with more features, and more customizable components. Components will have size props, way more variants, and eventually, a 2 seperate styles entirely! <br><br>
        This will be big, and it won't come for a little while as I've been working on other things, but it will be worth the wait.
    </p>
    <div class="mt-12"></div>
    <h1 class="header_c">
        Upcoming - March 2024
    </h1>
    <p class="description_c">
        See the upcoming features and changes in the v1 release of Neel UI.
    </p>

    <h2 class="text-2xl font-semibold mt-5 border-b pb-3">
        Revamped Documentation!
    </h2>
    <h3 class='text-xl mt-5 mb-3 font-medium'>
        Why the change?
    </h3>
    <p class="my-2 text-[16px]">
        The current documentation website was created so quickly that it is very messy and hard to continue development on. <br><br>
        The new documentation website will be way nicer, better design, easier to navigate, and way more information on the actual components themselves.
        <br><br>
        This change is coming within the next 1-2 weeks and will be a huge improvement. The hero page will be revamped, the components page will be revamped, and the documentation will be revamped.
        It will all have a very appealing design and will be much easier to navigate. Included with the new documentation, a themes explorer and some examples of Neel UI in action.
    </p>

    <h2 class="text-2xl font-semibold mt-5 border-b pb-3">
        10+ more components!
    </h2>
    <h3 class='text-xl mt-5 mb-3 font-medium'>
        What components are coming?
    </h3>

    <p class="my-2 text-[16px]">
        The actual set of 10 components coming isn't decided yet, but I am planning on adding 10 more components to the library. <br><br>
        This will also come with many updates to previous components, like <Highlighted>Breadcrumb</Highlighted>, <Highlighted>Dropdown Menu</Highlighted>, <Highlighted>Context Menu</Highlighted>
        and many more. <br><br> 

        The new components will be added to the documentation and will be available for use in the next release of Neel UI. I plan to release it within March-April.
    </p>
</main> 

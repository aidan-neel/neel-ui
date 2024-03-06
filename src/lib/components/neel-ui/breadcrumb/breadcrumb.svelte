<script lang="ts">
    import { page } from "$app/stores";
    import { ChevronRight } from "radix-icons-svelte";
    import { onMount } from "svelte";
  
    const pathNames = $page.url.pathname.split("/").filter(path => path !== "");
  
    let hiddenPaths: string[] = [];
    export { hiddenPaths as hidden };
    
    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // Generate shownPaths with proper capitalization and spacing, and keep original path for href
    let shownPaths = pathNames.reduce((acc, current, index) => {
        if (!hiddenPaths.includes(current.toLowerCase())) {
            const title = capitalizeFirstLetter(current.replace(/-/g, ' '));
            const fullPath = '/' + pathNames.slice(0, index + 1).join('/');
            acc.push({ title, fullPath });
        }
      return acc;
    }, []);

    // Capitalize every word in the title
    shownPaths = shownPaths.map(({ title, fullPath }) => ({ title: title.split(' ').map(capitalizeFirstLetter).join(' '), fullPath }));

    let className: string | undefined = undefined;
    export { className as class };
  
    // Check if a breadcrumb item is for the current page
    function isCurrentPage(fullPath: string): boolean {
      return $page.url.pathname === fullPath;
    }
  </script>
  
  <style>
    .current {
      color: white; /* Adjust as per your theme */
      font-weight: 600; /* Equivalent to Tailwind's font-semibold */
    }
  </style>
  
  <nav
    aria-label="Breadcrumb"
    {...$$restProps} class={`${className} flex flex-row items-center justify-start text-[14px]`}>
    {#each shownPaths as { title, fullPath }, i}
      <a
        href={fullPath}
        aria-current={isCurrentPage(fullPath) ? 'page' : undefined}
        class={`text-muted-foreground hover:underline ${isCurrentPage(fullPath) ? 'current' : ''}`}
      >
        {title}
      </a>
      {#if i !== shownPaths.length - 1}
        <ChevronRight class="w-4 h-4 mx-1 text-muted-foreground" />
      {/if}
    {/each}
  </nav>
  
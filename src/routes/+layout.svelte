<script lang="ts">
    import '../global.css'
    import { TypographyHeading, TypographySubHeading, TypographyParagraph } from '$lib/components/neel-ui/typography';
    import * as Confirm from '$lib/components/neel-ui/confirm';
    import { Button } from '$lib/components/neel-ui/button';

    const excludedComponents = ['popover', 'typography'];

    // Search for all the component folders in the $lib/components/neel-ui, but not the .svelte files just the name of the folders containing the .svelte files
    const componentFolders = import.meta.glob('/src/lib/components/neel-ui/**/+(*.svelte)');
    const componentNames = Object.keys(componentFolders).map((component) => {
        const componentName = component.split('/').slice(-2)[0];
        if (!excludedComponents.includes(componentName)) {
            return componentName;
        }
    });

    // Remove duplicates
    const uniqueComponentNames = Array.from(new Set(componentNames)).filter((component) => component !== undefined);
    // Remove excludedComponents
    const filteredComponentNames = uniqueComponentNames.filter((component) => !excludedComponents.includes(component));
    // Capitalize the first letter of each component name
    const capitalizedComponentNames = filteredComponentNames.map((component) => {
        return component.charAt(0).toUpperCase() + component.slice(1);
    });
</script>

<main class="flex flex-row items-start justify-center w-screen h-screen pt-24 dark bg-background">
    <div class="flex flex-col items-start gap-1 w-[250px] text-foreground text-[14px]">
        <h1 class="text-foreground mb-1 text-[16px] font-semibold">
            Components
        </h1>
        {#each capitalizedComponentNames as component}
            <Button class="text-[#a1a1a9]" href={`/docs/components/${component.toLowerCase()}`} variant="link">
                {component}
            </Button>
        {/each}
    </div>
    <slot></slot>
    <div class="flex flex-col items-start w-[250px] text-foreground text-[14px]">
    </div>
</main>
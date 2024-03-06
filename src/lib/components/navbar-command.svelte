<script lang="ts">
    import { Calendar, Rocket, EnvelopeClosed, Person, Gear, GithubLogo, File, ComponentInstance } from 'radix-icons-svelte';
    import * as Command from '$lib/components/neel-ui/command';
    import { Label } from '$lib/components/neel-ui/shortcut';

    let className: string | undefined = undefined;
    let key: string | undefined = undefined;
    export { className as class, key };

    function handleClick() {
        console.log('clicked');
    }

    const excludedComponents = ['popover', 'typography', 'shortcut'];

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

    const sanitizedComponent = (component: string) => {
        if (component === "Link-preview") {
            return "Link Preview"
        }

        if (component === "Dropdown-menu") {
            return "Dropdown Menu"
        }

        if (component === "Context-menu") {
            return "Context Menu"
        }

        return component
    }
</script>

<Command.Root key={key}>
    <Command.Trigger shortcut="CTRL+K" class="w-[20rem] h-9 {className}">
        Search documentation...
        <Label class="sm:flex hidden">CTRL+K</Label>
    </Command.Trigger>
    <Command.Content>
        <Command.Search></Command.Search>
        <Command.Results>
            <!-- <Command.Empty /> -->
            <Command.Group heading="Links">
                <Command.Item href="/docs" icon={File} name="Documentation" onclick={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Documentation
                    <span/>
                </Command.Item>
                <Command.Item href="/docs/components/alert" icon={File} name="Components" onclick={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Components
                    <span/>
                </Command.Item>
            </Command.Group>
            <Command.Seperator />
            <Command.Group heading="Components">
                {#each capitalizedComponentNames as component}
                    <Command.Item href={`/docs/components/${component.toLowerCase()}`} icon={ComponentInstance} name={sanitizedComponent(component)} onclick={handleClick}>
                        <span class="flex flex-row items-center justify-center">
                            <ComponentInstance class="mr-2 h-4 w-4" />
                            {sanitizedComponent(component)}
                        </span>
                    </Command.Item>
                {/each}
            </Command.Group>
        </Command.Results>
    </Command.Content>
</Command.Root>
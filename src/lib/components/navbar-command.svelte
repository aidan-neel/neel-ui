<script lang="ts">
    import File from 'svelte-radix/File.svelte'
    import ComponentInstance from 'svelte-radix/ComponentInstance.svelte'
    import * as Command from '$lib/components/neel-ui/command';
    import { Label } from '$lib/components/neel-ui/shortcut';

    let className: string | undefined = undefined;
    let key: string | undefined = undefined;
    export { className as class, key };
    export let shortcut: string | undefined;

    import { components, sanitizeComponent } from '$lib/navbar';
    function callbackFunc() {
        // Your callback function here
    }
</script>

<Command.Root key={key}>
    <Command.Trigger shortcut={shortcut} class="w-[20rem] h-9 {className}">
        Search documentation...
        {#if shortcut}
            <Label class="sm:flex hidden">{shortcut}</Label>
        {/if}
    </Command.Trigger>
    <Command.Content>
        <Command.Search></Command.Search>
        <Command.Results>
            <!-- <Command.Empty /> -->
            <Command.Group heading="Links">
                <Command.Item callback={() => {
                    window.location.href = '/docs'
                }} href="/docs" icon={File} name="Documentation">
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Documentation
                    <span/>
                </Command.Item>
                <Command.Item callback={() => {
                    window.location.href = '/docs/installation'
                }} href="/docs/installation" icon={File} name="Installation">
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Installation
                    <span/>
                </Command.Item>
                <Command.Item callback={() => {
                    window.location.href = '/docs/changelog'
                }} href="/docs/changelog" icon={File} name="Changelog">
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Changelog
                    <span/>
                </Command.Item>
                <Command.Item callback={() => {
                    window.location.href = '/docs/components/alert'
                }} href="/docs/components/alert" icon={File} name="Components">
                    <span class="flex flex-row items-center justify-center">
                        <File class="mr-2 h-4 w-4" />
                        Components
                    <span/>
                </Command.Item>
            </Command.Group>
            <Command.Seperator />
            <Command.Group heading="Components">
                {#each components as component}
                    <Command.Item icon={ComponentInstance} name={sanitizeComponent(component)} callback={() => {
                        window.location.href = `/docs/components/${component.toLowerCase()}`
                    }}>
                        <span class="flex flex-row items-center justify-center">
                            <ComponentInstance class="mr-2 h-4 w-4" />
                            {sanitizeComponent(component)}
                        </span>
                    </Command.Item>
                {/each}
            </Command.Group>
        </Command.Results>
    </Command.Content>
</Command.Root>
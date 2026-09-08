<script lang="ts">
    import FolderKanban from '@lucide/svelte/icons/folder-kanban';
    import Home from '@lucide/svelte/icons/home';
    import Inbox from '@lucide/svelte/icons/inbox';
    import Menu from '@lucide/svelte/icons/menu';
    import Settings from '@lucide/svelte/icons/settings';
    import * as Avatar from '@sivir-ui/svelte/components/avatar';
    import { Badge } from '@sivir-ui/svelte/components/badge';
    import { Button } from '@sivir-ui/svelte/components/button';
    import * as Sheet from '@sivir-ui/svelte/components/sheet';
    import Shortcut from '@sivir-ui/svelte/components/shortcut';

    let open = $state(false);
    let current = $state('home');

    const links = [
        { value: 'home', label: 'Home', icon: Home },
        { value: 'inbox', label: 'Inbox', icon: Inbox, count: 3 },
        { value: 'projects', label: 'Projects', icon: FolderKanban },
        { value: 'settings', label: 'Settings', icon: Settings }
    ];

    function navigate(value: string) {
        current = value;
        open = false;
    }
</script>

<Sheet.Root bind:open>
    <Sheet.Trigger variant="outline">
        <Menu size={14} />
        Menu
    </Sheet.Trigger>
    <Sheet.Content side="left">
        <Sheet.Header>
            <Sheet.Title>Navigation</Sheet.Title>
            <Sheet.Description>Jump to a section of the app.</Sheet.Description>
        </Sheet.Header>

        <nav aria-label="App sections" class="flex flex-col gap-1">
            {#each links as link (link.value)}
                <Button
                    variant="ghost"
                    class="w-full justify-start gap-2"
                    aria-current={current === link.value ? 'page' : undefined}
                    onclick={() => navigate(link.value)}
                >
                    <link.icon size={16} />
                    {link.label}
                    {#if link.count}
                        <Badge variant="secondary" class="ml-auto">{link.count}</Badge>
                    {/if}
                </Button>
            {/each}
        </nav>

        <div class="h-px w-full bg-border" role="separator"></div>

        <div class="flex items-center gap-3">
            <Avatar.Root size="sm">
                <Avatar.Fallback>AN</Avatar.Fallback>
            </Avatar.Root>
            <div class="flex min-w-0 flex-col">
                <span
                    class="truncate text-sm [font-weight:var(--font-weight-label,500)] text-foreground"
                    >Aidan N.</span
                >
                <span class="truncate text-xs text-foreground-muted">aidan@sivir.ui</span>
            </div>
        </div>

        <Sheet.Footer>
            <Sheet.Close class="w-full" variant="outline">
                Close
                <Shortcut shortcut="esc" />
            </Sheet.Close>
        </Sheet.Footer>
    </Sheet.Content>
</Sheet.Root>

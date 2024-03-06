<script lang="ts">
    import * as ContextMenu from "$lib/components/neel-ui/context-menu";
    import { Label } from "$lib/components/neel-ui/shortcut";

    function callback() {
        // Your callback function here
    }
</script>

<ContextMenu.Root class="w-full flex items-center justify-center">
    <ContextMenu.Trigger class="lg:w-[20rem] bg-background rounded-lg border w-full h-[12.5rem] text-center flex items-center justify-center select-none shadow-class">
        Right click here
    </ContextMenu.Trigger>
    <ContextMenu.Content class="w-[226px]">
        <ContextMenu.Item onclick={callback} shortcut="CTRL+O" class="flex items-center justify-between flex-row">
            Open
            <Label>CTRL+O</Label>
        </ContextMenu.Item>
        <ContextMenu.Seperator />
        <ContextMenu.Item onclick={callback}>
            Get Info
        </ContextMenu.Item>
        <ContextMenu.Item onclick={callback}>
            Rename
        </ContextMenu.Item>
        <ContextMenu.Item onclick={callback}>
            Compress
        </ContextMenu.Item>
        <ContextMenu.Item onclick={callback}>
            Duplicate
        </ContextMenu.Item>
        <ContextMenu.Seperator />
        <ContextMenu.Item onclick={callback}>
            Copy
        </ContextMenu.Item>
        <ContextMenu.Item onclick={callback}>
            Share
        </ContextMenu.Item>
    </ContextMenu.Content>
</ContextMenu.Root>
<script lang="ts">
    import * as Tooltip from "$ui/tooltip";
    import Button from "$ui/button";
    import Info from "lucide-svelte/icons/info";
</script>

<Tooltip.Root>
    <Tooltip.Trigger let:data>
        <Button {data} size="icon">
            <Info class="w-5 h-5" />
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content
        placement="top"
        class="w-48 p-4 text-sm flex items-center justify-center text-center"
    >
        This uses the `popover` component internally, so you can pass any prop
        that the `popover` component accepts.
    </Tooltip.Content>
</Tooltip.Root>

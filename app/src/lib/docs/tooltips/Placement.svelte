<script lang="ts">
    import * as Tooltip from "$ui/tooltip";
    import { Button } from "$ui/button";
</script>

<Tooltip.Root>
    <Tooltip.Trigger let:data>
        <Button
            {data}
            variant="barebones"
            size="barebones"
            class="pt-0 mt-0 m-0 px-0 items-start justify-start"
        >
            `Placement`
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content class="whitespace-pre-wrap w-30 p-3">
        `auto`<br />`auto-start`<br />`auto-end`<br />`top`<br />`top-start`<br
        />`top-end`<br />`right`<br />`right-start`<br />`right-end`<br
        />`bottom*`<br />`bottom-start`<br />`bottom-end`<br />`left`<br
        />`left-start`<br />`left-end`
    </Tooltip.Content>
</Tooltip.Root>

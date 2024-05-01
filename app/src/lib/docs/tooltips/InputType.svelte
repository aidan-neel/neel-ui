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
            `InputTypes`
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content class="whitespace-pre-wrap w-30 p-3">
        `button`<br />`checkbox`<br />`color`<br />`date`<br
        />`datetime-local`<br />`email`<br />`file`<br />`hidden`<br
        />`image`<br />`month`<br />`number`<br />`password`<br />`radio`<br
        />`range`<br />`reset`<br />`search`<br />`submit`<br />`tel`<br
        />`text`<br />`time`<br />`url`<br />`week`;
    </Tooltip.Content>
</Tooltip.Root>

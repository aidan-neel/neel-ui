<script lang="ts">
    import * as Popover from "$ui/popover";
    import Button from "$ui/button";
    import Gear from "lucide-svelte/icons/settings";
    import SlidersHorizontal from "lucide-svelte/icons/sliders-horizontal";
    import ChatBubble from "lucide-svelte/icons/message-circle";
</script>

<Popover.Root>
    <Popover.Trigger let:data>
        <Button variant="outlined" {data}>
            <SlidersHorizontal class="mr-2 w-4 h-4 text-foreground-muted" />
            Properties
        </Button>
    </Popover.Trigger>
    <Popover.Content
        padding={6}
        placement="right-start"
        class="w-[95vw] p-0 sm:w-[400px] flex flex-col"
    >
        <h1
            class="px-4 py-3 w-full flex flex-row items-center font-medium border-b-default"
        >
            <Gear class="w-4 h-4 text-foreground-muted mr-2" />
            Properties
        </h1>
        <div class="p-3 px-4 flex flex-col gap-2">
            <div class="flex flex-row items-center">
                <p class="text-foreground-muted w-20 font-medium">Height</p>
                <input
                    type="string"
                    placeholder="Height(px)"
                    value="250px"
                    class="w-full p-2 placeholder:text-foreground-muted/70 border-default
                bg-background text-foreground border-default rounded-lg
                focus:border-foreground/50 focus:outline-none
                "
                />
            </div>
            <div class="flex flex-row items-center">
                <p class="text-foreground-muted w-20 font-medium">Width</p>
                <input
                    type="string"
                    placeholder="Width(px)"
                    value="450px"
                    class="w-full p-2 placeholder:text-foreground-muted/70 border-default
                bg-background text-foreground border-default rounded-lg
                focus:border-foreground/50 focus:outline-none
                "
                />
            </div>
        </div>
    </Popover.Content>
</Popover.Root>

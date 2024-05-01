<script lang="ts">
    import * as Popover from "$ui/popover";
    import Button from "$ui/button";
    import Bell from "lucide-svelte/icons/bell";
    import ChatBubble from "lucide-svelte/icons/message-circle";
</script>

<Popover.Root stateName="popover">
    <Popover.Trigger let:data>
        <Button variant="outlined" {data}>
            <Bell class="mr-2 w-4 h-4 text-foreground-muted" />
            Notifications
        </Button>
    </Popover.Trigger>
    <Popover.Content
        placement="bottom"
        class="w-[95vw] p-0 sm:w-[400px] flex flex-col"
    >
        <h1
            aria-label="title"
            class="px-4 py-3 w-full flex flex-row items-center font-medium border-b-default"
        >
            <Bell class="w-4 h-4 text-foreground-muted mr-2" />
            2 notifications
        </h1>
        <div
            class="pb-4 p-4 hover:bg-alternate-muted/70 hover:cursor-pointer duration-150"
        >
            <div class="flex flex-row gap-2 items-center w-full">
                <img
                    src="https://pbs.twimg.com/profile_images/1650336707026223104/7t1vlsTs_400x400.jpg"
                    alt="Hunter Johnson"
                    class="h-10 w-10 rounded-full"
                />
                <header class="flex flex-col w-full">
                    <h2
                        class="font-medium w-full items-center flex-row flex justify-between"
                    >
                        Hunter Johnson
                        <ChatBubble class="w-4 text-foreground-muted h-4" />
                    </h2>
                    <p class="text-foreground-muted">Commented 2h ago</p>
                </header>
            </div>
            <p class="mt-2">2024 is the year of Svelte.</p>
        </div>
        <div
            class="pt-4 p-4 hover:cursor-pointer duration-150 rounded-b-lg hover:bg-alternate-muted/70"
        >
            <div class="flex flex-row gap-2 items-center w-full">
                <img
                    src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
                    alt="Hunter Johnson"
                    class="h-10 w-10 rounded-full"
                />
                <header class="flex flex-col w-full">
                    <h2
                        class="font-medium w-full items-center flex-row flex justify-between"
                    >
                        shadcn
                        <ChatBubble class="w-4 text-foreground-muted h-4" />
                    </h2>
                    <p class="text-foreground-muted">Commented 5h ago</p>
                </header>
            </div>
            <p class="mt-2">
                One of the joys of life is making an API request and getting
                JSON back.
            </p>
        </div>
    </Popover.Content>
</Popover.Root>

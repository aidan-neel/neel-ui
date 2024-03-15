const TabsExample = `<script lang="ts">
    import * as Tabs from "$lib/components/neel-ui/tabs";
    import * as Card from "$lib/components/neel-ui/card";
    import { Input } from "$lib/components/neel-ui/input";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Tabs.Root value="tab1" class="md:w-[400px] w-full">
    <Tabs.Items class="border border-b-0 h-auto p-0 gap-[0px] rounded-b-none border-r border-t border-l">
        <Tabs.Trigger value="tab1" variant="radix"> Tab 1 </Tabs.Trigger>
        <div class="h-full border-r absolute"></div>
        <Tabs.Trigger value="tab2" variant="radix"> Tab 2 </Tabs.Trigger>
    </Tabs.Items>
    <Tabs.Content value="tab1">
        <Card.Root class="rounded-t-none border-t-transparent">
            <Card.Header>
                Account settings
            </Card.Header>
            <Card.Description>
                Make changes to your account details. Click save to save your changes.
            </Card.Description>
            <Card.Content class="gap-4 w-full flex flex-col">
                <Input placeholder="Username" label="Username" class="w-full bg-transparent" />
                <Input placeholder="Password" label="Password" class="w-full bg-transparent" />
                <Button class="max-w-[150px]">
                    Save changes
                </Button>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="tab2">
        <Card.Root class="rounded-t-none border-t-transparent">
            <Card.Header>
                Change your email
            </Card.Header>
            <Card.Description>
                Change which email address your account currently uses
            </Card.Description>
            <Card.Content class="gap-4 w-full flex flex-col">
                <Input placeholder="Email" label="Email" class="w-full" />
                <Button class="max-w-[150px]">
                    Save changes
                </Button>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
</Tabs.Root>
`

const TooltipExample = `<script lang="ts">
    import * as Tooltip from "$lib/components/neel-ui/tooltip";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Tooltip.Root>
    <Tooltip.Trigger let:data>
        <Button data={data} variant="secondary">
            Hover
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
        Hello, World!
    </Tooltip.Content>
</Tooltip.Root>`

const InputExample = `<script lang="ts">
    import { Input } from "$lib/components/neel-ui/input";
</script>

<Input placeholder="Input" label="Input" class="w-[250px]" />`

const ConfirmExample = `<script lang="ts">
    import * as Confirm from "$lib/components/neel-ui/confirm";
</script>

<Confirm.Root>
    <Confirm.Trigger let:data>
        <Button variant="secondary" data={data}>
            Show
        </Button>
    </Confirm.Trigger>
    <Confirm.Content>
        <Confirm.Heading>
            <Confirm.Title>
                This is a confirm heading
            </Confirm.Title>
            <Confirm.Description>
                This is a confirm description, it's a bit longer than the title
            </Confirm.Description>
        </Confirm.Heading>
        <Confirm.Footer>
            <Confirm.Action>Continue</Confirm.Action>
            <Confirm.Cancel>Cancel</Confirm.Cancel>
        </Confirm.Footer>
    </Confirm.Content>
</Confirm.Root>`

const CardExample = `<script lang="ts">
    import * as Card from "$lib/components/neel-ui/card";
    import { Input } from "$lib/components/neel-ui/input";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Card.Root class="w-full max-w-[400px]">
    <Card.Header>
        Account settings
    </Card.Header>
    <Card.Description>
        Make changes to your account details. Click save to save your changes.
    </Card.Description>
    <Card.Content class="gap-4 w-full flex flex-col">
        <Input placeholder="Username" label="Username" class="w-full h-[2.5rem]" />
        <Input placeholder="Password" label="Password" class="w-full h-[2.5rem]" />
        <Button class="h-[2.5rem] w-[150px]">
            Save changes
        </Button>
    </Card.Content>
</Card.Root>`

const ButtonExample = `<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Button variant="primary">
    Button
</Button>`

const BreadcrumbExample = `<script lang="ts">
    import { Breadcrumb } from "$lib/components/neel-ui/breadcrumb";
</script>

<Breadcrumb hidden={["components"]} />`

const AlertExample = `<script lang="ts">
    import * as Alert from "$lib/components/neel-ui/alert";
    import { Person } from "radix-icons-svelte"
</script>

<Alert.Root type="default">
    <Person class="w-5 h-5" />
    <Alert.Content>
        <Alert.Title>
            Your email has been verified.
        </Alert.Title>
        <Alert.Description>
            You can now access all the features of this site.
        </Alert.Description>
    </Alert.Content>
</Alert.Root>`

const BadgeExample = `<script lang="ts">
    import { Badge } from "$lib/components/neel-ui/badge";
</script>

<Badge variant="primary">
    Verified
</Badge>`

const LinkPreviewExample = `<script lang="ts">
    import * as LinkPreview from "$lib/components/neel-ui/link-preview";
    import { Link2 } from "radix-icons-svelte";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<LinkPreview.Root>
    <LinkPreview.Trigger let:data>
        <Button data={data}  variant="link" href="https://twitter.com/huntabyte">
            @huntabyte
        </Button>
    </LinkPreview.Trigger>
    <LinkPreview.Content class="flex flex-row">
        <img src="https://pbs.twimg.com/profile_images/1650336707026223104/7t1vlsTs_400x400.jpg" alt="Hunter Johnson" class="border rounded-full w-11 h-11" />
        <div class="flex flex-col ml-3">
            <h1 class="font-semibold">
                @huntabyte
            </h1>
            <p class='text-[14px]'>
                I do things on the internet.
            </p>

            <div class="flex flex-row-reverse items-center justify-end mt-1">
                <Link2 class="w-4 h-4 text-muted-foreground" />
                <Button href="https://github.com/huntabyte" class="mr-1 text-muted-foreground text-[12px]" variant="link">
                    github.com/huntabyte
                </Button>
            </div>
        </div>
    </LinkPreview.Content>
</LinkPreview.Root>`

const SheetExample = `<script lang="ts">
    import * as Sheet from "$lib/components/neel-ui/sheet";
    import { Button } from "$lib/components/neel-ui/button";
    import { Input } from "$lib/components/neel-ui/input";
</script>

<Sheet.Root side="left">
    <Sheet.Trigger let:data>
        <Button variant="secondary" class="w-20" data={data}>
            Left
        </Button>
    </Sheet.Trigger>
    <Sheet.Content>
        <Sheet.Header>
            <Sheet.Title>
                Left Sheet
            </Sheet.Title>
            <Sheet.Description>
                This is a Left sheet, you can put anything here.
            </Sheet.Description>
        </Sheet.Header>
        <Input placeholder="Username" label="Username" class="w-full" />
        <div class='mt-4'></div>
        <Input placeholder="Password" label="Password" class="w-full" />
        <Sheet.Footer>
            <Sheet.Cancel>
                Save Changes
            </Sheet.Cancel>
        </Sheet.Footer>
    </Sheet.Content>
</Sheet.Root>`

const DropdownMenuExample = `<script lang="ts">
    import * as DropdownMenu from "$lib/components/neel-ui/dropdown-menu";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger let:data>
        <Button variant="secondary" data={data}>
            Open
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
        <DropdownMenu.Label>
            My Account
        </DropdownMenu.Label>
        <DropdownMenu.Item>
            Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            Billing
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            Settings
        </DropdownMenu.Item>
        <DropdownMenu.Seperator />
        <DropdownMenu.Item>
            GitHub
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            Support
        </DropdownMenu.Item>
        <DropdownMenu.Item>
            API
        </DropdownMenu.Item>
        <DropdownMenu.Seperator />
        <DropdownMenu.Item>
            Log Out
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>`

const ToggleExample = `<script lang="ts">
    import { Toggle } from "$lib/components/neel-ui/toggle";

    let toggle: boolean = false;
</script>

<Toggle bind:toggled={toggle} aria-label="toggled">
    Toggle
</Toggle>`

const ContextMenuExample = `<script lang="ts">
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
    <ContextMenu.Content class="w-[225px]">
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
</ContextMenu.Root>`

const eventExampleCode = `<script lang="ts">
    import type { Event, Hook, EventProps } from "$lib/event-handler";
    import { Button } from "$lib/components/neel-ui/button";

    let hook: Hook = {
        trigger: "mouseenter",
        callback: (props: EventProps) => {
            // Your callback when the button is hovered
        }
    }

    let data: Event = {
        event: "tooltip",
        hooks: [Hook]
    }
    // Pass the {data} to the Button as the prop data
</script>

<Button data={data} variant="secondary">
    Hover
</Button>
`

////////////////////////////////////////////////////////////////////////////////////

import commandExample from '$lib/components/examples/command-example.svelte?raw'
import keycodeExample from '$lib/components/examples/keycode-example.svelte?raw'
import switchExample from '$lib/components/examples/switch-example.svelte?raw'
import expandExample from '$lib/components/examples/expand-example.svelte?raw'
import popoutExample from '$lib/components/examples/popout-example.svelte?raw'
import filesExample from '$lib/components/examples/file-example.svelte?raw'
import checkboxExample from '$lib/components/examples/checkbox-example.svelte?raw'
import dialogExample from '$lib/components/examples/dialog-example.svelte?raw'
import toastExample from '$lib/components/examples/toast-example.svelte?raw'
import selectExample from '$lib/components/examples/select-example.svelte?raw'

const examples = {
    "tabs": TabsExample,
    "tooltip": TooltipExample,
    "select": selectExample,
    "input": InputExample,
    "confirm": ConfirmExample,
    "card": CardExample,
    "button": ButtonExample,
    "breadcrumb": BreadcrumbExample,
    "alert": AlertExample,
    "badge": BadgeExample,
    "link-preview": LinkPreviewExample,
    "sheet": SheetExample,
    "dropdown-menu": DropdownMenuExample,
    "toggle": ToggleExample,
    "context-menu": ContextMenuExample,
    "command": commandExample,
    "keycode": keycodeExample,
    "switch": switchExample,
    "expand-text": expandExample,
    "popout": popoutExample,
    "file-trigger": filesExample,
    "checkbox": checkboxExample,
    "dialog": dialogExample,
    "toast": toastExample,
}

export { examples, eventExampleCode }
const TabsExample = `<script lang="ts">
    import * as Tabs from "$lib/components/neel-ui/tabs";
    import * as Card from "$lib/components/neel-ui/card";
    import { Input } from "$lib/components/neel-ui/input";
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Tabs.Root value="tab1" class="w-[400px]">
    <Tabs.Items>
        <Tabs.Trigger value="tab1"> Tab 1 </Tabs.Trigger>
        <Tabs.Trigger value="tab2"> Tab 2 </Tabs.Trigger>
    </Tabs.Items>
    <Tabs.Content value="tab1">
        <Card.Root class="mt-4">
            <Card.Header>
                Account settings
            </Card.Header>
            <Card.Description>
                Make changes to your account details. Click save to save your changes.
            </Card.Description>
            <Card.Content class="gap-4 w-full flex flex-col">
                <Input placeholder="Username" label="Username" class="w-full" />
                <Input placeholder="Password" label="Password" class="w-full" />
                <Button class="h-[2rem] w-[150px]">
                    Save changes
                </Button>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="tab2">
        <Card.Root class="mt-4">
            <Card.Header>
                Change your email
            </Card.Header>
            <Card.Description>
                Change which email address your account currently uses
            </Card.Description>
            <Card.Content class="gap-4 w-full flex flex-col">
                <Input placeholder="Email" label="Email" class="w-full" />
                <Button class="h-[2rem] w-[150px]">
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

const SelectExample = `<script lang="ts">
    import * as Select from "$lib/components/neel-ui/select";
    import { selectState } from "$lib/components/neel-ui/select";

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" }
    ];

    let key: string
    $: selectedValue = $selectState[key]?.selectedValue; // Reactive statement to fetch selected value
</script>

<Select.Root bind:key>
    <Select.Trigger class="w-[180px]">
        Select a fruit
    </Select.Trigger>
    <Select.Content class="w-full">
        <Select.Group items={fruits}>
            <Select.Label>
                Fruits
            </Select.Label>
        </Select.Group>
    </Select.Content>
</Select.Root>`

const InputExample = `<script lang="ts">
    import { Input } from "$lib/components/neel-ui/input";
</script>

<Input placeholder="Input" label="Input" class="w-[250px]" />`

const ConfirmExample = `<script lang="ts">
    import * as Confirm from "$lib/components/neel-ui/confirm";
</script>

<Confirm.Root>
    <Confirm.Trigger>
        Show Confirmation
    </Confirm.Trigger>
    <Confirm.Content>
        <Confirm.Heading>
            <Confirm.Title>
                This is a confirm heading
            </Confirm.Title>
            <Confirm.Description>
                This is a confirm description, it"s a bit longer than the title
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

<Card.Root>
    <Card.Header>
        Account settings
    </Card.Header>
    <Card.Description>
        Make changes to your account details. Click save to save your changes.
    </Card.Description>
    <Card.Content class="gap-4 w-full flex flex-col">
        <Input placeholder="Username" label="Username" class="w-full" />
        <Input placeholder="Password" label="Password" class="w-full" />
        <Button class="h-[2rem] w-[150px]">
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

<Breadcrumb hidden={["Components"]} />`

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

const examples = {
    "tabs": TabsExample,
    "tooltip": TooltipExample,
    "select": SelectExample,
    "input": InputExample,
    "confirm": ConfirmExample,
    "card": CardExample,
    "button": ButtonExample,
    "breadcrumb": BreadcrumbExample,
    "alert": AlertExample
}

export { examples }
const TabsExample = `<Tabs.Root value="tab1" class="w-[400px]">
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

const TooltipExample = `<Tooltip.Root>
<Tooltip.Trigger let:data>
    <Button data={data} variant="secondary">
        Hover
    </Button>
</Tooltip.Trigger>
<Tooltip.Content>
    Hello, World!
</Tooltip.Content>
</Tooltip.Root>`

const examples = {
    "tabs": TabsExample,
    "tooltip": TooltipExample
}

export { examples }
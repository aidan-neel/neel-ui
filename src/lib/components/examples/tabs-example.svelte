<script lang="ts">
    import * as Tabs from '$lib/components/neel-ui/tabs';
    import * as Card from '$lib/components/neel-ui/card';
    import { Button } from '$lib/components/neel-ui/button';
    import { Input } from '$lib/components/neel-ui/input';
</script>

<Tabs.Root defaultValue="tab1" class="md:w-[400px] w-full">
    <Tabs.Items class="border border-b-0 h-[3rem] p-[0px] gap-[0px] relative rounded-b-none border-r border-t border-l">
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
                <Input placeholder="Username" label="Username" class="w-full h-[2.5rem] bg-transparent" />
                <Input placeholder="Password" label="Password" class="w-full h-[2.5rem] bg-transparent" />
                <Button class="max-w-[150px] h-[2.5rem]">
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
                <Input placeholder="Email" label="Email" class="w-full h-[2.5rem]" />
                <Button class="max-w-[150px] h-[2.5rem]">
                    Save changes
                </Button>
            </Card.Content>
        </Card.Root>
    </Tabs.Content>
</Tabs.Root>
<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Tabs from '$lib/components/neel-ui/tabs';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import * as Card from '$lib/components/neel-ui/card';
    import { Input } from '$lib/components/neel-ui/input';
    import Seo from '$lib/components/seo.svelte';
</script>

<Seo name="tabs" />

<div class="doc-card-parent">
    <DocCard 
    component="tabs"
    desc="Tabs component which allows you to swap between content displays"
    header="Tabs"
    heightClass="h-[30rem]"
    >
        <Tabs.Root value="tab1" class="md:w-[400px] w-full">
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
                        <Input placeholder="Username" label="Username" class="w-full bg-transparent" />
                        <Input placeholder="Password" label="Password" class="w-full bg-transparent" />
                        <Button class="max-w-[150px]">
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
                        <Button class="max-w-[150px]">
                            Save changes
                        </Button>
                    </Card.Content>
                </Card.Root>
            </Tabs.Content>
        </Tabs.Root>
    </DocCard>
</div>
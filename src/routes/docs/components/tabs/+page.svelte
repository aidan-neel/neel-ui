<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Tabs from '$lib/components/neel-ui/tabs';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Card } from '$lib/components/neel-ui/card';
</script>

<div class="flex flex-col">
    <div class="mb-4">
        <Breadcrumb hidden={["Components"]} />
        <h1 class="mt-2 text-4xl font-bold">
            Tabs
        </h1>
        <p class="text-lg text-zinc-500 max-w-[620px]">
            Displays a tab component with buttons to switch between tabs.
        </p>
    </div>
    
    <DocCard>
        <Tabs.Root value="tab1" class="w-[400px]">
            <Tabs.Items>
                <Tabs.Trigger value="tab1"> Tab 1 </Tabs.Trigger>
                <Tabs.Trigger value="tab2"> Tab 2 </Tabs.Trigger>
            </Tabs.Items>
            <Tabs.Content value="tab1">
                <h1>
                    Tab 1
                </h1>
            </Tabs.Content>
            <Tabs.Content value="tab2">
                <h1>
                    Tab 2
                </h1>
            </Tabs.Content>
        </Tabs.Root>
    </DocCard>
</div>
<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import * as Card from '$lib/components/neel-ui/card';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
</script>

<Seo name="card" />

<div class="doc-card-parent">
    <DocCard 
    component="card"
    desc="A card component with header and description sub-components"
    header="Card"
    heightClass="h-[30rem]"
    >
        <Card.Root class="">
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
    </DocCard>
</div>
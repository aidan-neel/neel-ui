<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Card from '$lib/components/neel-ui/card';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="card" />

<div class="doc-card-parent">
    <DocCard 
    component="card"
    desc="A card component with header and description sub-components"
    header="Card"
    heightClass="h-[30rem]"
    >
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
        </Card.Root>
    </DocCard>
    <NextDoc />
</div>
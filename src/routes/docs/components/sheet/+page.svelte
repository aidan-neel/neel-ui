<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import DocCard from '$lib/components/doc-card.svelte';
    import * as Sheet from '$lib/components/neel-ui/sheet';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';

    const SIDES = ["Left", "Right"];
</script>

<Seo name="sheet" />

<div class="doc-card-parent">
    <DocCard 
    component="sheet"
    desc="Displays a sheet component that comes out from a direction of your choice."
    header="Sheet"
    >
        <section class="flex flex-row gap-2">
            {#each SIDES as side}
                <Sheet.Root side={side}>
                    <Sheet.Trigger let:data>
                        <Button variant="secondary" class="w-20" data={data}>
                            {side}
                        </Button>
                    </Sheet.Trigger>
                    <Sheet.Content>
                        <Sheet.Header>
                            <Sheet.Title>
                                {side} Sheet
                            </Sheet.Title>
                            <Sheet.Description>
                                This is a {side} sheet, you can put anything here.
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
                </Sheet.Root>
            {/each}
        </section>
    </DocCard>
</div>
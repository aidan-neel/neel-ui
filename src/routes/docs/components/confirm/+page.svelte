<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import * as Card from '$lib/components/neel-ui/card';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import * as Confirm from '$lib/components/neel-ui/confirm'
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="confirm" />

<div class="doc-card-parent">
    <DocCard 
    component="confirm"
    desc="A modal dialog for confirmation of user destructive action"
    header="Confirm"
    >
        <Confirm.Root>
            <Confirm.Trigger let:data>
                <Button variant="secondary" data={data}>
                    Delete
                </Button>
            </Confirm.Trigger>
            <Confirm.Content>
                <Confirm.Heading>
                    <Confirm.Title>
                        Are you sure you want to delete this?
                    </Confirm.Title>
                    <Confirm.Description>
                        This action cannot be undone, and will permanently delete the selected item.
                    </Confirm.Description>
                </Confirm.Heading>
                <Confirm.Footer>
                    <Confirm.Action>Delete</Confirm.Action>
                    <Confirm.Cancel>Cancel</Confirm.Cancel>
                </Confirm.Footer>
            </Confirm.Content>
        </Confirm.Root>        
    </DocCard>
    <NextDoc />
</div>
<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Person } from 'radix-icons-svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
</script>

<div class="doc-card-parent">
    <DocCard 
    component="alert"
    desc="Displays a callout message to the user."
    header="Alert"
    >
        <Alert.Root type="default" class="w-full">
            <Person class="w-5 h-5 flex-shrink-0" />
            <Alert.Content>
                <Alert.Title>
                    Your email has been verified.
                </Alert.Title>
                <Alert.Description>
                    You can now access all the features of this site.
                </Alert.Description>
            </Alert.Content>
        </Alert.Root>
    </DocCard>
</div>
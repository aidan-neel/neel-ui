<script lang="ts">
    import * as Alert from '$lib/components/neel-ui/alert'
    import { Person } from 'radix-icons-svelte';
</script>

<div class="flex flex-col gap-6">
    <div>
        <p class="mb-1"> Default Alert </p>
        <Alert.Root>
            <Person class="w-5 h-5">
        
            </Person>
            <Alert.Content>
                <Alert.Title>
                    Heads up!
                </Alert.Title>
                <Alert.Description>
                    You can change your password in the settings.
                </Alert.Description>
            </Alert.Content>
        </Alert.Root>
    </div>
    <div>
        <p class="mb-1"> Destructive Alert </p>
        <Alert.Root type="destructive">
            <Person class="w-5 h-5">
        
            </Person>
            <Alert.Content>
                <Alert.Title>
                    Heads up!
                </Alert.Title>
                <Alert.Description>
                    You can change your password in the settings.
                </Alert.Description>
            </Alert.Content>
        </Alert.Root>
    </div>
</div>
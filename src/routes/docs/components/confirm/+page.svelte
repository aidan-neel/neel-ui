<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import * as Confirm from '$lib/components/neel-ui/confirm';
    import { popoverState } from '$lib/components/neel-ui/popover'

    const ConfirmationBuilderData = Confirm.Builder();
</script>

<Confirm.Root builder={ConfirmationBuilderData}>
    <Confirm.Trigger>
        Show Confirmation
    </Confirm.Trigger>
    <Confirm.Content>
        <Confirm.Heading>
            <Confirm.Title>
                This is a confirm heading
            </Confirm.Title>
            <Confirm.Description>
                This is a confirm description, it's a bit longer than the title
            </Confirm.Description>
        </Confirm.Heading>
        <Confirm.Footer>
            <Confirm.Action>Continue</Confirm.Action>
            <Confirm.Cancel>Cancel</Confirm.Cancel>
        </Confirm.Footer>
    </Confirm.Content>
</Confirm.Root>

export const alertExamples = {
    "destructive": `<script lang="ts">
    import * as Alert from "$lib/components/neel-ui/alert";
    import { Person } from "radix-icons-svelte"
</script>

<Alert.Root type="destructive">
    <ExclamationTriangle class="w-5 h-5 flex-shrink-0" />
    <Alert.Content>
        <Alert.Title>
            Error
        </Alert.Title>
        <Alert.Description>
            Your session has expired. Please log in again.
        </Alert.Description>
    </Alert.Content>
</Alert.Root>`,
    "warning": `<script lang="ts">
    import * as Alert from "$lib/components/neel-ui/alert";
    import { Person } from "radix-icons-svelte"
</script>

<Alert.Root type="warning">
    <ExclamationTriangle class="w-5 h-5 flex-shrink-0" />
    <Alert.Content>
        <Alert.Title>
            Warning
        </Alert.Title>
        <Alert.Description>
            You have an un-used coupon in your cart.
        </Alert.Description>
    </Alert.Content>
</Alert.Root>`,
    "success": `<script lang="ts">
    import * as Alert from "$lib/components/neel-ui/alert";
    import { Person } from "radix-icons-svelte"
</script>

<Alert.Root type="success">
    <CheckCircled class="w-5 h-5 flex-shrink-0" />
    <Alert.Content>
        <Alert.Title>
            Success
        </Alert.Title>
        <Alert.Description>
            Your email has been verified.
        </Alert.Description>
    </Alert.Content>
</Alert.Root>`,
}
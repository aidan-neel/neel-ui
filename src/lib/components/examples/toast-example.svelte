<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button';
    import { Toast } from '$lib/components/neel-ui/toast'
    import { toastState } from '$lib/components/neel-ui/toast';
    import GithubLogo from 'svelte-radix/GithubLogo.svelte';
</script>

<Button variant="secondary" on:click={() => {
    Toast.show({
        title: "Repository created",
        description: "Your repository has been created successfully",
        duration: 3000,
        action: {
            label: "Undo",
            onClick: () => {
                // Action to undo the toast
            },
            variant: "secondary"
        }
    })
}}>
    Show Toast
</Button>
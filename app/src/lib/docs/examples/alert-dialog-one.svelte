<script>
    import * as AlertDialog from "$ui/alert-dialog";
    import Button from "$ui/button";
</script>

<AlertDialog.Root let:closeAlertDialog>
    <AlertDialog.Trigger let:data>
        <Button variant="primary" {data}>Open Dialog</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
        <AlertDialog.Title>This action cannot be undone.</AlertDialog.Title>
        <AlertDialog.Description>
            Are you sure you want to continue and delete this item?
        </AlertDialog.Description>
        <AlertDialog.Footer>
            <Button
                class="w-full"
                variant="outlined"
                on:click={closeAlertDialog}
            >
                Cancel
            </Button>
            <Button class="w-full" on:click={closeAlertDialog}>Delete</Button>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>

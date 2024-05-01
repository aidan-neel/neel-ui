<script>
    import * as AlertDialog from "$ui/alert-dialog";
    import Button from "$ui/button";
</script>

<AlertDialog.Root let:closeAlertDialog>
    <AlertDialog.Trigger let:data>
        <Button {data}>Open Large Dialog</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content size="lg">
        <AlertDialog.Title>This is a large dialog.</AlertDialog.Title>
        <AlertDialog.Description>
            Along with `lg`, theres `sm`, `md`, and `xl` sizes available.
        </AlertDialog.Description>
        <AlertDialog.Footer>
            <Button
                class="w-full"
                variant="outlined"
                on:click={closeAlertDialog}
            >
                Cancel
            </Button>
            <Button class="w-full" on:click={closeAlertDialog}
                >Acknowledge</Button
            >
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>

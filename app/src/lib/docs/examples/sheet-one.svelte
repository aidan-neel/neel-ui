<script lang="ts">
    import * as Sheet from "$ui/sheet";
    import Button from "$ui/button";
    import Input from "$ui/input";
</script>

<Sheet.Root>
    <Sheet.Trigger let:data>
        <Button class="mr-4" {data}>Left Sheet</Button>
    </Sheet.Trigger>
    <Sheet.Content side="left" let:closeSheet>
        <Sheet.Header>
            <Sheet.Title>Change Password</Sheet.Title>
            <Sheet.Description>
                Update your password to fit the new security requirements.
            </Sheet.Description>
        </Sheet.Header>
        <Input placeholder="New Password" />
        <Sheet.Footer>
            <Button on:click={closeSheet}>Save Changes</Button>
        </Sheet.Footer>
    </Sheet.Content>
</Sheet.Root>
<Sheet.Root>
    <Sheet.Trigger let:data>
        <Button {data}>Right Sheet</Button>
    </Sheet.Trigger>
    <Sheet.Content side="right" let:closeSheet>
        <Sheet.Header>
            <Sheet.Title>Change Password</Sheet.Title>
            <Sheet.Description>
                Update your password to fit the new security requirements.
            </Sheet.Description>
        </Sheet.Header>
        <Input placeholder="New Password" />
        <Sheet.Footer>
            <Button on:click={closeSheet}>Save Changes</Button>
        </Sheet.Footer>
    </Sheet.Content>
</Sheet.Root>

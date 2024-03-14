<script lang="ts">
    import { Button } from '$lib/components/neel-ui/button'
    import { Input } from '$lib/components/neel-ui/input'
    import * as Dialog from '$lib/components/neel-ui/dialog';
</script>

<Dialog.Root>
    <Dialog.Trigger let:data>
        <Button data={data} variant="secondary">
            Open Dialog
        </Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Heading>
            <Dialog.Title>Edit your profile</Dialog.Title>
            <Dialog.Description>
                Make changes to your public profile, like your name and bio.
            </Dialog.Description>
        </Dialog.Heading>
        <div class="flex flex-row w-full items-center">
            <p class="w-28 text-[14px] font-medium">
                Name
            </p>
            <Input class="w-full h-[2.5rem]" placeholder="Name" type="text" />
        </div>
        <div class="flex flex-row w-full mt-4 items-center">
            <p class="w-28 text-[14px] font-medium">
                Password
            </p>
            <Input class="w-full h-[2.5rem]" type="password" placeholder="Password" />
        </div>
        <Dialog.Footer>
            <Dialog.Continue variant="primary">
                Save Changes
            </Dialog.Continue>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
<script lang="ts">
    import * as DropdownMenu from "$lib/components/neel-ui/dropdown-menu";
    import { Button } from "$lib/components/neel-ui/button";
    import { Label } from "$lib/components/neel-ui/shortcut";

    function callback() {
        // Your callback function here
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger let:data>
        <Button variant="secondary" data={data}>
            Open
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-[200px]">
        <DropdownMenu.Label>
            My Account
        </DropdownMenu.Label>
        <DropdownMenu.Item onclick={callback}>
            Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item onclick={callback}>
            Billing
        </DropdownMenu.Item>
        <DropdownMenu.Item onclick={callback}>
            Settings
        </DropdownMenu.Item>
        <DropdownMenu.Seperator />
        <DropdownMenu.Item onclick={callback}>
            GitHub
        </DropdownMenu.Item>
        <DropdownMenu.Item onclick={callback}>
            Support
        </DropdownMenu.Item>
        <DropdownMenu.Item onclick={callback}>
            API
        </DropdownMenu.Item>
        <DropdownMenu.Seperator />
        <DropdownMenu.Item shortcut="CTRL+Q" onclick={callback}>
            Log Out
            <Label>CTRL+Q</Label>
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
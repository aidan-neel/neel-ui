<script lang="ts">
    import Button from "$ui/button";
    import * as DropdownMenu from "$ui/dropdown-menu";
    import CircleUserRound from "lucide-svelte/icons/circle-user-round";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger let:data>
        <Button
            {data}
            size="icon"
            variant="outlined"
            class="rounded-full w-12 h-12"
        >
            <CircleUserRound class="w-[1.375rem] h-[1.375rem]" />
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="sm:w-[225px] w-[65vw]">
        <DropdownMenu.Item closeOnClick={true}>Profile</DropdownMenu.Item>
        <DropdownMenu.Item closeOnClick={true}>Settings</DropdownMenu.Item>
        <DropdownMenu.Item closeOnClick={true}>Logout</DropdownMenu.Item>
        <!--
			<DropdownMenu.Seperator />
			<DropdownMenu.SubMenu>
				<DropdownMenu.SubTrigger let:data>
					<DropdownMenu.Item {data}>Help</DropdownMenu.Item>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent placement="auto">
					<DropdownMenu.Item closeOnClick={true}
						>Documentation</DropdownMenu.Item
					>
					<DropdownMenu.Item closeOnClick={true}
						>Support</DropdownMenu.Item
					>
				</DropdownMenu.SubContent>
			</DropdownMenu.SubMenu>
		-->
    </DropdownMenu.Content>
</DropdownMenu.Root>

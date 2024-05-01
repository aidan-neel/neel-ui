<script lang="ts">
    import Fuse from "fuse.js";
    import { globalStateStore } from "$library/state";
    import { getContext } from "svelte";
	import Search from "lucide-svelte/icons/search";

    const key = getContext<string>("key");

    type $$Props = {
        value: string;
        threshold: number;
        placeholder: string;
    } & typeof $$restProps;

    export let value: $$Props["value"] = "";
    export let threshold: $$Props["threshold"] = 0.2;
    export let placeholder: $$Props["placeholder"] = "Search...";
	
    let items =
        $globalStateStore["combobox"][key]?.items.map((item) => ({
            name: item,
        })) || [];

	let fuse;

    $: {
		fuse = new Fuse(items, {
			keys: ["name"],
			includeScore: true,
			threshold: threshold,
		})
			.search(value)
			.map(({ item }) => item);

    	$globalStateStore["combobox"][key].data.results = fuse.filter(
        (item, index, self) =>
            self.findIndex((t) => t.name === item.name) === index,
		);
		$globalStateStore["combobox"][key].data.searchPerformed =
			value.length > 0;
	}

    function OnKeydown(event: KeyboardEvent) {
        if (
            event.key === "Enter" &&
            $globalStateStore["combobox"][key]?.data.results.length > 0
        ) {
            $globalStateStore["combobox"][key].data.selected =
                $globalStateStore["combobox"][key].data.results[0].name;

            $globalStateStore["combobox"][key].open = false;
            setTimeout(() => {
                if ($globalStateStore["combobox"][key])
                    $globalStateStore["combobox"][key].data.searchPerformed =
                        false;
            }, 150);
        }
    }
</script>

<div class="flex items-center h-12 w-full pb-1">
	<Search class="absolute left-3 mb-1 w-4 h-4 text-foreground-muted" />
	<input
		bind:value={value}
		on:keydown={OnKeydown}
		type="text"
		role="combobox"
		aria-expanded={true}
		aria-autocomplete="list"
		aria-controls=""
		aria-activedescendant={"combobox-item-" +
			$globalStateStore["combobox"][key]?.data.selected +
			key}
		class="w-full mb-1 pl-9 px-4 h-full placeholder:text-foreground/50 bg-transparent focus:outline-none border-b-default"
		{placeholder}
	/>

</div>
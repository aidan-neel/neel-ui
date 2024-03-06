<script lang="ts">
    import { Shortcut } from "$lib/components/neel-ui/shortcut";
    import { getContext } from "svelte";
    import { commandState } from ".";

    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key;

    let className: string | undefined = undefined;
    let callback;
    let hrefName: string | undefined = undefined;
    let shortcut: string | undefined = undefined;
    let item_name: string;
    let label: string | undefined = undefined;

    // Icon is component type
    export { className as class, callback as onclick, hrefName as href, shortcut, item_name as name, icon, label };
    let icon: any;

    const items = commandState.getValue(Key, "items");
    const itemAlreadyAdded = items.find((item) => item.name === item_name);
    if (!itemAlreadyAdded) {
        commandState.update((state) => {
            const heading = getContext<string>("heading");
            let newState = { ...state };
            newState[Key].items.push({
                name: item_name,
                icon: icon,
                callback: callback,
                shortcut: shortcut,
                label: label,
                heading: heading
            });
            return newState;
        })
    }
</script>

<Shortcut 
    key={Key}
    onclick={callback}
    state={commandState}                                                                                                                                                                                                                                                                                                                                                                    
    shortcut={shortcut}
    href={hrefName}
    callback={callback}
    class={`${className}
    pl-[0.5rem] w-full justify-between`}>
        <slot />        
</Shortcut>
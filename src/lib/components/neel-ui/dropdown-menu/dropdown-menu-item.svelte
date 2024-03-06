<script lang="ts">
    import { Shortcut } from "$lib/components/neel-ui/shortcut";
    import { getContext } from "svelte";
    import { dropdownState } from ".";

    const BuilderData = getContext("DropdownBuilderData");

    let className: string | undefined = undefined;
    let callback: () => void;
    let hrefName: string | undefined = undefined;
    let shortcut: string | undefined = undefined;

    export { className as class, callback as onclick, hrefName as href, shortcut };
</script>

<Shortcut key={BuilderData.key} onclick={callback} state={dropdownState} shortcut={shortcut} hrefName={hrefName} callback={callback} class={`${className} pl-[0.5rem] justify-between`}>
    <slot />
</Shortcut>
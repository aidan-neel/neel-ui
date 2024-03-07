<script lang="ts">
    import { Shortcut } from "$lib/components/neel-ui/shortcut";
    import { contextState } from ".";
    import { getContext } from "svelte";
    import { cn } from "$lib/utils";

    const BuilderData = getContext("BuilderData");

    let className: string | undefined = undefined;
    let callback: () => void;
    let hrefName: string | undefined = undefined;
    let shortcut: string | undefined = undefined;

    export { className as class, callback as onclick, hrefName as href, shortcut };
</script>

<Shortcut key={BuilderData.key} onclick={callback} state={contextState} shortcut={shortcut} hrefName={hrefName} callback={callback} class={cn(className, ``)}>
    <slot />
</Shortcut>
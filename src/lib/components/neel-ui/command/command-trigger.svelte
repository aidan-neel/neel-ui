<script lang="ts">
    import { getContext, onMount, setContext } from "svelte";
    import { commandState } from ".";

    // Exported variables
    let className: string | undefined = undefined;
    let shortcut: string | undefined = undefined;

    // Non-exported variables
    const BuilderData = getContext("BuilderData");
    const Key = BuilderData.key

    // Functions
    function handle() {
        const open = commandState.getValue(Key, "open")
        if(open) {
            commandState.set(Key, "open", false);
        } else {
            commandState.set(Key, "open", true);
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (shortcut) {
            // Assuming shortcut format is "CTRL+D" or similar
            const [modifier, key] = shortcut.split("+");

            // Check if the event matches the shortcut's modifier and key
            let isModifierKeyCorrect = false;
            if (modifier.toUpperCase() === "CTRL" && (event.ctrlKey || event.metaKey)) {
                isModifierKeyCorrect = true;
            } else if (modifier.toUpperCase() === "ALT" && event.altKey) {
                isModifierKeyCorrect = true;
            } // Add more modifier checks here if needed

            // Check if the primary key matches, considering case-insensitivity
            const isPrimaryKeyCorrect = event.key.toUpperCase() === key.toUpperCase();

            if (isModifierKeyCorrect && isPrimaryKeyCorrect) {
                handle();
                event.preventDefault(); // Prevent the default action only if it matches the shortcut
            }
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleKeydown);
    })

    // Export
    export {
        className as class,
        shortcut
    }
</script>

<button 
on:keydown={handleKeydown}
on:click
on:click={handle} 
{...$$restProps} 
class="{className} text-[14px] flex flex-row justify-between items-center bg-background border rounded-lg p-2 px-3 text-muted-foreground hover:bg-secondary duration-100">
    <slot />
</button>
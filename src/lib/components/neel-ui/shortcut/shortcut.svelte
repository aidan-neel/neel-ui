<script lang="ts">
  import { goto } from "$app/navigation";
  import { cn } from "$lib/utils";
    import { getContext, onMount } from "svelte";

    let className: string | undefined = undefined;
    let button: HTMLButtonElement | HTMLAnchorElement;
    let hrefName: string | undefined = undefined;
    let shortcut: string | undefined = undefined;
    let state;
    let key: string;

    let callback: () => void;
    let focus: boolean = false;

    function handleEvent(event) {
        if (event.key === "Enter" || event.key === " " || event.type === "click") {
            triggerAction();
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
                event.preventDefault(); // Prevent the default action only if it matches the shortcut
                triggerAction();
            }
        }
    }


    function triggerAction() {
        state.setOpenState(key, false);
        callback?.();
    }

    function onFocus() {
        focus = true;
    }

    function onBlur() {
        focus = false;
    }

    onMount(() => {
        button.addEventListener('focus', onFocus);
        button.addEventListener('blur', onBlur);
        document.addEventListener('keydown', handleKeydown);
    });

    export { className as class, callback as onclick, hrefName as href, shortcut, state, key };
</script>

<div class="px-1">
    {#if hrefName}
        <div
        on:click={() => {
            goto(hrefName);
        }}
        role="menuitem"
        tabindex="0"
        bind:this={button}
        on:click={handleEvent}
        {...$$restProps}
        class={cn(className, `flex flex-row justify-start items-center text-left text-[14px] p-1 pl-7
            rounded-sm w-full hover:bg-secondary hover:cursor-default`)}>
            <slot></slot>
        </div>
    {:else}
        <div 
        bind:this={button}
        tabindex="0"
        on:click={handleEvent}
        role="menuitem"
        {...$$restProps}
        class={cn(className, `flex flex-row justify-start items-center text-left text-[14px] p-1 pl-7
            rounded-sm w-full hover:bg-secondary focus:bg-secondary focus:outline-none focus:border border
            border-transparent focus:border-white/50 hover:cursor-default`)}>
            <slot></slot>
        </div>
    {/if}
</div>

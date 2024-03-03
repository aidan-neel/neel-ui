<script lang="ts">
    import { selectState, type selectStateType } from ".";
    import { getContext, setContext } from "svelte";
    import { Check } from "radix-icons-svelte";

    let className: string | undefined = undefined;
    let value: string
    let label: string;

    const BuilderData = getContext<selectStateType>("SelectBuilderData")
    $: ItemIsSelected = $selectState[BuilderData.key]?.selectedValue === value || false;

    function ChangeSelected() {
        BuilderData.open = false
        BuilderData.selectedValue = value
        BuilderData.selectedLabel = label
        selectState.update((state) => {
            return {
                ...state,
                [BuilderData.key]: BuilderData
            }
        })
    }

    export {
        className as class,
        value, label
    }
</script>

<button on:click={ChangeSelected} {...$$restProps} class={`${className} flex flex-row justify-between items-center text-left text-[14px] p-1.5 pl-2 rounded-md w-full hover:bg-secondary hover:cursor-default`}>
    <slot></slot>
    {#if ItemIsSelected}
        <Check class="w-4 h-4" />
    {/if}
</button>
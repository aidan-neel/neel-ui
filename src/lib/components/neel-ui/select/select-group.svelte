<script lang="ts">
    import { Item } from ".";

    interface SelectSchema {
        value: string,
        label: string
    }

    let className: string | undefined = undefined;
    let selectItems: SelectSchema[];

    export {
        className as class,
        selectItems as items
    }
</script>

<div {...$$restProps} class={`${className} gap-0.5 flex flex-col w-full`}>
    <slot></slot>
    <div class="w-full flex flex-col gap-0.5 p-1">
        {#each selectItems as item}
            <Item value={item.value} label={item.label}>
                {item.label}
            </Item>
        {/each}
    </div>
</div>
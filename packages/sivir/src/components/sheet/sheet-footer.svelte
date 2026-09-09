<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import type { SheetFooterProps } from '.';

    let { class: className, children, ...rest }: SheetFooterProps = $props();
</script>

<div
    {...rest}
    data-ui="sheet-footer"
    data-orientation="vertical"
    class={cn(className, 'mt-auto flex w-full flex-col items-stretch gap-2 px-1 py-1.5')}
>
    {@render children?.()}
</div>

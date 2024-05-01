<script lang="ts">
    import { cn } from "$library/utils";

    type Import = {
        name: string;
        description: string;
    };

    type $$Props = {
        class?: string;
        imports: Import[];
    };

    let className: $$Props["class"] = undefined;
    export let imports: $$Props["imports"] = [];
    export { className as class };
</script>

<div class={cn(`w-full flex flex-col gap-2`, className)}>
    <h1 id="imports" class="text-2xl font-medium mb-2">Imports</h1>
    {#each imports as _import}
        <p class="text-lg ml-6">
            <span class="font-medium">
                <span class="text-foreground-muted">`</span>{_import.name}<span
                    class="text-foreground-muted">`</span
                >
            </span>
            <span class="text-foreground-muted ml-2">
                <span class="mr-2">-</span>
                {_import.description}
            </span>
        </p>
    {/each}
</div>

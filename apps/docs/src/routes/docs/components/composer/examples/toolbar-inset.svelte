<script lang="ts">
    import * as Composer from '@sivir-ui/svelte/components/composer';
</script>

<div class="flex w-full max-w-2xl flex-col gap-6">
    <Composer.Root value="Compare the two implementation options." onSubmit={() => {}}>
        <Composer.Input aria-label="Chrome toolbar prompt" />
        <Composer.Toolbar>
            <Composer.Actions>
                <span class="px-2 text-xs text-foreground-muted">Sivir 3.1</span>
            </Composer.Actions>
            <Composer.Submit />
        </Composer.Toolbar>
    </Composer.Root>

    <Composer.Root value="Summarize the incident timeline." onSubmit={() => {}}>
        <Composer.Input aria-label="Inset toolbar prompt" />
        <Composer.Toolbar variant="inset">
            <Composer.Actions>
                <span class="px-2 text-xs text-foreground-muted">Sivir 3.1</span>
            </Composer.Actions>
            <Composer.Submit />
        </Composer.Toolbar>
    </Composer.Root>
</div>

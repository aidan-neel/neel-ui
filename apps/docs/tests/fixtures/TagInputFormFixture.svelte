<script lang="ts">
    import * as TagInput from '@sivir-ui/svelte/components/tag-input';

    let {
        tags = $bindable<string[]>([]),
        required = false,
        label = undefined,
        onSubmit = () => {}
    }: {
        tags?: string[];
        required?: boolean;
        label?: string;
        onSubmit?: () => void;
    } = $props();
</script>

<form
    data-testid="tag-form"
    onsubmit={(event) => {
        event.preventDefault();
        onSubmit();
    }}
>
    <TagInput.Root bind:tags name="tags" {required} {label}>
        <TagInput.List />
        <TagInput.Input placeholder="Add a tag…" />
    </TagInput.Root>
    <button type="submit" data-testid="submit">Save</button>
</form>

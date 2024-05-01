<script lang="ts">
    import { Button } from "$ui/button";
</script>

<div class="gap-4 flex-row flex-wrap w-full flex items-center justify-center">
    <Button disabled={true}>Primary</Button>
    <Button disabled={true} variant="secondary">Secondary</Button>
    <Button disabled={true} variant="outlined">Outlined</Button>
    <Button disabled={true} variant="bordered">Bordered</Button>
    <Button disabled={true} variant="ghost">Ghost</Button>
</div>

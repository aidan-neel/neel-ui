<script lang="ts">
    import Button from "$ui/button";
    import CustomSpinner from "$lib/custom-spinner.svelte";
</script>

<Button loading={true} spinner={CustomSpinner}>Loading...</Button>

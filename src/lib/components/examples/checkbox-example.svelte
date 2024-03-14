<script lang="ts">
    import { Checkbox } from '$lib/components/neel-ui/checkbox';

    let checked = false;
</script>

<Checkbox label={true} bind:checked={checked}>
    Agree to terms and conditions
</Checkbox>
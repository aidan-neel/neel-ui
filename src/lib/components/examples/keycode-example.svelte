<script lang="ts"> 
    import { Keycode } from '$lib/components/neel-ui/keycode'
    let keycodeValue: string = "";
</script>

<Keycode
    length={6}
    numbersOnly={true}
    seperator="-"
    bind:value={keycodeValue}
/>

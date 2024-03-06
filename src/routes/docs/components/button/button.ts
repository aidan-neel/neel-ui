const PrimaryButtonExample = `<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Button variant="primary">
    Primary
</Button>`

const SecondaryButtonExample = `<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Button variant="secondary">
    Secondary
</Button>`

const GhostButtonExample = `<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Button variant="ghost">
    Ghost
</Button>`

const LinkButtonExample = `<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>

<Button variant="link" href="https://ui.aidan-neel.com/docs/components/button">
    Link
</Button>`

const DisabledButtonExample =`<script lang="ts">
    import { Button } from "$lib/components/neel-ui/button";
</script>
    
<Button variant="primary" disabled={true}>
    Disabled
</Button>`
    

const buttonExamples = {
    primary: PrimaryButtonExample,
    secondary: SecondaryButtonExample,
    ghost: GhostButtonExample,
    link: LinkButtonExample,
    disabled: DisabledButtonExample
}

export default buttonExamples;
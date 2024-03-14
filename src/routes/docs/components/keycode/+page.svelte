<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';    import { Keycode } from '$lib/components/neel-ui/keycode'
  import KeycodeExample from '$lib/components/examples/keycode-example.svelte';

    let keycodeValue: string = "";
</script>

<Seo name="keycode" />

<div class="doc-card-parent">
    <DocCard 
    component="keycode"
    desc="Keycode component for one time passwords built on top of svelte-otp."
    header="Keycode"
    builtOnTopOf={{
        name: "svelte-otp",
        link: "https://github.com/K4UNG/svelte-otp"
    }}
    >
        <KeycodeExample />
    </DocCard>
    <NextDoc />
</div>
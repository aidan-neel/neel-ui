<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Tabs from '$lib/components/neel-ui/tabs';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import * as Card from '$lib/components/neel-ui/card';
    import { Input } from '$lib/components/neel-ui/input';
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';
    import TabsExample from '$lib/components/examples/tabs-example.svelte';
</script>

<Seo name="tabs" />

<div class="doc-card-parent">
    <DocCard 
    component="tabs"
    desc="Tabs component which allows you to swap between content displays"
    header="Tabs"
    heightClass="h-[30rem]"
    >
        <TabsExample />
    </DocCard>
    <NextDoc />
</div>
<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import * as Tooltip from '$lib/components/neel-ui/tooltip'
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="tooltip" />

<div class="doc-card-parent">
    <DocCard 
    component="tooltip"
    desc="Display's a tooltip card whenever you hover something for a set delay."
    header="Tooltip"
    >
        <Tooltip.Root>
            <Tooltip.Trigger delay={750} let:data>
                <Button data={data} variant="secondary">
                    Hover
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                Hello, World!
            </Tooltip.Content>
        </Tooltip.Root>
    </DocCard>
    <NextDoc />
</div>
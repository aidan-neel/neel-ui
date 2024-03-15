<script lang="ts"> 
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import * as Select from '$lib/components/neel-ui/select';
    import { selectState } from '$lib/components/neel-ui/select';
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';
    import SelectExample from '$lib/components/examples/select-example.svelte';
  import Highlighted from '$lib/components/highlighted.svelte';
</script>

<Seo name="select" />

<div class="doc-card-parent">
    <DocCard 
    component="select"
    desc="Selection component with groups of items to choose from"
    header="Select"
    >
        <SelectExample />
    </DocCard>

    <h1 class="pb-4 mt-8 border-b header_2nd  ">
        Reference
    </h1>

    <p class="mt-4">
        To obtain the value of the selected item, you can bind the value of the select component to a variable. The value is a <b>STORE</b>, so you must subscribe to it to use it.

        <br><br>

        Access the selected value using the <Highlighted>selectedValue</Highlighted> property on the store. <br>
        Access the selected label using the <Highlighted>selectedLabel</Highlighted> property on the store. <br>
    </p>

    <NextDoc />
</div>
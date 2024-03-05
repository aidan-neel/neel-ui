<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import DocCard from '$lib/components/doc-card.svelte';
    import * as LinkPreview from '$lib/components/neel-ui/link-preview';
    import { Link2 } from 'radix-icons-svelte';
    import Seo from '$lib/components/seo.svelte';
</script>

<Seo name="link preview" />

<div class="doc-card-parent">
    <DocCard 
    component="link-preview"
    desc="Displays content behind a link in a preview format."
    header="Link Preview"
    >
        <LinkPreview.Root>
            <LinkPreview.Trigger let:data>
                <Button data={data}  variant="link" href="https://twitter.com/huntabyte">
                    @huntabyte
                </Button>
            </LinkPreview.Trigger>
            <LinkPreview.Content class="flex flex-row">
                <img src="https://pbs.twimg.com/profile_images/1650336707026223104/7t1vlsTs_400x400.jpg" alt="Hunter Johnson" class="border rounded-full w-11 h-11" />
                <div class="flex flex-col ml-3">
                    <h1 class="font-semibold">
                        @huntabyte
                    </h1>
                    <p class='text-[14px]'>
                        I do things on the internet.
                    </p>

                    <div class="flex flex-row-reverse items-center justify-end mt-1">
                        <Link2 class="w-4 h-4 text-muted-foreground" />
                        <Button href="https://github.com/huntabyte" class="mr-1 text-muted-foreground text-[12px]" variant="link">
                            github.com/huntabyte
                        </Button>
                    </div>
                </div>
            </LinkPreview.Content>
        </LinkPreview.Root>
    </DocCard>
</div>
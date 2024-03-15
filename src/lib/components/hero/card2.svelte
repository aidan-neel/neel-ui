<script lang='ts'>
    import * as Card from '$lib/components/neel-ui/card';
    import { Button } from '$lib/components/neel-ui/button';
    import Play from 'svelte-radix/Play.svelte'
    import TrackNext from 'svelte-radix/TrackNext.svelte'
    import TrackPrevious from 'svelte-radix/TrackPrevious.svelte'

    const imgSrc = "https://images.unsplash.com/photo-1710008377028-7935bebc6df2?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
</script>

<Card.Root class="flex flex-row w-full justify-between">
    <div class="flex flex-row w-full">
        <img src={imgSrc} class="w-16 h-16 object-cover rounded-lg border" />
        <heading class="flex flex-col ml-3">
            <h1 class="font-semibold text-[18px]">
                Delorean
            </h1>
            <p class="text-muted-foreground">
                1985
            </p>
        </heading>
    </div>
    <div class="flex flex-col items-end ml-3 justify-end">
        <div class="w-full bg-secondary h-1 rounded-full">
            <div class="w-[75%] bg-white h-full rounded-full">

            </div>
        </div>
        <div class="flex flex-row gap-2 mt-2 items-end justify-end">
            <Button variant="ghost">
                <TrackPrevious class="w-5 h-5" />
            </Button>
            <Button variant="ghost">
                <Play class="w-5 h-5" />
            </Button>
            <Button variant="ghost">
                <TrackNext class="w-5 h-5" />
            </Button>
        </div>
    </div>
</Card.Root>
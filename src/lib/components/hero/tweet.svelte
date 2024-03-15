<script lang="ts">
    import NeelUILogo from '$lib/assets/logo.png';
    import { Button } from '$lib/components/neel-ui/button';
    import { flyAndScale } from '$lib/utils'

    let following = false;
</script>

<div class='bg-background rounded-lg p-4 border w-[25rem] h-[10.5rem]'>
    <div class="flex flex-row items-center">
        <div class="rounded-full border p-4 w-12 h-12 relative bg-secondary/30">
            <img src={NeelUILogo} alt="Neel UI" class="w-full h-full absolute p-2 top-0 left-0" />
        </div>
        <header class="ml-3 flex justify-between items-center w-full">
            <div class="flex-shrink-0">
                <h1 class="font-semibold">
                    Neel UI
                </h1>
                <p class="text-sm text-muted-foreground">
                    @neel-ui
                </p>
            </div>
            {#if following}
                <Button variant="secondary" on:click={() => { following = false }} class="h-8">
                    Unfollow
                </Button>
            {:else}
                <Button on:click={() => { following = true }} class="h-8">
                    Follow
                </Button>
            {/if}
        </header>
    </div>
    <p class="mt-3 text-[15px]">
        Neel UI has got to be the best thing since sliced bread. Seriously, it's amazing.
    </p>
    <div class="flex flex-row text-sm gap-4 text-muted-foreground mt-1">
        <h1>
            4 following
        </h1>
        <h1>
            962 followers
        </h1>
    </div>
</div>

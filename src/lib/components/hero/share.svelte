<script lang="ts">
    import * as Card from '$lib/components/neel-ui/card';
    import { Button } from '$lib/components/neel-ui/button';
    import { Input } from '$lib/components/neel-ui/input';
    import Copy from 'svelte-radix/Copy.svelte';
    import * as Select from '$lib/components/neel-ui/select';
    import { selectState } from '$lib/components/neel-ui/select';
    import Cross from 'svelte-radix/Cross1.svelte';

    let key1: string
    let key2: string
    let key3: string

    $: selectedLabel1 = $selectState[key1]?.selectedLabel
    $: selectedLabel2 = $selectState[key2]?.selectedLabel
    $: selectedLabel3 = $selectState[key3]?.selectedLabel
</script>

<Card.Root class="w-full">
    <Card.Header>
        Share this document
    </Card.Header>
    <Card.Description class="w-[20rem] mt-1">
        Anyone with the link can view this document.
    </Card.Description>
    <div class="mt-3 flex flex-row gap-3 items-center justify-center pb-3 border-b">
        <Input placeholder="Link" value="https://ui.aidan-neel.com/" locked={true} />
        <Button variant="secondary" class="h-9 flex-shrink-0">
            <Copy class="w-4 h-4" />
        </Button>
    </div>
    <div class="mt-4">
        <Card.Header>
            People with access
        </Card.Header>
        <div class="mt-4 gap-4 flex flex-col">
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-row">
                    <img class="w-11 h-11 rounded-full border" src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Coco" />
                    <header class="flex flex-col ml-2">
                        <h1 class="font-medium">
                            Coco
                        </h1>
                        <p class="text-muted-foreground text-sm">
                            coco@gmail.com
                        </p>
                    </header>
                </div>
                <Button class="w-8 h-8" variant="secondary">
                    <Cross class="w-3 h-3 text-muted-foreground absolute" />
                </Button>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-row">
                    <img class="w-11 h-11 rounded-full border" src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Jojo" />
                    <header class="flex flex-col ml-2">
                        <h1 class="font-medium">
                            Jojo
                        </h1>
                        <p class="text-muted-foreground text-sm">
                            jojo@gmail.com
                        </p>
                    </header>
                </div>
                <Button class="w-8 h-8" variant="secondary">
                    <Cross class="w-3 h-3 text-muted-foreground absolute" />
                </Button>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div class="flex flex-row">
                    <img class="w-11 h-11 rounded-full border" src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Momo" />
                    <header class="flex flex-col ml-2">
                        <h1 class="font-medium">
                            Momo
                        </h1>
                        <p class="text-muted-foreground text-sm">
                            momo@gmail.com
                        </p>
                    </header>
                </div>
                <Button class="w-8 h-8" variant="secondary">
                    <Cross class="w-3 h-3 text-muted-foreground absolute" />
                </Button>
            </div>
        </div>
    </div>
</Card.Root>    
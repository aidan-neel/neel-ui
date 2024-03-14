<script lang="ts">
    import * as Popout from '$lib/components/neel-ui/popout';
    import { Button } from '$lib/components/neel-ui/button';
    import { Input } from '$lib/components/neel-ui/input';
</script>

<Popout.Root>
    <Popout.Trigger let:data>
        <Button variant="secondary" data={data}>
            Popout
        </Button>
    </Popout.Trigger>
    <Popout.Content class="w-[95vw] sm:w-[22.5rem] h-auto">
        <Popout.Header>
            Dimensions
        </Popout.Header>
        <Popout.Description>
            Set the dimensions of the popout window.
        </Popout.Description>
        <div class="mt-3"></div>
        <div class="space-y-3">
            <div class="flex flex-row w-full items-center">
                <p class="w-40 text-[14px] font-medium">
                    Width
                </p>
                <Input class="w-full" value="100px" type="text" />
            </div>
            <div class="flex flex-row w-full items-center">
                <p class="w-40 text-[14px] font-medium">
                    Max Width
                </p>
                <Input class="w-full" value="250px" type="text" />
            </div>
            <div class="flex flex-row w-full items-center">
                <p class="w-40 text-[14px] font-medium">
                    Height
                </p>
                <Input class="w-full" value="100px" type="text" />
            </div>
            <div class="flex flex-row w-full items-center">
                <p class="w-40 text-[14px] font-medium">
                    Max Height
                </p>
                <Input class="w-full" value="250px" type="text" />
            </div>
        </div>
    </Popout.Content>
</Popout.Root>
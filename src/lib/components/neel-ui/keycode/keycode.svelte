<script lang="ts">
    import { cn } from "$lib/utils";
    import { type DefaultProps } from '$lib/utils';
    import type { Event, EventProps, Hook } from '$lib/event-handler';
    import { type Props } from ".";
    import Input from "../input/input.svelte";
    import SvelteOtp from '@k4ung/svelte-otp';
    import { onMount } from 'svelte';
  
    type $$Props = Props;
    
    let className: $$Props["class"] = undefined;
    export let numbersOnly: $$Props["numbersOnly"] = false;
    export let lettersOnly: $$Props["lettersOnly"] = false;
    export let length: $$Props["length"] = 0;
    export let value: $$Props["value"] = "";
    export let seperator: $$Props["seperator"] = "";
    export let placeholder: $$Props["placeholder"] = "";
    export { className as class };
  
    let lengthIterable = Array.from({ length }, (_, i) => i);
    let inputs: HTMLElement[] = [];

    // Focus the next input
    function focusNextInput(currentIndex: number) {
        console.log('focusing')
        const nextIndex = currentIndex + 1;
        if (nextIndex < inputs.length) {
            inputs[nextIndex].focus();
        }
        console.log(inputs)
    }

  onMount(() => {
    // Optionally focus the first input on mount
    if (inputs.length > 0) {
      inputs[0].focus();
    }
  });
</script>

<SvelteOtp
bind:value={value}
numOfInputs={length}
wrapperClass="flex flex-row gap-2"
disableDefaultStyle={true}
inputClass={cn(className, `bg-background rounded-lg border flex md:w-10 text-center focus:outline-none focus:border-muted-foreground text-base md:text-xl font-medium w-8 h-14 md:h-16`)}
/>
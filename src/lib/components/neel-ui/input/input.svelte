<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

    export let label = '';
    export let type = 'text'; // default type
    export let value = ''; // default value
    export let maxWidth: boolean = true;
    export let focused: boolean = false;
    export let locked: boolean = false;
    let thisElement: HTMLInputElement = undefined;
    let className = '';

    onMount(() => {
        if(focused) {
            thisElement.focus();
        }
    })
  
    // Function to handle input changes
    function handleInput(event) {
      value = event.target.value;
      // Perform any additional actions with the new value if necessary
    }

    export { className as class, thisElement as this }
</script>
  
<div class='flex flex-col {maxWidth ? 'w-full' : ''}'>
      {#if label}
          <label for={label} class="text-[14px] mb-2 text-foreground font-normal">
              {label}
          </label>
      {/if}
      <input id={label} 
        disabled={locked}
        bind:this={thisElement}
        value={value}
        on:focus={() => focused = true}
        on:blur={() => focused = false}
        on:input={handleInput}
        {...$$restProps} 
        class={cn(className, `border p-1.5 px-2 text-[14px] font-normal text-foreground
        bg-transparent placeholder:text-muted-foreground/70 focus:outline-none
        focus:border-white/20 rounded-lg`)} />
  </div>
  
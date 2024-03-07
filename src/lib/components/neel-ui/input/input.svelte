<script>
    export let label = '';
    export let type = 'text'; // default type
    export let value = ''; // default value
    let className = '';
  
    // Function to handle input changes
    function handleInput(event) {
      value = event.target.value;
      // Perform any additional actions with the new value if necessary
    }

    export { className as class }
</script>
  
<div class='flex flex-col w-full'>
      {#if label}
          <label for={label} class="text-[14px] mb-2 text-foreground font-normal">
              {label}
          </label>
      {/if}
      <input id={label} 
             type={type}
             value={value}
             on:input={handleInput}
             {...$$restProps} 
             class={`border p-1.5 px-2 text-[14px] font-normal text-foreground
             bg-popover-bg placeholder:text-muted-foreground/70 focus:outline-none
             focus:border-white/20 rounded-lg ${className} `} />
  </div>
  
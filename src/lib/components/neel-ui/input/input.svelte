<script lang="ts">    
    let className: string | undefined = undefined;
    let label: string | undefined = undefined;

    export let value: string | undefined = undefined;
    
    export { 
        className as class,
        label
    }
</script>

<div class='flex flex-col w-full'>
    {#if label} 
        <label for={label} class="text-[14px] mb-2 text-foreground font-normal">
            {label}
        </label>
    {/if}
    <input id={label} bind:value={value} {...$$restProps} class={`${className} border p-1.5 px-2 text-[14px] font-normal text-foreground bg-popover-bg placeholder:text-muted-foreground/70 shadow-class focus:outline-none focus:border-white/20 rounded-lg`} />
</div>
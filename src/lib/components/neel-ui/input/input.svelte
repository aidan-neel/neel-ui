<script lang="ts">    
    let className: string | undefined = undefined;
    let label: string | undefined = undefined;
    
    export { 
        className as class,
        label
    }
</script>

<div class='flex flex-col'>
    {#if label} 
        <label for={label} class="text-[14px] mb-2 text-muted-foreground">
            {label}
        </label>
    {/if}
    <input id={label} {...$$restProps} class={`${className} border p-1.5 px-2 text-[14px] text-foreground placeholder:text-muted-foreground/70 bg-background focus:outline-none focus:border-white/20 rounded-lg`} />
</div>
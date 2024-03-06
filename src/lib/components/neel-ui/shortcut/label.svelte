<script lang="ts">
    let className: string | undefined = undefined;
    
    export {
        className as class,
    }
</script>

<div class="text-[11px] {className} bg-secondary-muted border px-1 rounded-md font-mono text-muted-foreground">
    <slot></slot>
</div>
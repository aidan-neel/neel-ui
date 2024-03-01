<script lang="ts">
    
    let className: string | undefined = undefined;;
    export { className as class };
</script>

<div class={`${className} flex sm:items-start sm:justify-start flex-col sm:text-left items-center justify-center text-center`}>
    <slot></slot>
</div>
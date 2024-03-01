<script lang="ts">

    let className: string | undefined = undefined;
    export { className as class }
</script>

<div class="w-full flex flex-col items-center sm:items-end justify-center mt-3 gap-2">
    <div class="w-full gap-2 flex-col flex sm:flex-row-reverse sm:w-[40%]">
        <slot></slot>
    </div>
</div>
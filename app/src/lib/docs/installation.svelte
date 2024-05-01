<script lang="ts">
    import Button from "$ui/button";

    export let name: string;
</script>

<h1 id="installation" class="mb-3 text-2xl font-medium">Installation</h1>
<div
    class="border-default rounded-lg w-full font-mono p-0 flex items-center justify-center"
>
    <div
        {...$$restProps}
        class={`text-[16px] p-3 overflow-auto text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
    >
        <span class="text-foreground mr-2.5 pl-1">npx</span> neel-ui add {name}
    </div>
</div>

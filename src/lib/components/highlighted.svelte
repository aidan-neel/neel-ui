<script lang="ts">
  import { cn } from "$lib/utils";

    let className: string | undefined = undefined;
    export {
        className as class,
    }
</script>

<span class={cn(className, `bg-[#18181b] shadow-class border p-1 rounded-lg text-[14px] px-2 font-mono`)}><slot /></span>
<script lang="ts">
    import GitHub from "svelte-radix/GithubLogo.svelte";

    export let description: string;
    export let component: string;
</script>

<div class="w-full border-b-default mb-5 pb-7">
    <h1 class="text-4xl font-semibold">
        <slot />
    </h1>
    <p class="lg:w-2/3 w-full mt-4 mb-5 text-lg">
        {description}
    </p>
    <div class="flex flex-row gap-3">
        <a
            href="https://github.com/aidan-neel/neel-ui-dev/tree/main/components/{component}"
            class="text-foreground-opposite bg-ghost-hovered px-3 text-sm flex flex-row items-center justify-center p-2 h-7 rounded-md"
        >
            <GitHub class="w-4 h-4 mr-2" />
            GitHub
        </a>
        <slot name="references" />
    </div>
</div>

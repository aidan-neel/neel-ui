<script lang="ts">
    import Logo from '$lib/assets/logo.png'
    import { page } from '$app/stores';

    $: pathName = $page.url.pathname
    $: console.log(pathName)
</script>

<nav class='w-screen h-16 absolute z-20 top-0 flex items-center justify-center left-0 bg-background bg-opacity-50 backdrop-blur-md border-b'>
    <section class="w-1/2 h-full flex flex-row items-center">
        <a href="/" class="flex flex-row items-center h-full gap-2">
            <img src={Logo} alt="Neel" class="h-12 w-12" />
            <h1 class="text-lg font-bold">Neel/UI</h1>
        </a>
        <nav class="ml-8 text-[14px] flex flex-row gap-8 font-medium">
            <a href="/docs" class={`${pathName === "/docs" || "/docs/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
                Docs
            </a>
            <a href="/docs/components" class={`${pathName === "/docs/components" || "/docs/components/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
                Components
            </a>
            <a href="https://github.com/aidan-neel/neel-ui" class={`${pathName === "/https://github.com/aidan-neel/neel-ui" || "/https://github.com/aidan-neel/neel-ui/" ? 'text-white' : ""}  text-zinc-400 hover:text-zinc-500 duration-100`}>
                GitHub
            </a>
        </nav>
    </section>
</nav>
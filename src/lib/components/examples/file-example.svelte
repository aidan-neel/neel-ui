<script lang="ts">
    import {FileTrigger} from "$lib/components/neel-ui/file-trigger";

    let files: File[] = [];
</script>

<FileTrigger multiple={true} bind:files={files}>
    Select a file
</FileTrigger>
{#if files}
    {#each files as file}
        <p>
            {file.name}
        </p>
    {/each}
{/if}
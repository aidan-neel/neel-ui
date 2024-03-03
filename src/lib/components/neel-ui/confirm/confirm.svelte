<script lang="ts">
    import Popover from '../popover/popover.svelte'
    import { getContext, onMount, setContext } from 'svelte';
    import { type popoverStateType, popoverBuilder } from '../popover';

    let BuilderData: popoverStateType = popoverBuilder();

    let className: string | undefined = undefined;
    export { className as class }

    setContext('popoverStateData', BuilderData)
</script>

<slot></slot>
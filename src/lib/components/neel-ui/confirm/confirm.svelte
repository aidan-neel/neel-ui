
<script lang="ts">
    import Popover from '../modal/popover.svelte'
    import { getContext, onDestroy, onMount, setContext } from 'svelte';
    import { type popoverStateType, popoverBuilder, popoverState } from '../modal';

    let BuilderData: popoverStateType = popoverBuilder();

    let className: string | undefined = undefined;
    export { className as class }

    setContext('popoverStateData', BuilderData)

    onDestroy(() => {
        popoverState[BuilderData.key] = undefined
    })
</script>

<slot></slot>
<script lang="ts">
    import { cn } from '@sivir-ui/svelte/utils';
    import type { QuestionOptionsProps } from '.';
    import { getQuestionContext } from './context.svelte';

    let { class: className, children, ...rest }: QuestionOptionsProps = $props();
    const context = getQuestionContext();
</script>

<div
    {...rest}
    data-ui="question-options"
    data-type={context.type}
    class={cn(className, 'grid gap-1 px-3 pt-4 pb-3')}
>
    {@render children?.()}
</div>

<script lang="ts">
    import { flyAndScale } from "$lib/utils";
    import { Toast, type toastStateType, toastState, ToastAction, ToastComponent } from ".";
  
    $: toasts = Object.values($toastState).filter((toast) => toast.open);
  </script>
  
<div class="w-screen flex items-end justify-center z-[99999999] fixed bottom-6">
    {#each toasts as toast, index}
        <div transition:flyAndScale={{ start: 0.8, duration: 150 }} 
        class="sm:w-[25.5rem] shadow-md shadow-background w-[92.5vw] h-auto flex justify-between items-center p-4 bg-background rounded-lg border absolute sm:right-6" 
        style="margin-bottom: {index * 3 + 8}px;" 
        class:sm="{`sm:mr-[${index * 3 + 8}px]`}">
            <div class="flex flex-row items-center justify-center">
                {#if toast.icon}
                    <svelte:component this={toast.icon} class="mr-4 h-5 w-5" />
                {/if}
                <div class="flex flex-col w-full">
                    <h1 class="font-medium">
                        {toast.title}
                    </h1>
                    <p class="text-sm text-muted-foreground w-[80%]">
                        {toast.description}
                    </p>
                </div>
            </div>
            <div class="flex-shrink-0">
                <ToastAction key={toast.key} action={toast.action.onClick} variant={toast.action.variant}>
                    {toast.action.label}
                </ToastAction>
            </div>
        </div>
    {/each}
</div>

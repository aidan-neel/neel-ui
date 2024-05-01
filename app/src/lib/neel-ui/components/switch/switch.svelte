<script>
    import { onMount } from "svelte";

    let enabled = false;
    export { enabled as value };
    let pillSize = 0; // Initialize pill size variable
    let translateX = 0; // Initialize translateX variable
    let container; // Reference to the container DOM element

    function toggle() {
        enabled = !enabled;
    }

    // Function to calculate the pill size and its translateX value
    function calculatePillSizeAndTranslate() {
        const containerWidth = container.clientWidth;
        const padding = 4; // Adjust padding as needed, this affects the gap between the pill and container edge
        pillSize = containerWidth / 2 - padding * 2; // Calculate new pill size
        translateX = containerWidth - pillSize - padding * 2; // Calculate translateX value
    }

    onMount(() => {
        calculatePillSizeAndTranslate(); // Call on component mount
        window.addEventListener("resize", calculatePillSizeAndTranslate); // Adjust on window resize for responsiveness

        return () => {
            window.removeEventListener("resize", calculatePillSizeAndTranslate); // Cleanup on component destruction
        };
    });
</script>

<div class="flex items-center">
<button
	class="switch-container cursor-pointer w-14 h-8 flex items-center border-default {enabled
		? 'bg-primary'
		: 'bg-foreground-opposite'} rounded-full p-1"
	on:click={toggle}
	bind:this={container}
>
	<!-- Pill switch toggle -->
	<div
		class={`pill ${!enabled ? "bg-primary" : "bg-foreground-opposite"} rounded-full shadow-md ${enabled ? "translate-x-full" : "translate-x-0"}`}
		style={`width: ${pillSize}px; height: ${pillSize}px; transform: translateX(${enabled ? translateX : 0}px);`}
	></div>
</button>
</div>

<style>
    .switch-container {
        transition: background-color 0.1s; /* Smooth transition for background color */
    }
    .pill {
        transition: transform 0.25s ease-in-out; /* Smooth transition for pill movement */
    }
</style>
<script lang="ts">
    import type {
        Event,
        Hook,
        EventProps,
        TriggerTypes,
    } from "$library/event-types";
    import { globalStateStore } from "$library/state";
    import { setContext, getContext } from "svelte";
    import { cn } from "$library/utils";
    import type { State } from ".";

    const key = getContext<string>("key");
    const stateName: string = getContext<string>("stateName");

    let className: string | undefined = undefined;
    export { className as class };

    let open = $globalStateStore[stateName][key]?.open;
    export let openType: TriggerTypes = "click";
    export let closeType: TriggerTypes = "click";
    export let delayOpen: number = 0;
    export let delayClose: number = 0;
    $: open = $globalStateStore[stateName][key]?.open;

    let JustClickedOpen: boolean = false;
    function setOpenState(isOpen: boolean) {
        $globalStateStore[stateName][key].open = isOpen;
        if (isOpen) {
            JustClickedOpen = true;
            setTimeout(() => (JustClickedOpen = false), 10);
        }
    }

    let OpenHook: Hook = {
        trigger: openType,
        callback: (props: EventProps) => {
            if (open) return;
            if (openType === "mouseenter") {
                setTimeout(() => {
                    const entered =
                        $globalStateStore[stateName][key].data.entered;
                    if (entered) {
                        setOpenState(true);
                        $globalStateStore[stateName][key].data.triggerInstance =
                            props.Component;
                        $globalStateStore[stateName][key].data.triggerHeight =
                            props.Component.clientHeight;
                        $globalStateStore[stateName][key].data.triggerWidth =
                            props.Component.clientWidth;
                        props.Component.setAttribute("aria-haspopup", "true");
                        props.Component.setAttribute("aria-expanded", "true");
                    }
                }, delayOpen);
            } else {
                setOpenState(true);
                $globalStateStore[stateName][key].data.triggerInstance =
                    props.Component;
                $globalStateStore[stateName][key].data.triggerHeight =
                    props.Component.clientHeight;
                $globalStateStore[stateName][key].data.triggerWidth =
                    props.Component.clientWidth;
                props.Component.setAttribute("aria-haspopup", "true");
                props.Component.setAttribute("aria-expanded", "true");
            }
        },
    };

    let CloseHook: Hook = {
        trigger: closeType,
        callback: (props: EventProps) => {
            if (!open || JustClickedOpen) return;
            setTimeout(() => {
                const enteredContent =
                    $globalStateStore[stateName][key].data.enteredContent;
                if (!enteredContent) {
                    $globalStateStore[stateName][key].data.triggerInstance =
                        props.Component;
                    setOpenState(false);
                }
            }, delayClose);
        },
    };

    let MouseEnterHook: Hook = {
        trigger: "mouseenter",
        callback: (props: EventProps) => {
            $globalStateStore[stateName][key].data.entered = true;
            $globalStateStore[stateName][key].data.triggerInstance =
                props.Component;
        },
    };

    let MouseLeaveHook: Hook = {
        trigger: "mouseleave",
        callback: (props: EventProps) => {
            $globalStateStore[stateName][key].data.entered = false;
            $globalStateStore[stateName][key].data.triggerInstance =
                props.Component;
        },
    };

    $: {
        if (
            openType === "mouseenter" &&
            closeType === "mouseleave" &&
            delayClose <= 0
        ) {
            // check if the trigger is still hovered
            const entered = $globalStateStore[stateName][key].data.entered;
            if (open && !entered) {
                setOpenState(false);
            }
        }
    }

    let data: Event = {
        event: "dropdown",
        hooks: [CloseHook, OpenHook, MouseEnterHook, MouseLeaveHook],
        bindTrigger: {
            name: stateName,
            key: key,
        },
    };
</script>

<div {...$$restProps} class={cn(className, ``)}>
    <slot {data} />
</div>

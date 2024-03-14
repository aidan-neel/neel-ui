import ToastAction from './toast-action.svelte'
import ToastComponent from './toast.svelte'
import { CreateStateStore } from '$lib/utils'

const variants: string[] = [
    "success",
    "warning",
    "error",
    "info",
]

const buttonVariants: string[] = [
    "primary",
    "secondary",
    "ghost",
    "link",
]

type Action = {
    label: string,
    onClick: () => void,
    variant: typeof buttonVariants[number],
}

type Toast = {
    show: () => void,
    SHOW: () => void,
    Show: () => void,

    close: () => void,
    Close: () => void,
    CLOSE: () => void,
}

type ToastData = {
    title: string,
    description: string,
    duration: number,
    action: Action,
    icon?: any,
}

type ToastStateType = {
    key: string,
    open: boolean,
    data: ToastData,
}

const stateType: ToastStateType[] = []
const toastState = CreateStateStore(stateType);

function ShowToast( data: ToastData ) {
    // Initialize new toast
    const NewToastData = {
        key: "toast-" + Math.random().toString(36).substring(2, 15),
        open: true,
        title: data.title,
        description: data.description,
        duration: data.duration,
        action: data.action,
        icon: data.icon,
    }

    toastState.update((state) => {
        state[NewToastData.key] = NewToastData;
        return state;
    });
    
    setTimeout(() => {
        // Remove toast from toastState
        toastState.update((state) => {
            const newState = { ...state };

            delete newState[NewToastData.key];

            return newState;
        });
    }, data.duration);
}

function CloseToast( key: string ) {
    console.log(key)
    toastState.update((state) => {
        const newState = { ...state };

        delete newState[key];

        return newState;
    });
}

function ToastBuilder() // : Toast
{
    return {
        show: ShowToast,
        close: CloseToast,

        // Capitalized
        Show: ShowToast,
        Close: CloseToast,

        // All caps
        SHOW: ShowToast,
        CLOSE: CloseToast,
    }
}

const builder = ToastBuilder()

export {
    ToastAction,
    ToastComponent,

    builder as Toast,
    toastState as toastState,
    type ToastStateType as toastStateType,
}
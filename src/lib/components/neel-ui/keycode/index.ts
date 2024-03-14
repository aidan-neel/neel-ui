import Keycode from './keycode.svelte'
import { type DefaultProps } from '$lib/utils'

type Props = DefaultProps & {
    numbersOnly?: boolean;
    lettersOnly?: boolean;
    class?: string;
    length: number;
    value: string;
    seperator: string;
    placeholder: string;
}

export {
    Keycode,

    type Props
}
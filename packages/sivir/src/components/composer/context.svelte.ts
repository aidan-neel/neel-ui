import { createContext } from '@sivir-ui/svelte/utils';
import type { ComposerStatus } from '.';

export type ComposerContext = {
    value: string;
    readonly status: ComposerStatus;
    readonly disabled: boolean;
    readonly allowEmpty: boolean;
    readonly generating: boolean | undefined;
    readonly pending: boolean;
    readonly insetToolbar: boolean;
    submit: () => void;
    stop: () => void;
    setInsetToolbar: (next: boolean) => void;
};

const { set: setComposerContext, get: getComposerContext } =
    createContext<ComposerContext>('composer');

export { getComposerContext, setComposerContext };

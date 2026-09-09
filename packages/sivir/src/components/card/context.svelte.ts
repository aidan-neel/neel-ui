import { createContext } from '@sivir-ui/svelte/utils';
import type { Snippet } from 'svelte';
import type { CardProps } from '.';

export type CardFooterSlot = {
    children?: Snippet;
    className?: string;
    rest: Record<string, unknown>;
};

export type CardContext = {
    variant: NonNullable<CardProps['variant']>;
    footerSlot: CardFooterSlot | undefined;
};

const { set: setCardContext, get: getCardContext } = createContext<CardContext>('card');

export { getCardContext, setCardContext };

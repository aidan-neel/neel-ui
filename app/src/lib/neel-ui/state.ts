import { writable, type Writable } from "svelte/store";

// This is a generic state store that can be used to store any type of state
// The state store will be built like this:
/*"""

StateStore: {
    StateName: StateObject[] = {
        'state-key': {
            open: boolean,
            data: any,
            // etc, etc
        }
    }
}

"""*/

interface DefaultStateType {
    [key: string]: {
        [key: string]: {
            open: boolean;
            data: any;
        };
    };
}

function buildStateStore<T>(): Writable<DefaultStateType> & {
    addNewState: (stateName: string, stateType: T) => void;
    removeState: (stateName: string) => void;

    openStateItem: (stateName: string, stateKey: string) => void;
    closeStateItem: (stateName: string, stateKey: string) => void;

    addNewStateItem: (stateName: string, stateItem: any) => string;
    removeStateItem: (stateName: string, stateKey: string) => void;
    generateStateKey: (stateName: string) => string;
    getStateItem: (stateName: string, stateKey: string) => any;
    updateStateItem: (
        stateName: string,
        stateKey: string,
        newStateItem: any,
    ) => void;
} {
    const stateStore = writable<DefaultStateType>({});

    function generateStateKey(StateName: string): string {
        return `${StateName}-` + Math.random().toString(36).substring(7);
    }

    function addNewState(StateName: string, StateType: T): void {
        stateStore.update((state) => {
            if (state[StateName]) return state; // Ignore the state if it already exists

            const newState = {
                ...state,
                [StateName]: StateType,
            };

            return newState;
        });
    }

    function removeState(StateName: string): void {
        stateStore.update((state) => {
            const newState = {
                ...state,
            };

            delete newState[StateName];

            return newState;
        });
    }

    function removeStateItem(StateName: string, StateKey: string): void {
        stateStore.update((state) => {
            const newState = {
                ...state,
                [StateName]: {
                    ...state[StateName],
                },
            };

            delete newState[StateName][StateKey];

            return newState;
        });
    }

    function addNewStateItem(StateName: string, StateItem: any): string {
        const StateKey = generateStateKey(StateName);

        stateStore.update((state) => {
            if (state[StateName]) {
                if (state[StateName][StateKey]) return state; // Ignore the state if it already exists
            }

            const newState = {
                ...state,
                [StateName]: {
                    ...state[StateName],
                    [StateKey]: StateItem,
                },
            };

            return newState;
        });

        return StateKey;
    }

    function getStateItem(StateName: string, StateKey: string): any {
        let item;

        stateStore.subscribe((state) => {
            item = state[StateName][StateKey];
        });

        return item;
    }

    function openStateItem(StateName: string, StateKey: string): void {
        stateStore.update((state) => {
            const newState = {
                ...state,
                [StateName]: {
                    ...state[StateName],
                    [StateKey]: {
                        ...state[StateName][StateKey],
                        open: true,
                    },
                },
            };

            return newState;
        });
    }

    function closeStateItem(StateName: string, StateKey: string): void {
        stateStore.update((state) => {
            const newState = {
                ...state,
                [StateName]: {
                    ...state[StateName],
                    [StateKey]: {
                        ...state[StateName][StateKey],
                        open: false,
                    },
                },
            };

            return newState;
        });
    }

    function updateStateItem(
        StateName: string,
        StateKey: string,
        newStateItem: any,
    ): void {
        stateStore.update((state) => {
            if (!state[StateName] || !state[StateName][StateKey]) return state;

            const updatedState = {
                ...state,
                [StateName]: {
                    ...state[StateName],
                    [StateKey]: newStateItem,
                },
            };

            return updatedState;
        });
    }

    return {
        ...stateStore,
        // State helpers
        addNewState,
        removeState,
        openStateItem,
        closeStateItem,
        getStateItem,
        updateStateItem,
        addNewStateItem,
        generateStateKey,
    };
}

const globalStateStore = buildStateStore<any>();

export { globalStateStore };

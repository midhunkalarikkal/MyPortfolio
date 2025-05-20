import { create } from 'zustand';

interface CounterStore {
    contactFormOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
    contactFormOpen: false,
    openForm: () =>
        set(() => ({
            contactFormOpen: true,
        })),
    closeForm: () =>
        set(() => ({
            contactFormOpen: false,
        })),
}));

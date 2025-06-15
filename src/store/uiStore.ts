import { create } from 'zustand'
import { createPresistStore } from './genericStore';

interface iUiState {
    darkMode: boolean,
    lightSwitch: (on: boolean) => void
}

export const useUiStore = create<iUiState>()(
    createPresistStore((set) => ({
        darkMode: false,
        lightSwitch: (on: boolean) => set(() => ({ darkMode: on })),
    }), 'uiStore')
);


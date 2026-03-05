import {type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const createPresistStore = <T>(f: StateCreator<T>, storeName: string) =>
    devtools(persist(f, { name: storeName }));



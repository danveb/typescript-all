import { create } from "zustand";

export interface Store {
  count: number;
  inc: () => void; 
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
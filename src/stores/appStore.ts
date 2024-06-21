import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  stateTest: boolean;
}

interface Action {}

export const useAppStore = create<State & Action>()(
  immer((set) => {
    return {
      stateTest: true,
    };
  }),
);

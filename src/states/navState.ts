import { create } from "zustand";
import { devtools } from "zustand/middleware";

type navState = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export const useNav = create<navState>()(
  devtools((set) => {
    return {
      isOpen: false,
      setOpen: (newState) => set({ isOpen: newState }),
    };
  })
);

export default useNav;

import { create } from "zustand";

const useMyStore = create((set) => ({
  name: "INIT",
  setName: (name) => {
    set({ name });
  },
}));

export default useMyStore;

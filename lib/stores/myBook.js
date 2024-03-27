import { create } from "zustand";

const useBookStore = create((set) => ({
  bookName: "INIT",
  setBookName: (bookName) => {
    set({ bookName });
  },
}));

export default useBookStore;

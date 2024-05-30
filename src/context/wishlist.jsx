import { create } from 'zustand'; // Updated import statement

export const useStore = create((set) => ({
  bears: JSON.parse(localStorage.getItem("wishlist")) || [],
  togwish: (payload) =>
    set((state) => {
      let index = state.bears?.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        set({ bears: [...state.bears, payload] });
      } else {
        set({ bears: state.bears?.filter((el) => el.id !== payload.id) });
      }
      localStorage.setItem('wishlist', JSON.stringify(state.bears));
    }),
}));

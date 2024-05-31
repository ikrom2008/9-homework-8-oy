import { create } from 'zustand';

export const useStore = create((set) => ({
  // bears: JSON.parse(localStorage.getItem("wishlist")) || [],
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
  togwish: (payload) =>
    set((state) => {
      let index = state.value?.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        set({ value: [...state.value, payload] });
      } else {
        set({ value: state.value?.filter((el) => el.id !== payload.id) });
      }
      localStorage.setItem('wishlist', JSON.stringify(state.value));
      console.log(state.value);
    }),
}));

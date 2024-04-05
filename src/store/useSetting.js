import { create } from "zustand";

const useStore = create((set) => ({
  navbar: "Navbar1",
  setNavbar: (navbar) => {
    set({ navbar });
    return navbar;
  },
  productCardVariant: "viewAll",
  setProductCardVariant: (productCardVariant) => {
    set({ productCardVariant });
    return productCardVariant;
  },

  productCardType: "withButtons",
  setProductCardType: (productCardType) => {
    set({ productCardType });
    return productCardType;
  },

  isSettingModalOpen: false,
  setIsSettingModalOpen: (isSettingModalOpen) => set({ isSettingModalOpen }),

  isCartModalOpen: false,
  setIsCartModalOpen: (isCartModalOpen) => set({ isCartModalOpen }),

  products: [],
  setProducts: (products) => set({ products }),

  cart: [],
  setCart: (cart) => set({ cart }),
}));

export default useStore;

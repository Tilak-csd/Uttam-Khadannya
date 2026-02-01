import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  isDrawerOpen: false, // New State
  
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  
  addToCart: (product) => 
    set((state) => ({ 
      cart: [...state.cart, product],
      isDrawerOpen: true // Automatically open drawer when item is added
    })),
    
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    })),
}));

export default useCartStore;
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  
  // Action to add an item
  addToCart: (product) => 
    set((state) => ({ 
      cart: [...state.cart, product] 
    })),

  // Action to clear the cart
  clearCart: () => set({ cart: [] }),

  // Action to remove a specific item by ID
  removeFromCart: (productId) => 
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    })),
}));

export default useCartStore;
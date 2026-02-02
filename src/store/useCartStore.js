import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  isDrawerOpen: false,

  toggleDrawer: () =>
    set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          isDrawerOpen: true,
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
        isDrawerOpen: true,
      };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ),
    })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),

  // 🔥 Total Amount Selector
  getTotalAmount: () => {
    const cart = get().cart;
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;

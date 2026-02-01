import React from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const CartDrawer = () => {
  // Assuming your store has updateQuantity or addToCart/removeFromOne
  const { cart, isDrawerOpen, toggleDrawer, removeFromCart, updateQuantity } = useCartStore();

  // Grouping logic: If your store doesn't already handle quantities, 
  // you can derive them here, but it's better if the store handles the 'quantity' property.
  
  return (
    <>
      {/* Background Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={toggleDrawer}
        />
      )}

      {/* Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag /> Your Cart ({cart.reduce((acc, item) => acc + (item.quantity || 1), 0)})
          </h2>
          <button onClick={toggleDrawer} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(100vh-200px)]">
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain bg-gray-50 rounded" />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.name}</h3>
                    <p className="text-[#8cc63f] font-bold mb-2">{item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 border w-fit rounded-lg px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="hover:text-[#8cc63f] transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="hover:text-[#8cc63f] transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition-colors cursor-pointer p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total</span>
              {/* Calculate total price here if needed */}
              <span>{/* Total calculation logic */}</span>
            </div>
            <button className="w-full bg-[#8cc63f] text-white py-4 rounded-xl font-bold hover:bg-[#7ab335] transition-colors shadow-lg">
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
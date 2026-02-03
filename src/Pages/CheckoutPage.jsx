import React, { useState } from 'react';
import { 
  Truck, 
  ShoppingBag, 
  ChevronLeft, 
  Pencil, 
  Trash2, 
  Ticket,
  Wallet,
  Coins
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore'; // Ensure this path is correct

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('esewa');

  // 1. Get Data from Zustand Store
  const { cart, removeFromCart, getTotalAmount } = useCartStore();
  
  const subtotal = getTotalAmount();
  const deliveryCharge = deliveryMethod === 'delivery' ? 150 : 0;
  const tax = subtotal * 0.13; // 13% VAT example
  const totalAmount = subtotal + deliveryCharge + tax;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Delivery & Payment */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <Link to="/" className="flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors">
            <ChevronLeft size={20} />
            <span className="ml-1 font-medium">Back to Shopping</span>
          </Link>

          {/* Delivery Options */}
          <div className="space-y-3 mb-8">
            <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'delivery' ? 'border-[#8cc63f] bg-[#8cc63f]/5' : 'border-slate-100'}`}>
              <div className="flex items-center gap-4">
                <input type="radio" checked={deliveryMethod === 'delivery'} onChange={() => setDeliveryMethod('delivery')} className="w-5 h-5 accent-[#8cc63f]" />
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8cc63f]/20 rounded-lg text-[#8cc63f]"><Truck size={20} /></div>
                  <span className="font-semibold text-slate-700">Home Delivery (Inside Valley)</span>
                </div>
              </div>
              <span className="font-bold text-slate-600">Rs. 150</span>
            </label>

            <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'pickup' ? 'border-[#8cc63f] bg-[#8cc63f]/5' : 'border-slate-100'}`}>
              <div className="flex items-center gap-4">
                <input type="radio" checked={deliveryMethod === 'pickup'} onChange={() => setDeliveryMethod('pickup')} className="w-5 h-5 accent-[#8cc63f]" />
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><ShoppingBag size={20} /></div>
                  <span className="font-semibold text-slate-700">Store Pickup (Free)</span>
                </div>
              </div>
            </label>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">Payment Method</h3>
            
            <div className="grid grid-cols-3 gap-3 mb-8">
              <button 
                onClick={() => setPaymentMethod('esewa')}
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${paymentMethod === 'esewa' ? 'border-[#60bb46] bg-[#60bb46]/5' : 'border-slate-100'}`}
              >
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/Esewa_logo.png" alt="eSewa" className="h-8 mb-1 object-contain" />
                <span className="text-xs font-bold text-[#60bb46]">eSewa</span>
              </button>

              <button 
                onClick={() => setPaymentMethod('khalti')}
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${paymentMethod === 'khalti' ? 'border-[#5c2d91] bg-[#5c2d91]/5' : 'border-slate-100'}`}
              >
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/Khalti_logo.png" alt="Khalti" className="h-8 mb-1 object-contain" />
                <span className="text-xs font-bold text-[#5c2d91]">Khalti</span>
              </button>

              <button 
                onClick={() => setPaymentMethod('cod')}
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${paymentMethod === 'cod' ? 'border-slate-800 bg-slate-50' : 'border-slate-100'}`}
              >
                <Coins className="h-8 mb-1 text-slate-700" />
                <span className="text-xs font-bold text-slate-700">Cash on Delivery</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50">Cancel</button>
              <button className="flex-[2] py-4 bg-[#8cc63f] text-white rounded-xl font-bold hover:bg-[#7ab335] shadow-lg shadow-[#8cc63f]/20 transition-all">
                Confirm Order: Rs. {totalAmount.toLocaleString()}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h3>
          
          <div className="max-h-[300px] overflow-y-auto space-y-4 mb-6 pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-start text-sm">
                <div className="flex gap-3">
                  <div className="h-12 w-12 rounded-lg bg-slate-50 border overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <span className="text-slate-700 font-medium block leading-tight">{item.name}</span>
                    <span className="text-slate-400 text-xs">Qty: {item.quantity || 1}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-800">Rs.{item.price}</span>
                  <Trash2 
                    size={16} 
                    className="text-slate-300 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-bold text-slate-700">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Delivery</span>
              <span className="font-bold text-slate-700">Rs. {deliveryCharge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">VAT (13%)</span>
              <span className="font-bold text-slate-700">Rs. {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-4 text-base">
              <span className="font-bold text-slate-800">Grand Total</span>
              <span className="font-extrabold text-[#8cc63f] text-xl">Rs. {totalAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Coupon" className="w-full pl-10 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none" />
            </div>
            <button className="px-4 py-3 bg-slate-800 text-white rounded-xl font-bold text-xs hover:bg-slate-700">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
import React, { useState } from 'react';
import {
  Truck, ShoppingBag, ChevronLeft, Trash2, Ticket, Coins, User, Mail, MapPin, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const CheckoutPage = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('esewa');

  // New State for Customer Details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const { cart, removeFromCart, getTotalAmount } = useCartStore();

  const subtotal = getTotalAmount();
  const deliveryCharge = deliveryMethod === 'delivery' ? 150 : 0;
  const tax = subtotal * 0.13;
  const totalAmount = subtotal + deliveryCharge + tax;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const alertHandling = () =>{
    alert("This Site is stil under development phase")
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Delivery, Information & Payment */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <Link to="/" className="flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors">
              <ChevronLeft size={20} />
              <span className="ml-1 font-medium">Back to Shopping</span>
            </Link>

            {/* 1. Delivery Options */}
            <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">1. Delivery Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'delivery' ? 'border-[#8cc63f] bg-[#8cc63f]/5' : 'border-slate-100'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" checked={deliveryMethod === 'delivery'} onChange={() => setDeliveryMethod('delivery')} className="w-4 h-4 accent-[#8cc63f]" />
                  <Truck size={20} className={deliveryMethod === 'delivery' ? 'text-[#8cc63f]' : 'text-slate-400'} />
                  <span className="font-semibold text-slate-700 text-sm">Home Delivery</span>
                </div>
                <span className="font-bold text-slate-600 text-sm">Rs. 150</span>
              </label>

              <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'pickup' ? 'border-[#8cc63f] bg-[#8cc63f]/5' : 'border-slate-100'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" checked={deliveryMethod === 'pickup'} onChange={() => setDeliveryMethod('pickup')} className="w-4 h-4 accent-[#8cc63f]" />
                  <ShoppingBag size={20} className={deliveryMethod === 'pickup' ? 'text-[#8cc63f]' : 'text-slate-400'} />
                  <span className="font-semibold text-slate-700 text-sm">Store Pickup</span>
                </div>
                <span className="font-bold text-slate-600 text-sm">Free</span>
              </label>
            </div>

            {/* 2. Customer Information Form */}
            <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">2. Shipping Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text" name="fullName" placeholder="Full Name"
                  onChange={handleInput}
                  className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8cc63f] outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email" name="email" placeholder="Email Address"
                  onChange={handleInput}
                  className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8cc63f] outline-none"
                />
              </div>
              <div className="relative md:col-span-2">
                <MapPin className="absolute left-3 top-3 text-slate-400" size={18} />
                <textarea
                  name="address" placeholder="Full Delivery Address (Street, House No.)"
                  onChange={handleInput}
                  className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8cc63f] outline-none h-20 resize-none"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="tel" name="phone" placeholder="Phone Number"
                  onChange={handleInput}
                  className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8cc63f] outline-none"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text" name="city" placeholder="City"
                  onChange={handleInput}
                  className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8cc63f] outline-none"
                />
              </div>
            </div>

            {/* 3. Payment Method */}
            <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wider">3. Payment Method</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setPaymentMethod('esewa')}
                className={`flex flex-col items-center justify-center p-2 h-20 border-2 rounded-xl transition-all ${paymentMethod === 'esewa' ? 'border-[#60bb46] bg-[#60bb46]/5' : 'border-slate-100'}`}
              >
                <img src="./esewa_logo.png" alt="eSewa" className="h-8 object-contain" />
              </button>

              <button
                onClick={() => setPaymentMethod('khalti')}
                className={`flex flex-col items-center justify-center p-2 border-2 h-20 rounded-xl transition-all ${paymentMethod === 'khalti' ? 'border-[#5c2d91] bg-[#5c2d91]/5' : 'border-slate-100'}`}
              >
                <img src="./khalti_logo.png" alt="Khalti" className="h-8 object-contain" />
              </button>

              <button
                onClick={() => setPaymentMethod('cod')}
                className={`flex flex-col items-center justify-center p-2 border-2 rounded-xl transition-all ${paymentMethod === 'cod' ? 'border-slate-800 bg-slate-50' : 'border-slate-100'}`}
              >
                <Coins className="h-6 mb-1 text-slate-700" />
                <span className="text-[10px] font-bold text-slate-700 uppercase">Cash On Delivery</span>
              </button>
            </div>

            {/* Final Actions */}
            <div className="flex flex-col md:flex-row gap-4 mt-10">
              <button className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                Cancel
              </button>
              <button 
              onClick={alertHandling}
              className="flex-[2] cursor-pointer py-4 bg-[#8cc63f] text-white rounded-xl font-bold hover:bg-[#7ab335] shadow-lg shadow-[#8cc63f]/20 transition-all active:scale-[0.98]">
                Confirm Order: Rs. {totalAmount.toLocaleString()}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary (Kept your existing logic) */}
        {/* Right Column: Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-8 border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h3>

          {/* Scrollable Item List */}
          <div className="max-h-[300px] overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-sm">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <span className="text-slate-700 font-medium block leading-tight">{item.name}</span>
                      <span className="text-slate-400 text-xs">Qty: {item.quantity || 1}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-800">Rs. {(item.price * (item.quantity || 1)).toLocaleString()}</span>
                    <Trash2
                      size={16}
                      className="text-slate-300 cursor-pointer hover:text-red-500 transition-colors"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-center py-4">Your cart is empty</p>
            )}
          </div>

          {/* Price Calculations */}
          <div className="border-t border-slate-100 pt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-bold text-slate-700">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Delivery Charge</span>
              <span className="font-bold text-slate-700">
                {deliveryCharge > 0 ? `Rs. ${deliveryCharge}` : 'Free'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">VAT (13%)</span>
              <span className="font-bold text-slate-700">Rs. {tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between border-t border-slate-100 pt-4 text-base">
              <span className="font-bold text-slate-800">Grand Total</span>
              <span className="font-extrabold text-[#8cc63f] text-xl">
                Rs. {totalAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Coupon Code Section */}
          <div className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full pl-10 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#8cc63f] transition-all"
              />
            </div>
            <button className="px-4 py-3 bg-slate-800 text-white rounded-xl font-bold text-xs hover:bg-slate-700 transition-colors">
              Apply
            </button>
          </div>

          <p className="text-[10px] text-slate-400 mt-4 text-center">
            By clicking confirm, you agree to our Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
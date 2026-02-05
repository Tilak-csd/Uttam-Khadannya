import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown, PhoneCall, Plus, Minus } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Mobile/Tablet Accordion States
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);

  const cartCount = useCartStore((state) => state.cart.length);
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);

  const categoryList = ['Fresh Meat', 'Vegetables', 'Fruit & Nut Gifts', 'Fresh Berries', 'Ocean Foods'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: Logo, Search (Responsive), Icons */}
        <div className="flex justify-between items-center h-20 gap-4">
          
          {/* Logo */}
          <Link to='/' className="flex-shrink-0">
            <img src="./logo.png" alt="Logo" className='w-16 md:w-20' />
          </Link>

          {/* Search Bar: Hidden on Mobile, Condensed on Tablet, Wide on Desktop */}
          <div className="hidden sm:flex flex-1 justify-center max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 py-2 pl-10 pr-4 rounded-lg transition-all text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 md:space-x-5">
            <button className="hidden sm:block text-gray-600 hover:text-green-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="hidden sm:block text-gray-600 hover:text-green-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            
            {/* Cart Button */}
            <button onClick={toggleDrawer} className="relative text-gray-600 hover:text-green-600 p-2">
              <ShoppingCart className="h-6 w-6 md:h-7 md:w-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile/Tablet Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 p-2">
              {isOpen ? <X size={28} className="text-green-600" /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Desktop Navigation (Hidden below 768px) */}
        <div className="hidden md:flex items-center justify-between border-t border-gray-100 h-14">
          <div className="flex items-center space-x-6 lg:space-x-10 h-full">
            
            {/* Categories Dropdown (Desktop Hover) */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors cursor-pointer">
                <Menu size={18} /> All Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2 text-gray-700 text-sm">
                  {categoryList.map(cat => (
                    <li key={cat} className="px-6 py-3 hover:bg-green-50 hover:text-green-600 border-b border-gray-50 last:border-0 cursor-pointer">{cat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Links */}
            <div className="flex items-center space-x-6 lg:space-x-8 text-[13px] lg:text-sm font-bold text-gray-900 h-full">
              <Link to="/" className="hover:text-green-600 uppercase">Home</Link>
              
              {/* Shop Mega Menu (Desktop Hover) */}
              <div className="relative group h-full flex items-center">
                <div className="flex items-center gap-1 cursor-pointer uppercase hover:text-green-600">
                  Shop <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </div>
                {/* Mega Panel */}
                <div className="absolute top-full left-[-50px] lg:left-[-100px] w-[500px] lg:w-[600px] bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6 grid grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-green-600 font-bold mb-3 text-xs tracking-widest uppercase">Groceries</h3>
                    <ul className="space-y-2 text-gray-600 font-normal text-sm">
                      <li className="hover:text-green-600 cursor-pointer">Organic Food</li>
                      <li className="hover:text-green-600 cursor-pointer">Dairy Products</li>
                      <li className="hover:text-green-600 cursor-pointer">Bakery Items</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-green-600 font-bold mb-3 text-xs tracking-widest uppercase">Fresh Deals</h3>
                    <ul className="space-y-2 text-gray-600 font-normal text-sm">
                      <li className="hover:text-green-600 cursor-pointer">Flash Sale</li>
                      <li className="hover:text-green-600 cursor-pointer">Seasonal Fruit</li>
                      <li className="hover:text-green-600 cursor-pointer">Frozen Foods</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 flex flex-col justify-center items-center text-center">
                    <span className="text-[10px] font-bold text-green-700 bg-white px-2 py-0.5 rounded-full mb-2">HOT</span>
                    <p className="text-gray-800 font-bold text-xs uppercase">20% Off Order</p>
                    <button className="mt-2 bg-green-600 text-white text-[10px] px-3 py-1.5 rounded-full hover:bg-green-700">Go</button>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="hover:text-green-600 uppercase">About</Link>
              <Link to="/blog" className="hover:text-green-600 uppercase">Blog</Link>
            </div>
          </div>

          {/* Hotline: Only visible on Desktop (lg and up) to avoid crowding tablets */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-700"><PhoneCall size={18} /></div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-sm">+977-9700004569</span>
              <span className="text-gray-400 text-[10px]">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET DRAWER (Slides from left) */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        <div className={`relative w-72 sm:w-80 h-full bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 overflow-y-auto h-full">
            <div className="flex justify-between items-center mb-6">
              <img src="./logo.png" alt="Logo" className='w-14' />
              <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
            </div>

            {/* Drawer Links */}
            <div className="flex flex-col space-y-1 font-bold text-gray-800">
              <Link to="/" className="py-3 border-b border-gray-50">HOME</Link>

              {/* Mobile Categories Accordion */}
              <div className="border-b border-gray-50">
                <button onClick={() => setMobileCatsOpen(!mobileCatsOpen)} className="flex items-center justify-between w-full py-4 text-green-700">
                  ALL CATEGORIES {mobileCatsOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {mobileCatsOpen && (
                  <div className="pb-4 pl-4 space-y-3 font-medium text-gray-500 text-sm animate-in slide-in-from-top-2">
                    {categoryList.map(cat => <div key={cat} className="hover:text-green-600">{cat}</div>)}
                  </div>
                )}
              </div>

              {/* Mobile Shop Accordion */}
              <div className="border-b border-gray-50">
                <button onClick={() => setMobileShopOpen(!mobileShopOpen)} className="flex items-center justify-between w-full py-4">
                  SHOP {mobileShopOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {mobileShopOpen && (
                  <div className="pb-4 pl-4 space-y-4 font-medium text-gray-500 text-sm animate-in slide-in-from-top-2">
                    <div>
                      <h4 className="text-green-600 text-[10px] font-black mb-2 tracking-tighter">GROCERIES</h4>
                      <div className="pl-2 space-y-2">
                        <div>Organic Food</div>
                        <div>Dairy Products</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-green-600 text-[10px] font-black mb-2 tracking-tighter">FRESH DEALS</h4>
                      <div className="pl-2 space-y-2">
                        <div>Daily Sale</div>
                        <div>Seasonal</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="py-3 border-b border-gray-50">ABOUT US</Link>
              
              <div className="pt-6 space-y-4">
                <Link to="/wishlist" className="flex items-center gap-3 text-gray-600 font-medium"><Heart size={18} /> Wishlist</Link>
                <Link to="/account" className="flex items-center gap-3 text-gray-600 font-medium"><User size={18} /> My Account</Link>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-xl">
                <div className="flex items-center gap-3 mb-1 text-green-700">
                  <PhoneCall size={18} />
                  <span className="text-xs font-black uppercase">Support 24/7</span>
                </div>
                <p className="text-sm font-bold text-gray-900">+977-9700004569</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
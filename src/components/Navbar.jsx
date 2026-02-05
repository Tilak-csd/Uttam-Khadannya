import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown, PhoneCall, Plus, Minus } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // States for Mobile Dropdowns
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);

  const cartCount = useCartStore((state) => state.cart.length);
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);

  const categoryList = ['Fresh Meat', 'Vegetables', 'Fruit & Nut Gifts', 'Fresh Berries', 'Ocean Foods'];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW: Logo, Search, Icons */}
        <div className="flex justify-between items-center h-20">
          <Link to='/' className="cursor-pointer flex-shrink-0 flex items-center">
            <img src="./logo.png" alt="Logo" className='w-20' />
          </Link>

          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-green-500 py-2 pl-10 pr-4 rounded-lg transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 cursor-pointer hover:text-green-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 cursor-pointer hover:text-green-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button onClick={toggleDrawer} className="relative text-gray-600 cursor-pointer hover:text-green-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleDrawer} className="relative text-gray-600">
              <ShoppingCart className="h-7 w-7" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{cartCount}</span>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 outline-none">
              {isOpen ? <X className="h-8 w-8 text-green-600" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* DESKTOP BOTTOM ROW */}
        <div className="hidden md:flex items-center justify-between py-0 border-t border-gray-100">
          <div className="flex items-center space-x-8">
            {/* Desktop Categories Dropdown */}
            <div className="relative group">
              <button className="group relative cursor-pointer flex items-center gap-1 text-green-700 font-bold py-4">
                <Menu size={18} /> All Categories <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-gray-700">
                  {categoryList.map(cat => (
                    <li key={cat} className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 border-b border-gray-50 cursor-pointer">{cat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="flex items-center space-x-8 text-sm font-bold tracking-wide text-gray-900">
              <Link to="/" className="hover:text-green-600 uppercase">Home</Link>
              
              {/* Desktop Shop Mega Menu */}
              <div className="relative group py-4">
                <div className="flex items-center gap-1 cursor-pointer uppercase text-green-600 border-b-2 border-green-600 pb-1">
                  Shop <ChevronDown size={14} />
                </div>
                <div className="absolute top-full left-[-100px] w-[600px] bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6 grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-green-600 font-bold mb-4 uppercase">Groceries</h3>
                    <ul className="space-y-2 text-gray-600 font-normal">
                      <li className="hover:text-green-600 cursor-pointer">Organic Food</li>
                      <li className="hover:text-green-600 cursor-pointer">Dairy Products</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-green-600 font-bold mb-4 uppercase">Fresh Deals</h3>
                    <ul className="space-y-2 text-gray-600 font-normal">
                      <li className="hover:text-green-600 cursor-pointer">Daily Flash Sale</li>
                      <li className="hover:text-green-600 cursor-pointer">Seasonal Fruit</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 flex flex-col justify-center items-center">
                    <p className="text-gray-800 font-bold text-sm">20% Off Promo</p>
                    <button className="mt-3 bg-green-600 text-white text-xs px-4 py-2 rounded-full">Shop Now</button>
                  </div>
                </div>
              </div>
              <Link to="/about" className="hover:text-green-600 uppercase">About Us</Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-gray-100 p-2.5 rounded-full text-gray-900"><PhoneCall size={18} /></div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-md leading-tight">+977-9700004569</span>
              <span className="text-gray-400 text-[10px]">support 24/7 time</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`md:hidden fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        <div className="relative w-80 h-full bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <img src="./logo.png" alt="Logo" className='w-16' />
              <button onClick={() => setIsOpen(false)}><X size={24} /></button>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-6">
              <input type="text" placeholder="Search..." className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg" />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-col space-y-2 font-bold text-gray-800">
              <Link to="/" className="py-2 border-b border-gray-50 hover:text-green-600">HOME</Link>

              {/* Mobile All Categories Accordion */}
              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setMobileCatsOpen(!mobileCatsOpen)}
                  className="flex items-center justify-between w-full py-3 text-green-700"
                >
                  ALL CATEGORIES {mobileCatsOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {mobileCatsOpen && (
                  <ul className="bg-gray-50 pl-4 py-2 space-y-3 font-medium text-gray-600">
                    {categoryList.map(cat => (
                      <li key={cat} className="hover:text-green-600">{cat}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mobile Shop Accordion */}
              <div className="border-b border-gray-50">
                <button 
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="flex items-center justify-between w-full py-3"
                >
                  SHOP {mobileShopOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {mobileShopOpen && (
                  <div className="bg-gray-50 pl-4 py-3 space-y-4">
                    <div>
                      <h4 className="text-green-600 text-xs mb-2">GROCERIES</h4>
                      <ul className="pl-2 space-y-2 font-medium text-gray-600 text-sm">
                        <li>Organic Food</li>
                        <li>Dairy Products</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-600 text-xs mb-2">FRESH DEALS</h4>
                      <ul className="pl-2 space-y-2 font-medium text-gray-600 text-sm">
                        <li>Flash Sale</li>
                        <li>Seasonal Fruit</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="py-3 border-b border-gray-50 hover:text-green-600 uppercase">About Us</Link>
              
              {/* Mobile Bottom Links */}
              <div className="pt-6 space-y-4 font-medium text-gray-600">
                <Link to="/wishlist" className="flex items-center gap-3"><Heart size={20} /> Wishlist</Link>
                <Link to="/account" className="flex items-center gap-3"><User size={20} /> My Account</Link>
              </div>

              {/* Mobile Hotline */}
              <div className="mt-8 p-4 bg-green-50 rounded-xl flex items-center gap-4">
                <PhoneCall className="text-green-600" size={24} />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Support 24/7</p>
                  <p className="text-sm font-bold text-gray-900">+977-9700004569</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
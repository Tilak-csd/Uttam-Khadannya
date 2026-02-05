import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown, PhoneCall, Zap, Percent } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);

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
            <button
              onClick={toggleDrawer}
              className="relative text-gray-600 cursor-pointer hover:text-green-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleDrawer} className="relative text-gray-600">
              <ShoppingCart className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Category Bar */}
        <div className="hidden md:flex items-center justify-between py-0 border-t border-gray-100">
          <div className="flex items-center space-x-8">

            {/* Green All Departments Button */}
            <div className="relative group">
              <button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-6 py-4 flex items-center gap-4 font-bold transition-colors cursor-pointer min-w-[250px]">
                <Menu size={20} />
                ALL DEPARTMENTS
              </button>

              {/* Dropdown Menu (Appears on Hover) */}
              <div className="absolute top-full left-0 w-full bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-gray-700">
                  <li className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 border-b border-gray-50 cursor-pointer">Fresh Meat</li>
                  <li className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 border-b border-gray-50 cursor-pointer">Vegetables</li>
                  <li className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 border-b border-gray-50 cursor-pointer">Fruit & Nut Gifts</li>
                  <li className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 border-b border-gray-50 cursor-pointer">Fresh Berries</li>
                  <li className="px-6 py-3 hover:bg-gray-50 hover:text-green-600 cursor-pointer">Ocean Foods</li>
                </ul>
              </div>
            </div>

            {/* Main Navigation Links */}
            <div className="flex items-center space-x-8 text-sm font-bold tracking-wide text-gray-900">
              <Link to="/" className="hover:text-green-600 uppercase">Home</Link>
              <div className="relative group flex items-center gap-1 hover:text-green-600 cursor-pointer uppercase text-green-600 border-b-2 border-green-600 pb-1 mt-1">
                Shop <ChevronDown size={14} />
              </div>
              <div className="relative group flex items-center gap-1 hover:text-green-600 cursor-pointer uppercase">
                Blog <ChevronDown size={14} />
              </div>
              <div className="relative group flex items-center gap-1 hover:text-green-600 cursor-pointer uppercase">
                Pages <ChevronDown size={14} />
              </div>
              <Link to="/about" className="hover:text-green-600 uppercase">About</Link>
            </div>
          </div>

          {/* Hotline Section */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full text-gray-900">
              <PhoneCall size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-black font-bold text-lg">HOTLINE (42) 500-88-88</span>
              <span className="text-gray-400 text-xs">support 24/7 time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-inner">
          {/* Search inside mobile menu */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col space-y-4 font-medium text-gray-700">
            <Link to="/wishlist" className="hover:text-green-600 flex items-center gap-2"><Heart size={20} /> Wishlist</Link>
            <Link to="/account" className="hover:text-green-600 flex items-center gap-2"><User size={20} /> My Account</Link>
            <hr className="border-gray-100" />
            <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">Shop</p>
            <Link to="/categories" className="hover:text-green-600">All Categories</Link>
            <Link to="/deals" className="hover:text-green-600">Exclusive Deals</Link>
            <Link to="/orders" className="hover:text-green-600">My Orders</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useCartStore((state) => state.cart.length);
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="./logo.png" alt="Logo" className='w-20' />
          </div>

          {/* Desktop Search Bar (Hidden on Mobile) */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 py-2 pl-10 pr-4 rounded-lg transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Icons (Hidden on Mobile) */}
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

          {/* Mobile Right Section (Cart + Menu) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* NEW: Mobile Cart Button */}
            <button
            onClick={toggleDrawer}
             className="relative text-gray-600 cursor-pointer">
              <ShoppingCart className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span> 
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 cursor-pointer">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-inner">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col space-y-4 font-medium text-gray-700">
            <a href="#" className="hover:text-green-600 flex items-center gap-2"><Heart size={20}/> Wishlist</a>
            <a href="#" className="hover:text-green-600 flex items-center gap-2"><User size={20}/> My Account</a>
            <hr className="border-gray-100" />
            <a href="#" className="hover:text-green-600">Categories</a>
            <a href="#" className="hover:text-green-600">Deals</a>
            <a href="#" className="hover:text-green-600">My Orders</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
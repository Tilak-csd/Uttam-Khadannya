import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, RefreshCw, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { productItems } from '../data/products';
// 1. Import your Zustand store
import useCartStore from '../store/useCartStore';

const ProductGrid = () => {
    // 2. Extract the addToCart function from the store
    const addToCart = useCartStore((state) => state.addToCart);

    // 1. Create a reference for the top of the grid section
    const scrollTargetRef = useRef(null);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(productItems.length / itemsPerPage);

    // 2. Scroll to the reference whenever currentPage changes
    useEffect(() => {
        if (scrollTargetRef.current) {
            scrollTargetRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section ref={scrollTargetRef} className="max-w-7xl mx-auto px-4 py-16">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <p className="italic text-[#8cc63f] font-serif text-xl">See Our Latest</p>
                <h2 className="text-6xl font-bold font-serif text-gray-900 tracking-tight mt-1">NEW ARRIVALS</h2>
                <div className="flex justify-center mt-4 opacity-40">
                    <div className="h-px w-24 bg-gray-300"></div>
                    <span className="mx-2 text-[#8cc63f]">🌿</span>
                    <div className="h-px w-24 bg-gray-300"></div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentItems.map((product) => (
                    <div key={product.id} className="group relative border border-gray-100 rounded-xl hover:shadow-xl pb-6 transition-shadow duration-300 bg-white">
                        {product.isSale && (
                            <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-4 rounded-full shadow-md">
                                Sale
                            </span>
                        )}

                        <div className="relative aspect-square overflow-hidden rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            />

                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#8cc63f] hover:text-white transition-colors cursor-pointer"><Search size={18} /></button>
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#8cc63f] hover:text-white transition-colors cursor-pointer"><Heart size={18} /></button>
                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#8cc63f] hover:text-white transition-colors cursor-pointer"><RefreshCw size={18} /></button>

                                {/* 3. Add to cart on ShoppingBag click */}
                                <button
                                    onClick={() => addToCart(product)}
                                    className="p-2 bg-white rounded-full shadow-md hover:bg-[#8cc63f] hover:text-white transition-colors cursor-pointer"
                                >
                                    <ShoppingBag size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="text-center flex flex-col justify-center items-center gap-1">
                            <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>

                            {/* 4. Add to cart on "Shop" text click
                            <p
                                onClick={() => addToCart(product)}
                                className="text-gray-400 text-sm mb-2 hover:text-[#8cc63f] cursor-pointer transition-colors"
                            >
                                Shop
                            </p> */}

                            <div className="flex justify-center items-center gap-2">
                                {product.originalPrice && (
                                    <span className="text-gray-300 line-through text-sm font-medium">Rs.{product.originalPrice}</span>
                                )}
                                <span className="text-[#8cc63f] font-bold">Rs. {product.price}</span>
                            </div>
                            
                            {/* Stylish Add to Cart Button */}
                            <button
                                onClick={() => addToCart(product)}
                                className="w-[80%] cursor-pointer flex items-center justify-center gap-2 bg-[#8cc63f] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-600 transition-all duration-300 shadow-sm active:scale-95"
                            >
                                <ShoppingBag size={16} />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-full border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === index + 1
                                    ? 'bg-[#8cc63f] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-full border border-gray-200 disabled:opacity-30 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProductGrid;
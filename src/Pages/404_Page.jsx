import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="text-center">
        {/* Visual Element */}
        <div className="relative inline-block mb-8">
          <div className="text-[12rem] font-black text-slate-200 select-none">404</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AlertCircle size={80} className="text-[#8cc63f] animate-bounce" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#8cc63f] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7ab335] transition-all shadow-lg shadow-[#8cc63f]/20"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
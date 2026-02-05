import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, RefreshCcw, Home } from 'lucide-react';

const PaymentFailure = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <XCircle size={60} className="text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-2">Payment Failed</h1>
        <p className="text-slate-500 mb-8">
          Something went wrong with your transaction. Please try again or choose a different payment method.
        </p>

        <div className="space-y-3">
          <Link 
            to="/checkout" 
            className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all"
          >
            <RefreshCcw size={18} /> Try Again
          </Link>
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full py-4 border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-all"
          >
            <Home size={18} /> Back to Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          If your amount was deducted, it will be refunded within 3-5 business days.
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
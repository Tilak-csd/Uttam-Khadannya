import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [details, setDetails] = useState(null);
  const dataParam = searchParams.get('data');

  useEffect(() => {
    if (dataParam) {
      try {
        // Decode eSewa Base64 response
        const decodedData = atob(dataParam);
        const parsedData = JSON.parse(decodedData);
        setDetails(parsedData);
      } catch (error) {
        console.error("Error decoding eSewa data:", error);
      }
    }
  }, [dataParam]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-100">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle size={60} className="text-[#8cc63f]" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-2">Payment Successful!</h1>
        <p className="text-slate-500 mb-8">Thank you for your purchase. Your order is being processed.</p>

        {details && (
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Transaction ID</span>
              <span className="font-bold text-slate-700">{details.transaction_uuid}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">eSewa Ref ID</span>
              <span className="font-bold text-slate-700">{details.transaction_code}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-slate-200 pt-3">
              <span className="text-slate-800 font-semibold">Amount Paid</span>
              <span className="font-bold text-[#8cc63f]">Rs. {details.total_amount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">
                {details.status}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#8cc63f] text-white rounded-xl font-bold hover:bg-[#7ab335] transition-all"
          >
            Continue Shopping <ArrowRight size={18} />
          </Link>
          <button className="flex items-center justify-center gap-2 w-full py-4 text-slate-600 font-semibold hover:bg-slate-50 rounded-xl transition-all">
            <Download size={18} /> Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
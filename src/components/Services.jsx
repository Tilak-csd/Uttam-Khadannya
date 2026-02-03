import React from 'react';
import { Truck, RotateCcw, Headphones, ShieldCheck } from 'lucide-react';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Free Shipping",
      desc: "On all orders over Rs. 100.00"
    },
    { 
      icon: <RotateCcw className="w-10 h-10" />,
      title: "Free Returns",
      desc: "Returns are free within 9 days"
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Support 24/7",
      desc: "Contact us 24 hours a day"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "100% Payment Secure",
      desc: "Your payment are safe with us."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#8cc63f] rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 text-white">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
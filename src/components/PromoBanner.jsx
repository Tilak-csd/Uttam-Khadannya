const banners = [
  {
    title: "Orange Juice Natural",
    color: "bg-[#FFB800]", // Bright orange
    img: "your-juice-bottle-url",
    textColor: "text-white"
  },
  {
    title: "Amla Candy & Murabba",
    color: "bg-[#8BC34A]", // Vibrant green
    img: "your-amla-jar-url",
    textColor: "text-white"
  },
  {
    title: "Jam Maj Spring Sale",
    color: "bg-[#FF4081]", // Pink/Magenta
    img: "your-jam-jar-url",
    textColor: "text-white"
  }
];

export const PromoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {banners.map((item, idx) => (
        <div 
          key={idx} 
          className={`${item.color} rounded-lg p-8 relative overflow-hidden h-[250px] flex flex-col justify-center group cursor-pointer`}
        >
          <div className="relative z-10 w-2/3">
            <h3 className={`text-3xl font-bold leading-tight mb-4 ${item.textColor}`}>
              {item.title}
            </h3>
            <button className="text-white font-bold text-sm underline underline-offset-4 decoration-2 hover:text-black transition-colors">
              SHOP NOW
            </button>
          </div>
          
          {/* Background decoration (the wavy shapes in your image) */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" className="scale-150"><path fill="currentColor" d="M40,-62C53,-55,67,-46,75,-33C83,-20,85,-3,81,13C77,29,67,44,53,55C39,66,22,73,5,72C-12,71,-29,62,-44,51C-59,40,-72,27,-77,11C-82,-5,-79,-24,-69,-37C-59,-50,-42,-57,-28,-63C-14,-69,0,-74,14,-72C28,-70,42,-60,40,-62Z" transform="translate(100 100)" /></svg>
          </div>

          {/* Product Image */}
          <img 
            src={item.img} 
            className="absolute -right-4 bottom-4 w-40 object-contain group-hover:scale-110 transition-transform duration-500"
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};
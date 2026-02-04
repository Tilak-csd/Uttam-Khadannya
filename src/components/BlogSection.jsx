import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      category: "Culinary Tips",
      title: "The Secret to Toasting Whole Spices",
      excerpt: "Unlock deeper aromas and complex flavors by mastering the art of dry-roasting your peppercorns and cumin.",
      author: "Chef Marco",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      category: "Health",
      title: "5 Spices That Boost Your Immune System",
      excerpt: "From Turmeric to Ginger, discover how these kitchen staples do more than just add flavor to your meals.",
      author: "Sarah Jenks",
      date: "Oct 10, 2025",
      image: "https://immusehealth.com/storage/app/media/news/blog/immune-system-boosters-natural-herbs-and-spices.jpg",
    },
    {
      id: 3,
      category: "Recipes",
      title: "Authentic Homemade Garam Masala",
      excerpt: "Stop buying pre-mixed powders. Create your own signature blend with our step-by-step guide.",
      author: "Amara Singh",
      date: "Oct 08, 2025",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const developmentProcess = ()=>{
    alert("This site is still Under Development Phase.")
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">Our Journal</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Spices, Stories & <span className="text-green-600">Secrets</span>
            </h3>
          </div>
          <button
          onClick={developmentProcess}
          className="flex items-center gap-2 text-gray-900 font-bold hover:text-green-600 transition-colors group">
            View All Posts 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase text-green-700">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4 hover:text-green-600 cursor-pointer transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                onClick={developmentProcess}
                className="mt-auto text-sm font-bold text-green-600 hover:text-green-700 flex items-center gap-1 transition-colors">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
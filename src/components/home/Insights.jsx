import { ArrowRight } from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      badge: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      title: "AI in Material Science: Q4 Workshop",
      desc: "Join our upcoming expert-led workshop on the integration of neural networks in modern..."
    },
    {
      badge: "Funding",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
      title: "New Research Grants for 2025",
      desc: "Exploring new funding opportunities for collaborative international environmental..."
    },
    {
      badge: "Call for Papers",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      title: "Special Issue: Advanced Sensors",
      desc: "Submission deadline extended for the special issue on Smart Sensing Technologies in..."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              Latest Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Stay updated with research trends and opportunities.
            </p>
          </div>

          <a href="#" className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#0052CC] transition-colors mt-4 sm:mt-0">
            <span>View All News</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              
              {/* Image Container with White Pill Badge Overlay */}
              <div className="h-56 sm:h-60 rounded-3xl overflow-hidden relative shadow-sm">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* White Category Pill Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-slate-900 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-sm">
                    {art.badge}
                  </span>
                </div>
              </div>

              {/* Text Below Image */}
              <div className="pt-5">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 leading-snug group-hover:text-[#0052CC] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {art.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Star } from 'lucide-react';

export default function Voices() {
  const testimonials = [
    {
      name: "Prof. Julian Vane",
      org: "Oxford University",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      quote: "The depth of precision Lumina brings to experimental design is unparalleled. They don't just provide data; they provide clarity."
    },
    {
      name: "Sarah Chen",
      org: "CTO, NexaSystems",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      quote: "Integrating Lumina's research into our product pipeline shortened our R&D cycle by eighteen months. A vital strategic partner."
    },
    {
      name: "Marcus Thorne",
      org: "Dept. of Applied Ethics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Lumina stands at the rare intersection of rigorous science and uncompromising ethics. Their collaborative spirit is refreshing."
    }
  ];

  return (
    <section className="py-24 bg-[#F0F6FE] border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight whitespace-nowrap">
            Voices of Innovation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Experience shared by our partners in the field, academia, and the boardroom.
          </p>
        </div>

        {/* 3 Partner Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-100/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                {/* Avatar & Partner Info */}
                <div className="flex items-center space-x-3.5 mb-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover shadow-sm border border-slate-200"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs font-medium text-[#7C98CA]">{item.org}</p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* 5 Coral-Orange Star Icons */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

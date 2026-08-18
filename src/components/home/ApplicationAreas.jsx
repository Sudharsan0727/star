import ScrollReveal from '../common/ScrollReveal';

export default function ApplicationAreas() {
  const areas = [
    {
      title: "Energy",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Environmental",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sensors",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Advanced Devices",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="application-areas" className="py-24 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-lg mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Application Areas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Our consultancy spans critical sectors where scientific breakthroughs drive global transformation.
          </p>
        </ScrollReveal>

        {/* 5 Vertical Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
          {areas.map((area, idx) => (
            <ScrollReveal
              key={idx}
              animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
              delay={idx * 100}
              className="h-[360px] sm:h-[380px] rounded-3xl relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={area.imageUrl}
                alt={area.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Dark Gradient Overlay & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6">
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  {area.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}


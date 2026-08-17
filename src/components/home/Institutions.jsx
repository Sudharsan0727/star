import { Landmark, FlaskConical, Compass, Cpu, Microscope } from 'lucide-react';

export default function Institutions() {
  const logos = [
    { icon: <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-[#64748B] stroke-[2.2]" />, name: "MIT" },
    { icon: <FlaskConical className="w-7 h-7 sm:w-8 sm:h-8 text-[#64748B] stroke-[2.2]" />, name: "CERN" },
    { icon: <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#64748B] stroke-[2.2]" />, name: "ETH ZURICH" },
    { icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-[#64748B] stroke-[2.2]" />, name: "NVIDIA" },
    { icon: <Microscope className="w-7 h-7 sm:w-8 sm:h-8 text-[#64748B] stroke-[2.2]" />, name: "MAX PLANCK" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Title */}
        <div className="text-xs sm:text-sm font-bold text-[#94A3B8] uppercase tracking-[0.25em] mb-12">
          SUCCESSFUL CLIENTS
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-16">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center space-x-3.5 text-[#64748B] hover:text-slate-900 transition-colors">
              {logo.icon}
              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-wider">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

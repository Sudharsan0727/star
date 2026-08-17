export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 animated-constellation-pattern overflow-hidden text-center">
      
      {/* Constellation Overlay Line Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Left Constellation Pattern Overlay */}
        <svg
          className="absolute top-0 left-0 w-1/3 h-full opacity-60"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="50" y1="80" x2="120" y2="150" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="120" y1="150" x2="200" y2="100" stroke="#93C5FD" strokeWidth="1" />
          <line x1="200" y1="100" x2="280" y2="200" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="120" y1="150" x2="60" y2="300" stroke="#93C5FD" strokeWidth="1" />
          <line x1="60" y1="300" x2="150" y2="380" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="150" y1="380" x2="240" y2="320" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="60" y1="300" x2="80" y2="480" stroke="#93C5FD" strokeWidth="1" />
          <line x1="80" y1="480" x2="180" y2="520" stroke="#60A5FA" strokeWidth="1.2" />

          {/* Glowing Pattern Nodes */}
          <circle cx="50" cy="80" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="120" cy="150" r="4.5" fill="#2563EB" />
          <circle cx="200" cy="100" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="280" cy="200" r="4.5" fill="#1D4ED8" />
          <circle cx="60" cy="300" r="3.5" fill="#2563EB" className="animate-pattern-pulse" />
          <circle cx="150" cy="380" r="4.5" fill="#1D4ED8" />
          <circle cx="240" cy="320" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="80" cy="480" r="4" fill="#2563EB" />
          <circle cx="180" cy="520" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
        </svg>

        {/* Right Constellation Pattern Overlay */}
        <svg
          className="absolute top-0 right-0 w-1/3 h-full opacity-60"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="350" y1="60" x2="280" y2="120" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="280" y1="120" x2="220" y2="40" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="280" y1="120" x2="300" y2="220" stroke="#93C5FD" strokeWidth="1" />
          <line x1="300" y1="220" x2="360" y2="310" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="300" y1="220" x2="210" y2="280" stroke="#93C5FD" strokeWidth="1" />
          <line x1="210" y1="280" x2="260" y2="420" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="260" y1="420" x2="350" y2="480" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />

          {/* Glowing Pattern Nodes */}
          <circle cx="350" cy="60" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="280" cy="120" r="4.5" fill="#2563EB" />
          <circle cx="220" cy="40" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="300" cy="220" r="4.5" fill="#1D4ED8" />
          <circle cx="360" cy="310" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="210" cy="280" r="4" fill="#2563EB" />
          <circle cx="260" cy="420" r="4.5" fill="#1D4ED8" className="animate-pattern-pulse" />
          <circle cx="350" cy="480" r="3.5" fill="#3B82F6" />
        </svg>

      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#1D4ED8] bg-[#DCEBFE]/80 border border-[#BFDBFE]">
            WORLD-CLASS SCIENTIFIC CONSULTANCY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
          Empowering Research,<br />
          Innovation & <span className="text-[#0052CC]">Scientific</span><br />
          <span className="text-[#0052CC]">Excellence</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          A multidisciplinary research consultancy providing end-to-end<br className="hidden sm:inline" />
          research support worldwide.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-b from-[#0052CC] to-[#003B94] hover:from-[#0040A8] hover:to-[#002D7A] shadow-lg shadow-blue-900/30 active:scale-95 transition-all duration-200"
          >
            Get Consultation
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-400/80 shadow-xs transition-all duration-200"
          >
            Submit Your Requirement
          </button>

        </div>

      </div>

    </section>
  );
}

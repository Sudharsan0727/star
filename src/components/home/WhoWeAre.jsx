import unionBg from '../../assets/Union.png';

export default function WhoWeAre({ onOpenContact }) {
  const stats = [
    { number: "500", label: "RESEARCH PROJECTS" },
    { number: "150", label: "JOURNAL PUBLICATIONS" },
    { number: "40", label: "RESEARCH EXPERTS" },
    { number: "20", label: "SCIENTIFIC DOMAINS" },
  ];

  return (
    <section id="about" className="py-24 my-8 bg-white relative overflow-hidden font-sans border-t border-slate-100">

      {/* World Map Dotted Background Graphic (Union.png) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[460px] pointer-events-none opacity-100 z-0 flex items-center justify-center p-4">
        <img
          src={unionBg}
          alt="World Map Graphic"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Upper Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-[#0052CC] uppercase tracking-widest">
              WHO WE ARE
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-snug sm:leading-[1.25]">
              Driven by Trust,<br />
              Powered by<br />
              Experience.
            </h2>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-md text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed font-medium">
            <p>
              We are a multidisciplinary research consultancy comprising experienced researchers, Ph.D.
              scholars, scientists, and academicians with expertise across science and engineering
              disciplines.
            </p>
            <p>
              Headquartered in the capital city of Tamil Nadu, India, we provide
              comprehensive research solutions to students, faculty members, industries, and research
              organizations worldwide.
            </p>
          </div>

        </div>
      </div>

      {/* Full Width Vibrant Blue Stats Bar (with Yellow '+' Signs) */}
      <div className="w-full bg-gradient-to-r from-[#0052CC] via-[#0047BA] to-[#003B94] py-14 text-white shadow-inner relative z-10 my-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                  {stat.number}<span className="text-[#FFB800] font-semibold">+</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-100 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

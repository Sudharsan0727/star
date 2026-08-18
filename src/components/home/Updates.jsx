import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Updates() {
  const notifications = [
    "Research Workshops",
    "Paper Writing Training",
    "Funding Opportunities",
    "Journal Updates",
    "Call for Papers",
    "Internship Announcements"
  ];

  return (
    <section className="pt-20 pb-10 mt-4 mb-0 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: UPDATES Header, Arrows, Card & View All Events */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Section Tag */}
            <div className="text-xs font-bold text-[#0052CC] uppercase tracking-widest mb-1">
              UPDATES
            </div>

            {/* Title & Arrow Controls Row (Aligned strictly to top of Left Card) */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                1
              </h2>

              {/* Navigation Arrows (Positioned at top-right of Left Card) */}
              <div className="flex items-center space-x-2.5">
                <button className="p-2 rounded-full border border-slate-800 text-slate-800 hover:bg-slate-50 transition-colors" title="Previous">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full border border-slate-800 text-slate-800 hover:bg-slate-50 transition-colors" title="Next">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* White Main Article Card */}
            <div className="p-8 rounded-3xl border border-slate-200/90 bg-white flex flex-col sm:flex-row gap-8 items-start shadow-xs">
              
              {/* Gray Image Placeholder Box */}
              <div className="w-full sm:w-64 h-64 bg-[#D9D9D9] rounded-xl shrink-0"></div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Lorem Ipsum is simply<br />dummy text.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  It is a long established fact that a reader will be distracted.
                </p>
              </div>

            </div>

            {/* View All Events Link (Positioned below Left Card) */}
            <div className="mt-6">
              <a href="#" className="inline-flex items-center space-x-2 text-xs font-bold text-slate-900 hover:text-[#0052CC] transition-colors">
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Notifications Dark Blue Shell */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#0052CC] to-[#003B94] text-white shadow-xl mt-4 lg:mt-0">
            
            {/* Title & Yellow Underline Accent Bar */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Notifications
              </h3>
              <div className="w-12 h-1 bg-[#FFB800] rounded-full mx-auto"></div>
            </div>

            {/* White Inner Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md">
              <ul className="divide-y divide-slate-100">
                {notifications.map((item, idx) => (
                  <li key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center space-x-3.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

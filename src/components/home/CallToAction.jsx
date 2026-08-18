import ScrollReveal from '../common/ScrollReveal';

export default function CallToAction({ onOpenContact }) {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blue Container Box */}
        <ScrollReveal animation="zoom-in" className="bg-gradient-to-r from-[#003B94] via-[#004CB8] to-[#0052CC] rounded-[36px] sm:rounded-[44px] p-12 sm:p-16 lg:p-20 text-white text-center shadow-xl">
          
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Ready to Elevate Your<br /> Research?
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Connect with our principal investigators to discuss your next breakthrough project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Schedule Button */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 shadow-md transition-colors"
            >
              Schedule a Consultation
            </button>

            {/* Secondary Download Button */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-[#002D7A]/40 border border-blue-300/30 hover:bg-[#002D7A]/60 transition-colors"
            >
              Download Capability Statement
            </button>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}


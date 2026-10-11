import ScrollReveal from '../common/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function CallToAction({ onOpenContact }) {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blue Container Box */}
        <ScrollReveal animation="zoom-in" className="bg-gradient-to-r from-[#003B94] via-[#004CB8] to-[#0052CC] rounded-[36px] sm:rounded-[44px] px-12 sm:px-16 lg:px-20 py-14 text-white text-center shadow-xl">
          
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Ready to Elevate Your<br /> Research?
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Connect with our principal investigators to discuss your next breakthrough project.
          </p>

          <div className="flex items-center justify-center">
            
            {/* Primary Schedule Button */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-[#FFB800] hover:-translate-y-0.5 shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}


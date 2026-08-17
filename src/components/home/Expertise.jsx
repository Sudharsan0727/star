import { FileText, BookOpen, Edit3, GraduationCap, PenTool, BarChart3, ArrowRight } from 'lucide-react';

export default function Expertise({ onOpenContact }) {
  return (
    <section id="expertise" className="py-24 bg-[#F0F6FE] border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Precision-engineered research solutions tailored for global scholarly and commercial impact.
          </p>
        </div>

        {/* Asymmetric 12-Column Grid Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Top Row */}
          
          {/* Card 1: Research Paper Writing (Wide Card - 6 Columns) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-6 shadow-sm">
                <FileText className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Research Paper Writing
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mb-8">
                From abstract to conclusion, we draft high-impact manuscripts that adhere to strict disciplinary standards.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003B94] transition-colors w-fit"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Journal Publication (Standard Card - 3 Columns) */}
          <div className="lg:col-span-3 p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-6 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Journal Publication
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Navigating complex impact factor journals.
              </p>
            </div>
          </div>

          {/* Card 3: Scientific Editing (Standard Card - 3 Columns) */}
          <div className="lg:col-span-3 p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-6 shadow-sm">
                <Edit3 className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Scientific Editing
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Refining logic for maximum clarity.
              </p>
            </div>
          </div>

          {/* Bottom Row */}

          {/* Card 4: Thesis Assistance (Standard Card - 3 Columns) */}
          <div className="lg:col-span-3 p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-6 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Thesis Assistance
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Master's and PhD candidate support.
              </p>
            </div>
          </div>

          {/* Card 5: Proposal Writing (Standard Card - 3 Columns) */}
          <div className="lg:col-span-3 p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-6 shadow-sm">
                <PenTool className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Proposal Writing
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Grant and academic project funding.
              </p>
            </div>
          </div>

          {/* Card 6: Advanced Data Analysis (Featured Wide Dark Blue Card - 6 Columns) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0052CC] to-[#003B94] text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            
            {/* Background Translucent Bar Chart Icon */}
            <div className="absolute right-8 bottom-8 opacity-20 pointer-events-none group-hover:scale-105 transition-transform">
              <BarChart3 className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Advanced Data Analysis
              </h3>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-md mb-8">
                Statistical modeling and visualization for world-class evidentiary support.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenContact}
                className="inline-block text-xs font-bold text-white underline underline-offset-4 hover:text-amber-300 transition-colors"
              >
                Explore Analytics
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

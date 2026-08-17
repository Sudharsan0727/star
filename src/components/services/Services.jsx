import {
  BookOpen,
  TrendingUp,
  Cpu,
  GraduationCap,
  Compass,
  Download
} from 'lucide-react';
import Institutions from '../home/Institutions';
import Voices from '../home/Voices';

export default function Services({ onOpenContact }) {
  const whyChooseUsFeatures = [
    { title: "Experienced Researchers" },
    { title: "Domain Experts" },
    { title: "Confidential Project Handling" },
    { title: "Ethical Research Practices" },
    { title: "End-to-End Research Support" },
    { title: "Affordable Consultation" },
    { title: "On-time Delivery" },
    { title: "Publication in Reputed Journals" }
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="py-32 sm:py-36 bg-[#F9F9FC] text-center border-b border-slate-100/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Top Category Badge */}
          <div className="inline-block">
            <span className="bg-[#D9E8FC] text-[#0052CC] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              OUR SERVICES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-snug sm:whitespace-nowrap">
            Empowering Your <span className="text-[#0052CC]">Research Journey</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Accelerate your scientific breakthroughs with precision-engineered solutions. We provide end-to-end support for researchers, institutions, and industrial leaders worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0052CC] hover:bg-[#003B94] shadow-md transition-colors cursor-pointer"
            >
              Explore Services
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download Brochure</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. CORE SERVICE OFFERINGS */}
      <section className="py-24 bg-white border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              Core Service Offerings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Comprehensive academic and industrial research support tailored to international standards.
            </p>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* COLUMN 1: STACK OF 2 CARDS */}
            <div className="flex flex-col justify-between space-y-6 h-full">
              
              {/* Card 1: Research & Publication Support */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between grow">
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                  Research & Publication Support
                </div>
                <div className="p-6 flex justify-between items-start space-x-4 grow">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Research Paper Writing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Journal Paper Publication Assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Manuscript Preparation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Scientific Editing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Technical Proofreading / Technical English Correction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Plagiarism Checking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Journal Selection Guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Reviewer Comment Response Assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Review articles write-up</span>
                    </li>
                  </ul>
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-[#0052CC] opacity-80" />
                  </div>
                </div>
              </div>

              {/* Card 2: Data Analysis & Interpretation */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between grow">
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                  Data Analysis & Interpretation
                </div>
                <div className="p-6 flex justify-between items-start space-x-4 grow">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Experimental Data Analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Statistical Analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Graph Preparation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Result Interpretation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Technical Report Preparation</span>
                    </li>
                  </ul>
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#0052CC] opacity-80" />
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMN 2: 1 TALL CARD - Research Consultancy */}
            <div className="h-full flex flex-col">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between h-full grow">
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                  Research Consultancy
                </div>
                <div className="p-6 flex justify-between items-start space-x-4 grow">
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium grow">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Ph.D. Thesis Assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Synopsis Preparation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Research Proposal Writing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Literature Review Development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Research Methodology Consultation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Patent Drafting Support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Grant Proposal Preparation</span>
                    </li>
                  </ul>
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6 text-[#0052CC] opacity-80" />
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 3: STACK OF 2 CARDS */}
            <div className="flex flex-col justify-between space-y-6 h-full">
              
              {/* Card 1: Academic Projects */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between grow">
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                  Academic Projects
                </div>
                <div className="p-6 flex justify-between items-start space-x-4 grow">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>B.Tech Projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>M.Tech Projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>M.Sc Projects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Ph.D Research Assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Post Doc research assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Industrial Research Projects</span>
                    </li>
                  </ul>
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#0052CC] opacity-80" />
                  </div>
                </div>
              </div>

              {/* Card 2: Publication */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between grow">
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                  Publication
                </div>
                <div className="p-6 flex justify-between items-start space-x-4 grow">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Textbook write-up Assistance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-slate-900 font-bold shrink-0">•</span>
                      <span>Textbook Publication with ISBN (eprint & hard copy)</span>
                    </li>
                  </ul>
                  <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-[#0052CC] opacity-80" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Precision-engineered research solutions tailored for global scholarly and commercial impact.
            </p>
          </div>

          {/* 4-Col Grid of Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-center group"
              >
                {/* Top Gray Square Placeholder */}
                <div className="w-full aspect-square bg-[#F1F3F7] rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 transition-colors">
                  <Compass className="w-8 h-8 text-[#0052CC] opacity-80" />
                </div>

                {/* Bottom Title Label */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug max-w-[200px] mx-auto">
                  {feat.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INSTITUTIONS & VOICES */}
      <Institutions />
      <Voices />

      {/* 5. CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0047BA] via-[#003B94] to-[#002D7A] rounded-[36px] sm:rounded-[44px] p-10 sm:p-16 text-center text-white shadow-xl space-y-6">
            
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to Elevate Your Research?
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed font-medium">
              Connect with our principal investigators to discuss your next breakthrough project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-[#003B94] bg-white hover:bg-slate-100 shadow-md transition-colors cursor-pointer"
              >
                Schedule a Consultation
              </button>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-transparent border border-white/40 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Download Capability Statement
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

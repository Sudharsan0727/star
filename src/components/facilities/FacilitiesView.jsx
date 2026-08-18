export default function FacilitiesView({ onOpenContact }) {
  const facilityCategories = [
    {
      title: "Structural Characterization",
      items: [
        { name: "XRD" },
        { name: "Raman Spectroscopy" },
        { name: "FTIR" },
        { name: "Single Crystal XRD" },
        { name: "Powder XRD" },
      ]
    },
    {
      title: "Optical Characterization",
      items: [
        { name: "UV–Visible Spectroscopy" },
        { name: "Photoluminescence (PL)" },
        { name: "Time-resolved PL" },
        { name: "SHG/NLO Analysis" },
        { name: "Fluorescence Spectroscopy" },
      ]
    },
    {
      title: "Microscopy & Surface Analysis",
      items: [
        { name: "FESEM" },
        { name: "SEM" },
        { name: "TEM" },
        { name: "HRTEM" },
        { name: "AFM" },
        { name: "Optical Microscopy" },
      ]
    },
    {
      title: "Elemental & Chemical Analysis",
      items: [
        { name: "EDAX/EDS" },
        { name: "XPS" },
        { name: "ICP-OES" },
        { name: "ICP-MS" },
        { name: "XRF" },
        { name: "CHNS Analysis" },
      ]
    },
    {
      title: "Electrical & Electrochemical Studies",
      items: [
        { name: "LCR Meter" },
        { name: "Impedance Spectroscopy" },
        { name: "Cyclic Voltammetry (CV)" },
        { name: "Galvanostatic Charge–Discharge (GCD)" },
        { name: "Electrochemical Impedance Spectroscopy (EIS)" },
        { name: "Four Probe Measurements" },
      ]
    },
     {
      title: "Computational & Data Analysis",
      items: [
        { name: "OriginPro" },
        { name: "MATLAB" },
        { name: "COMSOL" },
        { name: "ImageJ" },
        { name: "SPSS" },
        { name: "GraphPad Prism" },
        { name: "Crystal Structure Refinement" },
      ]
    },
    {
      title: "Thermal Characterization",
      items: [
        { name: "TGA" },
        { name: "DTA" },
        { name: "DSC" },
      ]
    },
    {
      title: "Magnetic Characterization",
      items: [
        { name: "Vibrating Sample Magnetometer (VSM)" },
        { name: "SQUID Magnetometer" },
      ]
    },
    {
      title: "Biological & Chemical Characterization",
      items: [
        { name: "PCR" },
        { name: "Gel Electrophoresis" },
        { name: "ELISA" },
        { name: "Cell Culture Analysis" },
        { name: "Antimicrobial Testing" },
        { name: "Cytotoxicity Studies" },
        { name: "HPLC" },
        { name: "GC-MS" },
        { name: "LC-MS" },
        { name: "FT-NMR" },
        { name: "UV Kinetics" },
      ]
    },
   
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 sm:py-24 bg-[#F9F9FC] text-center border-b border-slate-100/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-[#D9E8FC] text-[#0052CC] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              FACILITIES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-snug sm:whitespace-nowrap">
            Characterization & Analytical Facilities
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Comprehensive academic and industrial research support tailored to international standards.
          </p>

        </div>
      </section>

      {/* 2. FACILITIES CATEGORIES GRID (2 COLUMNS GRID MATCHING SCREENSHOT EXACTLY) */}
      <section className="py-24 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {facilityCategories.map((category, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Dark Blue Header Bar */}
                <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-6 py-4 font-bold text-sm sm:text-base">
                  {category.title}
                </div>

                {/* Equipment Items Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                    {category.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="bg-[#DCDCDC] p-2.5 sm:p-3 rounded-2xl sm:rounded-[22px] flex flex-col justify-between transition-all hover:shadow-md group"
                      >
                        {/* Pure White Inner Top Box */}
                        <div className="bg-white rounded-xl sm:rounded-2xl h-24 sm:h-28 w-full shadow-2xs group-hover:shadow-xs transition-shadow"></div>

                        {/* Centered Text Directly on Grey Base */}
                        <div className="pt-2.5 pb-1 px-1 text-center min-h-[42px] flex items-center justify-center">
                          <span className="text-xs sm:text-sm font-medium text-[#1E293B] leading-tight block">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. READY TO ELEVATE YOUR RESEARCH? (CTA BANNER) */}
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

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import img63 from '../../assets/image 63.png';
import img64 from '../../assets/image 64.png';
import img65 from '../../assets/image 65.png';
import img66 from '../../assets/image 66.png';
import img68 from '../../assets/image 68.png';
import preview1Img from '../../assets/preview 1.png';
import ScrollReveal from '../common/ScrollReveal';

export default function CollaborationsView({ initialTab = 'ongoing', onOpenContact }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const ongoingProjects = [
    {
      num: "01",
      title: "Functional Transition-metal Doped ZnS Nanocrystals for Tunable Optical and Biomedical Applications",
      journal: "Materials Research Bulletin",
      status: "Under Review",
      image: img63
    },
    {
      num: "02",
      title: "Oxidative Stability Improvement of Azolla pinnata-Derived Biodiesel Using Synthetic Antioxidants with Performance and Emission Evaluation",
      journal: "Next Materials",
      status: "Under review",
      image: img64
    },
    {
      num: "03",
      title: "Influence of Solvent-Mediated Morphology Evolution on the Electrochemical Performance of Nickel Cobalt Oxide Nanoparticles for Supercapacitor Applications",
      journal: "Materials Science & Engineering B",
      status: "Under Review",
      image: img65
    },
    {
      num: "04",
      title: "Photocatalytic degradation of Rhodamine 6G on carbon nanoparticles under solar irradiation",
      journal: "Next Materials",
      status: "Under review",
      image: img66
    }
  ];

  // 8 Research Experts & Faculty Members matching Page 16 & 17 of PDF
  const experts = [
    { name: "Dr. Anandan", role: "Founder & Director", image: preview1Img },
    { name: "Dr. Nirmal Kumar", role: "Chief Research Consultant (Material Scientist)", image: preview1Img },
    { name: "Dr. Galeb", role: "Material Scientist", image: preview1Img },
    { name: "Dr. J. Revathy", role: "Physics (Computational)", image: preview1Img },
    { name: "Dr. Sowmya", role: "Physics", image: preview1Img },
    { name: "Dr. Prabhu", role: "Biotechnologist", image: preview1Img },
    { name: "Dr. Neelamohan", role: "Chemistry Expert", image: preview1Img },
    { name: "Dr. Maruthamuthu", role: "Chemistry Expert", image: preview1Img }
  ];

  // Partner options list matching reference screenshot
  const [partnerOptions, setPartnerOptions] = useState([
    { id: 1, title: "Academic Collaborations", active: true },
    { id: 2, title: "Industrial Partnerships", active: false },
    { id: 3, title: "Sponsored Projects", active: false },
    { id: 4, title: "Joint Research Proposals", active: false },
    { id: 5, title: "Consultancy Engagements", active: false },
    { id: 6, title: "Internship & Training Opportunities", active: false },
  ]);

  const handleSelectPartnerOption = (id) => {
    setPartnerOptions(partnerOptions.map(opt => ({
      ...opt,
      active: opt.id === id
    })));
  };

  const getHeadline = () => {
    switch (activeTab) {
      case 'completed':
        return 'Completed projects';
      case 'experts':
        return 'Research Experts';
      case 'published':
        return 'Published works';
      case 'partners':
        return 'Become Our Research Partner';
      case 'ongoing':
      default:
        return 'Ongoing Collaborative Projects';
    }
  };

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      
      {/* 1. HERO BANNER */}
      <section className="py-20 sm:py-24 bg-[#F9F9FC] text-center border-b border-slate-100/80">
        <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-[#D9E8FC] text-[#0052CC] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              COLLABORATIONS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl text-slate-900 tracking-tight">
            {activeTab === 'partners' ? (
              <div className="space-y-2 sm:space-y-3 leading-snug">
                <span className="block font-semibold">To join our team</span>
                <span className="block font-bold">Become Our Research Partner</span>
              </div>
            ) : (
              <span className="font-semibold">{getHeadline()}</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Comprehensive academic and industrial research support tailored to international standards.
          </p>

        </ScrollReveal>
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      {activeTab === 'completed' ? (
        /* COMPLETED PROJECTS (IMAGE 68 SHOWCASE) */
        <section className="py-20 bg-white border-b border-slate-100 font-sans">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl sm:max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-2">
              <img
                src={img68}
                alt="Completed Project Thesis - Anna Sammarco"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </section>
      ) : activeTab === 'experts' ? (
        /* RESEARCH EXPERTS (4-COLUMN GRID MATCHING REFERENCE SCREENSHOT) */
        <section className="py-24 bg-white border-b border-slate-100 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {experts.map((expert, idx) => (
                <div key={idx} className="flex flex-col group">
                  {/* Expert Image Box (Transparent, No Background) */}
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-transparent flex items-end justify-center">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Dark Blue Name & Designation Banner Box (Overlapping Bottom) */}
                  <div className="bg-gradient-to-r from-[#003B94] via-[#003080] to-[#002566] text-white rounded-xl py-3 px-4 text-center shadow-lg -mt-6 relative z-10 mx-3 border border-white/10">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {expert.name}
                    </h3>
                    <p className="text-[11px] text-blue-100 font-medium mt-0.5">
                      {expert.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : activeTab === 'partners' ? (
        /* OUR RESEARCH PARTNER (EXACT MATCH TO REFERENCE SCREENSHOT) */
        <section className="py-20 sm:py-24 bg-white border-b border-slate-100 font-sans">
          <div className="max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {partnerOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleSelectPartnerOption(opt.id)}
                className={`rounded-2xl border transition-all overflow-hidden flex items-center justify-between cursor-pointer ${
                  opt.active
                    ? 'border-slate-200 bg-[#ECEEF2] shadow-xs'
                    : 'border-slate-200 bg-white hover:border-blue-300 shadow-2xs'
                }`}
              >
                {/* Left Label */}
                <div className="py-4 px-6 font-semibold text-sm sm:text-base text-slate-800">
                  {opt.title}
                </div>

                {/* Right Action */}
                {opt.active ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenContact) onOpenContact();
                    }}
                    className="bg-gradient-to-r from-[#0052CC] to-[#003B94] hover:from-[#0040A8] hover:to-[#002D7A] text-white px-6 py-4 rounded-r-xl font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Google form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="p-4 text-slate-400 group-hover:text-[#0052CC] transition-colors">
                    <div className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* ONGOING COLLABORATIVE PROJECTS (2 COLUMNS GRID WITH DOTTED ROW SEPARATOR) */
        <section className="py-24 bg-white border-b border-slate-100 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Row 1: Projects 01 & 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {ongoingProjects.slice(0, 2).map((proj, idx) => (
                <div key={idx} className="flex flex-col justify-between h-full">
                  <div>
                    {/* Faint Big Number */}
                    <div className="text-6xl sm:text-7xl font-bold text-[#C8DCFA] font-mono mb-2">
                      {proj.num}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug mb-6 max-w-xl">
                      {proj.title}
                    </h3>

                    {/* Image Container */}
                    <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-white flex items-center justify-center p-2">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="space-y-1 pt-3 border-t border-slate-100 text-xs sm:text-sm font-semibold">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-900 font-bold">Jorunal:</span>
                      <span className="text-slate-800 font-medium">{proj.journal}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-900 font-bold">Status:</span>
                      <span className="text-slate-800 font-medium">{proj.status}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Dotted Horizontal Divider Line between Row 1 and Row 2 */}
            <div className="my-16 sm:my-20 border-t border-dashed border-slate-300/90 w-full"></div>

            {/* Row 2: Projects 03 & 04 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {ongoingProjects.slice(2, 4).map((proj, idx) => (
                <div key={idx} className="flex flex-col justify-between h-full">
                  <div>
                    {/* Faint Big Number */}
                    <div className="text-6xl sm:text-7xl font-bold text-[#C8DCFA] font-mono mb-2">
                      {proj.num}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug mb-6 max-w-xl">
                      {proj.title}
                    </h3>

                    {/* Image Container */}
                    <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-white flex items-center justify-center p-2">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="space-y-1 pt-3 border-t border-slate-100 text-xs sm:text-sm font-semibold">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-900 font-bold">Jorunal:</span>
                      <span className="text-slate-800 font-medium">{proj.journal}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-900 font-bold">Status:</span>
                      <span className="text-slate-800 font-medium">{proj.status}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 3. READY TO ELEVATE YOUR RESEARCH? (CTA BANNER) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="zoom-in" className="bg-gradient-to-r from-[#0047BA] via-[#003B94] to-[#002D7A] rounded-[36px] sm:rounded-[44px] p-10 sm:p-16 text-center text-white shadow-xl space-y-6">
            
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to Elevate Your Research?
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed font-medium">
              Connect with our principal investigators to discuss your next breakthrough project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-[#003B94] bg-white hover:bg-slate-100 shadow-md transition-colors"
              >
                Schedule a Consultation
              </button>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-transparent border border-white/40 hover:bg-white/10 transition-colors"
              >
                Download Capability Statement
              </button>
            </div>

          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}

import { useState, useEffect } from 'react';
import ScrollReveal from '../common/ScrollReveal';
import {
  Atom,
  Orbit,
  FlaskConical,
  Dna,
  Microscope,
  Settings,
  Cpu,
  Wrench,
  Terminal,
  Zap,
  Droplets,
  Activity,
  Radio,
  Layers
} from 'lucide-react';

export default function ExpertiseView({ initialTab = 'domains', onOpenContact }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const domainCards = [
    {
      title: "Materials Science & Engineering",
      icon: <Atom className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Functional Materials",
        "Smart Materials",
        "Polymer Nanocomposites",
        "Ceramics",
        "Magnetic Materials",
        "Semiconductor Materials",
        "Thin Films",
        "Single Crystal Growth",
        "Nanotechnology",
        "Composite Materials",
        "Energy Storage Materials"
      ]
    },
    {
      title: "Physics",
      icon: <Orbit className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Condensed Matter Physics",
        "Materials Physics",
        "Solid State Physics",
        "Crystal Growth",
        "Photonics",
        "Laser Physics",
        "Nonlinear Optics",
        "Ferroelectric Materials",
        "Magnetic Materials"
      ]
    },
    {
      title: "Chemistry",
      icon: <FlaskConical className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Analytical Chemistry",
        "Green Chemistry",
        "Polymer Chemistry",
        "Coordination Chemistry",
        "Electrochemistry",
        "Environmental Chemistry",
        "Catalysis"
      ]
    },
    {
      title: "Biotechnology",
      icon: <Dna className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Molecular Biology",
        "Microbiology",
        "Industrial Biotechnology",
        "Environmental Biotechnology",
        "Plant Biotechnology",
        "Medical Biotechnology",
        "Genetic Engineering",
        "Bioprocess Engineering",
        "Fermentation Technology"
      ]
    },
    {
      title: "Biological Sciences",
      icon: <Microscope className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Cell Biology",
        "Biochemistry",
        "Immunology",
        "Microbial Studies",
        "Plant Sciences",
        "Biomedical Sciences",
        "Environmental Biology"
      ]
    },
    {
      title: "Chemical Engineering",
      icon: <Settings className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Process Engineering",
        "Catalytic Systems",
        "Wastewater Treatment",
        "Reaction Engineering",
        "Process Optimization"
      ]
    },
    {
      title: "Electrical & Electronics",
      icon: <Cpu className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Energy Storage",
        "Sensors",
        "Embedded Systems",
        "IoT Applications",
        "Renewable Energy"
      ]
    },
    {
      title: "Mechanical Engineering",
      icon: <Wrench className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Advanced Manufacturing",
        "Materials Processing",
        "Surface Engineering",
        "Additive Manufacturing"
      ]
    },
    {
      title: "Computational Analysis",
      icon: <Terminal className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "COMSOL",
        "DFT",
        "Molecular Docking",
        "Python / R Programming"
      ]
    }
  ];

  const applicationCards = [
    {
      title: "Energy Applications",
      icon: <Zap className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Solar Cells",
        "Supercapacitors",
        "Batteries",
        "Fuel Cells",
        "Hydrogen Production",
        "Hydrogen Storage",
        "Thermoelectric Materials"
      ]
    },
    {
      title: "Environmental Applications",
      icon: <Droplets className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Photocatalytic Dye Degradation",
        "Water Purification",
        "Wastewater Treatment",
        "Air Pollution Control",
        "Heavy Metal Removal",
        "Environmental Monitoring"
      ]
    },
    {
      title: "Healthcare & Biomedical",
      icon: <Activity className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Antibacterial Materials",
        "Antimicrobial Coatings",
        "Drug Delivery Systems",
        "Tissue Engineering",
        "Biomedical Devices",
        "Bioactive Materials"
      ]
    },
    {
      title: "Sensor Technologies",
      icon: <Radio className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "Gas Sensors",
        "Biosensors",
        "Electrochemical Sensors",
        "Flexible Sensors",
        "Wearable Sensors",
        "Environmental Sensors"
      ]
    },
    {
      title: "Advanced Functional Devices",
      icon: <Layers className="w-7 h-7 text-[#0052CC] opacity-75" />,
      bullets: [
        "EMI Shielding Materials",
        "Microwave Absorbers",
        "Dielectric Materials",
        "Ferroelectric Devices",
        "Magnetoelectric Materials",
        "Piezoelectric Devices",
        "Flexible Electronics"
      ]
    }
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      
      {/* 1. HERO SECTION & TAB SWITCHER */}
      <section className="py-20 sm:py-24 bg-[#F9F9FC] text-center border-b border-slate-100/80">
        <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-[#D9E8FC] text-[#0052CC] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              EXPERTISE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-snug sm:whitespace-nowrap">
            {activeTab === 'application' ? 'In Application-Oriented Research' : 'Research domains'}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
            Comprehensive academic and industrial research support tailored to international standards.
          </p>

        </ScrollReveal>
      </section>

      {/* 2. CARDS SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTab === 'domains' ? (
            /* 9 RESEARCH DOMAIN CARDS (3x3 GRID) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {domainCards.map((card, idx) => (
                <ScrollReveal
                  key={idx}
                  animation={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  delay={(idx % 3) * 100}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                    {card.title}
                  </div>

                  <div className="p-6 flex justify-between items-start space-x-4 grow">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2">
                          <span className="text-slate-900 font-bold shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* 5 APPLICATION-ORIENTED RESEARCH CARDS (3 in top row, 2 in bottom row) */
            <div className="space-y-6">
              {/* Row 1: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {applicationCards.slice(0, 3).map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                  >
                    <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                      {card.title}
                    </div>

                    <div className="p-6 flex justify-between items-start space-x-4 grow">
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                        {card.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <span className="text-slate-900 font-bold shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 Cards (Centered / Left Aligned Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {applicationCards.slice(3, 5).map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                  >
                    <div className="bg-gradient-to-r from-[#003B94] to-[#002D7A] text-white px-5 py-3.5 font-bold text-sm sm:text-base">
                      {card.title}
                    </div>

                    <div className="p-6 flex justify-between items-start space-x-4 grow">
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium grow">
                        {card.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <span className="text-slate-900 font-bold shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="w-14 h-14 rounded-2xl bg-[#F1F3F7] flex items-center justify-center shrink-0">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          </div>
        </div>
      </section>

    </div>
  );
}

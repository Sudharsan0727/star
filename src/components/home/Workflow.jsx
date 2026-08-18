import { Lightbulb, ClipboardList, Microscope, TrendingUp, FileText, Check } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function Workflow() {
  const steps = [
    {
      icon: <Lightbulb className="w-5 h-5 text-[#003B94]" />,
      title: "Idea",
      sub: "Conceptualization",
      isActive: false
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-[#003B94]" />,
      title: "Proposal",
      sub: "Framework Design",
      isActive: false
    },
    {
      icon: <Microscope className="w-5 h-5 text-[#003B94]" />,
      title: "Research",
      sub: "Data Collection",
      isActive: false
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#003B94]" />,
      title: "Analysis",
      sub: "In-depth Review",
      isActive: false
    },
    {
      icon: <FileText className="w-5 h-5 text-[#003B94]" />,
      title: "Publication",
      sub: "Draft & Submission",
      isActive: false
    },
    {
      icon: <Check className="w-6 h-6 text-white stroke-[3]" />,
      title: "Acceptance",
      sub: "Journal Approval",
      isActive: true
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-[#003B94] via-[#004CB8] to-[#0052CC] text-white shadow-inner font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl sm:text-5xl font-medium mb-16 tracking-tight text-white">
            Research Workflow
          </h2>
        </ScrollReveal>

        {/* 6 Step Horizontal Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
          
          {/* Connecting Solid White Line */}
          <div className="hidden lg:block absolute top-7 left-[7%] right-[7%] h-[2.5px] bg-white z-0"></div>

          {steps.map((step, idx) => (
            <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100} className="relative z-10 flex flex-col items-center group">
              
              {/* Node Circle */}
              <div
                className={`w-14 h-14 sm:w-15 sm:h-15 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 mb-5 ${
                  step.isActive
                    ? 'bg-[#002D7A] border-[3.5px] border-white text-white'
                    : 'bg-white text-[#003B94]'
                }`}
              >
                {step.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-sm sm:text-base font-medium mb-1.5 text-white">
                {step.title}
              </h3>
              <p className="text-[11px] text-blue-100/90 font-normal">
                {step.sub}
              </p>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}


import { ArrowRight, BriefcaseBusiness, MapPin, Sparkles, Users } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';

export default function JoinTeamView({ onOpenContact }) {
  const roles = [
    {
      title: 'Research Associate',
      icon: <Sparkles className="w-5 h-5 text-[#0052CC]" />,
      description: 'Support interdisciplinary projects spanning biomedical, engineering, and data-driven discovery.',
    },
    {
      title: 'Scientific Writer',
      icon: <BriefcaseBusiness className="w-5 h-5 text-[#0052CC]" />,
      description: 'Translate cutting-edge findings into rigorous manuscripts, proposals, and publication-ready narratives.',
    },
    {
      title: 'Project Lead',
      icon: <Users className="w-5 h-5 text-[#0052CC]" />,
      description: 'Drive high-impact collaborations, mentor teams, and ensure excellence across research milestones.',
    },
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal animation="fade-left" className="lg:col-span-7 space-y-6">
              <span className="text-[#0052CC] text-xs font-bold uppercase tracking-wider block">
                JOIN OUR TEAM
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
                Build the Future of Research With Us
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-medium">
                We are looking for curious, rigorous, and collaborative minds to shape meaningful research outcomes across science, technology, and innovation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0052CC] shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-[#0052CC] hover:shadow-[0_0_0_2px_rgba(0,82,204,0.25)] hover:-translate-y-0.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-[#0052CC]" />
                  <span>Remote &amp; Hybrid Opportunities</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" className="lg:col-span-5">
              <div className="bg-[#F1F5F9] rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-sm min-h-[260px] flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Open roles</p>
                      <p className="text-lg font-bold text-slate-900">12+</p>
                    </div>
                    <BriefcaseBusiness className="w-8 h-8 text-[#0052CC]" />
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Culture</p>
                    <p className="text-sm font-semibold text-slate-800 mt-2">
                      Evidence-driven, collaborative, and designed for scientific excellence.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Join Star ResearchHub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Research Associate',
                icon: <Sparkles className="w-5 h-5 text-[#0052CC]" />,
                description: 'Support interdisciplinary projects spanning biomedical, engineering, and data-driven discovery.',
              },
              {
                title: 'Scientific Writer',
                icon: <BriefcaseBusiness className="w-5 h-5 text-[#0052CC]" />,
                description: 'Translate cutting-edge findings into rigorous manuscripts, proposals, and publication-ready narratives.',
              },
              {
                title: 'Project Lead',
                icon: <Users className="w-5 h-5 text-[#0052CC]" />,
                description: 'Drive high-impact collaborations, mentor teams, and ensure excellence across research milestones.',
              },
            ].map((role) => (
              <div key={role.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

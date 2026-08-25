import { FileText, FileEdit, Upload, GraduationCap, BarChart2, Microscope, CheckCircle2, FilePenLine } from 'lucide-react';
import unionBg from '../../assets/Union.png';
import containerImg from '../../assets/Container.png';
import ctaBg from '../../assets/Image.png';
import ScrollReveal from '../common/ScrollReveal';

export default function About({ onOpenContact }) {
  const stats = [
    { num: "500", label: "RESEARCH PROJECTS" },
    { num: "150", label: "JOURNAL PUBLICATIONS" },
    { num: "40", label: "RESEARCH EXPERTS" },
    { num: "20", label: "SCIENTIFIC DOMAINS" },
  ];

  const topRowExpertise = [
    {
      icon: <FileText className="w-5 h-5 text-[#0052CC]" />,
      title: "Research Project Execution",
      desc: "End-to-end management of complex research cycles from conceptualization to final results."
    },
    {
      icon: <FileEdit className="w-5 h-5 text-[#0052CC]" />,
      title: "Scientific Manuscript Preparation",
      desc: "High-impact writing that adheres to strict disciplinary standards and linguistic precision."
    },
    {
      icon: <Upload className="w-5 h-5 text-[#0052CC]" />,
      title: "Journal Publication Support",
      desc: "Navigating the complexities of high-impact factor journals and peer-review processes."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#0052CC]" />,
      title: "Thesis Development",
      desc: "Comprehensive structural and academic support for Masters and PhD candidates."
    }
  ];

  const bottomRowExpertise = [
    {
      icon: <FilePenLine className="w-5 h-5 text-[#0052CC]" />,
      title: "Proposal Writing",
      desc: "Crafting compelling research proposals that align with funding agency requirements and maximize the chances of approval."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-[#0052CC]" />,
      title: "Data Analysis",
      desc: "Advanced statistical modeling and visualization for data-driven evidence across diverse scientific domains."
    },
    {
      icon: <Microscope className="w-5 h-5 text-[#0052CC]" />,
      title: "Advanced Characterization",
      desc: "Combining academic excellence with practical research experience to deliver high-quality, reliable, and customized research services."
    }

  ];

  return (
    <div className="w-full font-sans bg-white text-slate-900">

      {/* 1. HERO SECTION */}
      <section id="who-we-are" className="py-24 my-8 relative overflow-hidden bg-white">

        {/* World Map Dotted Pattern Background Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src={unionBg}
            alt="World Map Grid"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Headline */}
            <ScrollReveal animation="fade-left" className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold text-[#0052CC] uppercase tracking-wider">
                WHO WE ARE
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold text-slate-900 leading-snug sm:leading-[1.25] tracking-tight">
                Driven by Trust,<br />
                Powered by<br />
                Experience.
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#0052CC] hover:bg-[#003B94] shadow-md transition-colors cursor-pointer"
                >
                  Get Consultation
                </button>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Your Requirement
                </button>
              </div>
            </ScrollReveal>

            {/* Right Paragraphs */}
            <ScrollReveal animation="fade-right" className="lg:col-span-6 space-y-6 text-base text-slate-600 leading-relaxed font-medium">
              <p>
                We are a multidisciplinary research consultancy comprising experienced researchers, Ph.D.
                scholars, scientists, and academicians with expertise across science and engineering
                disciplines.
              </p>
              <p>
                Headquartered in the capital city of Tamil Nadu, India, we provide
                comprehensive research solutions to students, faculty members, industries, and research
                organizations worldwide.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH STATS BAR */}
      <section className="py-12 bg-gradient-to-r from-[#0052CC] via-[#0047BA] to-[#003B94] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, idx) => (
              <ScrollReveal key={idx} animation="zoom-in" delay={idx * 100} className="space-y-1">
                <div className="text-3xl sm:text-5xl font-semibold text-white">
                  {item.num}<span className="text-[#FFB800]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-blue-100 uppercase">
                  {item.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MESSAGE FROM THE DIRECTOR */}
      <section id="director-message" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Director Photo Card with Offset Blue Line Frame */}
            <ScrollReveal animation="fade-left" className="lg:col-span-5 relative pl-4 pt-4">
              <div className="border border-blue-200/90 rounded-3xl absolute top-0 left-0 w-[calc(100%-1rem)] h-[calc(100%-1rem)] pointer-events-none"></div>

              <div className="rounded-3xl overflow-hidden shadow-2xl relative group bg-white border border-slate-200/80">
                <img
                  src={containerImg}
                  alt="Dr. Anandan - Director & Founder, Star ResearchHub"
                  className="w-full h-auto max-h-[500px] object-cover object-top"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-[#E5E9EF] p-4 sm:p-5 rounded-2xl shadow-md border border-slate-200/80">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">Dr. R. Ananthan</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    IIT-Delhi Alumnuns
                  </p>
                </div>
              </div>

            </ScrollReveal>

            {/* Right Quote & Detailed Message */}
            <ScrollReveal animation="fade-right" className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Message from the Director
              </h2>

              <div className="relative pt-2">
                <div className="absolute -top-6 -left-4 opacity-15 text-blue-600 pointer-events-none text-8xl font-serif">
                  “
                </div>

                <p className="text-base sm:text-lg font-bold text-[#0052CC] italic leading-relaxed relative z-10">
                  At Star ResearchHub, we are committed to nurturing a culture of ethical, rigorous, and impactful research across disciplines. We support students, scholars, faculty, and researchers throughout their research journey from developing an idea and designing the study to experimentation, data analysis, publication, and thesis guidance
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                As an IIT Delhi alumnus, I believe that meaningful research begins with a strong question, grows through scientific rigour, and creates value through knowledge and innovation.              </p>


              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Our mission is simple: to empower researchers to turn ideas into impactful research.
              </p>

              <p className="text-base sm:text-lg font-bold text-[#0052CC] italic leading-relaxed relative z-10">
                Dr. R. Ananthan                </p>


              <p className="text-base sm:text-sm font-bold text-[#0052CC] italic leading-relaxed relative z-10 !mt-0">
                Director, Star ResearchHub | IIT Delhi Alumnus           </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#003B94] hover:bg-[#002D7A] shadow-md transition-colors cursor-pointer"
                >
                  Get Consultation
                </button>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-white border border-[#003B94] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Your Requirement
                </button>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. OUR EXPERTISE SECTION */}
      <section className="py-24 bg-[#F0F6FE] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal animation="fade-up" className="text-center max-w-lg mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              Our Expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We are a multidisciplinary research consultancy that provides comprehensive research solutions to students, faculty members, industries, and research organizations worldwide.
            </p>
          </ScrollReveal>

          <div className="space-y-6">

            {/* Top Row: 4 Equal Width Vertical Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRowExpertise.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-left" delay={idx * 100} className="p-8 rounded-3xl bg-white border border-slate-100/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom Row: 3 Wide Horizontal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bottomRowExpertise.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-right" delay={idx * 100} className="p-8 rounded-3xl bg-white border border-slate-100/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR VISION & OUR MISSION */}
      <section id="vision-mission" className="w-full py-0 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full">

          {/* Left Panel: Our Vision */}
          <ScrollReveal animation="fade-left" className="bg-gradient-to-br from-[#0047BA] via-[#003B94] to-[#002D7A] text-white p-12 sm:p-16 lg:p-24 flex flex-col justify-center">

            <div className="text-xs font-semibold text-blue-200/90 uppercase tracking-[0.2em] mb-3">
              OUR HORIZON
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-6 tracking-tight">
              Our Vision
            </h2>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-medium mb-8 max-w-lg">
              To become a globally recognized research consultancy that connects scientists, professors, research institutions, and industries through collaborative innovation, scientific excellence, and impactful research partnerships. We aspire to serve as a trusted platform for advancing interdisciplinary research and accelerating scientific discoveries.
            </p>

            <div className="h-[1px] bg-white/20 mb-8 max-w-lg"></div>

            <div className="space-y-4 text-xs sm:text-sm font-semibold text-white">
              <div className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 stroke-[2]" />
                <span>Global Collaborative Innovation</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0 stroke-[2]" />
                <span>Accelerating Scientific Discoveries</span>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Panel: Our Mission */}
          <ScrollReveal animation="fade-right" className="bg-[#CBE0FE] text-slate-900 p-12 sm:p-16 lg:p-24 flex flex-col justify-center">

            <div className="text-xs font-semibold text-[#0047BA] uppercase tracking-[0.2em] mb-3">
              OUR DAILY DRIVE
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Our Mission
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-8 max-w-lg">
              Our mission is to support researchers at every stage of their scientific journey by providing end-to-end research assistance, from concept development and project execution to publication in reputed journals. We actively seek collaborative opportunities with academic institutions, research laboratories, and industry partners worldwide to undertake outsourced research projects, foster long-term research collaborations, and contribute to high-quality scientific outcomes.
            </p>

            <div className="h-[1px] bg-slate-400/40 mb-8 max-w-lg"></div>

            <div className="space-y-4 text-xs sm:text-sm font-semibold text-slate-900">
              <div className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#0047BA] shrink-0 stroke-[2.2]" />
                <span>End-to-End Research Assistance</span>
              </div>

              <div className="flex items-center space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#0047BA] shrink-0 stroke-[2.2]" />
                <span>High-Quality Scientific Outcomes</span>
              </div>
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* 6. ETHICAL POLICY / OUR INTEGRITY */}
      <section id="ethical-policy" className="py-24 bg-[#F0F6FE] font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main White Card Container */}
          <ScrollReveal animation="fade-up" className="bg-white rounded-[36px] sm:rounded-[44px] border border-slate-200/80 p-8 sm:p-14 lg:p-16 shadow-xl shadow-slate-200/60 relative overflow-hidden">

            {/* Top Right Ethical Certified Stamp Badge */}
            <div className="absolute top-8 right-8 border-2 border-blue-300/80 rounded-2xl px-4 py-2.5 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest text-center rotate-[10deg] hidden sm:block bg-white/50 backdrop-blur-xs shadow-2xs">
              <div>ETHICAL</div>
              <div>CERTIFIED</div>
            </div>

            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <div className="text-xs font-semibold text-[#0052CC] uppercase tracking-[0.25em]">
                OUR INTEGRITY
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Ethical Policy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Our Commitment to Ethical Research and Quality
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-8 max-w-5xl mx-auto mb-10">

              <div className="flex items-start space-x-4">
                <FileEdit className="w-5 h-5 text-[#0052CC] shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  We are committed to maintaining the highest standards of research integrity, confidentiality, and scientific quality in every project we undertake.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Upload className="w-5 h-5 text-[#0052CC] shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Beyond manuscript writing, we provide complete publication support—including journal selection, manuscript submission, correspondence with journal editors, preparation of reviewer responses, revision of manuscripts, and continuous assistance until successful publication.
                </p>
              </div>

            </div>

            {/* Bottom Highlight Callout Box with Thick Blue Left Border */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#D6E6FF] border-l-4 border-[#0052CC] text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
              Where our team makes substantial intellectual contributions to a research project, authorship may be considered in accordance with internationally accepted publication ethics and the policies of the target journal, with mutual agreement among all collaborators.
            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* 7. CTA BANNER WITH LAB BACKGROUND PHOTO */}
      <section className="relative py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBg}
            alt="Research Consultancy Background"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-slate-950/40"></div>
        </div>

        <ScrollReveal animation="zoom-in" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Ready to Advance Your Research?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-loose sm:leading-[1.8] font-medium">
            Partner with our team of scientists and experts to bring your research vision to life with uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0052CC] hover:bg-[#003B94] shadow-md transition-colors cursor-pointer"
            >
              Get Consultation
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white bg-transparent border border-white/50 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Submit Your Requirement
            </button>
          </div>
        </ScrollReveal>

      </section>

    </div>
  );
}

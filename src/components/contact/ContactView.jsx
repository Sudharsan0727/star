import { useState } from 'react';
import { MapPin, Mail, Phone, ArrowUpRight, ArrowDown, Check } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    domain: 'Genomic Sequencing & Analysis',
    overview: '',
    agreePrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollToForm = () => {
    const elem = document.getElementById('research-inquiry-form');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full font-sans bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <span className="text-[#0052CC] text-xs font-bold uppercase tracking-wider block">
                CONTACT US
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
                Let’s Accelerate Your Discovery
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg font-medium">
                Bridging the gap between theoretical excellence and industrial application. Reach out to our global advisory team to discuss your next breakthrough.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <button
                  onClick={scrollToForm}
                  className="bg-[#0052CC] hover:bg-[#003B94] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                {/* Team Status Badge */}
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Team Member"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Team Member"
                    />
                  </div>
                  <div className="text-xs text-slate-700 font-semibold leading-tight">
                    <div className="text-slate-900 font-bold">Awaiting your brief</div>
                    <div className="text-slate-500 font-normal">Experts online</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Quote Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#F1F5F9] rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-xs relative overflow-hidden flex flex-col justify-end min-h-[260px]">
                
                <div className="bg-white/90 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <p className="italic font-serif text-slate-700 text-xs sm:text-sm leading-relaxed">
                    “Our mission is to translate complex data into decisive clinical and industrial actions. Every partnership begins with a conversation.”
                  </p>
                  <div className="text-xs font-bold text-slate-900 border-t border-slate-100 pt-3">
                    — Dr. Elena Vance, Lead Strategist
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFO SECTION */}
      <section id="research-inquiry-form" className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            
            {/* Left Column: Research Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Research Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Provide your details and we will connect you with the relevant domain lead within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you for reaching out. Our domain lead will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Full Name & Institution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Julian Sterling"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 block">Institution / Organization</label>
                      <input
                        type="text"
                        required
                        placeholder="Global Biogenics Corp"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Research Domain */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Research Domain</label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none bg-white transition-colors"
                    >
                      <option value="Genomic Sequencing & Analysis">Genomic Sequencing & Analysis</option>
                      <option value="Materials Characterization & Testing">Materials Characterization & Testing</option>
                      <option value="Nanotechnology & Thin Films">Nanotechnology & Thin Films</option>
                      <option value="Energy Storage & Batteries">Energy Storage & Batteries</option>
                      <option value="Biotechnology & Life Sciences">Biotechnology & Life Sciences</option>
                      <option value="Computational Modeling & HPC">Computational Modeling & HPC</option>
                    </select>
                  </div>

                  {/* Row 3: Requirement Overview */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Requirement Overview</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the scope of your research needs or the specific challenge you are looking to address..."
                      value={formData.overview}
                      onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl p-4 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-center space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="privacy-check"
                      required
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="privacy-check" className="text-xs text-slate-600 font-medium cursor-pointer">
                      I agree to the <span className="text-[#0052CC] font-semibold underline">Privacy Policy</span> regarding my data processing.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl text-xs sm:text-sm text-center shadow-md transition-colors cursor-pointer"
                  >
                    Initiate Consultation
                  </button>

                </form>
              )}

            </div>

            {/* Right Column: Global HQ & Social Connect (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Global HQ Card */}
              <div className="bg-[#003B94] text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-md">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Global HQ
                </h3>

                <div className="space-y-6">
                  {/* Visit Us */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-[#002D7A] text-white shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-white">Visit Us</div>
                      <div className="text-xs sm:text-sm text-blue-100 leading-relaxed mt-1">
                        Lumina Tower, Science Park Rd<br />
                        Cambridge, CB4 0WG<br />
                        United Kingdom
                      </div>
                    </div>
                  </div>

                  {/* Direct Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-[#002D7A] text-white shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-white">Direct Email</div>
                      <div className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                        intelligence@luminaresearch.com
                      </div>
                    </div>
                  </div>

                  {/* Global Line */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-[#002D7A] text-white shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-white">Global Line</div>
                      <div className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                        +44 (0) 1223 908 700
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Connect Card */}
              <div className="bg-[#090D16] text-white rounded-3xl p-8 space-y-4 shadow-md">
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                  SOCIAL CONNECT
                </span>

                <div className="space-y-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#161B26] hover:bg-[#1F2737] rounded-xl px-4 py-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 transition-colors"
                  >
                    <span>LinkedIn Professional</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href="https://researchgate.net"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#161B26] hover:bg-[#1F2737] rounded-xl px-4 py-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 transition-colors"
                  >
                    <span>ResearchGate Repository</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#161B26] hover:bg-[#1F2737] rounded-xl px-4 py-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 transition-colors"
                  >
                    <span>Google Scholar Index</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. BOTTOM LOCATION / MAP SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] overflow-hidden relative shadow-2xl min-h-[420px] flex items-center justify-center bg-slate-900 border border-slate-200/50">
            
            {/* Embedded Live Google Maps Iframe */}
            <iframe
              title="Cambridge Science Park Google Map"
              src="https://maps.google.com/maps?q=Cambridge%20Science%20Park,%20Milton%20Rd,%20Cambridge%20CB4%200FW,%20UK&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] brightness-[0.95]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Dark Tint Overlay */}
            <div className="absolute inset-0 bg-slate-900/35 pointer-events-none"></div>

            {/* Top-Left Live Badge */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
              <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center space-x-2.5 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Lab Operations: Cambridge Science Park</span>
              </div>
            </div>

            {/* Stylized Map Card Overlay */}
            <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/40 shadow-2xl space-y-3 text-slate-800 my-12 relative z-10">
              <div className="flex items-center space-x-3 text-xs font-bold text-[#0052CC]">
                <MapPin className="w-4 h-4" />
                <span>Cambridge Science Park Lab</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                450 Research Drive, Suite 300<br />
                Innovation Park, Cambridge, MA 02142
              </div>
              <div className="text-xs text-slate-500 font-mono pt-2 border-t border-slate-200">
                Lat: 52.2351° N | Long: 0.1534° E
              </div>
            </div>

            {/* Bottom-Right Open in Google Maps Button */}
            <a
              href="https://maps.google.com/?q=Cambridge+Science+Park"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-full text-xs sm:text-sm flex items-center space-x-2 shadow-xl transition-all z-10 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}

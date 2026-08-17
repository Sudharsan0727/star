import { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select Service of Interest',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', service: 'Select Service of Interest', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F0F6FE] border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Main White Container Card */}
        <div className="bg-white rounded-[36px] sm:rounded-[44px] border border-slate-200/80 p-8 sm:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Form Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              <div>
                <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 leading-snug sm:leading-[1.25] tracking-tight mb-3">
                  Let's Discuss<br />
                  Your Next<br />
                  Breakthrough
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-sm mb-8">
                  Our consultants are ready to help you navigate the complexities of scientific research.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#EAEFF5] rounded-3xl">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out to Star ResearchHub. A research consultant will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-5 py-4 rounded-2xl bg-[#EAEFF5] border-none text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full px-5 py-4 rounded-2xl bg-[#EAEFF5] border-none text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-[#EAEFF5] border-none text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                    >
                      <option>Select Service of Interest</option>
                      <option>Research Paper Writing</option>
                      <option>Journal Publication</option>
                      <option>Scientific Editing</option>
                      <option>Thesis Assistance</option>
                      <option>Proposal Writing</option>
                      <option>Advanced Data Analysis</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message"
                      className="w-full px-5 py-4 rounded-2xl bg-[#EAEFF5] border-none text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#0A0D14] hover:bg-slate-800 transition-colors shadow-md mt-2"
                  >
                    Send Message
                  </button>

                </form>
              )}

            </div>

            {/* Right HQ Panel */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              
              {/* HQ Container Box */}
              <div className="p-8 sm:p-12 rounded-3xl bg-[#EAEFF5] text-center flex flex-col items-center justify-center h-full min-h-[320px]">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-[#0052CC]">
                  <MapPin className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Global Headquarters</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto font-medium">
                  Level 52, Research Plaza, Cambridge Science Park, CB4 0FQ
                </p>
              </div>

              {/* Email & Call Bottom Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#EAEFF5] flex flex-col justify-between space-y-2">
                  <Mail className="w-5 h-5 text-slate-800" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">Email Us</div>
                    <div className="text-xs text-slate-600 font-medium">contact@star.com</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#EAEFF5] flex flex-col justify-between space-y-2">
                  <Phone className="w-5 h-5 text-slate-800" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">Call Us</div>
                    <div className="text-xs text-slate-600 font-medium">+1 (555) 000-8888</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import { Mail, Phone, Clock, Globe, Share2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const companyLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Collaborations', id: 'collaborations' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <footer className="animated-constellation-pattern border-t border-slate-200/60 text-slate-600 text-xs pt-16 pb-8 relative overflow-hidden font-sans">
      
      {/* Constellation Network SVG Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Left Network SVG */}
        <svg
          className="absolute top-0 left-0 w-1/3 h-full opacity-35"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="50" y1="80" x2="120" y2="150" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="120" y1="150" x2="200" y2="100" stroke="#93C5FD" strokeWidth="1" />
          <line x1="200" y1="100" x2="280" y2="200" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="120" y1="150" x2="60" y2="300" stroke="#93C5FD" strokeWidth="1" />
          <line x1="60" y1="300" x2="150" y2="380" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="150" y1="380" x2="240" y2="320" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="60" y1="300" x2="80" y2="480" stroke="#93C5FD" strokeWidth="1" />
          <line x1="80" y1="480" x2="180" y2="520" stroke="#60A5FA" strokeWidth="1.2" />

          {/* Pattern Nodes */}
          <circle cx="50" cy="80" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="120" cy="150" r="4.5" fill="#2563EB" />
          <circle cx="200" cy="100" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="280" cy="200" r="4.5" fill="#1D4ED8" />
          <circle cx="60" cy="300" r="3.5" fill="#2563EB" className="animate-pattern-pulse" />
          <circle cx="150" cy="380" r="4.5" fill="#1D4ED8" />
          <circle cx="240" cy="320" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="80" cy="480" r="4" fill="#2563EB" />
          <circle cx="180" cy="520" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
        </svg>

        {/* Right Network SVG */}
        <svg
          className="absolute top-0 right-0 w-1/3 h-full opacity-35"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="350" y1="60" x2="280" y2="120" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="280" y1="120" x2="220" y2="40" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="280" y1="120" x2="300" y2="220" stroke="#93C5FD" strokeWidth="1" />
          <line x1="300" y1="220" x2="360" y2="310" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pattern-pulse" />
          <line x1="300" y1="220" x2="210" y2="280" stroke="#93C5FD" strokeWidth="1" />
          <line x1="210" y1="280" x2="260" y2="420" stroke="#60A5FA" strokeWidth="1.2" />
          <line x1="260" y1="420" x2="350" y2="480" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 4" className="animate-pattern-pulse" />

          {/* Pattern Nodes */}
          <circle cx="350" cy="60" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="280" cy="120" r="4.5" fill="#2563EB" />
          <circle cx="220" cy="40" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="300" cy="220" r="4.5" fill="#1D4ED8" />
          <circle cx="360" cy="310" r="3.5" fill="#3B82F6" className="animate-pattern-pulse" />
          <circle cx="210" cy="280" r="4" fill="#2563EB" />
          <circle cx="260" cy="420" r="4.5" fill="#1D4ED8" className="animate-pattern-pulse" />
          <circle cx="350" cy="480" r="3.5" fill="#3B82F6" />
        </svg>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-300/60">
          
          {/* Brand Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="font-extrabold text-2xl text-slate-900 tracking-tight text-left cursor-pointer focus:outline-none"
            >
              Star ResearchHub
            </button>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs font-medium">
              Precision-driven consultancy for the global research community.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">COMPANY</div>
            <ul className="space-y-3">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={(e) => handleLinkClick(e, item)}
                    className="text-slate-800 hover:text-[#0052CC] font-medium transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">CONTACT</div>
            <ul className="space-y-3.5">
              <li className="flex items-center space-x-3 text-slate-800 font-medium">
                <Mail className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.2]" />
                <span>support@lorem.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-800 font-medium">
                <Phone className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.2]" />
                <span>+1 800 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-800 font-medium">
                <Clock className="w-4 h-4 text-slate-900 shrink-0 stroke-[2.2]" />
                <span>Mon–Fri 09.00–18.00</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">FOLLOW US</div>
            <div className="flex items-center space-x-3">
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-800 hover:bg-[#0052CC] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-800 hover:bg-[#0052CC] hover:text-white transition-colors"
                title="Twitter"
              >
                <Share2 className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div className="font-bold text-slate-900">
            © 2026 Star ResearchHub.
          </div>

          <div className="flex items-center space-x-8 font-bold text-slate-900">
            <a href="#" className="hover:text-[#0052CC] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

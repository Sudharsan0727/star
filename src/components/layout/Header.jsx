import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Layers, Compass, FileText, UserCheck, ShieldCheck, BarChart2, Globe, Sparkles } from 'lucide-react';

export default function Header({ currentPage = 'home', onNavigate, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const submenus = {
    about: [
      { name: "Who We Are", action: 'about', scrollId: 'who-we-are', icon: <Globe className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Message from Director", action: 'about', scrollId: 'director-message', icon: <UserCheck className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Our Vision & Mission", action: 'about', scrollId: 'vision-mission', icon: <Sparkles className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Ethical Policy", action: 'about', scrollId: 'ethical-policy', icon: <ShieldCheck className="w-4 h-4 text-[#0052CC]" /> },
    ],
    services: [
      { name: "Core Service Offerings", action: 'services', scrollId: 'core-services', icon: <Layers className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Why Choose Us", action: 'services', scrollId: 'core-services', icon: <Compass className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Manuscript & Publication", action: 'services', scrollId: 'core-services', icon: <FileText className="w-4 h-4 text-[#0052CC]" /> },
    ],
    expertise: [
      { name: "Research domains", action: 'expertise-domains', icon: <BarChart2 className="w-4 h-4 text-[#0052CC]" /> },
      { name: "In Application-Oriented Research", action: 'expertise-application', icon: <Compass className="w-4 h-4 text-[#0052CC]" /> },
    ],
    collaborations: [
      { name: "Ongoing Collaborative Projects", action: 'collaborations-ongoing', icon: <Globe className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Published works", action: 'collaborations-published', icon: <FileText className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Completed projects", action: 'collaborations-completed', icon: <Sparkles className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Research Experts", action: 'collaborations-experts', icon: <UserCheck className="w-4 h-4 text-[#0052CC]" /> },
      { name: "Join Our Team", action: 'join-our-team', icon: <Globe className="w-4 h-4 text-[#0052CC]" /> },
    ],
  };

  const navItems = [
    { id: 'home', name: 'Home', hasDropdown: false },
    { id: 'about', name: 'About Us', hasDropdown: true },
    { id: 'services', name: 'Services', hasDropdown: true },
    { id: 'expertise', name: 'Expertise', hasDropdown: true },
    { id: 'facilities', name: 'Facilities', hasDropdown: false },
    { id: 'collaborations', name: 'Collaborations', hasDropdown: true },
    { id: 'contact', name: 'Contact Us', hasDropdown: false },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  const handleSubmenuClick = (sub) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(sub.action);
      if (sub.scrollId) {
        setTimeout(() => {
          const elem = document.getElementById(sub.scrollId);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md">
      
      {/* Tier 1: Top Dark Blue Announcement Bar */}
      <div className="bg-gradient-to-r from-[#002D7A] via-[#003B94] to-[#004CB8] text-white py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo (Top Left) */}
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-extrabold text-base text-[#003B94] shadow-sm">
              S
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Star ResearchHub
            </span>
          </button>

          {/* Announcement Tagline (Top Right) */}
          <div className="hidden md:flex items-center space-x-2 text-xs font-medium tracking-wide text-white/95">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
            <span className="italic font-semibold">Empowering Research, Innovation, and Scientific Excellence.</span>
          </div>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 text-white hover:text-blue-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Tier 2: Main Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Menu Items */}
          <nav className="hidden lg:flex items-center space-x-9 text-xs font-semibold">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const hasSub = item.hasDropdown && submenus[item.id];
              
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center space-x-1.5 px-1 py-2 text-base transition-colors hover:text-[#0052CC] cursor-pointer focus:outline-none ${
                      isActive ? 'text-[#0052CC] font-bold' : 'text-slate-800'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-500 transition-transform group-hover:rotate-180" />}
                  </button>

                  {/* Dropdown Submenu Overlay */}
                  {hasSub && (activeDropdown === item.id) && (
                    <div className="absolute top-full left-0 w-64 pt-2 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        {submenus[item.id].map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSubmenuClick(sub)}
                            className="w-full text-left flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors cursor-pointer"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-white shrink-0">
                              {sub.icon}
                            </div>
                            <span>{sub.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </nav>

          {/* Search & Get in Touch CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* <button className="p-1.5 text-slate-700 hover:text-[#0052CC] transition-colors focus:outline-none" title="Search">
              <Search className="w-4 h-4" />
            </button> */}

            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#0052CC] to-[#003B94] hover:from-[#0040A8] hover:to-[#002D7A] shadow-md transition-all duration-200 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="text-[11px] font-semibold text-slate-600 pb-2 border-b border-slate-100 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>Empowering Research, Innovation, and Scientific Excellence.</span>
          </div>

          {navItems.map((item) => (
            <div key={item.id} className="space-y-1">
              <button
                onClick={(e) => {
                  if (!item.hasDropdown) setMobileOpen(false);
                  handleNavClick(e, item);
                }}
                className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0052CC] rounded-lg flex items-center justify-between"
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {/* Mobile Submenu List */}
              {item.hasDropdown && submenus[item.id] && (
                <div className="pl-6 space-y-1 border-l-2 border-blue-100 ml-3 py-1">
                  {submenus[item.id].map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleSubmenuClick(sub)}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[#0052CC]"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={() => {
              setMobileOpen(false);
              if (onNavigate) onNavigate('contact');
            }}
            className="w-full mt-2 py-3 rounded-full text-xs font-bold text-white bg-[#0052CC] text-center"
          >
            Get in Touch
          </button>
        </div>
      )}

    </header>
  );
}

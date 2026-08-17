import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children, currentPage, onNavigate, onOpenContact }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0052CC] selection:text-white font-sans flex flex-col justify-between">
      <Header
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenContact={onOpenContact}
      />
      
      <main className="grow">
        {children}
      </main>

      <Footer onNavigate={onNavigate} />
      <ScrollToTop />
    </div>
  );
}

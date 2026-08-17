import { useState } from 'react';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import FacilitiesPage from './pages/FacilitiesPage';
import CollaborationsPage from './pages/CollaborationsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expertiseTab, setExpertiseTab] = useState('domains');
  const [collaborationsTab, setCollaborationsTab] = useState('ongoing');

  const scrollToContact = () => {
    if (currentPage !== 'home' && currentPage !== 'contact') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigate = (pageId, tab = null) => {
    if (pageId === 'collaborations-ongoing') {
      setCurrentPage('collaborations');
      setCollaborationsTab('ongoing');
    } else if (pageId === 'collaborations-completed') {
      setCurrentPage('collaborations');
      setCollaborationsTab('completed');
    } else if (pageId === 'collaborations-experts') {
      setCurrentPage('collaborations');
      setCollaborationsTab('experts');
    } else if (pageId === 'collaborations-published') {
      setCurrentPage('collaborations');
      setCollaborationsTab('published');
    } else if (pageId === 'collaborations-partners') {
      setCurrentPage('collaborations');
      setCollaborationsTab('partners');
    } else if (pageId === 'expertise-application') {
      setCurrentPage('expertise');
      setExpertiseTab('application');
    } else if (pageId === 'expertise-domains') {
      setCurrentPage('expertise');
      setExpertiseTab('domains');
    } else {
      if (pageId === 'collaborations') {
        setCollaborationsTab(tab || 'ongoing');
      }
      if (pageId === 'expertise') {
        setExpertiseTab(tab || 'domains');
      }
      setCurrentPage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onOpenContact={scrollToContact} />;
      case 'services':
        return <ServicesPage onOpenContact={scrollToContact} />;
      case 'expertise':
        return <ExpertisePage activeTab={expertiseTab} onOpenContact={scrollToContact} />;
      case 'facilities':
        return <FacilitiesPage onOpenContact={scrollToContact} />;
      case 'collaborations':
        return <CollaborationsPage activeTab={collaborationsTab} onOpenContact={scrollToContact} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onOpenContact={scrollToContact} />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      onNavigate={handleNavigate}
      onOpenContact={scrollToContact}
    >
      {renderPage()}
    </Layout>
  );
}

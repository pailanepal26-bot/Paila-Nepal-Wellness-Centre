import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { EmergencyBanner } from './components/common/EmergencyBanner';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SupportModal } from './components/common/SupportModal';
import { TrainingModal } from './components/common/TrainingModal';
import { CourseProspectusModal } from './components/common/CourseProspectusModal';
import { EventRegistrationModal } from './components/common/EventRegistrationModal';
import { ResourceViewerModal } from './components/common/ResourceViewerModal';
import { LegalModal, LegalTab } from './components/common/LegalModal';
import { AdminModal } from './components/common/AdminModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { MentalHealthPage } from './components/pages/MentalHealthPage';
import { DisasterManagementPage } from './components/pages/DisasterManagementPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { TrainingPage } from './components/pages/TrainingPage';
import { EventsPage } from './components/pages/EventsPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { GetInvolvedPage } from './components/pages/GetInvolvedPage';
import { ContactPage } from './components/pages/ContactPage';
import { FAQPage } from './components/pages/FAQPage';
import { ResourceItem, PailaEvent } from './types';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [supportModalOpen, setSupportModalOpen] = useState<boolean>(false);
  const [supportModalType, setSupportModalType] = useState<string>('Individual Counselling');
  const [trainingModalOpen, setTrainingModalOpen] = useState<boolean>(false);
  const [prospectusModalOpen, setProspectusModalOpen] = useState<boolean>(false);
  const [selectedEventForReg, setSelectedEventForReg] = useState<PailaEvent | null>(null);
  const [eventRegModalOpen, setEventRegModalOpen] = useState<boolean>(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');

  // Handle URL hash sync or back-forward navigation if user uses browser history
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && [
        'home', 'about', 'services', 'mental-health', 'disaster-management',
        'training', 'programs', 'events', 'resources', 'get-involved', 'contact', 'faq'
      ].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSupport = (type?: string) => {
    if (type) setSupportModalType(type);
    setSupportModalOpen(true);
  };

  const handleOpenTraining = () => {
    setTrainingModalOpen(true);
  };

  const handleOpenProspectus = () => {
    setProspectusModalOpen(true);
  };

  const handleRegisterEvent = (event: PailaEvent) => {
    setSelectedEventForReg(event);
    setEventRegModalOpen(true);
  };

  const handleOpenResource = (res: ResourceItem) => {
    setSelectedResource(res);
  };

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5FAF8] text-[#263238] font-sans antialiased">
      {/* Scope and Non-Emergency Banner */}
      <EmergencyBanner />

      {/* Main Navigation Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleNavigate}
        onOpenSupportModal={() => handleOpenSupport()}
        onOpenTrainingModal={handleOpenTraining}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenSupportModal={() => handleOpenSupport()}
            onOpenTrainingModal={handleOpenTraining}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenSupportModal={() => handleOpenSupport()}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenSupportModal={handleOpenSupport}
            onOpenTrainingModal={handleOpenTraining}
          />
        )}

        {currentTab === 'mental-health' && (
          <MentalHealthPage
            onNavigate={handleNavigate}
            onOpenSupportModal={handleOpenSupport}
          />
        )}

        {currentTab === 'disaster-management' && (
          <DisasterManagementPage
            onNavigate={handleNavigate}
            onOpenTrainingModal={handleOpenTraining}
          />
        )}

        {currentTab === 'training' && (
          <TrainingPage
            onOpenTrainingModal={handleOpenTraining}
            onOpenProspectus={handleOpenProspectus}
          />
        )}

        {currentTab === 'programs' && (
          <ProgramsPage
            onNavigate={handleNavigate}
            onOpenSupportModal={() => handleOpenSupport()}
            onOpenTrainingModal={handleOpenTraining}
          />
        )}

        {currentTab === 'events' && (
          <EventsPage
            onRegisterEvent={handleRegisterEvent}
            onOpenTrainingModal={handleOpenTraining}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'resources' && (
          <ResourcesPage
            onOpenResource={handleOpenResource}
          />
        )}

        {currentTab === 'get-involved' && (
          <GetInvolvedPage
            onOpenTrainingModal={handleOpenTraining}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}

        {currentTab === 'faq' && (
          <FAQPage
            onOpenSupportModal={() => handleOpenSupport()}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavigate}
        onOpenLegalModal={handleOpenLegal}
      />

      {/* Modals & Dialogs */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        defaultSupportType={supportModalType}
      />

      <TrainingModal
        isOpen={trainingModalOpen}
        onClose={() => setTrainingModalOpen(false)}
        onOpenProspectus={handleOpenProspectus}
      />

      <CourseProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
        onOpenApplyModal={handleOpenTraining}
      />

      <EventRegistrationModal
        event={selectedEventForReg}
        isOpen={eventRegModalOpen}
        onClose={() => setEventRegModalOpen(false)}
      />

      <ResourceViewerModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalModalTab}
      />

      <AdminModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AdminProvider>
        <MainApp />
      </AdminProvider>
    </LanguageProvider>
  );
}

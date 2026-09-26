import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminSettings, FAQItem, PailaEvent, LeadershipMember } from '../types';
import { initialAdminSettings, initialFAQs, initialEvents, initialLeadership } from '../data/initialData';

interface AdminContextType {
  settings: AdminSettings;
  updateSettings: (newSettings: Partial<AdminSettings>) => void;
  faqs: FAQItem[];
  addFAQ: (faq: Omit<FAQItem, 'id'>) => void;
  updateFAQ: (id: string, faq: Partial<FAQItem>) => void;
  deleteFAQ: (id: string) => void;
  events: PailaEvent[];
  addEvent: (event: Omit<PailaEvent, 'id'>) => void;
  updateEvent: (id: string, event: Partial<PailaEvent>) => void;
  deleteEvent: (id: string) => void;
  leadership: LeadershipMember[];
  updateLeadershipMember: (id: string, member: Partial<LeadershipMember>) => void;
  resetAll: () => void;
  exportJSON: () => void;
  importJSON: (jsonStr: string) => boolean;
  isAdminModalOpen: boolean;
  openAdminModal: () => void;
  closeAdminModal: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>(() => {
    try {
      const saved = localStorage.getItem('paila_admin_settings');
      return saved ? { ...initialAdminSettings, ...JSON.parse(saved) } : initialAdminSettings;
    } catch {
      return initialAdminSettings;
    }
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    try {
      const saved = localStorage.getItem('paila_faqs');
      return saved ? JSON.parse(saved) : initialFAQs;
    } catch {
      return initialFAQs;
    }
  });

  const [events, setEvents] = useState<PailaEvent[]>(() => {
    try {
      const saved = localStorage.getItem('paila_events');
      return saved ? JSON.parse(saved) : initialEvents;
    } catch {
      return initialEvents;
    }
  });

  const [leadership, setLeadership] = useState<LeadershipMember[]>(() => {
    try {
      const saved = localStorage.getItem('paila_leadership');
      return saved ? JSON.parse(saved) : initialLeadership;
    } catch {
      return initialLeadership;
    }
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('paila_admin_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('paila_faqs', JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem('paila_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('paila_leadership', JSON.stringify(leadership));
  }, [leadership]);

  const updateSettings = (newSettings: Partial<AdminSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addFAQ = (faq: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = {
      ...faq,
      id: `faq-${Date.now()}`
    };
    setFaqs((prev) => [newFaq, ...prev]);
  };

  const updateFAQ = (id: string, updatedFields: Partial<FAQItem>) => {
    setFaqs((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updatedFields } : f))
    );
  };

  const deleteFAQ = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  const addEvent = (eventData: Omit<PailaEvent, 'id'>) => {
    const newEv: PailaEvent = {
      ...eventData,
      id: `event-${Date.now()}`
    };
    setEvents((prev) => [newEv, ...prev]);
  };

  const updateEvent = (id: string, updatedFields: Partial<PailaEvent>) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updatedFields } : e))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const updateLeadershipMember = (id: string, updatedFields: Partial<LeadershipMember>) => {
    setLeadership((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updatedFields } : m))
    );
  };

  const resetAll = () => {
    setSettings(initialAdminSettings);
    setFaqs(initialFAQs);
    setEvents(initialEvents);
    setLeadership(initialLeadership);
    localStorage.removeItem('paila_admin_settings');
    localStorage.removeItem('paila_faqs');
    localStorage.removeItem('paila_events');
    localStorage.removeItem('paila_leadership');
  };

  const exportJSON = () => {
    const data = {
      version: '1.2',
      exportedAt: new Date().toISOString(),
      settings,
      faqs,
      events,
      leadership
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `paila-nepal-cms-export-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.settings) {
        setSettings({ ...initialAdminSettings, ...parsed.settings });
      }
      if (Array.isArray(parsed.faqs)) {
        setFaqs(parsed.faqs);
      }
      if (Array.isArray(parsed.events)) {
        setEvents(parsed.events);
      }
      if (Array.isArray(parsed.leadership)) {
        setLeadership(parsed.leadership);
      }
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        settings,
        updateSettings,
        faqs,
        addFAQ,
        updateFAQ,
        deleteFAQ,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        leadership,
        updateLeadershipMember,
        resetAll,
        exportJSON,
        importJSON,
        isAdminModalOpen,
        openAdminModal: () => setIsAdminModalOpen(true),
        closeAdminModal: () => setIsAdminModalOpen(false),
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

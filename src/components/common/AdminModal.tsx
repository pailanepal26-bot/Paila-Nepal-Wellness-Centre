import React, { useState } from 'react';
import {
  X,
  Settings,
  Bell,
  Phone,
  BookOpen,
  HelpCircle,
  Save,
  RotateCcw,
  Download,
  Upload,
  Check,
  Calendar,
  UserCheck,
  Eye,
  Plus,
  Trash2,
  Edit2
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { AdminSettings, PailaEvent, LeadershipMember } from '../../types';

export const AdminModal: React.FC = () => {
  const {
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
    closeAdminModal,
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'announcement' | 'training' | 'events' | 'leadership' | 'contact' | 'faqs' | 'preview' | 'backup'>('announcement');
  const [localSettings, setLocalSettings] = useState<AdminSettings>(settings);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // New Event Form State
  const [newEvent, setNewEvent] = useState<Omit<PailaEvent, 'id'>>({
    title: '',
    titleNe: '',
    category: 'workshop',
    categoryNe: 'कार्यशाला',
    date: '',
    dateNe: '',
    time: '10:00 AM – 3:00 PM',
    timeNe: 'बिहान १०:०० – दिउँसो ३:०० बजे',
    location: 'Paila Nepal Wellness Centre, Jorpati, Kathmandu',
    locationNe: 'पाइला नेपाल वेलनेस सेन्टर, जोरपाटी, काठमाडौं',
    description: '',
    descriptionNe: '',
    status: 'upcoming',
    registrationOpen: true,
    capacity: '25 Participants',
    capacityNe: '२५ जना सहभागी',
    feeNote: 'Free Community Initiative',
    feeNoteNe: 'निःशुल्क सामुदायिक पहल',
  });

  // FAQ Form State
  const [newFaq, setNewFaq] = useState({
    category: 'General',
    question: '',
    questionNe: '',
    answer: '',
    answerNe: ''
  });

  if (!isAdminModalOpen) return null;

  const handleSaveSettings = () => {
    updateSettings(localSettings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = importJSON(content);
        if (ok) {
          setImportStatus('Successfully imported configuration!');
          setTimeout(() => setImportStatus(null), 3000);
        } else {
          setImportStatus('Invalid JSON format.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1457A6] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-white" />
            <div>
              <h2 className="text-base font-bold">Paila Nepal Content Management Panel (CMS)</h2>
              <p className="text-xs text-white/80">
                Manage announcements, training batches, community workshops, leadership profiles & site content
              </p>
            </div>
          </div>
          <button
            onClick={closeAdminModal}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('announcement')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'announcement'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Notice Bar</span>
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'training'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Training Batches</span>
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'events'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Events & Workshops ({events.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'leadership'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Leadership Profiles</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact & Address</span>
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'faqs'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Manage FAQs ({faqs.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-white text-[#008C4A] border-b-2 border-[#008C4A]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Site Preview</span>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`py-3 px-4 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'backup'
                ? 'bg-white text-[#1457A6] border-b-2 border-[#1457A6]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Backup & Sync</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-[#008C4A]" />
              <span>Settings and modifications updated successfully! Changes are live across the site.</span>
            </div>
          )}

          {/* TAB 1: Announcement Bar */}
          {activeTab === 'announcement' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-800">Top Announcement Banner</h4>
                  <p className="text-xs text-slate-500">Show or hide the prominent notification stripe at the top of every page</p>
                </div>
                <input
                  type="checkbox"
                  checked={localSettings.announcementActive}
                  onChange={(e) => setLocalSettings({ ...localSettings, announcementActive: e.target.checked })}
                  className="w-5 h-5 rounded text-[#1457A6] focus:ring-[#1457A6] cursor-pointer"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Announcement Text (English)
                </label>
                <textarea
                  rows={2}
                  value={localSettings.announcementTextEn}
                  onChange={(e) => setLocalSettings({ ...localSettings, announcementTextEn: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Announcement Text (Nepali - नेपाली)
                </label>
                <textarea
                  rows={2}
                  value={localSettings.announcementTextNe}
                  onChange={(e) => setLocalSettings({ ...localSettings, announcementTextNe: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Training Batches */}
          {activeTab === 'training' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Next Batch Status / Dates (English)
                  </label>
                  <input
                    type="text"
                    value={localSettings.nextTrainingBatchEn}
                    onChange={(e) => setLocalSettings({ ...localSettings, nextTrainingBatchEn: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Next Batch Status / Dates (Nepali)
                  </label>
                  <input
                    type="text"
                    value={localSettings.nextTrainingBatchNe}
                    onChange={(e) => setLocalSettings({ ...localSettings, nextTrainingBatchNe: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Fee Note / Financial Info (English)
                  </label>
                  <input
                    type="text"
                    value={localSettings.trainingFeeNoteEn}
                    onChange={(e) => setLocalSettings({ ...localSettings, trainingFeeNoteEn: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Fee Note / Financial Info (Nepali)
                  </label>
                  <input
                    type="text"
                    value={localSettings.trainingFeeNoteNe}
                    onChange={(e) => setLocalSettings({ ...localSettings, trainingFeeNoteNe: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Events & Workshops */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              {/* Add New Event Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#008C4A]" />
                  <span>Create New Community Workshop / Event</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Event Title (English)"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="p-2.5 border border-slate-300 rounded-xl text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Event Title (Nepali)"
                    value={newEvent.titleNe}
                    onChange={(e) => setNewEvent({ ...newEvent, titleNe: e.target.value })}
                    className="p-2.5 border border-slate-300 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Category</label>
                    <select
                      value={newEvent.category}
                      onChange={(e: any) => setNewEvent({
                        ...newEvent,
                        category: e.target.value,
                        categoryNe: e.target.value === 'workshop' ? 'कार्यशाला' : e.target.value === 'school-program' ? 'विद्यालय कार्यक्रम' : e.target.value === 'drill' ? 'पूर्वतयारी अभ्यास' : e.target.value === 'training' ? 'तालिम' : 'सामुदायिक समूह'
                      })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs bg-white"
                    >
                      <option value="workshop">Workshop</option>
                      <option value="school-program">School Program</option>
                      <option value="drill">Disaster Drill</option>
                      <option value="training">Training</option>
                      <option value="community">Community</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Date (English)</label>
                    <input
                      type="text"
                      placeholder="e.g. Saturday, Nov 14, 2026"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Date (Nepali)</label>
                    <input
                      type="text"
                      placeholder="उदा: शनिबार, मंसिर १"
                      value={newEvent.dateNe}
                      onChange={(e) => setNewEvent({ ...newEvent, dateNe: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Location (English)"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Location (Nepali)"
                    value={newEvent.locationNe}
                    onChange={(e) => setNewEvent({ ...newEvent, locationNe: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <textarea
                    rows={2}
                    placeholder="Description (English)"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="Description (Nepali)"
                    value={newEvent.descriptionNe}
                    onChange={(e) => setNewEvent({ ...newEvent, descriptionNe: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (newEvent.title && newEvent.date) {
                      addEvent(newEvent);
                      setNewEvent({
                        title: '',
                        titleNe: '',
                        category: 'workshop',
                        categoryNe: 'कार्यशाला',
                        date: '',
                        dateNe: '',
                        time: '10:00 AM – 3:00 PM',
                        timeNe: 'बिहान १०:०० – दिउँसो ३:०० बजे',
                        location: 'Paila Nepal Wellness Centre, Jorpati, Kathmandu',
                        locationNe: 'पाइला नेपाल वेलनेस सेन्टर, जोरपाटी, काठमाडौं',
                        description: '',
                        descriptionNe: '',
                        status: 'upcoming',
                        registrationOpen: true,
                        capacity: '25 Participants',
                        capacityNe: '२५ जना सहभागी',
                        feeNote: 'Free Community Initiative',
                        feeNoteNe: 'निःशुल्क सामुदायिक पहल',
                      });
                    }
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer"
                >
                  Publish New Event
                </button>
              </div>

              {/* Existing Events List */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                  Active & Scheduled Events ({events.length})
                </h4>
                {events.map((ev) => (
                  <div key={ev.id} className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start justify-between gap-4 text-xs">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{ev.title}</span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          {ev.category}
                        </span>
                      </div>
                      <p className="text-slate-500 text-[11px]">{ev.date} • {ev.location}</p>
                      <p className="text-slate-600 line-clamp-1">{ev.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateEvent(ev.id, { registrationOpen: !ev.registrationOpen })}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer ${
                          ev.registrationOpen ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {ev.registrationOpen ? 'Reg: Open' : 'Reg: Closed'}
                      </button>
                      <button
                        onClick={() => deleteEvent(ev.id)}
                        className="text-rose-500 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 cursor-pointer"
                        title="Delete event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Leadership Profiles */}
          {activeTab === 'leadership' && (
            <div className="space-y-6">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900">
                <p className="font-bold">Required Leadership Verification Notice:</p>
                <p className="text-[11px]">
                  All academic and professional details must reflect authentic qualifications provided by the organization.
                </p>
              </div>

              {leadership.map((member) => (
                <div key={member.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{member.name} ({member.role})</h4>
                      <p className="text-xs text-slate-500 font-['Noto_Sans_Devanagari',sans-serif]">{member.nameNe} ({member.roleNe})</p>
                    </div>
                    <span className="text-[10px] bg-white px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 font-medium">
                      Leadership Verified
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Professional Titles / Credentials (e.g. Psychologist, Advocate)
                    </label>
                    <input
                      type="text"
                      value={member.titles.join(', ')}
                      onChange={(e) => updateLeadershipMember(member.id, { titles: e.target.value.split(',').map(s => s.trim()) })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Bio Statement (English)
                    </label>
                    <textarea
                      rows={2}
                      value={member.bio}
                      onChange={(e) => updateLeadershipMember(member.id, { bio: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Bio Statement (Nepali)
                    </label>
                    <textarea
                      rows={2}
                      value={member.bioNe}
                      onChange={(e) => updateLeadershipMember(member.id, { bioNe: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xl text-xs bg-white font-['Noto_Sans_Devanagari',sans-serif]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: Contact & Location */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Primary Phone (Phone / WhatsApp)
                  </label>
                  <input
                    type="text"
                    value={localSettings.contactPhone1}
                    onChange={(e) => setLocalSettings({ ...localSettings, contactPhone1: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Secondary Phone (Phone / Viber)
                  </label>
                  <input
                    type="text"
                    value={localSettings.contactPhone2}
                    onChange={(e) => setLocalSettings({ ...localSettings, contactPhone2: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={localSettings.contactEmail}
                    onChange={(e) => setLocalSettings({ ...localSettings, contactEmail: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Facebook URL
                  </label>
                  <input
                    type="text"
                    value={localSettings.facebookUrl}
                    onChange={(e) => setLocalSettings({ ...localSettings, facebookUrl: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Physical Address (English)
                </label>
                <input
                  type="text"
                  value={localSettings.addressEn}
                  onChange={(e) => setLocalSettings({ ...localSettings, addressEn: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Physical Address (Nepali)
                </label>
                <input
                  type="text"
                  value={localSettings.addressNe}
                  onChange={(e) => setLocalSettings({ ...localSettings, addressNe: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6]"
                />
              </div>
            </div>
          )}

          {/* TAB 6: FAQs Management */}
          {activeTab === 'faqs' && (
            <div className="space-y-5">
              {/* Add New FAQ Form */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                  Add New FAQ
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Question (English)"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Question (Nepali)"
                    value={newFaq.questionNe}
                    onChange={(e) => setNewFaq({ ...newFaq, questionNe: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <textarea
                    rows={2}
                    placeholder="Answer (English)"
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="Answer (Nepali)"
                    value={newFaq.answerNe}
                    onChange={(e) => setNewFaq({ ...newFaq, answerNe: e.target.value })}
                    className="p-2 border border-slate-300 rounded-xl text-xs"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (newFaq.question && newFaq.answer) {
                      addFAQ(newFaq);
                      setNewFaq({ category: 'General', question: '', questionNe: '', answer: '', answerNe: '' });
                    }
                  }}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer"
                >
                  Save New FAQ
                </button>
              </div>

              {/* Current FAQs List */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                  Existing FAQs ({faqs.length})
                </h4>
                {faqs.map((faq) => (
                  <div key={faq.id} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start justify-between gap-3 text-xs">
                    <div className="flex-1 space-y-1">
                      <p className="font-semibold text-slate-800">{faq.question}</p>
                      <p className="text-slate-600 line-clamp-2">{faq.answer}</p>
                    </div>
                    <button
                      onClick={() => deleteFAQ(faq.id)}
                      className="text-red-500 hover:text-red-700 font-medium shrink-0 cursor-pointer p-1"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: Live Site Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900">
                <p className="font-bold">Real-Time Component Preview:</p>
                <p className="text-[11px]">
                  Here is how your modified settings and announcements will render to visitors in both English and Nepali.
                </p>
              </div>

              {/* 1. Preview Top Banner */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  1. Top Announcement Stripe Preview
                </span>
                {localSettings.announcementActive ? (
                  <div className="bg-gradient-to-r from-[#1457A6] via-[#008C4A] to-[#1457A6] text-white text-xs py-2 px-4 rounded-xl flex items-center justify-between">
                    <span>{localSettings.announcementTextEn}</span>
                    <span className="text-[11px] underline opacity-90">{localSettings.contactPhone1}</span>
                  </div>
                ) : (
                  <div className="p-3 bg-slate-100 rounded-xl text-center text-xs text-slate-400 italic">
                    Announcement Banner is currently disabled.
                  </div>
                )}
              </div>

              {/* 2. Preview Training Stripe */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Training Page Batch Card Preview
                </span>
                <div className="p-4 bg-[#ebf3fc] border border-[#1457A6]/20 rounded-2xl flex items-center justify-between text-xs text-[#1457A6]">
                  <div>
                    <span className="font-bold block">{localSettings.nextTrainingBatchEn}</span>
                    <span className="text-slate-600 text-[11px]">{localSettings.trainingFeeNoteEn}</span>
                  </div>
                  <span className="px-3 py-1.5 bg-[#1457A6] text-white rounded-lg font-bold text-xs">
                    Apply / Enquire
                  </span>
                </div>
              </div>

              {/* 3. Preview Footer Contact */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Contact Information Preview
                </span>
                <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-1.5">
                  <p className="font-bold text-white/90">Paila Nepal Wellness Centre</p>
                  <p className="text-slate-400">{localSettings.addressEn}</p>
                  <p className="text-[#55B8E8]">{localSettings.contactPhone1} / {localSettings.contactPhone2}</p>
                  <p className="text-slate-300">{localSettings.contactEmail}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: Backup & Export */}
          {activeTab === 'backup' && (
            <div className="space-y-5">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-800">Export Complete Site Configuration</h4>
                <p className="text-xs text-slate-600">
                  Download all custom changes, announcements, events, leadership updates, contact details, and FAQs as a single JSON file.
                </p>
                <button
                  onClick={exportJSON}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#1457A6] hover:bg-[#0f4280] rounded-xl cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON File</span>
                </button>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-800">Import Configuration</h4>
                <p className="text-xs text-slate-600">
                  Upload a previously saved configuration file to restore customized settings.
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#ebf3fc] file:text-[#1457A6] hover:file:bg-[#dce9f8] cursor-pointer"
                />
                {importStatus && (
                  <p className="text-xs text-emerald-600 font-medium mt-1">{importStatus}</p>
                )}
              </div>

              <div className="p-4 bg-red-50 rounded-2xl border border-red-200 space-y-2">
                <h4 className="font-bold text-red-800">Reset to Defaults</h4>
                <p className="text-xs text-red-600">
                  Revert all customized settings, announcements, events, and FAQs back to the initial verified state.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all site settings to defaults?')) {
                      resetAll();
                      setLocalSettings(settings);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Everything to Default</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0 flex items-center justify-between gap-3">
          <p className="text-[11px] text-slate-500">
            Paila Nepal Wellness Centre Management Console
          </p>
          <div className="flex gap-2">
            <button
              onClick={closeAdminModal}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

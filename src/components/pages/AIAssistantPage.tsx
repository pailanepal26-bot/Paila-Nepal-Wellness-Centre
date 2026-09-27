import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  ShieldCheck,
  Send,
  Printer,
  Copy,
  Check,
  RotateCcw,
  Compass,
  Home,
  Heart,
  FileText,
  AlertTriangle,
  Users,
  Clock,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { AIMessage } from '../../types';

interface AIAssistantPageProps {
  onOpenSupportModal: () => void;
  onOpenTrainingModal: () => void;
}

export const AIAssistantPage: React.FC<AIAssistantPageProps> = ({
  onOpenSupportModal,
  onOpenTrainingModal
}) => {
  const { isNepali } = useLanguage();
  const [activeTab, setActiveTab] = useState<'chat' | 'disaster' | 'journal'>('chat');

  // Chat State
  const [chatMessages, setChatMessages] = useState<AIMessage[]>([
    {
      id: 'chat-welcome',
      role: 'assistant',
      content: isNepali
        ? 'नमस्ते! म पाइला नेपाल वेलनेस सेन्टरको एआई सहयोगी हुँ। म तपाईंलाई मनोसामाजिक परामर्श, ६-महिने तालिम (७८० घण्टा), तनाव व्यवस्थापन वा विपद् पूर्वतयारी सम्बन्धी जानकारी दिन तयार छु।'
        : 'Namaste! I am the Paila Nepal AI Wellness Navigator. Ask me anything about psychosocial support, our 6-Month (780 Hours) Counselling Training, grounding techniques, or disaster preparedness.',
      timestamp: 'Just now'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Disaster Plan Generator State
  const [district, setDistrict] = useState('Kathmandu Valley');
  const [homeType, setHomeType] = useState('Reinforced Concrete / Multi-story');
  const [membersCount, setMembersCount] = useState('4');
  const [hasElderly, setHasElderly] = useState(false);
  const [hasInfants, setHasInfants] = useState(false);
  const [hasPets, setHasPets] = useState(false);
  const [hazards, setHazards] = useState('Earthquake & Monsoon Flooding');
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [isPlanLoading, setIsPlanLoading] = useState(false);
  const [planCopied, setPlanCopied] = useState(false);

  // Journal Prompt State
  const [journalMood, setJournalMood] = useState('Exhausted & Stressed');
  const [journalTopic, setJournalTopic] = useState('Caregiver Burnout & Boundaries');
  const [generatedJournal, setGeneratedJournal] = useState<string | null>(null);
  const [isJournalLoading, setIsJournalLoading] = useState(false);

  const handleSendChat = async (override?: string) => {
    const text = (override || chatInput).trim();
    if (!text || isChatLoading) return;

    const userMsg: AIMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/ai/wellness-navigator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chatMessages, userMsg],
          userQuery: text,
          language: isNepali ? 'ne' : 'en'
        })
      });

      const data = await res.json();
      const botMsg: AIMessage = {
        id: `b-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Guidance generated.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: AIMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: isNepali
          ? 'पाइला नेपाल: अहिले सम्पर्क हुन सकेन। कृपया सिधै +९७७-९८६३४३७६७९ मा सम्पर्क गर्नुहोस्।'
          : 'Paila Nepal Navigator: Please connect with our counselors directly at +977-9863437679.',
        timestamp: 'Just now'
      };
      setChatMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleGenerateDisasterPlan = async () => {
    setIsPlanLoading(true);
    setGeneratedPlan(null);
    try {
      const res = await fetch('/api/ai/disaster-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          district,
          homeType,
          membersCount,
          hasElderly,
          hasInfants,
          hasPets,
          specificHazards: hazards
        })
      });
      const data = await res.json();
      setGeneratedPlan(data.plan);
    } catch {
      setGeneratedPlan('Unable to generate custom plan at this moment. Please use our standard Disaster Go-Bag builder.');
    } finally {
      setIsPlanLoading(false);
    }
  };

  const handleGenerateJournal = async () => {
    setIsJournalLoading(true);
    setGeneratedJournal(null);
    try {
      const res = await fetch('/api/ai/journal-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: journalMood, topic: journalTopic })
      });
      const data = await res.json();
      setGeneratedJournal(data.prompts);
    } catch {
      setGeneratedJournal('Take a deep breath and give yourself permission to pause.');
    } finally {
      setIsJournalLoading(false);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf3fc] text-xs font-bold text-[#1457A6] border border-[#1457A6]/20">
          <Sparkles className="w-4 h-4 text-[#008C4A]" />
          <span>{isNepali ? "प्रविधि र मनोसामाजिक सेवाको समायोजन" : "AI-Powered Community Wellness"}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "पाइला एआई वेलनेस सहयोगी" : "Paila AI Wellness & Resilience Suite"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मनोसामाजिक सहयोग, व्यक्तिगत विपद् पूर्वतयारी योजना र आत्म-हेरचाह सम्बन्धी तत्काल सहायताका लागि कृत्रिम बौद्धिकता (Gemini 3.8) मा आधारित डिजिटल सहयोगी।"
            : "Explore instant psychosocial guidance, generate custom household disaster contingency plans, and receive gentle self-care reflection prompts."}
        </p>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeTab === 'chat'
                ? 'bg-[#1457A6] text-white border-[#1457A6] shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isNepali ? "१. एआई वेलनेस सहयोगी (Chat)" : "1. AI Wellness Navigator"}</span>
          </button>

          <button
            onClick={() => setActiveTab('disaster')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeTab === 'disaster'
                ? 'bg-[#008C4A] text-white border-[#008C4A] shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{isNepali ? "२. विपद् पूर्वतयारी योजना (Custom Plan)" : "2. Custom Disaster Plan Generator"}</span>
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              activeTab === 'journal'
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>{isNepali ? "३. आत्म-हेरचाह तथा जर्नल प्रम्प्ट" : "3. Mindful Reflection Prompts"}</span>
          </button>
        </div>
      </section>

      {/* Tab 1: AI Chat Navigator */}
      {activeTab === 'chat' && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col h-[650px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1457A6] to-[#008C4A] text-white p-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">
                  {isNepali ? "पाइला एआई संवाद कक्ष" : "Interactive Wellness Dialogue"}
                </h3>
                <p className="text-xs text-slate-200">
                  {isNepali ? "मनोसामाजिक ज्ञान तथा परामर्श तालिम सहयोग" : "Psychosocial Knowledge & Course Inquiries"}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setChatMessages([
                  {
                    id: 'w',
                    role: 'assistant',
                    content: isNepali ? 'नयाँ संवाद सुरु भयो।' : 'Fresh chat started.',
                    timestamp: 'Now'
                  }
                ])
              }
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-white/10 text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isNepali ? "रिसेट" : "Reset"}</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-slate-50/70">
            {chatMessages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role !== 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    m.role === 'user'
                      ? 'bg-[#1457A6] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-xs'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex gap-3 justify-start items-center text-xs text-slate-500">
                <div className="w-8 h-8 rounded-xl bg-[#1457A6] text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="animate-pulse">{isNepali ? "पाइला एआई उत्तर तयार गर्दैछ..." : "Generating response..."}</span>
              </div>
            )}
          </div>

          {/* Suggested Starter Chips */}
          <div className="p-3 bg-slate-100 border-t border-slate-200 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => handleSendChat(isNepali ? '६-महिने तालिमको योग्यता र पाठ्यक्रम के हो?' : 'What is the eligibility for the 6-Month Counselling course?')}
              className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium cursor-pointer"
            >
              🎓 {isNepali ? "६-महिने तालिम विवरण" : "780h Course Details"}
            </button>
            <button
              onClick={() => handleSendChat(isNepali ? 'अत्यधिक छटपटी हुँदा ५-४-३-२-१ अभ्यास कसरी गर्ने?' : 'How do I practice 5-4-3-2-1 grounding?')}
              className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium cursor-pointer"
            >
              🌿 {isNepali ? "५-४-३-२-१ ग्राउन्डिङ" : "5-4-3-2-1 Grounding"}
            </button>
            <button
              onClick={() => handleSendChat(isNepali ? 'काठमाडौंमा भूकम्प आउँदा पहिलो ३ काम के गर्ने?' : 'What are the first 3 steps in an earthquake in Kathmandu?')}
              className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium cursor-pointer"
            >
              🎒 {isNepali ? "भूकम्प पूर्वतयारी" : "Earthquake Protocol"}
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendChat();
            }}
            className="p-4 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={isNepali ? "सोध्नुहोस्..." : "Ask your question..."}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1457A6] text-xs sm:text-sm text-slate-800"
            />
            <button
              type="submit"
              disabled={!chatInput.trim() || isChatLoading}
              className="px-5 py-2.5 bg-[#1457A6] hover:bg-[#0f4280] disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>{isNepali ? "पठाउनुहोस्" : "Send"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Tab 2: Custom Household Disaster Plan Generator */}
      {activeTab === 'disaster' && (
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#008C4A]" />
                <span>{isNepali ? "पारिवारिक विपद् पूर्वतयारी योजना सिर्जना गर्नुहोस्" : "Household Disaster Plan Generator"}</span>
              </h3>
              <p className="text-xs text-slate-500">
                {isNepali
                  ? "तपाईंको ठेगाना, परिवार संख्या र विशेष आवश्यकता अनुसार एआईले अनुकूलित योजना बनाइदिनेछ।"
                  : "Input your family parameters to generate a context-specific action plan for Nepal's terrain."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "जिल्ला वा क्षेत्र:" : "District / Region in Nepal:"}
                </label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="e.g. Kathmandu, Lalitpur, Sindhupalchok, Chitwan"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008C4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "घरको प्रकार:" : "House / Structure Type:"}
                </label>
                <select
                  value={homeType}
                  onChange={(e) => setHomeType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008C4A]"
                >
                  <option value="Reinforced Concrete RCC / Multi-story">Reinforced Concrete (RCC) Multi-Story</option>
                  <option value="Traditional Mud & Stone / Brick">Traditional Mud & Stone / Brick Masonry</option>
                  <option value="Apartment / High-rise">Apartment / High-rise Complex</option>
                  <option value="Lightweight Tin / CGI Sheet House">Lightweight Tin / CGI Sheet Structure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "परिवारका कुल सदस्य संख्या:" : "Total Family Members:"}
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={membersCount}
                  onChange={(e) => setMembersCount(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008C4A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "मुख्य जोखिमहरू:" : "Primary Hazard Concerns:"}
                </label>
                <input
                  type="text"
                  value={hazards}
                  onChange={(e) => setHazards(e.target.value)}
                  placeholder="e.g. Earthquake, Landslide, River Inundation"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#008C4A]"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4 pt-1">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasElderly}
                  onChange={(e) => setHasElderly(e.target.checked)}
                  className="rounded text-[#008C4A] focus:ring-[#008C4A]"
                />
                <span>{isNepali ? "ज्येष्ठ नागरिक हुनुहुन्छ (Elderly)" : "Elderly family member"}</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasInfants}
                  onChange={(e) => setHasInfants(e.target.checked)}
                  className="rounded text-[#008C4A] focus:ring-[#008C4A]"
                />
                <span>{isNepali ? "साना बालबालिका / शिशु छन् (Infants)" : "Infant or toddler"}</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPets}
                  onChange={(e) => setHasPets(e.target.checked)}
                  className="rounded text-[#008C4A] focus:ring-[#008C4A]"
                />
                <span>{isNepali ? "घरपालुवा जनावर छन् (Pets)" : "Household pets"}</span>
              </label>
            </div>

            <button
              onClick={handleGenerateDisasterPlan}
              disabled={isPlanLoading}
              className="w-full py-3 bg-[#008C4A] hover:bg-[#00733c] disabled:opacity-50 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>
                {isPlanLoading
                  ? (isNepali ? "योजना निर्माण हुँदैछ..." : "Generating Custom Plan...")
                  : (isNepali ? "अनुकूलित आपतकालीन योजना तयार गर्नुहोस्" : "Generate Customized Readiness Plan")}
              </span>
            </button>
          </div>

          {/* Generated Plan Output */}
          {generatedPlan && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#008C4A]" />
                  <h4 className="font-bold text-base sm:text-lg text-slate-900">
                    {isNepali ? "तपाईंको पारिवारिक विपद् कार्ययोजना" : "Your Tailored Disaster Action Plan"}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(generatedPlan);
                        setPlanCopied(true);
                        setTimeout(() => setPlanCopied(false), 2000);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    {planCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{planCopied ? "Copied" : "Copy Plan"}</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Plan</span>
                  </button>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-700">
                {generatedPlan}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Mindful Reflection & Journal Prompts */}
      {activeTab === 'journal' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>{isNepali ? "दैनिक आत्म-हेरचाह तथा जर्नल प्रम्प्ट" : "Daily Caregiver Self-Care Prompts"}</span>
              </h3>
              <p className="text-xs text-slate-500">
                {isNepali
                  ? "तपाईंको वर्तमान मनस्थिति अनुसार मस्तिष्कलाई विश्राम दिन ३ वटा संवेदनशील प्रश्नहरू।"
                  : "Grounding prompts to decompress after intensive caregiving, social work, or daily stressors."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "वर्तमान मनस्थिति:" : "How are you feeling right now?"}
                </label>
                <select
                  value={journalMood}
                  onChange={(e) => setJournalMood(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800"
                >
                  <option value="Mentally Exhausted & Heavy">Mentally Exhausted & Heavy (थकान/भारीपन)</option>
                  <option value="Anxious & Overthinking">Anxious & Overthinking (चिन्ता र छटपटी)</option>
                  <option value="Disconnected / Numb">Disconnected / Numb (अलग्गिएको महसुस)</option>
                  <option value="Seeking Grounding & Calm">Seeking Grounding & Calm (शान्तिको चाहना)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {isNepali ? "केन्द्रित विषय:" : "Reflection Focus:"}
                </label>
                <select
                  value={journalTopic}
                  onChange={(e) => setJournalTopic(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800"
                >
                  <option value="Caregiver Burnout & Boundaries">Caregiver Burnout & Boundaries</option>
                  <option value="Self-Compassion & Letting Go">Self-Compassion & Letting Go</option>
                  <option value="Gratitude in Difficult Times">Gratitude in Difficult Times</option>
                  <option value="Connecting with the Physical Senses">Connecting with the Physical Senses</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateJournal}
              disabled={isJournalLoading}
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>
                {isJournalLoading
                  ? (isNepali ? "चिन्तन प्रश्नहरू तयार हुँदैछन्..." : "Curating reflection questions...")
                  : (isNepali ? "आत्म-हेरचाह प्रम्प्ट प्राप्त गर्नुहोस्" : "Generate Reflection Prompts")}
              </span>
            </button>
          </div>

          {generatedJournal && (
            <div className="bg-[#fffbf0] rounded-3xl border border-amber-200/80 p-6 sm:p-8 shadow-md space-y-4 animate-in fade-in duration-300">
              <h4 className="font-bold text-sm text-amber-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>{isNepali ? "तपाईंको आजको जर्नल मार्गदर्शन" : "Your Guided Journaling Reflection"}</span>
              </h4>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line text-amber-950 font-serif sm:font-sans">
                {generatedJournal}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

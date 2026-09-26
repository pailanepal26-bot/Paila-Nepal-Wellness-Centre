import React, { useState, useEffect } from 'react';
import { ShieldCheck, Droplet, Utensils, Flashlight, HeartPulse, FileText, Flame, Radio, Sparkles, Printer, RotateCcw, Check, Users, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface GoBagItem {
  id: string;
  name: string;
  nameNe: string;
  category: 'water' | 'food' | 'light' | 'firstaid' | 'documents' | 'warmth' | 'comm' | 'hygiene';
  essential: boolean;
  tip: string;
  tipNe: string;
}

const defaultItems: GoBagItem[] = [
  // Water
  {
    id: 'water-bottles',
    name: 'Bottled Drinking Water (3L per person / day)',
    nameNe: 'पिउने पानी (प्रति व्यक्ति ३ लिटर / दिन)',
    category: 'water',
    essential: true,
    tip: 'Store enough for at least 72 hours (3 days). Replace every 6 months.',
    tipNe: 'कम्तीमा ७२ घण्टा (३ दिन) का लागि भण्डारण गर्नुहोस्। प्रत्येक ६ महिनामा फेर्नुहोस्।'
  },
  {
    id: 'water-purification',
    name: 'Water Purification Tablets (Aquatabs / Piyush)',
    nameNe: 'पानी शुद्धिकरण चक्की वा पियुष (Aquatabs)',
    category: 'water',
    essential: true,
    tip: 'Crucial for treating turbid water if municipal lines break.',
    tipNe: 'खानेपानीको पाइप फुट्दा वा धमिलो पानी आउँदा शुद्धिकरणका लागि।'
  },
  // Food
  {
    id: 'non-perishable-food',
    name: 'Ready-to-Eat Dry Foods (Beaten Rice, Roasted Grams, Biscuits)',
    nameNe: 'सुख्खा खानेकुरा (चिउरा, भुटेको चना, इनर्जी बिस्कुट, बदाम)',
    category: 'food',
    essential: true,
    tip: 'High-energy, non-perishable food that requires no cooking or heating.',
    tipNe: 'पकाउनु नपर्ने, धेरै शक्ति दिने र लामो समय टिक्ने खानेकुरा।'
  },
  {
    id: 'food-can-opener',
    name: 'Can Opener & Compact Eating Utensils',
    nameNe: 'क्यान ओपनर र सानो चम्चा/कचौरा',
    category: 'food',
    essential: false,
    tip: 'Manual hand-crank opener and reusable lightweight spoon.',
    tipNe: 'डिब्बा खोल्ने हातले चलाउने ओपनर।'
  },
  // Light & Signaling
  {
    id: 'led-torch',
    name: 'LED Flashlight / Headlamp + Spare Batteries',
    nameNe: 'एलईडी टर्च वा हेडल्याम्प + अतिरिक्त ब्याट्री',
    category: 'light',
    essential: true,
    tip: 'Keep batteries in a sealed pouch to prevent corrosion.',
    tipNe: 'ब्याट्री बिग्रन नदिन प्लास्टिकको झोलामा बन्द गरेर राख्नुहोस्।'
  },
  {
    id: 'emergency-whistle',
    name: 'High-Decibel Safety Whistle',
    nameNe: 'आपत्कालीन सिठी (Whistle)',
    category: 'light',
    essential: true,
    tip: 'A whistle carries sound far further than voice if trapped under debris.',
    tipNe: 'भग्नावशेषमा च्यापिँदा वा सहयोग माग्दा आवाजभन्दा सिठी टाढासम्म सुनिन्छ।'
  },
  // First Aid & Health
  {
    id: 'first-aid-kit',
    name: 'First Aid Kit (Antiseptic, Bandages, Gauze, Scissors)',
    nameNe: 'प्राथमिक उपचार किट (ब्यान्डेज, गज, डेटोल, कैंची)',
    category: 'firstaid',
    essential: true,
    tip: 'Sterile dressings to manage scrapes, cuts, and sprains immediately.',
    tipNe: 'विपद्मा तत्काल घाउ सफा गर्न र पट्टी बाँध्नका लागि।'
  },
  {
    id: 'prescription-meds',
    name: '7-Day Supply of Personal Prescription Medicines',
    nameNe: 'नियमित सेवन गर्ने औषधिको कम्तीमा ७ दिनको मौज्दात',
    category: 'firstaid',
    essential: true,
    tip: 'BP, diabetes, asthma inhalers, or cardiac pills for family elders.',
    tipNe: 'परिवारका सदस्यहरूको सुगर, प्रेसर, दम वा मुटुको नियमित औषधि।'
  },
  {
    id: 'ors-packets',
    name: 'Oral Rehydration Salts (ORS / Jeevan Jal)',
    nameNe: 'जीवनजल (ORS) का कम्तीमा ५-१० वटा प्याकेट',
    category: 'firstaid',
    essential: true,
    tip: 'Prevents life-threatening dehydration from illness or stress diarrhea.',
    tipNe: 'झाडापखाला वा पानीको कमीबाट जोगाउन जीवनजल।'
  },
  // Crucial Documents
  {
    id: 'waterproof-docs',
    name: 'Citizenship, Birth Certificates & Land Papers in Waterproof Pouch',
    nameNe: 'नागरिकता, जन्मदर्ता, लालपुर्जा आदिको प्रतिलिपि (Waterproof Pouch)',
    category: 'documents',
    essential: true,
    tip: 'Include laminated photocopies and USB flash drive with scanned records.',
    tipNe: 'प्लास्टिकको वाटरप्रुफ पाउचमा सुरक्षित राखिएका महत्वपूर्ण कागजात।'
  },
  {
    id: 'emergency-cash',
    name: 'Emergency Cash in Small Denominations (Rs. 100, 500 notes)',
    nameNe: 'सानो नोटमा आपत्कालीन नगद (रु. ५००, १०० का नोट)',
    category: 'documents',
    essential: true,
    tip: 'ATMs and digital payment networks frequently fail during blackouts.',
    tipNe: 'विपद्को समयमा बिजुली र डिजिटल पेमेन्ट (ATM, eSewa) अवरुद्ध हुन सक्छ।'
  },
  // Warmth & Shelter
  {
    id: 'thermal-blanket',
    name: 'Foil Thermal Space Blanket / Rain Poncho',
    nameNe: 'थर्मल कम्बल वा रेनकोट (Thermal Space Blanket)',
    category: 'warmth',
    essential: true,
    tip: 'Reflects 90% body heat, prevents hypothermia during wet nights.',
    tipNe: 'चिसो र पानीबाट जोगाउन ९०% शरीरको तापक्रम जोगाउने हलुका कम्बल।'
  },
  {
    id: 'dust-masks',
    name: 'KN95 / Protective Dust Masks',
    nameNe: 'धुलो छेक्ने मास्क (KN95 वा सर्जिकल मास्क)',
    category: 'warmth',
    essential: false,
    tip: 'Protects lungs from concrete dust and smoke after building collapses.',
    tipNe: 'भूकम्पपछि उड्ने सिमेन्ट, धुलो र धुवाँबाट फोक्सो जोगाउन।'
  },
  // Communication
  {
    id: 'power-bank',
    name: 'Fully Charged Heavy-Duty Power Bank (10,000–20,000 mAh)',
    nameNe: 'चार्ज गरिएको पावर बैंक (१०,०००–२०,००० mAh) र केबल',
    category: 'comm',
    essential: true,
    tip: 'Charge it at the start of every month; keep charging cords together.',
    tipNe: 'सधैं फुल चार्ज अवस्थामा राख्नुहोस्।'
  },
  {
    id: 'pocket-radio',
    name: 'Battery-Powered Portable AM/FM Radio',
    nameNe: 'ब्याट्रीबाट चल्ने सानो रेडियो (AM/FM)',
    category: 'comm',
    essential: true,
    tip: 'Official government relief bulletins are broadcast via Radio Nepal.',
    tipNe: 'इन्टरनेट र मोबाइल नेटवर्क नचल्दा सरकारी सूचना सुन्नका लागि।'
  },
  {
    id: 'paper-contact-list',
    name: 'Handwritten Family & Emergency Contact Phone Numbers',
    nameNe: 'कागजमा लेखिएको पारिवारिक तथा आपत्कालीन फोन नम्बर सूची',
    category: 'comm',
    essential: true,
    tip: 'Do not rely entirely on mobile phone memory if battery dies.',
    tipNe: 'मोबाइल स्विच अफ भएमा पनि डायल गर्न सकिने गरी डायरीमा लेखिएको नम्बर।'
  },
  // Hygiene
  {
    id: 'hygiene-supplies',
    name: 'Sanitary Pads, Soap, Toothbrush & Hand Sanitizer',
    nameNe: 'स्यानिटरी प्याड, साबुन, स्यानिटाइजर र ब्रस',
    category: 'hygiene',
    essential: true,
    tip: 'Infections multiply quickly in temporary displacement shelters.',
    tipNe: 'अस्थायी शिविरमा संक्रमण रोकथाम र महिला स्वास्थ्यका लागि।'
  }
];

export const DisasterReadinessTool: React.FC = () => {
  const { isNepali } = useLanguage();
  const [familySize, setFamilySize] = useState<number>(4);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('paila_gobag_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('paila_gobag_checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    if (window.confirm(isNepali ? 'के तपाईं चेकलिस्ट रिसेट गर्न चाहनुहुन्छ?' : 'Reset your Go-Bag checklist?')) {
      setCheckedItems({});
      localStorage.removeItem('paila_gobag_checklist');
    }
  };

  const totalItemsCount = defaultItems.length;
  const completedCount = defaultItems.filter(item => checkedItems[item.id]).length;
  const scorePercent = Math.round((completedCount / totalItemsCount) * 100);

  // Dynamic calculations
  const waterLitersNeeded = familySize * 3 * 3; // 3L * person * 3 days

  let readinessLevel = {
    label: isNepali ? 'तयारी सुरु भएको छैन' : 'Vulnerable — Action Needed',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    desc: isNepali ? 'तपाईंको परिवारको आपत्कालीन झोलामा आधारभूत अत्यावश्यक वस्तुहरू अपुग छन्।' : 'Crucial emergency supplies are missing. Please begin gathering essentials.'
  };

  if (scorePercent >= 80) {
    readinessLevel = {
      label: isNepali ? 'उत्थानशील र पूर्वतयारीयुक्त!' : 'Resilient — Well Prepared!',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
      desc: isNepali ? 'उत्कृष्ट! तपाईंको परिवार संकटको समयमा ७२ घण्टासम्म सुरक्षित रहन धेरै हदसम्म तयार छ।' : 'Outstanding! Your household is strongly equipped for 72-hour survival and recovery.'
    };
  } else if (scorePercent >= 45) {
    readinessLevel = {
      label: isNepali ? 'तयारी जारी छ — आधाभन्दा बढी सम्पन्न' : 'Progressing — Halfway Prepared',
      color: 'text-amber-700 bg-amber-50 border-amber-300',
      desc: isNepali ? 'तपाईंले राम्रो सुरुवात गर्नुभएको छ। बाँकी अत्यावश्यक सामग्रीहरू थप्दै जानुहोस्।' : 'Good progress made. Keep adding the remaining essential medical and communication items.'
    };
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
      {/* Tool Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
              {isNepali ? "अन्तरक्रियात्मक पारिवारिक पूर्वतयारी औजार" : "Interactive Family Preparedness Tool"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isNepali ? "पारिवारिक आपत्कालीन झोला (Go-Bag) बिल्डर" : "Family 72-Hour Emergency Go-Bag Builder"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {isNepali
              ? "काठमाडौं र नेपालका कुनै पनि समुदायमा भूकम्प वा बाढी आउँदा परिवारले तत्काल घर छोड्नुपर्ने हुन सक्छ। परिवार संख्या छान्नुहोस् र आवश्यक सामानहरू टिक लगाउँदै आफ्नो पूर्वतयारी स्कोर जाँच्नुहोस्।"
              : "When disaster strikes, your family may have less than 2 minutes to evacuate. Select your family size to customize requirements, check off packed items, and track your preparedness score."}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isNepali ? "चेकलिस्ट छाप्नुहोस्" : "Print Checklist"}</span>
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-xl transition-colors cursor-pointer"
            title="Reset items"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isNepali ? "रिसेट" : "Reset"}</span>
          </button>
        </div>
      </div>

      {/* Household Profile & Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Family Size Selector */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#1457A6]" />
              <span>{isNepali ? "घरका सदस्य संख्या:" : "Family Members:"}</span>
            </span>
            <span className="text-lg font-black text-[#1457A6]">{familySize} {isNepali ? "जना" : "Persons"}</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setFamilySize(num)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  familySize === num
                    ? 'bg-[#1457A6] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Water Calculation */}
        <div className="p-5 bg-[#ebf3fc] rounded-2xl border border-[#1457A6]/20 space-y-1">
          <span className="text-xs font-bold text-[#1457A6] flex items-center gap-1.5">
            <Droplet className="w-4 h-4 text-[#1457A6]" />
            <span>{isNepali ? "आवश्यक ७२ घण्टे पिउने पानी:" : "72-Hour Water Supply:"}</span>
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#1457A6]">{waterLitersNeeded} Liters</span>
            <span className="text-[11px] text-slate-600">({familySize} × 3L × 3 days)</span>
          </div>
          <p className="text-[11px] text-slate-500">
            {isNepali ? "पानी शुद्धिकरण चक्की (Aquatabs) साथमा अनिवार्य राख्नुहोस्।" : "Also include water purification tablets for local streams or tanker water."}
          </p>
        </div>

        {/* Readiness Score Progress */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700">
              {isNepali ? "तयारी स्कोर (Readiness):" : "Preparedness Level:"}
            </span>
            <span className="text-sm font-black text-slate-900">{scorePercent}%</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                scorePercent >= 80
                  ? 'bg-[#008C4A]'
                  : scorePercent >= 45
                  ? 'bg-amber-500'
                  : 'bg-rose-500'
              }`}
              style={{ width: `${scorePercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{completedCount} / {totalItemsCount} {isNepali ? "सामग्री तयार" : "Items Packed"}</span>
            <span className="font-semibold text-slate-700">{readinessLevel.label}</span>
          </div>
        </div>
      </div>

      {/* Status Alert Banner */}
      <div className={`p-4 rounded-2xl border text-xs flex items-center justify-between gap-4 ${readinessLevel.color}`}>
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 shrink-0" />
          <div>
            <p className="font-bold text-sm">{readinessLevel.label}</p>
            <p className="opacity-90">{readinessLevel.desc}</p>
          </div>
        </div>
      </div>

      {/* Checklist Items Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            {isNepali ? "झोलामा राख्नुपर्ने अत्यावश्यक सामग्रीहरूको सूची" : "Essential Supplies Checklist (72-Hour Survival)"}
          </h4>
          <span className="text-xs text-slate-500">
            {isNepali ? "सामग्री राखिसकेपछि टिक लगाउनुहोस्" : "Click to mark as packed"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {defaultItems.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                  isChecked
                    ? 'bg-[#e6f7ef]/60 border-[#008C4A]/40 text-slate-900 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-[#008C4A] border-[#008C4A] text-white'
                      : 'border-slate-300 bg-slate-50'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5" />}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-bold text-xs ${isChecked ? 'text-[#008C4A] line-through' : 'text-slate-900'}`}>
                      {isNepali ? item.nameNe : item.name}
                    </span>
                    {item.essential && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">
                        {isNepali ? "अति जरूरी" : "Critical"}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {isNepali ? item.tipNe : item.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guidance Note on Where to Store */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-bold text-slate-800">
            {isNepali ? "आपत्कालीन झोला कहाँ राख्ने?" : "Where to Keep Your Go-Bag?"}
          </p>
          <p>
            {isNepali
              ? "झोलालाई घरको मूल ढोका वा निकास नजिक, जहाँ सहजै हात पुग्छ, त्यहाँ राख्नुहोस्। कहिल्यै पनि भित्री कोठा वा भारी सामानको पछाडि नराख्नुहोस्।"
              : "Store your Go-Bag near your main exit door or beside your bed in an unobstructed location where everyone can grab it in seconds during an earthquake."}
          </p>
        </div>
      </div>
    </div>
  );
};

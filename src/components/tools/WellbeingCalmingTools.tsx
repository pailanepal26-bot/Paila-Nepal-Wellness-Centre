import React, { useState, useEffect } from 'react';
import { Heart, Wind, Eye, Sparkles, Play, Pause, RotateCcw, CheckCircle, MessageSquareHeart, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface WellbeingCalmingToolsProps {
  onOpenSupportModal: (type?: string) => void;
}

export const WellbeingCalmingTools: React.FC<WellbeingCalmingToolsProps> = ({ onOpenSupportModal }) => {
  const { isNepali } = useLanguage();
  const [activeTab, setActiveTab] = useState<'checkin' | 'breathing' | 'grounding'>('checkin');

  // Check-in State
  const [sleepScore, setSleepScore] = useState<number>(3);
  const [stressScore, setStressScore] = useState<number>(3);
  const [overwhelmScore, setOverwhelmScore] = useState<number>(3);
  const [pauseScore, setPauseScore] = useState<number>(3);
  const [socialScore, setSocialScore] = useState<number>(3);
  const [checkinComplete, setCheckinComplete] = useState<boolean>(false);

  // Box Breathing State
  const [breathingActive, setBreathingActive] = useState<boolean>(false);
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [phaseSeconds, setPhaseSeconds] = useState<number>(4);
  const [cycleCount, setCycleCount] = useState<number>(0);

  // 5-4-3-2-1 Stepper State
  const [groundingStep, setGroundingStep] = useState<number>(1);

  // Box breathing timer effect
  useEffect(() => {
    let interval: any = null;
    if (breathingActive) {
      interval = setInterval(() => {
        setPhaseSeconds((prev) => {
          if (prev <= 1) {
            // transition to next phase
            setBreathingPhase((curPhase) => {
              if (curPhase === 'Inhale') return 'Hold';
              if (curPhase === 'Hold') return 'Exhale';
              if (curPhase === 'Exhale') return 'Rest';
              setCycleCount((c) => c + 1);
              return 'Inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const resetBreathing = () => {
    setBreathingActive(false);
    setBreathingPhase('Inhale');
    setPhaseSeconds(4);
    setCycleCount(0);
  };

  const phaseInstructions = {
    Inhale: {
      en: 'Breathe in slowly and deeply through your nose...',
      ne: 'नाकबाट बिस्तारै र गहिरो सास भित्र लिनुहोस्...'
    },
    Hold: {
      en: 'Hold gently... feeling still and centered...',
      ne: 'सास रोक्नुहोस्... मनलाई शान्त राख्नुहोस्...'
    },
    Exhale: {
      en: 'Release smoothly through your mouth...',
      ne: 'मुखबाट बिस्तारै र शान्त रूपमा सास बाहिर फाल्नुहोस्...'
    },
    Rest: {
      en: 'Rest in calm awareness before the next breath...',
      ne: 'अर्को सास लिनुअघि केही क्षण विश्राम गर्नुहोस्...'
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
              <Heart className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
              {isNepali ? "आत्म-हेरचाह तथा शान्त पार्ने औजारहरू" : "Self-Care & Calming Practices"}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            {isNepali ? "मनोवैज्ञानिक कल्याण तथा ग्राउन्डिङ अभ्यास" : "Interactive Wellbeing & Calming Tools"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
            {isNepali
              ? "तनाव वा चिन्ता भएको बेला मनलाई स्थिर र शान्त बनाउन यी सरल अभ्यासहरू गर्नुहोस्। (यो खण्ड आत्म-सचेतना र विश्रामका लागि हो, कुनै रोग निदान होइन।)"
              : "Pause, reflect on your inner state, and utilize evidence-informed somatic calming techniques to regulate your nervous system."}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('checkin')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'checkin'
                ? 'bg-white text-[#1457A6] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isNepali ? "१. आत्म-समीक्षा" : "1. Wellbeing Check-In"}
          </button>
          <button
            onClick={() => setActiveTab('breathing')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'breathing'
                ? 'bg-white text-[#008C4A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isNepali ? "२. बक्स ब्रिदिङ" : "2. 4-4-4-4 Breathing"}
          </button>
          <button
            onClick={() => setActiveTab('grounding')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'grounding'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isNepali ? "३. ५-४-३-२-१ विधि" : "3. 5-4-3-2-1 Grounding"}
          </button>
        </div>
      </div>

      {/* Tab 1: Gentle Wellbeing Check-In */}
      {activeTab === 'checkin' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
            <p className="font-semibold text-slate-800">
              {isNepali ? "कसरी प्रयोग गर्ने?" : "How to Reflect:"}
            </p>
            <p>
              {isNepali
                ? "बितेको साताको आफ्नो अनुभव सम्झनुहोस् र १ (धेरै कम/कठिन) देखि ५ (धेरै राम्रो/सजिलो) सम्मको स्लोटमा छान्नुहोस्। यसले तपाईंको आन्तरिक अवस्था बुझ्न मद्दत गर्छ।"
                : "Rate how you have been feeling over the past 7 days from 1 to 5. This gentle reflection provides supportive feedback on your emotional equilibrium."}
            </p>
          </div>

          <div className="space-y-5">
            {/* Question 1: Sleep */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  {isNepali ? "१. निद्रा र विश्राम (Sleep & Rest Quality)" : "1. Sleep Quality & Restfulness"}
                </span>
                <span className="text-[#1457A6] font-bold">{sleepScore} / 5</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSleepScore(val)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      sleepScore === val
                        ? 'bg-[#1457A6] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>{isNepali ? "धेरै खलबलिएको" : "Restless / Disturbed"}</span>
                <span>{isNepali ? "गहिरो र आरामदायी" : "Deep & Restful"}</span>
              </div>
            </div>

            {/* Question 2: Daily Stress */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  {isNepali ? "२. दैनिक तनावको स्तर (Daily Stress Balance)" : "2. Daily Stress & Pressure Level"}
                </span>
                <span className="text-[#1457A6] font-bold">{stressScore} / 5</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setStressScore(val)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      stressScore === val
                        ? 'bg-[#1457A6] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>{isNepali ? "अत्यधिक चाप" : "Overwhelming"}</span>
                <span>{isNepali ? "सन्तुलित र व्यवस्थापनयोग्य" : "Calm & Manageable"}</span>
              </div>
            </div>

            {/* Question 3: Pausing & Calm */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  {isNepali ? "३. सास फेर्ने र विश्राम लिने अवसर (Moments to Pause)" : "3. Opportunities to Pause & Breathe"}
                </span>
                <span className="text-[#1457A6] font-bold">{pauseScore} / 5</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setPauseScore(val)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      pauseScore === val
                        ? 'bg-[#1457A6] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>{isNepali ? "फुर्सदै नहुने" : "Rarely have time"}</span>
                <span>{isNepali ? "नियमित समय निकाल्छु" : "Regular mindful pauses"}</span>
              </div>
            </div>

            {/* Question 4: Social Connection */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  {isNepali ? "४. साथीभाइ वा परिवारको साथ (Support Network)" : "4. Connectedness with Loved Ones"}
                </span>
                <span className="text-[#1457A6] font-bold">{socialScore} / 5</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSocialScore(val)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      socialScore === val
                        ? 'bg-[#1457A6] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>{isNepali ? "एक्लो महसुस हुन्छ" : "Felt isolated"}</span>
                <span>{isNepali ? "भरपर्दो साथ र संवाद छ" : "Felt supported & heard"}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setCheckinComplete(true)}
              className="px-6 py-2.5 bg-[#008C4A] hover:bg-[#00723b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {isNepali ? "समीक्षा हेर्नुहोस्" : "Generate Reflection Summary"}
            </button>
          </div>

          {checkinComplete && (
            <div className="p-6 bg-gradient-to-r from-[#ebf3fc] to-[#e6f7ef] rounded-3xl border border-[#008C4A]/30 space-y-4 animate-in fade-in duration-300">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#008C4A] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {isNepali ? "तपाईंको आत्म-हेरचाह प्रतिबिम्ब" : "Your Personal Reflection"}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {isNepali
                      ? "आफ्नो मानसिक अवस्थाबारे समय निकालेर सोच्नु नै आत्म-हेरचाहको पहिलो पाइला हो। जीवनका विभिन्न चरणमा तनावको अनुभव हुनु स्वाभाविक मानवीय प्रक्रिया हो। यदि मनमा कुनै कुरा गुम्सिएको छ वा तनाव बढेको छ भने विश्वासिलो व्यक्ति वा प्रशिक्षित परामर्शदातासँग कुरा गर्दा मन हलुका हुन्छ।"
                      : "Thank you for pausing. Stress and fatigue are natural bodily responses to demanding environments. Taking micro-breaks, maintaining hydration, practicing 4-4-4-4 breathing, and confiding in an empathetic listener make a profound difference."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('breathing')}
                  className="px-4 py-2 bg-white text-[#008C4A] font-bold text-xs rounded-xl border border-[#008C4A]/30 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {isNepali ? "बक्स ब्रिदिङ अभ्यास सुरु गर्नुहोस् →" : "Try Box Breathing Exercise →"}
                </button>
                <button
                  onClick={() => onOpenSupportModal('Individual Counselling')}
                  className="px-4 py-2 bg-[#008C4A] hover:bg-[#00723b] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <MessageSquareHeart className="w-3.5 h-3.5" />
                  <span>{isNepali ? "परामर्शदातासँग कुरा गर्नुहोस्" : "Speak with a Counselor"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Interactive 4-4-4-4 Box Breathing */}
      {activeTab === 'breathing' && (
        <div className="space-y-8 text-center max-w-xl mx-auto py-4">
          <div className="space-y-1.5">
            <h4 className="text-lg font-bold text-slate-900">
              {isNepali ? "४-४-४-४ बक्स ब्रिदिङ (Box Breathing)" : "4-4-4-4 Rhythmic Box Breathing"}
            </h4>
            <p className="text-xs text-slate-600">
              {isNepali
                ? "प्रत्येक चरण ४ सेकेन्डको हुन्छ: सास भित्र लिनुहोस् (४ सेकेन्ड) → सास रोक्नुहोस् (४ सेकेन्ड) → सास बाहिर फाल्नुहोस् (४ सेकेन्ड) → रोकिनुहोस् (४ सेकेन्ड)।"
                : "Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, rest for 4 seconds. Scientifically proven to soothe the sympathetic nervous system."}
            </p>
          </div>

          {/* Visual Breathing Ring */}
          <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
            {/* Outer animated glow ring */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                breathingActive
                  ? breathingPhase === 'Inhale'
                    ? 'scale-110 bg-[#008C4A]/20 ring-4 ring-[#008C4A]/40'
                    : breathingPhase === 'Hold'
                    ? 'scale-110 bg-[#1457A6]/20 ring-4 ring-[#1457A6]/40'
                    : breathingPhase === 'Exhale'
                    ? 'scale-90 bg-emerald-500/15 ring-4 ring-emerald-500/30'
                    : 'scale-90 bg-slate-200/50 ring-2 ring-slate-300'
                  : 'bg-slate-100 ring-2 ring-slate-200'
              }`}
            />

            {/* Inner Center Circle */}
            <div className="relative z-10 w-44 h-44 rounded-full bg-white shadow-lg border border-slate-200 flex flex-col items-center justify-center p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {breathingActive ? breathingPhase : (isNepali ? "तयार हुनुहोस्" : "Ready")}
              </span>
              <span className="text-4xl font-black text-slate-900 my-1">
                {breathingActive ? phaseSeconds : '4'}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                {breathingActive ? `Cycle ${cycleCount + 1}` : (isNepali ? "सुरु गर्न थिच्नुहोस्" : "Press Start")}
              </span>
            </div>
          </div>

          {/* Prompt Message */}
          <p className="text-sm font-semibold text-slate-700 min-h-[3rem] flex items-center justify-center px-4">
            {breathingActive
              ? (isNepali ? phaseInstructions[breathingPhase].ne : phaseInstructions[breathingPhase].en)
              : (isNepali ? "सहज आसनमा बस्नुहोस् र सुरु बटन थिच्नुहोस्।" : "Sit comfortably with feet flat on the floor and tap Start.")}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            {!breathingActive ? (
              <button
                onClick={() => setBreathingActive(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#008C4A] hover:bg-[#00723b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>{isNepali ? "अभ्यास सुरु गर्नुहोस्" : "Start Exercise"}</span>
              </button>
            ) : (
              <button
                onClick={() => setBreathingActive(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Pause className="w-4 h-4" />
                <span>{isNepali ? "रोक्नुहोस्" : "Pause"}</span>
              </button>
            )}

            <button
              onClick={resetBreathing}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isNepali ? "रिसेट" : "Reset"}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: 5-4-3-2-1 Sensory Grounding Stepper */}
      {activeTab === 'grounding' && (
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="p-4 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl text-xs text-indigo-950">
            <span className="font-bold block">
              {isNepali ? "५-४-३-२-१ ग्राउन्डिङ के हो?" : "What is 5-4-3-2-1 Grounding?"}
            </span>
            <p className="mt-0.5 text-indigo-900/90">
              {isNepali
                ? "जब अत्यधिक चिन्ता वा आतंक (Panic) महसुस हुन्छ, हाम्रो मस्तिष्क भविष्यका डरमा हराउँछ। यो अभ्यासले तपाईंका पाँचवटै ज्ञानेन्द्रियहरूलाई वर्तमान क्षण र भौतिक वरपर फिर्ता ल्याउँछ।"
                : "A powerful somatic anchor. By engaging your 5 senses one by one, your brain interrupts panic loops and reconnects with physical safety right now."}
            </p>
          </div>

          {/* Stepper Progress */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <button
                key={stepNum}
                onClick={() => setGroundingStep(stepNum)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  groundingStep === stepNum
                    ? 'bg-indigo-600 text-white'
                    : stepNum < groundingStep
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                Step {stepNum}
              </button>
            ))}
          </div>

          {/* Step Cards */}
          {groundingStep === 1 && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-indigo-700">Step 1 of 5 • Vision</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {isNepali ? "५ वटा वस्तुहरू हेर्नुहोस् (5 Things You Can SEE)" : "Acknowledge 5 things you can SEE"}
                </h4>
                <p className="text-xs text-slate-600">
                  {isNepali
                    ? "आफ्नो कोठा वा वरपर हेर्नुहोस्। प्रकाश, भित्ताको घडी, झ्याल, कलम वा हातको औंठी जस्ता ५ वटा वस्तुहरूलाई ध्यान दिएर हेर्नुहोस्।"
                    : "Look around your space right now. Notice 5 distinct items: a spot on the wall, the edge of a table, your shoes, a tree outside, or a shadow."}
                </p>
              </div>
            </div>
          )}

          {groundingStep === 2 && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-amber-700">Step 2 of 5 • Touch</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {isNepali ? "४ वटा वस्तुहरू छुनुहोस् (4 Things You Can TOUCH)" : "Acknowledge 4 things you can TOUCH"}
                </h4>
                <p className="text-xs text-slate-600">
                  {isNepali
                    ? "भुइँमा अडिएको जुत्ता, कुर्चीको ढाड, लुगाको कपडा वा हातको हत्केलाको न्यानोपन महसुस गर्नुहोस्।"
                    : "Feel the texture of your shirt, the cool wood of a desk, the ground firmly supporting your feet, or your hands touching each other."}
                </p>
              </div>
            </div>
          )}

          {groundingStep === 3 && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Wind className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-emerald-700">Step 3 of 5 • Sound</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {isNepali ? "३ वटा आवाजहरू सुन्नुहोस् (3 Sounds You Can HEAR)" : "Acknowledge 3 sounds you can HEAR"}
                </h4>
                <p className="text-xs text-slate-600">
                  {isNepali
                    ? "बाहिर चराको चिरबिर, सडकको गाडीको आवाज, पङ्खाको आवाज वा आफ्नै सासको आवाज सुन्नुहोस्।"
                    : "Listen closely to your environment. Notice the hum of an appliance, distant traffic outside, wind, or the sound of your own inhalation."}
                </p>
              </div>
            </div>
          )}

          {groundingStep === 4 && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-rose-700">Step 4 of 5 • Scent</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {isNepali ? "२ वटा बासनाहरू महसुस गर्नुहोस् (2 Scents You Can SMELL)" : "Acknowledge 2 scents you can SMELL"}
                </h4>
                <p className="text-xs text-slate-600">
                  {isNepali
                    ? "तातो चियाको बासना, लुगाको साबुन, वा कोठाको हावाको गन्ध सुँघ्नुहोस्।"
                    : "Inhale gently. Can you smell fresh air, soap on your hands, coffee, or a nearby plant?"}
                </p>
              </div>
            </div>
          )}

          {groundingStep === 5 && (
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-teal-700">Step 5 of 5 • Positive Truth</span>
                <h4 className="text-lg font-bold text-slate-900">
                  {isNepali ? "१ वटा सकारात्मक सत्य भन्नुहोस् (1 Affirmation)" : "Say 1 positive truth to yourself"}
                </h4>
                <p className="text-xs text-slate-600">
                  {isNepali
                    ? "आफूलाई सम्झाउनुहोस्: 'म अहिले यहाँ सुरक्षित छु। म यो कठिन क्षणलाई पार गर्न सक्छु।'"
                    : "State an anchor truth: 'I am safe right now in this room. My breath is steady, and I can take this step by step.'"}
                </p>
              </div>
            </div>
          )}

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setGroundingStep((s) => Math.max(1, s - 1))}
              disabled={groundingStep === 1}
              className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-xl cursor-pointer"
            >
              Previous
            </button>
            <span className="text-xs font-bold text-slate-500">
              {groundingStep} of 5
            </span>
            {groundingStep < 5 ? (
              <button
                onClick={() => setGroundingStep((s) => Math.min(5, s + 1))}
                className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl cursor-pointer"
              >
                Next Step →
              </button>
            ) : (
              <button
                onClick={() => setGroundingStep(1)}
                className="px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-xl cursor-pointer"
              >
                Completed! Restart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

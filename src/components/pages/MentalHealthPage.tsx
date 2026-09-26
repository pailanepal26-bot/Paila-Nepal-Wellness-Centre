import React from 'react';
import {
  Brain,
  Heart,
  Baby,
  Users,
  Shield,
  LifeBuoy,
  BookOpen,
  Share2,
  CheckCircle,
  HelpCircle,
  PhoneCall,
  MessageSquareHeart,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { WellbeingCalmingTools } from '../tools/WellbeingCalmingTools';

interface MentalHealthPageProps {
  onOpenSupportModal: (type?: string) => void;
  onNavigate: (tab: string) => void;
}

export const MentalHealthPage: React.FC<MentalHealthPageProps> = ({
  onOpenSupportModal,
  onNavigate
}) => {
  const { t, isNepali } = useLanguage();

  const sections = [
    {
      number: 1,
      title: 'Counselling & Psychosocial Support',
      titleNe: '१. परामर्श तथा मनोसामाजिक सहयोग',
      icon: Heart,
      desc: 'Confidential, evidence-informed one-on-one and group counselling helping individuals understand emotional pain, navigate personal challenges, and develop healthy coping mechanisms in an empathetic setting.',
      descNe: 'सहानुभूतिपूर्ण र गोप्य वातावरणमा व्यक्तिगत तथा समूह परामर्श जसले भावनात्मक पीडा बुझ्न, चुनौतीहरूको सामना गर्न र स्वस्थ सामना गर्ने सीप विकास गर्न मद्दत गर्दछ।'
    },
    {
      number: 2,
      title: 'Child & Adolescent Wellbeing',
      titleNe: '२. बालबालिका तथा किशोरकिशोरी कल्याण',
      icon: Baby,
      desc: 'Age-appropriate emotional guidance, creative therapeutic communication, emotional literacy, and life skills for young minds encountering developmental transitions, peer pressures, or distress.',
      descNe: 'बालबालिका तथा किशोरकिशोरीहरूको उमेर-अनुकूल भावनात्मक मार्गदर्शन, सृजनात्मक अभिव्यक्ति, भावनात्मक साक्षरता र जीवन उपयोगी सीप।'
    },
    {
      number: 3,
      title: 'Family Support',
      titleNe: '३. पारिवारिक सहयोग तथा सम्बन्ध सुदृढीकरण',
      icon: Users,
      desc: 'Nurturing constructive family communication, conflict resolution, positive parenting, and joint problem-solving to build harmonious, emotionally safe homes.',
      descNe: 'पारिवारिक संवाद, सकारात्मक अभिभावकत्व, असमझदारी समाधान र परिवारलाई भावनात्मक रूपमा सुरक्षित र बलियो बनाउने अभ्यास।'
    },
    {
      number: 4,
      title: 'Psychological First Aid (PFA)',
      titleNe: '४. मनोवैज्ञानिक प्राथमिक उपचार (PFA)',
      icon: LifeBuoy,
      desc: 'Immediate, dignified psychological stabilization following emergencies or traumatic events utilizing the Look, Listen, and Link humanitarian methodology.',
      descNe: 'विपद् वा आपत्कालीन घटनापछि तत्काल दिइने मर्यादित मनोवैज्ञानिक प्राथमिक उपचार (PFA), जसले सुरक्षाको प्रत्याभूति र तत्काल सहयोग सुनिश्चित गर्दछ।'
    },
    {
      number: 5,
      title: 'Trauma-Informed Support',
      titleNe: '५. ट्रमा-सूचित सहयोग (Trauma-Informed Support)',
      icon: Shield,
      desc: 'Supportive practices sensitive to trauma histories, prioritizing safety, predictability, non-re-traumatization, and restoring personal empowerment.',
      descNe: 'ट्रमा (गहिरो मानसिक चोट) को प्रभावलाई बुझेर गरिने संवेदनशील सहयोग, जहाँ सुरक्षा, विश्वास, पुनःचोट रोकथाम र सशक्तिकरण मुख्य प्राथमिकता हुन्छ।'
    },
    {
      number: 6,
      title: 'Mental Health Awareness',
      titleNe: '६. मानसिक स्वास्थ्य सचेतना',
      icon: Brain,
      desc: 'Community and school campaigns dismantling stigma, demystifying emotional struggles, and fostering a culture of compassion and early help-seeking.',
      descNe: 'समुदाय र विद्यालयहरूमा मानसिक स्वास्थ्य सम्बन्धी भ्रम र लाञ्छना न्यूनीकरण गर्ने र समयमै सहयोग खोज्ने संस्कार विकास गर्ने सचेतनामूलक अभियान।'
    },
    {
      number: 7,
      title: 'Psychoeducation',
      titleNe: '७. मनोशिक्षा (Psychoeducation)',
      icon: BookOpen,
      desc: 'Equipping individuals, parents, teachers, and communities with clear, accessible knowledge about stress cycles, nervous system responses, and self-care.',
      descNe: 'तनाव, चिन्ता, स्नायु प्रणालीको प्रतिक्रिया र आत्म-हेरचाहका व्यावहारिक उपायहरू बारे समुदाय र शिक्षकहरूलाई सरल भाषामा ज्ञान प्रदान गर्ने।'
    },
    {
      number: 8,
      title: 'Community Mental Health',
      titleNe: '८. समुदायमा आधारित मानसिक स्वास्थ्य',
      icon: Users,
      desc: 'Grassroots programs partnering with local ward committees, youth groups, and women’s collectives to embed sustainable psychosocial support systems.',
      descNe: 'स्थानीय वडा, युवा समूह र महिला सञ्जालहरूसँग हातेमालो गर्दै समुदायस्तरमै दिगो मनोसामाजिक सहयोग प्रणाली स्थापना गर्ने पहल।'
    },
    {
      number: 9,
      title: 'Referral & Coordination',
      titleNe: '९. प्रेषण (Referral) तथा समन्वय',
      icon: Share2,
      desc: 'Ethical screening and coordinated linkages to specialized clinical psychiatry, social welfare, or child protection institutions whenever needs exceed organizational scope.',
      descNe: 'संस्थाको कार्यक्षेत्रभन्दा बाहिरका विशिष्ट मनोचिकित्सा, अस्पताल वा बाल संरक्षण सेवा आवश्यक परेमा सुरक्षित र मर्यादित प्रेषण (Referral) तथा समन्वय।'
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "मानसिक स्वास्थ्य प्रवर्द्धन" : "Mental Health & Wellbeing"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "स्वस्थ मनको संवर्द्धन" : "Supporting Healthy Minds"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मानसिक स्वास्थ्य व्यक्ति, परिवार र समुदायको समग्र कल्याणको आधारशिला हो। स्वस्थ मनले नै मानिसलाई जीवनका आरोह-अवरोह र संकटहरूको सामना गर्न सक्षम बनाउँछ।"
            : "Mental health is an essential part of individual, family and community wellbeing. A healthy mind empowers people to thrive, relate meaningfully, and recover resiliently from adversity."}
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onOpenSupportModal('Mental Health Support')}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#008C4A] hover:bg-[#00723b] rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>{t.cta.talkToUs}</span>
          </button>
        </div>
      </section>

      {/* 2. 9 Detailed Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {isNepali ? "हाम्रा ९ मुख्य कार्य स्तम्भहरू" : "Our 9 Core Mental Health Pillars"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.number}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f7ef] text-[#008C4A] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {isNepali ? sec.titleNe : sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isNepali ? sec.descNe : sec.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenSupportModal(sec.title)}
                    className="text-xs font-semibold text-[#1457A6] hover:underline cursor-pointer"
                  >
                    {isNepali ? "यस विषयमा कुरा गर्नुहोस् →" : "Inquire about this support →"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2.5. Interactive Wellbeing & Somatic Calming Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WellbeingCalmingTools onOpenSupportModal={onOpenSupportModal} />
      </section>

      {/* 3. Educational Section: "When to Seek Support" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1457A6]">
              {isNepali ? "शैक्षिक मार्गदर्शन" : "Educational Guidance"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {isNepali ? "कहिले मनोसामाजिक सहयोग लिने?" : "When to Seek Psychosocial Support"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isNepali
                ? "सबै मानिसले जीवनका विभिन्न चरणमा तनाव र भावनात्मक भारीपन अनुभव गर्छन्। सहयोग खोज्नु कमजोरी होइन, आत्म-सचेतना र साहसको प्रमाण हो। (यो खण्ड शैक्षिक जानकारीका लागि मात्र हो, कुनै रोग निदान होइन।)"
                : "Everyone experiences stress, sorrow, or emotional difficulty at times. Seeking support is not a sign of weakness—it is a proactive step toward clarity and resilience. (This section is purely educational and does not diagnose conditions)."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Prolonged Emotional Overwhelm</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Feeling consistently anxious, irritable, sad, or overwhelmed for weeks without feeling relief.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Navigating Difficult Transitions</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Coping with the loss of a loved one, family dispute, separation, job loss, or academic pressure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Changes in Daily Rhythms</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Noticeable disruption in regular sleep patterns, appetite, energy, or ability to concentrate at work/school.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Social Withdrawal & Isolation</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Pulling away from friends, family, and hobbies that once brought joy or purpose.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Post-Crisis or Disaster Distress</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Experiencing flashbacks, hyper-vigilance, or intense emotional distress following an earthquake, flood, or accident.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008C4A]" />
                <span>Desire for Personal Growth</span>
              </h4>
              <p className="text-slate-600 text-xs">
                Seeking greater self-understanding, better boundary setting, and stronger emotional communication.
              </p>
            </div>
          </div>

          {/* Educational Disclaimer Callout */}
          <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-500 border border-slate-200">
            <p className="font-medium text-slate-700">Notice on Diagnostic Boundaries:</p>
            <p>
              Paila Nepal Wellness Centre provides supportive psychosocial counselling and educational interventions. We do not diagnose psychiatric illnesses online. If an individual experiences acute clinical crises, immediate medical or hospital evaluation is advised.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA: Talk to Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#008C4A] to-[#1457A6] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {isNepali ? "तपाईं एक्लो हुनुहुन्न — हामीसँग कुरा गर्नुहोस्" : "You Are Not Alone — Talk to Us"}
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
            {isNepali
              ? "तपाईंको गोपनीयता र आत्मसम्मानको पूर्ण कदर गर्दै हाम्रा प्रशिक्षित परामर्शदाताहरू सहयोगका लागि तत्पर छन्।"
              : "Our supportive team offers a compassionate, non-judgmental space to share what you are carrying."}
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenSupportModal('General Counselling')}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              {t.cta.talkToUs}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

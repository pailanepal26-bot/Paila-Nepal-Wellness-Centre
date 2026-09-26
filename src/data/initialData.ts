import { LeadershipMember, ServiceItem, ProgramItem, TrainingCourse, ResourceItem, FAQItem, AdminSettings, PailaEvent } from '../types';

export const initialLeadership: LeadershipMember[] = [
  {
    id: 'sunil-lama',
    name: 'Sunil Lama',
    nameNe: 'सुनिल लामा',
    role: 'Founder',
    roleNe: 'संस्थापक',
    titles: [
      'Psychologist',
      'Advocate',
      'Trainer',
      'Faculty Member'
    ],
    titlesNe: [
      'मनोवैज्ञानिक',
      'अधिवक्ता',
      'प्रशिक्षक',
      'फ्याकल्टी मेम्बर'
    ],
    additionalTitles: 'Advocate / Psychologist / Cert. Arbitrator / Reg. Mediator',
    additionalTitlesNe: 'अधिवक्ता / मनोवैज्ञानिक / प्रमाणित मध्यस्थकर्ता (Cert. Arbitrator) / दर्तावाल मेलमिलापकर्ता (Reg. Mediator)',
    academicBackground: [
      'M.Phil.-Ph.D. Psychology (Scholar)',
      'M.A. Psychology (Clinical)',
      'Master’s of Crisis Management Studies',
      'L.L.B.',
      'B.A. Psychology & Social Work'
    ],
    academicBackgroundNe: [
      'एम.फिल.-विद्यावारिधि मनोविज्ञान (शोधार्थी)',
      'एम.ए. मनोविज्ञान (क्लिनिकल)',
      'मास्टर्स अफ क्राइसिस म्यानेजमेन्ट स्टडिज (Masters of Crisis Management Studies)',
      'एल.एल.बी. (L.L.B.)',
      'बी.ए. मनोविज्ञान तथा सामाजिक कार्य (Psychology & Social Work)'
    ],
    bio: 'Dedicated to connecting mental health, psychosocial wellbeing, and crisis resilience across communities in Nepal through professional practice, education, and advocacy.',
    bioNe: 'व्यावसायिक अभ्यास, शिक्षा र पैरवी मार्फत नेपालका समुदायहरूमा मानसिक स्वास्थ्य, मनोसामाजिक कल्याण र संकट उत्थानशीलतालाई जोड्न समर्पित।',
    notice: 'Professional and academic details provided by the organization.',
    noticeNe: 'व्यावसायिक तथा शैक्षिक विवरण संस्थाद्वारा प्रदान गरिए अनुसार।'
  },
  {
    id: 'sharada-sunuwar',
    name: 'Sharada Sunuwar',
    nameNe: 'शारदा सुनुवार',
    role: 'Co-Founder',
    roleNe: 'सह-संस्थापक',
    titles: [
      'Psychologist',
      'Trainer',
      'Faculty Member'
    ],
    titlesNe: [
      'मनोवैज्ञानिक',
      'प्रशिक्षक',
      'फ्याकल्टी मेम्बर'
    ],
    academicBackground: [
      'M.A. Psychology (Clinical)',
      'B.A. Psychology & Social Work'
    ],
    academicBackgroundNe: [
      'एम.ए. मनोविज्ञान (क्लिनिकल)',
      'बी.ए. मनोविज्ञान तथा सामाजिक कार्य (Psychology & Social Work)'
    ],
    bio: 'Focused on psychosocial counselling, child and adolescent emotional wellbeing, capacity building for community workers, and trauma-informed support.',
    bioNe: 'मनोसामाजिक परामर्श, बालबालिका तथा किशोरकिशोरीहरूको भावनात्मक कल्याण, समुदायका कार्यकर्ताहरूको क्षमता विकास र ट्रमा-सूचित सहयोगमा केन्द्रित।',
    notice: 'Professional and academic details provided by the organization.',
    noticeNe: 'व्यावसायिक तथा शैक्षिक विवरण संस्थाद्वारा प्रदान गरिए अनुसार।'
  }
];

export const initialServices: ServiceItem[] = [
  // Category 1: Mental Health & Psychosocial Support
  {
    id: 'individual-counselling',
    title: 'Individual Counselling',
    titleNe: 'व्यक्तिगत परामर्श',
    category: 'mental-health',
    description: 'Confidential, one-on-one supportive sessions to navigate emotional difficulties, life transitions, anxiety, and personal challenges in a safe environment.',
    descriptionNe: 'सुरक्षित र गोप्य वातावरणमा भावनात्मक कठिनाइ, तनाव र व्यक्तिगत चुनौतीहरू सामना गर्न मद्दत गर्ने व्यक्तिगत परामर्श सत्र।',
    keyPoints: ['One-on-one supportive environment', 'Empathetic and confidential listening', 'Goal-oriented coping strategies'],
    keyPointsNe: ['व्यक्तिगत र सुरक्षित वातावरण', 'सहानुभूतिपूर्ण र गोप्य कुराकानी', 'व्यावहारिक समस्या समाधान र सामना गर्ने सीप']
  },
  {
    id: 'family-counselling',
    title: 'Family Counselling',
    titleNe: 'पारिवारिक परामर्श',
    category: 'mental-health',
    description: 'Strengthening communication, understanding family dynamics, resolving conflicts, and building emotional resilience within families.',
    descriptionNe: 'पारिवारिक सम्बन्ध, सञ्चार सुधार, असमझदारी समाधान र परिवारभित्र भावनात्मक सामञ्जस्य सुदृढ गर्ने सेवा।',
    keyPoints: ['Enhanced positive communication', 'Conflict de-escalation', 'Mutual emotional support'],
    keyPointsNe: ['सकारात्मक पारिवारिक सञ्चार', 'द्वन्द्व न्यूनीकरण', 'आपसी भावनात्मक सहयोग']
  },
  {
    id: 'group-counselling',
    title: 'Group Counselling',
    titleNe: 'सामूहिक परामर्श',
    category: 'mental-health',
    description: 'Facilitated group sessions offering shared mutual support, psychoeducation, and communal resilience in a structured and respectful atmosphere.',
    descriptionNe: 'समान चुनौती सामना गरिरहेका व्यक्तिहरू बीच साझा सिकाइ, समझदारी र पारस्परिक सहयोगका लागि सहजीकरण गरिएका सामूहिक सत्रहरू।',
    keyPoints: ['Shared experiences & empathy', 'Reduced isolation', 'Collaborative peer learning'],
    keyPointsNe: ['साझा अनुभव र समझदारी', 'एक्लोपन न्यूनीकरण', 'सहकर्मीबाट सिक्ने वातावरण']
  },
  {
    id: 'stress-emotional-support',
    title: 'Stress Management & Emotional Wellbeing',
    titleNe: 'तनाव व्यवस्थापन तथा भावनात्मक कल्याण',
    category: 'mental-health',
    description: 'Practical, evidence-informed guidance on managing daily stressors, emotional overwhelm, burnout, and enhancing psychological wellbeing.',
    descriptionNe: 'दैनिक तनाव, कामको चाप, थकान व्यवस्थापन गर्न र मानसिक सन्तुलन कायम राख्न व्यावहारिक मार्गदर्शन।',
    keyPoints: ['Mind-body calming techniques', 'Identifying stress triggers', 'Healthy boundary setting'],
    keyPointsNe: ['मन-मस्तिष्क शान्त पार्ने विधि', 'तनावका कारकहरूको पहिचान', 'सन्तुलित जीवनशैली सीप']
  },
  {
    id: 'grief-loss-support',
    title: 'Grief and Loss Support',
    titleNe: 'शोक तथा क्षति सहयोग',
    category: 'mental-health',
    description: 'Compassionate companionship and psychosocial care through bereavement, significant loss, life crises, and prolonged grief processes.',
    descriptionNe: 'प्रियजनको वियोग, गम्भीर क्षति वा जीवनका ठूला संकटहरूका बेला भावनात्मक साथ र मनोसामाजिक स्याहार।',
    keyPoints: ['Non-judgmental grief processing', 'Support through mourning phases', 'Restoring daily equilibrium'],
    keyPointsNe: ['शोक व्यवस्थापनमा सहयोग', 'भावनात्मक अभिव्यक्ति', 'पुनर्लाभको यात्रामा साथ']
  },
  {
    id: 'trauma-informed-pfa',
    title: 'Psychological First Aid & Trauma-Informed Support',
    titleNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA) र ट्रमा-सूचित सहयोग',
    category: 'mental-health',
    description: 'Immediate, compassionate stabilization following distressing incidents, respecting dignity, fostering safety, and connecting to resources.',
    descriptionNe: 'तनावपूर्ण वा विपद्जन्य घटनापछि तत्काल मनोवैज्ञानिक प्राथमिक उपचार (PFA), सुरक्षाको अनुभूति र स्रोतहरूसँग समन्वय।',
    keyPoints: ['Look, Listen, Link framework', 'Safety & stabilization focus', 'Trauma-sensitive care'],
    keyPointsNe: ['हेर, सुन, जोड (Look, Listen, Link)', 'सुरक्षा र स्थिरता', 'ट्रमा-संवेदनशील दृष्टिकोण']
  },

  // Category 2: Child, Adolescent & Family Wellbeing
  {
    id: 'child-adolescent-support',
    title: 'Child & Adolescent Psychosocial Support',
    titleNe: 'बालबालिका तथा किशोरकिशोरी मनोसामाजिक सहयोग',
    category: 'child-family',
    description: 'Developmentally appropriate emotional support, creative expression, and guidance for children and teenagers facing distress or peer pressure.',
    descriptionNe: 'बालबालिका तथा किशोरकिशोरीहरूको उमेर सुहाउँदो भावनात्मक अभिव्यक्ति, अध्ययन-व्यवहार र साथीसङ्गतका चुनौतीहरूमा सहयोग।',
    keyPoints: ['Age-appropriate approaches', 'Emotional regulation skills', 'Self-esteem and identity'],
    keyPointsNe: ['उमेर-अनुकूल माध्यम', 'भावना व्यवस्थापन सीप', 'आत्मविश्वास र व्यक्तित्व विकास']
  },
  {
    id: 'parenting-family-support',
    title: 'Parenting and Family Support',
    titleNe: 'अभिभावकत्व र पारिवारिक सहयोग',
    category: 'child-family',
    description: 'Guiding parents and caregivers in positive communication, positive discipline, empathetic listening, and nurturing family environments.',
    descriptionNe: 'अभिभावकहरूलाई सकारात्मक अनुशासन, सन्तानसँग आत्मीय सञ्चार र बाल-मैत्री पारिवारिक वातावरण निर्माणमा सहयोग।',
    keyPoints: ['Positive discipline approaches', 'Active family listening', 'Resolving parent-child barriers'],
    keyPointsNe: ['सकारात्मक अनुशासन पद्धति', 'पारिवारिक संवाद', 'अभिभावक-सन्तान सुमधुर सम्बन्ध']
  },
  {
    id: 'school-psychosocial-activities',
    title: 'School-Based Psychosocial Activities & Life Skills',
    titleNe: 'विद्यालय-आधारित मनोसामाजिक क्रियाकलाप र जीवन उपयोगी सीप',
    category: 'child-family',
    description: 'Fostering emotional literacy, anti-bullying awareness, resilience, positive communication, and child protection in school environments.',
    descriptionNe: 'विद्यालयमा बालबालिकाको भावनात्मक साक्षरता, पारस्परिक सद्भाव, जीवन उपयोगी सीप र बाल संरक्षण सचेतना।',
    keyPoints: ['Emotional literacy', 'Conflict resolution among peers', 'Child protection awareness'],
    keyPointsNe: ['भावनात्मक साक्षरता', 'सहपाठीबीच सद्भाव', 'बाल अधिकार र संरक्षण सचेतना']
  },

  // Category 3: Training & Capacity Development
  {
    id: 'counselling-skills-training',
    title: 'Psychosocial Counselling & Helping Skills Training',
    titleNe: 'मनोसामाजिक परामर्श तथा सहयोगी सीप तालिम',
    category: 'training',
    description: 'Structured capacity development in core helping skills, active listening, case documentation, ethics, and supportive communication.',
    descriptionNe: 'सहानुभूतिपूर्ण सुन्ने कला, परामर्श सीप, केस व्यवस्थापन, व्यावसायिक नैतिकता र सहयोगी संवाद तालिम।',
    keyPoints: ['Core active listening skills', 'Ethics & confidentiality principles', 'Structured case documentation'],
    keyPointsNe: ['सक्रिय सुनाइ र संवाद', 'व्यावसायिक नैतिकता र गोपनीयता', 'केस व्यवस्थापन विधि']
  },
  {
    id: 'pfa-training',
    title: 'Psychological First Aid (PFA) Training',
    titleNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA) तालिम',
    category: 'training',
    description: 'Equipping frontline responders, teachers, volunteers, and workers with practical humanitarian PFA principles during crises and disasters.',
    descriptionNe: 'आपत्कालीन अवस्था वा विपद्मा अग्रपंक्तिमा खटिने स्वयंसेवक, शिक्षक र कार्यकर्तालाई PFA का आधारभूत सीप तालिम।',
    keyPoints: ['Crisis communication protocols', 'Look, Listen, Link methodology', 'Self-care for responders'],
    keyPointsNe: ['आपत्कालीन सञ्चार सीप', 'हेर, सुन, जोड विधि', 'सहयोगीको आत्म-हेरचाह (Self-care)']
  },
  {
    id: 'teacher-volunteer-capacity',
    title: 'Teacher, Community & Volunteer Capacity Development',
    titleNe: 'शिक्षक, समुदाय तथा स्वयंसेवक क्षमता विकास',
    category: 'training',
    description: 'Empowering local educators and community leaders to identify early signs of emotional distress and facilitate supportive referral linkages.',
    descriptionNe: 'शिक्षक तथा स्थानीय नेतृत्वलाई भावनात्मक तनावका संकेतहरू समयमै पहिचान गर्न र उचित सहजीकरण गर्न सक्षम बनाउने।',
    keyPoints: ['Early identification of distress', 'Safe referral mechanisms', 'Community facilitation skills'],
    keyPointsNe: ['तनावको प्रारम्भिक पहिचान', 'सुरक्षित प्रेषण (Referral) प्रणाली', 'सामुदायिक सहजीकरण']
  },

  // Category 4: Disaster Management & Resilience
  {
    id: 'community-preparedness-drr',
    title: 'Community Disaster Preparedness & DRR',
    titleNe: 'सामुदायिक विपद् पूर्वतयारी तथा विपद् जोखिम न्यूनीकरण',
    category: 'disaster',
    description: 'Strengthening community understanding of local hazards, family preparedness plans, evacuation readiness, and safety measures.',
    descriptionNe: 'स्थानीय जोखिम पहिचान, पारिवारिक पूर्वतयारी योजना, सुरक्षित स्थान पहिचान र समुदायमा आधारित विपद् जोखिम न्यूनीकरण।',
    keyPoints: ['Community risk mapping', 'Family preparedness planning', 'Emergency drills and kits awareness'],
    keyPointsNe: ['सामुदायिक जोखिम नक्सांकन', 'पारिवारिक पूर्वतयारी योजना', 'आपत्कालीन झोला र अभ्यास']
  },
  {
    id: 'emergency-psychosocial-response',
    title: 'Emergency Psychosocial Support & Child-Friendly Spaces',
    titleNe: 'आपत्कालीन मनोसामाजिक सहयोग तथा बाल-मैत्री स्थान',
    category: 'disaster',
    description: 'Mobilizing psychosocial first aid, establishing safe spaces for children and families, and coordinating support during natural disasters.',
    descriptionNe: 'विपद्को समयमा बालबालिका र परिवारका लागि सुरक्षित बालमैत्री वातावरण, PFA र समुदाय-केन्द्रित आपत्कालीन सहयोग।',
    keyPoints: ['Rapid PFA deployment', 'Safe supportive spaces for children', 'Coordination with local mechanisms'],
    keyPointsNe: ['तत्काल PFA परिचालन', 'बालबालिकाका लागि सुरक्षित वातावरण', 'स्थानीय संयन्त्रसँग समन्वय']
  },
  {
    id: 'responder-care-rebuilding',
    title: 'Responder Wellbeing & Community Resilience Rebuilding',
    titleNe: 'कार्यकर्ता कल्याण तथा सामुदायिक पुनर्लाभ र उत्थानशीलता',
    category: 'disaster',
    description: 'Preventing burnout and secondary traumatic stress among first responders and assisting communities through structured long-term psychosocial recovery.',
    descriptionNe: 'अग्रपंक्तिमा खटिनेहरूको आत्म-हेरचाह, तनाव व्यवस्थापन र संकटपछिको दीर्घकालीन सामुदायिक उत्थानशीलता।',
    keyPoints: ['Compassion fatigue prevention', 'Peer debriefing & support', 'Long-term community resilience'],
    keyPointsNe: ['थकान र तनाव रोकथाम', 'पारस्परिक आत्म-समीक्षा', 'दीर्घकालीन सामुदायिक पुनःस्थापना']
  }
];

export const flagshipPrograms: ProgramItem[] = [
  {
    id: 'paila-resilient-community',
    title: 'Paila Resilient Community Program',
    titleNe: 'पाइला उत्थानशील समुदाय कार्यक्रम',
    tagline: 'Healthy Mind • Prepared Community • Resilient Nepal',
    taglineNe: 'स्वस्थ मन • पूर्वतयारीयुक्त समुदाय • उत्थानशील नेपाल',
    category: 'community',
    description: 'Our flagship umbrella program unifying mental health, disaster preparedness, child protection, and community empowerment into a cohesive community resilience framework.',
    descriptionNe: 'मानसिक स्वास्थ्य, विपद् पूर्वतयारी, बाल संरक्षण र सामुदायिक सशक्तीकरणलाई एकीकृत गरी समुदायलाई बलियो र उत्थानशील बनाउने हाम्रो मुख्य कार्यक्रम।',
    focus: [
      'Mental Health & Psychosocial Wellbeing',
      'Disaster Preparedness & Risk Awareness',
      'Psychological First Aid in Crises',
      'Child & Family Safety',
      'Local Volunteer Leadership'
    ],
    focusNe: [
      'मानसिक स्वास्थ्य र मनोसामाजिक कल्याण',
      'विपद् पूर्वतयारी र जोखिम सचेतना',
      'संकटमा मनोवैज्ञानिक प्राथमिक उपचार',
      'बालबालिका र परिवारको सुरक्षा',
      'स्थानीय स्वयंसेवक नेतृत्व'
    ],
    pillars: [
      {
        number: 1,
        title: 'HEALTHY MIND',
        titleNe: 'स्वस्थ मन',
        description: 'Mental health awareness, counselling, and psychosocial wellbeing.',
        descriptionNe: 'मानसिक स्वास्थ्य सचेतना, परामर्श र मनोसामाजिक कल्याण प्रवर्द्धन।'
      },
      {
        number: 2,
        title: 'PREPARED COMMUNITY',
        titleNe: 'पूर्वतयारीयुक्त समुदाय',
        description: 'Disaster preparedness, risk awareness, and community planning.',
        descriptionNe: 'विपद् पूर्वतयारी, जोखिम सचेतना र सामुदायिक योजना निर्माण।'
      },
      {
        number: 3,
        title: 'EMERGENCY SUPPORT',
        titleNe: 'आपत्कालीन सहयोग',
        description: 'Psychological First Aid and emergency psychosocial support.',
        descriptionNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA) र आपत्कालीन मनोसामाजिक सहायता।'
      },
      {
        number: 4,
        title: 'SAFE CHILDREN',
        titleNe: 'सुरक्षित बालबालिका',
        description: 'Child and adolescent wellbeing, school safety, and family support.',
        descriptionNe: 'बालबालिका तथा किशोरकिशोरीको कल्याण, विद्यालय सुरक्षा र पारिवारिक साथ।'
      },
      {
        number: 5,
        title: 'COMMUNITY RESILIENCE',
        titleNe: 'सामुदायिक उत्थानशीलता',
        description: 'Training, volunteers, leadership, and long-term resilience building.',
        descriptionNe: 'तालिम, स्वयंसेवक परिचालन, नेतृत्व र दीर्घकालीन उत्थानशीलता निर्माण।'
      }
    ]
  },
  {
    id: 'safe-school-healthy-mind',
    title: 'Safe School & Healthy Mind Program',
    titleNe: 'सुरक्षित विद्यालय तथा स्वस्थ मन कार्यक्रम',
    category: 'mental-health',
    description: 'Partnering with schools and educational institutions to integrate psychosocial awareness, teacher mental health training, and school disaster safety.',
    descriptionNe: 'विद्यालयहरूसँग सहकार्य गर्दै विद्यार्थी र शिक्षकहरूको मानसिक स्वास्थ्य प्रवर्द्धन, PFA र विद्यालय विपद् पूर्वतयारी अभिवृद्धि गर्ने कार्यक्रम।',
    focus: [
      'School mental health awareness',
      'Counselling awareness & stigma reduction',
      'Teacher capacity building & identification',
      'Psychological First Aid (PFA) in schools',
      'Disaster preparedness & evacuation drills',
      'Child protection awareness & positive school climate',
      'Emotional wellbeing & life skills education'
    ],
    focusNe: [
      'विद्यालय मानसिक स्वास्थ्य सचेतना',
      'परामर्श सम्बन्धी जानकारी र भ्रम न्यूनीकरण',
      'शिक्षक क्षमता विकास र समस्या पहिचान',
      'विद्यालयमा मनोवैज्ञानिक प्राथमिक उपचार',
      'विपद् पूर्वतयारी तथा अभ्यास (Drills)',
      'बाल संरक्षण सचेतना र सकारात्मक वातावरण',
      'भावनात्मक कल्याण र जीवन उपयोगी सीप'
    ]
  },
  {
    id: 'safe-child-resilient-family',
    title: 'Safe Child, Resilient Family',
    titleNe: 'सुरक्षित बालबालिका, उत्थानशील परिवार',
    category: 'community',
    description: 'Empowering families with knowledge and positive communication strategies to create safe, nurturing homes that shield children from distress.',
    descriptionNe: 'परिवारहरूलाई सकारात्मक सञ्चार, अभिभावकत्व सीप र पारिवारिक सुदृढीकरण मार्फत बालबालिकाका लागि सुरक्षित वातावरण निर्माण गर्न सहयोग गर्ने।',
    focus: [
      'Child wellbeing & developmental support',
      'Parenting support & positive discipline',
      'Family communication & conflict resolution',
      'Adolescent support & peer guidance',
      'Psychosocial resilience during challenges',
      'Referral and coordination with supportive networks'
    ],
    focusNe: [
      'बाल कल्याण र विकासमा सहयोग',
      'अभिभावकत्व सहयोग र सकारात्मक अनुशासन',
      'पारिवारिक संवाद र असमझदारी समाधान',
      'किशोरकिशोरी मार्गदर्शन',
      'चुनौतीपूर्ण अवस्थामा मनोसामाजिक उत्थानशीलता',
      'आवश्यक सहयोग संयन्त्रसँग समन्वय'
    ]
  },
  {
    id: 'community-volunteer-program',
    title: 'Community Volunteer Program',
    titleNe: 'सामुदायिक स्वयंसेवक कार्यक्रम',
    category: 'training',
    description: 'Training motivated community volunteers as local psychosocial first aiders and disaster preparedness focal points.',
    descriptionNe: 'स्थानीय स्वयंसेवकहरूलाई मनोवैज्ञानिक प्राथमिक उपचार (PFA), विपद् पूर्वतयारी र समुदाय सचेतनामा तालिम दिई परिचालन गर्ने कार्यक्रम।',
    focus: [
      'Community volunteer mobilization',
      'Psychological First Aid (PFA) skills',
      'Disaster preparedness & risk mapping',
      'Community awareness campaigns',
      'Emergency support during critical moments',
      'Establishing supportive referral systems'
    ],
    focusNe: [
      'सामुदायिक स्वयंसेवक परिचालन',
      'मनोवैज्ञानिक प्राथमिक उपचार सीप',
      'विपद् पूर्वतयारी र जोखिम नक्सांकन',
      'समुदायमा सचेतनामूलक अभियान',
      'संकटका बेला आपत्कालीन सहयोग',
      'सहयोगका लागि प्रभावकारी प्रेषण (Referral) प्रणाली'
    ]
  },
  {
    id: 'emergency-psychosocial-response-program',
    title: 'Emergency Psychosocial Response',
    titleNe: 'आपत्कालीन मनोसामाजिक प्रतिकार्य',
    category: 'disaster',
    description: 'A structured crisis response approach ensuring psychological first aid, child protection, and emotional care are delivered alongside relief efforts.',
    descriptionNe: 'विपद् र संकटका बेला भौतिक राहतका साथसाथै तत्काल मनोवैज्ञानिक प्राथमिक उपचार, बाल संरक्षण र भावनात्मक हेरचाह सुनिश्चित गर्ने पहल।',
    focus: [
      'Psychological First Aid delivery',
      'Psychosocial support for affected populations',
      'Child and family support spaces',
      'Community coordination with local authorities',
      'Responder wellbeing & burnout prevention',
      'Referral and linkage to specialized care'
    ],
    focusNe: [
      'मनोवैज्ञानिक प्राथमिक उपचार (PFA) सेवा',
      'प्रभावित समुदायलाई मनोसामाजिक सहयोग',
      'बालबालिका तथा परिवारका लागि सुरक्षित स्थल',
      'स्थानीय संयन्त्र र निकायहरूसँग समन्वय',
      'कार्यकर्ता तथा स्वयंसेवकको आत्म-हेरचाह',
      'विशिष्ट सेवाका लागि उचित समन्वय'
    ]
  }
];

export const disasterFourStages = [
  {
    number: 1,
    stage: 'PREPARE',
    stageNe: 'पूर्वतयारी (PREPARE)',
    tagline: 'Risk reduction & readiness before crises strike',
    taglineNe: 'संकट आउनुपूर्व जोखिम न्यूनीकरण र तयारी',
    color: '#008C4A',
    items: [
      'Risk awareness & hazard assessment',
      'Community preparedness planning',
      'Disaster planning & family contingency protocols',
      'Emergency communication networks',
      'School drills & simulation exercises',
      'Evacuation planning & safe route identification',
      'Emergency kits (Go-Bags) orientation',
      'Volunteer training & frontline readiness'
    ],
    itemsNe: [
      'जोखिम सचेतना तथा विपद् जोखिम मूल्यांकन',
      'सामुदायिक पूर्वतयारी योजना',
      'विपद् योजना र पारिवारिक आपत्कालीन कार्यविधि',
      'आपत्कालीन सञ्चार सञ्जाल',
      'विद्यालयमा पूर्वअभ्यास र सिमुलेसन',
      'निकासी योजना र सुरक्षित बाटो पहिचान',
      'आपत्कालीन झोला (Go-Bag) सम्बन्धी जानकारी',
      'स्वयंसेवक तालिम तथा अग्रपंक्ति तयारी'
    ]
  },
  {
    number: 2,
    stage: 'RESPOND',
    stageNe: 'प्रतिकार्य (RESPOND)',
    tagline: 'Immediate, dignified psychosocial stabilization',
    taglineNe: 'तत्काल, मर्यादित मनोसामाजिक स्थिरता र सहयोग',
    color: '#1457A6',
    items: [
      'Psychological First Aid (PFA) implementation',
      'Immediate psychosocial support',
      'Emergency communication & comforting presence',
      'Child and family supportive interventions',
      'Community coordination & frontline linkage',
      'Supportive referral to essential resources'
    ],
    itemsNe: [
      'मनोवैज्ञानिक प्राथमिक उपचार (PFA) कार्यान्वयन',
      'तत्काल मनोसामाजिक सहयोग',
      'आपत्कालीन संवाद र भावनात्मक ढाडस',
      'बालबालिका र परिवार केन्द्रित सहयोग',
      'सामुदायिक समन्वय र अग्रपंक्ति सहकार्य',
      'आवश्यक सेवा र स्रोतहरूसँग प्रेषण समन्वय'
    ]
  },
  {
    number: 3,
    stage: 'RECOVER',
    stageNe: 'पुनर्लाभ (RECOVER)',
    tagline: 'Healing, grieving, and rebuilding lives',
    taglineNe: 'घाउहरूमा मल्हम, शोक व्यवस्थापन र पुनःस्थापना',
    color: '#55B8E8',
    items: [
      'Psychosocial recovery processes',
      'Community support circles & mutual aid',
      'Family support & emotional re-anchoring',
      'Grief and loss support',
      'Responder wellbeing & defusing burnout',
      'Community rebuilding with dignity'
    ],
    itemsNe: [
      'मनोसामाजिक पुनर्लाभ प्रक्रिया',
      'सामुदायिक सहयोग समूह र पारस्परिक साथ',
      'पारिवारिक संबल र भावनात्मक पुनःस्थापना',
      'शोक तथा क्षति व्यवस्थापन सहयोग',
      'कार्यकर्ता कल्याण र तनाव न्यूनीकरण',
      'मर्यादित सामुदायिक पुनर्निर्माण'
    ]
  },
  {
    number: 4,
    stage: 'BUILD RESILIENCE',
    stageNe: 'उत्थानशीलता निर्माण (BUILD RESILIENCE)',
    tagline: 'Long-term capacity to withstand future adversity',
    taglineNe: 'भविष्यका चुनौतीहरूको सामना गर्न दीर्घकालीन क्षमता',
    color: '#00703b',
    items: [
      'Community education & public awareness',
      'Sustained volunteer networks',
      'School resilience & mental health integration',
      'Mental health promotion & stigma eradication',
      'Local capacity development across wards',
      'Research, monitoring, and program learning'
    ],
    itemsNe: [
      'सामुदायिक शिक्षा र जनचेतना',
      'दीर्घकालीन स्वयंसेवक सञ्जाल',
      'विद्यालय उत्थानशीलता र मानसिक स्वास्थ्य समायोजन',
      'मानसिक स्वास्थ्य प्रवर्द्धन र भ्रम निवारण',
      'स्थानीय स्तरमा दिगो क्षमता विकास',
      'अनुसन्धान, अनुगमन र निरन्तर सिकाइ'
    ]
  }
];

export const featuredTraining: TrainingCourse = {
  id: 'six-month-psychosocial-counselling',
  title: '6-Month Psychosocial Counselling Training',
  titleNe: '६-महिने मनोसामाजिक परामर्श तालिम',
  subtitle: 'Based on the CTEVT Psychosocial Counselor Curriculum',
  subtitleNe: 'सीटीईभीटी (CTEVT) मनोसामाजिक परामर्शदाता पाठ्यक्रममा आधारित',
  duration: '6 Months',
  totalHours: '780 Hours',
  ojtHours: '160 Hours OJT (On-the-Job Training)',
  learningModel: 'Theory + Practical + On-the-Job Training',
  learningModelNe: 'सैद्धान्तिक + प्रयोगात्मक + कार्यस्थल अभ्यास (OJT)',
  curriculumTopics: [
    {
      title: 'Psychosocial Wellbeing & Intervention',
      titleNe: 'मनोसामाजिक कल्याण तथा हस्तक्षेप',
      description: 'Understanding the holistic psychosocial framework, social determinants, and levels of intervention.',
      descriptionNe: 'समग्र मनोसामाजिक दृष्टिकोण, सामाजिक प्रभाव र हस्तक्षेपका विभिन्न तहहरूको अध्ययन।'
    },
    {
      title: 'Mental Health & Common Mental Health Problems',
      titleNe: 'मानसिक स्वास्थ्य र सामान्य मानसिक स्वास्थ्य समस्याहरू',
      description: 'Recognizing anxiety, depressive symptoms, acute stress, and differentiating distress from disorders.',
      descriptionNe: 'चिन्ता, डिप्रेसनका लक्षण, तनावको पहिचान र भावनात्मक कठिनाइको विश्लेषण।'
    },
    {
      title: 'Basic Counselling Skills',
      titleNe: 'आधारभूत परामर्श सीपहरू',
      description: 'Active listening, empathy, unconditional positive regard, probing, and paraphrasing.',
      descriptionNe: 'सक्रिय सुनाइ, सहानुभूति, निष्पक्ष स्वीकार्यता र प्रभावकारी प्रश्न सोध्ने कला।'
    },
    {
      title: 'Counselling Approaches & Process',
      titleNe: 'परामर्शका विधि तथा प्रक्रिया',
      description: 'Stages of counselling: relationship building, exploration, goal setting, action, and closure.',
      descriptionNe: 'परामर्शका चरणहरू: सम्बन्ध स्थापना, समस्या अन्वेषण, लक्ष्य निर्धारण, कार्यान्वयन र समापन।'
    },
    {
      title: 'Communication & Helping Skills',
      titleNe: 'सञ्चार तथा सहयोगी सीपहरू',
      description: 'Non-verbal communication, managing silence, reflecting feelings, and non-defensive facilitation.',
      descriptionNe: 'अशाब्दिक सञ्चार, मौनताको सदुपयोग, भावनाको प्रतिबिम्बन र सहयोगी सहजीकरण।'
    },
    {
      title: 'Individual, Family & Group Counselling',
      titleNe: 'व्यक्तिगत, पारिवारिक तथा सामूहिक परामर्श',
      description: 'Facilitating individual healing, family system dynamics, and structured group support processes.',
      descriptionNe: 'व्यक्तिगत सत्र, पारिवारिक सम्बन्ध सुधार र सामूहिक परामर्श सञ्चालन विधि।'
    },
    {
      title: 'Psychological First Aid (PFA)',
      titleNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA)',
      description: 'Look, Listen, Link humanitarian framework during emergencies, trauma, and accidents.',
      descriptionNe: 'हेर, सुन, जोड (Look, Listen, Link) विधि र आपत्कालीन भावनात्मक सहायता।'
    },
    {
      title: 'Case Management & Documentation',
      titleNe: 'केस व्यवस्थापन तथा अभिलेखीकरण',
      description: 'Professional intake forms, progress notes, ethical record keeping, and confidentiality safeguarding.',
      descriptionNe: 'व्यवस्थित केस फाइल, प्रगति विवरण, सुरक्षित अभिलेखीकरण र गोपनीयता व्यवस्थापन।'
    },
    {
      title: 'Referral, Linkage & Coordination',
      titleNe: 'प्रेषण (Referral), समन्वय र सहकार्य',
      description: 'Identifying scope boundaries, mapping local resources, and making safe clinical referrals.',
      descriptionNe: 'आफ्नो कार्यक्षेत्रको सीमा, स्थानीय स्रोत नक्सांकन र सुरक्षित प्रेषण विधि।'
    },
    {
      title: 'Child, Adolescent & Family Psychosocial Support',
      titleNe: 'बालबालिका, किशोरकिशोरी र परिवार मनोसामाजिक सहयोग',
      description: 'Developmental milestones, child-friendly communication, adolescent identity, and parenting guidance.',
      descriptionNe: 'बालबालिकाको विकास चरण, बाल-मैत्री सञ्चार, किशोरावस्थाका चुनौती र अभिभावकत्व।'
    },
    {
      title: 'Crisis & Trauma-Informed Support',
      titleNe: 'संकट तथा ट्रमा-सूचित सहयोग',
      description: 'De-escalation principles, trauma sensitivity, safety planning, and preventing re-traumatization.',
      descriptionNe: 'संकट व्यवस्थापन, ट्रमा-संवेदनशील दृष्टिकोण, सुरक्षा योजना र पुनःचोटबाट जोगाउने विधि।'
    },
    {
      title: 'Community-Based Intervention',
      titleNe: 'समुदायमा आधारित हस्तक्षेप',
      description: 'Community entry, mobilizing local leadership, community awareness, and collective resilience.',
      descriptionNe: 'समुदायमा पहुँच, स्थानीय नेतृत्व परिचालन, जनचेतना र सामूहिक उत्थानशीलता।'
    },
    {
      title: 'Ethics & Confidentiality',
      titleNe: 'व्यावसायिक नैतिकता तथा गोपनीयता',
      description: 'Ethical boundaries, informed consent, client rights, dual relationships, and duty of care.',
      descriptionNe: 'नैतिक आचारसंहिता, सुसूचित सहमति, सेवाग्राहीको अधिकार र व्यावसायिक मर्यादा।'
    },
    {
      title: 'Facilitation & Psychoeducation',
      titleNe: 'सहजीकरण तथा मनोशिक्षा',
      description: 'Designing community psychoeducation sessions, workshops, and stigma reduction initiatives.',
      descriptionNe: 'मनोशिक्षा सत्रहरूको ढाँचा निर्माण, कार्यशाला सञ्चालन र सचेतना विस्तार।'
    },
    {
      title: 'Supervision & Professional Development',
      titleNe: 'सुपरभिजन तथा व्यावसायिक विकास',
      description: 'Clinical supervision, self-care, reflective practice, and preventing compassion fatigue.',
      descriptionNe: 'व्यावसायिक सुपरभिजन, आत्म-हेरचाह (Self-Care), र निरन्तर सिकाइ अभ्यास।'
    },
    {
      title: 'Practical & Field Learning (160 Hours OJT)',
      titleNe: 'प्रयोगात्मक तथा कार्यस्थल अभ्यास (१६० घण्टा OJT)',
      description: 'Supervised on-the-job training in real-world supportive settings applying taught principles.',
      descriptionNe: 'सुपरभाइजरको प्रत्यक्ष निगरानीमा वास्तविक कार्यस्थलमा प्रयोगात्मक अभ्यास।'
    }
  ],
  targetParticipants: [
    '+2 / Intermediate graduates in any stream',
    'Psychology students and scholars',
    'Social Work (BSW/MSW) students and graduates',
    'Education faculty and school teachers',
    'Health-related students and healthcare professionals',
    'Community development workers and NGO practitioners',
    'Frontline volunteers and humanitarian responders',
    'Individuals committed to psychosocial care and community resilience'
  ],
  targetParticipantsNe: [
    'कुनै पनि संकायमा +२ / प्रवीणता प्रमाणपत्र उत्तीर्ण गरेका व्यक्तिहरू',
    'मनोविज्ञानका विद्यार्थी तथा शोधार्थीहरू',
    'सामाजिक कार्य (BSW/MSW) का विद्यार्थी तथा अभ्यासकर्ताहरू',
    'शिक्षा क्षेत्रका शिक्षक, प्राध्यापक तथा सहजकर्ताहरू',
    'स्वास्थ्यकर्मी तथा स्वास्थ्य सम्बन्धी विद्यार्थीहरू',
    'सामुदायिक विकास कार्यकर्ता तथा सामाजिक संस्थाका प्रतिनिधिहरू',
    'अग्रपंक्तिमा खटिने स्वयंसेवक तथा विपद् प्रतिकार्यकर्ताहरू',
    'मनोसामाजिक सेवा र सामुदायिक कल्याणमा रुचि भएका व्यक्तिहरू'
  ],
  engagementAreas: [
    'Counselling and psychosocial support settings',
    'Community-based health and wellness initiatives',
    'Schools, colleges, and educational institutions',
    'Child and family welfare services',
    'Humanitarian relief and disaster preparedness teams',
    'Rehabilitation and social service programs',
    'Community development and public awareness campaigns'
  ],
  engagementAreasNe: [
    'परामर्श तथा मनोसामाजिक सहयोग केन्द्रहरू',
    'समुदायमा आधारित स्वास्थ्य तथा कल्याणकारी कार्यक्रमहरू',
    'विद्यालय, कलेज तथा शैक्षिक संस्थाहरू',
    'बालबालिका तथा परिवार कल्याण सम्बन्धी कार्यक्रमहरू',
    'मानवीय सहायता तथा विपद् पूर्वतयारी टोलीहरू',
    'पुनर्स्थापना तथा सामाजिक सेवा केन्द्रहरू',
    'सामुदायिक विकास तथा जनचेतनामूलक अभियानहरू'
  ],
  disclaimer: 'Eligibility and admission requirements may be subject to applicable institutional and regulatory requirements. This course is based on the CTEVT Psychosocial Counselor curriculum. Paila Nepal Wellness Centre presents this curriculum for capacity development; completion does not guarantee employment or institutional placement.',
  disclaimerNe: 'योग्यता र भर्नाका आवश्यकताहरू सम्बन्धित संस्थागत र कानुनी व्यवस्था अनुसार हुन सक्छन्। यो तालिम सीटीईभीटी (CTEVT) मनोसामाजिक परामर्शदाता पाठ्यक्रममा आधारित छ। यस तालिमले रोजगारी वा पदस्थापनाको कुनै ग्यारेन्टी गर्दैन।'
};

export const initialResources: ResourceItem[] = [
  {
    id: 'pfa-core-actions',
    title: 'Psychological First Aid (PFA): The Look, Listen & Link Guide',
    titleNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA): हेर, सुन र जोड मार्गदर्शन',
    category: 'Psychological First Aid',
    categoryNe: 'मनोवैज्ञानिक प्राथमिक उपचार',
    readTime: '6 min read',
    description: 'An evidence-informed, humane approach to supporting people in distress following a critical event or natural disaster.',
    descriptionNe: 'विपद् वा संकटका बेला संकटग्रस्त व्यक्तिहरूलाई मानवीय र मर्यादित सहयोग पुर्याउने आधारभूत मार्गदर्शन।',
    keyPoints: [
      'Safety and dignity first',
      'Look for safety and people with urgent needs',
      'Listen empathetically without forcing them to talk',
      'Link to basic needs, family, and credible services'
    ],
    content: [
      {
        heading: 'What is Psychological First Aid (PFA)?',
        text: 'Psychological First Aid describes a humane, supportive response to a fellow human being who is suffering and who may need support. It involves basic, non-intrusive emotional care, assessing immediate needs, helping address urgent concerns, and connecting individuals to support systems.'
      },
      {
        heading: 'Action Principle 1: LOOK',
        text: 'Check for safety: Check your surroundings to ensure it is safe for you and others. Check for people with obvious urgent basic needs (medical help, shelter, food). Check for people with severe distress reactions (shaking, unresponsive, crying uncontrollably).'
      },
      {
        heading: 'Action Principle 2: LISTEN',
        text: 'Approach people who may need support with respect. Ask about people’s needs and concerns. Listen calmly without pressuring them to recount traumatic details. Help people feel calm and validated in their normal reactions to abnormal events.'
      },
      {
        heading: 'Action Principle 3: LINK',
        text: 'Help people address their basic needs and access services. Give accurate, truthful information. Connect people with loved ones and social support networks. Help solve practical problems. Refer to specialized care when necessary.'
      }
    ]
  },
  {
    id: 'grounding-techniques',
    title: 'Grounding & Calming Strategies for Emotional Overwhelm',
    titleNe: 'भावनात्मक तनाव शान्त पार्ने ग्राउन्डिङ विधिहरू',
    category: 'Mental Health',
    categoryNe: 'मानसिक स्वास्थ्य',
    readTime: '4 min read',
    description: 'Simple, practical somatic and cognitive exercises to restore calm when feeling acute anxiety, panic, or overwhelm.',
    descriptionNe: 'अत्यधिक चिन्ता वा तनाव भएको बेला मनलाई शान्त र वर्तमानमा केन्द्रित गर्ने सरल विधिहरू।',
    keyPoints: [
      '5-4-3-2-1 Sensory technique',
      'Box breathing (4-4-4-4 rhythm)',
      'Feet on the floor physical anchoring'
    ],
    content: [
      {
        heading: 'Understanding Grounding',
        text: 'When our mind experiences severe stress or trauma reminders, our nervous system enters a fight-or-flight state. Grounding brings cognitive awareness back into the present moment through physical sensory input.'
      },
      {
        heading: 'The 5-4-3-2-1 Sensory Anchor',
        text: 'Identify 5 things you can SEE around you, 4 things you can physically TOUCH, 3 sounds you can HEAR, 2 things you can SMELL, and 1 taste or positive affirmation. Name them slowly and breathe.'
      },
      {
        heading: 'Rhythmic Box Breathing',
        text: 'Inhale through your nose for 4 counts. Hold your breath for 4 counts. Exhale smoothly through your mouth for 4 counts. Rest empty for 4 counts. Repeat for 3 to 5 cycles.'
      }
    ]
  },
  {
    id: 'family-disaster-plan',
    title: 'Family Disaster Preparedness: Safety, Go-Bag & Communication',
    titleNe: 'पारिवारिक विपद् पूर्वतयारी: सुरक्षा, आपत्कालीन झोला र सञ्चार',
    category: 'Disaster Preparedness',
    categoryNe: 'विपद् पूर्वतयारी',
    readTime: '7 min read',
    description: 'Practical steps every household in Nepal can take to prepare for earthquakes, floods, landslides, and unexpected emergencies.',
    descriptionNe: 'भूकम्प, बाढी, पहिरो लगायतका आपत्कालीन अवस्थाका लागि घरपरिवारले गर्नुपर्ने आवश्यक तयारी।',
    keyPoints: [
      'Household hazard identification',
      'Emergency Go-Bag essentials list',
      'Family meeting point agreement'
    ],
    content: [
      {
        heading: 'Home Safety Assessment',
        text: 'Inspect your home for falling hazards. Secure tall cupboards, heavy photo frames, and gas cylinders. Identify safe spots in each room (away from glass windows and heavy masonry).'
      },
      {
        heading: 'The 72-Hour Emergency Go-Bag Checklist',
        text: 'Prepare a lightweight backpack containing: Bottled water & purification tablets; dry non-perishable foods; first aid kit & essential medicines; torch with extra batteries; whistle; copies of important documents in a waterproof bag; warm change of clothes; emergency cash.'
      },
      {
        heading: 'Family Communication Protocol',
        text: 'Designate an out-of-area family contact person whom everyone calls if local networks are disrupted. Agree on two meeting locations: one right outside your home and one outside your neighborhood (such as a local school ground).'
      }
    ]
  },
  {
    id: 'supporting-children-in-distress',
    title: 'Supporting Children and Adolescents in Challenging Times',
    titleNe: 'कठिन परिस्थितिमा बालबालिका तथा किशोरकिशोरीलाई सहयोग',
    category: 'Child & Family Wellbeing',
    categoryNe: 'बालबालिका तथा परिवार कल्याण',
    readTime: '5 min read',
    description: 'Guidance for parents, teachers, and guardians on recognizing childhood emotional distress and fostering safe expression.',
    descriptionNe: 'अभिभावक तथा शिक्षकहरूका लागि बालबालिकाको भावनात्मक अवस्था बुझ्न र सहयोग गर्ने सुझावहरू।',
    keyPoints: [
      'Normalizing reactions to unusual events',
      'Establishing predictable routines',
      'Encouraging creative expression (drawing, play)'
    ],
    content: [
      {
        heading: 'Recognizing Signs of Distress in Children',
        text: 'Children express distress differently depending on their age. Common signs include clinging behavior, bed-wetting, regression to earlier behaviors, nightmares, unexplained stomach aches, withdrawal, or unusual aggression.'
      },
      {
        heading: 'Reassurance and Honest Communication',
        text: 'Answer their questions simply and honestly according to their age. Do not make false promises, but reassure them about the concrete safety steps you and your family are taking right now.'
      },
      {
        heading: 'The Power of Routine & Play',
        text: 'Familiar routines provide safety. Keep consistent sleep, meal, and study times. Allow plenty of time for unstructured play and creative expression like drawing and storytelling.'
      }
    ]
  },
  {
    id: 'understanding-stress-burnout',
    title: 'Stress, Burnout & Self-Care for Frontline Responders',
    titleNe: 'तनाव, बर्नआउट र सहयोगीहरूको आत्म-हेरचाह',
    category: 'Community Resilience',
    categoryNe: 'सामुदायिक उत्थानशीलता',
    readTime: '5 min read',
    description: 'Maintaining your own psychological wellbeing while helping others in communities and crisis response.',
    descriptionNe: 'समुदाय र संकटमा अरूलाई सहयोग गर्दा आफ्नो मानसिक र भावनात्मक स्वास्थ्य कसरी जोगाउने?',
    keyPoints: [
      'Recognizing compassion fatigue',
      'Healthy professional boundaries',
      'The practice of debriefing and rest'
    ],
    content: [
      {
        heading: 'The Helping Paradox',
        text: 'Those dedicated to helping others often neglect their own emotional physical needs. Unmanaged chronic stress leads to emotional exhaustion, detachment, and reduced sense of personal accomplishment.'
      },
      {
        heading: 'Warning Indicators',
        text: 'Watch for persistent cynicism, physical exhaustion, trouble sleeping, guilt about resting, or feeling emotionally numb when hearing others’ stories.'
      },
      {
        heading: 'Practical Self-Care Commitments',
        text: 'Set realistic work limits. Maintain hydration and regular meals. Practice peer check-ins where feelings are discussed without judgment. Remember that self-care is not selfish—it is an ethical necessity for continued service.'
      }
    ]
  },
  {
    id: 'counselling-fundamentals',
    title: 'Understanding Counselling: Myths, Realities & Ethical Care',
    titleNe: 'परामर्श सेवा: भ्रम, यथार्थ र नैतिक अभ्यास',
    category: 'Counselling',
    categoryNe: 'परामर्श',
    readTime: '6 min read',
    description: 'Demystifying psychosocial counselling: what happens in a session, confidentiality boundaries, and the helping journey.',
    descriptionNe: 'परामर्श के हो र के होइन? यसका फाइदा, गोपनीयता र प्रक्रिया सम्बन्धी जानकारी।',
    keyPoints: [
      'Counselling is not advice-giving',
      'Confidentiality is protected',
      'Collaborative empowerment model'
    ],
    content: [
      {
        heading: 'What Actually Happens in Counselling?',
        text: 'Counselling is a professional, collaborative relationship between a trained counselor and a client. It is not about telling someone what to do or giving lectures; rather, it empowers individuals to understand their emotions, identify resources, and make informed choices.'
      },
      {
        heading: 'Common Myths Dispelled',
        text: 'Myth: "Counselling is only for people with severe mental disorders." Reality: Counselling helps anyone facing stress, grief, relationship difficulties, or decision-making dilemmas. Seeking support is a sign of self-awareness and strength.'
      },
      {
        heading: 'Confidentiality and Safety',
        text: 'Everything discussed in counselling is kept strictly confidential, within legal and professional safety exceptions (such as immediate risk of self-harm or harm to others). You have the right to feel respected and in control of your journey.'
      }
    ]
  }
];

export const initialFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Services',
    question: 'What services does Paila Nepal Wellness Centre provide?',
    questionNe: 'पाइला नेपाल वेलनेस सेन्टरले कस्ता सेवाहरू प्रदान गर्दछ?',
    answer: 'Paila Nepal Wellness Centre provides services across four core areas: (1) Mental Health & Psychosocial Support (individual, family, and group counselling, stress management, grief support, and Psychological First Aid); (2) Child, Adolescent & Family Wellbeing (parenting support, life skills, school-based activities); (3) Training & Capacity Development (psychosocial counselling skills, PFA, teacher and community worker training); and (4) Disaster Management & Community Resilience (disaster preparedness, emergency psychosocial support, responder care, and volunteer mobilization).',
    answerNe: 'पाइला नेपाल वेलनेस सेन्टरले मुख्य चार क्षेत्रमा सेवा प्रदान गर्दछ: (१) मानसिक स्वास्थ्य तथा मनोसामाजिक सहयोग (व्यक्तिगत, पारिवारिक तथा सामूहिक परामर्श, तनाव व्यवस्थापन, PFA); (२) बालबालिका, किशोरकिशोरी तथा पारिवारिक कल्याण; (३) तालिम तथा क्षमता विकास (परामर्श सीप, PFA, शिक्षक तथा स्वयंसेवक तालिम); र (४) विपद् व्यवस्थापन तथा सामुदायिक उत्थानशीलता (विपद् पूर्वतयारी, आपत्कालीन मनोसामाजिक सहायता र स्वयंसेवक परिचालन)।'
  },
  {
    id: 'faq-2',
    category: 'Counselling',
    question: 'Who can access counselling support?',
    questionNe: 'परामर्श सेवा कसले लिन सक्छन्?',
    answer: 'Anyone experiencing emotional distress, personal stress, anxiety, life transitions, grief, relationship hurdles, or seeking personal growth is welcome. We support adolescents, adults, and families. Services are scheduled based on professional scope and capacity. For urgent medical or psychiatric emergencies, immediate local hospital care should be sought.',
    answerNe: 'भावनात्मक तनाव, चिन्ता, जीवनका कठिन मोड, पारिवारिक वा व्यक्तिगत समस्या सामना गरिरहेका वा आत्म-विकास चाहने जो कोहीले पनि परामर्श सेवा लिन सक्नुहुन्छ। हामी किशोरकिशोरी, वयस्क तथा परिवारहरूलाई सहयोग गर्दछौं।'
  },
  {
    id: 'faq-3',
    category: 'Mental Health',
    question: 'What is Psychological First Aid (PFA)?',
    questionNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA) भनेको के हो?',
    answer: 'Psychological First Aid (PFA) is a humane, supportive, and practical response to people in immediate distress following crises, natural disasters, or traumatic events. Grounded in the "Look, Listen, Link" principles, PFA provides non-intrusive emotional comfort, addresses immediate safety and practical needs, and connects people to appropriate support systems without requiring invasive clinical therapy.',
    answerNe: 'मनोवैज्ञानिक प्राथमिक उपचार (PFA) विपद् वा संकटको सामना गरिरहेका व्यक्तिहरूलाई तत्काल दिइने मानवीय र व्यावहारिक भावनात्मक सहयोग हो। यो "हेर, सुन, जोड" (Look, Listen, Link) सिद्धान्तमा आधारित छ, जसले पीडित व्यक्तिलाई सुरक्षाको अनुभूति गराउन र आवश्यक सेवाहरूसँग जोड्न मद्दत गर्दछ।'
  },
  {
    id: 'faq-4',
    category: 'Mental Health',
    question: 'What is psychosocial support?',
    questionNe: 'मनोसामाजिक सहयोग (Psychosocial Support) भनेको के हो?',
    answer: 'Psychosocial support addresses both the psychological wellbeing (thoughts, emotions, coping strategies) and social environment (relationships, family, community, culture) of a person. It recognizes that mental health does not exist in isolation, but is deeply connected to family dynamics, social connection, and community resilience.',
    answerNe: 'मनोसामाजिक सहयोगले व्यक्तिको मनोवैज्ञानिक पक्ष (सोच, भावना, व्यवहार) र उसको सामाजिक परिवेश (परिवार, समाज, सम्बन्ध) दुवैलाई सम्बोधन गर्दछ। यसले स्वस्थ समाज र सकारात्मक सम्बन्धले मानसिक स्वास्थ्यलाई बलियो बनाउँछ भन्ने मान्यता राख्दछ।'
  },
  {
    id: 'faq-5',
    category: 'Training',
    question: 'What is the six-month Psychosocial Counselling Training?',
    questionNe: '६-महिने मनोसामाजिक परामर्श तालिम के हो?',
    answer: 'It is an in-depth, structured 780-hour professional development course based on the CTEVT Psychosocial Counselor curriculum. It integrates theoretical understanding, extensive practical roleplays, and 160 hours of supervised On-the-Job Training (OJT). It develops foundational competence in active listening, counselling approaches, ethics, case documentation, and community interventions.',
    answerNe: 'यो सीटीईभीटी (CTEVT) मनोसामाजिक परामर्शदाता पाठ्यक्रममा आधारित ७८० घण्टे गहन तालिम हो। यसमा सैद्धान्तिक ज्ञान, प्रयोगात्मक अभ्यास र १६० घण्टाको कार्यस्थल अभ्यास (OJT) समावेश छ।'
  },
  {
    id: 'faq-6',
    category: 'Training',
    question: 'Who can join the training?',
    questionNe: 'यो तालिममा को-को सहभागी हुन सक्छन्?',
    answer: 'Individuals who have completed +2 / Intermediate level in any stream, university students of Psychology, Social Work, Education, or Health sciences, practicing teachers, social workers, health assistants, and community frontline workers interested in psychosocial skills are eligible to apply. Institutional eligibility requirements may apply.',
    answerNe: 'कुनै पनि विषयमा +२ वा सो सरह उत्तीर्ण गरेका व्यक्तिहरू, मनोविज्ञान, सामाजिक कार्य, शिक्षा वा स्वास्थ्यका विद्यार्थीहरू, शिक्षकहरू, सामाजिक कार्यकर्ताहरू तथा समुदायमा काम गर्ने व्यक्तिहरू यस तालिममा सहभागी हुन सक्नुहुन्छ।'
  },
  {
    id: 'faq-7',
    category: 'Training',
    question: 'How many hours is the training?',
    questionNe: 'यो तालिम कति घण्टाको हुन्छ?',
    answer: 'The training comprises a total of 780 Hours spread over a 6-month period, incorporating interactive classroom theory, experiential counselling laboratories, and dedicated fieldwork/OJT.',
    answerNe: 'यो तालिम ६ महिनाको अवधिमा कुल ७८० घण्टाको हुन्छ, जसमा कक्षाकोठाको सिकाइ, अभ्यास सत्र र कार्यस्थल तालिम समावेश छन्।'
  },
  {
    id: 'faq-8',
    category: 'Training',
    question: 'What is OJT (On-the-Job Training)?',
    questionNe: 'OJT (कार्यस्थल अभ्यास) भनेको के हो?',
    answer: 'OJT stands for On-the-Job Training. In this program, trainees complete 160 hours of hands-on supervised practice in real community settings, schools, or supportive environments, under the mentorship of senior professionals to bridge classroom theory with real-life skills.',
    answerNe: 'OJT भनेको On-the-Job Training अर्थात् कार्यस्थलमा गरिने प्रयोगात्मक अभ्यास हो। यस तालिममा १६० घण्टा वास्तविक समुदाय, विद्यालय वा सहयोग केन्द्रहरूमा वरिष्ठ सुपरभाइजरको रेखदेखमा अभ्यास गरिन्छ।'
  },
  {
    id: 'faq-9',
    category: 'Community',
    question: 'How can I become a volunteer?',
    questionNe: 'म कसरी स्वयंसेवक बन्न सक्छु?',
    answer: 'You can express interest by visiting our "Get Involved" page and submitting the Volunteer Application form, or by contacting our office. Volunteers receive orientation in community communication, Psychological First Aid, and disaster preparedness to assist during outreach campaigns.',
    answerNe: 'तपाईं हाम्रो वेबसाइटको "सहकार्य तथा सहभागिता" (Get Involved) पृष्ठमा गएर स्वयंसेवक फारम भर्न सक्नुहुन्छ वा हाम्रो कार्यालयमा सिधै सम्पर्क गर्न सक्नुहुन्छ। स्वयंसेवकहरूलाई सञ्चार, PFA र विपद् पूर्वतयारी सम्बन्धी अभिमुखीकरण प्रदान गरिन्छ।'
  },
  {
    id: 'faq-10',
    category: 'Partnership',
    question: 'How can an organization partner with Paila Nepal Wellness Centre?',
    questionNe: 'कुनै संस्थाले पाइला नेपाल वेलनेस सेन्टरसँग कसरी साझेदारी गर्न सक्छ?',
    answer: 'Schools, academic institutions, community committees, and development organizations can partner with us for mental health workshops, teacher capacity building, community disaster preparedness simulations, or volunteer mobilization. Reach out via our Partnership Enquiry Form or email pailanepal26@gmail.com.',
    answerNe: 'विद्यालय, कलेज, सामुदायिक संस्था तथा विकास साझेदारहरूले मानसिक स्वास्थ्य कार्यशाला, शिक्षक तालिम, विपद् पूर्वतयारी अभ्यास र स्वयंसेवक परिचालनका लागि हामीसँग साझेदारी गर्न सक्नुहुन्छ। तपाईं pailanepal26@gmail.com मा इमेल गर्न वा फारम भर्न सक्नुहुन्छ।'
  },
  {
    id: 'faq-11',
    category: 'Contact',
    question: 'How can I contact the centre?',
    questionNe: 'सेन्टरमा कसरी सम्पर्क गर्न सकिन्छ?',
    answer: 'We are located at KC Bhawan, Nearby Lama Petrol Pump, Jorpati, Kathmandu, Nepal. You can call or message us via WhatsApp/Viber at +977-9863437679 or +977-9868331455, email pailanepal26@gmail.com, or visit our official Facebook page.',
    answerNe: 'हाम्रो कार्यालय केसी भवन, लामा पेट्रोल पम्प नजिकै, जोरपाटी, काठमाडौंमा अवस्थित छ। तपाईं हामीलाई +977-9863437679 वा +977-9868331455 मा फोन, ह्वाट्सएप, भाइबर गर्न सक्नुहुन्छ वा pailanepal26@gmail.com मा इमेल गर्न सक्नुहुन्छ।'
  }
];

export const initialAdminSettings: AdminSettings = {
  announcementActive: true,
  announcementTextEn: 'Admissions Open: 6-Month Psychosocial Counselling Training (780 Hours / 160 Hours OJT). Contact us for registration and session dates.',
  announcementTextNe: 'नयाँ भर्ना खुल्यो: ६-महिने मनोसामाजिक परामर्श तालिम (७८० घण्टा / १६० घण्टा OJT)। थप जानकारीका लागि सम्पर्क गर्नुहोस्।',
  nextTrainingBatchEn: 'Upcoming Batch: Open for Application',
  nextTrainingBatchNe: 'आगामी समूह: आवेदन खुला छ',
  trainingFeeNoteEn: 'Scholarship and installment arrangements available upon inquiry.',
  trainingFeeNoteNe: 'छात्रवृत्ति तथा किस्ताबन्दी सम्बन्धी जानकारीका लागि कार्यालयमा सम्पर्क गर्नुहोस्।',
  contactPhone1: '+977-9863437679',
  contactPhone2: '+977-9868331455',
  contactEmail: 'pailanepal26@gmail.com',
  addressEn: 'KC Bhawan, Nearby Lama Petrol Pump, Jorpati, Kathmandu, Nepal',
  addressNe: 'केसी भवन, लामा पेट्रोल पम्प नजिक, जोरपाटी, काठमाडौं, नेपाल',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594427986929'
};

export const initialEvents: PailaEvent[] = [
  {
    id: 'pfa-community-workshop',
    title: 'Community Psychological First Aid (PFA) & Crisis Support Workshop',
    titleNe: 'सामुदायिक मनोवैज्ञानिक प्राथमिक उपचार (PFA) तथा संकट सहयोग कार्यशाला',
    category: 'workshop',
    categoryNe: 'कार्यशाला',
    date: 'Saturday, October 17, 2026',
    dateNe: 'शनिबार, कार्तिक १, २०८३',
    time: '10:00 AM – 4:00 PM',
    timeNe: 'बिहान १०:०० – दिउँसो ४:०० बजे',
    location: 'Paila Nepal Wellness Centre Hall, Jorpati, Kathmandu',
    locationNe: 'पाइला नेपाल वेलनेस सेन्टर हल, जोरपाटी, काठमाडौं',
    description: 'A hands-on, interactive one-day orientation on the Look, Listen & Link framework. Ideal for local community leaders, youth volunteers, and neighborhood facilitators seeking to support people in acute emotional distress during crises.',
    descriptionNe: 'हेर, सुन र जोड (Look, Listen, Link) विधिमा आधारित एकदिने प्रयोगात्मक कार्यशाला। विपद् वा संकटका बेला समुदायमा भावनात्मक सहयोग पुर्याउन चाहने युवा, स्वयंसेवक र स्थानीय अगुवाहरूका लागि उपयोगी।',
    status: 'upcoming',
    registrationOpen: true,
    capacity: '25 Participants (Limited Seats)',
    capacityNe: '२५ जना सहभागी (सीमित सिट)',
    feeNote: 'Free Community Initiative / Pre-Registration Required',
    feeNoteNe: 'निःशुल्क सामुदायिक पहल / पूर्व दर्ता अनिवार्य',
    audience: 'Community volunteers, youth club members, social workers',
    audienceNe: 'सामुदायिक स्वयंसेवक, युवा क्लबका सदस्य, सामाजिक कार्यकर्ता'
  },
  {
    id: 'safe-school-wellbeing-camp',
    title: 'Safe School Mental Health & Anti-Bullying Life Skills Program',
    titleNe: 'सुरक्षित विद्यालय मानसिक स्वास्थ्य तथा बालमैत्री जीवन उपयोगी सीप कार्यक्रम',
    category: 'school-program',
    categoryNe: 'विद्यालय कार्यक्रम',
    date: 'Friday, November 6, 2026',
    dateNe: 'शुक्रबार, कार्तिक २१, २०८३',
    time: '11:00 AM – 3:30 PM',
    timeNe: 'बिहान ११:०० – दिउँसो ३:३० बजे',
    location: 'Community Partner School, Gokarneshwor Ward 5, Kathmandu',
    locationNe: 'सामुदायिक साझेदार विद्यालय, गोकर्णेश्वर वडा ५, काठमाडौं',
    description: 'Interactive psychoeducation and emotional expression workshop designed for school teachers, guidance counselors, and adolescent peer leaders to foster non-violent communication, emotional literacy, and child protection.',
    descriptionNe: 'शिक्षक तथा विद्यार्थी अगुवाहरूका लागि भावनात्मक साक्षरता, पारस्परिक सद्भाव र बाल संरक्षण सम्बन्धी अन्तरक्रियात्मक मनोशिक्षा कार्यशाला।',
    status: 'upcoming',
    registrationOpen: true,
    capacity: '40 Teachers & Students',
    capacityNe: '४० शिक्षक तथा विद्यार्थी',
    feeNote: 'School Partnership Event',
    feeNoteNe: 'विद्यालय साझेदारी कार्यक्रम',
    audience: 'School teachers, administrators, adolescent peer leads',
    audienceNe: 'शिक्षक, विद्यालय प्रशासन, किशोरकिशोरी सहजकर्ता'
  },
  {
    id: 'family-disaster-drill-camp',
    title: 'Household Disaster Preparedness & Go-Bag Demonstration Drill',
    titleNe: 'पारिवारिक विपद् पूर्वतयारी तथा आपत्कालीन झोला (Go-Bag) अभ्यास',
    category: 'drill',
    categoryNe: 'पूर्वतयारी अभ्यास',
    date: 'Saturday, November 21, 2026',
    dateNe: 'शनिबार, मंसिर ६, २०८३',
    time: '8:30 AM – 1:00 PM',
    timeNe: 'बिहान ८:३० – दिउँसो १:०० बजे',
    location: 'Jorpati Public Ground (Nearby Lama Petrol Pump), Kathmandu',
    locationNe: 'जोरपाटी चौर (लामा पेट्रोल पम्प नजिकै), काठमाडौं',
    description: 'Community-wide practical simulation on earthquake evacuation, safe assembly areas, assembling a 72-hour family emergency go-bag, and administering psychological first aid to disoriented family members.',
    descriptionNe: 'भूकम्प सुरक्षा, सुरक्षित निकासी बाटो, ७२ घण्टे आपत्कालीन झोला तयारी र संकटपछिको मनोवैज्ञानिक प्राथमिक उपचार सम्बन्धी सामुदायिक प्रयोगात्मक अभ्यास।',
    status: 'upcoming',
    registrationOpen: true,
    capacity: 'Open to Neighborhood Families',
    capacityNe: 'सबै परिवारका लागि खुला',
    feeNote: 'Free Public Event',
    feeNoteNe: 'निःशुल्क सार्वजनिक कार्यक्रम',
    audience: 'Local families, neighborhood residents, ward representatives',
    audienceNe: 'स्थानीय परिवार, टोलबासी, वडा प्रतिनिधि'
  },
  {
    id: 'counselling-training-orientation',
    title: '6-Month Psychosocial Counselling Training: Curriculum Walkthrough & Q&A',
    titleNe: '६-महिने मनोसामाजिक परामर्श तालिम: पाठ्यक्रम अभिमुखीकरण तथा प्रश्नोत्तर',
    category: 'training',
    categoryNe: 'तालिम अभिमुखीकरण',
    date: 'Sunday, December 6, 2026',
    dateNe: 'आइतबार, मंसिर २१, २०८३',
    time: '2:00 PM – 4:30 PM',
    timeNe: 'दिउँसो २:०० – ४:३० बजे',
    location: 'Hybrid: Paila Nepal Wellness Centre / Online Zoom',
    locationNe: 'हाइब्रिड: पाइला नेपाल हल / अनलाइन जुम (Zoom)',
    description: 'Comprehensive orientation on the 780-hour CTEVT-aligned syllabus, 160 hours OJT fieldwork arrangements, eligibility criteria (+2 graduates/students), and ethical foundations. Meet faculty members Sunil Lama and Sharada Sunuwar.',
    descriptionNe: '७८० घण्टे तालिमको १६ वटा मोड्युल, १६० घण्टाको OJT कार्यस्थल अभ्यास, भर्ना प्रक्रिया र योग्यता मापदण्ड बारे विस्तृत जानकारी तथा संकाय सदस्यहरूसँग प्रत्यक्ष साक्षात्कार।',
    status: 'upcoming',
    registrationOpen: true,
    capacity: '50 Seats (In-Person + Online)',
    capacityNe: '५० सिट (प्रत्यक्ष + अनलाइन)',
    feeNote: 'Free Information Session',
    feeNoteNe: 'निःशुल्क जानकारी सत्र',
    audience: 'Aspiring counselors, psychology/BSW students, educators, nurses',
    audienceNe: 'परामर्शदाता बन्न चाहने व्यक्ति, मनोविज्ञान/सामाजिक कार्यका विद्यार्थी, शिक्षक'
  },
  {
    id: 'frontline-caregiver-destress',
    title: 'Frontline Caregiver & Responder Self-Care & De-Stress Circle',
    titleNe: 'अग्रपंक्तिमा खटिने कार्यकर्ताहरूको आत्म-हेरचाह तथा तनाव न्यूनीकरण समूह',
    category: 'community',
    categoryNe: 'सामुदायिक समूह',
    date: 'Saturday, December 19, 2026',
    dateNe: 'शनिबार, पुस ५, २०८३',
    time: '1:00 PM – 4:00 PM',
    timeNe: 'दिउँसो १:०० – ४:०० बजे',
    location: 'Paila Nepal Wellness Centre Garden Room, Jorpati',
    locationNe: 'पाइला नेपाल वेलनेस सेन्टर गार्डेन रूम, जोरपाटी',
    description: 'A compassionate, non-judgmental space for community healthcare workers, NGO field staff, and emergency volunteers to debrief, process compassion fatigue, and learn grounding and somatic relaxation techniques.',
    descriptionNe: 'समुदायमा काम गर्ने स्वास्थ्यकर्मी, सामाजिक कार्यकर्ता र स्वयंसेवकहरूका लागि थकान न्यूनीकरण, पारस्परिक ढाडस र तनाव व्यवस्थापनको सुरक्षित सत्र।',
    status: 'upcoming',
    registrationOpen: true,
    capacity: '18 Participants',
    capacityNe: '१८ जना सहभागी',
    feeNote: 'Free for Frontline Workers',
    feeNoteNe: 'अग्रपंक्ति कार्यकर्ताहरूका लागि निःशुल्क',
    audience: 'Health workers, field coordinators, NGO volunteers',
    audienceNe: 'स्वास्थ्यकर्मी, फिल्ड कार्यकर्ता, सामाजिक संस्थाका स्वयंसेवक'
  }
];

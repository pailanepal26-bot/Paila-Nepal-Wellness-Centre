import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
You are the official AI Psychosocial & Community Wellness Navigator for Paila Nepal Wellness Centre (पाइला नेपाल वेलनेस सेन्टर), located in KC Bhawan, Nearby Lama Petrol Pump, Jorpati, Kathmandu, Nepal.

Core Mission:
"Healthy Mind • Prepared Community • Resilient Nepal" (स्वस्थ मन • पूर्वतयारीयुक्त समुदाय • उत्थानशील नेपाल).
Paila Nepal works at the intersection of mental health, psychosocial counselling, training, and community disaster resilience.

Key Frameworks & Core Knowledge:
1. 6-Month Psychosocial Counselling Training:
   - 780 Hours comprehensive curriculum aligned with CTEVT (Council for Technical Education and Vocational Training).
   - Structured across 16 core competencies (Ethics, Micro-counselling skills, Assessment, Crisis intervention, Supervised Field Practicum).
   - Designed for +2/Bachelor graduates, social workers, teachers, community leaders.
2. Psychological First Aid (PFA):
   - Look, Listen, Link framework.
   - Non-intrusive, humane support for individuals in acute distress during disasters (earthquakes, floods, landslides) or personal crises.
3. Somatic Grounding & Calming:
   - 5-4-3-2-1 Sensory technique (5 see, 4 touch, 3 hear, 2 smell, 1 taste/gratitude).
   - 4x4 Box Breathing (Inhale 4s, Hold 4s, Exhale 4s, Hold 4s).
4. Disaster Resilience & Go-Bag (आपतकालीन झोला):
   - Family emergency kit: 3 days of non-perishable food, water (4L/person/day), waterproof document pouch, battery radio, flashlight, first aid kit, essential medications.
5. Strict Ethical Scope & Safety Boundaries:
   - You are an informational guide and empathetic educator, NOT a replacement for medical diagnosis or emergency psychiatry.
   - If a user expresses active suicidal thoughts, self-harm, or severe psychiatric crisis, immediately provide the Nepal National Mental Health Helpline (Toll-Free): 1166, or Emergency Police: 100 / Ambulance: 102.
   - Encourage reaching out to professional counselors at Paila Nepal (+977-9863437679 / +977-9868331455 / pailanepal26@gmail.com).

Tone & Language:
- Warm, compassionate, culturally sensitive to Nepal's communities.
- Answer in the language the user asks (Nepali or English).
- Keep answers clear, structured with bullet points where appropriate, and actionable.
`;

// 1. Conversational Wellness Navigator Endpoint
app.post('/api/ai/wellness-navigator', async (req, res) => {
  try {
    const { messages, userQuery, language } = req.body;

    if (!userQuery && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Query or messages required' });
    }

    const query = userQuery || messages[messages.length - 1]?.content || '';

    // Safety check for severe acute crisis in query
    const crisisKeywords = ['suicide', 'kill myself', 'end my life', 'आत्महत्या', 'मर्न चाहन्छु', 'बाँच्न मन छैन'];
    const isCrisis = crisisKeywords.some((k) => query.toLowerCase().includes(k));

    if (isCrisis) {
      const crisisReplyEn = `
⚠️ Immediate Support Available:
If you or someone you know is in severe distress or having thoughts of self-harm, please know that you are not alone and help is available right now:
• Nepal National Mental Health Helpline: 1166 (Toll-Free, 24/7)
• Nepal Police Emergency: 100 | Ambulance: 102
• Paila Nepal Wellness Centre Support Team: +977-9863437679 / +977-9868331455
Please reach out to a trusted loved one or call 1166 immediately. We are here to support you with compassion and dignity.`;

      const crisisReplyNe = `
⚠️ तत्काल सहायता उपलब्ध छ:
यदि तपाईं वा तपाईंको कोही आफन्त गम्भीर भावनात्मक संकट वा छटपटीमा हुनुहुन्छ भने, कृपया सम्झनुहोस् तपाईं एक्लो हुनुहुन्न:
• नेपाल राष्ट्रिय मानसिक स्वास्थ्य हेल्पलाइन: ११६६ (निःशुल्क, २४ सै घण्टा)
• आपतकालीन प्रहरी: १०० | एम्बुलेन्स: १०२
• पाइला नेपाल वेलनेस सेन्टर सहयोग डेस्क: ९८६३४३७६७९ / ९८६८३३१४५५
कृपया तुरुन्तै ११६६ मा फोन गर्नुहोस् वा नजिकैको भरपर्दो व्यक्तिसँग कुरा गर्नुहोस्। तपाईंको जीवन अत्यन्तै महत्त्वपूर्ण छ।`;

      return res.json({
        reply: language === 'ne' ? crisisReplyNe : crisisReplyEn,
        isCrisis: true
      });
    }

    if (ai) {
      const chatHistory = Array.isArray(messages)
        ? messages.slice(-8).map((m: any) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n')
        : '';

      const fullPrompt = `${SYSTEM_INSTRUCTION}

Language preference: ${language === 'ne' ? 'Nepali' : 'English'}

Previous conversation:
${chatHistory}

Current User Query:
${query}

Provide a thoughtful, empathetic, culturally grounded response:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: fullPrompt,
      });

      const replyText = response.text || 'Thank you for connecting with Paila Nepal. How can we assist your wellbeing today?';
      return res.json({ reply: replyText, isCrisis: false });
    }

    // Fallback response if API key is not configured
    const fallbackResponseEn = `
Thank you for reaching out to Paila Nepal Wellness Centre.
Paila Nepal promotes community resilience, psychosocial counselling, and disaster preparedness in Nepal.
• For our 6-Month (780 Hours) Psychosocial Counselling Course, admissions are open.
• For individual or group counselling, you can connect directly with our wellness team at KC Bhawan, Jorpati (+977-9863437679).
• If you are experiencing acute stress, try the 5-4-3-2-1 grounding exercise or slow 4x4 box breathing in our interactive tools.
• In immediate mental health crisis, please call 1166 (National Toll-Free Helpline).`;

    const fallbackResponseNe = `
पाइला नेपाल वेलनेस सेन्टरमा स्वागत छ।
हामी मानसिक स्वास्थ्य, मनोसामाजिक परामर्श तालिम र विपद् पूर्वतयारी प्रवर्द्धनमा क्रियाशील छौं।
• ६-महिने (७८० घण्टे) सीटीईभीटी मनोसामाजिक परामर्श तालिमको नयाँ समूहका लागि आवेदन खुला छ।
• व्यक्तिगत वा समूह परामर्शका लागि हामीलाई ९८६३४३७६७९ वा जोरपाटीस्थित कार्यालयमा सम्पर्क गर्नुहोस्।
• तनावका बेला हाम्रो वेबसाइटमा उपलब्ध ५-४-३-२-१ ग्राउन्डिङ वा बक्स ब्रीदिङ अभ्यास गर्नुहोस्।
• आकस्मिक मानसिक संकटको अवस्थामा राष्ट्रिय हेल्पलाइन ११६६ मा निःशुल्क सम्पर्क गर्नुहोस्।`;

    return res.json({
      reply: language === 'ne' ? fallbackResponseNe : fallbackResponseEn,
      isCrisis: false,
      isFallback: true
    });
  } catch (error: any) {
    console.error('Error in /api/ai/wellness-navigator:', error);
    return res.status(500).json({
      error: 'Failed to process AI response',
      details: error.message
    });
  }
});

// 2. Personalized Household Disaster Readiness Plan Generator
app.post('/api/ai/disaster-plan', async (req, res) => {
  try {
    const { district, homeType, membersCount, hasElderly, hasInfants, hasPets, specificHazards } = req.body;

    if (ai) {
      const prompt = `
You are a Disaster Preparedness & Community Resilience Specialist for Paila Nepal Wellness Centre.
Generate a tailored Household Disaster Readiness & Go-Bag Plan based on these parameters:
- Location / District in Nepal: ${district || 'Kathmandu Valley'}
- Housing Type: ${homeType || 'Multi-story brick / RCC concrete'}
- Household Size: ${membersCount || 4} members
- Vulnerable members: Elderly (${hasElderly ? 'Yes' : 'No'}), Infants/Children (${hasInfants ? 'Yes' : 'No'}), Pets (${hasPets ? 'Yes' : 'No'})
- Primary Hazards of concern: ${specificHazards || 'Earthquake, Monsoon flooding/landslide, urban fire'}

Format the plan cleanly with:
1. Priority Family Evacuation & Communication Rules
2. Customized Go-Bag (आपतकालीन झोला) Checklist with exact quantities (Water, Food, First Aid, Documents, Special items)
3. Psychological First Aid & Calming Steps for family members during an emergency
4. Local Nepal Community Resources & Emergency Contacts

Provide response with clear formatting and encouraging, practical advice.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      return res.json({ plan: response.text });
    }

    // Fallback structured plan
    const fallbackPlan = `
### Personalized Household Disaster Readiness Plan (Paila Nepal)
**Location:** ${district || 'Kathmandu'} | **Family Members:** ${membersCount || 4}

1. **Immediate Family Communication & Drill:**
   - Establish two assembly points: (A) Right outside the home in an open courtyard, (B) A nearby school ground or public open field.
   - Designate an out-of-district contact relative for all family members to call in case local phone towers get overloaded.

2. **Tailored Go-Bag (आपतकालीन झोला) Essentials:**
   - **Water:** At least ${(Number(membersCount) || 4) * 3 * 3} Litres bottled water stored near the main exit.
   - **Food:** 3-day dry rations (beaten rice/Chiura, roasted grams, energy bars, dry fruits).
   - **Vital Documents:** Citizenship cards, land deeds, insurance in a sealed waterproof ziplock.
   - **Safety & Tools:** Multi-tool knife, whistle for each member, LED torch with extra batteries, power bank.
   ${hasElderly ? '- **Elderly Care:** 7-day reserve of prescription blood pressure/diabetes medicines, spare walking aid.\n' : ''}
   ${hasInfants ? '- **Infant Care:** Milk formula, diapers, baby wipes, warm fleece blanket.\n' : ''}

3. **Psychological First Aid for the Family:**
   - Keep a reassuring, steady tone. Children and elders look to caregivers for cues of safety.
   - Practice the 4-second box breathing together immediately after tremors stop.

4. **Emergency Hotlines in Nepal:**
   - Nepal Police: 100 | Armed Police Force (Disaster): 1114 | Ambulance: 102 | Mental Health Helpline: 1166`;

    return res.json({ plan: fallbackPlan, isFallback: true });
  } catch (error: any) {
    console.error('Error in /api/ai/disaster-plan:', error);
    return res.status(500).json({ error: 'Failed to generate disaster plan' });
  }
});

// 3. AI Guided Reflection & Self-Care Journaling Prompt
app.post('/api/ai/journal-prompt', async (req, res) => {
  try {
    const { mood, topic } = req.body;

    if (ai) {
      const prompt = `
You are a compassionate psychosocial wellness mentor from Paila Nepal Wellness Centre.
The user is currently experiencing: Mood: "${mood || 'stressed / tired'}", Topic of interest: "${topic || 'self-compassion & burnout recovery'}".
Provide 3 gentle, thought-provoking guided journaling reflection prompts and 1 brief somatic anchoring suggestion to help them unwind.
Keep the tone warm, grounded, non-judgmental, and concise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
      });

      return res.json({ prompts: response.text });
    }

    const fallbackPrompts = `
1. **Name the Weight:** What is one responsibility or feeling you carried today that felt heavier than usual? What would it look like to set it down, even for thirty minutes?
2. **Finding the Steady Anchor:** In the middle of today's busyness, when did you feel even a five-second moment of quiet or breath?
3. **Self-Compassion:** If your dearest friend was feeling the exact exhaustion you feel right now, what gentle words would you whisper to them? Can you offer those same words to yourself?

*Somatic grounding reminder:* Place one hand on your chest and one on your abdomen. Take three deep, slow breaths, feeling your chest soften.`;

    return res.json({ prompts: fallbackPrompts, isFallback: true });
  } catch (error: any) {
    console.error('Error in /api/ai/journal-prompt:', error);
    return res.status(500).json({ error: 'Failed to generate reflection prompts' });
  }
});

// 4. AI Service Status Endpoint
app.get('/api/ai/status', (req, res) => {
  res.json({
    status: 'ok',
    aiEnabled: Boolean(ai),
    model: 'gemini-3.8-flash'
  });
});

// Mount Vite middleware in development or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Paila Nepal Wellness server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

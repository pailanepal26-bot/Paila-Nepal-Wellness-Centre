import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Printer,
  Search,
  Filter,
  ArrowRight,
  FileText,
  LifeBuoy,
  Brain,
  ShieldAlert,
  Heart
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { initialResources } from '../../data/initialData';
import { ResourceItem } from '../../types';

interface ResourcesPageProps {
  onOpenResource: (item: ResourceItem) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenResource }) => {
  const { isNepali } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: isNepali ? 'सबै सामग्रीहरू' : 'All Resources' },
    { id: 'Psychological First Aid', label: isNepali ? 'मनोवैज्ञानिक प्राथमिक उपचार (PFA)' : 'Psychological First Aid' },
    { id: 'Mental Health', label: isNepali ? 'मानसिक स्वास्थ्य' : 'Mental Health' },
    { id: 'Disaster Preparedness', label: isNepali ? 'विपद् पूर्वतयारी' : 'Disaster Preparedness' },
    { id: 'Child & Family Wellbeing', label: isNepali ? 'बालबालिका तथा परिवार' : 'Child & Family' },
    { id: 'Counselling', label: isNepali ? 'परामर्श' : 'Counselling' },
    { id: 'Community Resilience', label: isNepali ? 'सामुदायिक उत्थानशीलता' : 'Community Resilience' },
  ];

  const filteredResources = initialResources.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.titleNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "ज्ञान तथा स्रोत केन्द्र" : "Educational Resource Library"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "स्रोत सामग्री पुस्तकालय" : "Resources & Guidance Library"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मनोवैज्ञानिक प्राथमिक उपचार, तनाव व्यवस्थापन, पारिवारिक विपद् पूर्वतयारी र बाल सहयोग सम्बन्धी प्रमाण-आधारित गाइडहरू।"
            : "Evidence-informed reading materials, action guides, and checklists for individuals, caregivers, teachers, and frontline community responders."}
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isNepali ? "स्रोत वा शीर्षक खोज्नुहोस्..." : "Search resources, guides, or topics..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] bg-white text-xs sm:text-sm text-slate-800"
            />
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl max-w-4xl mx-auto border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredResources.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            No matching resources found. Try another search query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold uppercase tracking-wider text-[#1457A6]">
                      {isNepali ? res.categoryNe : res.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {res.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#008C4A] transition-colors leading-snug">
                    {isNepali ? res.titleNe : res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isNepali ? res.descriptionNe : res.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Practice Focus:
                    </span>
                    {res.keyPoints.slice(0, 3).map((kp, idx) => (
                      <p key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-[#008C4A]">•</span>
                        <span>{kp}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenResource(res)}
                    className="w-full py-2.5 px-3 text-xs font-bold text-[#008C4A] bg-[#e6f7ef] hover:bg-[#d5f1e3] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isNepali ? "गाइड पढ्नुहोस् र छाप्नुहोस्" : "Read & Print Guide"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Notice about authentic documentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-xs text-slate-500 max-w-3xl mx-auto text-center leading-relaxed">
          <p className="font-semibold text-slate-700">Publication & Documentation Authenticity:</p>
          <p>
            All resources published by Paila Nepal Wellness Centre are curated to provide accurate, evidence-informed guidance for community education. In accordance with organizational standards, we do not link to unverified external reports or fabricated citations.
          </p>
        </div>
      </section>
    </div>
  );
};

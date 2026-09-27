import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Sparkles,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { BlogPost } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useAdmin } from '../../context/AdminContext';
import { NewsletterSection } from '../common/NewsletterSection';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onOpenTrainingModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectPost,
  onOpenTrainingModal
}) => {
  const { isNepali } = useLanguage();
  const { posts } = useAdmin();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', en: 'All Articles', ne: 'सबै लेखहरू' },
    { id: 'Mental Health', en: 'Mental Health', ne: 'मानसिक स्वास्थ्य' },
    { id: 'Counselling Skills', en: 'Counselling Skills', ne: 'परामर्श सीप' },
    { id: 'Disaster Preparedness', en: 'Disaster Resilience', ne: 'विपद् पूर्वतयारी' },
    { id: 'Safe Schools', en: 'Safe Schools', ne: 'सुरक्षित विद्यालय' },
    { id: 'Community Stories', en: 'Community Stories', ne: 'सामुदायिक कथा' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      (post.titleNe && post.titleNe.toLowerCase().includes(q)) ||
      post.summary.toLowerCase().includes(q) ||
      (post.summaryNe && post.summaryNe.toLowerCase().includes(q)) ||
      post.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12 pb-24">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#008C4A]">
          {isNepali ? "ज्ञान, चिन्तन र जनचेतना" : "Insights & Community Perspectives"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#263238] tracking-tight">
          {isNepali ? "पाइला ब्लग तथा विचारहरू" : "Paila Wellness Blog & Articles"}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {isNepali
            ? "मानसिक स्वास्थ्यको यथार्थ, सीटीईभीटी मनोसामाजिक परामर्श तालिम, विपद् उत्थानशीलता र सुरक्षित विद्यालय सम्बन्धी प्रमाण-आधारित लेखहरू।"
            : "Evidence-grounded articles on psychosocial support, ethical counselling practices in Nepal, community disaster preparedness, and emotional wellbeing."}
        </p>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto pt-4 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isNepali
                  ? "लेख वा विषय खोज्नुहोस् (जस्तै: PFA, परामर्श, तनाव, विद्यालय)..."
                  : "Search articles by title, topic, or keyword (e.g., PFA, trauma, CTEVT)..."
              }
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#008C4A] bg-white text-xs sm:text-sm text-slate-800 shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    active
                      ? 'bg-[#1457A6] text-white border-[#1457A6] shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {isNepali ? cat.ne : cat.en}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Featured Article Spotlight (shown if no search query active) */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#e6f7ef] text-[#008C4A] text-[11px] font-bold uppercase tracking-wider border border-[#008C4A]/20">
                      ★ {isNepali ? "विशेष आलेख" : "Featured Article"}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ebf3fc] text-[#1457A6] text-[11px] font-semibold">
                      {isNepali ? featuredPost.categoryNe : featuredPost.category}
                    </span>
                    <span className="text-xs text-slate-500">• {featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                    {isNepali ? featuredPost.titleNe : featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {isNepali ? featuredPost.summaryNe : featuredPost.summary}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center font-bold text-xs">
                      {featuredPost.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-900">{featuredPost.author}</p>
                      <p className="text-[11px] text-slate-500">
                        {isNepali ? featuredPost.authorRoleNe : featuredPost.authorRole} • {isNepali ? featuredPost.dateNe : featuredPost.date}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPost(featuredPost)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1457A6] hover:bg-[#0f4280] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>{isNepali ? "पूर्ण लेख पढ्नुहोस्" : "Read Full Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Decorative side accent banner */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#ebf3fc] via-[#f0f7ff] to-[#e6f7ef] p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-[#1457A6]">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {isNepali ? "समुदायमा आधारित मनोसामाजिक पैरवी" : "Community-Based Psychosocial Advocacy"}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isNepali
                      ? "हाम्रो प्रत्येक लेख समुदायको आवश्यकता र नेपालको सामाजिक-सांस्कृतिक यथार्थमा आधारित छ।"
                      : "Our articles bridge scientific mental health literature with grassroots Nepalese context, empowering frontline caregivers and learners."}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredPost.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {selectedCategory === 'All'
              ? (isNepali ? "सबै प्रकाशित लेखहरू" : "All Published Articles")
              : (isNepali ? `विषय: ${selectedCategory}` : `Category: ${selectedCategory}`)}
            <span className="ml-2 text-xs font-normal text-slate-500">
              ({filteredPosts.length} {isNepali ? "लेख" : "articles"})
            </span>
          </h3>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-700">
              {isNepali ? "कुनै लेख भेटिएन" : "No articles found"}
            </h4>
            <p className="text-xs text-slate-500">
              {isNepali ? "अर्को शब्द वा शीर्षकबाट खोजी हेर्नुहोस्।" : "Try different keywords or clear the category filter."}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-bold text-[#1457A6] bg-[#ebf3fc] rounded-xl hover:bg-[#dce9f8] transition-colors cursor-pointer"
            >
              {isNepali ? "फिल्टर हटाउनुहोस्" : "Clear Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const title = isNepali && post.titleNe ? post.titleNe : post.title;
              const summary = isNepali && post.summaryNe ? post.summaryNe : post.summary;
              const category = isNepali && post.categoryNe ? post.categoryNe : post.category;
              const date = isNepali && post.dateNe ? post.dateNe : post.date;

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#1457A6]/40 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-[#ebf3fc] text-[#1457A6] font-bold text-[11px] border border-[#1457A6]/20">
                        {category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h4
                      onClick={() => onSelectPost(post)}
                      className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#1457A6] transition-colors leading-snug cursor-pointer"
                    >
                      {title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700 block">{post.author}</span>
                      <span>{date}</span>
                    </div>

                    <button
                      onClick={() => onSelectPost(post)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1457A6] hover:text-[#0f4280] group-hover:translate-x-0.5 transition-all cursor-pointer"
                    >
                      <span>{isNepali ? "पढ्नुहोस्" : "Read"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Interactive Newsletter Signup Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection variant="card" defaultTopic="Mental Health Guides" />
      </section>
    </div>
  );
};

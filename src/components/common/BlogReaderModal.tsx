import React, { useRef } from 'react';
import { X, Calendar, Clock, User, Tag, Share2, Printer, Check, BookOpen, ArrowRight, Bookmark } from 'lucide-react';
import { BlogPost } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface BlogReaderModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenTrainingModal?: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({
  post,
  isOpen,
  onClose,
  onOpenTrainingModal
}) => {
  const { isNepali } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const paragraphs = isNepali && post.contentNe?.length ? post.contentNe : post.content;
  const title = isNepali && post.titleNe ? post.titleNe : post.title;
  const category = isNepali && post.categoryNe ? post.categoryNe : post.category;
  const authorRole = isNepali && post.authorRoleNe ? post.authorRoleNe : post.authorRole;
  const date = isNepali && post.dateNe ? post.dateNe : post.date;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <BookOpen className="w-4 h-4 text-[#55B8E8]" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              {category}
            </span>
            <span className="text-slate-500">•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? (isNepali ? "लिङ्क कपी भयो" : "Copied!") : (isNepali ? "साझा गर्नुहोस्" : "Share")}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isNepali ? "प्रिन्ट" : "Print"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div ref={articleRef} className="overflow-y-auto p-6 sm:p-12 space-y-8 text-slate-800 bg-white">
          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ebf3fc] text-[#1457A6] font-bold text-xs border border-[#1457A6]/20">
                {category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {date}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {title}
            </h1>

            {/* Author info pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1457A6] to-[#008C4A] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                {post.author.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-500">{authorRole} • Paila Nepal Wellness Centre</p>
              </div>
            </div>
          </div>

          {/* Article Summary Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-[#008C4A] text-slate-700 italic text-sm sm:text-base leading-relaxed">
            {isNepali ? post.summaryNe : post.summary}
          </div>

          {/* Article Content Paragraphs */}
          <div className="prose prose-slate max-w-none space-y-5 text-sm sm:text-base leading-relaxed text-slate-700 font-serif sm:font-sans">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              {isNepali ? "विषयवस्तु:" : "Keywords:"}
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Call to Action Card in Article */}
          <div className="p-6 rounded-2xl bg-[#ebf3fc] border border-[#1457A6]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-sm sm:text-base text-slate-900">
                {isNepali ? "मनोसामाजिक परामर्श तालिमबारे जान्न चाहनुहुन्छ?" : "Interested in Professional Counselling Training?"}
              </h4>
              <p className="text-xs text-slate-600">
                {isNepali
                  ? "हाम्रो ६-महिने (७८० घण्टे) सीटीईभीटी पाठ्यक्रम तथा प्रयोगात्मक फिल्ड अभ्यासको जानकारी लिनुहोस्।"
                  : "Explore our 6-month (780-hour) CTEVT-aligned curriculum and supervised field practicum."}
              </p>
            </div>
            {onOpenTrainingModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenTrainingModal();
                }}
                className="px-5 py-2.5 bg-[#1457A6] hover:bg-[#0f4280] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
              >
                {isNepali ? "तालिम विवरण हेर्नुहोस्" : "Explore Training"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

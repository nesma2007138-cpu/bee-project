import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { coursesData } from '../../data/coursesData';
import CourseCard from './CourseCard';
import { Search, Sparkles } from 'lucide-react';

export default function CatalogSection({ activeCategory = 'all', onSelectCourse }) {
  const { t, isRtl } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState(activeCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: t('filterAll') },
    { id: 'paths', label: t('filterPaths') },
    { id: 'courses', label: t('filterCourses') },
    { id: 'workshops', label: t('filterWorkshops') },
  ];

  // Filtering logic
  const filteredCourses = coursesData.filter((course) => {
    // Category match
    const categoryMatches = selectedFilter === 'all' || course.category === selectedFilter;

    // Search query match in title, subtitle, or tools
    if (!searchQuery.trim()) return categoryMatches;
    const q = searchQuery.toLowerCase();
    const titleMatch = (course.title.ar + ' ' + course.title.en).toLowerCase().includes(q);
    const subMatch = (course.subtitle.ar + ' ' + course.subtitle.en).toLowerCase().includes(q);
    const toolMatch = course.tools.some((tool) => tool.toLowerCase().includes(q));

    return categoryMatches && (titleMatch || subMatch || toolMatch);
  });

  return (
    <section id="catalog-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5BD35]/15 text-[#F5BD35] text-xs font-black">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('catalogBadge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
          {t('catalogTitle')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          {t('catalogDesc')}
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-full md:w-auto shadow-inner">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#F5BD35] text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('catalogSearchPlaceholder')}
            className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm outline-none focus:border-[#F47B35] transition-colors shadow-xs"
          />
          <Search className={`absolute top-3.5 ${isRtl ? 'left-3.5' : 'right-3.5'} w-4 h-4 text-slate-400`} />
        </div>

      </div>

      {/* Grid of Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onLearnMore={onSelectCourse}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 space-y-3">
          <p className="text-base font-bold text-slate-600 dark:text-slate-400">
            {isRtl ? 'لم نجد أي برامج تطابق بحثك حالياً.' : 'No programs match your search criteria.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="text-xs font-black text-[#F5BD35] hover:underline cursor-pointer"
          >
            {isRtl ? 'إعادة ضبط البحث' : 'Reset search filter'}
          </button>
        </div>
      )}

    </section>
  );
}

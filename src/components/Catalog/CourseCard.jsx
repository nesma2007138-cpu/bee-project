import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Clock, Calendar, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export default function CourseCard({ course, onLearnMore }) {
  const { t, isRtl } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div
      className="rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden relative group shadow-md"
      style={{
        borderColor: `${course.accentColor}55`,
        backgroundColor: isDark ? (course.darkPastelBg || '#242C3E') : (course.pastelBg || '#F8FAFC'),
      }}
    >
      {/* Top Accent Strip with Course Color */}
      <div
        className="h-3.5 w-full"
        style={{ backgroundColor: course.accentColor }}
      />

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
        
        <div className="space-y-4">
          
          {/* Badge & Category */}
          <div className="flex items-center justify-between gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-xs"
              style={{
                backgroundColor: `${course.accentColor}25`,
                color: course.accentColor,
              }}
            >
              {course.badge[isRtl ? 'ar' : 'en']}
            </span>

            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {course.category === 'paths' ? t('navPaths') : course.category === 'courses' ? t('navCourses') : t('navWorkshops')}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#F47B35] transition-colors leading-snug">
              {course.title[isRtl ? 'ar' : 'en']}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-medium">
              {course.subtitle[isRtl ? 'ar' : 'en']}
            </p>
          </div>

          {/* Key Specs: Age & Schedule */}
          <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 shrink-0 text-slate-400" />
              <span>{t('cardAge')} <strong className="text-slate-900 dark:text-white font-extrabold">{course.ageRange[isRtl ? 'ar' : 'en']}</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-slate-400" />
              <span>{t('cardSchedule')} <strong className="text-slate-900 dark:text-white font-extrabold">{course.schedule[isRtl ? 'ar' : 'en']}</strong></span>
            </div>
          </div>

          {/* Tech & Tool Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {course.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200"
              >
                {tool}
              </span>
            ))}
            {course.tools.length > 3 && (
              <span className="text-[11px] font-bold px-2 py-1 rounded-xl text-slate-400">
                +{course.tools.length - 3}
              </span>
            )}
          </div>

        </div>

        {/* Sole Action: "اعرف المزيد" (Learn More) Button */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => onLearnMore(course)}
            className="w-full py-3.5 px-5 rounded-2xl font-black text-sm text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            style={{
              backgroundColor: course.accentColor,
            }}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('cardLearnMore')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </div>
  );
}

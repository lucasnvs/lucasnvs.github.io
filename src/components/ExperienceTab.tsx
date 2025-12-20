import { motion } from "framer-motion";
import { experiencesByLang } from "../data";
import { useLanguage } from "../i18n";

const parseBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const formatText = (text: string) => {
  const lines = text.split('\n').filter(line => line.trim());
  const result: JSX.Element[] = [];
  let listItems: string[] = [];
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('-')) {
      listItems.push(trimmed.substring(1).trim());
    } else {
      if (listItems.length > 0) {
        result.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 my-3 ml-2">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{parseBold(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      result.push(<p key={`p-${index}`} className="mb-2">{parseBold(trimmed)}</p>);
    }
  });
  
  if (listItems.length > 0) {
    result.push(
      <ul key="list-final" className="list-disc list-inside space-y-2 my-3 ml-2">
        {listItems.map((item, i) => (
          <li key={i} className="leading-relaxed">{parseBold(item)}</li>
        ))}
      </ul>
    );
  }
  
  return result;
};

export default function ExperienceTab() {
  const { lang } = useLanguage();
  const experiences = experiencesByLang[lang];
  return (
    <motion.div
      key="experiencia"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="border-l-2 border-blue-500 pl-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 mt-1 md:mt-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.year}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-base text-zinc-600 dark:text-zinc-400 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {exp.company}
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {formatText(exp.text)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-700 dark:text-zinc-300 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

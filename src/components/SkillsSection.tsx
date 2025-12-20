import { motion } from "framer-motion";
import { skillsByLang, uiText } from "../data";
import { useLanguage } from "../i18n";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const skills = skillsByLang[lang];
  const t = uiText[lang];

  return (
    <section className="max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-6">{t.skills.title}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

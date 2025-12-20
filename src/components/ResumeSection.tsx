import { useLanguage } from "../i18n";
import { uiText } from "../data";

export default function ResumeSection() {
  const { lang } = useLanguage();
  const t = uiText[lang].resume;

  return (
    <section className="max-w-5xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
      {t.paragraphs.map((p, idx) => (
        <p key={idx} className={`text-zinc-600 dark:text-zinc-400 leading-relaxed ${idx > 0 ? "mt-4" : ""}`}>
          {p}
        </p>
      ))}
    </section>
  );
}

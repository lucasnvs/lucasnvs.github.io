import { motion } from "framer-motion";
import { useLanguage } from "../i18n";
import { uiText } from "../data";

type TabType = "projetos" | "experiencia" | "formacao";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { lang } = useLanguage();
  const t = uiText[lang].tabs;
  const tabs = [
    { id: "projetos" as const, label: t.projects },
    { id: "experiencia" as const, label: t.experience },
    { id: "formacao" as const, label: t.education },
  ];

  return (
    <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 py-3 text-sm font-medium transition-all relative ${
            activeTab === tab.id
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

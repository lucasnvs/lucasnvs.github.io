import { useState } from "react";
import TabNavigation from "./TabNavigation";
import ProjectsTab from "./ProjectsTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";

type TabType = "projetos" | "experiencia" | "formacao";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projetos");

  return (
    <section className="max-w-5xl mx-auto mt-16">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="min-h-[400px]">
        {activeTab === "projetos" && <ProjectsTab />}
        {activeTab === "experiencia" && <ExperienceTab />}
        {activeTab === "formacao" && <EducationTab />}
      </div>
    </section>
  );
}

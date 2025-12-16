import { useState, lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ObjectiveSection = lazy(() => import("./components/ObjectiveSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const TabSection = lazy(() => import("./components/TabSection"));

export default function PortfolioLanding() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors px-6 py-12">
        <Header setDark={setDark} dark={dark} />
        <Suspense fallback={<div className="max-w-5xl mx-auto mt-12 h-32 animate-pulse bg-zinc-100 dark:bg-zinc-900 rounded-lg" />}>
          <ObjectiveSection />
          <SkillsSection />
          <TabSection />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

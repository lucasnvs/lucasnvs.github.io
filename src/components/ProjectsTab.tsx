import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "../data";

const MediaPreview = ({ media }: { media: Project["media"] }) => {
  if (!media || media.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
      {media.map((item, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          {item.type === "video" ? (
            <video controls className="w-full h-full" src={item.src} poster={item.alt} />
          ) : (
            <img src={item.src} alt={item.alt || "Project preview"} className="w-full h-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default function ProjectsTab() {
  const [selected, setSelected] = useState<Project | null>(null);

  const closeModal = () => setSelected(null);

  return (
    <motion.div
      key="projetos"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {projects.map((project, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setSelected(project)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <h3 className="text-white font-semibold text-sm mb-2">{project.title}</h3>
                <p className="text-white/80 text-xs mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{selected.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{selected.description}</p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  aria-label="Fechar modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-2">
                <p>{selected.longDescription || selected.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selected.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-700 dark:text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <MediaPreview media={selected.media} />

              {selected.link && selected.link !== "#" && (
                <div className="mt-6">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                  >
                    Ver projeto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 11h6m0 0v6m0-6l-7 7m-4-4l-2 2m0 0h4m-4 0v-4" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

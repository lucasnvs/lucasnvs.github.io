import { motion } from "framer-motion";
import { projects } from "../data";

export default function ProjectsTab() {
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
          <motion.a
            key={i}
            href={project.link}
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
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

import { uiText } from "../data";
import { useLanguage } from "../i18n";

export default function Footer({
    linkedinUrl,
    githubUrl,
    email,
}: {
    linkedinUrl: string;
    githubUrl: string;
    email: string;
}) {
    const { lang } = useLanguage();
    const t = uiText[lang];
    return (
        <footer className="max-w-5xl mx-auto mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm font-medium mb-1">Lucas Neves</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {t.footer.subtitle}
                    </p>
                </div>
                <div className="flex gap-6">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        GitHub
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        LinkedIn
                    </a>
                    <a href={`mailto:${email}`} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                        Email
                    </a>
                </div>
            </div>
            <div className="text-center mt-8 text-xs text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} Lucas Neves. {t.footer.rights}
            </div>
        </footer>
    )
}
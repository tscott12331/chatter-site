import GelIcon from "./icons/gel-icon";
import GitHubIcon from "./icons/github-icon";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gel-border/70 bg-gel-bg/80 text-gel-text-primary backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <h1>
                    <a
                        href={import.meta.env.BASE_URL}
                        className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent"
                    >
                        <span className="grid size-9 place-items-center rounded-xl border border-gel-border-strong bg-gel-surface-elevated shadow-lg shadow-black/20 transition group-hover:border-gel-accent/60">
                            <GelIcon className="p-1 fill-gel-accent-bright" />
                        </span>
                        <span className="text-lg font-bold tracking-tight">Gel</span>
                    </a>
                </h1>
                <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-5">
                    <a
                        href={`${import.meta.env.BASE_URL}missing-features`}
                        className="hidden rounded-md text-sm font-medium text-gel-text-secondary transition hover:text-gel-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent sm:inline"
                    >
                        Limitations
                    </a>
                    <a
                        href="https://github.com/tscott12331/chatter-wails"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-gel-border-strong bg-gel-surface-elevated px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-gel-accent/70 hover:bg-gel-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent motion-reduce:hover:translate-y-0"
                    >
                        <GitHubIcon className="size-4 fill-current"/>
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    )
}

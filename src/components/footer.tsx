import GitHubIcon from "./icons/github-icon";

export default function Footer() {
    return (
        <footer className="border-t border-gel-border/70 bg-gel-bg text-gel-text-secondary">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row md:px-8">
                <p>Gel is open source and built for the Twitch community.</p>
                <nav aria-label="Footer navigation" className="flex items-center gap-5">
                    <a
                        href={`${import.meta.env.BASE_URL}missing-features`}
                        className="transition hover:text-gel-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent"
                    >
                        Limitations
                    </a>
                    <a
                        href="https://github.com/tscott12331/chatter-wails"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-gel-text-primary transition hover:text-gel-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent"
                    >
                        <GitHubIcon className="size-4 fill-current" />
                        GitHub
                    </a>
                </nav>
            </div>
        </footer>
    )
}

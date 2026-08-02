export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-chatter-border/70 bg-chatter-bg/80 text-chatter-text-primary backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                <h1>
                    <a
                        href={import.meta.env.BASE_URL}
                        className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent"
                    >
                        <span className="grid size-9 place-items-center rounded-xl border border-chatter-border-strong bg-chatter-surface-elevated shadow-lg shadow-black/20 transition group-hover:border-chatter-accent/60">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-chatter-accent-bright">
                                <path d="M5 3h16v12l-4 4h-4l-3 3v-3H5V3Zm2 2v12h5v1.2l1.2-1.2h3l2.8-2.8V5H7Zm3 3h2v5h-2V8Zm5 0h2v5h-2V8Z" />
                            </svg>
                        </span>
                        <span className="text-lg font-bold tracking-tight">Chatter</span>
                    </a>
                </h1>
                <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-5">
                    <a
                        href={`${import.meta.env.BASE_URL}missing-features`}
                        className="hidden rounded-md text-sm font-medium text-chatter-text-secondary transition hover:text-chatter-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent sm:inline"
                    >
                        Limitations
                    </a>
                    <a
                        href="https://github.com/tscott12331/chatter-wails"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-chatter-border-strong bg-chatter-surface-elevated px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-chatter-accent/70 hover:bg-chatter-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent motion-reduce:hover:translate-y-0"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                            <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.4-5.29 5.68.42.36.79 1.06.79 2.14v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                        </svg>
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    )
}

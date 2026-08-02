export default function Footer() {
    return (
        <footer className="border-t border-chatter-border/70 bg-chatter-bg text-chatter-text-secondary">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row md:px-8">
                <p>Chatter is open source and built for the Twitch community.</p>
                <nav aria-label="Footer navigation" className="flex items-center gap-5">
                    <a
                        href={`${import.meta.env.BASE_URL}missing-features`}
                        className="transition hover:text-chatter-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent"
                    >
                        Limitations
                    </a>
                    <a
                        href="https://github.com/tscott12331/chatter-wails"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-chatter-text-primary transition hover:text-chatter-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                            <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.4-5.29 5.68.42.36.79 1.06.79 2.14v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                        </svg>
                        GitHub
                    </a>
                </nav>
            </div>
        </footer>
    )
}

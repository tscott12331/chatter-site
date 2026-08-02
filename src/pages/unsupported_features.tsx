type FeatureIconName = "channel" | "events" | "layers" | "idea"

function FeatureIcon({ name }: { name: FeatureIconName }) {
    const paths = {
        channel: (
            <>
                <path d="M4 7.5h16M4 12h16M4 16.5h10" />
                <path d="m17 15 2 2 3-3" />
            </>
        ),
        events: (
            <>
                <rect x="3.5" y="4" width="17" height="16" rx="2" />
                <path d="M7.5 2.5v3M16.5 2.5v3M3.5 8.5h17M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01" />
            </>
        ),
        layers: (
            <>
                <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
                <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
            </>
        ),
        idea: (
            <>
                <path d="M9 18h6M10 21h4" />
                <path d="M8.2 14.5A7 7 0 1 1 15.8 14.5c-.9.7-1.5 1.5-1.7 2.5H9.9c-.2-1-.8-1.8-1.7-2.5Z" />
            </>
        ),
    }

    return (
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-chatter-accent/15 text-chatter-accent-bright" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                {paths[name]}
            </svg>
        </span>
    )
}

const limitations = [
    {
        icon: "channel" as const,
        title: "Pinned messages and channel point data",
        body: (
            <>
                Some Twitch features are not exposed through the public API or IRC server. There is currently no reliable way to receive pinned chat message updates, so that feature cannot be implemented yet. Channel point rewards are available, but Twitch does not provide a user’s current point balance, which puts related features on hold.
            </>
        ),
    },
    {
        icon: "events" as const,
        title: "Interactive events: polls and predictions",
        body: (
            <>
                Poll updates through Twitch’s EventSub require special authorization from the channel. Predictions may face the same limitation, and implementing either feature would also require access to a user’s channel point balance.
            </>
        ),
    },
    {
        icon: "layers" as const,
        title: "Additional platform limitations",
        body: (
            <>
                Chatter is still a work in progress, so more limitations may surface as development continues. This page will be updated as features are investigated and support is added.
            </>
        ),
    },
]

export default function MissingFeaturesPage() {
    return (
        <div className="min-h-screen bg-chatter-bg text-chatter-text-primary">
            <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
                <section className="mb-12 max-w-2xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-chatter-accent-bright">Known limitations</p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">What Chatter doesn’t support yet</h2>
                    <p className="mt-5 text-lg leading-relaxed text-chatter-text-secondary">
                        Chatter aims to provide a focused, native Twitch chat experience. Some features remain unavailable because Twitch does not expose the data or permissions needed to build them reliably.
                    </p>
                </section>

                <div className="space-y-4">
                    {limitations.map((limitation) => (
                        <article key={limitation.title} className="rounded-3xl border border-chatter-border bg-chatter-surface p-6 transition-colors hover:border-chatter-border-strong sm:p-8">
                            <div className="flex items-start gap-4">
                                <FeatureIcon name={limitation.icon} />
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{limitation.title}</h3>
                                    <p className="mt-3 leading-relaxed text-chatter-text-secondary">{limitation.body}</p>
                                </div>
                            </div>
                        </article>
                    ))}

                    <article className="rounded-3xl border border-chatter-accent/30 bg-chatter-accent/10 p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <FeatureIcon name="idea" />
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Have an idea for a missing feature?</h3>
                                <p className="mt-3 leading-relaxed text-chatter-text-secondary">
                                    If you know of a feature that would improve the experience, open an issue or pull request on GitHub.
                                </p>
                                <a
                                    href="https://github.com/tscott12331/chatter-wails/issues"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center rounded-xl bg-chatter-accent px-5 py-2.5 font-semibold text-white transition hover:bg-chatter-accent-bright focus:outline-none focus:ring-2 focus:ring-chatter-accent-bright focus:ring-offset-2 focus:ring-offset-chatter-bg"
                                >
                                    Open a GitHub issue
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

import { FeatureIcon } from "../components/icons/feature-icon"

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
                Gel is still a work in progress, so more limitations may surface as development continues. This page will be updated as features are investigated and support is added.
            </>
        ),
    },
]

export default function MissingFeaturesPage() {
    return (
        <div className="min-h-screen bg-gel-bg text-gel-text-primary">
            <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
                <section className="mb-12 max-w-2xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gel-accent-bright">Known limitations</p>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">What Gel doesn’t support yet</h2>
                    <p className="mt-5 text-lg leading-relaxed text-gel-text-secondary">
                        Gel aims to provide a focused, native Twitch chat experience. Some features remain unavailable because Twitch does not expose the data or permissions needed to build them reliably.
                    </p>
                </section>

                <div className="space-y-4">
                    {limitations.map((limitation) => (
                        <article key={limitation.title} className="rounded-3xl border border-gel-border bg-gel-surface p-6 transition-colors hover:border-gel-border-strong sm:p-8">
                            <div className="flex items-start gap-4">
                                <FeatureIcon name={limitation.icon} />
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{limitation.title}</h3>
                                    <p className="mt-3 leading-relaxed text-gel-text-secondary">{limitation.body}</p>
                                </div>
                            </div>
                        </article>
                    ))}

                    <article className="rounded-3xl border border-gel-accent/30 bg-gel-accent/10 p-6 sm:p-8">
                        <div className="flex items-start gap-4">
                            <FeatureIcon name="idea" />
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Have an idea for a missing feature?</h3>
                                <p className="mt-3 leading-relaxed text-gel-text-secondary">
                                    If you know of a feature that would improve the experience, open an issue or pull request on GitHub.
                                </p>
                                <a
                                    href="https://github.com/tscott12331/gel/issues"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center rounded-xl bg-gel-accent px-5 py-2.5 font-semibold text-white transition hover:bg-gel-accent-bright focus:outline-none focus:ring-2 focus:ring-gel-accent-bright focus:ring-offset-2 focus:ring-offset-gel-bg"
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

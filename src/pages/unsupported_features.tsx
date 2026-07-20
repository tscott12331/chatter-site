export default function MissingFeaturesPage() {
    return (
        <div className="bg-chatter-bg text-chatter-text-primary min-h-screen">
            <main className="p-6 md:p-12 max-w-4xl mx-auto">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Missing Features</h2>
                    <p className="text-lg text-chatter-text-secondary">
                        While I strive to provide the best experience, many features found in the official 
                        Twitch client or other third-party tools are unsupported or not yet implemented.
                    </p>
                </section>

                <div className="space-y-8">
                    <div className="bg-chatter-surface p-8 rounded-lg shadow-md border border-chatter-surface">
                        <h3 className="text-2xl font-semibold mb-4">Pinned Messages & Channel Points</h3>
                        <p className="text-chatter-text-secondary leading-relaxed">
                            Some Twitch features are not exposed through their public API or IRC server.
                            For example, there's currently no reliable way to recieve pinned chat message updates, so it's currently
                            unimplementable.
                            As for channel points, it's possible to recieve data about the rewards on a channel, but there's no way 
                            to know how many points a user has at a given time. Without that data, channel point features are also on hold.
                        </p>
                    </div>

                    <div className="bg-chatter-surface p-8 rounded-lg shadow-md border border-chatter-surface">
                        <h3 className="text-2xl font-semibold mb-4">Polls & Predictions</h3>
                        <p className="text-chatter-text-secondary leading-relaxed">
                            At a first glance at the Twitch API, I wasn't sure why other 3rd party clients hadn't implemented polls. However, 
                            I quickly realized that recieving poll updates through Twitch's EventSub requires the user to have special authorization
                            with the channel they are connected to. Predictions may also face this same issue, but even if they don't it wouldn't make sense
                            to implement without knowledge of a user's channel point count.
                        </p>
                    </div>

                    <div className="bg-chatter-surface p-8 rounded-lg shadow-md border border-chatter-surface">
                        <h3 className="text-2xl font-semibold mb-4">Others</h3>
                        <p className="text-chatter-text-secondary leading-relaxed">
                            This is a work in progress, so many features are still in the works. Because of this, I'm unsure what other features might
                            be impossible to implement or cause issues.
                        </p>
                    </div>

                    <div className="bg-chatter-surface p-8 rounded-lg shadow-md border border-chatter-surface text-center">
                        <h3 className="text-2xl font-semibold mb-4">Have a suggestion?</h3>
                        <p className="text-chatter-text-secondary mb-6">
                            If you believe a feature is missing that is implementable and adds to the experience, 
                            feel free to open an issue or a pull request on GitHub.
                        </p>
                        <a
                            href="https://github.com/tscott12331/chatter-wails/issues"
                            target="_blank"
                            className="inline-block bg-chatter-accent px-6 py-2 rounded font-bold hover:opacity-90 transition"
                        >
                            Open GitHub Issue
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

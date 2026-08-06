import FeatureCard from "../components/feature-card";
import GitHubIcon from "../components/icons/github-icon";

const githubUrl = "https://github.com/tscott12331/chatter-wails";

export default function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gel-bg text-gel-text-primary">
            <main>
                <section className="relative isolate">
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 mx-auto h-160 max-w-6xl rounded-full bg-gel-accent/15 blur-[140px]" />
                    <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-30 [background-image:linear-gradient(to_right,#342b43_1px,transparent_1px),linear-gradient(to_bottom,#342b43_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

                    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-32">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
                                Twitch chat,
                                <span className="block bg-linear-to-r from-gel-accent-bright via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">without the browser.</span>
                            </h2>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-gel-text-secondary md:text-xl">
                                A fast, cross-platform chat client with multi-channel support, 3rd party emotes, replies, and autocomplete.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gel-accent px-5 py-3 font-bold text-white shadow-lg shadow-gel-accent/25 transition hover:-translate-y-0.5 hover:bg-gel-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent-bright motion-reduce:hover:translate-y-0"
                                >
                                    <GitHubIcon className="fill-current size-5" />
                                    View on GitHub
                                </a>
                                <a
                                    href="#features"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gel-border-strong bg-gel-surface/70 px-5 py-3 font-semibold transition hover:border-gel-accent/70 hover:bg-gel-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gel-accent"
                                >
                                    Explore features
                                    <span aria-hidden="true">&darr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                            <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-gel-accent/20 blur-3xl" />
                            <div className="overflow-hidden rounded-3xl border border-gel-border-strong bg-gel-surface-elevated p-2 shadow-[0_35px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5">
                                <div className="max-h-[650px] overflow-hidden rounded-2xl bg-gel-surface-inset">
                                    <img
                                        src={`${import.meta.env.BASE_URL}main-chat-view.png`}
                                        alt="Gel displaying several Twitch channels in a native multi-chat interface"
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 left-5 rounded-2xl border border-gel-border-strong bg-gel-surface-elevated/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur md:-left-5 md:bottom-10">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gel-accent-bright">Built for chat</p>
                                <p className="mt-1 text-sm font-semibold">Fast, focused, distraction-free.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="scroll-mt-24 border-t border-gel-border/60 bg-gel-surface-inset/35 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-5 md:px-8">
                        <div className="mb-12 max-w-2xl md:mb-16">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gel-accent-bright">Made for Twitch regulars</p>
                            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">Everything you need to stay in the conversation.</h2>
                            <p className="mt-5 text-lg leading-8 text-gel-text-secondary">The familiar Twitch experience, rebuilt around fast navigation and the features chatters use every day.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <FeatureCard
                                size="normal"
                                title="Inspect and engage with chatters"
                                description="Open user cards, review recent messages, and reply without losing your place in chat."
                                imageSrc={`${import.meta.env.BASE_URL}inspect-engage.png`}
                            />
                            <FeatureCard
                                size="normal"
                                title="Use your favorite emotes"
                                description="Browse 7TV emotes from a responsive picker with helpful previews and tooltips."
                                imageSrc={`${import.meta.env.BASE_URL}emote-menu.png`}
                            />
                            <FeatureCard
                                size="large"
                                title="Browse live channels"
                                description="See top live channels or search for someone you love watching."
                                imageSrc={`${import.meta.env.BASE_URL}channel-search.png`}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

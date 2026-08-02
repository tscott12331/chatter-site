import FeatureCard from "../components/feature-card";

const githubUrl = "https://github.com/tscott12331/chatter-wails";

function GitHubIcon({ className = "size-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
            <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.22c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.4-5.29 5.68.42.36.79 1.06.79 2.14v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
        </svg>
    );
}

export default function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-chatter-bg text-chatter-text-primary">
            <main>
                <section className="relative isolate">
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 mx-auto h-160 max-w-6xl rounded-full bg-chatter-accent/15 blur-[140px]" />
                    <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-30 [background-image:linear-gradient(to_right,#342b43_1px,transparent_1px),linear-gradient(to_bottom,#342b43_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

                    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-32">
                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-chatter-border-strong bg-chatter-surface/80 px-3 py-1.5 text-sm font-medium text-chatter-text-secondary shadow-lg shadow-black/10 backdrop-blur">
                                <span className="size-2 rounded-full bg-chatter-accent-bright shadow-[0_0_14px_#c084fc]" />
                                Open source and cross-platform
                            </div>
                            <h2 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
                                Twitch chat,
                                <span className="block bg-linear-to-r from-chatter-accent-bright via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">without the browser.</span>
                            </h2>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-chatter-text-secondary md:text-xl">
                                A fast, native chat client with multi-channel support, 7TV emotes, replies, autocomplete, and moderation tools.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-chatter-accent px-5 py-3 font-bold text-white shadow-lg shadow-chatter-accent/25 transition hover:-translate-y-0.5 hover:bg-chatter-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent-bright motion-reduce:hover:translate-y-0"
                                >
                                    <GitHubIcon />
                                    View on GitHub
                                </a>
                                <a
                                    href="#features"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-chatter-border-strong bg-chatter-surface/70 px-5 py-3 font-semibold transition hover:border-chatter-accent/70 hover:bg-chatter-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chatter-accent"
                                >
                                    Explore features
                                    <span aria-hidden="true">&darr;</span>
                                </a>
                            </div>
                            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-chatter-text-tertiary" aria-label="Highlights">
                                <li className="flex items-center gap-2"><span className="text-chatter-accent-bright">&#10003;</span> Native performance</li>
                                <li className="flex items-center gap-2"><span className="text-chatter-accent-bright">&#10003;</span> Multi-chat</li>
                                <li className="flex items-center gap-2"><span className="text-chatter-accent-bright">&#10003;</span> 7TV integration</li>
                            </ul>
                        </div>

                        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                            <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-full bg-chatter-accent/20 blur-3xl" />
                            <div className="overflow-hidden rounded-3xl border border-chatter-border-strong bg-chatter-surface-elevated p-2 shadow-[0_35px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5">
                                <div className="flex items-center gap-2 border-b border-chatter-border px-3 py-2.5">
                                    <div className="flex gap-1.5" aria-hidden="true">
                                        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                                        <span className="size-2.5 rounded-full bg-[#febc2e]" />
                                        <span className="size-2.5 rounded-full bg-[#28c840]" />
                                    </div>
                                    <span className="ml-2 text-xs font-medium text-chatter-text-tertiary">Chatter · Live chat</span>
                                </div>
                                <div className="max-h-[650px] overflow-hidden rounded-b-2xl bg-chatter-surface-inset">
                                    <img
                                        src={`${import.meta.env.BASE_URL}basic-chat-view.png`}
                                        alt="Chatter displaying several Twitch channels in a native multi-chat interface"
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-5 left-5 rounded-2xl border border-chatter-border-strong bg-chatter-surface-elevated/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur md:-left-5 md:bottom-10">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-chatter-accent-bright">Built for chat</p>
                                <p className="mt-1 text-sm font-semibold">Fast, focused, distraction-free.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="scroll-mt-24 border-t border-chatter-border/60 bg-chatter-surface-inset/35 py-20 md:py-28">
                    <div className="mx-auto max-w-7xl px-5 md:px-8">
                        <div className="mb-12 max-w-2xl md:mb-16">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-chatter-accent-bright">Made for Twitch regulars</p>
                            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">Everything you need to stay in the conversation.</h2>
                            <p className="mt-5 text-lg leading-8 text-chatter-text-secondary">The familiar Twitch experience, rebuilt around fast navigation and the features chatters use every day.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <FeatureCard
                                size="normal"
                                title="Inspect and engage with chatters"
                                description="Open user cards, review recent messages, and reply without losing your place in chat."
                                imageSrc={`${import.meta.env.BASE_URL}reply-and-popup.png`}
                            />
                            <FeatureCard
                                size="normal"
                                title="Use your favorite emotes"
                                description="Browse 7TV emotes from a responsive picker with helpful previews and tooltips."
                                imageSrc={`${import.meta.env.BASE_URL}emote-menu-tooltip.png`}
                            />
                            <FeatureCard
                                size="large"
                                title="Autocomplete at the speed of chat"
                                description="Press Tab for a compact carousel of matching emotes and keep typing without reaching for the mouse."
                                imageSrc={`${import.meta.env.BASE_URL}auto-complete-zoom.png`}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

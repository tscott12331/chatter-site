export default function HomePage() {
    return (
        <div className="bg-chatter-bg text-chatter-text-primary">
            <main className="p-6 md:p-12">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">The ultimate Twitch chat experience.</h2>
                    <p className="text-lg text-chatter-text-secondary m-auto max-w-2xl mx-auto">
                        High performance, with full native and 7TV features. Built for the Twitch chat enthusiast.
                    </p>
                </section>
                <section className="flex flex-wrap gap-10 justify-center mb-12">
                    <div className="min-w-70 max-w-120">
                        <div className="bg-chatter-surface p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Connect to your favorite chats</h3>
                            <p className="text-chatter-text-secondary">Low latency, multi-chat support.</p>
                        </div>
                        <img src={`${import.meta.env.BASE_URL}/basic-chat-view.png`} className="w-3/4 m-auto outline outline-chatter-text-secondary rounded-sm"/>
                    </div>
                    <div className="min-w-70 max-w-120">
                        <div className="bg-chatter-surface p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Inspect and engage with chatters</h3>
                            <p className="text-chatter-text-secondary">User cards and reply interface.</p>
                        </div>
                        <img src={`${import.meta.env.BASE_URL}/reply-and-popup.png`} className="w-3/4 m-auto outline outline-chatter-text-secondary rounded-sm"/>
                    </div>
                    <div className="min-w-70 max-w-120">
                        <div className="bg-chatter-surface p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Use your favorite emotes</h3>
                            <p className="text-chatter-text-secondary">7TV integration with emote selector and tooltip.</p>
                        </div>
                        <img src={`${import.meta.env.BASE_URL}/emote-menu-tooltip.png`} className="w-3/4 m-auto outline outline-chatter-text-secondary rounded-sm"/>
                    </div>
                    <div className="min-w-70 max-w-240">
                        <div className="bg-chatter-surface p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Emote autocomplete</h3>
                            <p className="text-chatter-text-secondary">Press tab to get a cycling carousel of emote completions.</p>
                        </div>
                        <img src={`${import.meta.env.BASE_URL}/auto-complete-zoom.png`} className="w-3/4 m-auto outline outline-chatter-text-secondary rounded-sm"/>
                    </div>
                </section>
            </main>
        </div>
    )
}

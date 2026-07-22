import FeatureCard from "../components/feature-card";

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
                    <FeatureCard
                        size="normal"
                        title="Connect to your favorite chats"
                        description="Low latency, multi-chat support."
                        imageSrc={`${import.meta.env.BASE_URL}/basic-chat-view.png`}
                    />
                    <FeatureCard
                        size="normal"
                        title="Inspect and engage with chatters"
                        description="User cards and reply interface."
                        imageSrc={`${import.meta.env.BASE_URL}/reply-and-popup.png`}
                    />
                    <FeatureCard
                        size="normal"
                        title="Use your favorite emotes"
                        description="7TV integration with emote selector and tooltip."
                        imageSrc={`${import.meta.env.BASE_URL}/emote-menu-tooltip.png`}
                    />
                    <FeatureCard
                        size="large"
                        title="Emote autocomplete"
                        description="Press tab to get a cycling carousel of emote completions."
                        imageSrc={`${import.meta.env.BASE_URL}/auto-complete-zoom.png`}
                    />
                </section>
            </main>
        </div>
    )
}

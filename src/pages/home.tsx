export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="p-6 flex justify-between items-center border-b border-gray-700">
                <h1 className="text-2xl font-bold">
                    <a href="/">Chatter</a>
                </h1>
                <nav>
                    <a href="https://github.com/tscott12331/chatter-wails" className="text-gray-300 hover:text-white">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </nav>
            </header>
            <main className="p-6 md:p-12">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">The ultimate Twitch chat experience.</h2>
                    <p className="text-lg text-gray-400 m-auto max-w-2xl mx-auto">
                        High performance, with full native and 7TV features. Built for the Twitch chat enthusiast.
                    </p>
                </section>
                <section className="flex flex-wrap gap-10 justify-around mb-12">
                    <div className="min-w-70 max-w-120">
                        <div className="bg-gray-800 p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Connect to your favorite chats</h3>
                            <p className="text-gray-400">Low latency, multi-chat support.</p>
                        </div>
                        <img src="/reg-chat.png" className="w-3/4 m-auto"/>
                    </div>
                    <div className="min-w-70 max-w-120">
                        <div className="bg-gray-800 p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Inspect and engage with chatters</h3>
                            <p className="text-gray-400">User cards and reply interface.</p>
                        </div>
                        <img src="/reply.png" className="w-3/4 m-auto"/>
                    </div>
                    <div className="min-w-70 max-w-120">
                        <div className="bg-gray-800 p-6 rounded-lg h-30 mb-5">
                            <h3 className="text-xl font-semibold mb-2">Use your favorite emotes</h3>
                            <p className="text-gray-400">7TV integration with emote selector and autocomplete.</p>
                        </div>
                        <img src="/open-emotes.png" className="w-3/4 m-auto"/>
                    </div>
                </section>
            </main>
            <footer className="p-6 text-center text-gray-500 border-t border-gray-700 mt-12">
                <div className="m-auto inline-flex gap-1">
                    <a href="https://github.com/tscott12331/chatter-wails">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <p>Under construction...</p>
            </footer>
        </div>
    )
}

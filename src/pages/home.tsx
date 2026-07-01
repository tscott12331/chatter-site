export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="p-6 flex justify-between items-center border-b border-gray-700">
                <h1 className="text-2xl font-bold">Chatter</h1>
                <nav>
                    <a href="https://github.com/tscott12331/chatter-wails" className="text-gray-300 hover:text-white">GitHub</a>
                </nav>
            </header>
            <main className="p-6 md:p-12">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">The ultimate Twitch chat experience.</h2>
                    <p className="text-lg text-gray-400 m-auto max-w-2xl mx-auto">
                        Chatter is a high-performance, customizable desktop Twitch chat client designed for power users and casual streamers alike.
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Features</h3>
                        <p className="text-gray-400">Low latency, multi-chat support, and advanced filtering.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                        <p className="text-gray-400">Fully skinnable interface to match your streaming setup.</p>
                    </div>
                </section>
            </main>
            <footer className="p-6 text-center text-gray-500 border-t border-gray-700 mt-12">
                &copy; {new Date().getFullYear()} Chatter. All rights reserved.
            </footer>
        </div>
    )
}

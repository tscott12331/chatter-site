export default function Header() {
    return (
        <header className="p-6 flex justify-between items-center border-b border-chatter-surface bg-chatter-surface text-chatter-text-primary">
            <h1 className="text-2xl font-bold">
                <a href="/">Chatter</a>
            </h1>
            <nav>
                <a href="https://github.com/tscott12331/chatter-wails" className="text-chatter-text-secondary hover:text-chatter-text-primary">
                    <i className="fa-brands fa-github"></i>
                </a>
            </nav>
        </header>
    )
}

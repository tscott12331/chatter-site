export default function Header() {
    return (
        <header className="p-6 flex justify-between items-center border-b border-chatter-surface bg-chatter-surface text-chatter-text-primary">
            <h1 className="text-2xl font-bold">
                <a href={import.meta.env.BASE_URL}>Chatter</a>
            </h1>
            <nav className="flex gap-4 items-center">
                <a href={`${import.meta.env.BASE_URL}missing-features`} className="text-sm text-chatter-text-secondary hover:text-chatter-text-primary transition">
                    Missing Features
                </a>
                <a href="https://github.com/tscott12331/chatter-wails" className="text-chatter-text-secondary hover:text-chatter-text-primary">
                    <i className="fa-brands fa-github"></i>
                </a>
            </nav>
        </header>
    )
}

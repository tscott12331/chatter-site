export default function Footer() {
    return (
        <footer className="p-6 text-center text-chatter-text-secondary border-t border-chatter-surface bg-chatter-bg">
            <div className="m-auto inline-flex gap-1">
                <a href="https://github.com/tscott12331/chatter-wails">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className="mt-2 text-sm">
                <a href={`${import.meta.env.BASE_URL}missing-features`} className="hover:text-chatter-text-primary underline decoration-chatter-accent/30 underline-offset-4">
                    Missing Features
                </a>
            </div>
            <p className="mt-2">Under construction...</p>
        </footer>
    )
}

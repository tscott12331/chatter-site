type FeatureIconName = "channel" | "events" | "layers" | "idea"

export function FeatureIcon({ name }: { name: FeatureIconName }) {
    const paths = {
        channel: (
            <>
                <path d="M4 7.5h16M4 12h16M4 16.5h10" />
                <path d="m17 15 2 2 3-3" />
            </>
        ),
        events: (
            <>
                <rect x="3.5" y="4" width="17" height="16" rx="2" />
                <path d="M7.5 2.5v3M16.5 2.5v3M3.5 8.5h17M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01" />
            </>
        ),
        layers: (
            <>
                <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
                <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
            </>
        ),
        idea: (
            <>
                <path d="M9 18h6M10 21h4" />
                <path d="M8.2 14.5A7 7 0 1 1 15.8 14.5c-.9.7-1.5 1.5-1.7 2.5H9.9c-.2-1-.8-1.8-1.7-2.5Z" />
            </>
        ),
    }

    return (
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gel-accent/15 text-gel-accent-bright" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                {paths[name]}
            </svg>
        </span>
    )
}


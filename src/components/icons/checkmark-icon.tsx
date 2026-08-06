import type { ComponentPropsWithoutRef } from "react";

export default function CheckmarkIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg {...props} className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
        </svg>
    )
}

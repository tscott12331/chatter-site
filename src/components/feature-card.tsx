interface IFeatureCardProps {
    size: "normal" | "large";
    title: string;
    description: string;
    imageSrc: string;
}

export default function FeatureCard({
    size,
    title,
    description,
    imageSrc,
}: IFeatureCardProps) {
    return (
        <article className={`group overflow-hidden rounded-3xl border border-gel-border bg-gel-surface shadow-2xl shadow-black/20 ${size === "large" ? "md:col-span-2" : ""}`}>
            <div className={size === "large" ? "grid h-full lg:grid-cols-[0.7fr_1.3fr]" : "flex h-full flex-col"}>
                <div className="flex flex-col justify-center p-7 md:p-9">
                    <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gel-accent-bright">Feature</span>
                    <h3 className="text-2xl font-bold tracking-tight text-gel-text-primary">{title}</h3>
                    <p className="mt-3 leading-7 text-gel-text-secondary">{description}</p>
                </div>
                <div className={`bg-gel-surface-inset p-3 ${size === "normal" ? "mt-auto border-t border-gel-border" : "border-t border-gel-border lg:border-l lg:border-t-0"}`}>
                    <div className={`overflow-hidden transform-3d rounded-2xl border border-gel-border-strong bg-gel-bg shadow-xl shadow-black/30 ${size === "normal" ? "aspect-4/3" : "flex h-full min-h-56 items-center"}`}>
                        <img
                            src={imageSrc}
                            alt={title}
                            className={`w-full transition duration-500 scale-[1_1_1] group-hover:scale-[1.015_1.015_1] will-change-[scale] backface-hidden motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${size === "normal" ? "h-full object-cover object-top" : "object-contain"}`}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

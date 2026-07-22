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
        <div className={`min-w-70 ${size === "normal" ? "max-w-120" : "max-w-240"} max-w-120`}>
            <div className="bg-linear-to-br from-chatter-surface to-[#292535] p-6 rounded-lg h-30 mb-5">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-chatter-text-secondary">{description}</p>
            </div>
            <img src={imageSrc} alt={title} className="w-3/4 m-auto outline outline-chatter-text-secondary rounded-sm"/>
        </div>
    );
}

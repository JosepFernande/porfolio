interface SectionHeaderProps {
    tag: string;
    title: string;
    accent?: string;
    description?: string;
    titleId?: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    tag,
    title,
    accent,
    description,
    titleId,
    align = "left",
}: SectionHeaderProps) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex flex-col gap-3 ${alignClass}`}>
            <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-primary" aria-hidden="true"></span>
                <span className="text-primary font-semibold uppercase tracking-wider text-xs">{tag}</span>
            </div>

            <h2 id={titleId} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                {title}
                {accent ? <span className="text-primary"> {accent}</span> : null}
            </h2>

            {description ? (
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                    {description}
                </p>
            ) : null}
        </div>
    );
}

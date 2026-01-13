export default function BookHeader({
    title,
    author,
    align = "left",
    titleSize = "md"
}) {
    const titleSizes = {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-3xl md:text-5xl"
    };

    return (
        <div class={`flex flex-col ${align === "center" ? "items-center text-center" : ""}`}>
            <h3 class={`font-bold font-display dark:text-white leading-tight mb-1 ${titleSizes[titleSize]}`}>
                {title}
            </h3>
            <p class="text-sm text-[#64748b] italic mb-1">{author}</p>
        </div>
    );
}

export default function BookStateBadge({
    label,
    color = "gray",
    isRounded = false
}) {

    const colors = {
        gray: "text-[#64748b]",
        primary: "text-primary"
    };

    const rounded = "bg-primary px-3 py-1 rounded-full"

    return (
        <span class={`${isRounded ? rounded + " text-xs" : "text-[10px]"} font-bold uppercase tracking-wider mb-1 ${colors[color]}`}>
            {label}
        </span>
    );
}
export default function BookCTA({ text, href, variant = "link" }) {
    if (variant === "button") {
        return (
            <a
                class="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                href={href}
            >
                {text}
            </a>
        );
    }

    return (
        <a
            class="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
            href={href}
        >
            {text}
        </a>
    );
}
    
export default function BookCover({
    cover,
    size = "md",
    variant = "flat",
    grayscale = false
}) {
    const sizes = {
        xs: "w-16",
        sm: "w-24 sm:w-32",
        md: "w-32 sm:w-40",
        lg: "w-48 md:w-64"
    };

    const variants = {
        flat: "rounded-md shadow-md transition-transform group-hover:scale-105",
        reading: "rounded shadow-sm transition-transform group-hover:scale-105",
        featured: `
            rounded-lg shadow-2xl
            transform transition-transform duration-500
            group-hover:rotate-y-3 group-hover:scale-105
        `
    };

    return (
        <div
            class={`
                shrink-0 ${sizes[size]} aspect-2/3
                overflow-hidden relative
                ${variants[variant]}
                ${grayscale ? "grayscale" : ""}
            `}
        >
            <div
                class="absolute inset-0 bg-cover bg-center"
                style={{ "background-image": `url(${cover})` }}
            />
        </div>
    );
}

import formatDate from "../utils/date";
import Rating from "./Rating";
import Tag from "./Tag";

export default function BookCard({
    cover = "",
    title = "",
    author = "",
    rating = 0,
    description = "",
    date = "",
    slug = "",
    tags = []
}) {
    return(
        <article
            class="group flex flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="w-full flex justify-center mb-6 relative">
                <div
                class="w-32 sm:w-40 aspect-[2/3] rounded-md shadow-lg overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div class="absolute inset-0 bg-cover bg-center"
                        style={{ "background-image": "url(" + cover + ")" }}>
                    </div>
                </div>
                <div
                    class="absolute -top-2 -right-2 flex flex-col gap-2 items-end"
                >
                    { tags.map(tag =>
                        <Tag
                            color={tag.color}
                            name={tag.name}
                        />
                    )}
                </div>
            </div>
            <div class="flex flex-col items-center text-center flex-grow">
                <h3
                class="text-xl font-bold font-display dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                {title}</h3>
                <p class="text-sm text-[#64748b] dark:text-[#9dabb8] italic mb-3">{author}</p>
                <Rating number={rating} />
                <p class="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-3 mb-6">
                {description}
                </p>
                <div
                class="mt-auto w-full pt-4 border-t border-[#e2e8f0] dark:border-[#293038] flex justify-between items-center">
                <span class="text-xs text-[#64748b] capitalize">{formatDate(new Date(date))}</span>
                <a class="text-sm font-bold text-primary hover:underline" href={slug}>Lire la note</a>
                </div>
            </div>
        </article>
    );
}
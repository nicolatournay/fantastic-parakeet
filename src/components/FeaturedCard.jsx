import Rating from "./book/Rating";
import BookCover from "./book/BookCover";
import BookHeader from "./book/BookHeader";
import BookCTA from "./book/BookCTA";
import BookStateBadge from "./book/BookStateBadge";

export default function FeaturedCard({
    cover = "",
    title = "",
    author = "",
    rating = 0,
    description = "",
    slug = ""
}) {
    return (
        <div class="group relative bg-white dark:bg-[#1a242f] rounded-2xl border border-[#e2e8f0] dark:border-[#293038] p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-md  dark:hover:border-primary/50 transition-all">
            <div class="absolute top-0 right-0 p-6 opacity-5 dark:opacity-[0.02]">
                <span class="material-symbols-outlined text-[300px] leading-none select-none">
                    auto_stories
                </span>
            </div>

            <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
                <div class="perspective-1000">
                    <BookCover
                        cover={cover}
                        size="lg"
                        variant="featured"
                    />
                </div>

                <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 max-w-2xl">
                    <div class="flex items-center gap-3">
                        <BookStateBadge
                            label="Note en vedette"
                            color="white"
                            isRounded={true}
                        />
                        <Rating number={rating} />
                    </div>

                    <BookHeader
                        title={title}
                        author={author}
                        titleSize="lg"
                    />

                    <p class="text-[#64748b] dark:text-[#9dabb8] text-lg leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    <BookCTA
                        text="Lire la chronique complète"
                        href={slug}
                        variant="button"
                    />
                </div>
            </div>
        </div>
    );
}

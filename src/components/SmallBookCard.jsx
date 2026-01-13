// import Rating from "./book/Rating";

// export default function SmallBookCard({
//     cover = "",
//     title = "",
//     author = "",
//     rating = 0,
//     description = "",
//     cta = {text: "", href: ""},
// }) {
//     return(
//         <article
//             class="flex flex-row sm:flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-4 gap-4 hover:border-primary/50 transition-colors">
//             <div class="shrink-0 w-24 sm:w-32 mx-auto aspect-[2/3] rounded shadow-md overflow-hidden relative">
//                 <div class="absolute inset-0 bg-cover bg-center"
//                     style={{ "background-image": "url(" + cover + ")" }}>
//                 </div>
//             </div>
//             <div class="flex flex-col sm:items-center sm:text-center flex-grow">
//                 <h3 class="text-lg font-bold font-display dark:text-white leading-tight mb-1">{title}</h3>
//                 <p class="text-sm text-primary font-medium mb-2">{author}</p>
//                 <Rating
//                     number = {rating}
//                     gap = {0.5}
//                 />
//                 <p class="text-xs text-[#64748b] dark:text-[#9dabb8] line-clamp-2 mt-2 mb-3 hidden sm:block">
//                     {description}
//                 </p>
//                 <a class="mt-auto text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary inline-block"
//                     href={cta.href}>
//                     {cta.text}
//                 </a>
//             </div>
//         </article>
//     );
// }
import Rating from "./book/Rating";
import BookCover from "./book/BookCover";
import BookHeader from "./book/BookHeader";
import BookCTA from "./book/BookCTA";

export default function SmallBookCard({
    cover = "",
    title = "",
    author = "",
    rating = 0,
    description = "",
    cta = { text: "", href: "" }
}) {
    return (
        <article class="group flex flex-row items-center sm:flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-4 gap-4 dark:hover:border-primary/50 transition-colors">
            <BookCover cover={cover} size="sm" variant="flat" />

            <div class="flex flex-col items-center sm:items-center sm:text-center grow gap-1">
                <BookHeader
                    title={title}
                    author={author}
                    align="center"
                    titleSize="md"
                />

                <Rating number={rating} gap={0.5} />

                <p class="text-xs text-[#64748b] dark:text-[#9dabb8] line-clamp-2 mt-2 mb-3 hidden sm:block">
                    {description}
                </p>

                <BookCTA
                    text={cta.text}
                    href={cta.href}
                />
            </div>
        </article>
    );
}

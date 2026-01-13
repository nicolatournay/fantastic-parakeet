// export default function NextReading({
//     cover = "",
//     state = "prochainement",
//     title = "",
//     author = ""
// }) {
//     return(
//         <div class="group flex gap-4 items-start opacity-75 hover:opacity-100 transition-opacity">
//             <div
//                 class="shrink-0 w-16 aspect-[2/3] bg-gray-200 dark:bg-gray-700 rounded shadow-md overflow-hidden relative grayscale group-hover:scale-105 transition-transform">
//                 <img alt="Cover" class="w-full h-full object-cover"
//                 src={cover} />
//             </div>
//             <div class="flex flex-col justify-center">
//                 <span class="text-[10px] font-bold text-[#64748b] uppercase mb-1 tracking-wider">{state}</span>
//                 <h4 class="font-bold text-sm dark:text-white leading-tight mb-1">{title}</h4>
//                 <p class="text-xs text-[#64748b]">{author}</p>
//             </div>
//         </div>
//     );  
// }
import BookCover from "./book/BookCover";
import BookHeader from "./book/BookHeader";
import BookStateBadge from "./book/BookStateBadge";

export default function NextReading({
    cover = "",
    state = "Prochainement",
    title = "",
    author = ""
}) {
    return (
        <div class="group flex gap-4 items-start opacity-75 hover:opacity-100 transition-opacity">
            <BookCover
                cover={cover}
                size="xs"
                variant="reading"
                grayscale
            />
            <div class="flex flex-col justify-center">
                <BookStateBadge label={state} />
                <BookHeader
                    title={title}
                    author={author}
                    titleSize="sm"
                />
            </div>
        </div>
    );
}

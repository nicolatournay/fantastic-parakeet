import BookCover from "./book/BookCover";
import BookStateBadge from "./book/BookStateBadge";
import BookHeader from "./book/BookHeader";
import ReadingProgress from "./book/ReadingProgress";

export default function CurrentReading({
    cover = "",
    state = "En cours",
    title = "",
    author = "",
    progress = 0
}) {
    return(
        <div class="group flex gap-4 items-start">
            <BookCover cover={cover} size="xs" variant="reading" />
            <div class="flex flex-col w-full">
                <BookStateBadge label={state} color="primary" />
                <BookHeader title={title} author={author} />
                <ReadingProgress progress={progress} />
            </div>
        </div>
    );
}   
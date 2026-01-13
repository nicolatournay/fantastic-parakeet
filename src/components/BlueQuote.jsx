export default function BlueQuote({
    text = "",
    author = ""
}) {
    return(
        <div
        class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-primary p-5 text-white shadow-lg">
            <span
                class="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] opacity-20 rotate-12 select-none">format_quote</span>
            <p class="relative text-sm font-display italic leading-relaxed">
                « {text} »
            </p>
            <p class="relative mt-2 text-[10px] font-bold uppercase tracking-widest opacity-90">— {author}</p>
        </div>
    );
}
export default function Hero({
    hook = "",
    title = "",
    description = "",
    primaryButton = {cta: "", href: ""},
    secondaryButton = {cta: "", href: ""}
}) {
    return(
        <section class="flex flex-col items-center text-center space-y-6 md:space-y-8 pt-8 md:pt-16 pb-8">
            { hook &&
                <div class="inline-flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-primary px-2">{hook}</span>
                </div>
            }
            <h1 class="text-5xl md:text-7xl font-black leading-tight tracking-tight dark:text-white font-display">
                {title}
            </h1>
            <p
                class="text-lg md:text-2xl text-[#64748b] dark:text-[#9dabb8] max-w-3xl mx-auto font-display font-light leading-relaxed">
                {description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <a class="px-8 py-4 bg-primary text-white text-base font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                    href={primaryButton.href}>
                    <span>{primaryButton.cta}</span>
                    <span class="material-symbols-outlined text-[20px]">arrow_downward</span>
                </a>
                { secondaryButton.href && secondaryButton.cta &&
                    <a class="px-8 py-4 bg-white dark:bg-[#1a242f] text-[#111418] dark:text-white border border-[#e2e8f0] dark:border-[#293038] text-base font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-[#232d3b] transition-colors flex items-center justify-center gap-2"
                        href={secondaryButton.href}>
                        <span>{secondaryButton.cta}</span>
                    </a>
                }
            </div>
        </section>
    );
}
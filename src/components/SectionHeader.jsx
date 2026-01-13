export default function SectionHeader({
    title = "",
    description = "",
    cta = {text: "", href: ""}
}) {
    return(
        <header class="flex items-end justify-between mb-8 md:mb-12 border-b border-[#e2e8f0] dark:border-[#293038] pb-4">
            <div>
                <h2 class="text-3xl font-bold font-display dark:text-white mb-2">{title}</h2>
                { description &&
                    <p class="text-[#64748b] dark:text-[#9dabb8]">{description}</p>
                }
            </div>
            { cta.text && cta.href &&
                <a class="hidden md:flex items-center text-sm font-bold text-primary hover:text-blue-600 transition-colors"
                href={cta.href}>
                    {cta.text} <span class="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
                </a>
            }
        </header>
    );
} 
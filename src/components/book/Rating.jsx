export default function Rating({   
        number = 0,
        max = 5,
        gap = 1
}) {
    return (
        <div class={`flex text-amber-400 gap-${gap}`}>
            {Array.from({ length: max }).map((_, i) => {
                let icon = "star";
                let extraClass = "";

                if (number >= i + 1) {
                    // étoile pleine
                    extraClass = "[font-variation-settings:'FILL'_1]";
                } else if (number >= i + 0.5) {
                    // étoile demi
                    icon = "star_half";
                }
                // sinon → étoile vide par défaut

                return (
                    <span
                        data-key={i}
                        class={`material-symbols-outlined ${extraClass} text-[16px]`}
                    >
                        {icon}
                    </span>
                );
            })}
        </div>
    );
}

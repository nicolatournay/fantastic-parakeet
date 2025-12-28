export default function Rating({ number = 0, max = 5 }) {
    return (
        <div class="flex text-amber-400 gap-1 mb-4">
            {Array.from({ length: max }).map((_, i) => {
                let icon = "star";
                let extraClass = "";

                if (number >= i + 1) {
                    // étoile pleine
                    extraClass = "filled";
                } else if (number >= i + 0.5) {
                    // étoile demi
                    icon = "star_half";
                }
                // sinon → étoile vide par défaut

                return (
                    <span
                        key={i}
                        class={`material-symbols-outlined ${extraClass} text-[16px]`}
                    >
                        {icon}
                    </span>
                );
            })}
        </div>
    );
}

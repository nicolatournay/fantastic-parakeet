import COLORS from "../../utils/colors";

type Color = keyof typeof COLORS;

interface TagProps {
  color?: Color;
  name: string;
}

export default function Tag({ color = "gray", name = "" }) {
    const styles = COLORS[color] || COLORS.gray;

    return (
        <div
            class={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${styles.bg} ${styles.text}`}
        >
            {name}
        </div>
    );
}

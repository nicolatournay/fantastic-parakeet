export default function ReadingProgress({ progress }) {
    if (progress <= 0) return null;

    return (
        <>
            <div class="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                <div class="bg-primary h-full rounded-full" style={`width: ${progress}%`}></div>
            </div>
            <span class="text-[10px] text-right text-[#64748b] mt-1">
                {progress}%
            </span>
        </>
    );
}
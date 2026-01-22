import Logo from "./Logo";

export default function Header() {
    return(
        <header
            class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#293038] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
            <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button
                            class="md:hidden p-2 -ml-2 text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#293038] rounded-md transition-colors">
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                        <a class="flex items-center gap-2 group" href="#">
                            <Logo />
                            <h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Blog de Lecture</h1>
                        </a>
                    </div>
                    <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                            href="#">
                            Accueil
                            <span
                                class="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </a>
                        <a class="text-sm font-medium text-primary dark:text-primary transition-colors relative" href="#">
                            Critiques
                            <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-primary"></span>
                        </a>
                        <a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                            href="#">
                            À propos
                            <span
                                class="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </a>
                        <a class="text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                            href="#">
                            Contact
                            <span
                                class="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </a>
                    </nav>
                    <div class="flex items-center gap-1 sm:gap-3">
                        <div class="hidden sm:flex relative group">
                            <input
                                class="w-32 lg:w-56 h-9 pl-9 pr-4 rounded-full bg-gray-100 dark:bg-[#1c242c] border border-transparent focus:border-primary/50 text-sm focus:ring-2 focus:ring-primary/20 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                                placeholder="Rechercher..." type="text" />
                            <span
                                class="material-symbols-outlined absolute left-2.5 top-1.5 text-gray-500 dark:text-gray-400 group-focus-within:text-primary transition-colors"
                                style="font-size: 20px;">search</span>
                        </div>
                        <button
                            class="sm:hidden p-2 text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#293038] rounded-full transition-colors">
                            <span class="material-symbols-outlined" style="font-size: 20px;">search</span>
                        </button>
                        <div class="w-px h-5 bg-gray-200 dark:bg-gray-700 hidden sm:block mx-1"></div>
                        <button
                            id="theme-toggler"
                            class="p-2 text-slate-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-[#293038] hover:text-primary rounded-full transition-colors"
                            title="Mode sombre/clair">
                            <span class="material-symbols-outlined hidden! dark:block!"
                                style="font-size: 20px;">light_mode</span>
                            <span class="material-symbols-outlined block! dark:hidden!"
                                style="font-size: 20px;">dark_mode</span>
                        </button>
                        <button
                            class="p-2 text-slate-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors"
                            title="S'abonner au flux RSS">
                            <span class="material-symbols-outlined" style="font-size: 20px;">rss_feed</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
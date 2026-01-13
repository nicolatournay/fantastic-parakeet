const root = document.documentElement;
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Fonction pour appliquer le thème
const setTheme = (theme) => {
    if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        // Si 'auto', on supprime la préférence stockée et on suit le système
        localStorage.removeItem('theme');
        applySystemTheme();
    }
};

// Fonction pour appliquer selon les réglages système
const applySystemTheme = () => {
    if (!localStorage.getItem('theme')) {
        root.classList.toggle('dark', darkQuery.matches);
    }
};

// 1. Initialisation : Priorité au stockage local, sinon système
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    applySystemTheme();
}

// 2. Écouteur pour les changements système en temps réel
darkQuery.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
        applySystemTheme();
    }
});
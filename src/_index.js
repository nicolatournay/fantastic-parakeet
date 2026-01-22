const btn = document.getElementById('theme-toggler');

btn.addEventListener('click', () => {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
});
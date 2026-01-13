import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({children}) {
    return (
        <>
            {{ html: "<!DOCTYPE html>" }}
            {/* <html class="dark" lang="fr"> */}
            <html lang="fr">

            <head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Index du Blog de Lecture</title>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                <script>
                    {{
                        html: `
                            (function () {
                            try {
                                const saved = localStorage.getItem('theme');
                                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                if (saved === 'dark' || (!saved && prefersDark)) {
                                document.documentElement.classList.add('dark');
                                }
                            } catch (e) {}
                            })();
                        `
                    }}
                </script>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap"
                    rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
                    rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="/index.css"
                />
            </head>

            <body
                class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
                <Header />
                    {children}
                <Footer />
            </body>

            </html>
        </>
    );
}
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default function Layout({children}) {
    return (
        <>
            {{ html: "<!DOCTYPE html>" }}
            <html class="dark" lang="fr">

            <head>
                <meta charset="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Index du Blog de Lecture</title>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&amp;family=Noto+Sans:wght@400;500;700&amp;display=swap"
                    rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
                    rel="stylesheet" />
                {/* <script id="tailwind-config">
                    tailwind.config = {
                        darkMode: "class",
                        theme: {
                            extend: {
                                colors: {
                                    "primary": "#1773cf",
                                    "background-light": "#f6f7f8",
                                    "background-dark": "#111921",
                                    "card-dark": "#1c242c",
                                    "text-muted": "#9dabb8"
                                },
                                fontFamily: {
                                    "display": ["Noto Serif", "serif"],
                                    "sans": ["Noto Sans", "sans-serif"]
                                },
                                borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                            },
                        },
                    }
                </script>
                <style>
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }

                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                </style> */}
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
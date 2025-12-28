import Layout from "./Layout";
import Hero from "./partials/Hero";
import BookCard from "./partials/BookCard";

export default function ({ request, reply }) {
  return (
    <Layout>
      <main class="flex-grow flex flex-col items-center px-4 md:px-8 py-8 md:py-12 w-full">
        <div class="max-w-[1200px] w-full flex flex-col gap-16 md:gap-24">
          <Hero
            hook= "Bienvenue sur mon blog"
            title = "Explorer l'infini une page à la fois"
            description = "Plongez dans un univers de chroniques littéraires. Ici, chaque livre est une nouvelle aventure que je partage avec vous."
            primaryButton = {{cta: "Découvrir les notes", href: "#featured"}}
            secondaryButton = {{cta: "Mes favoris", href: "#"}}
          />
          <section class="scroll-mt-24" id="featured">
            <div
              class="relative bg-white dark:bg-[#1a242f] rounded-2xl border border-[#e2e8f0] dark:border-[#293038] overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 md:p-12">
              <div class="absolute top-0 right-0 p-6 opacity-5 dark:opacity-[0.02]">
                <span class="material-symbols-outlined text-[300px] leading-none select-none">auto_stories</span>
              </div>
              <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center relative z-10">
                <div class="shrink-0 group perspective-1000">
                  <div
                    class="w-48 md:w-64 aspect-[2/3] rounded-lg shadow-2xl overflow-hidden relative transform transition-transform duration-500 group-hover:rotate-y-3 group-hover:scale-105">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLYLiHGDazkSkbKvcHMFDXWrn21VFpQ09yEe8g1r8GSM5PjMKrXUW0N8YkpilpmTrZtA4J7Znoba8pOSfiNHeGlQjQhQmaIgGiYnQr_pzQbKYgY7OUkeO7EWv3q6rL4eLyYSJmDVXBrxGKGARRB17mfTrg5hNIf74-hc8Hcz7ev-JHHR0sQYFGers8aSarNn85bSvWbZeGSwtxLev2CnG0ubdBNXrrJRLQcths2Tbl42JFEIqfyWH-1pq3Sggj714tK3j1DKZAqHWE');">
                    </div>
                    <div class="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/20 to-transparent"></div>
                    <div class="absolute inset-0 shadow-inner rounded-lg"></div>
                  </div>
                </div>
                <div
                  class="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 max-w-2xl">
                  <div class="flex items-center gap-3">
                    <span
                      class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Note en
                      vedette</span>
                    <div class="flex text-amber-400">
                      <span class="material-symbols-outlined filled text-[20px]">star</span>
                      <span class="material-symbols-outlined filled text-[20px]">star</span>
                      <span class="material-symbols-outlined filled text-[20px]">star</span>
                      <span class="material-symbols-outlined filled text-[20px]">star</span>
                      <span class="material-symbols-outlined filled text-[20px]">star</span>
                    </div>
                  </div>
                  <h2 class="text-3xl md:text-5xl font-bold font-display dark:text-white leading-tight">
                    L'Ombre du Vent
                  </h2>
                  <div class="text-xl text-primary font-medium italic">Carlos Ruiz Zafón</div>
                  <p class="text-[#64748b] dark:text-[#9dabb8] text-lg leading-relaxed line-clamp-3">
                    Une lettre d'amour à la littérature. Carlos Ruiz Zafón nous entraîne dans une Barcelone gothique et
                    mystérieuse. Découvrez pourquoi ce roman reste, dix ans après ma première lecture, une pierre angulaire
                    de ma bibliothèque personnelle.
                  </p>
                  <a class="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
                    href="#">
                    Lire la chronique complète
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="flex items-end justify-between mb-8 md:mb-12 border-b border-[#e2e8f0] dark:border-[#293038] pb-4">
              <div>
                <h2 class="text-3xl font-bold font-display dark:text-white mb-2">Dernières publications</h2>
                <p class="text-[#64748b] dark:text-[#9dabb8]">Mes lectures récentes et réflexions.</p>
              </div>
              <a class="hidden md:flex items-center text-sm font-bold text-primary hover:text-blue-600 transition-colors"
                href="#">
                Voir tout l'index <span class="material-symbols-outlined text-[16px] ml-1">chevron_right</span>
              </a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <BookCard
                cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7oqmCA1RNrb85xlo6VCSt771BwzJC4kcXcjiN_0V6zwGs1Munb79PQSkRrHcO9r6vCUUvhss5KwTo9WuItc-2E00VFOYNkjeL1iakojIO84Z15PHBV608Oi2eckrBOguaOFLHKgrEY2GrcdZeB21mcVc0APJcRxO5G1waCzvRPrcrCopBeJSOa9r6R26qmWsFAc6FsZ1AvgO-2CG5EG5H0JELY5hdRFpz86O2yMAGRMEIM4SYl5wG3fbjKzv2E10W0ufO9y4W0dQ"
                title = "Dune : Le Messie"
                author = "Frank Herbert"
                description = "Franck Herbert déconstruit le mythe du héros qu'il a lui-même créé. Une analyse de la chute de Paul Atréides."
                date = "2023-10-10"
                rating = {3.5}
                slug = "#"
                tags = {[{name: "SF", color: "blue"}]}
              />
              <article
                class="group flex flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div class="w-full flex justify-center mb-6 relative">
                  <div
                    class="w-32 sm:w-40 aspect-[2/3] rounded-md shadow-lg overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg7oqmCA1RNrb85xlo6VCSt771BwzJC4kcXcjiN_0V6zwGs1Munb79PQSkRrHcO9r6vCUUvhss5KwTo9WuItc-2E00VFOYNkjeL1iakojIO84Z15PHBV608Oi2eckrBOguaOFLHKgrEY2GrcdZeB21mcVc0APJcRxO5G1waCzvRPrcrCopBeJSOa9r6R26qmWsFAc6FsZ1AvgO-2CG5EG5H0JELY5hdRFpz86O2yMAGRMEIM4SYl5wG3fbjKzv2E10W0ufO9y4W0dQ');">
                    </div>
                  </div>
                  <div
                    class="absolute -top-2 -right-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                    SF
                  </div>
                </div>
                <div class="flex flex-col items-center text-center flex-grow">
                  <h3
                    class="text-xl font-bold font-display dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                    Dune : Le Messie</h3>
                  <p class="text-sm text-[#64748b] dark:text-[#9dabb8] italic mb-3">Frank Herbert</p>
                  <div class="flex text-amber-400 gap-1 mb-4">
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined text-[16px]">star_half</span>
                  </div>
                  <p class="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-3 mb-6">
                    Franck Herbert déconstruit le mythe du héros qu'il a lui-même créé. Une analyse de la chute de Paul
                    Atréides.
                  </p>
                  <div
                    class="mt-auto w-full pt-4 border-t border-[#e2e8f0] dark:border-[#293038] flex justify-between items-center">
                    <span class="text-xs text-[#64748b]">10 Oct 2023</span>
                    <a class="text-sm font-bold text-primary hover:underline" href="#">Lire la note</a>
                  </div>
                </div>
              </article>
              <article
                class="group flex flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div class="w-full flex justify-center mb-6 relative">
                  <div
                    class="w-32 sm:w-40 aspect-[2/3] rounded-md shadow-lg overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsAsphyUDY1SGRKqsm47qBs-a_mWt08LxXk-KCvqitVBK1ghnf_TQndKDBCZSjQ29_0271EPp2cuWC-Mu9iNyLa7gGrMa6Ke-YQfgEOo0jqaUFFTaZoh-kz-T-SSMqNRWVzyNrQWvUn0lPE8N5L1MXDyRshhzaOAENMvyURTkngvT0EISTtK44Q8jP49WSj4eR3TdFnYQffpJB91BkHjxjW98Egw7pNKd4v9vaWOqmLLne6BWXquxJeeW2a-khkcqYrXG7hhM9YBie');">
                    </div>
                  </div>
                  <div
                    class="absolute -top-2 -right-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                    Classique
                  </div>
                </div>
                <div class="flex flex-col items-center text-center flex-grow">
                  <h3
                    class="text-xl font-bold font-display dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                    Orgueil et Préjugés</h3>
                  <p class="text-sm text-[#64748b] dark:text-[#9dabb8] italic mb-3">Jane Austen</p>
                  <div class="flex text-amber-400 gap-1 mb-4">
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                  </div>
                  <p class="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-3 mb-6">
                    Jane Austen n'écrivait pas seulement des histoires d'amour, mais des critiques sociales acerbes.
                  </p>
                  <div
                    class="mt-auto w-full pt-4 border-t border-[#e2e8f0] dark:border-[#293038] flex justify-between items-center">
                    <span class="text-xs text-[#64748b]">02 Oct 2023</span>
                    <a class="text-sm font-bold text-primary hover:underline" href="#">Lire la note</a>
                  </div>
                </div>
              </article>
              <article
                class="group flex flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div class="w-full flex justify-center mb-6 relative">
                  <div
                    class="w-32 sm:w-40 aspect-[2/3] rounded-md shadow-lg overflow-hidden relative transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJQqZ1chAnz-rVnsn3Hti0p1eMizFvWVupr4yjgNnDI3hXi55seLx7zbKObVDwTFbmTDhtfE0DO5N8nZPSjY0NMafzobLVSQte3Cm230ywGhyNPmlFfhvGNdQdWcuCv6xIti6Umsx8Yxr9eF82bSxOIOw4iy-3bUVGUuETduI0z0cdAuJZQ1q0PJ8yVW9-vTW6uL8lmvT2dvHel0-UDQra8UkQudq5XpB7VzdrGi43XovI5SgHD5micT0vUXRBGI6G4qF_-QMvlXFV');">
                    </div>
                  </div>
                  <div
                    class="absolute -top-2 -right-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                    Thriller
                  </div>
                </div>
                <div class="flex flex-col items-center text-center flex-grow">
                  <h3
                    class="text-xl font-bold font-display dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                    Chanson douce</h3>
                  <p class="text-sm text-[#64748b] dark:text-[#9dabb8] italic mb-3">Leïla Slimani</p>
                  <div class="flex text-amber-400 gap-1 mb-4">
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined filled text-[16px]">star</span>
                    <span class="material-symbols-outlined text-[16px]">star_border</span>
                  </div>
                  <p class="text-sm text-[#64748b] dark:text-[#94a3b8] line-clamp-3 mb-6">
                    Leila Slimani signe un thriller psychologique glaçant qui interroge nos rapports de domination sociale.
                  </p>
                  <div
                    class="mt-auto w-full pt-4 border-t border-[#e2e8f0] dark:border-[#293038] flex justify-between items-center">
                    <span class="text-xs text-[#64748b]">28 Sep 2023</span>
                    <a class="text-sm font-bold text-primary hover:underline" href="#">Lire la note</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="mt-8 flex justify-center md:hidden">
              <a class="px-6 py-2 border border-[#e2e8f0] dark:border-[#293038] rounded-lg text-sm font-bold text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-[#232d3b] transition-colors"
                href="#">
                Voir tout l'index
              </a>
            </div>
          </section>
          <section class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-8">
              <h2
                class="text-3xl font-bold font-display dark:text-white mb-8 border-b border-[#e2e8f0] dark:border-[#293038] pb-4">
                Les Incontournables</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <article
                  class="flex flex-row sm:flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-4 gap-4 hover:border-primary/50 transition-colors">
                  <div class="shrink-0 w-24 sm:w-32 mx-auto aspect-[2/3] rounded shadow-md overflow-hidden relative">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgoAxhvUhE-ShW6Zt5GsZsaHDkE0r4Ccod1mzp6yNEREnH5GOqs3Et7XyA7iLiynRJiQPooWHWiQDosudZKCsrLM8fKym5JHK9jI6s_LEdBDL_BG5zMPNbTxq-IxN3Qx5ZQjYiGUJqJiYO3Zl59NvqF_1W-749vd_Eq49CYnmhv-L1pBomPKacUvHyPN26W3GTeeIQh9_Snln3eXGctvhkUI-EZtvMp6WLx7Q0oKB-9A15Qw9v_Ebr4DBkjOPQP51q54QTKS4lGFBo');">
                    </div>
                  </div>
                  <div class="flex flex-col sm:items-center sm:text-center flex-grow">
                    <h3 class="text-lg font-bold font-display dark:text-white leading-tight mb-1">Cent ans de solitude</h3>
                    <p class="text-sm text-primary font-medium mb-2">Gabriel García Márquez</p>
                    <div class="flex text-amber-400 gap-0.5 mb-2 sm:justify-center">
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                    </div>
                    <p class="text-xs text-[#64748b] dark:text-[#9dabb8] line-clamp-2 mb-3 hidden sm:block">
                      Une épopée familiale foisonnante, magique et tragique.
                    </p>
                    <a class="mt-auto text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary inline-block"
                      href="#">Lire la critique</a>
                  </div>
                </article>
                <article
                  class="flex flex-row sm:flex-col bg-white dark:bg-[#1a242f] rounded-xl border border-[#e2e8f0] dark:border-[#293038] p-4 gap-4 hover:border-primary/50 transition-colors">
                  <div class="shrink-0 w-24 sm:w-32 mx-auto aspect-[2/3] rounded shadow-md overflow-hidden relative">
                    <div class="absolute inset-0 bg-cover bg-center"
                      style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDxRbFgXUfe45pQG-Yuvw5rOmPFJYKaGQbLw1ijH65VAJvCWuKyDvhPz8fgpG9ZWrNGAYiw3XWiZK9yXfMEDuiINRHiWrPybVZfNEhnBr3Rarz7zZZmTbIW45tCllPLYU2eZWAjry_sdf3oFjzWMZjgBelFeB-9RwOrKQMtikRkHmJjhIEHtPBRDNozCf6cOfcxr4Lr5rLBD2ifWU_pYOO8JqXVkZu_RnTu4boZjwGSD6Ncyr3KP4Nz3EH0J14MmeGRY8nu6H6X5be');">
                    </div>
                  </div>
                  <div class="flex flex-col sm:items-center sm:text-center flex-grow">
                    <h3 class="text-lg font-bold font-display dark:text-white leading-tight mb-1">1984</h3>
                    <p class="text-sm text-primary font-medium mb-2">George Orwell</p>
                    <div class="flex text-amber-400 gap-0.5 mb-2 sm:justify-center">
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                      <span class="material-symbols-outlined filled text-[14px]">star</span>
                    </div>
                    <p class="text-xs text-[#64748b] dark:text-[#9dabb8] line-clamp-2 mb-3 hidden sm:block">
                      Plus qu'un roman, un avertissement sur la surveillance.
                    </p>
                    <a class="mt-auto text-xs font-bold uppercase tracking-wider text-[#111418] dark:text-white hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary inline-block"
                      href="#">Lire la critique</a>
                  </div>
                </article>
              </div>
            </div>
            <div class="lg:col-span-4">
              <div
                class="bg-[#f6f7f8] dark:bg-[#1a242f] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#293038] h-full flex flex-col">
                <h3 class="text-xl font-bold font-display dark:text-white mb-6 flex items-center gap-2">
                  <span class="material-symbols-outlined">menu_book</span>
                  Lectures du moment
                </h3>
                <div class="flex flex-col gap-6">
                  <div class="group flex gap-4 items-start">
                    <div
                      class="shrink-0 w-16 aspect-[2/3] bg-gray-200 dark:bg-gray-700 rounded shadow-md overflow-hidden relative group-hover:scale-105 transition-transform">
                      <img alt="Cover" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiIqBYBITwtxZSqzA8QLOlWpV4wCHRTgvEmDUtT62pVupzWowpiXIWjQiOvSROPx4NmFwn6q2oG56-FeR3lA7yPV1KrjSk5ceVFKG30XkP5RZqxAmmtKf3kdIpEUmrC7pcSEse1I0r2pvrOmVKrA6zuzSc0X62Yg-h5FhZ9e2PQlbcD9fwdg-T6PYIZ1S0m_9S5p5OsKENonQUC9nw1kEZNsKi1OaCZE3wHmoNSSo4Zx9hpugCDrNhJrlvahAvfhK-r5p1FtF8ZojN" />
                    </div>
                    <div class="flex flex-col justify-center w-full">
                      <span class="text-[10px] font-bold text-primary uppercase mb-1 tracking-wider">En cours</span>
                      <h4 class="font-bold text-sm dark:text-white leading-tight mb-1">Le Maître et Marguerite</h4>
                      <p class="text-xs text-[#64748b]">Mikhaïl Boulgakov</p>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div class="bg-primary h-full rounded-full" style="width: 45%"></div>
                      </div>
                      <span class="text-[10px] text-right text-[#64748b] mt-1">45%</span>
                    </div>
                  </div>
                  <div class="w-full h-px bg-[#e2e8f0] dark:bg-[#293038]"></div>
                  <div class="group flex gap-4 items-start opacity-75 hover:opacity-100 transition-opacity">
                    <div
                      class="shrink-0 w-16 aspect-[2/3] bg-gray-200 dark:bg-gray-700 rounded shadow-md overflow-hidden relative grayscale group-hover:scale-105 transition-transform">
                      <img alt="Cover" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb3nV7pCcyvhumcBmQsYlScTCEZUFfa6NDx3LmJZQBKsMPJ0Fs83ZGzIstaVeJ63H4J9E3_BnOKlCgFBk3K1F051EP7iV17Jb5Nd4A2RFAIHYO_5V2GL-YE7WrZd-xef0WAVMVfv8wBCLERWD6jwVguv4-XMTsmeVCTqtBATG9ZdYEiUGj4iAwPi8njOdRpBjLG_jfa2UnquOCZzluvGHLr4xFoDW1jYx-duZT4d27VdXjlOyvgdWzFh2wJtA7Dh5g0n1ixqziC6M_" />
                    </div>
                    <div class="flex flex-col justify-center">
                      <span class="text-[10px] font-bold text-[#64748b] uppercase mb-1 tracking-wider">Prochainement</span>
                      <h4 class="font-bold text-sm dark:text-white leading-tight mb-1">La Vie secrète des arbres</h4>
                      <p class="text-xs text-[#64748b]">Peter Wohlleben</p>
                      <button class="text-xs font-bold text-primary text-left mt-2 hover:underline">Voir la fiche</button>
                    </div>
                  </div>
                </div>
                <div class="mt-auto pt-8">
                  <div
                    class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-primary p-5 text-white shadow-lg">
                    <span
                      class="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] opacity-20 rotate-12 select-none">format_quote</span>
                    <p class="relative text-sm font-display italic leading-relaxed">
                      « Une chambre sans livres, c'est comme un corps sans âme. »
                    </p>
                    <p class="relative mt-2 text-[10px] font-bold uppercase tracking-widest opacity-90">— Cicéron</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
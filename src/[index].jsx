import Layout from "./Layout";
import Hero from "./components/Hero";
import BookCard from "./components/BookCard";
import FeaturedCard from "./components/FeaturedCard";
import SectionHeader from "./components/SectionHeader";
import SmallBookCard from "./components/SmallBookCard";
import BlueQuote from "./components/BlueQuote";
import CurrentReading from "./components/CurrentReading";
import NextReading from "./components/NextReading";

export default function ({ request, reply }) {
  return (
    <Layout>
      <main class="flex-grow flex flex-col items-center px-4 md:px-8 py-8 md:py-12 w-full">
        <div class="max-w-[1200px] w-full flex flex-col gap-16 md:gap-24">
          <Hero
            hook= "Bienvenue sur mon blog"
            title = {{firstLine: "Explorer l'infini", secondLine: "une page à la fois"}}
            description = "Plongez dans un univers de chroniques littéraires. Ici, chaque livre est une nouvelle aventure que je partage avec vous."
            primaryButton = {{cta: "Découvrir les notes", href: "#featured"}}
            secondaryButton = {{cta: "Mes favoris", href: "#"}}
          />
          <section class="scroll-mt-24" id="featured">
            <FeaturedCard
              cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7oqmCA1RNrb85xlo6VCSt771BwzJC4kcXcjiN_0V6zwGs1Munb79PQSkRrHcO9r6vCUUvhss5KwTo9WuItc-2E00VFOYNkjeL1iakojIO84Z15PHBV608Oi2eckrBOguaOFLHKgrEY2GrcdZeB21mcVc0APJcRxO5G1waCzvRPrcrCopBeJSOa9r6R26qmWsFAc6FsZ1AvgO-2CG5EG5H0JELY5hdRFpz86O2yMAGRMEIM4SYl5wG3fbjKzv2E10W0ufO9y4W0dQ"
              title = "L'Ombre du Vent"
              author = "Carlos Ruiz Zafón"
              rating = {5}
              description = "Une lettre d'amour à la littérature. Carlos Ruiz Zafón nous entraîne dans une Barcelone gothique et mystérieuse. Découvrez pourquoi ce roman reste, dix ans après ma première lecture, une pierre angulaire de ma bibliothèque..."
              slug = ""
            />
          </section>
          <section>
            <SectionHeader
              title = "Dernières publications"
              description = "Mes lectures récentes et réflexions."
              cta = {{text: "Voir tout l'index", href: "#"}}
            />
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
              <BookCard
                cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBsAsphyUDY1SGRKqsm47qBs-a_mWt08LxXk-KCvqitVBK1ghnf_TQndKDBCZSjQ29_0271EPp2cuWC-Mu9iNyLa7gGrMa6Ke-YQfgEOo0jqaUFFTaZoh-kz-T-SSMqNRWVzyNrQWvUn0lPE8N5L1MXDyRshhzaOAENMvyURTkngvT0EISTtK44Q8jP49WSj4eR3TdFnYQffpJB91BkHjxjW98Egw7pNKd4v9vaWOqmLLne6BWXquxJeeW2a-khkcqYrXG7hhM9YBie"
                title = "Orgueil et Préjugés"
                author = "Jane Austen"
                description = "Jane Austen n'écrivait pas seulement des histoires d'amour, mais des critiques sociales acerbes."
                date = "2023-10-02"
                rating = {2}
                slug = "#"
                tags = {[{name: "classique", color: "green"}]}
              />
              <BookCard
                cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJQqZ1chAnz-rVnsn3Hti0p1eMizFvWVupr4yjgNnDI3hXi55seLx7zbKObVDwTFbmTDhtfE0DO5N8nZPSjY0NMafzobLVSQte3Cm230ywGhyNPmlFfhvGNdQdWcuCv6xIti6Umsx8Yxr9eF82bSxOIOw4iy-3bUVGUuETduI0z0cdAuJZQ1q0PJ8yVW9-vTW6uL8lmvT2dvHel0-UDQra8UkQudq5XpB7VzdrGi43XovI5SgHD5micT0vUXRBGI6G4qF_-QMvlXFV"
                title = "Chanson douce"
                author = "Leïla Slimani"
                description = "Leila Slimani signe un thriller psychologique glaçant qui interroge nos rapports de domination sociale."
                date = "2023-09-28"
                rating = {4}
                slug = "#"
                tags = {[{name: "thriller", color: "orange"}]}
              />
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
              <SectionHeader
                title = "Les Incontournables"
              />
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SmallBookCard
                  cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgoAxhvUhE-ShW6Zt5GsZsaHDkE0r4Ccod1mzp6yNEREnH5GOqs3Et7XyA7iLiynRJiQPooWHWiQDosudZKCsrLM8fKym5JHK9jI6s_LEdBDL_BG5zMPNbTxq-IxN3Qx5ZQjYiGUJqJiYO3Zl59NvqF_1W-749vd_Eq49CYnmhv-L1pBomPKacUvHyPN26W3GTeeIQh9_Snln3eXGctvhkUI-EZtvMp6WLx7Q0oKB-9A15Qw9v_Ebr4DBkjOPQP51q54QTKS4lGFBo"
                  title = "Cent ans de solitude"
                  author = "Gabriel García Márquez"
                  rating = {3}
                  description = "Une épopée familiale foisonnante, magique et tragique."
                  cta = {{text: "Lire la critique", href: "#"}}
                />
                <SmallBookCard
                  cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBDxRbFgXUfe45pQG-Yuvw5rOmPFJYKaGQbLw1ijH65VAJvCWuKyDvhPz8fgpG9ZWrNGAYiw3XWiZK9yXfMEDuiINRHiWrPybVZfNEhnBr3Rarz7zZZmTbIW45tCllPLYU2eZWAjry_sdf3oFjzWMZjgBelFeB-9RwOrKQMtikRkHmJjhIEHtPBRDNozCf6cOfcxr4Lr5rLBD2ifWU_pYOO8JqXVkZu_RnTu4boZjwGSD6Ncyr3KP4Nz3EH0J14MmeGRY8nu6H6X5be"
                  title = "1984"
                  author = "George Orwell"
                  rating = {4}
                  description = "Plus qu'un roman, un avertissement sur la surveillance."
                  cta = {{text: "Lire la critique", href: "#"}}
                />
              </div>
            </div>
            {/* Lectures du moment */}
            <div class="lg:col-span-4">
              <div
                class="bg-[#f6f7f8] dark:bg-[#1a242f] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#293038] h-full flex flex-col dark:hover:border-primary/50 transition-colors">
                <h3 class="text-xl font-bold font-display dark:text-white mb-6 flex items-center gap-2">
                  <span class="material-symbols-outlined">menu_book</span>
                  Lectures du moment
                </h3>
                <div class="flex flex-col gap-6">
                  {/* en cours */}
                  <CurrentReading
                    cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuAiIqBYBITwtxZSqzA8QLOlWpV4wCHRTgvEmDUtT62pVupzWowpiXIWjQiOvSROPx4NmFwn6q2oG56-FeR3lA7yPV1KrjSk5ceVFKG30XkP5RZqxAmmtKf3kdIpEUmrC7pcSEse1I0r2pvrOmVKrA6zuzSc0X62Yg-h5FhZ9e2PQlbcD9fwdg-T6PYIZ1S0m_9S5p5OsKENonQUC9nw1kEZNsKi1OaCZE3wHmoNSSo4Zx9hpugCDrNhJrlvahAvfhK-r5p1FtF8ZojN"
                    title = "Le Maître et Marguerite"
                    author = "Mikhaïl Boulgakov"
                    progress={45}
                  />
                  {/* séparateur */}
                  <div class="w-full h-px bg-[#e2e8f0] dark:bg-[#293038]"></div>
                  {/* prochainement */}
                  <NextReading
                    cover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBb3nV7pCcyvhumcBmQsYlScTCEZUFfa6NDx3LmJZQBKsMPJ0Fs83ZGzIstaVeJ63H4J9E3_BnOKlCgFBk3K1F051EP7iV17Jb5Nd4A2RFAIHYO_5V2GL-YE7WrZd-xef0WAVMVfv8wBCLERWD6jwVguv4-XMTsmeVCTqtBATG9ZdYEiUGj4iAwPi8njOdRpBjLG_jfa2UnquOCZzluvGHLr4xFoDW1jYx-duZT4d27VdXjlOyvgdWzFh2wJtA7Dh5g0n1ixqziC6M_"
                    title = "La Vie secrète des arbres"
                    author = "Peter Wohlleben"
                  />
                </div>
                <div class="mt-auto pt-8">
                  <BlueQuote
                    author = "Cicéron"
                    text = "Une chambre sans livres, c'est comme un corps sans âme."
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
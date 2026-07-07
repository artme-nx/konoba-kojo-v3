import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1782919850858-6d03597b3312",
  glassTerrace: "https://images.unsplash.com/photo-1774876185770-a4556488ba62",
  glassInterior: "https://images.unsplash.com/photo-1775626822315-10b54337033b",
  colorfulTerrace: "https://images.unsplash.com/photo-1758561087076-e647b2e2485a",
  octopusGolden: "https://images.unsplash.com/photo-1764397514789-079231e88f31",
  dalmatianVillage: "https://images.unsplash.com/photo-1759764400231-6d2e591b833c",
  harborBoats: "https://images.unsplash.com/photo-1606385063531-c23fbf2e8417",
  promenadeSunset: "https://images.unsplash.com/photo-1632568373601-f68a5faf16fd",
  boardStarters: "https://images.unsplash.com/photo-1616631124348-c63521eb484c",
  tunaSteak: "https://images.unsplash.com/photo-1622716029515-7eb5ced2090b",
  octopus: "https://images.unsplash.com/photo-1764397514690-e175292f252e",
  calamari: "https://images.unsplash.com/photo-1675377668870-baf9b35763f9",
  dessert: "https://images.unsplash.com/photo-1653988354010-39637252a2db",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.boardStarters,
    dishes: [
      { name: "Domaća pjat", desc: "Pršut, ovčji sir iz zaleđa i masline, uz topli kruh iz krušne peći." },
      { name: "Hobotnica salata", desc: "Hladna kuhana hobotnica, kapula, kapari, maslinovo ulje i limun." },
      { name: "Sezonska salata", desc: "Miješana zelena salata, rajčica i domaći sir s obližnjeg imanja." },
    ],
  },
  {
    cat: "S grila",
    image: IMG.tunaSteak,
    dishes: [
      { name: "Tuna s grila", desc: "Odrezak tune sa žara, domaća polenta, list limete — naš najtraženiji tanjur." },
      { name: "Orada s gradela", desc: "Riba dana na drveni žar, blitva s krumpirom, maslinovo ulje." },
      { name: "Lignje s grila", desc: "Cijele lignje sa žara, škartoc mladog krumpira, češnjak i peršin." },
      { name: "Biftek s grila", desc: "Domaći biftek, sezonsko povrće s roštilja, umak od tartufa na upit." },
    ],
  },
  {
    cat: "Iz konobe",
    image: IMG.octopus,
    dishes: [
      { name: "Hobotnica ispod peke", desc: "Sočna hobotnica, krumpir, ružmarin i maslinovo ulje, pečeno satima." },
      { name: "Dagnje na buzaru", desc: "Dagnje iz kanala, bijelo vino, češnjak i peršin, uz kruh za umakanje." },
      { name: "Dobrada", desc: "Dalmatinski gulaš od iznutrica iz zaleđa, po receptu koji se ne mijenja." },
      { name: "Kačamak", desc: "Kukuruzni kačamak s krumpirom i mladim sirom — prilog koji pamti djetinjstvo." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.dessert,
    dishes: [
      { name: "Rožata", desc: "Dalmatinski krem karamel s tragom domaćeg likera." },
      { name: "Sezonsko voće", desc: "Voće po berbi, iz vrtova Ravnih kotara." },
    ],
  },
];

const GALLERY = [
  { src: IMG.glassTerrace, alt: "Staklena terasa konobe u trenutku zalaska", tall: true },
  { src: IMG.octopusGolden, alt: "Hobotnica na tanjuru u zlatnom svjetlu" },
  { src: IMG.colorfulTerrace, alt: "Postavljeni stolovi na terasi uz more" },
  { src: IMG.dalmatianVillage, alt: "Riva Svetog Filipa i Jakova s brodicama", wide: true },
  { src: IMG.harborBoats, alt: "Tradicionalne barke usidrene uz obalu" },
  { src: IMG.calamari, alt: "Lignje s grila i limun" },
  { src: IMG.promenadeSunset, alt: "Šetnica uz more u sumrak", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Terasa konobe Kojo u trenutku zalaska sunca nad morem"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>
            Konoba · Sveti Filip i Jakov
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Grill uz rivu, dok sunce <em className="italic" style={{ color: "var(--coral)" }}>tone</em> u more.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "var(--sand-300, #E4D3B4)" }}>
            Mala konoba na šetnici Svetog Filipa i Jakova — tuna i orada ravno s grila, hobotnica ispod peke, i terasa koja gleda točno u zalazak. Otvoreno tek navečer.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+385981839983"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--coral)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.6" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.6
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="400" data-suffix="+" style={{ color: "var(--foreground)" }}>
              400+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#2</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 14 restorana na Tripadvisoru</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="terasa" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--coral)" }}>Naša riva</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Bez pizze. Bez pomfrita. Jelovnik koji stane na jednu stranicu —{" "}
            <em className="italic" style={{ color: "var(--coral)" }}>jer sve na njoj radimo kako treba, ne kako je najlakše.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--coral)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Ravno s <em className="italic" style={{ color: "var(--coral)" }}>grila</em> i mora
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--coral)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center font-display italic text-lg" style={{ color: "var(--muted-foreground)" }}>
            Jelovnik namjerno ostaje kratak. Za tunu i hobotnicu ispod peke rezervirajte stol unaprijed.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.glassTerrace, 1000)} alt="Staklena terasa konobe Kojo s pogledom na more" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Konoba koja se otvara tek <em className="italic" style={{ color: "var(--coral)" }}>navečer</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Konoba Kojo stoji na Obali kralja Tomislava, tik uz šetnicu Svetog Filipa i Jakova — mjesta koje gosti prepoznaju po najljepšem zalasku u mjestu. Vrata otvaramo tek uvečer, kad se riva utiša, a stolovi na terasi gledaju ravno u sunce koje tone u more.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Umjesto jelovnika s pedeset stavki, radije radimo desetak — tunu i oradu s grila, hobotnicu ispod peke, dobradu i kačamak iz zaleđa. Obitelj Eškinja vodi konobu od prvog dana, s istom idejom: manje je više, kad je ono malo napravljeno kako treba.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--coral)" }}>
              — obitelj Eškinja, Konoba Kojo
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--coral)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Riva u <em className="italic" style={{ color: "var(--coral)" }}>sumrak</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--coral)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, na <em className="italic" style={{ color: "var(--coral)" }}>rivi</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Obala kralja Tomislava 21, 23207 Sveti Filip i Jakov</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom ili mailom.</p>
              <a href="tel:+385981839983" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--coral)" }}>
                +385 98 183 9983
              </a>
              <p className="mt-1">
                <a href="mailto:konoba@kojo.com" className="text-sm hover:text-[var(--coral)]" style={{ color: "var(--muted-foreground)" }}>
                  konoba@kojo.com
                </a>
              </p>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--coral)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>18:00 – 24:00</span>
              </div>
            </div>

            <a
              href="tel:+385981839983"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--coral)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Konoba+Kojo,+Obala+kralja+Tomislava+21,+Sveti+Filip+i+Jakov&output=embed"
              loading="lazy"
              title="Konoba Kojo — Sveti Filip i Jakov"
              className="h-full w-full min-h-[360px] border-0 grayscale-[10%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "#081019" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                K<span style={{ color: "var(--coral)" }}>o</span>jo
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Konoba na rivi Svetog Filipa i Jakova. Tuna, orada i hobotnica s grila, terasa okrenuta prema zalasku.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--coral)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--coral)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--coral)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--coral)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--coral)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--coral)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+385981839983" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 98 183 9983</a>
                <a href="mailto:konoba@kojo.com" className="hover:text-[var(--coral)]">konoba@kojo.com</a>
                <p>Obala kralja Tomislava 21, Sv. Filip i Jakov</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Konoba Kojo · Sveti Filip i Jakov</span>
            <span>4.6 ★ Google · 400+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}

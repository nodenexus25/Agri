import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Candy,
  Droplet,
  Wind,
  Layers,
  Flame,
  Recycle,
  Shield
} from "lucide-react";
import SEO from "../components/SEO";
import ByProductCard from "../components/ByProductCard";
import CircularEconomyDiagram from "../components/CircularEconomyDiagram";
import { byProducts } from "../data/products";

const heroSlides = ["/home1.png", "/home2.png", "/home3.png"];
const heroImage = heroSlides[0];

const productQuicklinks = [
  { key: "sugar", name: "Refined Sugar", Icon: Candy, tone: "text-harvest-gold-dark bg-harvest-gold/10" },
  { key: "molasses", name: "Molasses", Icon: Droplet, tone: "text-earth-brown-dark bg-earth-brown/10" },
  { key: "bagasse", name: "Bagasse", Icon: Wind, tone: "text-neutral-dark bg-neutral-dark/5" },
  { key: "press-mud", name: "Press Mud", Icon: Layers, tone: "text-earth-brown bg-earth-brown/10" },
  { key: "ethanol", name: "Ethanol", Icon: Flame, tone: "text-cane-green-dark bg-cane-green/10" }
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <SEO
        title="Rooted in Cooperation, Growing with Innovation"
        description="Farmer-owned cooperative sugar factory producing refined sugar, ethanol and sustainable by-products. Six decades of farmer-first agriculture, modern technology, and a zero-waste circular economy."
        keywords="sanjivani sugar factory maharashtra, cooperative sugar plant, sugarcane ethanol maharashtra, farmer support cooperative"
        image={heroImage}
        path="/"
      />

      <section className="relative min-h-[100vh] md:min-h-[100vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (src, i) =>
              i === slideIndex && (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )
          )}
        </AnimatePresence>

        {heroSlides.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === slideIndex
                    ? "w-8 h-2 bg-harvest-gold shadow-[0_0_12px_rgba(198,142,23,0.6)]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <span className="h-px w-7 bg-cane-green-dark/60" />
                About the Cooperative
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
                Built by farmers. <br />
                <span className="text-harvest-gold">Led by farmers.</span> <br />
                Six decades strong.
              </h2>
              <p className="mt-6 text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                Founded in 1960 by Late Hon. Shri. Shankar Rao Genuji Kolhe Saheb, our farmer-owned
                cooperative returns every surplus to the village — irrigation, schools, roads, and
                next-season subsidies. Today, under Shri. Bipindada Kolhe and Shri. Vivek Kolhe,
                we're modernizing the mill with drone spraying and Juice-to-Ethanol expansion.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-dark hover:bg-cane-green-dark text-neutral-light text-sm font-semibold transition-colors"
                >
                  Read Our Full Story
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/about#leadership"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-neutral-dark/80 hover:text-cane-green-dark transition-colors"
                >
                  Meet the Leadership
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="lg:col-span-3 grid grid-cols-5 gap-3 md:gap-4 h-[440px] md:h-[520px]"
            >
              <figure className="col-span-3 row-span-3 rounded-[28px] overflow-hidden relative">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=three%20generations%20of%20indian%20farmer%20family%20standing%20in%20tall%20lush%20sugarcane%20field%20smiling%20warm%20natural%20sunlight%20photojournalism%20editorial%20style%20high%20detail&image_size=portrait_4_3"
                  alt="Farmer family in sugarcane field"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 bg-neutral-dark/70 backdrop-blur text-neutral-light text-[12px] md:text-sm">
                  <span className="font-semibold">Members for life.</span> Three generations —
                  associated since 1978.
                </figcaption>
              </figure>
              <figure className="col-span-2 rounded-[24px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20sugar%20factory%20interior%20stainless%20steel%20vacuum%20pans%20industrial%20machinery%20warm%20lighting%20clean%20and%20hygienic%20professional%20industrial%20photography&image_size=square"
                  alt="Modern sugar factory interior"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="col-span-2 rounded-[24px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=senior%20indian%20engineer%20in%20white%20coat%20inspecting%20refined%20sugar%20crystals%20at%20quality%20control%20lab%20factory%20testing%20equipment%20focused%20expression&image_size=square"
                  alt="Quality control lab — refined sugar"
                  className="w-full h-full object-cover"
                />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
                <span className="h-px w-7 bg-harvest-gold/70" />
                Products & By-products
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-tight">
                One cane. <span className="text-cane-green-dark">Five value streams.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
              Premium refined sugar, ethanol, renewable power, and organic manure — every part of
              the stalk is put to work.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-3 mb-14 md:mb-16">
            {productQuicklinks.map((p) => (
              <Link
                key={p.key}
                to="/products"
                className="group rounded-2xl bg-white border border-neutral-dark/6 p-4 hover:border-cane-green/25 hover:shadow-[0_14px_35px_-18px_rgba(46,125,50,0.25)] transition-all"
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.tone}`}>
                  <p.Icon size={18} />
                </span>
                <p className="text-sm font-semibold text-neutral-dark leading-snug group-hover:text-cane-green-dark transition-colors">
                  {p.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {byProducts.map((p, i) => (
              <ByProductCard key={p.name} product={p} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green hover:bg-cane-green hover:text-white text-sm font-semibold text-neutral-dark transition-all"
            >
              Explore Full Product Range
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-cane-green-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{
                backgroundImage:
                  "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=indian%20farmers%20gathered%20at%20agriculture%20extension%20training%20program%20demonstrating%20modern%20farming%20tools%20warm%20community%20atmosphere&image_size=landscape_16_9')"
              }}
            />
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-harvest-gold/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  <Sprout size={13} />
                  Cane Development Program
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                  Empowering Farmers. <br />
                  <span className="text-harvest-gold">Enriching Land.</span>
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-lg">
                  Twelve structured programs — seeds, soil testing, drone spraying, drip
                  financing — so every farmer gets the inputs and advice to grow more, with less.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Soil & Water Testing",
                    "Subsidized Seeds",
                    "Drip Irrigation Finance",
                    "Drone Spraying",
                    "Organic Manure",
                    "Crop Insurance Help"
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Link
                    to="/cane-development"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-harvest-gold hover:bg-harvest-gold-light text-neutral-dark text-sm font-semibold transition-colors"
                  >
                    See All 12 Programs
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    <Shield size={15} />
                    Talk to a Cane Officer
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="grid grid-cols-2 gap-3 md:gap-4"
              >
                {[
                  {
                    t: "Cane Seed Program",
                    d: "Three-tier certified seed multiplication.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20healthy%20sugarcane%20seed%20setts%20being%20selected%20and%20treated%20at%20farm%20nursery%20agriculture%20macro%20photography&image_size=square"
                  },
                  {
                    t: "Soil Health Lab",
                    d: "NPK + micronutrient analysis — results in 48h.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=soil%20testing%20laboratory%20indian%20agriculture%20extension%20officer%20analyzing%20soil%20sample%20test%20tubes%20colorful%20reagents%20professional%20lighting&image_size=square"
                  },
                  {
                    t: "Drip Installation",
                    d: "4% simple-interest financing + subsidy support.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=technician%20installing%20drip%20irrigation%20system%20in%20young%20sugarcane%20field%20water%20droplets%20on%20tubes%20rural%20india&image_size=square"
                  },
                  {
                    t: "Drone Spraying",
                    d: "12-liter agri-drones — ₹60/acre for members.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=agricultural%20drone%20low%20altitude%20spraying%20fertilizer%20on%20sugarcane%20field%20india%20mist%20visible%20sunny%20day%20drone%20pilot%20observing&image_size=square"
                  }
                ].map((it, i) => (
                  <div
                    key={it.t}
                    className={`rounded-[24px] overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur ${
                      i === 0 ? "md:mt-8" : ""
                    } ${i === 3 ? "md:-mt-8" : ""}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={it.img}
                        alt={it.t}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold leading-snug">{it.t}</p>
                      <p className="mt-1.5 text-[12px] text-white/65 leading-relaxed">{it.d}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-14">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <Recycle size={12} />
                Sustainability
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-tight max-w-2xl">
                A zero-waste model that <span className="text-harvest-gold">fuels itself</span>.
              </h2>
            </div>
            <Link
              to="/sustainability"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green-dark hover:bg-cane-green-dark hover:text-white text-sm font-semibold text-neutral-dark transition-all self-start md:self-end"
            >
              Full Sustainability Report
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <CircularEconomyDiagram compact />
        </div>
      </section>
    </>
  );
}

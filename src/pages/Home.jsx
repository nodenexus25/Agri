import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
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
import AnimatedCounter from "../components/AnimatedCounter";
import ByProductCard from "../components/ByProductCard";
import CircularEconomyDiagram from "../components/CircularEconomyDiagram";
import { stats } from "../data/siteData";
import { byProducts } from "../data/products";
import { leadership } from "../data/leadership";

const heroImage =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=wide%20panoramic%20aerial%20view%20of%20vast%20green%20sugarcane%20fields%20at%20golden%20hour%20india%20farmer%20walking%20among%20cane%20rows%20dramatic%20warm%20sunset%20light%20editorial%20photography%20cinematic%20hdr&image_size=landscape_16_9";

const productQuicklinks = [
  { key: "sugar", name: "Refined Sugar", Icon: Candy, tone: "text-harvest-gold-dark bg-harvest-gold/10" },
  { key: "molasses", name: "Molasses", Icon: Droplet, tone: "text-earth-brown-dark bg-earth-brown/10" },
  { key: "bagasse", name: "Bagasse", Icon: Wind, tone: "text-neutral-dark bg-neutral-dark/5" },
  { key: "press-mud", name: "Press Mud", Icon: Layers, tone: "text-earth-brown bg-earth-brown/10" },
  { key: "ethanol", name: "Ethanol", Icon: Flame, tone: "text-cane-green-dark bg-cane-green/10" }
];

export default function Home() {
  return (
    <>
      <SEO
        title="Rooted in Cooperation, Growing with Innovation"
        description="63+ year-old cooperative sugar factory producing refined sugar, ethanol and sustainable by-products. Farmer-first agriculture, modern technology, and a zero-waste circular economy."
        keywords="sanjivani sugar factory maharashtra, cooperative sugar plant, sugarcane ethanol maharashtra, farmer support cooperative"
        image={heroImage}
        path="/"
      />

      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-cane-green-dark/90 via-cane-green-dark/70 to-cane-green-dark/30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-harvest-gold/20 blur-3xl mix-blend-screen"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-48 md:pt-56 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-neutral-light text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-harvest-gold animate-pulse" />
              Est. 1960 · 63+ Years of Cooperative Leadership
            </motion.p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-neutral-light leading-[0.98] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="block"
              >
                Rooted in
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block text-harvest-gold"
              >
                Cooperation.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="block"
              >
                Growing with <span className="text-cane-green-light">Innovation.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-7 text-base md:text-xl text-neutral-light/85 leading-relaxed max-w-2xl"
            >
              From fertile fields to refined excellence — we deliver sugar, ethanol, and sustainable
              by-products that fuel food, energy, and agriculture across India and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-harvest-gold hover:bg-harvest-gold-light text-neutral-dark text-sm md:text-base font-semibold transition-colors shadow-[0_14px_35px_-14px_rgba(198,142,23,0.65)]"
              >
                Read Our Story
                <BookOpen size={16} />
              </Link>
              <Link
                to="/cane-development"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 text-neutral-light text-sm md:text-base font-semibold transition-all"
              >
                Farmer Support Programs
                <Sprout size={16} className="group-hover:rotate-6 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl"
            >
              {[
                ["50,000+", "Farmer Members"],
                ["1.2 Lakh", "Acres Cane Area"],
                ["12", "Cane Development Programs"],
                ["100%", "Farmer-owned Cooperative"]
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl md:text-3xl font-semibold text-neutral-light tabular-nums">
                    {v}
                  </p>
                  <p className="mt-1 text-[11px] md:text-xs uppercase tracking-[0.16em] text-white/55">
                    {l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-neutral-light border-b border-neutral-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 items-start">
            {stats.map((s, i) => (
              <AnimatedCounter
                key={s.id}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                description={s.description}
                delay={i * 0.12}
                className="text-center md:text-left"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
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
                Founded in 1960 by Late Hon. Shri. Shankar Rao Genuji Kolhe Saheb, our factory is
                100% owned by the farmers whose cane we crush. Every surplus rupee returns to the
                village — in irrigation, schools, roads, and the next season's subsidies.
              </p>
              <p className="mt-4 text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                Today, under Shri. Bipindada Kolhe and Shri. Vivek Kolhe, we're investing in 6,000
                MT/day expansion, drone spraying, and Juice-to-Ethanol — the same cooperative soul,
                modern technology underneath.
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
                  <Users size={15} />
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
                  <span className="font-semibold">Members for life.</span> Three generations of the
                  Patil family, Sindkhed Raja taluka — associated with the cooperative since 1978.
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
              From premium food-grade refined sugar to ethanol, renewable power and organic manure —
              every part of the sugarcane stalk is put to work.
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
                <p className="mt-5 text-sm md:text-lg text-white/80 leading-relaxed max-w-xl">
                  Twelve structured programs — from seed development and soil testing to drone
                  spraying and drip irrigation financing — designed so every farmer in our command
                  area gets the inputs, advice, and credit to grow more, with less.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
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
                <div className="mt-9 flex flex-wrap gap-3.5">
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
                    d: "Three-tier nucleus, foundation, and certified seed multiplication every year.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20healthy%20sugarcane%20seed%20setts%20being%20selected%20and%20treated%20at%20farm%20nursery%20agriculture%20macro%20photography&image_size=square"
                  },
                  {
                    t: "Soil Health Lab",
                    d: "NPK, pH, EC and micro-nutrient analysis at ₹250/sample — results in 48 hours.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=soil%20testing%20laboratory%20indian%20agriculture%20extension%20officer%20analyzing%20soil%20sample%20test%20tubes%20colorful%20reagents%20professional%20lighting&image_size=square"
                  },
                  {
                    t: "Drip Installation",
                    d: "4% simple-interest financing, full subsidy assistance, and technical support.",
                    img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=technician%20installing%20drip%20irrigation%20system%20in%20young%20sugarcane%20field%20water%20droplets%20on%20tubes%20rural%20india&image_size=square"
                  },
                  {
                    t: "Drone Spraying",
                    d: "12-liter agricultural drones — uniform coverage at ₹60/acre for members.",
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

      <section id="leadership" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
              <span className="h-px w-7 bg-harvest-gold/70" />
              Leadership
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
              Same soul. <span className="text-cane-green-dark">Sharper tools.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {leadership.map((l, i) => (
              <motion.article
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[32px] border border-neutral-dark/6 p-6 md:p-8 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cane-green/[0.07] group-hover:bg-cane-green/[0.11] transition-colors"
                />
                <div className="relative flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-[24px] overflow-hidden border border-neutral-dark/8 bg-neutral-light">
                    <img
                      src={l.photo}
                      alt={l.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cane-green-dark mb-1.5">
                      {l.role}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-neutral-dark leading-tight tracking-tight">
                      {l.name}
                    </h3>
                    <p className="mt-4 text-[14px] md:text-[15px] text-neutral-dark/70 leading-relaxed">
                      {l.bio}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {l.values.map((v) => (
                        <span
                          key={v}
                          className="text-[11px] px-3 py-1 rounded-full bg-neutral-dark/5 text-neutral-dark/75"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-neutral-dark via-neutral-dark to-earth-brown-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(198,142,23,0.6),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(76,175,80,0.55),transparent_50%)]"
            />
            <div className="relative grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  Farmer Helpdesk
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                  Have a question, a field, or a crop that needs attention?
                </h2>
                <p className="mt-5 text-sm md:text-lg text-white/75 leading-relaxed max-w-xl">
                  Our Cane Development extension team covers every taluka in our command area.
                  Tell us what you need — we'll assign an officer and schedule a visit within 48 hours.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="rounded-[28px] bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm space-y-4">
                  {[
                    { k: "Cane Development Office", v: "+91 7266 202 450" },
                    { k: "Main Factory Reception", v: "+91 7266 202 400" },
                    { k: "Email", v: "farmerhelpdesk@sanjivani-agri.coop" },
                    { k: "Hours", v: "Mon–Sat · 9:00 AM – 6:00 PM IST" }
                  ].map((it) => (
                    <div key={it.k} className="flex items-start justify-between gap-4 py-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mt-0.5">
                        {it.k}
                      </p>
                      <p className="text-sm md:text-[15px] font-medium text-right">{it.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-harvest-gold hover:bg-harvest-gold-light text-neutral-dark text-sm font-semibold transition-colors"
                  >
                    Submit Farmer Request
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/contact#general"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    General Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

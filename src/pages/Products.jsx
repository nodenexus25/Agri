import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Candy,
  Check,
  Package,
  Truck,
  Award,
  Sparkles
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ByProductCard from "../components/ByProductCard";
import { mainProduct, byProducts } from "../data/products";

const heroImage = "/products.png";

export default function Products() {
  return (
    <>
      <SEO
        title="Refined Sugar, Molasses, Bagasse, Press Mud & Ethanol"
        description="Premium refined sugar (ICUMSA-45 white, raw, natural brown) plus sustainable by-products — molasses for ethanol, bagasse for power, press mud for organic manure, and E20-ready ethanol."
        keywords="ICUMSA 45 sugar supplier India, molasses for distillery, bagasse biomass fuel supplier, press mud organic fertilizer, ethanol manufacturer maharashtra cooperative"
        path="/products"
      />

      <PageHeader
        eyebrow="Products & By-products"
        title="From the field, refined to the world's standards."
        lead="One ton of sugarcane enters. Five value streams leave — food-grade sugar, ethanol, bio-power, paper-grade bagasse, and organic manure."
        backgroundImage={heroImage}
        tone="harvest"
      />

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 relative rounded-[36px] md:rounded-[44px] overflow-hidden aspect-[5/4] md:aspect-[16/10] border border-neutral-dark/6 bg-neutral-cream"
            >
              <img
                src={mainProduct.image}
                alt="Refined Sugar range — white, raw, brown"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-white/50 text-[11px] font-semibold uppercase tracking-[0.16em] text-cane-green-dark">
                  <Award size={11} />
                  Food Grade · FSSAI
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-dark/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  ICUMSA-45
                </span>
              </div>
              <div className="absolute bottom-5 right-5 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 border border-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.2)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-mid">
                  Dispatch
                </p>
                <p className="mt-0.5 font-display text-xl md:text-2xl font-semibold text-neutral-dark">
                  Season-Long Capacity
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="lg:col-span-2"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
                <Sparkles size={12} />
                Main Product
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
                {mainProduct.name}.
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                {mainProduct.description}
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-mid mb-3">
                  Available Variants
                </p>
                <ul className="grid sm:grid-cols-3 gap-2.5 mb-4">
                  {mainProduct.variants.map((v, i) => (
                    <li
                      key={v}
                      className="flex items-center gap-2 p-3.5 rounded-2xl bg-neutral-light border border-neutral-dark/6"
                    >
                      <span
                        className={`w-3 h-3 shrink-0 rounded-full ${
                          i === 0
                            ? "bg-gradient-to-br from-white to-neutral-100 border border-neutral-dark/10"
                            : i === 1
                            ? "bg-amber-300"
                            : "bg-amber-700"
                        }`}
                      />
                      <span className="text-sm font-semibold text-neutral-dark leading-snug">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3">
                  <figure className="relative overflow-hidden rounded-[22px] border border-neutral-dark/6 bg-neutral-cream aspect-[4/3]">
                    <img
                      src="/amrut/1.png"
                      alt="White Crystal Sugar — fine, pure, glossy crystals"
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 backdrop-blur px-3 py-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cane-green-dark">
                        White Crystal
                      </p>
                    </figcaption>
                  </figure>
                  <figure className="relative overflow-hidden rounded-[22px] border border-neutral-dark/6 bg-neutral-cream aspect-[4/3]">
                    <img
                      src="/amrut/2.png"
                      alt="Natural Brown Sugar — unrefined for chai and laddoos"
                      className="w-full h-full object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/90 backdrop-blur px-3 py-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-harvest-gold-dark">
                        Natural Brown
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white border border-neutral-dark/6 p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cane-green-dark mb-4">
                  Typical Specifications
                </p>
                <dl className="space-y-3">
                  {Object.entries(mainProduct.specs).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between gap-4 pb-3 border-b border-neutral-dark/5 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-neutral-dark/70">{k}</dt>
                      <dd className="text-sm font-semibold text-neutral-dark tabular-nums text-right">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-dark hover:bg-cane-green-dark text-white text-sm font-semibold transition-colors shadow-[0_14px_32px_-14px_rgba(0,0,0,0.35)]"
                >
                  Request Pricing & Samples
                  <Package size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-dark/10 hover:border-harvest-gold hover:bg-harvest-gold/5 text-neutral-dark text-sm font-semibold transition-all"
                >
                  <Truck size={14} />
                  Export Enquiries
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-4 md:gap-5">
            {mainProduct.industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3.5 rounded-2xl bg-neutral-light border border-neutral-dark/6 p-5"
              >
                <span className="w-9 h-9 shrink-0 rounded-xl bg-white border border-neutral-dark/8 flex items-center justify-center text-cane-green-dark">
                  <Check size={15} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-dark leading-snug">
                    {ind}
                  </p>
                  <p className="mt-1 text-[12px] text-neutral-mid leading-relaxed">
                    Dedicated grade & packaging.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="by-products" className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-light via-white to-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <span className="h-px w-7 bg-cane-green-dark/60" />
                By-products
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.08] max-w-2xl">
                Everything produced, <span className="text-harvest-gold">nothing discarded</span>.
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
              Four by-products — each an industrial input, sold domestically and exported. All four
              power our own circular economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            {byProducts.map((p, i) => (
              <ByProductCard key={p.name} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden p-8 md:p-14 lg:p-18" style={{ backgroundColor: "#F8F7F2" }}>
            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 space-y-6">
                <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cane-green-dark/5 border border-cane-green-dark/10 text-[11px] font-semibold uppercase tracking-[0.2em] text-cane-green-dark">
                  <Candy size={13} />
                  Amrut Sanjivani · Field to Table
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-dark max-w-xl">
                  From the same fields — refined sugar, brown sugar, and <span className="text-harvest-gold-dark">organic manure</span> back to the soil.
                </h2>
                <p className="text-sm md:text-[15px] text-neutral-dark/75 leading-relaxed max-w-lg">
                  Every by-product returns value — bagasse powers the factory, press
                  mud rebuilds farm soil, and molasses fuels E20 ethanol through the
                  Chemical Division. One cooperative. Four harvest-grade outputs.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 max-w-xl">
                  {[
                    { k: "Refined Sugar", v: "Food Grade" },
                    { k: "Organic Manure", v: "Farm Return" },
                    { k: "Ethanol", v: "E20 – Ready" }
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl bg-white border border-neutral-dark/6 p-4 shadow-[0_8px_20px_-18px_rgba(27,94,32,0.25)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cane-green-dark/70">
                        {s.k}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-neutral-dark">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-1 flex flex-wrap gap-3">
                  <Link
                    to="/amrut-sanjivani"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-dark hover:bg-cane-green-dark text-white text-sm font-semibold transition-colors"
                  >
                    Explore Consumer Brand
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/sustainability"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green-dark/40 hover:bg-cane-green-dark/[0.04] text-neutral-dark text-sm font-semibold transition-all"
                  >
                    Full Circular Story
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-6 grid-rows-6 gap-2.5 md:gap-3 h-[520px] md:h-[640px]">
                  <figure className="col-span-6 row-span-3 relative overflow-hidden rounded-[26px]">
                    <img
                      src="/amrut/Factory.JPG"
                      alt="Sanjivani Sahakari Sakhar Karkhana factory entrance"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/55 via-neutral-dark/5 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 md:bottom-5 md:left-5 right-4 md:right-5 flex items-end justify-between gap-4">
                      <div className="text-neutral-light max-w-md">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-harvest-gold mb-1">
                          Sanjivani Sahakari Sakhar Karkhana
                        </p>
                        <p className="font-display text-xl md:text-2xl font-semibold leading-tight">
                          Cooperative factory gate — where every truck begins the loop.
                        </p>
                      </div>
                    </figcaption>
                  </figure>

                  <figure className="col-span-3 row-span-3 overflow-hidden rounded-[26px]">
                    <img
                      src="/amrut/1.png"
                      alt="White Crystal Sugar — pure, glossy crystals"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <figure className="col-span-3 row-span-2 overflow-hidden rounded-[26px]">
                    <img
                      src="/amrut/2.png"
                      alt="Natural Brown Sugar — chai and laddoos"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <figure className="col-span-3 row-span-1 overflow-hidden rounded-[26px]">
                    <img
                      src="/amrut/3.png"
                      alt="Organic manure composted from press mud — returned to fields"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

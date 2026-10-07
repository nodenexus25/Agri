import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Factory,
  Award,
  Heart,
  Leaf,
  CheckCircle2,
  Package
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

const heroImage = "/amrut sanjivani.png";

const productShowcase = [
  {
    name: "Amrut Sanjivani White Crystal Sugar",
    tagline: "Pure. Sparkling. Everyday sweetness.",
    size: "1kg · 5kg · 25kg",
    use: "Tea, coffee, sweets, baking, daily home use",
    img: "/amrut/1.png"
  },
  {
    name: "Amrut Sanjivani Natural Brown Sugar",
    tagline: "Unrefined warmth for chai and laddoos.",
    size: "500g · 1kg",
    use: "Masala chai, traditional sweets, porridge",
    img: "/amrut/2.png"
  },
  {
    name: "Sanjivani Organic Manure",
    tagline: "From our press mud, back to your fields.",
    size: "25kg · 50kg sacks",
    use: "Sugarcane, horticulture, vegetables, orchards",
    img: "/amrut/3.png"
  }
];

export default function AmrutSanjivani() {
  return (
    <>
      <SEO
        title="Amrut Sanjivani — Farm to Home"
        description="Amrut Sanjivani Sugarcane Pvt. Ltd. — safe, hygienic, health-focused refined sugar and organic manure for the modern Indian home and farmer. Trusted household brand across Maharashtra."
        keywords="Amrut Sanjivani sugar brand, household refined sugar Maharashtra, premium organic manure press mud, safe hygienic sugar consumer brand"
        path="/amrut-sanjivani"
      />

      <PageHeader
        eyebrow="Amrut Sanjivani Sugarcane Pvt. Ltd."
        title="Farm to Home. Pure by design."
        lead="Our consumer brand built on the cooperative promise — from farmer-owned fields to family-owned kitchens. Nothing added, nothing hidden."
        backgroundImage={heroImage}
        tone="harvest"
      />

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold">
                  <Sparkles size={12} />
                  Our Consumer Promise
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
                  One of the most reliable agri-product suppliers in the region.
                </h2>
                <p className="text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                  Amrut Sanjivani Sugarcane Pvt. Ltd. is the consumer-facing arm of our cooperative.
                  We take the same factory-grade refined sugar, organic manure, and by-products our
                  industrial clients trust — and package them for every Indian kitchen, grocer, and
                  small farmer.
                </p>
                <p className="text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                  Every bag carries the cooperative guarantee — full traceability, consistent quality,
                  and the certainty that every purchase supports a farmer in our network.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-3">
                  {[
                    { k: "Product Range", v: "Wide" },
                    { k: "Reach", v: "Statewide" },
                    { k: "Retail Partners", v: "Many" },
                    { k: "Consumer Base", v: "Lakhs" }
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl bg-neutral-light border border-neutral-dark/6 p-4"
                    >
                      <p className="font-display text-xl md:text-2xl font-semibold text-neutral-dark">
                        {s.v}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-neutral-mid">
                        {s.k}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden aspect-[4/3] bg-neutral-cream">
                <img
                  src="/amrut/Factory.JPG"
                  alt="Modern packaging line"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-neutral-light max-w-lg">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-harvest-gold mb-2">
                    <Factory size={12} className="inline mr-1.5" />
                    Technology & Modern Equipment
                  </p>
                  <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                    Major investment in automated packaging, quality labs, and food-grade warehousing.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-3 md:gap-4">
                {[
                  { Icon: ShieldCheck, title: "FSSAI Licensed", desc: "Every batch tested & certified" },
                  { Icon: Award, title: "ISO 22000:2018", desc: "Food safety management system" },
                  { Icon: Heart, title: "Zero additives", desc: "No anti-caking agents or bleaches" }
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl bg-white border border-neutral-dark/6 p-4 md:p-5"
                  >
                    <span className="w-9 h-9 rounded-xl bg-cane-green/10 text-cane-green-dark flex items-center justify-center mb-3">
                      <c.Icon size={17} />
                    </span>
                    <p className="text-sm font-semibold text-neutral-dark leading-snug">
                      {c.title}
                    </p>
                    <p className="mt-1 text-[12px] text-neutral-mid leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <Leaf size={12} />
                Product Showcase
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.08] max-w-2xl">
                From the <span className="text-harvest-gold">dining table</span> back to the field.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green-dark hover:bg-cane-green-dark hover:text-white text-sm font-semibold text-neutral-dark transition-all self-start md:self-end"
            >
              Full Industrial Product Range
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-7">
            {productShowcase.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[32px] border border-neutral-dark/6 overflow-hidden hover:shadow-[0_24px_60px_-24px_rgba(198,142,23,0.3)] hover:border-harvest-gold/25 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-cream">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1100ms]"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-harvest-gold mb-2">
                    {p.size}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-dark leading-snug tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-neutral-dark/72 leading-relaxed">
                    {p.tagline}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-dark/5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-mid mb-2">
                      Ideal for
                    </p>
                    <p className="text-[13px] text-neutral-dark/75 leading-relaxed">{p.use}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-cane-green-dark text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={14} />
                    Available in 28 districts across Maharashtra
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-cane-green via-cane-green-dark to-earth-brown-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-harvest-gold/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
              <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Become a Partner
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Stock Amrut Sanjivani. Share the cooperative's promise.
              </h2>
              <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                Distributors, retail chains, kirana partners, and agri-input suppliers — join our
                network. Attractive margins, 12-month consistent supply, dedicated merchandising support.
              </p>
            </div>
            <div className="lg:col-span-2 md:pl-6 space-y-3.5">
              <div className="rounded-[24px] bg-white/[0.07] border border-white/10 backdrop-blur p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mb-2">
                  What you get
                </p>
                <ul className="space-y-2">
                  {[
                    "Competitive distributor & retailer margins",
                    "Monthly promotions & festival schemes",
                    "POP material & shelf branding",
                    "21-day credit (on approval)"
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-harvest-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-harvest-gold hover:bg-harvest-gold-light text-neutral-dark text-sm font-semibold transition-colors"
                >
                  <Package size={14} />
                  Distributor Enquiry
                </Link>
                <a
                  href="mailto:amrut@sanjivani-agri.coop"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                >
                  Email Brand Team
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

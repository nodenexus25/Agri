import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Zap,
  Droplets,
  Wind,
  Trees,
  Award,
  CheckCircle2,
  Factory,
  Sprout
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import CircularEconomyDiagram from "../components/CircularEconomyDiagram";

const heroImage =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=aerial%20drone%20view%20lush%20green%20sugarcane%20fields%20sunset%20drip%20irrigation%20lines%20renewable%20solar%20panel%20farm%20adjacent%20modern%20sustainability%20cinematic%20landscape&image_size=landscape_16_9";

const impact = [
  {
    Icon: Zap,
    title: "Bagasse Cogeneration",
    metric: "22 MW",
    description:
      "In-house bagasse-fueled boilers & turbines power our entire crushing operation — surplus feeds the state grid.",
    points: ["100% renewable during crushing season", "Surplus to MSEDCL grid (Nov–Feb)", "Replaces ~40,000 MT coal/season"]
  },
  {
    Icon: Droplets,
    title: "Zero Liquid Discharge",
    metric: "ZLD Certified",
    description:
      "Condensate recovery, multi-effect evaporation, and press-mud composting ensure zero process water leaves our premises.",
    points: ["92% process water recycled", "Mill effluent → press mud compost", "No discharge into local water bodies"]
  },
  {
    Icon: Wind,
    title: "Air Quality & Emissions",
    metric: "CPCB Compliant",
    description:
      "Bagasse boilers fitted with ESP (electrostatic precipitators) and continuous stack emissions monitoring (24×7 online).",
    points: ["PM < 50 mg/Nm³", "SOx & NOx within norms", "Quarterly third-party audit"]
  },
  {
    Icon: Trees,
    title: "Command-Area Afforestation",
    metric: "1,20,000+ Saplings",
    description:
      "Every member farmer gets free saplings — avenue trees, fruit orchards, and agroforestry on bunds & farm ponds.",
    points: ["110+ villages covered", "Mango, tamarind, neem, teak", "5-year survival tracking"]
  }
];

export default function Sustainability() {
  return (
    <>
      <SEO
        title="Sustainability — Circular Economy & Renewable Energy"
        description="Responsible agriculture: sugarcane by-products into renewable energy, organic fertilizers, and E20 ethanol. Bagasse cogeneration, zero liquid discharge, and 120,000+ saplings planted in our command area."
        keywords="circular economy sugar factory, bagasse cogeneration maharashtra, zero liquid discharge sugar mill, ethanol carbon reduction maharashtra"
        path="/sustainability"
      />

      <PageHeader
        eyebrow="Sustainability & Innovation"
        title="We believe in responsible agriculture."
        lead="By converting every by-product into renewable energy and organic fertilizers, we minimize waste, maximize value — and ensure a greener tomorrow for every village in our command area."
        backgroundImage={heroImage}
      />

      <section id="circular" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CircularEconomyDiagram />
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-light via-white to-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
              <Award size={12} />
              Measured Impact · FY 2024–25
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.08]">
              Four pillars. <span className="text-harvest-gold">Real numbers.</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-base text-neutral-dark/70 leading-relaxed">
              Every quarter, we publish our impact — energy generated, water recycled, emissions
              audited, and saplings planted. Because a promise to the land should be measurable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            {impact.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[32px] md:rounded-[36px] border border-neutral-dark/6 p-6 md:p-8 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-cane-green/[0.06] group-hover:bg-cane-green/[0.1] transition-colors"
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-gradient-to-br from-cane-green/15 to-cane-green/5 text-cane-green-dark flex items-center justify-center border border-cane-green/15">
                      <card.Icon size={24} strokeWidth={2} />
                    </span>
                    <p className="font-display text-3xl md:text-4xl font-semibold text-neutral-dark tracking-tight text-right leading-none">
                      {card.metric}
                    </p>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-neutral-dark tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-3 gap-2.5">
                    {card.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 rounded-xl bg-neutral-light p-3"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0 text-cane-green-dark"
                        />
                        <span className="text-[12px] text-neutral-dark/75 leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
                <Sprout size={12} />
                Command-Area Programs
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
                Sustainability doesn't end at our factory gate.
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                Our cooperative's 1.2 lakh acre command area is where the real green work happens —
                micro-irrigation, farm ponds, soil carbon restoration, and sapling distribution.
                Every one of our 12 Cane Development programs has a sustainability layer underneath.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  ["Drip adoption", "12,000+ acres converted — 60% less water, +22% yield"],
                  ["Farm ponds", "220+ structures — drought resilience for 8,000+ acres"],
                  ["Bio-compost use", "15,000 MT organic manure returned to soils annually"],
                  ["Micro-nutrient mapping", "Village-level soil GIS — precision NPK prescription"]
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-light border border-neutral-dark/5">
                    <span className="w-9 h-9 shrink-0 rounded-xl bg-white border border-neutral-dark/8 flex items-center justify-center text-cane-green-dark">
                      <Recycle size={15} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-dark leading-snug">{k}</p>
                      <p className="mt-0.5 text-[13px] text-neutral-dark/70 leading-relaxed">{v}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="grid grid-cols-6 grid-rows-6 gap-2.5 md:gap-3 h-[520px] md:h-[620px]"
            >
              <figure className="col-span-6 row-span-3 rounded-[26px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=bagasse%20cogeneration%20power%20plant%20at%20sugar%20factory%20turbine%20hall%20steam%20pipes%20modern%20control%20room%20industrial%20photography%20warm%20light&image_size=landscape_4_3"
                  alt="Bagasse cogeneration plant"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="col-span-3 row-span-3 rounded-[26px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=press%20mud%20composting%20windrows%20factory%20compost%20turner%20machine%20worker%20in%20uniform%20rich%20organic%20soil%20sugarcane%20background%20morning%20light&image_size=portrait_4_3"
                  alt="Press mud composting"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="col-span-3 row-span-2 rounded-[26px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=water%20treatment%20zero%20liquid%20discharge%20plant%20pipes%20valves%20sensors%20clean%20modern%20industrial%20facility%20professional%20photography&image_size=square"
                  alt="Water treatment ZLD"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="col-span-3 row-span-1 rounded-[26px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=indian%20farmer%20planting%20sapling%20on%20farm%20bund%20agroforestry%20children%20helping%20village%20afforestation%20drive%20monsoon%20green%20fields&image_size=landscape_16_9"
                  alt="Afforestation drive"
                  className="w-full h-full object-cover"
                />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-neutral-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_30%,rgba(76,175,80,0.8),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(198,142,23,0.8),transparent_50%)]"
            />
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  <Factory size={13} />
                  Sanjivani Group — Shared Narrative
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
                  Our sustainability story doesn't stop here — it flows into the Chemical Division.
                </h2>
                <p className="mt-5 text-sm md:text-lg text-white/78 leading-relaxed max-w-2xl">
                  The molasses and ethanol we produce here feed the Chemical Division's
                  ESJ-to-Ethanol, sanitizer, and specialty chemical operations. The same carbon we
                  pull from the air as cane — we displace from fuels, transport, and hospitals as
                  renewable ethanol. A group-wide carbon balance sheet.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-3.5">
                <a
                  href="#"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-cane-green hover:bg-cane-green-light text-white p-5 transition-colors"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-1.5">
                      Explore
                    </p>
                    <p className="font-display text-xl font-semibold leading-tight">
                      Chemical Division Sustainability
                    </p>
                  </div>
                  <ArrowRight size={18} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="rounded-[24px] bg-white/[0.06] border border-white/10 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mb-3">
                    Shared Group Targets · 2030
                  </p>
                  <ul className="space-y-2">
                    {[
                      ["100%", "Renewable power across all sites"],
                      ["–40%", "Scope 1 & 2 carbon intensity vs 2022"],
                      ["5×", "Press-mud organic manure output"]
                    ].map(([v, k]) => (
                      <li key={k} className="flex items-center justify-between gap-4 pb-2 border-b border-white/10 last:border-0 last:pb-0">
                        <p className="text-[13px] text-white/75">{k}</p>
                        <p className="font-display text-lg font-semibold text-harvest-gold tabular-nums">{v}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                >
                  Request Full ESG Report
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Award,
  Calendar
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import Timeline from "../components/Timeline";
import AnimatedCounter from "../components/AnimatedCounter";
import { timeline } from "../data/timeline";
import { leadership, foundingStory } from "../data/leadership";

const heroImage = "/our story.png";

export default function About() {
  return (
    <>
      <SEO
        title="Our Story — Six Decades of Farmer Cooperation"
        description="Founded 1960 by Late Hon. Shri. Shankar Rao Genuji Kolhe Saheb. Maharashtra's respected cooperative sugar factory — from a handful of village growers to a diversified group producing refined sugar, ethanol and sustainable by-products."
        keywords="shankar rao kolhe sahakari sakhar karkhana history, sugar cooperative maharashtra 1960, bipindada kolhe vivek kolhe sanjivani"
        path="/about"
      />

      <PageHeader
        eyebrow="Our Story · Est. 1960"
        title="Six decades of growing together."
        lead="From a small village mill to a diversified group — our greatest asset remains the thousands of farmer families who own it."
        backgroundImage={heroImage}
      />

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5]">
                <img
                  src={foundingStory.founder.photo}
                  alt={foundingStory.founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 bg-gradient-to-t from-neutral-dark/95 via-neutral-dark/70 to-transparent text-neutral-light">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-harvest-gold mb-2">
                    {foundingStory.founder.epithet}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                    {foundingStory.founder.name}
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <StatChip Icon={Calendar} label="Est." value="1960" />
                <StatChip Icon={Users} label="Farmers" value="Community" />
                <StatChip Icon={Building2} label="Status" value="Co-op" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="lg:col-span-8 space-y-6 md:space-y-7"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark">
                <span className="h-px w-7 bg-cane-green-dark/60" />
                {foundingStory.title}
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-dark tracking-tight leading-[1.02]">
                {foundingStory.subtitle}
              </h2>
              <div className="space-y-5 md:space-y-6">
                {foundingStory.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-base text-neutral-dark/78 leading-[1.8]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-8 grid sm:grid-cols-3 gap-4 md:gap-6 border-t border-neutral-dark/5">
                <AnimatedCounter value={63} suffix="+" label="Years of cooperation" description="Since 1960" />
                <AnimatedCounter value={null} label="Modern Mill" description="Next-gen boilers, crystallizers & automation" />
                <AnimatedCounter value={null} label="Cane Dev Programs" description="Seeds, soil, drone, drip & finance support" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-neutral-light via-white to-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
              <Award size={12} />
              Milestones
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.08]">
              From a shared dream to a <span className="text-cane-green-dark">shared legacy</span>.
            </h2>
            <p className="mt-5 text-[15px] md:text-base text-neutral-dark/70 leading-relaxed">
              Every milestone began as a conversation in a village chaupal. Every decision voted
              on by the farmers it affected.
            </p>
          </div>

          <Timeline items={timeline} />
        </div>
      </section>

      <section id="leadership" className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <Users size={12} />
                Leadership
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.08] max-w-2xl">
                Stewards of the cooperative's <span className="text-harvest-gold">second inning</span>.
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
              Honoring the founding vision while investing in the technologies and infrastructure
              for the next 60 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {leadership.map((l, i) => (
              <motion.article
                key={l.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-[36px] md:rounded-[40px] border border-neutral-dark/6 p-7 md:p-9 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-28 -right-28 w-72 h-72 rounded-full bg-cane-green/[0.07] group-hover:bg-cane-green/[0.11] transition-colors"
                />
                <div className="relative flex flex-col md:flex-row gap-7 md:gap-8">
                  <div className="w-full md:w-44 shrink-0 aspect-[4/5] md:aspect-auto md:h-56 rounded-[28px] overflow-hidden border border-neutral-dark/8 bg-neutral-light">
                    <img
                      src={l.photo}
                      alt={l.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cane-green-dark mb-2">
                      {l.role}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-dark leading-tight tracking-tight">
                      {l.name}
                    </h3>
                    <p className="mt-5 text-[14px] md:text-[15px] text-neutral-dark/72 leading-[1.8]">
                      {l.bio}
                    </p>
                    <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {l.values.map((v) => (
                          <span
                            key={v}
                            className="text-[11px] px-3 py-1.5 rounded-full bg-neutral-dark/5 text-neutral-dark/75"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
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
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-cane-green-dark via-cane-green to-cane-green-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute -top-20 -right-24 w-[420px] h-[420px] rounded-full bg-harvest-gold/20 blur-3xl"
            />
            <div className="relative grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-harvest-gold mb-5">
                  Part of Sanjivani Group of Industries
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  Two subsidiaries. One supply chain. One promise to the farmer.
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                  Agriculture Division grows and crushes the cane. Chemical Division turns
                  by-products into ethanol, sanitizers, and specialty chemicals — capturing the
                  full value chain so more rupees return to the farm.
                </p>
              </div>
              <div className="md:col-span-2 md:pl-6">
                <div className="rounded-[28px] bg-white/[0.07] border border-white/10 backdrop-blur p-6 space-y-3.5">
                  {[
                    { label: "Agriculture Division", detail: "Sugar · Molasses · Bagasse · Press Mud" },
                    { label: "→ Shared feedstock", detail: "Molasses & ESJ routed by pipeline", highlight: true },
                    { label: "Chemical Division", detail: "Ethanol · Sanitizers · Specialty Chemicals" }
                  ].map((r, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-2xl ${
                        r.highlight
                          ? "bg-harvest-gold/15 border border-harvest-gold/30"
                          : "bg-white/[0.04] border border-white/10"
                      }`}
                    >
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${r.highlight ? "text-harvest-gold" : "text-white/55"} mb-1`}>
                        {r.label}
                      </p>
                      <p className="text-sm text-white/85">{r.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-neutral-dark text-sm font-semibold hover:bg-harvest-gold-light transition-colors"
                  >
                    Visit Chemical Division
                    <ArrowRight size={14} />
                  </a>
                  <Link
                    to="/sustainability"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    Shared Sustainability
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

function StatChip({ Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-neutral-light border border-neutral-dark/6 p-4 text-center">
      <Icon size={16} className="mx-auto text-cane-green-dark mb-1.5" />
      <p className="font-display text-lg font-semibold text-neutral-dark leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-neutral-mid">{label}</p>
    </div>
  );
}

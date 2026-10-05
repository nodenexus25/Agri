import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  LayoutGrid,
  ListFilter,
  Phone,
  Mail,
  Sprout,
  FlaskConical,
  Droplets,
  Plane,
  Users
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import InitiativeCard from "../components/InitiativeCard";
import { caneInitiatives } from "../data/caneDevelopment";

const heroImage = "/Farmer Support.png";

const categoryList = ["All", ...Array.from(new Set(caneInitiatives.map((i) => i.category)))];

const quickPillars = [
  {
    Icon: Sprout,
    title: "Seeds & Nursery",
    items: ["Cane Seed Development", "Coco Peat & Poly Trays", "Green Manuring"]
  },
  {
    Icon: FlaskConical,
    title: "Soil & Advisory",
    items: ["Soil & Water Analysis", "Bio-Compost & Micronutrients", "Organic Manure"]
  },
  {
    Icon: Droplets,
    title: "Water & Irrigation",
    items: ["Drip Irrigation Finance", "Farm Ponds Support"]
  },
  {
    Icon: Plane,
    title: "Technology & Finance",
    items: ["Drone Spraying", "Pre-Tillage Assistance", "Credit Facility", "Basal Dose Fertilizers"]
  }
];

export default function CaneDevelopment() {
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? caneInitiatives : caneInitiatives.filter((i) => i.category === category);

  return (
    <>
      <SEO
        title="Cane Development & Farmer Support Programs"
        description="Structured farmer support programs — subsidized seeds, soil testing, drip irrigation finance, drone spraying, credit facility, and Sanjivani Organic Manure for all cooperative members."
        keywords="farmer support sugarcane maharashtra, subsidized drip irrigation, drone spraying sugarcane, soil testing facility maharashtra, organic manure press mud"
        path="/cane-development"
      />

      <PageHeader
        eyebrow="Cane Development · Farmer Support"
        title="Farmers are the foundation of our growth."
        lead="Twelve programs — from seed to harvest to payment — every member family gets inputs, advice, and credit to grow more, with less."
        backgroundImage={heroImage}
        tone="cane"
      />

      <section className="relative py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
            {quickPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="rounded-3xl bg-white border border-neutral-dark/6 p-5 md:p-6"
              >
                <span className="w-11 h-11 rounded-2xl bg-cane-green/10 text-cane-green-dark flex items-center justify-center mb-4">
                  <p.Icon size={20} />
                </span>
                <h3 className="text-base md:text-lg font-semibold text-neutral-dark leading-tight">
                  {p.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-neutral-dark/70 leading-snug">
                      <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-harvest-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-3">
                <span className="h-px w-7 bg-cane-green-dark/60" />
                All 12 Initiatives
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-neutral-dark tracking-tight leading-tight">
                Every input, subsidized. Every step, supported.
              </h2>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center p-1 rounded-2xl bg-neutral-light border border-neutral-dark/6">
                {[
                  { k: "grid", Icon: LayoutGrid },
                  { k: "accordion", Icon: ListFilter }
                ].map((b) => {
                  const active = view === b.k;
                  return (
                    <button
                      key={b.k}
                      onClick={() => setView(b.k)}
                      className={`relative w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-colors ${
                        active ? "text-cane-green-dark" : "text-neutral-mid"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="viewpill"
                          className="absolute inset-0 rounded-xl bg-white border border-neutral-dark/6 shadow-sm"
                        />
                      )}
                      <span className="relative">
                        <b.Icon size={15} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categoryList.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    active
                      ? "bg-cane-green-dark text-white shadow-[0_8px_22px_-10px_rgba(46,125,50,0.6)]"
                      : "bg-white border border-neutral-dark/8 text-neutral-dark/75 hover:border-cane-green/30 hover:text-cane-green-dark"
                  }`}
                >
                  {c}
                  <span className={`ml-1.5 ${active ? "text-white/60" : "text-neutral-mid"}`}>
                    {c === "All"
                      ? caneInitiatives.length
                      : caneInitiatives.filter((i) => i.category === c).length}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
              >
                {filtered.map((it, i) => (
                  <InitiativeCard key={it.id} initiative={it} index={i} variant="grid" />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="acc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-2.5 max-w-4xl mx-auto"
              >
                {filtered.map((it, i) => (
                  <InitiativeCard key={it.id} initiative={it} index={i} variant="accordion" />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-harvest-gold-dark via-harvest-gold to-harvest-gold-light text-neutral-dark p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-white/25 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-dark/10 border border-neutral-dark/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  <Users size={13} />
                  Already a farmer member?
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                  Get in touch with our extension team.
                </h2>
                <p className="mt-5 text-sm md:text-base text-neutral-dark/80 leading-relaxed max-w-lg">
                  Tell us your village and what you need — seeds, soil advice, drone spraying, or
                  drip financing. Our Cane Officer will call within 48 hours.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-md">
                  <a
                    href="tel:+917266202450"
                    className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-neutral-dark hover:bg-cane-green-dark text-white text-sm font-semibold transition-colors"
                  >
                    <Phone size={14} />
                    Farmer Helpdesk
                  </a>
                  <a
                    href="mailto:farmerhelpdesk@sanjivani-agri.coop"
                    className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/70 hover:bg-white border border-neutral-dark/10 text-neutral-dark text-sm font-semibold transition-colors"
                  >
                    <Mail size={14} />
                    Email Cane Team
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="rounded-[28px] bg-white border border-neutral-dark/10 p-6 space-y-4 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)]">
                  {[
                    { k: "Chief Cane Officer", v: "Shri. Rajendra Patil" },
                    { k: "Helpdesk Phone", v: "+91 7266 202 450" },
                    { k: "Email", v: "farmerhelpdesk@sanjivani-agri.coop" },
                    { k: "Office Hours", v: "Mon–Sat · 9 AM – 6 PM IST" },
                    { k: "Languages", v: "English · Marathi · Hindi" }
                  ].map((it) => (
                    <div
                      key={it.k}
                      className="flex items-start justify-between gap-4 py-1 border-b border-neutral-dark/5 last:border-0 last:pb-0"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-mid mt-0.5">
                        {it.k}
                      </p>
                      <p className="text-sm font-medium text-neutral-dark text-right">{it.v}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-5 group inline-flex items-center justify-center w-full gap-2 px-6 py-3.5 rounded-full bg-cane-green-dark hover:bg-cane-green text-white text-sm font-semibold transition-colors"
                >
                  Submit Farmer Support Request
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

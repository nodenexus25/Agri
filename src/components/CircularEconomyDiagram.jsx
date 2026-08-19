import { motion } from "framer-motion";
import {
  Sprout,
  Candy,
  Droplet,
  Wind,
  Layers,
  Flame,
  Zap,
  Leaf,
  ArrowRight
} from "lucide-react";

const stages = [
  {
    key: "cane",
    label: "Sugarcane",
    description: "1.2 lakh acres of registered cane area across 50,000+ farmer families.",
    Icon: Sprout,
    tone: "from-cane-green/20 to-cane-green/5 text-cane-green-dark border-cane-green/15"
  },
  {
    key: "sugar",
    label: "Sugar + By-products",
    description: "Crushing → Refined Sugar, Molasses, Bagasse, and Press Mud streams.",
    Icon: Candy,
    tone: "from-harvest-gold/25 to-harvest-gold/5 text-harvest-gold-dark border-harvest-gold/20"
  },
  {
    key: "process",
    label: "By-product Processing",
    description: "Molasses → Ethanol · Bagasse → Power · Press Mud → Organic Manure.",
    Icon: Layers,
    tone: "from-earth-brown/20 to-earth-brown/5 text-earth-brown-dark border-earth-brown/20"
  },
  {
    key: "outputs",
    label: "Energy + Fertilizer",
    description: "Clean ethanol fuel, renewable cogeneration power, and soil-enriching organic manure.",
    Icon: Zap,
    tone: "from-cane-green-light/20 to-cane-green/5 text-cane-green-dark border-cane-green/20"
  },
  {
    key: "back",
    label: "Back to the Farm",
    description: "Organic manure and subsidized inputs return to the soil — the circle never closes, it renews.",
    Icon: Leaf,
    tone: "from-harvest-gold/20 to-cane-green/10 text-cane-green-dark border-cane-green/25"
  }
];

const byProductHubs = [
  { Icon: Droplet, name: "Molasses", desc: "→ Ethanol & Distillery feedstock" },
  { Icon: Wind, name: "Bagasse", desc: "→ Cogeneration & Paper pulp" },
  { Icon: Layers, name: "Press Mud", desc: "→ Sanjivani Organic Manure" },
  { Icon: Flame, name: "Ethanol", desc: "→ E20 Fuel & Chemical Division" }
];

export default function CircularEconomyDiagram({ compact = false }) {
  return (
    <div
      className={`relative rounded-[32px] md:rounded-[40px] ${
        compact ? "p-6 md:p-10" : "p-8 md:p-14 lg:p-16"
      } bg-gradient-to-br from-neutral-light via-white to-neutral-cream border border-neutral-dark/6 overflow-hidden`}
    >
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-80 rounded-full bg-cane-green/[0.06] blur-3xl"
      />

      <div className="relative">
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 ${compact ? "mb-6" : ""}`}>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-3">
            <span className="h-px w-7 bg-cane-green-dark/60" />
            Circular Economy Model
            <span className="h-px w-7 bg-cane-green-dark/60" />
          </p>
          <h3 className={`font-display font-semibold tracking-tight text-neutral-dark leading-tight ${
            compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl"
          }`}>
            One stalk of cane. Five value streams. Zero waste.
          </h3>
          {!compact && (
            <p className="mt-4 text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
              Every ton of sugarcane passes through five stages — and every residual stream feeds
              the next. Nothing is discarded; everything is renewed.
            </p>
          )}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4 md:gap-3 lg:gap-5">
            {stages.map((s, i) => {
              const { Icon, tone, label, description } = s;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className={`relative h-full rounded-3xl p-5 md:p-6 border bg-gradient-to-br ${tone}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center">
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                      <span className="font-display text-xs font-semibold opacity-60">0{i + 1}</span>
                    </div>
                    <p className="text-sm md:text-base font-semibold leading-snug tracking-tight">
                      {label}
                    </p>
                    <p className="mt-2 text-[12px] md:text-[13px] opacity-80 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {i < stages.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <span className="w-8 h-8 rounded-full bg-white border border-neutral-dark/8 flex items-center justify-center text-cane-green-dark shadow-sm">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-neutral-dark/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {byProductHubs.map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 p-3.5 md:p-4 rounded-2xl bg-white border border-neutral-dark/5"
                >
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-cane-green/10 text-cane-green-dark flex items-center justify-center">
                    <b.Icon size={16} strokeWidth={2.2} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] md:text-sm font-semibold text-neutral-dark">
                      {b.name}
                    </p>
                    <p className="mt-0.5 text-[11px] md:text-[12px] text-neutral-mid">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

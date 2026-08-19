import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function resolveIcon(name, size = 20, stroke = 2) {
  const Icon = LucideIcons[name] || LucideIcons.Leaf;
  return <Icon size={size} strokeWidth={stroke} />;
}

export default function InitiativeCard({ initiative, index, variant = "grid" }) {
  const [open, setOpen] = useState(false);
  const icon = resolveIcon(initiative.icon, 20, 2.1);

  if (variant === "accordion") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.04, duration: 0.4 }}
        className="border border-neutral-dark/8 rounded-2xl overflow-hidden bg-white hover:border-cane-green/30 transition-colors"
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-4 px-5 py-4.5 text-left"
        >
          <span className="w-11 h-11 shrink-0 rounded-xl bg-cane-green/10 text-cane-green-dark flex items-center justify-center">
            {icon}
          </span>
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-harvest-gold mb-0.5">
              {initiative.category}
            </p>
            <p className="text-base font-semibold text-neutral-dark">{initiative.title}</p>
          </div>
          <ChevronDown
            size={18}
            className={`shrink-0 text-neutral-mid transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 pl-20">
            <p className="text-sm leading-relaxed text-neutral-dark/75">
              {initiative.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl border border-neutral-dark/6 p-6 md:p-7 hover:border-cane-green/25 hover:shadow-[0_20px_50px_-24px_rgba(46,125,50,0.25)] transition-all duration-500 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cane-green/[0.07] group-hover:bg-cane-green/[0.11] group-hover:scale-110 transition-all duration-500"
      />

      <div className="relative">
        <div className="w-12 h-12 md:w-13 md:h-13 rounded-2xl bg-cane-green/10 text-cane-green-dark flex items-center justify-center mb-5 group-hover:bg-cane-green-dark group-hover:text-white transition-colors duration-500">
          {icon}
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-harvest-gold mb-2">
          {initiative.category}
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-neutral-dark leading-snug tracking-tight">
          {initiative.title}
        </h3>

        <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
          {initiative.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-cane-green-dark text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="h-px w-6 bg-cane-green-dark/60" />
          Available for all member farmers
        </div>
      </div>
    </motion.article>
  );
}

import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

function resolveIcon(name, size = 20, stroke = 2) {
  const Icon = LucideIcons[name] || LucideIcons.Package;
  return <Icon size={size} strokeWidth={stroke} />;
}

export default function ByProductCard({ product, index }) {
  const icon = resolveIcon(product.icon, 22, 2);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[28px] border border-neutral-dark/6 p-6 md:p-7 lg:p-8 overflow-hidden hover:border-harvest-gold/30 hover:shadow-[0_24px_60px_-28px_rgba(198,142,23,0.3)] transition-all duration-500 flex flex-col"
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-52 h-52 rounded-full -translate-y-24 translate-x-24 bg-harvest-gold/[0.07] group-hover:bg-harvest-gold/[0.13] transition-all duration-500"
      />

      <div className="relative flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 md:w-15 md:h-15 rounded-2xl bg-gradient-to-br from-harvest-gold/15 to-harvest-gold/5 text-harvest-gold-dark flex items-center justify-center border border-harvest-gold/15">
            {icon}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cane-green-dark/70 bg-cane-green/8 px-3 py-1.5 rounded-full">
            By-Product
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-neutral-dark leading-tight">
          {product.name}
        </h3>

        <p className="mt-2 text-sm md:text-[15px] text-harvest-gold-dark font-semibold leading-relaxed">
          {product.use}
        </p>

        <p className="mt-3 text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
          {product.description}
        </p>

        {product.specs && (
          <div className="mt-5 grid grid-cols-3 gap-3">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-neutral-light p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-mid">
                  {k}
                </p>
                <p className="mt-1 text-[13px] font-semibold text-neutral-dark leading-snug">
                  {v}
                </p>
              </div>
            ))}
          </div>
        )}

        {product.industries && (
          <div className="mt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-mid mb-2.5">
              Industries Served
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {product.industries.map((ind) => (
                <li
                  key={ind}
                  className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-full bg-neutral-dark/5 text-neutral-dark/80"
                >
                  <Check size={11} className="text-cane-green-dark" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative mt-6 pt-5 border-t border-neutral-dark/5">
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cane-green-dark hover:text-cane-green transition-colors"
        >
          Enquire about {product.name}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}

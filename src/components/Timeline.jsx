import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { CircleDot, Flag, TrendingUp, Zap, Award, Users, Factory, Flame } from "lucide-react";

function resolveIcon(name) {
  const map = { Flag, TrendingUp, Zap, Award, Users, Factory, Flame };
  const Icon = map[name] || LucideIcons[name] || CircleDot;
  return <Icon size={18} strokeWidth={2.2} />;
}

export default function Timeline({ items }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-5 md:left-1/2 md:-translate-x-px top-3 bottom-3 w-px bg-gradient-to-b from-cane-green/10 via-cane-green/40 to-harvest-gold/30"
      />

      <ol className="space-y-10 md:space-y-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.li
              key={`${item.year}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative grid md:grid-cols-2 md:gap-12 gap-5 ${
                isLeft ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`pl-14 md:pl-0 ${
                  isLeft ? "md:text-right md:pr-10" : "md:pl-10 md:text-left"
                }`}
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <p className="inline-flex items-center gap-2 text-cane-green-dark font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    {item.year}
                  </p>
                  <p className="mt-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-harvest-gold">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm md:text-[15px] text-neutral-dark/75 leading-relaxed md:max-w-md md:inline-block">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-1 md:top-3 flex items-center justify-center">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 22 }}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-cane-green/20 text-cane-green-dark flex items-center justify-center shadow-[0_6px_20px_-8px_rgba(46,125,50,0.45)]"
                >
                  {resolveIcon(item.icon)}
                </motion.span>
              </div>

              <div className="hidden md:block" />
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { motion, animate } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  duration = 1.8,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);
  const isTextual = value == null;

  useEffect(() => {
    if (isTextual || !inView) return;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v))
    });
    return controls.stop;
  }, [inView, value, duration, delay, isTextual]);

  const formatted = isTextual ? "" : display.toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${className}`}
    >
      <div className="min-h-[5.5rem] md:min-h-[6.5rem] flex items-baseline gap-1">
        {!isTextual && (
          <span className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-cane-green-dark leading-none">
            {prefix}
          </span>
        )}
        {isTextual ? (
          <p className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-cane-green-dark leading-tight">
            {label}
          </p>
        ) : (
          <span className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-cane-green-dark leading-none tabular-nums">
            {formatted}
          </span>
        )}
        {!isTextual && (
          <span className="font-display text-2xl md:text-3xl font-semibold text-harvest-gold leading-none">
            {suffix}
          </span>
        )}
      </div>
      {label && !isTextual && (
        <p className="mt-3 text-sm md:text-base font-semibold text-neutral-dark tracking-tight">
          {label}
        </p>
      )}
      {description && (
        <p className={`text-xs md:text-sm text-neutral-mid leading-relaxed ${isTextual ? "mt-2" : "mt-1"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

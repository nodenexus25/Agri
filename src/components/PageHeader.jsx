import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumb,
  backgroundImage,
  heightClass = "min-h-[58vh] md:min-h-[64vh]",
  tone = "cane"
}) {
  const toneBg =
    tone === "cane"
      ? "from-cane-green-dark/90 via-cane-green/75 to-cane-green-dark/60"
      : tone === "harvest"
      ? "from-earth-brown/92 via-harvest-gold-dark/70 to-earth-brown/72"
      : "from-neutral-dark/88 via-neutral-dark/65 to-neutral-dark/50";

  return (
    <section
      className={`relative ${heightClass} flex items-end overflow-hidden`}
    >
      {backgroundImage && (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
      )}
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-b ${toneBg} mix-blend-multiply`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 via-transparent to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 md:pb-20 pt-40 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {breadcrumb && (
            <Link
              to={breadcrumb.to}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm text-neutral-light/75 hover:text-white mb-5 transition-colors"
            >
              <ArrowLeft size={14} />
              {breadcrumb.label}
            </Link>
          )}

          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-5">
              <span className="h-px w-7 bg-harvest-gold/80" />
              {eyebrow}
            </p>
          )}

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-neutral-light leading-[1.05] tracking-tight">
            {title}
          </h1>

          {lead && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base md:text-xl text-neutral-light/85 leading-relaxed max-w-2xl"
            >
              {lead}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

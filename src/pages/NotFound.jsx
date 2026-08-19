import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Sprout, Search } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="404 — The page you're looking for isn't part of our harvest." />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=aerial%20shot%20of%20endless%20rows%20of%20lush%20sugarcane%20field%20green%20waves%20soft%20diffused%20afternoon%20light%20serene%20agriculture%20background&image_size=landscape_16_9')"
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-neutral-light via-neutral-light/95 to-white"
        />
        <div
          aria-hidden
          className="absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-cane-green/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-harvest-gold/10 blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cane-green/10 border border-cane-green/15 text-cane-green-dark text-[11px] font-semibold uppercase tracking-[0.2em] mb-7"
              >
                <Search size={11} />
                404 · Not Found
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-neutral-dark tracking-tight leading-[0.95]"
              >
                This page isn't part of our <span className="text-cane-green-dark">harvest</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-6 text-base md:text-xl text-neutral-dark/70 leading-relaxed max-w-xl"
              >
                The URL you followed may have changed, or the season for this content may have
                passed. Either way, there's plenty more to explore in the cooperative.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3.5"
              >
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-cane-green-dark hover:bg-cane-green text-white text-sm md:text-base font-semibold transition-colors shadow-[0_14px_35px_-14px_rgba(46,125,50,0.55)]"
                >
                  <Home size={16} />
                  Back to Home
                </Link>
                <Link
                  to="/cane-development"
                  className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-neutral-dark/10 hover:border-harvest-gold hover:bg-harvest-gold/5 text-neutral-dark text-sm md:text-base font-semibold transition-all"
                >
                  <Sprout size={16} className="group-hover:rotate-6 transition-transform" />
                  Explore Farmer Programs
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center gap-2 px-5 py-4 text-sm md:text-base font-semibold text-neutral-dark/80 hover:text-cane-green-dark transition-colors"
                >
                  <ArrowLeft size={15} />
                  Go back
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { label: "Our Story", to: "/about" },
                  { label: "Products", to: "/products" },
                  { label: "Sustainability", to: "/sustainability" },
                  { label: "Contact", to: "/contact" }
                ].map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="group flex items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-neutral-dark/6 hover:border-cane-green/30 transition-all"
                  >
                    <span className="text-sm font-semibold text-neutral-dark group-hover:text-cane-green-dark transition-colors">
                      {c.label}
                    </span>
                    <ArrowLeft size={14} className="-scale-x-100 text-neutral-mid group-hover:text-cane-green-dark group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="lg:col-span-2 relative"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] border border-cane-green/10 shadow-[0_30px_80px_-30px_rgba(46,125,50,0.25)]">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=curious%20indian%20farmer%20with%20white%20turban%20looking%20up%20at%20tall%20sugarcane%20stalks%20puzzled%20amused%20expression%20golden%20hour%20light%20photojournalism%20warm%20tones&image_size=portrait_4_3"
                  alt="Farmer looking up at tall cane"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-neutral-dark/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur border border-white px-4 py-3 flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-harvest-gold/15 text-harvest-gold-dark flex items-center justify-center">
                    <Sprout size={17} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-mid mb-0.5">
                      Proverb from our villages
                    </p>
                    <p className="text-sm font-semibold text-neutral-dark">
                      "If you can't find it in the field, check the path you took to get here."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";

const byProductLabels = [
  { key: "1", name: "Refined Sugar", image: "/prod/1.png" },
  { key: "2", name: "Molasses", image: "/prod/2.png" },
  { key: "3", name: "Bagasse", image: "/prod/3.png" },
  { key: "4", name: "Organic Manure", image: "/prod/4.png" },
  { key: "5", name: "Ethanol", image: "/prod/5.png" }
];

export default function CircularEconomyDiagram({ compact = false }) {
  return (
    <div
      className="relative w-full rounded-[36px] md:rounded-[44px] overflow-hidden"
      style={{ backgroundColor: "#F8F7F2" }}
    >
      <div
        className={`relative ${
          compact
            ? "px-4 py-8 md:px-10 md:py-14 lg:px-14 lg:py-18"
            : "px-4 py-10 md:px-12 md:py-18 lg:px-18 lg:py-24"
        }`}
      >
        <div
          aria-hidden
          className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[75%] h-72 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #1B5E20 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mx-auto overflow-hidden rounded-[28px] md:rounded-[36px]"
            style={{
              maxWidth: compact ? "1080px" : "1180px",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.9) inset, 0 24px 70px -40px rgba(27,94,32,0.35)"
            }}
          >
            <img
              src="/circular model.png"
              alt="Sanjivani Agriculture Circular Economy Model — One stalk of cane. Five value streams. Zero waste."
              className="w-full h-auto block"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={compact ? "mt-10 md:mt-14" : "mt-12 md:mt-16 lg:mt-20"}
          >
            <p className="text-center">
              <span className="inline-flex items-center gap-3 text-[10.5px] md:text-[11px] font-semibold uppercase tracking-[0.28em] mb-5 md:mb-7"
                style={{ color: "rgba(27,94,32,0.8)" }}
              >
                <span className="h-px w-8 md:w-12" style={{ backgroundColor: "rgba(198,142,23,0.5)" }} />
                Five Value Streams
                <span className="h-px w-8 md:w-12" style={{ backgroundColor: "rgba(198,142,23,0.5)" }} />
              </span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto">
              {byProductLabels.map((p, i) => (
                <motion.figure
                  key={p.key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-[22px] md:rounded-[26px] bg-white"
                  style={{
                    border: "1px solid rgba(26,26,26,0.05)",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.9) inset, 0 14px 34px -26px rgba(27,94,32,0.3)"
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(248,247,242,0) 55%, rgba(248,247,242,0.55) 100%)"
                      }}
                    />
                  </div>
                  <figcaption
                    className="px-3.5 py-3 md:px-4 md:py-3.5 text-center font-display font-semibold tracking-tight text-[13px] md:text-[14px] lg:text-[15px]"
                    style={{ color: "#1B5E20" }}
                  >
                    {p.name}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

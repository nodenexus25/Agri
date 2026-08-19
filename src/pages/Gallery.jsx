import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import { galleryItems, galleryCategories } from "../data/gallery";

const heroImage =
  "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=wide%20aerial%20panorama%20indian%20sugarcane%20fields%20at%20harvest%20drones%20flying%20farmers%20in%20distance%20dramatic%20golden%20hour%20light%20atmospheric%20editorial%20photography&image_size=landscape_16_9";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(() => {
    return galleryItems.filter((it) => {
      const byCategory = category === "All" || it.category === category;
      const q = query.trim().toLowerCase();
      const byQuery =
        !q ||
        it.title.toLowerCase().includes(q) ||
        it.caption.toLowerCase().includes(q) ||
        it.category.toLowerCase().includes(q);
      return byCategory && byQuery;
    });
  }, [category, query]);

  const openIndex = lightbox != null ? filtered.findIndex((it) => it.id === lightbox) : -1;

  const goPrev = () => {
    if (openIndex < 0) return;
    const next = (openIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[next].id);
  };
  const goNext = () => {
    if (openIndex < 0) return;
    const next = (openIndex + 1) % filtered.length;
    setLightbox(filtered[next].id);
  };

  return (
    <>
      <SEO
        title="Gallery — Fields, Factory, Farmers & Community"
        description="Photography from our sugarcane fields, factory operations, quality labs, farmer engagement workshops, drone spraying, harvest season, and cooperative community events."
        keywords="sugar factory photos maharashtra, sugarcane harvest photography, farmer cooperative gallery, drone spraying agriculture, bagasse plant images"
        path="/gallery"
      />

      <PageHeader
        eyebrow="Gallery · 63+ Years of Stories"
        title="From the fields, through the factory, to the family table."
        lead="A photo essay of harvest seasons, factory floors, soil workshops, drone sorties, and the 50,000+ families that make this cooperative what it is."
        backgroundImage={heroImage}
      />

      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8 md:mb-10">
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((c) => {
                const active = category === c;
                const count =
                  c === "All" ? galleryItems.length : galleryItems.filter((i) => i.category === c).length;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                      active
                        ? "bg-cane-green-dark text-white shadow-[0_10px_28px_-12px_rgba(46,125,50,0.55)]"
                        : "bg-white border border-neutral-dark/8 text-neutral-dark/75 hover:border-cane-green/30 hover:text-cane-green-dark"
                    }`}
                  >
                    {c}
                    <span className={`ml-1.5 ${active ? "text-white/60" : "text-neutral-mid"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative max-w-sm lg:max-w-xs w-full">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-mid" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search photos, captions, events…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-neutral-dark/8 text-sm focus:outline-none focus:border-cane-green focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="text-xs text-neutral-mid mb-6">
            Showing {filtered.length} of {galleryItems.length} photographs
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((it, i) => {
                const spans = [
                  "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
                  "",
                  "",
                  "sm:col-span-2",
                  "",
                  "",
                  "lg:row-span-2",
                  "",
                  "",
                  "sm:col-span-2",
                  "",
                  ""
                ];
                const span = spans[i % spans.length];
                return (
                  <motion.button
                    layout
                    key={it.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setLightbox(it.id)}
                    className={`group relative text-left rounded-[22px] md:rounded-[26px] overflow-hidden bg-neutral-cream aspect-auto ${span}`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        span.includes("row-span-2")
                          ? "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[440px]"
                          : span.includes("col-span-2")
                          ? "aspect-[16/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={it.image}
                        alt={it.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/85 via-neutral-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-[10px] font-semibold uppercase tracking-[0.14em] text-white mb-2">
                          {it.category}
                        </span>
                        <p className="text-sm md:text-base font-semibold text-white leading-snug">
                          {it.title}
                        </p>
                        <p className="mt-1 text-[12px] text-white/75 leading-relaxed line-clamp-2 max-w-md">
                          {it.caption}
                        </p>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-neutral-dark/60 backdrop-blur border border-white/10 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                          {it.category}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 rounded-[28px] bg-neutral-light border border-neutral-dark/5">
              <p className="font-display text-2xl font-semibold text-neutral-dark mb-2">No photographs match your filters.</p>
              <p className="text-sm text-neutral-mid">
                Try another category or clear the search bar.
              </p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightbox != null && openIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-neutral-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              className="absolute top-5 right-5 md:top-7 md:right-7 w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[88vh] rounded-[28px] overflow-hidden bg-neutral-dark border border-white/10 flex flex-col md:flex-row md:items-stretch"
            >
              <div className="md:w-[62%] bg-neutral-cream">
                <img
                  src={filtered[openIndex].image}
                  alt={filtered[openIndex].title}
                  className="w-full h-[50vh] md:h-full max-h-[88vh] object-cover"
                />
              </div>
              <div className="md:w-[38%] p-6 md:p-8 text-white flex flex-col justify-between gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-harvest-gold mb-3">
                    {filtered[openIndex].category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                    {filtered[openIndex].title}
                  </h3>
                  <p className="mt-4 text-sm md:text-[15px] text-white/70 leading-[1.85]">
                    {filtered[openIndex].caption}
                  </p>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {openIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

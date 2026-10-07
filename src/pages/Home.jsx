import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Candy,
  Droplet,
  Wind,
  Layers,
  Flame,
  Recycle
} from "lucide-react";
import SEO from "../components/SEO";
import ByProductCard from "../components/ByProductCard";
import CircularEconomyDiagram from "../components/CircularEconomyDiagram";
import { mainProduct, byProducts } from "../data/products";

const heroSlides = ["/home1.png", "/home2.png", "/home3.png"];
const heroImage = heroSlides[0];

const productQuicklinks = [
  { key: "sugar", name: "Refined Sugar", Icon: Candy, tone: "text-harvest-gold-dark bg-harvest-gold/10", image: mainProduct.image },
  { key: "molasses", name: "Molasses", Icon: Droplet, tone: "text-earth-brown-dark bg-earth-brown/10", image: byProducts[0].image },
  { key: "bagasse", name: "Bagasse", Icon: Wind, tone: "text-neutral-dark bg-neutral-dark/5", image: byProducts[1].image },
  { key: "press-mud", name: "Press Mud", Icon: Layers, tone: "text-earth-brown bg-earth-brown/10", image: byProducts[2].image },
  { key: "ethanol", name: "Ethanol", Icon: Flame, tone: "text-cane-green-dark bg-cane-green/10", image: byProducts[3].image }
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    heroSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <SEO
        title="Rooted in Cooperation, Growing with Innovation"
        description="Farmer-owned cooperative sugar factory producing refined sugar, ethanol and sustainable by-products. Six decades of farmer-first agriculture, modern technology, and a zero-waste circular economy."
        keywords="sanjivani sugar factory maharashtra, cooperative sugar plant, sugarcane ethanol maharashtra, farmer support cooperative"
        image={heroImage}
        path="/"
      />

      <section className="relative min-h-[100vh] md:min-h-[100vh] overflow-hidden">
        {heroSlides.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            aria-hidden
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: i === slideIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ zIndex: i === slideIndex ? 1 : 0 }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}

        {heroSlides.length > 1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === slideIndex
                    ? "w-8 h-2 bg-harvest-gold shadow-[0_0_12px_rgba(198,142,23,0.6)]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <span className="h-px w-7 bg-cane-green-dark/60" />
                About the Cooperative
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-[1.05]">
                Built by farmers. <br />
                <span className="text-harvest-gold">Led by farmers.</span> <br />
                Six decades strong.
              </h2>
              <p className="mt-6 text-[15px] md:text-base text-neutral-dark/75 leading-relaxed">
                Founded in 1960 by Late Hon. Shri. Shankar Rao Genuji Kolhe Saheb, our farmer-owned
                cooperative returns every surplus to the village — irrigation, schools, roads, and
                next-season subsidies. Today, under Shri. Bipindada Kolhe and Shri. Vivek Kolhe,
                we're modernizing the mill with drone spraying and Juice-to-Ethanol expansion.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-dark hover:bg-cane-green-dark text-neutral-light text-sm font-semibold transition-colors"
                >
                  Read Our Full Story
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/about#leadership"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-neutral-dark/80 hover:text-cane-green-dark transition-colors"
                >
                  Meet the Leadership
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="lg:col-span-3 grid grid-cols-5 gap-3 md:gap-4 h-[440px] md:h-[520px]"
            >
              <figure className="col-span-3 row-span-3 rounded-[28px] overflow-hidden relative">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=three%20generations%20of%20indian%20farmer%20family%20standing%20in%20tall%20lush%20sugarcane%20field%20smiling%20warm%20natural%20sunlight%20photojournalism%20editorial%20style%20high%20detail&image_size=portrait_4_3"
                  alt="Farmer family in sugarcane field"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 bg-neutral-dark/70 backdrop-blur text-neutral-light text-[12px] md:text-sm">
                  <span className="font-semibold">Members for life.</span> Three generations —
                  associated since 1978.
                </figcaption>
              </figure>
              <figure className="col-span-2 rounded-[24px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20sugar%20factory%20interior%20stainless%20steel%20vacuum%20pans%20industrial%20machinery%20warm%20lighting%20clean%20and%20hygienic%20professional%20industrial%20photography&image_size=square"
                  alt="Modern sugar factory interior"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figure className="col-span-2 rounded-[24px] overflow-hidden">
                <img
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=senior%20indian%20engineer%20in%20white%20coat%20inspecting%20refined%20sugar%20crystals%20at%20quality%20control%20lab%20factory%20testing%20equipment%20focused%20expression&image_size=square"
                  alt="Quality control lab — refined sugar"
                  className="w-full h-full object-cover"
                />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold mb-4">
                <span className="h-px w-7 bg-harvest-gold/70" />
                Products & By-products
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-tight">
                One cane. <span className="text-cane-green-dark">Five value streams.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
              Premium refined sugar, ethanol, renewable power, and organic manure — every part of
              the stalk is put to work.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-3 mb-14 md:mb-16">
            {productQuicklinks.map((p) => (
              <Link
                key={p.key}
                to="/products"
                className="group rounded-2xl bg-white border border-neutral-dark/6 overflow-hidden hover:border-cane-green/25 hover:shadow-[0_14px_35px_-18px_rgba(46,125,50,0.25)] transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <span className={`absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/85 border border-white/50 ${p.tone}`}>
                    <p.Icon size={15} />
                  </span>
                </div>
                <div className="p-3.5">
                  <p className="text-[13px] md:text-sm font-semibold text-neutral-dark leading-snug group-hover:text-cane-green-dark transition-colors">
                    {p.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {byProducts.map((p, i) => (
              <ByProductCard key={p.name} product={p} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green hover:bg-cane-green hover:text-white text-sm font-semibold text-neutral-dark transition-all"
            >
              Explore Full Product Range
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ backgroundColor: "#F8F7F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-14">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cane-green-dark mb-4">
                <Recycle size={12} />
                Sustainability
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-neutral-dark tracking-tight leading-tight max-w-2xl">
                A zero-waste model that <span className="text-harvest-gold">fuels itself</span>.
              </h2>
            </div>
            <Link
              to="/sustainability"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-dark/10 bg-white hover:border-cane-green-dark hover:bg-cane-green-dark hover:text-white text-sm font-semibold text-neutral-dark transition-all self-start md:self-end"
            >
              Full Sustainability Report
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <CircularEconomyDiagram compact />
        </div>
      </section>
    </>
  );
}

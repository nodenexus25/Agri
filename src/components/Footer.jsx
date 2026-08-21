import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
  Factory,
  Droplet,
  FlaskConical,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube
} from "lucide-react";
import { contactInfo, groupEcosystem } from "../data/siteData";

const footerLinks = [
  {
    heading: "Organization",
    links: [
      { to: "/about", label: "Our Story & Legacy" },
      { to: "/about#leadership", label: "Leadership" },
      { to: "/cane-development", label: "Farmer Support" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/contact", label: "Contact Factory" }
    ]
  },
  {
    heading: "Products",
    links: [
      { to: "/products", label: "Refined Sugar" },
      { to: "/products#by-products", label: "Molasses" },
      { to: "/products#by-products", label: "Bagasse" },
      { to: "/products#by-products", label: "Press Mud" },
      { to: "/products#by-products", label: "Ethanol" }
    ]
  },
  {
    heading: "Brands",
    links: [
      { to: "/amrut-sanjivani", label: "Amrut Sanjivani" },
      { to: "/products#organic-manure", label: "Sanjivani Organic Manure" },
      { to: "/sustainability#circular", label: "Circular Economy" }
    ]
  }
];

export default function Footer() {
  const flowIcons = [Sprout, Factory, Droplet, FlaskConical, Zap];

  return (
    <footer className="relative bg-neutral-dark text-neutral-light overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-cane-green/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-20 w-[420px] h-[420px] rounded-full bg-harvest-gold/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <span className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white ring-1 ring-white/20 shrink-0">
                <img
                  src="/Sanjivani Group 2(1).png"
                  alt="Sanjivani Group"
                  className="w-full h-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold tracking-tight">
                  Sanjivani <span className="text-cane-green-light">Agriculture</span>
                </p>
                <p className="text-[11px] text-white/50 uppercase tracking-[0.14em] -mt-0.5">
                  Subsidiary of Sanjivani Group
                </p>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Sahakar Maharshi Shankar Rao Kolhe Sahakari Sakhar Karkhana Ltd. —
              a 63-year-old farmer-owned cooperative producing refined sugar,
              ethanol, and sustainable by-products. Rooted in cooperation,
              growing with innovation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-1 text-cane-green-light shrink-0" />
                <span className="text-white/70 leading-relaxed">{contactInfo.factory.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-cane-green-light shrink-0" />
                <span className="text-white/70">{contactInfo.factory.phone.join(" · ")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-cane-green-light shrink-0" />
                <span className="text-white/70">{contactInfo.factory.email[0]}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="social"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/75 hover:text-cane-green-light transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {l.label}
                      <ArrowRight
                        size={12}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10">
          <div className="py-10">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-harvest-gold">
                Sanjivani Group Ecosystem
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                {groupEcosystem.title}
              </h3>
              <p className="text-white/65 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                {groupEcosystem.description}
              </p>

              <div className="pt-6">
                <ol className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                  {groupEcosystem.flow.map((step, i) => {
                    const Icon = flowIcons[i] || Leaf;
                    return (
                      <motion.li
                        key={step.step}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cane-green-light">
                            <Icon size={18} />
                          </span>
                          <span className="text-[11px] font-medium text-white/80">
                            {step.label}
                          </span>
                        </div>
                        {i < groupEcosystem.flow.length - 1 && (
                          <ArrowRight size={16} className="text-white/30 -mt-6 hidden sm:block" />
                        )}
                      </motion.li>
                    );
                  })}
                </ol>
              </div>

              <a
                href={groupEcosystem.chemicalDivisionLink}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cane-green hover:bg-cane-green-light text-white text-sm font-medium transition-colors mt-3"
              >
                {groupEcosystem.chemicalDivisionCTA}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Sanjivani Group of Industries — Agriculture Division.
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

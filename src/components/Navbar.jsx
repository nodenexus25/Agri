import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ArrowUpRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/cane-development", label: "Farmer Support" },
  { to: "/products", label: "Products" },
  { to: "/amrut-sanjivani", label: "Amrut Sanjivani" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 md:py-4"
          : "py-5 md:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden ${
            scrolled
              ? "bg-neutral-light/80 border-neutral-dark/10 shadow-[0_8px_32px_rgba(26,26,26,0.08)]"
              : "bg-neutral-light/55 border-white/40"
          } backdrop-blur-xl [backdrop-filter:blur(14px)_saturate(1.4)]`}
        >
          <div className="flex items-center justify-between pl-5 sm:pl-7 pr-3 sm:pr-5 h-14 md:h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cane-green to-cane-green-dark flex items-center justify-center text-white shadow-sm">
                <Leaf size={18} strokeWidth={2.4} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[15px] md:text-base font-semibold text-neutral-dark tracking-tight">
                  Sanjivani <span className="text-cane-green">Agri</span>
                </p>
                <p className="text-[10px] md:text-[11px] text-neutral-mid uppercase tracking-[0.12em] -mt-0.5">
                  Sugar · Cane · Ethanol
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-cane-green-dark"
                        : "text-neutral-dark/75 hover:text-neutral-dark"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="navpill"
                            className="absolute inset-0 rounded-full bg-cane-green/10 border border-cane-green/15"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative">{link.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 ml-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cane-green/8 border border-cane-green/15 text-sm font-semibold text-neutral-dark hover:bg-cane-green hover:text-white transition-all"
              >
                <span className="relative">
                  <span className="absolute inset-0 rounded-full blur-[6px] bg-harvest-gold/30 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">Sanjivani Group</span>
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden ml-2 w-10 h-10 rounded-full flex items-center justify-center text-neutral-dark hover:bg-neutral-dark/5 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="lg:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 pt-1 space-y-1 border-t border-neutral-dark/5">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-cane-green/10 text-cane-green-dark"
                            : "text-neutral-dark/80 hover:bg-neutral-dark/5"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="block w-full text-center px-5 py-3 rounded-2xl bg-neutral-dark text-neutral-light text-sm font-medium"
                    >
                      Contact Farmer Helpdesk
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}

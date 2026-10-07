import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "opacity-100 translate-y-0 py-3 md:py-4 pointer-events-auto"
          : "opacity-0 -translate-y-3 py-5 md:py-7 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-2xl md:rounded-[999px] border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
            scrolled
              ? "bg-neutral-light/82 border-neutral-dark/10 shadow-[0_12px_40px_-12px_rgba(26,26,26,0.18)]"
              : "bg-neutral-light/50 border-white/30"
          } [backdrop-filter:blur(16px)_saturate(1.6)]`}
        >
          <div className="flex items-center justify-between pl-5 sm:pl-7 pr-3 sm:pr-5 h-[72px] md:h-20">
            <Link to="/" className="flex items-center gap-4 group">
              <span className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center overflow-hidden bg-white shadow-sm ring-1 ring-neutral-dark/5 shrink-0">
                <img
                  src="/Sanjivani Group 2(1).png"
                  alt="Sanjivani Group"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-cane-green-dark"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.5c2 1.5.5 5-1.2 7-1 1-2 1.5-3 1.5 1.5 3 1.5 5-4 9"/><path d="M2 21c0-3 1.85-5.36 5.08-5.95C10 14.5 14.5 14 16 12"/></svg>`;
                  }}
                />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[15px] md:text-base font-semibold text-neutral-dark tracking-tight">
                  Sanjivani <span className="text-cane-green">Agriculture</span>
                </p>
                <p className="text-[10px] md:text-[11px] text-neutral-mid uppercase tracking-[0.18em] -mt-0.5">
                  Sanjivani Brand &middot; Since &middot; 1962
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

            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden ml-2 w-10 h-10 rounded-full flex items-center justify-center text-neutral-dark hover:bg-neutral-dark/5 transition-colors ${
                scrolled ? "opacity-100" : "opacity-70"
              }`}
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
                      Contact the Factory
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

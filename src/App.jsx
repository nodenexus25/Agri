import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AmrutSanjivani from "./pages/AmrutSanjivani";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "auto" : "auto" });
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-neutral-light text-neutral-dark antialiased selection:bg-cane-green/25 selection:text-cane-green-dark">
      <ScrollToTop />
      <Navbar />

      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/products"
              element={
                <PageWrapper>
                  <Products />
                </PageWrapper>
              }
            />
            <Route
              path="/amrut-sanjivani"
              element={
                <PageWrapper>
                  <AmrutSanjivani />
                </PageWrapper>
              }
            />
            <Route
              path="/sustainability"
              element={
                <PageWrapper>
                  <Sustainability />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="*"
              element={
                <PageWrapper>
                  <NotFound />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { COR } from "./constants/cores";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EcosistemaSection from "./components/EcosistemaSection";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import BeneficiosSection from "./components/BeneficiosSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: ${COR.fundo};
          color: ${COR.branco};
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        html { scroll-behavior: smooth; }

        a:focus-visible { outline: 2px solid ${COR.verdeClaro}; outline-offset: 2px; }

        .navbar-logo { margin-left: -32px; }
        .footer-logo { margin-left: -32px; }

        @media (max-width: 768px) {
          .navbar-logo { margin-left: 0; }
          .footer-logo { margin-left: 0; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>
        <Navbar scrollY={scrollY} />
        <HeroSection />
        <EcosistemaSection />
        <ComoFuncionaSection />
        <BeneficiosSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

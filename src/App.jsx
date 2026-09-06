import { useState, useEffect } from "react";
import { COR } from "./constants/cores";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MapaBrasil from "./components/MapaBrasil";
import EcosistemaSection from "./components/EcosistemaSection";
import ComoFuncionaSection from "./components/ComoFuncionaSection";
import BeneficiosSection from "./components/BeneficiosSection";
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

        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { overflow-x: hidden; }

        /* Compensa a navbar fixa no scroll por âncora */
        section[id], footer[id] {
          scroll-margin-top: 112px;
        }

        a:focus-visible { outline: 2px solid ${COR.verdeClaro}; outline-offset: 2px; }
        button:focus-visible { outline: 2px solid ${COR.verdeClaro}; outline-offset: 2px; }
        input:focus-visible { outline: 2px solid ${COR.verdeClaro}; outline-offset: 0; }

        /* Scrollbar customizada */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${COR.fundoBorda}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COR.cinza}; }
        * { scrollbar-width: thin; scrollbar-color: ${COR.fundoBorda} transparent; }

        .navbar-logo { margin-left: -32px; }
        .footer-logo { margin-left: -32px; }

        @media (max-width: 1024px) {
          /* Ecossistema — card empilha, imagem proporcional à largura (sem corte) */
          .ecosistema-card {
            flex-direction: column !important;
            margin: 0 24px !important;
            height: auto !important;
          }
          .ecosistema-img {
            flex: none !important;
            height: auto !important;
            aspect-ratio: 4 / 3 !important;
          }
          .ecosistema-content { padding: 32px !important; overflow: visible !important; }
        }

        @media (max-width: 768px) {
          .navbar-logo { margin-left: 0; }
          .footer-logo { margin-left: 0; }

          /* Navbar — esconde links, mantém só logo e botão */
          .nav-links-desktop { display: none !important; }

          /* Navbar mobile */
          .navbar-container { height: 64px !important; }
          .navbar-cta { padding: 8px 16px !important; font-size: 13px !important; }
          .navbar-hamburguer { display: flex !important; }
          .navbar-hamburguer { top: 0; }
          .navbar-drawer { display: flex !important; }
          .navbar-drawer { top: 64px !important; max-height: calc(100vh - 64px) !important; }

          /* Seções — padding lateral reduzido */
          .footer-grid,
          #beneficios,
          #como-funciona { padding-left: 16px !important; padding-right: 16px !important; }

          /* Footer — empilha colunas */
          .footer-grid { grid-template-columns: 1fr 1fr !important; }

          /* Benefícios — 2 colunas em mobile */
          .beneficios-grid { grid-template-columns: 1fr 1fr !important; }

          /* CTA — empilha */
          .cta-inner { flex-direction: column !important; }

          /* Hero — padding lateral adequado */
          .hero-container { padding: 0 20px !important; }

          /* Ecossistema — card empilha */
          .ecosistema-card {
            flex-direction: column !important;
            margin: 0 16px !important;
            height: auto !important;
          }
          .ecosistema-img { height: 240px !important; flex: none !important; }
          .ecosistema-content { padding: 24px !important; overflow: visible !important; }
          /* Sobre nós — empilha em mobile */
          .sobre-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .beneficios-grid { grid-template-columns: 1fr !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            transition-delay: 0 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>
        <Navbar scrollY={scrollY} />
        <HeroSection />
        <MapaBrasil />
        <EcosistemaSection />
        <ComoFuncionaSection />
        <BeneficiosSection />
        <Footer />
      </div>
    </>
  );
}

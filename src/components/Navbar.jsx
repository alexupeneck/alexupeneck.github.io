import { useState } from "react";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";
import ContatoPopup from "./ContatoPopup";

export default function Navbar({ scrollY }) {
  const comFundo = scrollY > 50;
  const [popupAberto, setPopupAberto] = useState(false);

  return (
    <nav
      style={{
        position:     "fixed",
        top:          0,
        left:         0,
        right:        0,
        zIndex:       1000,
        transition:   "background 0.3s, border-bottom 0.3s",
        background:   comFundo ? COR.fundoSecund : "transparent",
        borderBottom: comFundo ? `1px solid ${COR.fundoBorda}` : "none",
      }}
    >
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 40px", width: "100%", boxSizing: "border-box" }}>
        <div className="navbar-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 112 }}>

          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img
              src={`data:image/png;base64,${LOGO_BASE64}`}
              alt="XSafra"
              style={{ height: 96, width: "auto" }}
              className="navbar-logo"
            />
          </a>

          {/* Links de navegação (desktop) */}
          <div style={{ display: "flex", gap: 40, alignItems: "center" }} className="nav-links-desktop">
            {[
              { label: "Soluções",      href: "#solucoes" },
              { label: "Como Funciona", href: "#como-funciona" },
              { label: "Benefícios",    href: "#beneficios" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color:          COR.brancoOp90,
                  textDecoration: "none",
                  fontSize:       17,
                  fontWeight:     500,
                  transition:     "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = COR.verdeClaro)}
                onMouseLeave={(e) => (e.target.style.color = COR.brancoOp90)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botão Contato */}
          <button
            onClick={() => setPopupAberto(true)}
            className="navbar-cta"
            style={{
              background:   COR.verde,
              color:        COR.branco,
              padding:      "13px 28px",
              borderRadius: 8,
              border:       "none",
              fontSize:     16,
              fontWeight:   600,
              cursor:       "pointer",
              transition:   "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = COR.verdeEscuro)}
            onMouseLeave={(e) => (e.target.style.background = COR.verde)}
          >
            Contato
          </button>

          {popupAberto && <ContatoPopup onClose={() => setPopupAberto(false)} />}
        </div>
      </div>
    </nav>
  );
}

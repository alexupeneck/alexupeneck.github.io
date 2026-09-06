import { useState } from "react";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";
import ContatoPopup from "./ContatoPopup";

const MENU_ITENS = [
  { label: "Soluções",      href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios",    href: "#beneficios" },
];

export default function Navbar({ scrollY }) {
  const comFundo = scrollY > 50;
  const [popupAberto, setPopupAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
    document.body.style.overflow = "";
  }
  function abrirMenu() {
    setMenuAberto(true);
    document.body.style.overflow = "hidden";
  }

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
            {MENU_ITENS.map((item) => (
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

          {/* Direita: Contato (desktop) + botão hambúrguer (mobile) */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
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

            <button
              onClick={() => (menuAberto ? fecharMenu() : abrirMenu())}
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              className="navbar-hamburguer"
              style={{
                display:        "none",
                background:     "none",
                border:         "none",
                cursor:         "pointer",
                width:          44,
                height:         44,
                flexDirection:  "column",
                alignItems:     "center",
                justifyContent: "center",
                gap:            6,
                padding:        0,
              }}
            >
              <span style={{ width: 28, height: 2, background: COR.branco, borderRadius: 2, transition: "all 0.3s", transform: menuAberto ? "rotate(45deg) translateY(5.5px)" : "none" }} />
              <span style={{ width: 28, height: 2, background: COR.branco, borderRadius: 2, transition: "all 0.3s", opacity: menuAberto ? 0 : 1 }} />
              <span style={{ width: 28, height: 2, background: COR.branco, borderRadius: 2, transition: "all 0.3s", transform: menuAberto ? "rotate(-45deg) translateY(-5.5px)" : "none" }} />
            </button>
          </div>

          {popupAberto && <ContatoPopup onClose={() => setPopupAberto(false)} />}
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        className="navbar-drawer"
        style={{
          position:   "fixed",
          top:        "112px",
          right:      0,
          bottom:     0,
          left:      0,
          width:      "100%",
          maxHeight: "calc(100vh - 112px)",
          overflowY: "auto",
          background: COR.fundoSecund,
          borderTop:  `1px solid ${COR.fundoBorda}`,
          transform:  menuAberto ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex:     999,
          display:    "none",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 4 }}>
          {MENU_ITENS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={fecharMenu}
              style={{
                color:          COR.brancoOp90,
                textDecoration: "none",
                padding:        "16px 12px",
                fontSize:       18,
                fontWeight:     600,
                borderBottom:   `1px solid ${COR.fundoBorda}`,
                display:        "block",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { fecharMenu(); setPopupAberto(true); }}
            style={{
              background:   COR.verde,
              color:        COR.branco,
              padding:      "16px 12px",
              marginTop:    16,
              borderRadius: 10,
              border:       "none",
              fontSize:     16,
              fontWeight:   700,
              cursor:       "pointer",
              textAlign:    "center",
            }}
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}

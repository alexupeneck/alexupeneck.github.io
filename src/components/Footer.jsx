import { useState } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";
import ContatoPopup from "./ContatoPopup";

export default function Footer() {
  const [contatoAberto, setContatoAberto] = useState(false);
  return (
    <footer style={{ padding: "60px 24px 32px", background: COR.fundoSecund, borderTop: `1px solid ${COR.fundoBorda}` }}>
      {contatoAberto && <ContatoPopup onClose={() => setContatoAberto(false)} />}
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap:                 40,
            marginBottom:        48,
          }}
          className="footer-grid"
        >
          {/* Coluna da marca */}
          <div>
            <img
              src={`data:image/png;base64,${LOGO_BASE64}`}
              alt="XSafra"
              style={{ height: 80, width: "auto", marginBottom: 16, marginLeft: -32 }}
              className="footer-logo"
            />
            <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Ecossistema de soluções agrícolas conectadas para o produtor rural brasileiro.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 style={{ color: COR.branco, fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: "0.04em" }}>
              SOLUÇÕES
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "VigiaSafra",   href: "/vigiasafra",  interno: true },
                { label: "PlanejaSafra", href: "#solucoes",    interno: false },
                { label: "MapeiaSafra",  href: "#solucoes",    interno: false },
                { label: "Vigia@Pecuária", href: "#solucoes",  interno: false },
              ].map((s) => (
                <li key={s.label}>
                  {s.interno
                    ? <Link to={s.href} style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14 }}>{s.label}</Link>
                    : <a href={s.href} style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14 }}>{s.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 style={{ color: COR.branco, fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: "0.04em" }}>
              EMPRESA
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Sobre nós",               href: "/sobre",       interno: true },
                { label: "Política de Privacidade", href: "/privacidade", interno: true },
                { label: "Termos de uso",           href: "/termos",      interno: true },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14 }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 style={{ color: COR.branco, fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: "0.04em" }}>
              CONTATO
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li>
                <button onClick={() => setContatoAberto(true)} style={{ background: "none", border: "none", color: COR.brancoOp60, fontSize: 14, cursor: "pointer", padding: 0, fontFamily: "inherit", textAlign: "left" }}>
                  Formulário
                </button>
              </li>
              <li>
                <a href="mailto:comercial@xsafra.com.br" style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14 }}>
                  comercial@xsafra.com.br
                </a>
              </li>
              <li>
                <a href="https://vigiasafra.com.br" target="_blank" rel="noopener noreferrer" style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14 }}>
                  vigiasafra.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          style={{
            borderTop:      `1px solid ${COR.fundoBorda}`,
            paddingTop:     24,
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            12,
          }}
        >
          <p style={{ color: COR.cinza, fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} XSafra. Todos os direitos reservados.
          </p>
          <p style={{ color: COR.cinza, fontSize: 13, margin: 0 }}>
            XSafra, Ecossistema de Soluções Conectadas.
          </p>
        </div>
      </div>
    </footer>
  );
}

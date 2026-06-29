import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";

const PARAGRAFOS = [
  "A XSafra é um ecossistema de soluções digitais criado para apoiar a gestão da agricultura e da pecuária de forma simples, integrada e eficiente.",
  "Nosso objetivo é aproximar a tecnologia da realidade do campo, oferecendo ferramentas que ajudam produtores, equipes técnicas e gestores a acompanharem suas operações com mais controle, organização e segurança na tomada de decisão.",
  null, // renderizado separadamente
  "Acreditamos que a transformação digital no agronegócio precisa ser prática, acessível e conectada às necessidades de quem vive a rotina da produção. Por isso, nossas soluções são desenvolvidas pensando na usabilidade, na mobilidade e na confiabilidade das informações, inclusive em ambientes onde a operação offline é essencial.",
  "Mais do que oferecer sistemas, a XSafra busca entregar inteligência, controle e eficiência para o agronegócio, contribuindo para uma gestão mais produtiva, sustentável e estratégica.",
];

const SOLUCOES = ["VigiaSafra", "PlanejaSafra", "MapeiaSafra", "Vigia@Pecuária"];

export default function SobreNos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COR.fundo}; color: ${COR.branco}; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
        .sobre-nav-logo { height: 88px; width: auto; margin-left: -32px; }
        .sobre-grid { display: grid; grid-template-columns: 1fr 360px; gap: 64px; align-items: start; }
        .sobre-card-sticky { position: sticky; top: 108px; }
        @media (max-width: 768px) {
          .sobre-nav-logo { height: 72px !important; margin-left: 0 !important; }
          .sobre-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sobre-card-sticky { position: static !important; }
          .sobre-hero { padding: 120px 20px 48px !important; }
          .sobre-content { padding: 0 20px 60px !important; }
          .sobre-nav-inner { padding: 0 20px !important; height: 88px !important; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>

        {/* Navbar */}
        <nav style={{
          position:     "fixed",
          top: 0, left: 0, right: 0,
          zIndex:       1000,
          background:   COR.fundoSecund,
          borderBottom: `1px solid ${COR.fundoBorda}`,
        }}>
          <div className="sobre-nav-inner" style={{ maxWidth: 1600, margin: "0 auto", padding: "0 40px", height: 88, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img
                src={`data:image/png;base64,${LOGO_BASE64}`}
                alt="XSafra"
                className="sobre-nav-logo"
              />
            </Link>
            <Link to="/" style={{
              background:     COR.verde,
              color:          COR.branco,
              padding:        "10px 22px",
              borderRadius:   8,
              textDecoration: "none",
              fontSize:       14,
              fontWeight:     600,
            }}>
              ← Voltar
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="sobre-hero" style={{
          paddingTop:    160,
          paddingBottom: 64,
          paddingLeft:   40,
          paddingRight:  40,
          position:      "relative",
          overflow:      "hidden",
        }}>
          <div aria-hidden="true" style={{
            position:      "absolute",
            top:           "40%",
            left:          "30%",
            transform:     "translate(-50%, -50%)",
            width:         600,
            height:        600,
            borderRadius:  "50%",
            background:    `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
            <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 16, letterSpacing: "0.1em", marginBottom: 16 }}>
              SOBRE NÓS
            </div>
            <h1 style={{
              fontSize:   "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color:      COR.branco,
              margin:     0,
              fontFamily: "'Inter', sans-serif",
              maxWidth:   700,
            }}>
              Tecnologia para transformar<br />
              <span style={{ color: COR.verdeClaro }}>dados do campo em decisões</span>
            </h1>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="sobre-content" style={{ padding: "0 40px 100px" }}>
          <div style={{ maxWidth: 1600, margin: "0 auto" }}>
            <div className="sobre-grid">

              {/* Texto */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {PARAGRAFOS.map((p, i) => {
                  if (p === null) {
                    // Terceiro parágrafo — com nomes destacados
                    return (
                      <p key={i} style={{ color: COR.brancoOp60, fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                        Por meio de soluções como{" "}
                        <span style={{ color: COR.verdeClaro, fontWeight: 700 }}>VigiaSafra</span>,{" "}
                        <span style={{ color: COR.verdeClaro, fontWeight: 700 }}>PlanejaSafra</span>,{" "}
                        <span style={{ color: COR.verdeClaro, fontWeight: 700 }}>MapeiaSafra</span> e{" "}
                        <span style={{ color: COR.verdeClaro, fontWeight: 700 }}>Vigia@Pecuária</span>,{" "}
                        reunimos recursos para monitoramento climático, gestão de operações agrícolas,
                        planejamento de insumos, mapeamento de áreas, controle pecuário, rastreabilidade,
                        relatórios e acompanhamento das atividades diárias no campo.
                      </p>
                    );
                  }
                  return (
                    <p key={i} style={{
                      color:      i === 0 ? COR.brancoOp90 : COR.brancoOp60,
                      fontSize:   i === 0 ? 18 : 16,
                      lineHeight: 1.85,
                      margin:     0,
                      fontWeight: i === 0 ? 500 : 400,
                    }}>
                      {p}
                    </p>
                  );
                })}

                {/* Assinatura */}
                <blockquote style={{
                  color:       COR.verdeClaro,
                  fontSize:    17,
                  fontWeight:  700,
                  fontStyle:   "italic",
                  margin:      "8px 0 0",
                  paddingLeft: 20,
                  borderLeft:  `3px solid ${COR.verdeClaro}`,
                  lineHeight:  1.6,
                }}>
                  XSafra — tecnologia para transformar dados do campo em decisões inteligentes.
                </blockquote>
              </div>

              {/* Card lateral */}
              <div className="sobre-card-sticky">
                <div style={{
                  background:   COR.fundoCard,
                  border:       `1px solid ${COR.fundoBorda}`,
                  borderRadius: 20,
                  padding:      36,
                }}>
                  <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", marginBottom: 20 }}>
                    NOSSO ECOSSISTEMA
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {SOLUCOES.map((s) => (
                      <div key={s} style={{
                        display:      "flex",
                        alignItems:   "center",
                        gap:          12,
                        padding:      "12px 16px",
                        background:   COR.fundoBorda,
                        borderRadius: 10,
                      }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: COR.verdeClaro, flexShrink: 0 }} />
                        <span style={{ color: COR.branco, fontSize: 14, fontWeight: 600 }}>{s}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${COR.fundoBorda}` }}>
                    <p style={{ color: COR.brancoOp60, fontSize: 13, lineHeight: 1.6, margin: "0 0 14px" }}>
                      Quer saber mais sobre nossas soluções?
                    </p>
                    <a href="mailto:comercial@xsafra.com.br" style={{
                      display:        "block",
                      textAlign:      "center",
                      background:     COR.verde,
                      color:          COR.branco,
                      padding:        "12px 20px",
                      borderRadius:   8,
                      textDecoration: "none",
                      fontSize:       14,
                      fontWeight:     700,
                    }}>
                      comercial@xsafra.com.br
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}

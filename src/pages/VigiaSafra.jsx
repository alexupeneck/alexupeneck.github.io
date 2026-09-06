import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";
import imgPc from "../assets/vigiasafra_monitor_pc.png";
import imgPc01 from "../assets/vigiasafra_monitor_pc_01.png.png";
import imgMoto from "../assets/vigiasafra_moto_lavoura.png";
import ContatoPopup from "../components/ContatoPopup";
import Footer from "../components/Footer";

const WHATSAPP_NUM = "5500000000000";

const FEATURES = [
  { icone: "🌤", titulo: "Monitoramento Climático", desc: "Alertas de pulverização, janelas de colheita e risco de doenças com base em dados meteorológicos por talhão." },
  { icone: "🚜", titulo: "Gerenciamento de Operações", desc: "Controle completo das atividades agrícolas, desde o plantio até a colheita, com histórico por talhão." },
  { icone: "📋", titulo: "Ordens de Serviço", desc: "Abertura, acompanhamento e encerramento de ordens de serviço diretamente no campo ou no escritório." },
  { icone: "🌱", titulo: "Plantio / Aplicação / Colheita", desc: "Registros detalhados de cada etapa produtiva com integração aos dados climáticos e de insumos." },
  { icone: "📊", titulo: "Estimativas de Produção", desc: "Projeções baseadas em dados históricos e condições atuais para apoiar decisões comerciais e logísticas." },
  { icone: "📱", titulo: "Monitoramento Fitossanitário Offline", desc: "Aplicativo mobile que funciona sem internet para monitoramento de pragas, doenças e plantas daninhas." },
  { icone: "📄", titulo: "Relatórios Agrícolas", desc: "Geração de relatórios técnicos completos por talhão, safra ou período para análise e compartilhamento." },
  { icone: "🌧", titulo: "Pluviômetros Offline", desc: "Coleta e gestão de dados climáticos com suporte a pluviômetros físicos integrados ao sistema." },
  { icone: "📍", titulo: "Caderno de Campo", desc: "Anotações georreferenciadas diretamente no mapa para registrar observações e ocorrências no campo." },
  { icone: "🤖", titulo: "Inteligência Artificial: VigiaMind", desc: "Esqueça a análise manual de dezenas de variáveis. O VigiaMind cruza os dados do seu mapa KML importado, o histórico do talhão e o clima em tempo real para entregar recomendações mastigadas." },
];

const GALERIA = [imgPc, imgPc01, imgMoto];

export default function VigiaSafraPage() {
  const [imgAtiva, setImgAtiva] = useState(0);
  const [popupAberto, setPopupAberto] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const t = setInterval(() => setImgAtiva(p => (p + 1) % GALERIA.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COR.fundo}; color: ${COR.branco}; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        html { scroll-behavior: smooth; }
        .vs-logo { height: 88px; width: auto; margin-left: -32px; }
        .vs-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; padding: 160px 40px 80px; max-width: 1600px; margin: 0 auto; }
        .vs-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .vs-feature-full { grid-column: 1 / -1; }
        @media (max-width: 1024px) {
          .vs-features { grid-template-columns: repeat(2, 1fr) !important; }
          .vs-feature-full {
            grid-column: auto !important;
            display: block !important;
          }
          .vs-feature-full > div:first-child {
            width: auto !important;
            height: auto !important;
            border-radius: 0 !important;
            background: transparent !important;
            border: none !important;
            font-size: 32px !important;
            margin-bottom: 14px !important;
          }
          .vs-feature-full h3 { font-size: 16px !important; margin-bottom: 10px !important; }
          .vs-feature-full p { font-size: 14px !important; }
        }
        @media (max-width: 768px) {
          .vs-logo { height: 72px !important; margin-left: 0 !important; }
          .vs-nav-inner { padding: 0 20px !important; height: 88px !important; }
          .vs-hero { grid-template-columns: 1fr !important; padding: 120px 20px 60px !important; gap: 40px !important; }
          .vs-features { grid-template-columns: 1fr !important; }
          .vs-section { padding: 60px 20px !important; }
          .vs-cta-inner { flex-direction: column !important; text-align: center !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh", overflowX: "hidden" }}>

        {/* Navbar */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: COR.fundoSecund, borderBottom: `1px solid ${COR.fundoBorda}` }}>
          <div className="vs-nav-inner" style={{ maxWidth: 1600, margin: "0 auto", padding: "0 40px", height: 108, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={`data:image/png;base64,${LOGO_BASE64}`} alt="XSafra" className="vs-logo" />
            </Link>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Link to="/" style={{ color: COR.brancoOp60, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>← Voltar</Link>
              <button
                onClick={() => setPopupAberto(true)}
                style={{ background: COR.verde, color: COR.branco, padding: "10px 22px", borderRadius: 8, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
              >
                Contato
              </button>
            </div>
          </div>
        </nav>

        {popupAberto && (
          <ContatoPopup
            onClose={() => setPopupAberto(false)}
            mensagemWa="Olá, gostaria de agendar uma demonstração do VigiaSafra!"
          />
        )}

        {/* Hero */}
        <div className="vs-hero">
          {/* Texto */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${COR.verde}18`, border: `1px solid ${COR.verde}44`, borderRadius: 20, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COR.verde, display: "inline-block" }} />
              <span style={{ color: COR.verde, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>MONITORAMENTO CLIMÁTICO</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, color: COR.branco, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
              Gestão completa<br />
              <span style={{ color: COR.verdeClaro }}>da sua lavoura</span><br />
              na palma da mão.
            </h1>
            <p style={{ color: COR.brancoOp60, fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
              Alertas operacionais de pulverização, colheita e plantio com base em dados climáticos por talhão. Saiba exatamente o que fazer no campo nos próximos 7 dias.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => setPopupAberto(true)}
                style={{ background: COR.verde, color: COR.branco, padding: "14px 32px", borderRadius: 8, border: "none", fontSize: 16, fontWeight: 700, cursor: "pointer" }}
              >
                Solicitar demonstração →
              </button>
            </div>
          </div>

          {/* Galeria */}
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "16/10" }}>
            {GALERIA.map((img, i) => (
              <img key={i} src={img} alt={`VigiaSafra ${i + 1}`} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", opacity: i === imgAtiva ? 1 : 0, transition: "opacity 0.8s ease",
              }} />
            ))}
            {/* Indicadores */}
            <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
              {GALERIA.map((_, i) => (
                <button key={i} onClick={() => setImgAtiva(i)} aria-label={`Mostrar imagem ${i + 1} de ${GALERIA.length}`} style={{
                  width: i === imgAtiva ? 20 : 6, height: 6, borderRadius: 3,
                  border: "none", background: i === imgAtiva ? COR.verdeClaro : COR.brancoOp20,
                  cursor: "pointer", padding: 0, transition: "all 0.3s",
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="vs-section" style={{ padding: "80px 40px", background: COR.fundoSecund, borderTop: `1px solid ${COR.fundoBorda}`, borderBottom: `1px solid ${COR.fundoBorda}` }}>
          <div style={{ maxWidth: 1600, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 16, letterSpacing: "0.08em", marginBottom: 12 }}>FUNCIONALIDADES</div>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: COR.branco, fontFamily: "'Inter', sans-serif" }}>
                Tudo que você precisa para gerir sua operação
              </h2>
            </div>
            <div className="vs-features">
              {FEATURES.map((f, i) => {
                const ultimo = i === FEATURES.length - 1;
                return (
                  <div
                    key={f.titulo}
                    className={ultimo ? "vs-feature-full" : undefined}
                    style={{
                      background:   COR.fundoCard,
                      border:       `1px solid ${COR.fundoBorda}`,
                      borderRadius: 14,
                      padding:      28,
                      display:      ultimo ? "flex" : "block",
                      gap:          ultimo ? 28 : 0,
                      alignItems:   ultimo ? "flex-start" : undefined,
                    }}
                  >
                    {ultimo ? (
                      <>
                        <div
                          style={{
                            width:          64,
                            height:         64,
                            borderRadius:    16,
                            display:        "flex",
                            alignItems:     "center",
                            justifyContent: "center",
                            fontSize:       32,
                            background:     `${COR.verde}22`,
                            border:         `1px solid ${COR.verde}55`,
                            flexShrink:     0,
                          }}
                        >
                          {f.icone}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 style={{ fontSize: 20, fontWeight: 700, color: COR.branco, marginBottom: 10 }}>{f.titulo}</h3>
                          <p style={{ color: COR.brancoOp60, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 900 }}>{f.desc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icone}</div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: COR.branco, marginBottom: 10 }}>{f.titulo}</h3>
                        <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

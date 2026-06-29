import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";
import imgPc from "../assets/vigiasafra_monitor_pc.png";
import imgPc01 from "../assets/vigiasafra_monitor_pc_01.png.png";
import imgMoto from "../assets/vigiasafra_moto_lavoura.png";
import ContatoPopup from "../components/ContatoPopup";

const WHATSAPP_NUM = "5500000000000";
const WA_DEMO = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Olá, gostaria de agendar uma demonstração do VigiaSafra!")}`;

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
        @media (max-width: 1024px) {
          .vs-features { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .vs-logo { height: 72px !important; margin-left: 0 !important; }
          .vs-nav-inner { padding: 0 20px !important; height: 88px !important; }
          .vs-hero { grid-template-columns: 1fr !important; padding: 120px 20px 60px !important; gap: 40px !important; }
          .vs-features { grid-template-columns: 1fr !important; }
          .vs-section { padding: 60px 20px !important; }
          .vs-cta-inner { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>

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

            {popupAberto && <ContatoPopup onClose={() => setPopupAberto(false)} />}
          </div>
        </nav>

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
              <a href="https://app.vigiasafra.com.br/cadastro" target="_blank" rel="noopener noreferrer"
                style={{ background: COR.verde, color: COR.branco, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700 }}>
                Criar conta grátis
              </a>
              <a href={WA_DEMO} target="_blank" rel="noopener noreferrer"
                style={{ background: "transparent", color: COR.branco, padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 600, border: `1.5px solid ${COR.brancoOp20}` }}>
                Solicitar demonstração →
              </a>
            </div>
            {/* Selos */}
            <div style={{ display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
              {["15 dias grátis", "Sem cartão de crédito", "Suporte incluso"].map(s => (
                <span key={s} style={{ color: COR.brancoOp60, fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: COR.verde, fontWeight: 700 }}>✓</span> {s}
                </span>
              ))}
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
                <button key={i} onClick={() => setImgAtiva(i)} style={{
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
              {FEATURES.map((f) => (
                <div key={f.titulo} style={{ background: COR.fundoCard, border: `1px solid ${COR.fundoBorda}`, borderRadius: 14, padding: 28 }}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icone}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: COR.branco, marginBottom: 10 }}>{f.titulo}</h3>
                  <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="vs-section" style={{ padding: "80px 40px", borderTop: `3px solid ${COR.verdeClaro}`, position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div className="vs-cta-inner" style={{ maxWidth: 1600, margin: "0 auto", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: COR.branco, marginBottom: 16, fontFamily: "'Inter', sans-serif" }}>
                Pronto para começar?
              </h2>
              <p style={{ color: COR.brancoOp60, fontSize: 17, lineHeight: 1.7, maxWidth: 500 }}>
                15 dias grátis, sem cartão de crédito. Nossa equipe está pronta para configurar tudo com você.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <a href="https://app.vigiasafra.com.br/cadastro" target="_blank" rel="noopener noreferrer"
                style={{ background: COR.verdeClaro, color: COR.fundo, padding: "16px 40px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 800, whiteSpace: "nowrap" }}>
                Criar conta grátis →
              </a>
              <a href="https://vigiasafra.com.br" target="_blank" rel="noopener noreferrer"
                style={{ color: COR.brancoOp60, fontSize: 13, textDecoration: "none", textAlign: "center" }}>
                vigiasafra.com.br
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

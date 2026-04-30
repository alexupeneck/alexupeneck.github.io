import { COR } from "../constants/cores";
import heroBg from "../assets/Design sem nome.mp4";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "flex-start",
        justifyContent: "center",
        textAlign:      "left",
        padding:        "120px 0 80px",
        position:       "relative",
        overflow:       "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position:   "absolute",
          inset:      0,
          width:      "100%",
          height:     "100%",
          objectFit:  "cover",
          opacity:    0.15,
          pointerEvents: "none",
        }}
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      {/* Brilho verde ao centro */}
      <div
        aria-hidden="true"
        style={{
          position:     "absolute",
          top:          "30%",
          left:         "50%",
          transform:    "translate(-50%, -50%)",
          width:        700,
          height:       700,
          borderRadius: "50%",
          background:   `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Conteúdo */}
      <div style={{ position: "relative", maxWidth: 1600, width: "100%", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" }} className="hero-container">
        {/* Pílula + título + subtítulo — limitados em largura para legibilidade */}
        <div style={{ maxWidth: 820 }}>
        <div
          style={{
            display:      "inline-flex",
            alignItems:   "center",
            gap:          8,
            background:   COR.verdeClaroOp10,
            border:       `1px solid ${COR.verdeClaroOp20}`,
            borderRadius: 20,
            padding:      "6px 16px",
            marginBottom: 28,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COR.verdeClaro, display: "inline-block" }} />
          <span style={{ color: COR.verdeClaro, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>
            ECOSSISTEMA DE SOLUÇÕES CONECTADAS
          </span>
        </div>

        {/* Título principal */}
        <h1
          style={{
            fontSize:     "clamp(40px, 6vw, 72px)",
            fontWeight:   800,
            lineHeight:   1.1,
            color:        COR.branco,
            marginBottom: 24,
            fontFamily:   "'Inter', sans-serif",
          }}
        >
          Soluções conectadas<br />
          <span style={{ color: COR.verdeClaro }}>para a sua safra</span>
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize:     "clamp(16px, 2.5vw, 20px)",
            color:        COR.brancoOp60,
            lineHeight:   1.7,
            marginBottom: 48,
            maxWidth:     600,
            margin:       "0 0 48px",
          }}
        >
          XSafra reúne ferramentas de monitoramento climático, gestão de talhões e
          inteligência de mercado em um único ecossistema integrado para o produtor moderno.
        </p>

        {/* Slogan */}
        <p
          style={{
            fontSize:     13,
            color:        COR.cinza,
            letterSpacing: "0.12em",
            fontWeight:   600,
            marginBottom: 40,
          }}
        >
          XSafra, Ecossistema de Soluções Conectadas.
        </p>

        {/* Botões CTA */}
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "flex-start", flexWrap: "wrap" }}>
          <a
            href="#solucoes"
            style={{
              background:     COR.verde,
              color:          COR.branco,
              padding:        "14px 32px",
              borderRadius:   8,
              textDecoration: "none",
              fontSize:       16,
              fontWeight:     700,
              transition:     "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { e.target.style.background = COR.verdeEscuro; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.background = COR.verde; e.target.style.transform = "translateY(0)"; }}
          >
            Explorar soluções
          </a>
          <a
            href="mailto:comercial@xsafra.com.br"
            style={{
              background:     "transparent",
              color:          COR.branco,
              padding:        "14px 32px",
              borderRadius:   8,
              textDecoration: "none",
              fontSize:       16,
              fontWeight:     600,
              border:         `1.5px solid ${COR.brancoOp20}`,
              transition:     "border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = COR.branco; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = COR.brancoOp20; e.target.style.transform = "translateY(0)"; }}
          >
            Falar com especialista
          </a>
        </div>

        {/* Métricas rápidas */}
        <div
          style={{
            display:        "flex",
            gap:            40,
            justifyContent: "flex-start",
            marginTop:      64,
            flexWrap:       "wrap",
          }}
        >
          {[
            { valor: "10k+", label: "Hectares monitorados" },
            { valor: "4",    label: "Soluções integradas" },
            { valor: "24/7", label: "Monitoramento contínuo" },
          ].map((m) => (
            <div key={m.label} style={{ textAlign: "left" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: COR.verdeClaro, fontFamily: "'Inter', sans-serif" }}>{m.valor}</div>
              <div style={{ fontSize: 13, color: COR.cinza, marginTop: 4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

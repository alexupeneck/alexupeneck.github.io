import { COR } from "../constants/cores";

export default function CTASection() {
  return (
    <section
      id="contato"
      style={{
        padding:    "120px 40px",
        position:   "relative",
        overflow:   "hidden",
        borderTop:  `3px solid ${COR.verdeClaro}`,
      }}
    >
      {/* Glow radial verde centralizado */}
      <div
        aria-hidden="true"
        style={{
          position:     "absolute",
          top:          "50%",
          left:         "50%",
          transform:    "translate(-50%, -50%)",
          width:        900,
          height:       600,
          borderRadius: "50%",
          background:   `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          position:       "relative",
          maxWidth:       1600,
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            64,
          flexWrap:       "wrap",
        }}
        className="cta-inner"
      >
        {/* Texto */}
        <div style={{ flex: "1 1 400px" }}>
          <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", marginBottom: 16 }}>
            COMECE AGORA
          </div>
          <h2
            style={{
              fontSize:     "clamp(32px, 4vw, 56px)",
              fontWeight:   800,
              color:        COR.branco,
              lineHeight:   1.1,
              margin:       "0 0 20px",
              fontFamily:   "'Inter', sans-serif",
            }}
          >
            Pronto para transformar<br />
            <span style={{ color: COR.verdeClaro }}>sua operação?</span>
          </h2>
          <p style={{ color: COR.brancoOp60, fontSize: 18, lineHeight: 1.7, maxWidth: 480 }}>
            Comece com o VigiaSafra hoje mesmo — 15 dias grátis, sem cartão de crédito. Nossa equipe está pronta para configurar tudo com você.
          </p>
        </div>

        {/* Ações */}
        <div style={{ flex: "0 1 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://app.vigiasafra.com.br/cadastro"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background:     COR.verdeClaro,
                color:          COR.fundo,
                padding:        "16px 36px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       16,
                fontWeight:     700,
                transition:     "opacity 0.2s, transform 0.15s",
                whiteSpace:     "nowrap",
              }}
              onMouseEnter={(e) => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
            >
              Criar conta grátis
            </a>
            <a
              href="mailto:comercial@xsafra.com.br"
              style={{
                background:     "transparent",
                color:          COR.branco,
                padding:        "16px 36px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       16,
                fontWeight:     600,
                border:         `1.5px solid ${COR.brancoOp20}`,
                transition:     "border-color 0.2s, transform 0.15s",
                whiteSpace:     "nowrap",
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = COR.branco; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = COR.brancoOp20; e.target.style.transform = "translateY(0)"; }}
            >
              comercial@xsafra.com.br
            </a>
          </div>

          {/* Selos */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["15 dias grátis", "Sem cartão de crédito", "Suporte incluso"].map((selo) => (
              <div key={selo} style={{ display: "flex", alignItems: "center", gap: 6, color: COR.brancoOp60, fontSize: 13 }}>
                <span style={{ color: COR.verdeClaro, fontWeight: 700 }}>✓</span> {selo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { COR } from "../constants/cores";

export default function CTASection() {
  return (
    <section
      id="contato"
      style={{
        padding:    "80px 24px",
        background: COR.fundoSecund,
        borderTop:  `1px solid ${COR.fundoBorda}`,
      }}
    >
      <div
        style={{
          maxWidth:     800,
          margin:       "0 auto",
          textAlign:    "center",
          background:   COR.fundoCard,
          border:       `1px solid ${COR.fundoBorda}`,
          borderRadius: 20,
          padding:      "60px 40px",
          position:     "relative",
          overflow:     "hidden",
        }}
      >
        {/* Brilho decorativo */}
        <div
          aria-hidden="true"
          style={{
            position:     "absolute",
            top:          -80,
            left:         "50%",
            transform:    "translateX(-50%)",
            width:        400,
            height:       400,
            borderRadius: "50%",
            background:   `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontSize:   "clamp(24px, 4vw, 40px)",
              fontWeight: 800,
              color:      COR.branco,
              margin:     "0 0 16px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Pronto para transformar sua operação?
          </h2>
          <p style={{ color: COR.brancoOp60, fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            Comece com o VigiaSafra hoje mesmo — 15 dias grátis, sem cartão de crédito. Nossa equipe está pronta para ajudar você a configurar tudo.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://app.vigiasafra.com.br/cadastro"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background:     COR.verde,
                color:          COR.branco,
                padding:        "14px 32px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       15,
                fontWeight:     700,
              }}
            >
              Criar conta grátis
            </a>
            <a
              href="mailto:comercial@xsafra.com.br"
              style={{
                background:     "transparent",
                color:          COR.branco,
                padding:        "14px 32px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       15,
                fontWeight:     600,
                border:         `1.5px solid ${COR.brancoOp20}`,
              }}
            >
              comercial@xsafra.com.br
            </a>
          </div>

          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
            {["15 dias grátis", "Sem cartão de crédito", "Suporte incluso"].map((selo) => (
              <div key={selo} style={{ display: "flex", alignItems: "center", gap: 6, color: COR.cinza, fontSize: 13 }}>
                <span style={{ color: COR.verde }}>✓</span> {selo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

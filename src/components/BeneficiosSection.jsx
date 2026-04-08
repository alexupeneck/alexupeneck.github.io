import { COR } from "../constants/cores";
import { BENEFICIOS } from "../constants/dados";

export default function BeneficiosSection() {
  return (
    <section id="beneficios" style={{ padding: "100px 24px", background: COR.fundoSecund }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 80, alignItems: "center", flexWrap: "wrap" }}>
          {/* Coluna de texto */}
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ color: COR.verdeClaro, fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", marginBottom: 12 }}>
              BENEFÍCIOS
            </div>
            <h2
              style={{
                fontSize:   "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color:      COR.branco,
                margin:     "0 0 20px",
                lineHeight: 1.2,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Por que escolher o ecossistema XSafra?
            </h2>
            <p style={{ color: COR.brancoOp60, fontSize: 16, lineHeight: 1.7, margin: "0 0 32px" }}>
              Cada ferramenta foi desenvolvida com base nas reais necessidades de produtores e agrônomos brasileiros. Juntas, elas formam a plataforma mais completa para gestão agrícola inteligente.
            </p>
            <a
              href="mailto:comercial@xsafra.com.br"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                background:     COR.verde,
                color:          COR.branco,
                padding:        "12px 24px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       15,
                fontWeight:     600,
              }}
            >
              Fale com um especialista →
            </a>
          </div>

          {/* Grade de benefícios */}
          <div
            style={{
              flex:                "2 1 400px",
              display:             "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap:                 16,
            }}
            className="beneficios-grid"
          >
            {BENEFICIOS.map((b) => (
              <div
                key={b.titulo}
                style={{
                  background:   COR.fundoCard,
                  border:       `1px solid ${COR.fundoBorda}`,
                  borderRadius: 12,
                  padding:      24,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icone}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: COR.branco, margin: "0 0 8px" }}>
                  {b.titulo}
                </h3>
                <p style={{ color: COR.brancoOp60, fontSize: 13, lineHeight: 1.65, margin: 0 }}>
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

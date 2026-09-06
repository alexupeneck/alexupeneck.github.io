import { COR } from "../constants/cores";
import { BENEFICIOS } from "../constants/dados";

export default function BeneficiosSection() {
  return (
    <section id="beneficios" style={{ padding: "100px 24px", background: COR.fundo }}>
      <style>{`
        .beneficio-card {
          position: relative;
          background: ${COR.fundoCard};
          border: 1px solid ${COR.fundoBorda};
          border-radius: 12px;
          padding: 24px;
          transition: transform 0.2s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .beneficio-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 3px;
          border-radius: 0 0 3px 3px;
          background: var(--bencor);
          opacity: 0.9;
        }
        .beneficio-card:hover {
          transform: translateY(-4px);
          border-color: var(--bencor);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
        }
      `}</style>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 80, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Coluna de texto */}
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", marginBottom: 12 }}>
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
                className="beneficio-card"
                style={{ "--bencor": b.cor }}
              >
                <div
                  style={{
                    width:          52,
                    height:         52,
                    borderRadius:   14,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    fontSize:       24,
                    background:     `${b.cor}1f`,
                    border:         `1px solid ${b.cor}44`,
                    marginBottom:   16,
                  }}
                >
                  {b.icone}
                </div>
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

import { COR } from "../constants/cores";
import { ESTADOS_BR } from "../constants/estados";

const ATIVOS = ["BRRO", "BRMT", "BRBA"];

export default function MapaBrasil() {
  return (
    <section
      id="presenca"
      style={{
        background: COR.fundoSecund,
        padding: "96px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: 56,
          alignItems: "center",
          boxSizing: "border-box",
        }}
        className="mapa-grid"
      >
        {/* Mapa */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            viewBox="0 0 1000 912"
            role="img"
            aria-label="Mapa do Brasil destacando os estados de Rondônia, Mato Grosso e Bahia"
            style={{ width: "100%", maxWidth: 520, height: "auto" }}
          >
            <style>{`
              @keyframes mapa-acender {
                0%, 100% { opacity: 1; fill: ${COR.verdeClaro}; }
                50% { opacity: 0.55; fill: ${COR.verde}; }
              }
              @keyframes mapa-brilho {
                0%, 100% { opacity: 0.18; }
                50% { opacity: 0.55; }
              }
              .estado-base {
                fill: ${COR.fundoCard};
                stroke: ${COR.fundoBorda};
                stroke-width: 1;
              }
              .estado-ativo {
                fill: ${COR.verde};
                stroke: ${COR.verdeClaro};
                stroke-width: 1.2;
                animation: mapa-acender 2.4s ease-in-out infinite;
              }
              .estado-ativo-brilho {
                fill: none;
                stroke: ${COR.verdeClaro};
                stroke-width: 6;
                stroke-linejoin: round;
                animation: mapa-brilho 2.4s ease-in-out infinite;
              }
              .mapa-rotulo {
                font-family: 'Inter', sans-serif;
                font-size: 22px;
                font-weight: 800;
                fill: ${COR.branco};
                text-anchor: middle;
              }
            `}</style>

            {/* Estados de fundo */}
            {Object.keys(ESTADOS_BR)
              .filter((code) => !ATIVOS.includes(code))
              .map((code) => (
                <path
                  key={code}
                  className="estado-base"
                  d={ESTADOS_BR[code].d}
                />
              ))}

            {/* Estados ativos com brilho pulsante */}
            {ATIVOS.map((code) => (
              <path
                key={`brilho-${code}`}
                className="estado-ativo-brilho"
                d={ESTADOS_BR[code].d}
              />
            ))}
            {ATIVOS.map((code) => (
              <path
                key={code}
                className="estado-ativo"
                d={ESTADOS_BR[code].d}
              />
            ))}

            {/* Rótulos dos estados ativos */}
            <text x="258" y="363" className="mapa-rotulo">RO</text>
            <text x="419" y="423" className="mapa-rotulo">MT</text>
            <text x="696" y="402" className="mapa-rotulo">BA</text>
          </svg>
        </div>

        {/* Texto */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COR.verdeClaroOp10,
              border: `1px solid ${COR.verdeClaroOp20}`,
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: COR.verdeClaro, display: "inline-block" }} />
            <span style={{ color: COR.verdeClaro, fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>
              ONDE ESTAMOS
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: COR.branco,
              marginBottom: 20,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Presentes onde o agro{" "}
            <span style={{ color: COR.verdeClaro }}>acontece</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: COR.brancoOp60,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 560,
            }}
          >
            A XSafra atende produtores nos estados de{" "}
            <strong style={{ color: COR.verdeClaro }}>Rondônia</strong>,{" "}
            <strong style={{ color: COR.verdeClaro }}>Mato Grosso</strong> e{" "}
            <strong style={{ color: COR.verdeClaro }}>Bahia</strong>, levando
            monitoramento climático, gestão de talhões e inteligência de mercado
            diretamente para o campo.
          </p>

          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 8 }}>
            {[
              { sigla: "RO", nome: "Rondônia" },
              { sigla: "MT", nome: "Mato Grosso" },
              { sigla: "BA", nome: "Bahia" },
            ].map((s) => (
              <div key={s.sigla} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: COR.verdeClaroOp10,
                    border: `1px solid ${COR.verdeClaroOp20}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: COR.verdeClaro,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s.sigla}
                </span>
                <span style={{ fontSize: 14, color: COR.brancoOp90, fontWeight: 600 }}>
                  {s.nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #presenca { padding: 64px 16px !important; }
          .mapa-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

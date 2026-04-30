import { COR } from "../constants/cores";
import { PASSOS } from "../constants/dados";
import graficoBg from "../assets/Grafico.mp4";

export default function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      style={{
        padding:     "100px 24px",
        borderTop:   `1px solid ${COR.fundoBorda}`,
        borderBottom: `1px solid ${COR.fundoBorda}`,
        position:    "relative",
        overflow:    "hidden",
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
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          objectFit:     "cover",
          opacity:       0.07,
          pointerEvents: "none",
        }}
      >
        <source src={graficoBg} type="video/mp4" />
      </video>
      <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", marginBottom: 12 }}>
            COMO FUNCIONA
          </div>
          <h2
            style={{
              fontSize:   "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color:      COR.branco,
              margin:     "0 0 16px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Da configuração ao resultado em dias
          </h2>
          <p style={{ color: COR.brancoOp60, fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            O ecossistema XSafra foi pensado para ser simples de adotar e poderoso em resultado.
          </p>
        </div>

        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap:                 32,
          }}
        >
          {PASSOS.map((passo, i) => (
            <div key={passo.num} style={{ position: "relative" }}>
              {i < PASSOS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position:   "absolute",
                    top:        28,
                    left:       "calc(100% - 16px)",
                    width:      32,
                    height:     1,
                    background: COR.fundoBorda,
                    zIndex:     0,
                    display:    "none",
                  }}
                />
              )}

              <div
                style={{
                  fontSize:    48,
                  fontWeight:  800,
                  color:       COR.verdeClaro,
                  fontFamily:  "'Inter', sans-serif",
                  lineHeight:  1,
                  marginBottom: 16,
                  opacity:     0.5,
                }}
              >
                {passo.num}
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, color: COR.branco, marginBottom: 10 }}>
                {passo.titulo}
              </h3>
              <p style={{ color: COR.brancoOp90, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {passo.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

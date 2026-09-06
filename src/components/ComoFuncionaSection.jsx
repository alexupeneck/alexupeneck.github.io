import { useEffect, useRef, useState } from "react";
import { COR } from "../constants/cores";
import { PASSOS } from "../constants/dados";

const BASE = 560;

const BARRAS = [
  { x: 80,  h: 60  },
  { x: 200, h: 110 },
  { x: 320, h: 150 },
  { x: 440, h: 200 },
  { x: 560, h: 260 },
  { x: 680, h: 330 },
  { x: 800, h: 400 },
  { x: 920, h: 480 },
];

const TREND =
  "115,500 235,450 355,410 475,360 595,300 715,230 835,160 955,80";

export default function ComoFuncionaSection() {
  const sectionRef = useRef(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        setAtivo(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vs-chart { opacity: 0.3; }
        .vs-chart-barra {
          transform-box: fill-box;
          transform-origin: bottom;
        }
        .vs-chart-linha {
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1200;
        }
        .vs-chart-ponto {
          transform-box: fill-box;
          transform-origin: center;
        }
        .vs-chart.ativo .vs-chart-barra {
          animation: vs-barra 1.2s cubic-bezier(0.3, 0.7, 0.3, 1) forwards;
        }
        .vs-chart.ativo .vs-chart-linha {
          animation: vs-linha 2.4s ease forwards;
        }
        .vs-chart.ativo .vs-chart-ponto {
          animation: vs-ponto 2.2s ease-in-out infinite;
        }
        @keyframes vs-barra { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes vs-linha { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes vs-ponto {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.6); }
        }
        @media (max-width: 768px) {
          .vs-chart {
            opacity: 0.16 !important;
            width: 150% !important;
            right: -35% !important;
            bottom: -30px !important;
          }
        }
      `}</style>

      <section
        id="como-funciona"
        ref={sectionRef}
        style={{
          padding:    "100px 24px",
          background: COR.fundoSecund,
          position:   "relative",
          overflow:   "hidden",
        }}
      >
        {/* Gráfico animado de fundo */}
        <svg
          className={`vs-chart ${ativo ? "ativo" : ""}`}
          viewBox="0 0 1000 640"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          style={{
            position:      "absolute",
            right:         -40,
            bottom:        -40,
            width:         "min(72%, 920px)",
            height:        "auto",
            pointerEvents: "none",
          }}
        >
          <defs>
            <linearGradient id="vs-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={COR.verdeClaro} />
              <stop offset="1" stopColor={COR.verde} />
            </linearGradient>
          </defs>

          {/* Linhas de grade */}
          {[120, 240, 360, 480].map((y) => (
            <line
              key={y}
              x1="20"
              x2="980"
              y1={y}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
          ))}

          {/* Barras crescendo */}
          {BARRAS.map((b, i) => (
            <rect
              key={`bar-${i}`}
              className="vs-chart-barra"
              x={b.x}
              y={BASE - b.h}
              width="72"
              height={b.h}
              rx="8"
              fill="url(#vs-grad)"
              style={{ animationDelay: `${0.15 * i}s` }}
            />
          ))}

          {/* Linha de tendência (glow + principal) */}
          <polyline
            className="vs-chart-linha"
            points={TREND}
            stroke={COR.verdeClaro}
            strokeWidth="16"
            opacity="0.22"
            style={{ animationDelay: "0.15s" }}
          />
          <polyline
            className="vs-chart-linha"
            points={TREND}
            stroke={COR.verdeClaro}
            strokeWidth="5"
            opacity="0.9"
          />

          {/* Ponto final pulsante */}
          <circle
            className="vs-chart-ponto"
            cx="955"
            cy="80"
            r="12"
            fill={COR.verdeClaro}
          />
        </svg>
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
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import { SOLUCOES } from "../constants/dados";
import { ICONES_SOLUCOES } from "./Icones";

const ROTAS_INTERNAS = {
  "VigiaSafra": "/vigiasafra",
};

const DURACAO = 10000;
const DURACAO_GALERIA = 3000; // troca de imagem a cada 3s

export default function EcosistemaSection() {
  const [atual, setAtual] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [imgAtual, setImgAtual] = useState(0);
  const pausadoRef = useRef(false);
  const inicioRef = useRef(Date.now());
  const rafRef = useRef(null);
  const solucao = SOLUCOES[atual];
  const disponivel = solucao.status === "Disponível";
  const galeria = solucao.galeria || (solucao.imagem ? [solucao.imagem] : []);

  // Reset da galeria ao trocar de solução
  useEffect(() => { setImgAtual(0); }, [atual]);

  // Autoplay da galeria de imagens
  useEffect(() => {
    if (galeria.length <= 1) return;
    const t = setInterval(() => {
      setImgAtual((prev) => (prev + 1) % galeria.length);
    }, DURACAO_GALERIA);
    return () => clearInterval(t);
  }, [atual, galeria.length]);

  // Barra de progresso do carrossel principal
  useEffect(() => {
    inicioRef.current = Date.now();
    setProgresso(0);

    function tick() {
      if (pausadoRef.current) {
        inicioRef.current = Date.now() - progresso * DURACAO / 100;
      }
      const elapsed = Date.now() - inicioRef.current;
      const pct = Math.min((elapsed / DURACAO) * 100, 100);
      setProgresso(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (!pausadoRef.current) {
        setAtual((prev) => (prev + 1) % SOLUCOES.length);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [atual]);

  function irPara(i) {
    cancelAnimationFrame(rafRef.current);
    pausadoRef.current = true;
    setAtual(i);
    setTimeout(() => { pausadoRef.current = false; }, 10000);
  }

  const touchStartX = useRef(null);
  function onTouchStart(e) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    irPara(diff > 0 ? (atual + 1) % SOLUCOES.length : (atual - 1 + SOLUCOES.length) % SOLUCOES.length);
    touchStartX.current = null;
  }

  return (
    <section id="solucoes" style={{ padding: "48px 0 60px", maxWidth: 1600, margin: "0 auto" }}>
      {/* Cabeçalho */}
      <div style={{ textAlign: "center", marginBottom: 48, padding: "0 20px" }}>
        <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 18, letterSpacing: "0.08em", marginBottom: 12 }}>
          ECOSSISTEMA
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
          Um ecossistema completo para cada etapa da safra
        </h2>
        <p style={{ color: COR.brancoOp60, fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
          Ferramentas desenvolvidas especificamente para o campo brasileiro, conectadas entre si para maximizar os seus resultados.
        </p>
      </div>

      {/* Navegação do carrossel */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32, padding: "0 16px", flexWrap: "wrap" }}>
        {SOLUCOES.map((s, i) => (
          <button
            key={s.nome}
            onClick={() => irPara(i)}
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          8,
              padding:      "8px 16px",
              borderRadius: 8,
              border:       `1.5px solid ${i === atual ? s.cor : COR.fundoBorda}`,
              background:   i === atual ? `${s.cor}18` : "transparent",
              color:        i === atual ? s.cor : COR.brancoOp60,
              fontSize:     14,
              fontWeight:   600,
              cursor:       "pointer",
              transition:   "all 0.2s",
            }}
          >
            <span
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                justifyContent: "center",
                width:          32,
                height:         32,
                borderRadius:   6,
                background:     i === atual ? `${s.cor}40` : COR.brancoOp10,
                color:          i === atual ? s.cor : COR.brancoOp60,
              }}
            >
              {(() => { const Icone = ICONES_SOLUCOES[s.nome]; return Icone ? <Icone size={18} color={i === atual ? s.cor : "gray"} ativo={i === atual} /> : null; })()}
            </span>
            {s.nome}
          </button>
        ))}
      </div>

      {/* Card principal */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          display:      "flex",
          alignItems:   "stretch",
          background:   COR.fundoCard,
          border:       `1px solid ${solucao.cor}44`,
          borderRadius: 20,
          margin:       "0 40px",
          overflow:     "hidden",
          transition:   "border-color 0.3s",
          userSelect:   "none",
          height:       480,
        }}
        className="ecosistema-card"
      >
        {/* Lado esquerdo — slideshow de imagens */}
        <div className="ecosistema-img" style={{ flex: "0 0 50%", position: "relative", overflow: "hidden" }}>
          {galeria.length > 0 ? (
            <>
              {galeria.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${solucao.nome} ${i + 1}`}
                  style={{
                    position:   "absolute",
                    inset:      0,
                    width:      "100%",
                    height:     "100%",
                    objectFit:  "cover",
                    opacity:    i === imgAtual ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                />
              ))}
              {/* Indicadores da galeria */}
              {galeria.length > 1 && (
                <div style={{
                  position:       "absolute",
                  bottom:         16,
                  left:           "50%",
                  transform:      "translateX(-50%)",
                  display:        "flex",
                  gap:            6,
                  zIndex:         2,
                }}>
                  {galeria.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgAtual(i)}
                      aria-label={`Mostrar imagem ${i + 1} de ${galeria.length} (${solucao.nome})`}
                      style={{
                        width:        i === imgAtual ? 20 : 6,
                        height:       6,
                        borderRadius: 3,
                        border:       "none",
                        background:   i === imgAtual ? COR.verdeClaro : COR.brancoOp20,
                        cursor:       "pointer",
                        padding:      0,
                        transition:   "all 0.3s",
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div style={{
              width:          "100%",
              height:         "100%",
              background:     `${solucao.cor}18`,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              color:          solucao.cor,
            }}>
              {(() => { const Icone = ICONES_SOLUCOES[solucao.nome]; return Icone ? <Icone size={80} /> : null; })()}
            </div>
          )}
        </div>

        {/* Lado direito — descrição enxuta */}
        <div className="ecosistema-content" style={{ flex: "1 1 0", padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, overflow: "hidden" }}>
          <div>
            <div style={{ fontSize: 12, color: solucao.cor, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 8 }}>
              {solucao.categoria.toUpperCase()}
            </div>
            <h3 style={{ fontSize: 36, fontWeight: 800, color: COR.branco, margin: "0 0 8px", fontFamily: "'Inter', sans-serif" }}>
              {solucao.nome}
            </h3>
            <span
              style={{
                display:      "inline-block",
                padding:      "4px 12px",
                borderRadius: 20,
                fontSize:     12,
                fontWeight:   600,
                background:   disponivel ? `${COR.verde}22` : `${COR.cinza}22`,
                color:        disponivel ? COR.verde : COR.cinza,
                border:       `1px solid ${disponivel ? COR.verde : COR.cinza}44`,
              }}
            >
              {solucao.status}
            </span>
          </div>

          <p style={{ color: COR.brancoOp90, fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            {solucao.descricao}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6, overflowY: "auto", flex: 1 }}>
            {solucao.features.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: COR.brancoOp90, fontSize: 13, lineHeight: 1.5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: solucao.cor, flexShrink: 0, marginTop: 5 }} />
                {f}
              </li>
            ))}
          </ul>

          {ROTAS_INTERNAS[solucao.nome] ? (
            <Link
              to={ROTAS_INTERNAS[solucao.nome]}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                background:     solucao.cor,
                color:          COR.fundo,
                padding:        "14px 32px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       15,
                fontWeight:     700,
                alignSelf:      "flex-start",
              }}
            >
              Saiba mais →
            </Link>
          ) : disponivel ? (
            <a
              href={solucao.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                background:     solucao.cor,
                color:          COR.fundo,
                padding:        "14px 32px",
                borderRadius:   8,
                textDecoration: "none",
                fontSize:       15,
                fontWeight:     700,
                alignSelf:      "flex-start",
              }}
            >
              Saiba mais →
            </a>
          ) : (
            <span style={{ color: COR.cinza, fontSize: 14, fontStyle: "italic" }}>
              Disponível em breve
            </span>
          )}
        </div>
      </div>

      {/* Barras de progresso */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24, padding: "0 40px", paddingBottom: 8 }}>
        {SOLUCOES.map((s, i) => (
          <button
            key={i}
            onClick={() => irPara(i)}
            aria-label={`Ir para ${s.nome}`}
            style={{
              flex:        1,
              maxWidth:    160,
              height:      4,
              borderRadius: 2,
              border:      "none",
              background:  COR.fundoBorda,
              cursor:      "pointer",
              padding:     0,
              position:    "relative",
              overflow:    "hidden",
            }}
          >
            <div
              style={{
                position:   "absolute",
                left:       0,
                top:        0,
                height:     "100%",
                borderRadius: 2,
                background: s.cor,
                width:      i === atual ? `${progresso}%` : i < atual ? "100%" : "0%",
                transition: i === atual ? "none" : "width 0.2s",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

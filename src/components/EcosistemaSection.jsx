import { useState } from "react";
import { COR } from "../constants/cores";
import { SOLUCOES } from "../constants/dados";

export default function EcosistemaSection() {
  const [atual, setAtual] = useState(0);
  const solucao = SOLUCOES[atual];
  const disponivel = solucao.status === "Disponível";

  return (
    <section id="solucoes" style={{ padding: "100px 0", maxWidth: 1600, margin: "0 auto" }}>
      {/* Cabeçalho */}
      <div style={{ textAlign: "center", marginBottom: 64, padding: "0 40px" }}>
        <div style={{ color: COR.verdeClaro, fontWeight: 600, fontSize: 13, letterSpacing: "0.1em", marginBottom: 12 }}>
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
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 48 }}>
        {SOLUCOES.map((s, i) => (
          <button
            key={s.nome}
            onClick={() => setAtual(i)}
            style={{
              padding:      "10px 24px",
              borderRadius: 8,
              border:       `1.5px solid ${i === atual ? s.cor : COR.fundoBorda}`,
              background:   i === atual ? `${s.cor}18` : "transparent",
              color:        i === atual ? s.cor : COR.brancoOp60,
              fontSize:     15,
              fontWeight:   600,
              cursor:       "pointer",
              transition:   "all 0.2s",
            }}
          >
            {s.icone} {s.nome}
          </button>
        ))}
      </div>

      {/* Card principal */}
      <div
        style={{
          display:       "flex",
          alignItems:    "center",
          gap:           64,
          background:    COR.fundoCard,
          border:        `1px solid ${solucao.cor}44`,
          borderRadius:  20,
          padding:       "56px 64px",
          margin:        "0 40px",
          flexWrap:      "wrap",
          transition:    "border-color 0.3s",
        }}
        className="ecosistema-card"
      >
        {/* Lado esquerdo — imagem + nome */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, minWidth: 260 }}>
          {solucao.imagem ? (
            <img
              src={solucao.imagem}
              alt={solucao.nome}
              style={{ width: 280, height: "auto", objectFit: "contain", borderRadius: 12 }}
            />
          ) : (
            <div
              style={{
                width:          280,
                height:         200,
                borderRadius:   12,
                background:     `${solucao.cor}18`,
                border:         `1px solid ${solucao.cor}33`,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       64,
              }}
            >
              {solucao.icone}
            </div>
          )}

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: solucao.cor, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 6 }}>
              {solucao.categoria.toUpperCase()}
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: COR.branco, margin: 0, fontFamily: "'Inter', sans-serif" }}>
              {solucao.nome}
            </h3>
            <span
              style={{
                display:      "inline-block",
                marginTop:    10,
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
        </div>

        {/* Lado direito — descrição e features */}
        <div style={{ flex: "1 1 320px" }}>
          <p style={{ color: COR.brancoOp90, fontSize: 18, lineHeight: 1.8, marginBottom: 36 }}>
            {solucao.descricao}
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 12 }}>
            {solucao.features.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, color: COR.brancoOp90, fontSize: 15 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: solucao.cor, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>

          {disponivel ? (
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
              }}
            >
              Acessar solução →
            </a>
          ) : (
            <span style={{ color: COR.cinza, fontSize: 14, fontStyle: "italic" }}>
              Disponível em breve
            </span>
          )}
        </div>
      </div>

      {/* Indicadores */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
        {SOLUCOES.map((_, i) => (
          <button
            key={i}
            onClick={() => setAtual(i)}
            style={{
              width:        i === atual ? 24 : 8,
              height:       8,
              borderRadius: 4,
              border:       "none",
              background:   i === atual ? SOLUCOES[atual].cor : COR.fundoBorda,
              cursor:       "pointer",
              transition:   "all 0.3s",
              padding:      0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

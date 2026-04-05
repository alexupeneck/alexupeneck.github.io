import { useState } from "react";
import { COR } from "../constants/cores";

export default function CardSolucao({ solucao, delay }) {
  const [hover, setHover] = useState(false);
  const disponivel = solucao.status === "Disponível";

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:     hover ? COR.fundoBorda : COR.fundoCard,
        border:         `1px solid ${hover ? solucao.cor : COR.fundoBorda}`,
        borderRadius:   16,
        padding:        32,
        display:        "flex",
        flexDirection:  "column",
        gap:            20,
        transition:     "all 0.25s",
        transform:      hover ? "translateY(-4px)" : "none",
        cursor:         disponivel ? "pointer" : "default",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Cabeçalho do card */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div
          style={{
            width:          56,
            height:         56,
            borderRadius:   12,
            background:     `${solucao.cor}22`,
            border:         `1px solid ${solucao.cor}44`,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            fontSize:       24,
          }}
        >
          {solucao.icone}
        </div>

        <span
          style={{
            padding:      "4px 10px",
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

      {/* Nome e categoria */}
      <div>
        <div style={{ fontSize: 12, color: solucao.cor, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>
          {solucao.categoria.toUpperCase()}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: COR.branco, margin: 0, fontFamily: "'Inter', sans-serif" }}>
          {solucao.nome}
        </h3>
      </div>

      {/* Descrição */}
      <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
        {solucao.descricao}
      </p>

      {/* Lista de funcionalidades */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {solucao.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: COR.brancoOp60, fontSize: 13 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: solucao.cor, flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Link de ação */}
      {disponivel ? (
        <a
          href={solucao.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            6,
            color:          solucao.cor,
            textDecoration: "none",
            fontSize:       14,
            fontWeight:     600,
            marginTop:      "auto",
          }}
        >
          Acessar solução →
        </a>
      ) : (
        <span style={{ color: COR.cinza, fontSize: 13, fontStyle: "italic", marginTop: "auto" }}>
          Disponível em breve
        </span>
      )}
    </div>
  );
}

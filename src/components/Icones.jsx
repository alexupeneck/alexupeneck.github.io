import tarefasSvg from "../assets/tarefas.svg";
import mapaSvg from "../assets/mapa.svg";
import vacaSvg from "../assets/vaca.svg";

const FILTRO_CINZA = "brightness(0) invert(60%)";

export function IconeVigiaSafra({ size = 20, color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} width={size} height={size}>
      <path d="M17.5 19H9a5 5 0 1 1 .1-10 6.5 6.5 0 0 1 12.4 2A4 4 0 0 1 17.5 19zm-5.5 2h2v2h-2zm-4 0h2v2H8zm8 0h2v2h-2z"/>
    </svg>
  );
}

export function IconePlanejaSafra({ size = 20, ativo = false }) {
  return <img src={tarefasSvg} width={size} height={size} alt="" style={{ display: "block", filter: ativo ? "brightness(0) invert(80%) sepia(30%) saturate(500%) hue-rotate(60deg)" : FILTRO_CINZA, opacity: 0.85 }} />;
}

export function IconeMapeiaSafra({ size = 20, ativo = false }) {
  return <img src={mapaSvg} width={size} height={size} alt="" style={{ display: "block", filter: ativo ? "brightness(0) invert(80%) sepia(30%) saturate(500%) hue-rotate(60deg)" : FILTRO_CINZA, opacity: 0.85 }} />;
}

export function IconeVigiaPecuaria({ size = 20, ativo = false }) {
  return <img src={vacaSvg} width={size} height={size} alt="" style={{ display: "block", filter: ativo ? "brightness(0) invert(70%) sepia(50%) saturate(400%) hue-rotate(10deg)" : FILTRO_CINZA, opacity: 0.85 }} />;
}

export const ICONES_SOLUCOES = {
  "VigiaSafra":     IconeVigiaSafra,
  "PlanejaSafra":   IconePlanejaSafra,
  "MapeiaSafra":    IconeMapeiaSafra,
  "Vigia@Pecuária": IconeVigiaPecuaria,
};

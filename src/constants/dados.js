import { COR } from "./cores";
import mockupVigiaSafra from "../assets/mockup-vigiasafra.png";

export const SOLUCOES = [
  {
    nome:      "VigiaSafra",
    categoria: "Monitoramento Climático",
    descricao:
      "Alertas operacionais de pulverização, colheita e plantio com base em dados climáticos por talhão. Saiba exatamente o que fazer no campo nos próximos 7 dias.",
    cor:      COR.verde,
    icone:    "🌦",
    status:   "Disponível",
    link:     "https://vigiasafra.com.br/out.html",
    imagem:   mockupVigiaSafra,
    features: ["Alertas de pulverização", "Janelas de colheita", "Risco de doenças", "Previsão 7 dias"],
  },
  {
    nome:      "GeoSafra",
    categoria: "Gestão de Talhões",
    descricao:
      "Mapeamento inteligente de áreas agrícolas com importação de KML, análise de solo e histórico de produtividade por talhão.",
    cor:      COR.verdeClaro,
    icone:    "🗺",
    status:   "Em breve",
    link:     "#",
    imagem:   null,
    features: ["Importação KML", "Análise de solo", "Histórico de safras", "Relatórios técnicos"],
  },
  {
    nome:      "MarketSafra",
    categoria: "Inteligência de Mercado",
    descricao:
      "Preços de commodities em tempo real, análise de tendências e alertas de melhores janelas de venda para maximizar a rentabilidade.",
    cor:      COR.cinza,
    icone:    "📈",
    status:   "Em breve",
    link:     "#",
    imagem:   null,
    features: ["Preços ao vivo", "Análise de tendências", "Alertas de venda", "Histórico de cotações"],
  },
];

export const BENEFICIOS = [
  {
    titulo: "Dados integrados",
    texto:  "Todas as ferramentas compartilham os mesmos talhões e históricos. Um ecossistema, não ferramentas isoladas.",
    icone:  "⚡",
  },
  {
    titulo: "Decisões mais rápidas",
    texto:  "Informações consolidadas em um só lugar. Menos tempo analisando dados, mais tempo no campo.",
    icone:  "🎯",
  },
  {
    titulo: "Escalável para qualquer operação",
    texto:  "De produtores familiares a grandes empresas rurais. A plataforma cresce com o seu negócio.",
    icone:  "📐",
  },
  {
    titulo: "Suporte especializado",
    texto:  "Equipe agronômica e técnica pronta para ajudar você a extrair o máximo de cada ferramenta.",
    icone:  "🤝",
  },
];

export const PASSOS = [
  { num: "01", titulo: "Cadastre sua operação", texto: "Importe seus talhões via KML ou cadastre manualmente. Defina culturas e ciclos produtivos." },
  { num: "02", titulo: "Conecte as soluções",   texto: "Ative as ferramentas que fazem sentido para o seu momento. Comece pelo VigiaSafra e expanda conforme precisar." },
  { num: "03", titulo: "Receba insights",        texto: "Alertas operacionais, relatórios técnicos e análises de mercado chegam diretamente para você." },
  { num: "04", titulo: "Decida com dados",       texto: "Tome as melhores decisões para cada talhão, em cada safra. Resultados mensuráveis desde a primeira semana." },
];

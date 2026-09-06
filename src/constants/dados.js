import { COR } from "./cores";
import mockupVigiaSafra from "../assets/mockup-vigiasafra.png";
import vigiasafraPc from "../assets/vigiasafra_monitor_pc.png";
import vigiasafraPc01 from "../assets/vigiasafra_monitor_pc_01.png.png";
import vigiasafraMoto from "../assets/vigiasafra_moto_lavoura.png";
import planejasafraPc from "../assets/planejasafra_monitor_pc.png";
import planejasafraPlan from "../assets/planejasafra_planning.png";
import planejasafraMobile from "../assets/planejasafra_smartphone.png";
import mapeiasafraLogo from "../assets/mapeiasafra_logo.png";
import vigiapecuariaLogo from "../assets/vigiapecuaria_logo.png";

export const SOLUCOES = [
  {
    nome:      "VigiaSafra",
    categoria: "Monitoramento Climático",
    descricao:
      "Alertas operacionais de pulverização, colheita e plantio com base em dados climáticos por talhão. Saiba exatamente o que fazer no campo nos próximos 7 dias.",
    cor:      COR.verde,
    icone:    "🌦️",
    status:   "Disponível",
    link:     "https://vigiasafra.com.br/out.html",
    imagem:   vigiasafraPc,
    galeria:  [vigiasafraPc, vigiasafraPc01, vigiasafraMoto],
    features: [
      "Inteligência Artificial",
      "Monitoramento Climático",
      "Gerenciamento de Operações Agrícolas",
      "Abertura de Ordens de Serviço",
      "Plantio/Aplicação/Colheita",
      "Estimativas de Produção",
      "Monitoramento Fitossanitário (Mobile Offline)",
      "Relatórios Agrícolas",
      "Gestão de dados climáticos, coleta de pluviômetros offline mobile",
      "Caderno de campo para anotações georreferenciadas",
    ],
  },
  {
    nome:      "PlanejaSafra",
    categoria: "Planejamento de Safra",
    descricao:
      "Planejamento completo de insumos, áreas e custos por safra. Do planejamento de compras ao comparativo de fornecedores, tudo em um só lugar.",
    cor:      COR.verdeClaro,
    icone:    "📋",
    status:   "Em breve",
    link:     "#",
    imagem:   planejasafraPc,
    galeria:  [planejasafraPc, planejasafraPlan, planejasafraMobile],
    features: [
      "Planejamento de Pacotes de Insumos",
      "Definição de áreas planejadas por variedade e cultura",
      "Insumos programados por tecnologia agrícola e tipo de aplicação",
      "Gerador de volume de compra de insumos por cliente",
      "Recurso para preenchimento de preços dos produtos (Acesso externo para revendas)",
      "Tela de Comparativo de Valores de Compra por fornecedor",
      "Indicadores de Custo de Planejamento por Classe de produto (Herbicida, Fungicida, adubos, sementes, corretivos, biológicos e outros.)",
      "Histórico de Planejamento e compras de safras anteriores",
    ],
  },
  {
    nome:      "MapeiaSafra",
    categoria: "Mapeamento Geográfico",
    descricao:
      "Aplicativo offline para demarcação de áreas e distâncias com precisão. Mapeie, salve e exporte seus talhões em múltiplos formatos.",
    cor:      COR.cinza,
    icone:    "🗺️",
    status:   "Em breve",
    link:     "#",
    imagem:   mapeiasafraLogo,
    galeria:  [mapeiasafraLogo],
    features: [
      "Aplicativo Offline para Demarcação de áreas e distâncias",
      "Salvar rotas / Pontos / Polígonos",
      "Definir cores para marcadores e talhões",
      "Mapeamento via Smartphone/Tablet",
      "Integração com dispositivos GPS",
      "Exportação de Arquivos mapeados em formato: KML / KMZ / SHP e outros",
    ],
  },
  {
    nome:      "Vigia@Pecuária",
    categoria: "Gestão Pecuária",
    descricao:
      "Gerenciamento completo das atividades pecuárias, do cadastro de animais ao controle de pastagens e rastreabilidade.",
    cor:      "#c8a84b",
    icone:    "🐄",
    status:   "Em breve",
    link:     "#",
    imagem:   vigiapecuariaLogo,
    galeria:  [vigiapecuariaLogo],
    features: [
      "Gerenciamento das atividades pecuárias",
      "Cadastro de Animais",
      "Cadastro de Pastagens/Piquetes/Baias",
      "Controle de Aplicação de insumos",
      "Rastreabilidade de Animais",
      "Gestão de Animais por Pasto",
      "Apontamentos de Nascimentos",
      "Apontamentos de Morte Acidental ou para Consumo",
      "Apontamentos de utilização de Medicamentos",
      "Monitoramento e lançamento de altura de pastos",
      "Pesagens de Animais (Entrada e Saída)",
    ],
  },
];

export const BENEFICIOS = [
  {
    titulo: "Dados integrados",
    texto:  "Todas as ferramentas compartilham os mesmos talhões e históricos. Um ecossistema, não ferramentas isoladas.",
    icone:  "⚡",
    cor:    COR.verde,
  },
  {
    titulo: "Decisões mais rápidas",
    texto:  "Informações consolidadas em um só lugar. Menos tempo analisando dados, mais tempo no campo.",
    icone:  "🎯",
    cor:    COR.verdeClaro,
  },
  {
    titulo: "Escalável para qualquer operação",
    texto:  "De produtores familiares a grandes empresas rurais. A plataforma cresce com o seu negócio.",
    icone:  "📐",
    cor:    "#5aa9e6",
  },
  {
    titulo: "Suporte especializado",
    texto:  "Equipe agronômica e técnica pronta para ajudar você a extrair o máximo de cada ferramenta.",
    icone:  "🤝",
    cor:    "#c8a84b",
  },
];

export const PASSOS = [
  { num: "01", titulo: "Cadastre sua operação", texto: "Importe seus talhões via KML ou cadastre manualmente. Defina culturas e ciclos produtivos." },
  { num: "02", titulo: "Conecte as soluções",   texto: "Ative as ferramentas que fazem sentido para o seu momento. Comece pelo VigiaSafra e expanda conforme precisar." },
  { num: "03", titulo: "Receba insights",        texto: "Alertas operacionais, relatórios técnicos e análises de mercado chegam diretamente para você." },
  { num: "04", titulo: "Decida com dados",       texto: "Tome as melhores decisões para cada talhão, em cada safra. Resultados mensuráveis desde a primeira semana." },
];

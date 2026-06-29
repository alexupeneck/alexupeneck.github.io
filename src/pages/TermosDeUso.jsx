import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";

const SECOES = [
  {
    titulo: "1. Sobre a XSafra",
    texto: "A XSafra é uma empresa especializada no desenvolvimento de soluções tecnológicas para o agronegócio, oferecendo sistemas voltados à gestão agrícola e pecuária, monitoramento de operações, planejamento, mapeamento de áreas e controle de atividades no campo.\n\nO presente site possui caráter institucional e tem como finalidade apresentar a empresa, suas soluções, canais de contato e demais informações relacionadas aos produtos e serviços oferecidos.",
  },
  {
    titulo: "2. Aceitação dos Termos",
    texto: "Ao utilizar este site, o usuário concorda em cumprir estes Termos de Uso, bem como toda a legislação aplicável, especialmente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e demais normas vigentes.",
  },
  {
    titulo: "3. Utilização do Site",
    texto: "O usuário compromete-se a utilizar o site de forma ética, responsável e em conformidade com a legislação brasileira.\n\nÉ proibido:\n\nUtilizar o site para fins ilícitos; Tentar obter acesso não autorizado aos sistemas da XSafra; Introduzir vírus, malwares ou qualquer código malicioso; Interferir no funcionamento do site ou comprometer sua disponibilidade; Utilizar robôs, scripts ou ferramentas automatizadas para coleta indevida de informações; Copiar, reproduzir ou redistribuir conteúdos do site sem autorização.\n\nA violação destas regras poderá resultar na adoção das medidas legais cabíveis.",
  },
  {
    titulo: "4. Cadastro e Informações Fornecidas",
    texto: "Ao preencher formulários de contato, solicitação de demonstração ou suporte, o usuário declara que as informações fornecidas são verdadeiras, completas e atualizadas.\n\nA XSafra poderá utilizar essas informações exclusivamente para atendimento, relacionamento comercial, suporte técnico e demais finalidades descritas em sua Política de Privacidade.",
  },
  {
    titulo: "5. Propriedade Intelectual",
    texto: "Todo o conteúdo disponibilizado neste site é de propriedade da XSafra ou utilizado mediante autorização.\n\nIncluem-se, entre outros:\n\nNome empresarial; Marca XSafra; Logotipos; Identidade visual; Textos; Imagens; Ícones; Diagramas; Layout do site; Software; Banco de dados; Documentação técnica.\n\nNenhum conteúdo poderá ser reproduzido, modificado, distribuído, publicado ou utilizado para fins comerciais sem autorização prévia e expressa da XSafra.",
  },
  {
    titulo: "6. Informações sobre Produtos e Serviços",
    texto: "As informações disponibilizadas neste site possuem caráter informativo.\n\nA XSafra poderá alterar, atualizar, incluir ou remover funcionalidades, características, especificações técnicas, preços, planos ou serviços a qualquer momento, sem necessidade de aviso prévio.\n\nA disponibilidade de funcionalidades poderá variar conforme o contrato firmado com cada cliente.",
  },
  {
    titulo: "7. Disponibilidade do Site",
    texto: "Embora a XSafra adote boas práticas para manter seus serviços disponíveis, não garante que o site permanecerá ininterruptamente acessível.\n\nPoderão ocorrer indisponibilidades decorrentes de:\n\nAtualizações; Manutenção preventiva; Melhorias técnicas; Problemas de infraestrutura; Eventos externos; Casos fortuitos ou força maior.\n\nA XSafra não será responsável por prejuízos decorrentes dessas interrupções.",
  },
  {
    titulo: "8. Limitação de Responsabilidade",
    texto: "A XSafra empenha-se para manter as informações deste site corretas e atualizadas.\n\nEntretanto, não garante que todo o conteúdo esteja permanentemente livre de erros, omissões ou desatualizações.\n\nA empresa não se responsabiliza por:\n\nDecisões tomadas exclusivamente com base nas informações do site; Danos causados por uso inadequado do conteúdo; Problemas decorrentes de falhas na conexão do usuário; Ataques de terceiros ou eventos fora de seu controle.",
  },
  {
    titulo: "9. Links para Terceiros",
    texto: "O site poderá conter links para páginas, redes sociais ou serviços de terceiros.\n\nEsses ambientes possuem políticas próprias de privacidade e termos de uso, sendo de responsabilidade exclusiva de seus respectivos administradores.\n\nA XSafra não se responsabiliza pelo conteúdo, disponibilidade ou práticas adotadas por esses terceiros.",
  },
  {
    titulo: "10. Proteção de Dados",
    texto: "O tratamento de dados pessoais realizado pela XSafra segue os princípios e requisitos estabelecidos pela Lei Geral de Proteção de Dados (LGPD).\n\nMais informações podem ser consultadas em nossa Política de Privacidade.",
  },
  {
    titulo: "11. Alterações destes Termos",
    texto: "A XSafra poderá atualizar estes Termos de Uso sempre que necessário para refletir alterações legais, tecnológicas ou operacionais.\n\nA versão vigente estará sempre disponível nesta página, acompanhada da data da última atualização.\n\nO uso continuado do site após a publicação das alterações será considerado como concordância com os novos termos.",
  },
  {
    titulo: "12. Legislação Aplicável",
    texto: "Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.\n\nEventuais controvérsias decorrentes da utilização deste site serão resolvidas conforme a legislação brasileira.",
  },
  {
    titulo: "13. Contato",
    texto: "Caso tenha dúvidas sobre estes Termos de Uso ou sobre qualquer informação relacionada ao site da XSafra, entre em contato conosco:\n\nXSafra\nE-mail: contato@xsafra.com.br",
  },
];

export default function TermosDeUso() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COR.fundo}; color: ${COR.branco}; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .termos-nav-logo { height: 88px; width: auto; margin-left: -32px; }
        @media (max-width: 768px) {
          .termos-nav-logo { height: 72px !important; margin-left: 0 !important; }
          .termos-nav-inner { padding: 0 20px !important; height: 88px !important; }
          .termos-hero { padding: 120px 20px 40px !important; }
          .termos-content { padding: 0 20px 60px !important; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>

        {/* Navbar */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: COR.fundoSecund, borderBottom: `1px solid ${COR.fundoBorda}` }}>
          <div className="termos-nav-inner" style={{ maxWidth: 1600, margin: "0 auto", padding: "0 40px", height: 108, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={`data:image/png;base64,${LOGO_BASE64}`} alt="XSafra" className="termos-nav-logo" />
            </Link>
            <Link to="/" style={{ background: COR.verde, color: COR.branco, padding: "10px 22px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
              ← Voltar
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="termos-hero" style={{ paddingTop: 160, paddingBottom: 48, paddingLeft: 40, paddingRight: 40, position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "40%", left: "20%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
            <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 16, letterSpacing: "0.1em", marginBottom: 12 }}>
              LEGAL
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.15, color: COR.branco, margin: "0 0 16px", fontFamily: "'Inter', sans-serif" }}>
              Termos de Uso
            </h1>
            <p style={{ color: COR.cinza, fontSize: 14 }}>Última atualização: 06/2026</p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="termos-content" style={{ padding: "0 40px 100px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* Introdução */}
            <div style={{ background: COR.fundoCard, border: `1px solid ${COR.fundoBorda}`, borderRadius: 16, padding: 32, marginBottom: 48 }}>
              <p style={{ color: COR.brancoOp90, fontSize: 16, lineHeight: 1.85, margin: "0 0 16px" }}>
                Bem-vindo ao site da XSafra.
              </p>
              <p style={{ color: COR.brancoOp60, fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                Ao acessar este site, navegar por suas páginas ou utilizar nossos serviços, você declara que leu, compreendeu e concorda com os presentes Termos de Uso. Caso não concorde com qualquer uma das condições descritas abaixo, recomendamos que interrompa a utilização do site.
              </p>
            </div>

            {/* Seções */}
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {SECOES.map((s) => (
                <div key={s.titulo}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: COR.branco, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${COR.fundoBorda}`, fontFamily: "'Inter', sans-serif" }}>
                    {s.titulo}
                  </h2>
                  {s.texto.split("\n\n").map((bloco, i) => (
                    <p key={i} style={{ color: COR.brancoOp60, fontSize: 15, lineHeight: 1.85, margin: i > 0 ? "12px 0 0" : 0 }}>
                      {bloco}
                    </p>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

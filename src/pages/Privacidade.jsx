import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COR } from "../constants/cores";
import LOGO_BASE64 from "../assets/logo";

const SECOES = [
  {
    titulo: "1. Quem somos",
    texto: "A XSafra é um ecossistema de soluções digitais para o agronegócio, desenvolvido para apoiar a gestão agrícola e pecuária por meio de tecnologia, organização de dados, monitoramento, planejamento e controle operacional.\n\nPara fins desta Política de Privacidade, a XSafra poderá atuar como controladora dos dados pessoais quando definir as finalidades e os meios de tratamento das informações fornecidas pelos usuários.",
  },
  {
    titulo: "2. Quais dados podemos coletar",
    texto: "Podemos coletar dados pessoais fornecidos diretamente por você, como:\n\nNome; E-mail; Telefone; Empresa ou propriedade rural; Cidade e estado; Cargo ou função; Mensagens enviadas por formulários de contato; Informações fornecidas em solicitações de demonstração, suporte ou atendimento comercial.\n\nTambém podemos coletar automaticamente algumas informações de navegação, como:\n\nEndereço IP; Tipo de dispositivo; Navegador utilizado; Páginas acessadas; Data e horário de acesso; Cookies e tecnologias semelhantes.\n\nCaso você utilize alguma das soluções da XSafra, poderão ser tratados dados relacionados à operação agrícola ou pecuária, como informações de propriedades, áreas, talhões, atividades de campo, apontamentos operacionais, dados climáticos, registros de manejo, mapas, localização e demais informações necessárias ao funcionamento dos sistemas.",
  },
  {
    titulo: "3. Como utilizamos os dados",
    texto: "Os dados coletados podem ser utilizados para:\n\nResponder solicitações enviadas pelo site; Entrar em contato com interessados em nossas soluções; Agendar demonstrações comerciais; Prestar suporte técnico; Melhorar nossos produtos, serviços e experiência de navegação; Enviar comunicações institucionais, comerciais ou informativas, quando autorizado; Garantir a segurança do site e das nossas plataformas; Cumprir obrigações legais, regulatórias ou contratuais.\n\nA XSafra não utiliza dados pessoais para finalidades incompatíveis com aquelas informadas nesta Política.",
  },
  {
    titulo: "4. Cookies",
    texto: "Nosso site poderá utilizar cookies para melhorar a experiência de navegação, compreender como os visitantes interagem com as páginas e aprimorar nossos conteúdos e serviços.\n\nCookies são pequenos arquivos armazenados no navegador do usuário. Eles podem ser utilizados para funcionalidades essenciais do site, estatísticas de acesso e melhoria da navegação.\n\nVocê pode configurar seu navegador para bloquear ou excluir cookies. No entanto, algumas funcionalidades do site podem não funcionar corretamente caso determinados cookies sejam desativados.",
  },
  {
    titulo: "5. Compartilhamento de dados",
    texto: "A XSafra poderá compartilhar dados pessoais apenas quando necessário, como nos seguintes casos:\n\nCom fornecedores de tecnologia, hospedagem, suporte, e-mail, análise de dados ou infraestrutura; Com parceiros envolvidos na prestação dos serviços contratados; Para cumprimento de obrigações legais ou regulatórias; Para proteção dos direitos da XSafra, de seus clientes ou usuários; Mediante solicitação de autoridades competentes, quando aplicável.\n\nNão vendemos dados pessoais a terceiros.",
  },
  {
    titulo: "6. Armazenamento e segurança",
    texto: "A XSafra adota medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda, alteração, divulgação ou uso indevido.\n\nBuscamos utilizar práticas adequadas de segurança da informação, controle de acesso, proteção de sistemas, monitoramento e armazenamento seguro das informações.\n\nApesar dos nossos esforços, nenhum ambiente digital é totalmente livre de riscos. Por isso, também recomendamos que os usuários adotem boas práticas de segurança, como uso de senhas fortes, atualização de dispositivos e cuidado com links suspeitos.",
  },
  {
    titulo: "7. Retenção dos dados",
    texto: "Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política, atender obrigações legais, resolver disputas, manter registros comerciais ou garantir o funcionamento adequado dos serviços.\n\nQuando os dados não forem mais necessários, poderão ser excluídos, anonimizados ou mantidos apenas quando houver base legal para sua conservação.",
  },
  {
    titulo: "8. Direitos dos titulares",
    texto: "De acordo com a LGPD, o titular dos dados pode solicitar informações sobre o tratamento de seus dados pessoais, incluindo acesso, correção, exclusão, portabilidade, revogação de consentimento e demais direitos previstos na legislação.\n\nPara exercer seus direitos, entre em contato conosco pelo canal informado nesta Política.",
  },
  {
    titulo: "9. Dados de crianças e adolescentes",
    texto: "As soluções e canais da XSafra são voltados ao público profissional, empresarial e rural. Não temos a intenção de coletar dados pessoais de crianças ou adolescentes sem o consentimento dos responsáveis legais.\n\nCaso identifiquemos o tratamento indevido dessas informações, adotaremos as medidas necessárias para exclusão ou regularização.",
  },
  {
    titulo: "10. Links para terceiros",
    texto: "Nosso site poderá conter links para sites externos, redes sociais, plataformas de comunicação ou serviços de terceiros.\n\nA XSafra não se responsabiliza pelas práticas de privacidade, conteúdos ou políticas desses terceiros. Recomendamos que você leia as respectivas políticas de privacidade ao acessar ambientes externos.",
  },
  {
    titulo: "11. Alterações nesta Política",
    texto: "Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir mudanças em nossos serviços, tecnologias utilizadas, exigências legais ou melhorias nos processos internos.\n\nA versão mais recente estará sempre disponível nesta página.",
  },
  {
    titulo: "12. Contato",
    texto: "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais pela XSafra, entre em contato:\n\nXSafra\nE-mail: comercial@xsafra.com.br",
  },
];

export default function Privacidade() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COR.fundo}; color: ${COR.branco}; font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        .priv-nav-logo { height: 88px; width: auto; margin-left: -32px; }
        @media (max-width: 768px) {
          .priv-nav-logo { height: 72px !important; margin-left: 0 !important; }
          .priv-nav-inner { padding: 0 20px !important; height: 88px !important; }
          .priv-hero { padding: 120px 20px 40px !important; }
          .priv-content { padding: 0 20px 60px !important; }
        }
      `}</style>

      <div style={{ background: COR.fundo, minHeight: "100vh" }}>

        {/* Navbar */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: COR.fundoSecund, borderBottom: `1px solid ${COR.fundoBorda}` }}>
          <div className="priv-nav-inner" style={{ maxWidth: 1600, margin: "0 auto", padding: "0 40px", height: 108, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={`data:image/png;base64,${LOGO_BASE64}`} alt="XSafra" className="priv-nav-logo" />
            </Link>
            <Link to="/" style={{ background: COR.verde, color: COR.branco, padding: "10px 22px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
              ← Voltar
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="priv-hero" style={{ paddingTop: 160, paddingBottom: 48, paddingLeft: 40, paddingRight: 40, position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "40%", left: "20%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(ellipse, ${COR.verdeOp20} 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
            <div style={{ color: COR.verdeClaro, fontWeight: 700, fontSize: 16, letterSpacing: "0.1em", marginBottom: 12 }}>
              LEGAL
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.15, color: COR.branco, margin: "0 0 16px", fontFamily: "'Inter', sans-serif" }}>
              Política de Privacidade
            </h1>
            <p style={{ color: COR.cinza, fontSize: 14 }}>Última atualização: 06/2026</p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="priv-content" style={{ padding: "0 40px 100px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* Introdução */}
            <div style={{ background: COR.fundoCard, border: `1px solid ${COR.fundoBorda}`, borderRadius: 16, padding: 32, marginBottom: 48 }}>
              <p style={{ color: COR.brancoOp90, fontSize: 16, lineHeight: 1.85, margin: "0 0 16px" }}>
                A XSafra valoriza a privacidade e a segurança das informações dos usuários, clientes, parceiros e visitantes do nosso site.
              </p>
              <p style={{ color: COR.brancoOp60, fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                Esta Política de Privacidade tem como objetivo explicar, de forma clara e transparente, como coletamos, utilizamos, armazenamos e protegemos os dados pessoais fornecidos por você ao acessar nosso site, entrar em contato conosco ou utilizar nossas soluções digitais voltadas para agricultura e pecuária.
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

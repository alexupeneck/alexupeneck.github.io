import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { COR } from "../constants/cores";

const WHATSAPP_NUM = "5500000000000"; // substitua pelo número real
const EMAIL = "comercial@xsafra.com.br";

const CAMPO_BASE = {
  background:  COR.fundoBorda,
  border:      `1px solid ${COR.fundoBorda}`,
  borderRadius: 8,
  color:       COR.branco,
  fontSize:    15,
  padding:     "12px 14px",
  width:       "100%",
  outline:     "none",
  fontFamily:  "'Inter', system-ui, sans-serif",
  transition:  "border-color 0.2s",
};

export default function ContatoPopup({ onClose, mensagemWa }) {
  const [tela, setTela] = useState("escolha"); // "escolha" | "formulario" | "enviado"
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", telefone: "", regiao: "" });
  const [focado, setFocado] = useState(null);

  const waUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    mensagemWa || "Olá, gostaria de saber mais sobre o XSafra!"
  )}`;

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll and prevent horizontal overflow while popup is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflowX;
    body.style.overflow = "hidden";
    html.style.overflowX = "hidden";
    return () => {
      body.style.overflow = prevOverflow;
      html.style.overflowX = prevHtmlOverflow;
    };
  }, []);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const corpo = encodeURIComponent(
      `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\nRegião: ${form.regiao}\n\nMensagem enviada pelo site XSafra.`
    );
    window.location.href = `mailto:${EMAIL}?subject=Contato - ${encodeURIComponent(form.nome)}&body=${corpo}`;
    setTela("enviado");
  }

  const campos = [
    { name: "nome",     label: "Nome completo",       type: "text",  required: true,  placeholder: "Seu nome" },
    { name: "email",    label: "E-mail",              type: "email", required: true,  placeholder: "seu@email.com.br" },
    { name: "empresa",  label: "Empresa",             type: "text",  required: false, placeholder: "Nome da empresa ou propriedade" },
    { name: "telefone", label: "Telefone / WhatsApp", type: "tel",   required: false, placeholder: "(00) 00000-0000" },
    { name: "regiao",   label: "Região / Estado",     type: "text",  required: false, placeholder: "Ex: Mato Grosso, GO, SP..." },
  ];

  return createPortal(
    <>
      {/* Responsive popup styles */}
      <style>{`
        .contato-modal { padding: 40px 40px 32px; }
        @media (max-width: 480px) {
          .contato-modal { padding: 28px 20px 24px !important; }
        }
      `}</style>

      {/* Overlay */}
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 2000, backdropFilter: "blur(4px)" }} />

      {/* Modal */}
      <div className="contato-modal" style={{
        position:     "fixed",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        zIndex:       2001,
        background:   COR.fundoCard,
        border:       `1px solid ${COR.fundoBorda}`,
        borderRadius: 20,
        width:        "min(460px, 92vw)",
        maxWidth:     "92vw",
        maxHeight:    "90vh",
        overflowY:    "auto",
        overflowX:    "hidden",
        boxShadow:    "0 24px 64px rgba(0,0,0,0.5)",
        boxSizing:    "border-box",
      }}>
        {/* Fechar */}
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", color: COR.cinza, fontSize: 20, cursor: "pointer", lineHeight: 1, padding: 4 }} aria-label="Fechar">✕</button>

        {/* ── Tela 1: escolha ── */}
        {tela === "escolha" && (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{ color: COR.verdeClaro, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>FALE COM A GENTE</div>
              <h2 style={{ color: COR.branco, fontSize: 22, fontWeight: 800, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                Como prefere entrar em contato?
              </h2>
              <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.6, marginTop: 10 }}>
                Nossa equipe está pronta para responder suas dúvidas e ajudar você a começar.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* WhatsApp */}
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, background: "#25D366", color: "#fff", padding: "14px 20px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>

              {/* E-mail → abre formulário */}
              <button
                onClick={() => setTela("formulario")}
                style={{ display: "flex", alignItems: "center", gap: 14, background: "transparent", color: COR.branco, padding: "14px 20px", borderRadius: 12, fontWeight: 600, fontSize: 15, border: `1.5px solid ${COR.fundoBorda}`, cursor: "pointer", transition: "border-color 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = COR.verdeClaro}
                onMouseLeave={e => e.currentTarget.style.borderColor = COR.fundoBorda}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Formulário de contato
              </button>
            </div>
          </>
        )}

        {/* ── Tela 2: formulário ── */}
        {tela === "formulario" && (
          <>
            <div style={{ marginBottom: 20 }}>
              <button onClick={() => setTela("escolha")} style={{ background: "none", border: "none", color: COR.cinza, fontSize: 13, cursor: "pointer", padding: 0, marginBottom: 12, fontFamily: "inherit" }}>
                ← Voltar
              </button>
              <div style={{ color: COR.verdeClaro, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>FORMULÁRIO</div>
              <h2 style={{ color: COR.branco, fontSize: 20, fontWeight: 800, margin: 0, fontFamily: "'Inter', sans-serif" }}>Entre em contato</h2>
              <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>
                Preencha os dados e retornamos em breve.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {campos.map((c) => (
                <div key={c.name}>
                  <label style={{ display: "block", color: COR.brancoOp60, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                    {c.label}{c.required && <span style={{ color: COR.verdeClaro }}> *</span>}
                  </label>
                  <input
                    name={c.name}
                    type={c.type}
                    required={c.required}
                    placeholder={c.placeholder}
                    value={form[c.name]}
                    onChange={handleChange}
                    onFocus={() => setFocado(c.name)}
                    onBlur={() => setFocado(null)}
                    style={{ ...CAMPO_BASE, borderColor: focado === c.name ? COR.verdeClaro : COR.fundoBorda }}
                  />
                </div>
              ))}
              <button type="submit"
                style={{ background: COR.verde, color: COR.branco, border: "none", borderRadius: 8, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.target.style.opacity = "0.88"}
                onMouseLeave={e => e.target.style.opacity = "1"}
              >
                Enviar mensagem
              </button>
            </form>
          </>
        )}

        {/* ── Tela 3: enviado ── */}
        {tela === "enviado" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ color: COR.branco, fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Mensagem enviada!</h2>
            <p style={{ color: COR.brancoOp60, fontSize: 15, lineHeight: 1.6 }}>
              Obrigado pelo contato. Nossa equipe retornará em breve.
            </p>
            <button onClick={onClose} style={{ marginTop: 24, background: COR.verde, color: COR.branco, border: "none", borderRadius: 8, padding: "12px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Fechar
            </button>
          </div>
        )}

      </div>
    </>,
    document.body
  );
}

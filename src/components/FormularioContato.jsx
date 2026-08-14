import { useEffect, useState } from "react";
import { COR } from "../constants/cores";

const CAMPO_BASE = {
  background:    COR.fundoBorda,
  border:        `1px solid ${COR.fundoBorda}`,
  borderRadius:  8,
  color:         COR.branco,
  fontSize:      15,
  padding:       "12px 14px",
  width:         "100%",
  outline:       "none",
  fontFamily:    "'Inter', system-ui, sans-serif",
  transition:    "border-color 0.2s",
};

export default function FormularioContato({ onClose }) {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", telefone: "", regiao: "" });
  const [enviado, setEnviado] = useState(false);
  const [focado, setFocado] = useState(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Monta o e-mail com os dados preenchidos
    const corpo = encodeURIComponent(
      `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\nRegião: ${form.regiao}\n\nMensagem enviada pelo site XSafra.`
    );
    window.location.href = `mailto:comercial@xsafra.com.br?subject=Contato - ${encodeURIComponent(form.nome)}&body=${corpo}`;
    setEnviado(true);
  }

  const campos = [
    { name: "nome",     label: "Nome completo",   type: "text",  required: true,  placeholder: "Seu nome" },
    { name: "email",    label: "E-mail",          type: "email", required: true,  placeholder: "seu@email.com.br" },
    { name: "empresa",  label: "Empresa",         type: "text",  required: false, placeholder: "Nome da empresa ou propriedade" },
    { name: "telefone", label: "Telefone / WhatsApp", type: "tel", required: false, placeholder: "(00) 00000-0000" },
    { name: "regiao",   label: "Região / Estado", type: "text",  required: false, placeholder: "Ex: Mato Grosso, GO, SP..." },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 2000, backdropFilter: "blur(4px)" }}
      />

      {/* Modal */}
      <div style={{
        position:     "fixed",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        zIndex:       2001,
        background:   COR.fundoCard,
        border:       `1px solid ${COR.fundoBorda}`,
        borderRadius: 20,
        padding:      "40px 40px 36px",
        width:        "min(500px, 94vw)",
        maxHeight:    "90vh",
        overflowY:    "auto",
        boxShadow:    "0 24px 64px rgba(0,0,0,0.5)",
      }}>
        {/* Fechar */}
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: "none", color: COR.cinza, fontSize: 20, cursor: "pointer", lineHeight: 1, padding: 4 }} aria-label="Fechar">✕</button>

        {enviado ? (
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
        ) : (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{ color: COR.verdeClaro, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>FALE COM A GENTE</div>
              <h2 style={{ color: COR.branco, fontSize: 22, fontWeight: 800, margin: 0, fontFamily: "'Inter', sans-serif" }}>Entre em contato</h2>
              <p style={{ color: COR.brancoOp60, fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>
                Preencha o formulário e nossa equipe entrará em contato em breve.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                    style={{
                      ...CAMPO_BASE,
                      borderColor: focado === c.name ? COR.verdeClaro : COR.fundoBorda,
                    }}
                  />
                </div>
              ))}

              <button
                type="submit"
                style={{ background: COR.verde, color: COR.branco, border: "none", borderRadius: 8, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.target.style.opacity = "0.88"}
                onMouseLeave={e => e.target.style.opacity = "1"}
              >
                Enviar mensagem
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

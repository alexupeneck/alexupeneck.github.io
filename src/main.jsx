import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SobreNos from "./pages/SobreNos";
import Privacidade from "./pages/Privacidade";
import TermosDeUso from "./pages/TermosDeUso";
import VigiaSafraPage from "./pages/VigiaSafra";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/vigiasafra" element={<VigiaSafraPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// App entry point with providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutCibercidadaos from "./pages/AboutCibercidadaos";
import Governance from "./pages/Governance";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Publications from "./pages/Publications";
import Data from "./pages/Data";
import Contact from "./pages/Contact";
import BecomeMember from "./pages/BecomeMember";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Sobre */}
            <Route path="/sobre" element={<Navigate to="/sobre/cibercidadaos" replace />} />
            <Route path="/sobre/cibercidadaos" element={<AboutCibercidadaos />} />
            <Route path="/sobre/governanca" element={<Governance />} />
            
            {/* Actividades */}
            <Route path="/actividades" element={<Activities />} />
            <Route path="/actividades/:id" element={<ActivityDetail />} />
            
            {/* Dados */}
            <Route path="/dados" element={<Data />} />
            
            {/* Publicações */}
            <Route path="/publicacoes" element={<Publications />} />
            
            {/* Contacto */}
            <Route path="/contacto" element={<Contact />} />
            
            {/* Membro */}
            <Route path="/membro" element={<BecomeMember />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

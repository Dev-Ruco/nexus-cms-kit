// App entry point with providers
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
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
import Press from "./pages/Press";
import Login from "./pages/auth/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Auth */}
              <Route path="/auth/login" element={<Login />} />
              
              {/* Sobre */}
              <Route path="/sobre" element={<Navigate to="/sobre/cibercidadaos" replace />} />
              <Route path="/sobre/cibercidadaos" element={<AboutCibercidadaos />} />
              <Route path="/sobre/governanca" element={<Governance />} />
              
              {/* Actividades */}
              <Route path="/actividades" element={<Activities />} />
              <Route path="/actividades/:id" element={<ActivityDetail />} />
              
              {/* Imprensa */}
              <Route path="/imprensa" element={<Press />} />
              
              {/* Dados */}
              <Route path="/dados" element={<Data />} />
              
              {/* Publicações */}
              <Route path="/publicacoes" element={<Publications />} />
              
              {/* Contacto */}
              <Route path="/contacto" element={<Contact />} />
              
              {/* Membro */}
              <Route path="/membro" element={<BecomeMember />} />
              
              {/* Admin Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute requiredRole={['admin', 'editor', 'moderator']}>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Dashboard />} />
                {/* Placeholders for other admin pages */}
                <Route path="activities" element={<Dashboard />} />
                <Route path="events" element={<Dashboard />} />
                <Route path="publications" element={<Dashboard />} />
                <Route path="gallery" element={<Dashboard />} />
                <Route path="videos" element={<Dashboard />} />
                <Route path="team" element={<Dashboard />} />
                <Route path="partners" element={<Dashboard />} />
                <Route path="members" element={<Dashboard />} />
                <Route path="payments" element={<Dashboard />} />
                <Route path="data" element={<Dashboard />} />
                <Route path="settings" element={<Dashboard />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

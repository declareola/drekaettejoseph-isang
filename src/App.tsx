import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Organizations from "./pages/Organizations";
import Training from "./pages/Training";
import Coaching from "./pages/Coaching";
import Framework from "./pages/Framework";
import Blog from "./pages/Blog";
import RetailVenture from "./pages/RetailVenture";
import RiteBridge from "./pages/RiteBridge";
import ChampionsCoaching from "./pages/ChampionsCoaching";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/training" element={<Training />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/retail-venture" element={<RetailVenture />} />
          <Route path="/ritebridge" element={<RiteBridge />} />
          <Route path="/champions-coaching" element={<ChampionsCoaching />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

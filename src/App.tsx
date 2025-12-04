
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import CategoryBags from "./pages/CategoryBags";
import CategoryKids from "./pages/CategoryKids";
import CategoryJewelry from "./pages/CategoryJewelry";
import CategoryLingerie from "./pages/CategoryLingerie";
import CategoryMen from "./pages/CategoryMen";
import CategoryWomen from "./pages/CategoryWomen";
import Vitrine from "./pages/Vitrine";
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
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/bolsas" element={<CategoryBags />} />
          <Route path="/produtos/infantil" element={<CategoryKids />} />
          <Route path="/produtos/joias" element={<CategoryJewelry />} />
          <Route path="/produtos/lingerie" element={<CategoryLingerie />} />
          <Route path="/produtos/masculino" element={<CategoryMen />} />
          <Route path="/produtos/feminino" element={<CategoryWomen />} />
          <Route path="/vitrine" element={<Vitrine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

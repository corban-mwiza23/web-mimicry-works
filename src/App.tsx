
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Certificates from "./pages/Certificates";
import ControlSystems from "./pages/products/ControlSystems";
import EnergySolutions from "./pages/products/EnergySolutions";
import About from "./pages/About";
import History from "./pages/History";
import Organization from "./pages/Organization";
import Contact from "./pages/Contact";

// Import remaining placeholder components
const Message = () => <div>CEO Message Page - Coming Soon</div>;
const Certifications = () => <div>Certifications Page - Coming Soon</div>;
const Partners = () => <div>Partners Page - Coming Soon</div>;
const Products = () => <div>Products Page - Coming Soon</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* About Us Section */}
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/message" element={<Message />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/partners" element={<Partners />} />
            
            {/* Products Section */}
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products/control-systems" element={<ControlSystems />} />
            <Route path="/products/energy-solutions" element={<EnergySolutions />} />
            
            {/* Main Pages */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

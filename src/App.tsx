import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Assistant from "./components/Assistant";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Developers from "./pages/Developers";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import InfoPage from "./pages/InfoPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />
            <Route path="/company/:slug" element={<InfoPage kind="company" />} />
            <Route path="/resources/:slug" element={<InfoPage kind="resources" />} />
            <Route path="/legal/:slug" element={<InfoPage kind="legal" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Assistant />
      </div>
    </BrowserRouter>
  );
}
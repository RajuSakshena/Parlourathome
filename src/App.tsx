import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import OffersSection from "./components/OffersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import KnowMoreSection from "./components/KnowMoreSection";
import Footer from "./components/Footer";

import FacialServices from "./components/FacialServices";
import MakeupServices from "./components/MakeupServices";
import WaxingServices from "./components/WaxingServices";
import ManiPediServices from "./components/ManiPediServices";
import HairServices from "./components/HairServices";
import MassageServices from "./components/MassageServices";
import PreBridalServices from "./components/PreBridalServices";
import PackageServices from "./components/PackageServices";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <OffersSection />
      <TestimonialsSection />
      <KnowMoreSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Service Pages */}
            <Route path="/services/facial" element={<FacialServices />} />
            <Route path="/services/makeup" element={<MakeupServices />} />
            <Route path="/services/waxing" element={<WaxingServices />} />
            <Route path="/services/mani-pedi" element={<ManiPediServices />} />
            <Route path="/services/hair" element={<HairServices />} />
            <Route path="/services/massage" element={<MassageServices />} />
            <Route path="/services/pre-bridal" element={<PreBridalServices />} />
            <Route path="/services/packages" element={<PackageServices />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

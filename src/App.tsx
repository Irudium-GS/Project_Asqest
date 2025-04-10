import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MaintenancePage from './pages/MaintenancePage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import StructureCablingPage from './pages/services/StructureCablingPage';
import NetworkConsultingPage from './pages/services/NetworkConsultingPage';
import CCTVWifiPage from './pages/services/CCTVWifiPage';
import AnnualMaintenancePage from './pages/services/AnnualMaintenancePage';
import ACMaintenancePage from './pages/maintenance/ACMaintenancePage';
import ElectricalMaintenancePage from './pages/maintenance/ElectricalMaintenancePage';
import CommercialBuildingPage from './pages/maintenance/CommercialBuildingPage';
import PaintingServicePage from './pages/maintenance/PaintingServicePage';
import PlumbingServicePage from './pages/maintenance/PlumbingServicePage';
import WebsitePage from './pages/digital-marketing/WebsitePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/structure-cabling" element={<StructureCablingPage />} />
            <Route path="/services/network-consulting" element={<NetworkConsultingPage />} />
            <Route path="/services/cctv-wifi" element={<CCTVWifiPage />} />
            <Route path="/services/annual-maintenance" element={<AnnualMaintenancePage />} />
            <Route path="/maintenance/ac-maintenance" element={<ACMaintenancePage />} />
            <Route path="/maintenance/electrical-maintenance" element={<ElectricalMaintenancePage />} />
            <Route path="/maintenance/commercial-building" element={<CommercialBuildingPage />} />
            <Route path="/maintenance/painting-service" element={<PaintingServicePage />} />
            <Route path="/maintenance/plumbing-service" element={<PlumbingServicePage />} />
            <Route path="/digital-marketing/website" element={<WebsitePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
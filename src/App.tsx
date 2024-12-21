import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Houses from './pages/Houses';
import HouseDetail from './pages/HouseDetail';
import Activities from './pages/Activities';
import Photos from './pages/Photos';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className={`flex-grow ${!isHome ? 'pt-8' : ''}`}>
      {children}
    </main>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/las-casas" element={<PageWrapper><Houses /></PageWrapper>} />
            <Route path="/las-casas/:id" element={<PageWrapper><HouseDetail /></PageWrapper>} />
            <Route path="/que-hacer" element={<PageWrapper><Activities /></PageWrapper>} />
            <Route path="/fotografias" element={<PageWrapper><Photos /></PageWrapper>} />
            <Route path="/reservas" element={<PageWrapper><Booking /></PageWrapper>} />
            <Route path="/contacto" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
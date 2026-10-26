import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Talent from './pages/Talent';
import TalentDetail from './pages/TalentDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Hospitality from './pages/Hospitality';
import Comunicacion from './pages/Comunicacion';
import Legal from './pages/Legal';

// Scroll to top on forward route change while preserving scroll on refresh & browser Back/Forward
function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (navType !== 'POP') {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, navType]);
  return null;
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-white selection:text-brand-bg">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/talent/:id" element={<TalentDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/comunicacion" element={<Comunicacion />} />
              <Route path="/hospitality" element={<Hospitality />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Legal />} />
              <Route path="/terms" element={<Legal />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

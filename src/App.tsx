import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Eventos from './pages/Eventos';
import EventDetail from './pages/EventDetail';
import Associado from './pages/Associado';
import Contato from './pages/Contato';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rankings" element={<Rankings />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/evento/:id" element={<EventDetail />} />
              <Route path="/associado" element={<Associado />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
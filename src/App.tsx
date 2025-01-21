import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import Equipe from './pages/Equipe';
import Expertises from './pages/Expertises';
import Contact from './pages/Contact';
import DroitCommercial from './pages/expertises/DroitCommercial';
import DroitSocietes from './pages/expertises/DroitSocietes';
import DroitNumerique from './pages/expertises/DroitNumerique';
import DroitConsommation from './pages/expertises/DroitConsommation';
import DroitConstruction from './pages/expertises/DroitConstruction';
import ModesAlternatifs from './pages/expertises/ModesAlternatifs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/expertises/droit-commercial" element={<DroitCommercial />} />
          <Route path="/expertises/droit-societes" element={<DroitSocietes />} />
          <Route path="/expertises/droit-numerique" element={<DroitNumerique />} />
          <Route path="/expertises/droit-consommation" element={<DroitConsommation />} />
          <Route path="/expertises/droit-construction" element={<DroitConstruction />} />
          <Route path="/expertises/modes-alternatifs" element={<ModesAlternatifs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
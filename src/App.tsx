import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import Equipe from './pages/Equipe';
import Expertises from './pages/Expertises';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Authorisation from './pages/Authorisation';
import MovieInformation from './pages/MovieInformation';

import ThemeProvider from './prodivers/themeContext';

function App() {

  return (
    <div className="container">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <section className="maincontent">
        <div className="page-container">
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Authorisation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

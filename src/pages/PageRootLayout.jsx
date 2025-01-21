import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export function PageRootLayout() {
  return (
    <div className="container">
      <Header />
      <section className="maincontent">
        <div className="page-container">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}

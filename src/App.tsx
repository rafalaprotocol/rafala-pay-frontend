import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Merchant from './pages/Merchant';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Privacy from './pages/Privacy';
import Compliance from './pages/Compliance';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchant" element={<Merchant />} />
            <Route path="/pay/:id" element={<Pay />} />
            <Route path="/success" element={<Success />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/compliance" element={<Compliance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu'; 
import './App.css';
import Carrossel from './Carrossel'; 
import Contato from './Contato';
import Reservas from './Reservas';
import Sobre from './Sobre'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mezzanotte</h1>
        <p className="subtitle">Ristorante Italiano</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservas">Reservas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={
            <section className="hero">
              {/* Container para fundir a frase com a imagem */}
              <div className="hero-carrossel-wrapper">
                <div className="destaques-carrossel">
                  <Carrossel />
                </div>
                
                {/* A frase agora flutua sobre o carrossel */}
                <div className="hero-text-overlay">
                  <h2>Gastronomia sob a luz do luar</h2>
                </div>
              </div>

              <Link to="/reservas">
                <button className="btn-reserva">Fazer Reserva</button>
              </Link>
            </section>
          } />
          
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Ristorante Mezzanotte. Todos os direitos reservados.</p>
        <p>Telefone para contato: 11 98184-9141</p> 
      </footer>
    </div>
  );
}

export default App;